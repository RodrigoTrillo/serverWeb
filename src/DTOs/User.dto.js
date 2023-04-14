class UserDTO {
    constructor(userInfo){
        this.name = userInfo.name
        this.email = userInfo.email
        this.role = 'user'
    }
}


module.exports = UserDTO