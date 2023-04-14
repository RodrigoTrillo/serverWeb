const usersController = require('../controller/users.controller')
const ordersController = require('../controller/orders.controller')
const restaurantsController = require('../controller/restaurants.controller')
const authController = require('../auth/controller.auth')
const adminController = require('../admin/controller.admin')
const viewsTemplateController = require('../viewsTemplate/controller.viewsTemplate')


const router = app =>{
    app.use('/',viewsTemplateController)
    app.use('/users', usersController)
    app.use('/auth',authController)
    app.use('/admin',adminController)

    app.use('/orders', ordersController)
    app.use('/restaurants', restaurantsController)
}



module.exports= router