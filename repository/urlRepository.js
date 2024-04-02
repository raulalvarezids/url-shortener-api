import { urlModel } from "../models/url.js";
import ShortUniqueId from 'short-unique-id'

export class UrlRepository {

    async getAll() {
        const data = await urlModel.find()      
        return data          
    }

    async createUrl(url,user){

        const uid = new ShortUniqueId({ length: 8 });
        const codeUrl = uid.rnd();        

        const newShortUrl = process.env.HOSTURL+'/'+codeUrl

        let newUrl;
        if(user == undefined){
            newUrl = urlModel({urlOld:url,urlNew:newShortUrl,code:codeUrl})
        }else{
            newUrl = urlModel({urlOld:url,urlNew:newShortUrl,code:codeUrl,user:user.id})
        }

      
        const resdata = await newUrl.save()

        return resdata
    }

    async deleteById(id){

        const del = await urlModel.deleteOne({_id:id})

        if(del.deletedCount > 0){
            return true
        }

        return false
    }

    async getByCode(code){
        const urlLong = await urlModel.find({code:code})
        
        if(urlLong.length > 0) {
            return urlLong[0]
        }else{
            return false
        }

    }

    async getById (userId){
        const data = await urlModel.find({user:userId})  
        return data
    }

    async getByUrlCode(code) {
        const urlLong = await urlModel.find({code:code})
        return urlLong[0]
    }

    async updateById(id,name,urlOld){
        try {
            
            const url = await urlModel.findByIdAndUpdate(id, { name, urlOld });
            
            if(!url){
                return false
            }else{
                return true
            }


        } catch (error) {
            return false
        }
    }
    
}   