import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import React, { Component } from 'react';
function App() {


  const EthCrypto = require('eth-crypto');
  const [inputs, setInputs] = useState({});
  const [Decoded, setDecoded] = useState("");
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
  async function decrypt(value,key){
    const newval = EthCrypto.cipher.parse(value);
    const decrypted = await EthCrypto.decryptWithPrivateKey(
      key,
      newval);
      return decrypted;
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    decrypt(inputs["enc"],inputs["add"]).then(value=>{setDecoded(value)});
    console.log(Decoded);
    }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <style dangerouslySetInnerHTML={{__html: "\n        #d,#d1{\n            float: left;\n            margin-top: -1;\n            padding: 0;\n            margin-left: 35%;\n        }\n        #e{\n            font-size: 40px;\n            height: 20%;\n            margin-top: 0;\n            padding: 0;\n            padding-top: 0px;\n            width: 100%;\n            background-color: aqua;\n            text-align: center;\n        }\n        #t{\n            width: 40%;\n        }\n        #d,#d1{\n            margin-top: 5%;\n            flex-direction: row;\n            display: flex;\n        }\n        textarea{\n            resize: none;\n        }\n        button{\n            margin-top: 21%;\n            height: 40px;\n            width: 25%;\n            margin-left: -25%;\n            border-radius: 10px;\n            font-size: 20px;\n            border: none;\n            background-color: coral;\n        }\n        button:hover{\n            background-color: rgb(247, 98, 44);\n        }\n\n    " }} />
        <div id="heading">
          <p id="e">Decentralized Email</p>
        </div>
        <div id="d">
          <p id="t">Encrypted_message: </p>
          <textarea name="enc" id="enc" cols={30} rows={3} value={inputs.enc || ""} onChange={handleChange} />
        </div>
        <div id="d1">
          <p id="t" style={{marginLeft:"32px"}}>Private_Key: </p>
          <textarea name="add" id="enc" cols={30} rows={3} value={inputs.add || ""} onChange={handleChange}/>
        </div>
        
        <button type="submit">Submit</button>
        <br /><br />
        <p style={{marginLeft:"48%"}}> {Decoded} </p>
      </div>
  </form>
  )
}

export default App;
