import mongoose, { Document, Schema } from "mongoose";

export interface IConversion extends Document {
    amount: number; 
    baseCurrency: string; 
    targetCurrency: string; 
    result: number; 
}

const ConversionSchema: Schema<IConversion> = new Schema({
    amount: { type: Number, required: true },
    baseCurrency: { type: String, required: true },
    targetCurrency: { type: String, required: true },
    result: { type: Number, required: true }
});

const Conversion = mongoose.model<IConversion>('Conversion', ConversionSchema);
export {ConversionSchema};
export default Conversion;
