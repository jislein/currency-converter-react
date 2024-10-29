import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const conversionSchema = new Schema({
    monto: Number,
    monedaOrigen: String,
    monedaDestino: String,
    resultado: Number
});

// The first parameter in the model() is the singular form of our collection name.
// Mongoose automatically lowercase it and change it to its plural form.
const Conversion = model('Conversion', conversionSchema);

export default Conversion;