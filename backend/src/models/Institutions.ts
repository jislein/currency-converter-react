import mongoose, { Document, Schema } from "mongoose";

// We import the Exchange_RateSchema from the Exchange_Rate model for reusability and to avoid duplicating the schema definition
import { IExchange_Rate, Exchange_RateSchema } from "./Exchange_Rate";

interface IInstitution extends Document {
    name: string; 
    exchangeRates: [IExchange_Rate];    
}

const InstitutionSchema: Schema<IInstitution> = new Schema({
    name: { type: String, required: true },
    exchangeRates: [Exchange_RateSchema]
});

const Institution = mongoose.model<IInstitution>('Institution', InstitutionSchema);
export default Institution;
