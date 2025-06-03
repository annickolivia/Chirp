const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/Users')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const userServer = require('./routes/UsersRoutes')

const app = express()
app.use(express.json())
app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", 'PUT', 'DELETE' ],
    credentials: true,
}))
app.use(cookieParser())


mongoose.connect("mongodb://127.0.0.1:27017/Chirp")

const verifyUser = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json("Token manquant");
  }

  jwt.verify(token, "jwt-sercret-key", (err, decoded) => {
    if (err) return res.status(403).json("Token invalide");

    // Tu injectes les infos décodées dans req.user
    req.user = decoded;

    next();
  });
};


app.use('/uploads', express.static('uploads'));
app.use('/api/avatar', verifyUser, userServer);
app.use('/api/infos', verifyUser, userServer)
 

app.get("/home", verifyUser, (req, res) => {
    return res.json("Successs")
})

app.post("/login", (req, res) => {
    const {email, password} = req.body
    UserModel.findOne({email: email})
    .then(user => { 
        if(user) {
            bcrypt.compare(password, user.password, (err, response) => {
            if(response) {
                const token = jwt.sign({id : user._id,email: user.email, name: user.name}, "jwt-sercret-key", {expiresIn: "1d"})
                res.cookie("token", token);
                res.json("Successs")
            } else {
                return res.json("the password is incorrect")
            }
        })
        } else {
            res.json("No record existed")
        }
        })
})
app.post('/register', (req, res) =>{
    const {name, email, password} = req.body
    bcrypt.hash(password, 8)
    .then(hash =>{
        UserModel.create({name, email, password: hash})
        .then(users => res.json(users))
        .catch(err => res.json(err))
    })
    .catch(err => console.log(err.message))
})

app.get('/me', verifyUser, async (req, res) => {
   res.json(req.user);
   console.log("User:", req.user);
});

app.post('/logout', verifyUser, (req, res) => {
  res.clearCookie('token'); // ou le nom de ton cookie
  return res.status(200).json({ message: 'Déconnecté avec succès' });
});



app.listen(4000, () => {
    console.log("mande ny seveur e")
})