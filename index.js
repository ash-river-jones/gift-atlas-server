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
app.use('/giftees', gifteesRoutes)
app.use('/gifts', giftsRoutes)
app.use('/users', usersRoutes)


app.listen(PORT, function () {
	console.log(`server running at http://localhost:${PORT}`);
});
