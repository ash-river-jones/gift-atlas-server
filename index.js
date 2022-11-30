const express = require('express');
const cors = require('cors');
const app = express();

//import Routes here

require('dotenv').config()
const PORT = 8080

app.use(cors())
app.use(express.static('public'))
app.use(express.json())
app.use(( req, res, next )=>{
	next() 
})

// add app.use routes here

app.listen(PORT, function () {
	console.log(`server running at http://localhost:${PORT}`);
});
