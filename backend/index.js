const express = require("express");
const app = express();
const router = express.Router();
const cors = require("cors");
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

const userRoute = require("./routes/user");
const productRoute = require("./routes/product");

app.get("/", async (req, res) => {
  res.send("Hello from backend");
});

app.use("/user", userRoute);
app.use("/product", productRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
