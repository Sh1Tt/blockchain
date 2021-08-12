import styles from  '../styles/block.module.css'
const Representation = ({ block, height, clickFunc }) =>
{
	return (
		<div className={styles.card} key={height} data-blockheight={height} onClick={clickFunc}>
			<h4 className={styles.header}>
				BLOCK { height + 1 }
				<span>{ ( height === 0 ? ' (Genesis block)' : '' ) }
					<span className={styles.height}>
						Height: 
						<span>{height}</span>					
					</span>
				</span>
			</h4>
			<p className={styles.hash}>
				Hash: 
				<span>
					{block.hash}
				</span>
				Hash of previous block: 
				<span>
					{block.previousHash}
				</span>
			</p>
			<p className={styles.prop}>
				Nonce: 
				<span>{block.nonce}</span>
			</p>
			<p className={styles.prop}>
				Timestamp:
				<span>{block.timestamp}</span>
			</p>
		</div>
	)
}
export default Representation