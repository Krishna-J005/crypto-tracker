import React from "react";
import CryptoDataTable from "./CryptoDataTable";
const Home = () => (
    <div>
        <div style={{fontSize: '20px', fontWeight: 'bold' , width:'96%', margin:'1rem auto'}}>Welcome to the Crypto Tracker!</div>
        <CryptoDataTable/>
    </div>
);

export default Home;