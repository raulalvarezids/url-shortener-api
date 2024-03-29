import { urlModel } from "../models/url.js";

export class UrlRepository {

    async getAll() {
        const data = await urlModel.find()       
        return data        
    }

    async createUrl(url){
        const newnew = url+'nuevecita'
        
        const newUrl = urlModel({urlOld:url,urlNew:newnew})
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
}   