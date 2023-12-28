import React, {useState,useEffect}from 'react'
import {utils} from 'web3';
export default function Payment(props) {
  const [temp, setTemp] = useState('');
  

  async function callContract(){
    let valueToSend = utils.toWei('20', 'ether');
    let data = await props.contract.sendViaSend("0xBF83E3F40dDd44dB6C81737dEA1f7f1f51F511b9", { value: valueToSend })
    // console.log(data);
  }

  return (
    <div className="App">
        <button onClick={callContract}>AddBattery</button>
        

    </div>
  );
}
