import app from './app'; // This must be at the top so that everithing in the app.ts loads first.

// We are using 'env' as the name of the import variable because in this particular case
// it could be any name. The reason for this is that we are using a default export in the validateEnvs.ts
import env from './util/validateEnvs'
import mongoose from "mongoose";

const PORT = env.PORT;
// This is how we connect to MongoDB
mongoose
  .connect(env.MONGO_CONNECTION_STRING)
  .then(() => {
    console.log("MongoDB connected");
    
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.error("MongoDB connection error:", err));


