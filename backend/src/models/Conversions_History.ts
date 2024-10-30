import mongoose, { Document, Schema } from "mongoose";
// We import the ConversionSchema from the Conversions model for reusability and to avoid duplicating the schema definition
import { IConversion, ConversionSchema } from "./Conversion";

interface IConversion_History extends Document {
    institutionName: string;
    rate: number; 
    conversion: IConversion;
    date: Date;
}

const IConversion_HistorySchema: Schema<IConversion_History> = new Schema({
    institutionName: {type: String, required: true},
    rate: {type: Number, required: true},
    conversion: {type: ConversionSchema, required: true},
    date: {type: Date, required: true}
});

const Conversion_History = mongoose.model<IConversion_History>('Conversions_History', IConversion_HistorySchema);
export default Conversion_History;
