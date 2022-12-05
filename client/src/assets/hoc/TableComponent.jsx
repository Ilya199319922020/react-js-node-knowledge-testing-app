import React from 'react';
import { useSelector } from 'react-redux';
import style from '../../styles/TableComponent.module.css';

const TableComponent = ({ }) => {
	const { resultUserTest } = useSelector(state => state.resultUserTest);

	const rightAnswers = resultUserTest.length && resultUserTest
		.map(s => s === true
			? <td key={s}>{1}</td>
			: <td key={s}>{0}</td>
		);

	const wrongAnswers = resultUserTest.length && resultUserTest.map(s => s === true
		? <td key={s}>{0}</td>
		: <td key={s}>{1}</td>
	);

	return (
		<div
			className={style.container}
		>
			<h4>
				Количество тестрируемых
			</h4>
			<table
				className={style.container__table}>
				<tr
					className={style.tablecontainer__header}
				>
					<th>Вопрос</th>
					<th>Правильно</th>
					<th>Неправильно</th>
				</tr>
				<tr
					className={style.tablecontainer__main}
				>
					<td
						className={style.tablecontainer__main_column}
					>
						<div
							className={style.tablecontainer__main_columnItem}
						>
							<td>1</td>
							<td>2</td>
							<td>3</td>
							<td>4</td>
							<td>5</td>
						</div>
					</td>
					<td
						className={style.tablecontainer__main_column}
					>
						<div
							className={style.tablecontainer__main_columnItem}
						>
							{
								rightAnswers
							}
						</div>
					</td>
					<td
						className={style.tablecontainer__main_column}
					>
						<div
							className={style.tablecontainer__main_columnItem}
						>
							{
								wrongAnswers
							}
						</div>
					</td>
				</tr>
			</table>
			<div
				className={style.container__item}
			>
				<button
					className={style.container__item_btn}
				>
					Закрыть отчёт
				</button>
			</div>
		</div >
	);
};

export default TableComponent;