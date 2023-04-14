const {Router} = require('express')
const RestaurantsDAO = require('../dao/Restaurants.dao')

const Restaurants = new RestaurantsDAO()
const router = Router()

router.get('/', async(req,res)=>{
    try {
        const restaurants= await Restaurants.getAll()
        res.json({status: 'success', message: restaurants })
    } catch (error) {
        console.log(error.message)
        res.status(500).json({status:'error', message:'internal server error'})
    }
})

router.get('/:id', async(req,res)=>{
    try {
        const {id}= req.params
        const restaurants = await Restaurants.getOne(id)
        res.json({status: 'success', message:restaurants })
    } catch (error) {
        console.log(error.message)
        res.status(500).json({status:'error', message:'internal server error'})
    }
})

router.post('/', async(req,res)=>{
    try {
        const {name} = req.body
        const newRestaurantInfo = {
            name
        }
        const newRestaurant = await Restaurants.create(newRestaurantInfo)
        res.status(201).json({status: 'success', message: newRestaurant})
    } catch (error) {
        console.log(error.message)
        res.status(500).json({status:'error', message:'internal server error'})
    }
})

router.patch('/:id/addProduct', async(req,res)=>{
    try {
        const {id}= req.params
        const {name, price} = req.body
        const newProductInfo = {
            name,
            price
        }

        const restaurant = await Restaurants.getOne(id)
        restaurant.products.push(newProductInfo)

        const restaurantUpdate = await Restaurants.update(id, restaurant)

        res.json({status: 'succes', message:restaurantUpdate })
    } catch (error) {
        console.log(error.message)
        res.status(500).json({status:'error', message:'internal server error'})
    }
})


module.exports= router