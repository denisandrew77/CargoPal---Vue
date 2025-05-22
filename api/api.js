import express from "express";
import bodyParser from "body-parser";
import { router } from "./routing/router.js";
import { generalRouter } from "./routing/generalRouter.js";
import cors from "cors"; // updated to ES module import

const api = express();
const port = 3000;

// ✅ Use CORS properly
api.use(cors({
  origin: "http://localhost:5173", // allow frontend dev server
  credentials: true // if you want to use cookies
}));

api.use(bodyParser.json());

// ✅ Add routes
api.use(generalRouter);
api.use("/orders", router);
api.get('/', (req, res) => {
  res.send('API is running.');
});

api.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
