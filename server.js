import express  from "express";
import db from "./db.js"; // Assuming db.js is in the same directory
import pizzaModel from "./Modals/pizzaModal.js";
import cors from "cors";
import userModel from "./Modals/userModel.js";
const app = express();

const PORT = 5000;

app.use(express.json());
app.use(cors()); // Enable CORS for all routes

app.get("/", (req, res) => {
  res.send("Server is running on Port:" + PORT);
});

app.get("/getPizzas", async (req, res) => {
  try {
    const pizzas = await pizzaModel.find({});
    res.send(pizzas);
  } catch (error) {
    res.status(500).send({ message: "Error fetching pizzas", error });
  }
});
// Endpoint for user registration
app.post("/api/users/register", async (req, res) => {
const {name,email,password}=req.body;

const existingUser= await userModel.findOne({email});
if(existingUser){
  return res.status(400).send({message:"User already exists"});
}

const newUser = new userModel({name,email,password})
await newUser.save();
res.send("User registered successfully");
})

// Endpoint for user login
app.post("/api/users/login", async (req, res) => {
  const {email,password}=req.body;
const user =await userModel.findOne({email});

if(user && user.password === password) 
{return res.send(user)}
res.status(400).send({message:"Invalid email or password"});
})

app.listen(PORT, () => {
  
  console.log(`Server is running on Port: ${PORT}`);
}
);