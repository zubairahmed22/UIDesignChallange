import React from 'react'

const Item = ({image,Ptext,Stext}) => {
  return (
    <div className='item'>
    <div className='logoIcon'>
      <div className='imageClass'>
      <img src={image}/>
      </div>
      <div className='classtext'>
        <p>{Ptext}<span>{Stext}</span></p>
      </div>
    </div>
    <div className='numberText'>
      <p>0.00.<span>$0.00</span></p>
    </div>
    <div className='buttonContainer'>
    <button>Bridge</button>
    <button>Send</button>

  </div>
  </div>
  )
}

export default Item