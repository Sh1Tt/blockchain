import { useState } from 'react'
import Nav from '../components/Nav'

import TS from '../components/Timestamp'
import Block from '../components/Block'
import Blockchain from '../components/Blockchain'
import Transaction from '../components/Transaction'

import Keypair from '../components/Keypair'
import Wallet from '../components/Wallet'

import Footer from '../components/Footer'

import styles from '../styles/Home.module.css'

const Layout = ( { children, appToLayout } ) =>
{
    // const pk = new Keypair( Uint8Array.from( ( JSON.parse( localStorage.getItem( 'pk' ) ) ).data ) )
    
    // const myKey = pk
    // const myWallet = new Wallet( myKey )
    
    
    // const oKey = new Keypair( Uint8Array.from( ( JSON.parse( JSON.stringify( new Keypair().generatePrivateKey() ) ) ).data ) )
    // const oWallet = new Wallet( oKey )

    // const andAnoKp = JSON.stringify( new Keypair().generatePrivateKey() )
    // const andAnoKey = new Keypair( Uint8Array.from( ( JSON.parse( andAnoKp ) ).data ) )

    // const andAnoWallet = new Wallet( andAnoKey )    
    


    // let NMT = new Blockchain()
    
    // const tx = new Transaction( myWallet.address, oWallet.address, 0.00001025 )
    // tx.signTransaction( myWallet.keys )
    // NMT.addTransaction( tx )
    
    // NMT.minePendingTransactions( myWallet.address )

    // const tx1 = new Transaction( oWallet.address, andAnoWallet.address, 17.00456001 )
    // tx1.signTransaction( oWallet.keys )
    // NMT.addTransaction( tx1 )

    // const tx2 = new Transaction( myWallet.address, andAnoWallet.address, 4.20000000 )
    // tx2.signTransaction( myWallet.keys )
    // NMT.addTransaction( tx2 )

    // const tx3 = new Transaction( andAnoWallet.address, myWallet.address, 100.00000000 )
    // tx3.signTransaction( andAnoWallet.keys )
    // NMT.addTransaction( tx3 )

    // const tx4 = new Transaction( oWallet.address, andAnoWallet.address, 17.00456001 )
    // tx4.signTransaction( oWallet.keys )
    // NMT.addTransaction( tx4 )

    // NMT.minePendingTransactions( myWallet.address )
    // const tx5 = new Transaction( myWallet.address, oWallet.address, 40.00000000 )
    // tx5.signTransaction( myWallet.keys )
    // NMT.addTransaction( tx5 )

    // const tx6 = new Transaction( andAnoWallet.address, oWallet.address, 3.01754000 )
    // tx6.signTransaction( andAnoWallet.keys )
    // NMT.addTransaction( tx6 )

    // NMT.minePendingTransactions( myWallet.address )

    const [ pending, setPending ] = useState( false )
    const checkPendingTransactions = () =>
    {
    	setPending( appToLayout )
    }
    setTimeout( () => { checkPendingTransactions() }, 0 )

	// const [data, setData] = useState('');
	// const parentToChild = () =>
	// {
	// 	console.log( data )
	// 	setData("This is data from Parent Component to the Child Component.");
	// }
	// const childToParent = childData =>
	// {
	// 	console.log( childData )
	// 	setData( childData )
	// }
	// setTimeout( () => { parentToChild() }, 0 )
	return (
		<>
			{ appToLayout }
			{/*<Nav parentToChild={data} childToParent={childToParent}/>*/}
			<Nav checkPendingTransactions={pending}/>
			{ children }
			<Footer />
		</>
	)
}
export default Layout