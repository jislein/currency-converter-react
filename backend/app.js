import mongoose from "mongoose";
import Conversion from "./model/Conversion.js";

// const mongoose = require('mongoose');
// const express = require('express')

const uri = "mongodb+srv://jisleinfernandez:bootcamp@cluster0.lrasl.mongodb.net/project_database?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri).then(() => console.log('MongoDB connected')).catch((err) => console.error('Failed to connect to MongoDB',err));

// Creates a new conversion object
const convert = await Conversion.create({
    monto: 200,
    monedaOrigen: "USD",
    monedaDestino: "DOP",
    resultado: 12000
});

// Inserts the conversion to the MongoDB database
// await convert.save();

// Finds a single conversion in the database.
const firstConversion = await Conversion.findOne({});
console.log(convert);

// TODO: Set typescript

// const app = express();

// mongoose.connect(uri, {
//     useNewUrlParser: true,
// })
// .then(() => console.log('MongoDB connected'))
// .catch((err) => console.error('Failed to connect to MongoDB',err));

// app.listen(3000, () => {
//     console.log('Server runnung on http://localhost:3000');
// });