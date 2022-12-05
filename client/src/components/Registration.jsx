import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useInput } from '../hooks/useInput';
import { saveUser } from '../storeRedux/reducer/userReducer';
import styles from '../styles/Registration.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Registration = () => {
	const [valueSurName, setValueSurName] = useInput('');
	const [valueName, setValueName] = useInput('');
	const [valuePatronymic, setValuePatronymic] = useInput('');
	const [isReqRegistration, setIsReqRegistration] = useState(false);
	const [errorRegistration, setErrorRegistration] = useState('');

	const dispatch = useDispatch();
	const { user } = useSelector(state => state.user);


	const onSetData = async (e) => {
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
		} else if (isReqRegistration) {
			setErrorRegistration('Не заполнены поля');
			setIsReqRegistration(false);
		}
	}, [isReqRegistration]);

	if (user.length) {
		return <Navigate to='/testing' />
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
				{
					errorRegistration &&
					<div
						className={styles.registration__error}
					>
						{errorRegistration}
					</div>
				}
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