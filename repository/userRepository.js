import { userModel } from "../models/user.js"
import {generateToken} from '../Auth/generateToken.js'

export class UserRepository{
    
    async createUser (email,password,username) {
        
        const isNew = await userModel.userExist(email)        

        if (!isNew){
            
            const hashpassword = await userModel.encryptPassword(password)
            const newUser = userModel({ username:username,email:email,password: hashpassword } )
            const resdata = await newUser.save()

            return {status:true,message:'Successfully created'}
        }else{
            return {status:false, message:'Email alrady exist'}
        }        

    }

    async login(email,password){

        const user = await userModel.findOne({email})        
        
        if(user){            
            const checkPassword = await userModel.comparePassword(password, user.password)

            if(checkPassword){

                const userData = {
                    id : user._id,
                    username:user.username,                    
                }
                
                const token = generateToken(userData)
                const dataSend = {
                    username:user.username,
                    token: token
                }

                return {status:true,message:dataSend}

            }else{
                return {status:false,message:'wrong Password'}
            }
            
        }else{
            return {status:false,message:'Email not found'}
        }

    }

   
}