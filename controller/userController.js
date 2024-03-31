

export class UserController{
    constructor(userRepository){
        this.userRepository = userRepository
    }

    createUser = async (req,res) => {
        const {email,password,first_name,last_name} = req.body

        const result = await this.userRepository.createUser(email,password,first_name,last_name)

        if (result.status){
            res.status(200).json('creado')
            
        }else{
            res.status(400).json(result.message)
        }
        
    }

    getAll  = async (req,res) =>{
        const usuario = await  this.userRepository.getAll()
        res.status(200).json(usuario)
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