import { compare, genSalt, hash } from "bcrypt";
const mongoose = require("mongoose");

const externalUserSchema = mongoose.Schema({
	classification: {
		type: String,
		default: "External",
	},
	name: {
		type: String,
		required: [true, "El apellido es requerido"],
	},
	lastname: {
		type: String,
		required: [true, "El apellido es requerido"],
	},

	email: {
		type: String,
		required: [true, "El correo es requerido"],
		unique: true,
	},
	password: {
		type: String,
		required: [true, "La constraseña es requerida"],
	},

	balance: {
		type: Number,
		default: 0,
	},
	tokenVersion: {
		type: Number,
		default: 0,
		required: false,
	},
	cars: [
		{
			plate: {
				type: String,
			},

			gas: {
				type: Number,
				default: 0,
			},
		},
	],
	transactions: [
		{
			name: String,
			date: Date,
			amount: Number,
		},
	],
});

externalUserSchema.pre("save", async function (next) {
	if (!this.isModified("password")) return next();

	const salt = await genSalt(+process.env.BCRYPT_ROUNDS);
	this.password = await hash(this.password, salt);
	next();
});

externalUserSchema.methods.comparePassword = async function (plainText) {
	return await compare(plainText, this.password);
};

const externalUser = mongoose.model("externalUser", externalUserSchema);

export default externalUser;
