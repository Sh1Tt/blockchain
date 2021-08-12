import styles from '../styles/Transactions.module.css'
function TransactionView({ block })
{
	const { transactions } = block
	return (
		<div className={styles.container}>
			<h2>Transactions in block:</h2>
			<table className={styles.table}>
				<thead>
					<tr className={styles.row}>
						<th className={styles.colno}>
							#
						</th>
						<th className={styles.colcred}>
							From
						</th>
						<th className={styles.colcred}>
							To
						</th>
						<th className={styles.colv}>
							Amount
						</th>
						<th className={styles.colv}>
							Timestamp
						</th>
						<th className={styles.colv}>
							Verified
						</th>
					</tr>
				</thead>
				<tbody>
				{
					block.transactions.map( ( t, i ) => 
					{ 
						const { fromAddress, toAddress, amount, timestamp } = t
						return (
							<tr className={styles.row}>
								<td className={styles.colno}>
									{i}
								</td>
								<td className={styles.colcred}>
									{fromAddress}
								</td>
								<td className={styles.colcred}>
									{toAddress}
								</td>
								<td className={styles.colv}>
									{amount}
								</td>
								<td className={styles.colv}>
									{timestamp}
								</td>
								<td className={styles.colv}>
									
								</td>
							</tr>
						)
					})
				}
				</tbody>
			</table>	
		</div>
	)
}
export default TransactionView