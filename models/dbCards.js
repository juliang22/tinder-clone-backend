import mongoose from 'mongoose'

const cardSchema = mongoose.Schema({
	name: String,
	imgUrl: String
})

//naming the model cards and using the cardSchema to make it
export default mongoose.model('Cards', cardSchema)

