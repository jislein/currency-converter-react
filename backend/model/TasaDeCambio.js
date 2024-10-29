import mongoose from 'mongoose';
const { Schema, model } = mongoose;


const tasaDeCambioSchema = new Schema({
    institucion: String,
    monedaOrigen: String,
    monedaDestino: String,
    tasa: Number

});

// The first parameter in the model() is the singular form of our collection name.
// Mongoose automatically lowercase it and change it to its plural form.
const TasaDeCambio = model('TasaDeCambio', TasaDeCambioSchema);

export default TasaDeCambio;