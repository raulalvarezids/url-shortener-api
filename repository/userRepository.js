import { userModel } from "../models/user.js"
import {generateToken} from '../Auth/generateToken.js'

export class UserRepository{
    
    async createUser (email,password,first_name,last_name) {
        
        const isNew = await userModel.userExist(email)        

        if (!isNew){
            
            const hashpassword = await userModel.encryptPassword(password)
            const newUser = userModel({ first_name:first_name, last_name:last_name,email:email,password: hashpassword } )
            const resdata = await newUser.save()

            return {status:true,message:'Creado correctamente'}
        }else{
            return {status:false, message:'user exist'}
        }        

    }
    async getAll(){
        const data = await userModel.find()      
        return data        
    }

    async login(email,password){

        const user = await userModel.findOne({email})        
        
        if(user){            
            const checkPassword = await userModel.comparePassword(password, user.password)

            if(checkPassword){

                const userData = {
                    id : user._id,
                    first_name:user.first_name,
                    last_name: user.last_name
                }
                
                const token = generateToken(userData)

                return {status:true,message:token}

            }else{
                return {status:false,message:'Contraseña incorrecta'}
            }
            
        }else{
            return {status:false,message:'Correo no encontrado'}
        }

    }
}