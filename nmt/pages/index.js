import { useState, useContext } from 'react'
import Head from 'next/head'
import Image from 'next/image'

// import Cookies from '../components/Cookies'

import TS from '../components/Timestamp'
import Block from '../components/Block'
import Blockchain from '../components/Blockchain'
import Transaction from '../components/Transaction'

import Keypair from '../components/Keypair'
import Wallet from '../components/Wallet'

import Representation from '../components/Representation'
import TransactionView from '../components/TransactionView'

import styles from '../styles/Home.module.css'


export default function Home()
{
  if ( !( typeof ( window ) === 'undefined' ) )
  {
    // const cookies = new Cookies()
    // if ( !cookies.isSet( 'myWalletAddress', document.cookie ) )
    // {
    //   cookies.Set( 'myWalletAddress', JSON.stringify( new Keypair().generatePrivateKey() ), 15, 'strict', true )
    // }
    // const pk = new Keypair( Uint8Array.from( ( JSON.parse( cookies.getByName( 'myWalletAddress', document.cookie ) ) ).data ) )
    
    // const pk = new Keypair( Uint8Array.from( ( JSON.parse( localStorage.getItem( 'pk' ) ) ).data ) )
    // const pk = new Keypair( Uint8Array.from( ( JSON.parse( JSON.stringify( new Keypair().generatePrivateKey() ) ) ).data ) )
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
    
    const viewBlockTransactions = e => { 
        let t = e.target
        do {
          t = t.parentNode                    
        }
        while ( !t.hasAttribute( `data-blockheight` ) )
        selectBlock( window.$NMT.chain[ t.getAttribute( `data-blockheight` ) ] ) 
    }

    const [ selectedBlock, selectBlock ] = useState( window.$NMT.chain[ 0 ] )
    
    return (
      <>
        <Head>
          <title>NMT | Home</title>
          <meta name="description" content="Blockchain technologies in js exploration." />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <header>
          <h2>Blocks on the chain</h2>
          <p>A visual representation of the blocks and their data.</p>
        </header>
        <div className={styles.blockchain}>
          {window.$NMT.chain.map( ( block, i ) => ( 
            <Representation 
              block={ block } 
              height={ i } 
              clickFunc={ viewBlockTransactions }
            /> 
          ) )}
        </div>
        <TransactionView block={selectedBlock} />
      </>
    )
  }
  else return <span> error </span>
}
