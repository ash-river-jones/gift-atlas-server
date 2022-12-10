require('dotenv').config()
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const app = express();
const PORT = process.env.PORT || 8080

const gifteesRoutes = require('./routes/gifteesRouets')
const giftsRoutes = require('./routes/giftsRoutes')
const usersRoutes = require('./routes/usersRoutes')
const loginRoutes = require('./routes/loginRoutes')


app.use(cors())
app.use(express.static('public'))
app.use(express.json())

app.use('/login', loginRoutes)

app.use(( req, res, next )=>{
	const authHeader = req.headers['authorization']
	const authToken = authHeader && authHeader.split(' ')[1]
	if (authToken == null) return res.status(401).json({message:"No persmissions, please sign in."})
	jwt.verify(authToken, process.env.JWT_SECRET, (err, user) => {
		console.log(err)
		if (err) return res.status(403)
		req.user = user
	})
	next() 
})

app.use('/giftees', gifteesRoutes)
app.use('/gifts', giftsRoutes)
app.use('/users', usersRoutes)


app.listen(PORT, function () {
	console.log(`server running at http://localhost:${PORT}`);
});
