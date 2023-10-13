import React from 'react'
import LeftDiv from './LeftDiv'
import "./transaction.css"
import noTransaction from './no-transactions.svg'

const Transactions = () => {
  return (
<div className='mainDev'> 
       <LeftDiv/>
     
        
      <div className='Rightdev1'>
        <div className='mainTransactonDiv'>

        <div className='Heading'>
        <div className='transHeading'>Transaction History</div>
       <div className='transPra'>Transaction History only shows Deposit and Withdraw transactions from the Bridge.</div>
        </div>

       <div className='allTransaction'>
        <div className='TransHeader'>
        <p>Pending</p> <p>All Transactions</p>
        </div>
        <div className='TransImageBox'>
            <img src={noTransaction}/>
            <p>No transaction</p>
        </div>
       </div>
       </div>
         
          
       
      </div> 
      </div>   
      
  )
}

export default Transactions