import { faker } from "@faker-js/faker";
import React, { createContext, useContext, useReducer } from "react";
import { cartReducer } from "./Reducer";
const Cart = createContext();

const Context = ({ children }) => {
	const products = [...Array(20)].map(() => ({
		id: faker.datatype.uuid(),
		name: faker.commerce.productName(),
		price: faker.commerce.price(),
		image: faker.image.avatar(),
		inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
		fastDelivery: Math.random() < 0.5,
		ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
	}));

	const [state, dispatch] = useReducer(cartReducer, {
		products: products,
		cart: [],
	});

	return (
		<Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>
	);
};

export default Context;

export const CartState = () => {
	return useContext(Cart);
};
