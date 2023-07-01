const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

const PORT = process.env.PORT || 3000;

app.use("/", require("./routes/traffic"));

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
