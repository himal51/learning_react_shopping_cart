export const cartReducer = (state, action) => {
	switch (action.type) {
		case "ADD_TO_CART":
			return {
				...state,
				cart: [...state.cart, { ...action.payload, qty: 1 }],
			};
			break;
		case "REMOVE_FROM_CART":
			return {
				...state,
				cart: state.cart.filter((c) => c.id !== action.payload.id),
			};
			break;

		default:
			break;
	}
};
