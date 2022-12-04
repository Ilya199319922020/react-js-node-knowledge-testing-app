import { setDataRegastrationUser } from "../../assets/intance/intance";

const initialState = {
	user: [],
	resultsAllTest: []
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_USER':
			return {
				...state,
				user: action.user,
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
		const response = await setDataRegastrationUser(data)
		if (response.status === 200) {
			dispatch(actions.setUserData(response.data));
		}
	}
};

export default userReducer;