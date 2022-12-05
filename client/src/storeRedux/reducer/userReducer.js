import axios from "axios";

const initialState = {
	user: [],
	resultsAllTest: [],
	resultUserTest: [],
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_USER':
			return {
				...state,
				user: [action.user],
			}
		case 'SET_ANSWERS':
			return {
				...state,
				resultsAllTest: [...state.resultsAllTest, action.results],
			}
		case 'SET_ANSWERS_USER':
			return {
				...state,
				resultUserTest: [action.result],
			}
		default:
			return state;
	}
};

const actions = {
	setUserData: (user) => ({ type: 'SET_USER', user }),
	setTestData: (results) => ({ type: 'SET_ANSWERS', results }),
	setUserTestResult: (result) => ({ type: 'SET_ANSWERS_USER', result }),
};

export const saveUser = (data) => {
	return async (dispatch) => {
		const response = await axios.post('http://127.0.0.1:5000/api/createUser', data)
		if (response.status === 201) {
			dispatch(actions.setUserData(response.data));
		}
	}
};

export const fetchResultTestUser = (id) => {
	return async (dispatch) => {
		const response = await axios.get(`http://127.0.0.1:5000/api/user/${id}`)
		if (response.status === 200) {
			dispatch(actions.setUserData(response.data));
		}
	}
};

export const saveTest = (id, answers) => {
	return async (dispatch) => {
		const response = await axios.post('http://127.0.0.1:5000/api/set', { id, answers })
		if (response.status === 200) {
					dispatch(actions.setUserTestResult(response.data.answers));
		}
	}
};

export const fetchAllResults = () => {
	return async (dispatch) => {
		const response = await axios.get(`http://127.0.0.1:5000/api/user`)
		if (response.status === 200) {
			dispatch(actions.setUserData(response.data));
		}
	}
};



export default userReducer;