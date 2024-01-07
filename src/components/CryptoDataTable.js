// CryptoDataTable.js
import React, { useState, useEffect } from 'react';
import './CryptoDataTable.css';

const CryptoDataTable = () => {
    const [cryptoData, setCryptoData] = useState([]);
    const [sortOrder, setSortOrder] = useState({
        column: 'price',
        direction: 'desc',
    });

    useEffect(() => {
        // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint
        setTimeout(() => {
            let arr = [
                {
                    cryptoName: "Bitcoin",
                    cryptoId: "BTC",
                    price: 44024,
                    logo: "https://assets.coingecko.com/coins/images/1/standard/bitcoin.png?1696501400",
                    netChange24h: 120,
                    netChange7d: -500,

                },
                {
                    cryptoName: "Ethereum",
                    cryptoId: "ETH",
                    price: 4402,
                    logo: "https://assets.coingecko.com/coins/images/279/standard/ethereum.png?1696501628",
                    netChange24h: 120,
                    netChange7d: 50,

                },
                {
                    cryptoName: "DogeCoin",
                    cryptoId: "DOGE",
                    price: 440,
                    logo: "https://assets.coingecko.com/coins/images/5/standard/dogecoin.png?1696501409",
                    netChange24h: 12,
                    netChange7d: 100,

                },
                {
                    cryptoName: "Shiba Inu",
                    cryptoId: "SHIB",
                    price: 0.0054,
                    logo: "https://assets.coingecko.com/coins/images/11939/standard/shiba.png?1696511800",
                    netChange24h: 0.0,
                    netChange7d: -0.00500,

                },
                {
                    cryptoName: "BNB",
                    cryptoId: "BNB",
                    price: 308.28,
                    logo: "https://assets.coingecko.com/coins/images/825/standard/bnb-icon2_2x.png?1696501970",
                    netChange24h: -12,
                    netChange7d: -20,

                },
            ]
            setCryptoData(arr);
        }, 100)
    }, []);

    const handleSort = (column) => {
        setSortOrder((prevSortOrder) => ({
            column,
            direction: prevSortOrder.direction === 'asc' ? 'desc' : 'asc',
        }));
    };

    const sortedCryptoData = [...cryptoData].sort((a, b) => {
        const compareResult =
            a[sortOrder.column] > b[sortOrder.column] ? 1 : -1;

        return sortOrder.direction === 'asc' ? compareResult : -compareResult;
    });

    return (
        <div className="crypto-table">
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th class="sortable" onClick={() => handleSort('cryptoName')}>Coin </th>
                        <th class="sortable"  onClick={() => handleSort('price')}>Price</th>
                        <th class="sortable"  onClick={() => handleSort('netChange24h')}>
                            Net Change (24h)
                        </th>
                        <th class="sortable"  onClick={() => handleSort('netChange7d')}>
                            Net Change (7d)
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {sortedCryptoData.map((crypto, index) => (
                        <tr key={crypto.cryptoId}>
                            <td>{index+1}</td>
                            <td>
                                <div className='middle'>
                                    {crypto.cryptoName}
                                    <img loading="lazy" style={{marginLeft: '8px'}} src={crypto.logo} alt={`${crypto.cryptoName} Logo`} width="24px"></img>
                                </div>
                            </td>
                            <td className='numberAlignment'>
                                ${crypto.price.toFixed(5)}
                            </td>
                            <td
                                className={
                                    `numberAlignment ${crypto.netChange24h >= 0 ? 'positive' : 'negative'}`
                                }
                            >
                                ${crypto.netChange24h.toFixed(5)}
                            </td>
                            <td
                                className={
                                    `numberAlignment ${crypto.netChange7d >= 0 ? 'positive' : 'negative'}`
                                }
                            >
                                ${crypto.netChange7d.toFixed(5)}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CryptoDataTable;
