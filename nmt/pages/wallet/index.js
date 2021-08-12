import { useContext } from 'react';
import UserContext from '../../components/context/User';

import QRCode from 'qrcode'

import Keypair from '../../components/Keypair'
import Wallet from '../../components/Wallet'

const displayWallet = () =>
{

	if ( typeof ( window ) !== 'undefined' ) 
	{
		//const pK = Uint8Array.from( JSON.parse( localStorage.getItem( 'pk' ) ).data )
		// const myWallet = new Wallet( new Keypair( pK ) )
		const qr = () =>
		{
			// With promises
			QRCode.toCanvase(document.getElementById( '__std' ), window.$myWallet.address, function ( error) 
			{
				if ( error ) console.log( error )
				console.log( 'success')
			})
		}

		return (
			<>
				<div>
					<h1>myWallet</h1>
					<h4>{window.$myWallet.address}</h4>
					<div>
						<h2>BALANCE</h2>
						<p>{window.$NMT.getBalance( window.$myWallet.address )}</p>
					</div>
				</div>
				<div>
					<table></table>
				</div>
			</>
		)
	}
	else
	{
		return (
			<p>error</p>
		)
	}
}

export default displayWallet

 
// // With promises
// QRCode.toDataURL('I am a pony!')
//   .then(url => {
//     console.log(url)
//   })
//   .catch(err => {
//     console.error(err)
//   })
 
// // With async/await
// const generateQR = async text => {
//   try {
//     console.log(await QRCode.toDataURL(text))
//   } catch (err) {
//     console.error(err)
//   }
// }