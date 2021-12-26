import { Router } from "express";

import {
	createUser,
	deleteUser,
	getAllUsers,
	getUserById,
	updateUser,
	addCar,
	addGas,
	addMoney,
	getCarById,
} from "./methods";
const router = Router();

router.get("/ping", async (req, res) => {
	res.json({ message: "pong", jwt_payload: req.jwt_payload });
});

router.get("/list", async (_req, res, next) => {
	try {
		const todos = await getAllUsers();
		res.json(todos);
	} catch (error) {
		next(error);
	}
});

//------------------------RUTAS DE USUARIOS------------------------------

router.get("/:userId/detail", async (req, res, next) => {
	try {
		const detail = await getUserById(req.params.userId);
		res.json(detail);
	} catch (error) {
		next(error);
	}
});

router.post("/create", async (req, res, next) => {
	try {
		const newTodo = await createUser(req.body);
		res.json({
			message: "Se ha creado un nuevo usuario",
			newTodo,
		});
	} catch (error) {
		next(error);
	}
});

router.put("/:userId/update", async (req, res, next) => {
	try {
		await updateUser(req.params.userId, req.body);
		const data = await getUserById(req.params.userId);
		res.json({
			message: `Se ha actualizado el usuario ${req.params.userId}`,
			data,
		});
	} catch (error) {
		next(error);
	}
});

router.delete("/:userId/delete", async (req, res, next) => {
	try {
		await deleteUser(req.params.userId);
		res.json({ message: `Se ha eliminado el usuario ${req.params.userId}` });
	} catch (error) {
		next(error);
	}
});

//-----------------------------RUTAS PARA CARROS-------------------------------------

router.get("/:userId/cars/:carId/detail", async (req, res, next) => {
	try {
		const car = await getCarById(req.params.carId);
		res.json({ car: car });
	} catch (error) {
		next(error);
	}
});

router.post("/:userId/cars/newCar", async (req, res, next) => {
	try {
		await addCar(req.params.userId, req.body);
		const data = await getUserById(req.params.userId);
		res.json({ message: `Se ha agregado correctamente el auto`, data });
	} catch (e) {
		next(e);
	}
});

router.put("/:userId/cars/:carId/gas", async (req, res, next) => {
	try {
		await addGas(req.params.userId, req.params.carId, req.body.gas);
		res.json({
			message: `Agregado ${req.body.gas} al carro`,
		});
	} catch (error) {
		next(error);
	}
});

//-------------------------------RUTAS PARA BALANCE------------------------------
router.put("/:userId/balance", async (req, res, next) => {
	try {
		addMoney(req.params.userId, req.body.balance);
		res.json({ message: "Dinero correctamente agregado" });
	} catch (error) {
		next(error);
	}
});

export default router;
