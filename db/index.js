const mongoose  = require('mongoose')

const mongoConnect = async ()=>{
    try {
        await mongoose.connect('mongodb+srv://RodrigoTrillo:Rolly1560@clustercoder.gkuf5cv.mongodb.net/?retryWrites=true&w=majority')
        console.log('db is Connected')
    } catch (error) {
        console.log(error)
    }
}


module.exports= mongoConnect