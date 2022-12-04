import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useInput } from '../hooks/useInput';
import styles from '../styles/Registration.module.css'
import { setDataRegastrationUser } from '../assets/intance/intance';
import { saveUser } from '../storeRedux/reducer/userReducer';

const Registration = () => {
	const [valueSurName, setValueSurName] = useInput('');
	const [valueName, setValueName] = useInput('');
	const [valuePatronymic, setValuePatronymic] = useInput('');
	const [isReqRegistration, setIsReqRegistration] = useState(false);
	// const [isError, setIsError] = useState(false);

	const onSetData =  (e) => {
		e.preventDefault();
		setIsReqRegistration(true);
	};

	useEffect(() => {
		if (valueSurName && valueName && valuePatronymic) {
			const userData = {
				surname: valueSurName,
				name: valueName,
				patronymic: valuePatronymic,
			};
			if (isReqRegistration) {
				saveUser(userData)
				setIsReqRegistration(true);
			}
		}	
	}, [isReqRegistration])

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