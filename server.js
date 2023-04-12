if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  }

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxVAZUGMjVghrJYYeO5JJkyzO14V0YREw",
  authDomain: "mata3em-dc8b2.firebaseapp.com",
  projectId: "mata3em-dc8b2",
  storageBucket: "mata3em-dc8b2.appspot.com",
  messagingSenderId: "78446309158",
  appId: "1:78446309158:web:196f761c0503802eb09be7",
  measurementId: "G-FEB9FT0EF5"
};

// Initialize Firebase
const fire = initializeApp(firebaseConfig);
const analytics = getAnalytics(fire);

const express = require("express")
const app = express()
const expressLayouts = require("express-ejs-layouts")

const indexRouter = require("./routes/index")

app.set("view engine", "ejs")
app.set("views",__dirname + "/views")
app.set("layout","layouts/layout")
app.use(expressLayouts)
app.use(express.static("public"))

const mongoose = require("mongoose")
mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser: true})

const db = mongoose.connection
db.on("error",error => console.error(error))
db.once("open",() => console.log("Connected to mongoose"))

app.use("/yes", indexRouter)

app.listen(process.env.PORT || 5000)