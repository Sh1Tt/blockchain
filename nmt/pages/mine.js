import { useState } from 'react'
import sha256 from 'crypto-js/sha256'
import Link from 'next/link'
const Mine = () =>
{
	if ( !( typeof ( window) === 'undefined' ) )
	{
		if ( window.$NMT.pendingTransactions.length <= 3 )
		{
			return ( 
				<>
					<span>
						Not enought transactions for the next block yet..
					</span>
					<br />
					<Link href="/">
						<a>Back to the dashboard</a>
					</Link>
					{window.$NMT.pendingTransactions.map( transaction =>
					{
						<span>{sha256( sha256( transaction ) ).toString()}</span>
					})}
				</>
			)	
		} 
		const [ msg, setMsg ] = useState( 'idle..' )
		const currentHeight = window.$NMT.chain.length - 1 
		return (
			<div>
				<button onClick={() => { 
					setMsg( 
						( window.$NMT.minePendingTransactions( window.$myWallet.address ) ? 
							'Congrats! It seems you found the hash first!' 
							: 
							'You didn\'t get it :('
						)
					) 
				}}>
					Mine the next block
				</button>
				<span>{msg}</span>
			</div>
		)
	}
	return <strong>error</strong>
}

export default Mine