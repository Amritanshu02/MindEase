const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const authRoute = require("./routes/auth");
const cors = require("cors");
const path = require("path");

const port = process.env.PORT || 3000;
// app.use(routes);

mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("Database is connected!");
}).catch((e) => {
    console.log(e);
})

const static_path = path.join(__dirname, "../")

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use(express.static(static_path))


// app.get("/login", (req, res) => {
//     res.render("login");
// })
// app.get("/register", (req, res) => {
//     res.redirect('/login.html');
// })

app.use("/", authRoute);

app.listen(port, () => {
    console.log(`Backend server is running on port ${port}`);
});