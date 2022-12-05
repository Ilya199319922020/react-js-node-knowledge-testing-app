import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { actions, fetchAllResults } from '../../storeRedux/reducer/userReducer';
import style from '../../styles/TableComponent.module.css';
import Diagram from './Diagram/Diagram';

const TableComponent = () => {
	const { resultUserTest } = useSelector(state => state.resultUserTest);
	const { isTable } = useSelector(state => state.isTable);
	const { isDiagram } = useSelector(state => state.isDiagram);
	const { resultsAllTest } = useSelector(state => state.resultsAllTest);
	const { countUser } = useSelector(state => state.countUser);
	const { diagramData } = useSelector(state => state.diagramData);

	const dispatch = useDispatch();

	const rightAnswers = resultUserTest.length && resultUserTest
		.map((s, i) => s === true
			? <td key={i}>{1}</td>
			: <td key={i}>{0}</td>
		);

	const wrongAnswers = resultUserTest.length && resultUserTest
		.map((s, i) => s === true
			? <td key={i}>{0}</td>
			: <td key={i}>{1}</td>
		);

	const rightAnswersReport = resultsAllTest.length && resultsAllTest
		.map(r => <td key={r.id}>
			{r.right.length}
		</td>
		);

	const wrongAnswersReport = resultsAllTest.length && resultsAllTest
		.map(r => <td key={r.id}>
			{r.wrong.length}
		</td>
		);

	const onExit = (e) => {
		e.preventDefault();
		dispatch(actions.setReset());
	};

	const onReqReport = (e) => {
		e.preventDefault();
		dispatch(fetchAllResults());
	};

	if (!isTable) {
		return <Navigate to='/registration' />
	}

	return (
		<>
			<div
				className={style.container}
			>
				<h4>
					Количество тестрируемых: {countUser ? countUser : 1}
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
									!!resultsAllTest.length
										?
										rightAnswersReport
										:
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
									!!resultsAllTest.length
										?
										wrongAnswersReport
										:
										wrongAnswers
								}
							</div>
						</td>
					</tr>
				</table>
				{
					isDiagram && <div
						className={style.container__diagram}
					>
						<Diagram data={diagramData.length && diagramData} />
					</div>
				}
				<div
					className={style.container__item}
				>
					<button
						className={style.container__item_btn}
						onClick={onExit}
					>
						Закрыть отчёт
					</button>
					<button
						className={style.container__item_btnReport}
						onClick={onReqReport}
					>
						Полный отчёт
					</button>
				</div>
			</div >
		</>
	);
};

export default TableComponent;