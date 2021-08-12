import Image from 'next/image'

import styles from '../styles/Footer.module.css'

import ICO from '../public/android-chrome-512x512.png'

const Footer = () =>
{

	return (
		<footer className={styles.container}>
			<div className={styles.footnote}>
				<p>This project is for educational purpose only</p>
				<h6>Please enjoy and have a beautiful time!</h6>
			</div>
			<div className={styles.wrapperLogo}>
				<Image src={ICO} width="128" height="128" alt="Footer NMT Logo" className={styles.logo}/>
				<h1 className={styles.name}>NMT</h1>
			</div>
			{/*<div className={styles.credits}>
				<ul>
					<li>
						NODE-JS
					</li>
					<li>
						NEXTJS
					</li>
				</ul>
			</div>*/}
		</footer>
	)
}

export default Footer