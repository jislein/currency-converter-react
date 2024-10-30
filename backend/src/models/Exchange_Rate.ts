import mongoose, { Document, Schema } from "mongoose";

export interface IExchange_Rate extends Document {
    pairName: string
    rate: number;
    baseCurrency: string; 
    targetCurrency: string; 
}

const Exchange_RateSchema: Schema<IExchange_Rate> = new Schema({
    pairName: { type: String, required: true },
    rate: { type: Number, required: true },
    baseCurrency: { type: String, required: true },
    targetCurrency: { type: String, required: true }
});

const Exchange_Rate = mongoose.model<IExchange_Rate>('Exchange_Rate', Exchange_RateSchema);
// We export the Exchange_RateSchema to avoid duplicating the schema definition in the intitutions model
export { Exchange_RateSchema };

export default Exchange_Rate;
