const express = require("express");
require("dotenv").config();
require("./config/db.config");
require("@prisma/client");
const auth = require("./middlewares/auth.middleware");

const app = express();
app.use(express.json());

const authRoutes = require("./routes/auth.route");
app.use("/auth", authRoutes);
const userRoutes = require("./routes/user.route");
app.use("/user", auth, userRoutes);
const companyRoutes = require("./routes/company.route");
app.use("/company", auth, companyRoutes);
const assigneeRoutes = require("./routes/assignee.route");
app.use("/assignee", auth, assigneeRoutes);


app.listen(process.env.PORT, (err) => {
  if (err) throw err;
  console.log(`server running on port ${process.env.PORT}`);
});
