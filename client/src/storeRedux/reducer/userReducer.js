import axios from "axios";

const initialState = {
	user: [],
	resultsAllTest: [],
	resultUserTest: [],
	isTable: false,
	isDiagram: false,
	diagramData: [],
	countUser: null,
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'RESET':
			return {
				...state,
				user: [],
				resultsAllTest: [],
				resultUserTest: [],
				diagramData: [],
				isTable: false,
				isDiagram: false,
				countUser: null,
			}
		case 'SET_USER':
			return {
				...state,
				user:  [action.user],
			}
		case 'SET_ANSWERS':
			return {
				...state,
				resultsAllTest: action.results,
			}
		case 'SET_ANSWERS_USER':
			return {
				...state,
				resultUserTest: action.result,
			}
		case 'SET_ISTABLE':
			return {
				...state,
				isTable: action.isVAlue
			}
		case 'SET_IS_DIAGRAM':
			return {
				...state,
				isDiagram: action.isDiagram
			}
		case 'SET_COUNT':
			return {
				...state,
				countUser: action.count
			}
		case 'SET_DIAGRAM_DATE':
			let data = action.results.map(h => {
				return {
					...h,
					right: h.right.length,
					wrong: h.wrong.length
				}
			});
			return {
				...state,
				diagramData:  data
			}
		default:
			return state;
	}
};

export const actions = {
	setUserData: (user) => ({ type: 'SET_USER', user }),
	setTestAllData: (results) => ({ type: 'SET_ANSWERS', results }),
	setUserTestResult: (result) => ({ type: 'SET_ANSWERS_USER', result }),
	setIsTable: (isVAlue) => ({ type: 'SET_ISTABLE', isVAlue }),
	setIsDiagram: (isDiagram) => ({ type: 'SET_IS_DIAGRAM', isDiagram }),
	setCount: (count) => ({ type: 'SET_COUNT', count }),
	setDiagramValue: (results) => ({ type: 'SET_DIAGRAM_DATE', results }),
	setReset: () => ({ type: 'RESET' }),
};

export const saveUser = (data) => {
	return async (dispatch) => {
		const response = await axios.post('http://127.0.0.1:5000/api/createUser', data)
		if (response.status === 201) {
			dispatch(actions.setUserData(response.data));
		}
	}
};

export const saveTest = (id, answers) => {
	return async (dispatch) => {
		const response = await axios.post('http://127.0.0.1:5000/api/set', { id, answers })
		if (response.status === 201) {
			dispatch(actions.setUserTestResult(response.data.answers));
			dispatch(actions.setIsTable(true));
		}
	}
};

export const fetchAllResults = () => {
	return async (dispatch) => {
		const response = await axios.get(`http://127.0.0.1:5000/api/user`)
		if (response.status === 200) {
			const { resResults, count } = response.data;
			dispatch(actions.setTestAllData(resResults));
			dispatch(actions.setDiagramValue(resResults));
			dispatch(actions.setCount(count));
			dispatch(actions.setIsDiagram(true));
		}
	}
};

export default userReducer;