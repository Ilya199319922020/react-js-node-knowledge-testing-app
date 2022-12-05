import styles from '../../styles/Test.module.css';

export const TestRadio = ({ id, problem, options, onChange }) => {
	return (
		<>
			<div
				className={styles.testradio}
			>
				<span
					className={styles.testradio__item}
				>
					{id}.
				</span> <span
					className={styles.testradio__problem}
				>
					{problem}
				</span>
			</div>
			<div
				className={styles.testradio__input}
			>
				{
					options.length && options
						.map((r, idx) => <div
							className={styles.testradio__block}
							key={r.option_id}
						>
							<input
								className={styles.testradio__block_radio}
								type={'radio'}
								value={idx + 1}
								id={id}
								checked={r.isCheked}
								onChange={onChange}
							/>
							{r.name}
						</div>
						)
				}
			</div>
		</>
	);
};