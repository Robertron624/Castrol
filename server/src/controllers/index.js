import AuthRouter from "./auth";
import UserRouter from "./user";

export const setUpControllers = (app) => {
	app.use("/auth", AuthRouter);
	app.use("/user", UserRouter);
};
