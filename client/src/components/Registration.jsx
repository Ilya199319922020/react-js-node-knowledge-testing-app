import React from 'react';
import { useState } from 'react';
import { useInput } from '../hooks/useInput';
import styles from '../styles/Registration.module.css'

const Registration = () => {
	const [valueSurName, setValueSurName] = useInput('');
	const [valueName, setValueName] = useInput('');
	const [valuePatronymic, setValuePatronymic] = useInput('');
	// const [isError, setIsError] = useState(false);

	const sendData = () => {
		fetch()
	}

	const onSetData = async (e) => {
		e.preventDefault();
		if (valueSurName && valueName && valuePatronymic) {
			// setIsError(true)
			const userData = {
				surname: valueSurName,
				name: valueName,
				patronymic: valuePatronymic,
			};
			sendData(userData)
		} else {
			// setIsError(true)
		}
	};

	return (
		<div
			className={styles.registration}
		>
			<form
				className={styles.registration__form}
			>
				<h3
					className={styles.registration__title}
				>
					Регистрация пользователя
				</h3>
				<input
					className={styles.registration__form_surname}
					{...valueSurName}
					type={'text'}
					placeholder={'Фамилия'}
					required={true}
				/>
				<input
					className={styles.registration__form_name}
					{...valueName}
					type={'text'}
					placeholder={'Имя'}
					required={true}
				/>
				<input
					className={styles.registration__form_patronymic}
					{...valuePatronymic}
					type={'text'}
					placeholder={'Отчество'}
					required={true}
				/>
				<button
					className={styles.registration__form_btn}
					onClick={onSetData}
					type={'submit'}
				>
					Зарегистрировать
				</button>
			</form>
		</div>
	);
};

export default Registration;