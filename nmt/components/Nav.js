import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ICO from '../public/android-chrome-192x192.png'
import UserInfo from './UserInfo'

import styles from '../styles/Home.module.css'

const mineBlockButton = () =>
{
	return (
		<Link href="/mine">
			<a className={styles.button}>Mine pending transactions</a>
		</Link>
	)
}

const ifWindow = () =>
{
	if ( !( typeof ( window ) === 'undefined' ) ) 
	{
		return ( window.$NMT.pendingTransactions.length >= 3 ? mineBlockButton() : '' )
	}
}

// const Nav = ({ parentToChild, childToParent }) =>
const Nav = () =>
{
	const [ hasPending, checkPending ] = useState( false )
	
	return (
		<nav className={styles.navbar}>
			<div className={styles.logo}>
				<Link href="/">
					<a className={styles.logoimg}>
						<Image src={ICO} width="38" height="38" alt="NMT Logo" />
					</a>
				</Link>
				<Link href="/">
					<a>
						<h2 className={styles.logotext}>NATURAL MYSTIC TOKEN</h2>
					</a>
				</Link>
			</div>
			<div className={styles.menu}>
				<div className={styles.user}>
					<UserInfo />
				</div>
				{ifWindow()}
	
				<Link href="/settings">
					<a className={styles.button}>Settings</a>
				</Link>
				<Link href="/transaction">
					<a className={styles.button}>Transaction</a>
				</Link>
			</div>
		</nav>
	)
}
export default Nav