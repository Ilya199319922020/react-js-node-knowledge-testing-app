import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from '../../styles/Header.module.css';

const Header = () => {
	return (
		<>
			<header
				className={styles.header}
			>
				<div
					className={styles.header__item}
				>
					Тестирование знаний
				</div>
			</header>
			<Outlet />
		</>
	);
};

export default Header;