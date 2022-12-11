import { useSelector } from "react-redux";

const Loader = ({ children }) => {
	const { isLoading } = useSelector(state => state.isLoading);

	if (isLoading) {
		return <h1
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',			
			}}
		>
			Идёт загрузка...
			</h1>
	}

	return (
		<>
			{children}
		</>
	);
};

export default Loader;