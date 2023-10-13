import React from 'react'
import { Link } from 'react-router-dom'
import walletIcon from "./wallet.svg"
import BridgeIcon from "./bridge.svg"
import NestedIcon from './nested.svg'
import testnet from "./testnet.svg"
import shaild from "./shield.svg"
import "./leftdiv.css"
import imageIcon from "./619537c0-2ff3-4c78-9ed8-a05e7567f300.webp"

const LeftDiv = () => {
  return (
    <div className='leftDev'>
    <ul>
  
      
        <li> <img src={walletIcon}/><Link to={"/"} className='linkstyle'>Wallet</Link></li>
        <li> <img src={BridgeIcon}/><Link to={"Bridge"} className='linkstyle'>Bridge </Link></li>
        <li> <img src={NestedIcon}/><Link to={"Transactions"} className='linkstyle'> Transactions</Link> </li>
        
    </ul>
    <div className='secondList'>
    <ul>
        <li className='networkLi'> <img src={imageIcon} className='iamgeIcon'/> Add Network to Wallet</li>
        <li> <img src={testnet}/> Try Mainnet </li>
        <li> <img src={shaild}/> Support </li>
    </ul>

    </div>
    </div>  
  )
}

export default LeftDiv