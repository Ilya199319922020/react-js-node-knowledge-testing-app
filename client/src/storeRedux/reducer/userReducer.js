import axios from "axios";

const initialState = {
	user: [],
	resultsAllTest: []
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_USER':
			return {
				...state,
				user: [action.user],
			}
		default:
			return state;
	}
};

const actions = {
	setUserData: (user) => ({ type: 'SET_USER', user }),
};

export const saveUser = (data) => {
	return async (dispatch) => {
		const response = await axios.post('http://127.0.0.1:5000/api/createUser', data)
		if (response.status === 201) {
			dispatch(actions.setUserData(response.data));
		}
	}
};

export default userReducer;