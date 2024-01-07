// src/CryptoConverter.js
import React, { useState } from 'react';

const CryptoConverter = () => {
    const [cryptoAmount, setCryptoAmount] = useState(0);
    const [convertedAmount, setConvertedAmount] = useState(0);

    const handleCryptoChange = (e) => {
        setCryptoAmount(e.target.value);
    };

    const convertCrypto = () => {
        // Implement your conversion logic here
        // For example, you can call an API to get the latest conversion rates
        // and update the state with the converted amount
    };

    return (
        <div>
            <h2>Crypto Converter</h2>
            <label>
                Enter Crypto Amount:
                <input type="number" value={cryptoAmount} onChange={handleCryptoChange} />
            </label>
            <button onClick={convertCrypto}>Convert</button>
            <p>Converted Amount: {convertedAmount}</p>
        </div>
    );
};

export default CryptoConverter;
