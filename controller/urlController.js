
export class UrlController {
    constructor(urlRepository){
        this.urlRepository = urlRepository
    }

    getAll = async (req,res) => {
        const alldata = await this.urlRepository.getAll()        
        res.status(200).json(alldata)
    }

    createUrl = async (req,res) =>
    {
        const {url} = req.body
        const newUrl = await this.urlRepository.createUrl(url)
              
        res.status(200).json(newUrl.urlNew)
       
    }

    deleteById = async (req,res) => 
    {
        const {id} = req.body
        const status = await this.urlRepository.deleteById(id)

        
        if(status){
            res.status(200).json(status)
        }else{
            res.status(400).json(status)
        }

        
    }
    
}   