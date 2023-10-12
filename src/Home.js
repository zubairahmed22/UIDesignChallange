import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import walletIcon from "./Component/wallet.svg"
import BridgeIcon from "./Component/bridge.svg"
import NestedIcon from './Component/nested.svg'
import testnet from "./Component/testnet.svg"
import shaild from "./Component/shield.svg"
import imageIcon from "./Component/619537c0-2ff3-4c78-9ed8-a05e7567f300.webp"
import QrCodeIcon from '@mui/icons-material/QrCode';
import SendIcon from '@mui/icons-material/Send';
import infoIcon from "./Component/info.svg"
import smallicon from "./Component/small_filter.svg"
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Ether from "./Component/eth.svg"
import Item from './Component/Item'
import LeftDiv from './Component/LeftDiv'

const Home = () => {
  return (
    <div className='mainDev'> 
     <LeftDiv/>
        <div className='RightMain'>
        <div className='Rightdev'>
          <div className='firtDev'>
            <div className='textDiv'>
            <div className='ZKtext'>ZKEVM</div>
            <div className='number'>$0.00 <img src={infoIcon}/></div>
            </div>
            
            <div className='ButtonDiv1'>
                <button><QrCodeIcon sx={{fontSize:"20px"}}/>Receive</button>
                <button>Send<SendIcon sx={{fontSize:"20px"}}/></button>
            </div>
          </div>

          <div className='SecondDiv'>
           
            <div className='ButtonDiv'>
                <button className='btnFirst'>zkEVM Wiki</button>
                <button className='moveFund'>Move funds to zkEVM</button>
            </div>
          </div>
          
        
          
        </div>
        <div className='Asset'>
            <div className='LeftAssetDiv'>
             Assets
              </div>
            <div className='RightAssetDiv'>
                <div className='menuList'>
                  <img src={smallicon}/>
                   <p>Manage token list</p>
                </div>
                <div className='searchBox'>
                  <SearchRoundedIcon className='searchicon'/>
                  <input className='input' placeholder='Search'/>
                  </div>
            </div>
          </div>
          <div className='devider'>
            <div className='name'>
              Name
            </div>
            <div className='Balance'>
              Balance
            </div>
            <div className='action'>
              <div className='action1'>Actions</div>
              
            </div>
          </div>
         
          <Item
          image={Ether}
          Ptext="ETH."
          Stext="Ether"
          />
          <Item
          image={Ether}
          Ptext="ETH."
          Stext="Ether"
          />
          <Item
          image={Ether}
          Ptext="ETH."
          Stext="Ether"
          />
          <Item
          image={Ether}
          Ptext="ETH."
          Stext="Ether"
          />
          <Item
          image={Ether}
          Ptext="ETH."
          Stext="Ether"
          />
          <Item
          image={Ether}
          Ptext="ETH."
          Stext="Ether"
          />
          </div>
          
        
    </div>
  )
}

export default Home