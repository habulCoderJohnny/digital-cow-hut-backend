import mongoose from "mongoose";
import app from "./app";
import config from "./config";
const port = config.PORT;

// Connect Database
mongoose
  .connect(config.DATABASE_URL as string)
  .then(() => console.log("Database connected successfully ✅"))
  .catch((err) => console.log(`Unable to connect MongoDB ❌ ${err}`));

// Listen to Server
app.listen(port, () => {
  console.log(`Server is running on port ${port} ✅`);
});
