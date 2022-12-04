export const reducer = (state, action) => {
	switch (action.type) {
		case 'setAnswer':

			return {
				...state,
				data: [...state.data].map(h => {
					if (Number(h.id) === Number(action.obj.id)) {
						return {
							...h, options: [...h.options].map((z, index) => {
								if (Number(index + 1) === Number(action.obj.answerCurrent)) {
									return {
										...z, isCheked: true
									}
								} else if (Number(index + 1) !== Number(action.obj.answerCurrent)) {
									return {
										...z, isCheked: false
									}
								}
								return z;
							})
						}
					}
					return h;
				}),
				results: [...state.results]
					.map((n, i, arr) => Number(i) === (Number(action.obj.id) - 1)
						? arr[i] = Number(action.obj.answerCurrent)
						: arr[i] = n)
			}

		default: return state;
	}
}