import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useInput } from '../hooks/useInput';
import styles from '../styles/Registration.module.css'
import { saveUser } from '../storeRedux/reducer/userReducer';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import TableComponent from '../assets/hoc/TableComponent';

const Registration = () => {
	const [valueSurName, setValueSurName] = useInput('');
	const [valueName, setValueName] = useInput('');
	const [valuePatronymic, setValuePatronymic] = useInput('');
	const [isReqRegistration, setIsReqRegistration] = useState(false);

	const dispatch = useDispatch();
	const { user } = useSelector(state => state.user);

	const onSetData = (e) => {
		e.preventDefault();
		setIsReqRegistration(true);
	};

	useEffect(() => {
		if (valueSurName.value && valueName.value && valuePatronymic.value) {
			const userData = {
				surname: valueSurName.value,
				name: valueName.value,
				patronymic: valuePatronymic.value,
				answers: []
			};
			if (isReqRegistration) {
				dispatch(saveUser(userData))
				setIsReqRegistration(false);
			}
		}
	}, [isReqRegistration]);

	if(user.length){
		return <Navigate to='/testing'/>
	}

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
				>
					Зарегистрировать
				</button>
			</form>
		</div>
	);
};

export default Registration;