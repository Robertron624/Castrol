import { externalUser } from "../../models";

export const getAllUsers = async () => {
	const todos = await externalUser.find();
	return todos;
};

export const getUserById = async (userId) => {
	const todo = externalUser.findById(userId);
	return todo;
};

export const updateUser = async (userId, payload) => {
	const result = await externalUser.updateOne({ _id: userId }, payload);
	return result;
};

export const deleteUser = async (userId) => {
	const result = await externalUser.deleteOne({ _id: userId });
	return result;
};

//--------------------METODOS PARA CARROS----------------------------------
export const getCarById = async (userId, carId) => {
	const user = await externalUser.findById(userId);
	console.log("ESTE ES EL USER:: ", user);
	const car = user.cars.id(carId);
	console.log("ESTE ES EL CARRO:: ", car);
	return car;
};

export const addCar = async (userId, newCar) => {
	const user = await externalUser.findById(userId);
	user.cars.push(newCar);
	user.save();
	return user;
};

export const getCars = async (userId) => {
	const user = await externalUser.findById(userId);
	return user.cars;
};

export const addGas = async (userId, carId, gas) => {
	const user = await externalUser.findById(userId);
	const newGas = parseInt(gas);
	user.cars.id(carId).gas += newGas;
	return user.save();
};

// export const deleteCar = async (userId) => {};

//--------------------METODOS PARA BALANCE-------------------------
export const addMoney = async (userId, money) => {
	const user = await externalUser.findById(userId);
	user.balance += money;
	user.save();
	return user;
};
