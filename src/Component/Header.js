import React from 'react'
import polygon from './polygon.svg'
import zkicon from "./zkEVM.svg"
import image from "./619537c0-2ff3-4c78-9ed8-a05e7567f300.webp"
import "./header.css"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export const Header = () => {
  return (
    <div className='header'>
        <div className='logo'>
         <img src={polygon}/>
         <p className='bridgeText'>zkEVM Bridge<span className='Beta'>Beta</span></p>
        </div>
        <div className='leftBoxHeader'>
        <div className='polygon'>
         <button> <img src={zkicon}/> Polygon zkEVM <KeyboardArrowDownIcon sx={{color:'#061024;', marginLeft: "5px", fontSize: "25px"}}/>
         </button>
        </div>

        <div className='polygon'>
         <button> <img src={image} className='imageIcon'/> 0x74...8c8b <KeyboardArrowDownIcon sx={{color:'#061024;', marginLeft: "5px", fontSize: "25px"}}/>
         </button>
        </div>
        <div className='circle'>
            <button>
             <MoreHorizIcon/>
            </button>
        </div>
        </div>
    </div>
  )
}