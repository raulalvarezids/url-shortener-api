

export class UserController{
    constructor(userRepository){
        this.userRepository = userRepository
    }

    createUser = async (req,res) => {
        const {email,password,username} = req.body
        
        const result = await this.userRepository.createUser(email,password,username)

        if (result.status){
            res.status(200).json(result.message)
            
        }else{
            res.status(400).json(result.message)
        }
        
    }


    login = async (req,res) => {
        const {email,password} = req.body
        
        const data = await  this.userRepository.login(email,password)
        
        if (data.status){            
            res.status(200).json(data.message)            
        }else{
            res.status(400).json(data.message)
        }
    }
}