import { useState, useContext } from 'react';
import Router from 'next/router';

import Wallet from '../Wallet';
import Transaction from '../Transaction';

const Form = () => 
{
  if ( !( typeof ( window ) === 'undefined' ) )
  {
  	const [ myAddr, setMyAddr ] = useState( window.$myWallet.address )
  	const [ toAddr, setToAddr ] = useState( '' )
  	const [ txAmount, setTxAmount ] = useState( '' )
  	
  	function handleSubmit(e)
  	{
		e.preventDefault();
		const tx = new Transaction( window.$myWallet.address, toAddr, txAmount )
		tx.signTransaction( window.$myWallet.keys )
		window.$NMT.addTransaction( tx )

		if( window.$NMT.pendingTransactions[ window.$NMT.pendingTransactions.length - 1 ] === tx )
		{
			e.target.reset();
			console.log( JSON.stringify( window.$NMT.pendingTransactions ) )
		}
  	}
  	function setMyWalletAddress(e)
  	{
  		e.target.value = window.$myWallet.address
  	}

	return (
	    <form onSubmit={handleSubmit.bind(this)}>
	    	<h4>From:</h4>
			{/*<input type="text" name="fromAddress" value={window.$myWallet.address} readOnly />*/}
			<input type="text" name="fromAddress" placeholder="Your wallet address" onClick={e => { setMyWalletAddress(e)}} onChange={e => setMyAddr(e.target.value)} />
			<h4>To:</h4>
			<input type="text" name="toAddress" placeholder="Receiving address" onChange={e => setToAddr(e.target.value)} />
			<h4>Amount:</h4>
			<input type="text" name="amount" placeholder="100.00000000" onChange={e => setTxAmount(e.target.value)} />
			
			<button type="submit" value="send">
				Transfer
			</button>
	    </form>
	);
  }
  else return <p>Error</p>
};

export default Form;
