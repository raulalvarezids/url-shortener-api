import { urlModel } from "../models/url.js";
import ShortUniqueId from 'short-unique-id'

export class UrlRepository {

    async getAll() {
        const data = await urlModel.find()      
        return data          
    }

    async createUrl(url){

        const uid = new ShortUniqueId({ length: 8 });
        const codeUrl = uid.rnd();        

        const newShortUrl = process.env.HOSTURL+'/'+codeUrl

        const newUrl = urlModel({urlOld:url,urlNew:newShortUrl,code:codeUrl})
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

    
}   