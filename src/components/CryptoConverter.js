import React, { useEffect, useState } from 'react';
import './CryptoConverter.css'
const defaultOptions = [
    {
        "id": "bitcoin",
        "symbol": "btc",
        "name": "Bitcoin"
    },
    {
        "id": "ethereum",
        "symbol": "eth",
        "name": "Ethereum"
    },
    {
        "id": "shiba",
        "symbol": "shiba",
        "name": "Shiba"
    },
    {
        "id": "buff-doge-coin",
        "symbol": "dogecoin",
        "name": "Buff Doge Coin"
    },
]
const CryptoConverter = () => {
    const [fromCrypto, SetFromCrypto] = useState("");
    const [toCrypto, SetToCrypto] = useState("");
    const [cryptoAmount, setCryptoAmount] = useState(0);
    const [convertedAmount, setConvertedAmount] = useState(null);
    const [options, setOptions] = useState([]);

    const getCryptoData = async () => {
        try {
            const response = await fetch(`https://api.coingecko.com/api/v3/list`);
            const data = await response.json();
            if(Array.isArray(data)) setOptions(data)
            else{
                setOptions(defaultOptions);
            }
        } catch (error) {
            console.error('Error converting crypto:', error.message);
            setOptions(defaultOptions);
            return null;
        }
    }
    useEffect(() => {
        getCryptoData();
    }, [])
    const handleCryptoChange = (e) => {
        setCryptoAmount(e.target.value);
    };

    const onKeyDown = (e) => {
        if (e.key === '-') {
            e.preventDefault();
        }
    };

    const handleCryptoSelect = (key, value) => {
        if (key === 'fromCrypto') {
            SetFromCrypto(value);
        }
        else {
            SetToCrypto(value);
        }
    };

    const checkDisabled = () => {
        return fromCrypto === "" || toCrypto === "" || cryptoAmount === 0;
    }
    const disabled = checkDisabled();

    const convertCrypto = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${fromCrypto},${toCrypto}&vs_currencies=usd`);
            const data = await response.json();
            if (!data[fromCrypto] || !data[toCrypto]) {
                throw new Error('Invalid cryptocurrency symbols');
            }
            const fromCryptoRate = data[fromCrypto].usd;
            const toCryptoRate = data[toCrypto].usd;

            const convertedValue = (cryptoAmount / fromCryptoRate) * toCryptoRate;
            setConvertedAmount(convertedValue.toFixed(5));
        } catch (error) {
            console.error('Error converting crypto:', error.message);
            return null;
        }
    };


    return (
        <div className='container'>
            <h2>Crypto Converter</h2>
            <div className='component-container'>
                <div className='input-box'>
                    <label className='label'>Select From crypto</label>
                    <select name="fromCrypto" className="select" value={fromCrypto} onChange={(e) => handleCryptoSelect(e.target.name, e.target.value)} >
                        <option value="" disabled key={0}>Select value</option>
                        {
                            options?.map((curr, index) => (
                                <option value={curr.id} key={curr.id}>{curr.name} ({curr.symbol})</option>
                            ))
                        }

                    </select>
                </div>
                <div className='input-box'>
                    <label className='label'>Enter Amount($)</label>
                    <input onKeyDown={onKeyDown}  inputMode="numeric" className="input" type="number" value={cryptoAmount} onChange={(e) => handleCryptoChange(e)} onWheel={(e) => e.preventDefault()} />
                </div>
                <div className='input-box'>
                    <label className='label'>Select To crypto</label>
                    <select name="toCrypto" className="select" value={toCrypto} onChange={(e) => handleCryptoSelect(e.target.name, e.target.value)} >
                        <option disabled value="" key={0}>Select value</option>
                        {
                            options?.map((curr, index) => (
                                <option value={curr.id} key={curr.id}>{curr.name} ({curr.symbol})</option>
                            ))
                        }

                    </select>
                </div>
                <button onClick={(e) => convertCrypto(e)} className={`button ${disabled ? 'disabled-button' : ''}`} disabled={disabled}>Convert</button>
            </div>


            <p className='label'>Converted Amount: {convertedAmount}</p>
        </div>
    );
};

export default CryptoConverter;
