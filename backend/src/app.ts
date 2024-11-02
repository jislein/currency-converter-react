import "dotenv/config";
import express, { Request, Response } from "express";
import cors from "cors";
import Conversion from "./models/Conversion";
import Institution from "./models/Institutions";
import Conversion_History from "./models/Conversions_History";


const app = express();

// This allow us to to access our API from any client under other domains (if ran locally it would be different ports, etc).
app.use(cors());
app.use(express.json()); // Middleware to parse JSON

// API endpoint to request institution data from the database
app.get('/institutions', async (req: Request, res: Response) => {
    const institutions = await Institution.find().exec();
    res.status(200).json(institutions);
});

app.get('/institution-rate', async (req: Request, res: Response) => {
    const { institutionName } = req.body;
    
    const institution = await Institution.findOne({ name: institutionName }).exec();
    if (!institution) {
        res.status(404).json({ error: `Cannot find '${institutionName}" in the database.` });
        return;
    }
    res.status(200).json(institution.exchangeRates);
});

// API endpoint to handle conversions
app.post("/convert", async (req: Request, res: Response) => {
    const { amount, baseCurrency, targetCurrency, institutionName } = req.body;
  
    try {
      const pairName = `${baseCurrency}/${targetCurrency}`;
      // findOne() will return null if it cannot find institutionName in the database. Returns the document that match the parameter.
      const institution = await Institution.findOne({ name: institutionName });
      // Here checks if institution is null or undefined
      if (!institution) {
        res
          .status(404)
          .json({ error: `Cannot find "${institutionName}" in the database.` });
        return;
      }
      // The find method expect a function and that function will be called repeatedly,
      // passing in each element of the array one at a time until one of them passes the test,
      // in this case that both pairName match.
      const exchangeRate = institution.exchangeRates.find((rate_element) => {
        if (rate_element.pairName === pairName) {
          return true;
        }
        return false;
      });
      // If the find method above does not find any matching element it will return 'undefined'
      if (!exchangeRate) {
        res
          .status(404)
          .json({ error: `Cannot find a rate for the ${pairName} pair` });
        return;
      }
  
      const result = amount * exchangeRate.rate;
  
      const conversion = new Conversion({
        amount,
        baseCurrency,
        targetCurrency,
        result,
      });
  
      const rate = exchangeRate.rate;
      const date = new Date();
  
      const conversion_hisotry = new Conversion_History({
        institutionName,
        rate,
        conversion,
        date,
      });
      console.log(conversion_hisotry);
      await conversion.save();
      await conversion_hisotry.save();
      res.status(201).json(conversion);
    } catch (error) {
      // This shows an error on the server console
      console.error(
        "An error ocurred trying to save the conversion data:",
        error
      );
      // This shows a client-side error message.
      res
        .status(500)
        .json({ error: "An error ocurred trying to save the conversion data." });
    }
  });
  
  app.post("/add-institution", async (req: Request, res: Response) => {
    const { name, exchangeRates } = req.body;
  
    const institution = new Institution({ name, exchangeRates });
  
    try {
      await institution.save();
      res.status(201).json(institution);
    } catch (error) {
      // This shows an error on the server console
      console.error(
        "An error ocurred trying to save the institution data:",
        error
      );
      // This shows a client-side error message.
      res
        .status(500)
        .json({ error: "An error ocurred trying to save the institution data." });
    }
  });

export default app;