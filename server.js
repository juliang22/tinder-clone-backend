import express from 'express'
import mongoose from 'mongoose'
import Cards from './models/dbCards.js '
import Cors from 'cors'


// App Config
const app = new express()
const PORT = process.env.PORT || 8000

const MONGODB = 'mongodb+srv://admin:user@cluster0.fr77y.mongodb.net/tinder-clone-db?retryWrites=true&w=majority'


// Middlewares
app.use(express.json())
app.use(Cors())

// API Endpoints
app.get('/', (req, res) => {
	return res.status(200).send("Hello World")
})

app.post('/tinder/cards', (req, res) => {
	const dbCard = req.body
	console.log(dbCard)
	Cards.create(dbCard, (err, data) => {
		if (err) res.status(500).send(err)
		else res.status(201).send(data)
	})
})

app.get('/tinder/cards', (req, res) => {
	Cards.find((err, data) => {
		if (err) res.status(500).send(err)
		else res.status(200).send(data)
	})
})

// DB config & Listener

mongoose
	.connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true, useUnifiedTopology: true })
	.then(() => {
		console.log('MongoDB Connected')
		return app.listen(PORT)
	})
	.then(res => console.log(`Server running at ${res.url}`))
	.catch(error => console.error(`Trouble connecting to MongoDB: ${error}`))
