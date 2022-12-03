import React, { useContext } from 'react'
import { useState } from 'react';
import { createContext } from "react";

const ContainerContext = createContext();
export const useContainer = () => useContext(ContainerContext);

const ContainerProvider = ({ children }) => {
	const [users, setUsers] = useState();
	
	return (
		<ContainerContext.Provider
			value={{ users }}
		>
			{children}
		</ContainerContext.Provider>
	)
}

export default ContainerProvider;