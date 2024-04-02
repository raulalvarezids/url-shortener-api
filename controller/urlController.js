
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
        const newUrl = await this.urlRepository.createUrl(url,req.user)
              
        res.status(200).json(newUrl.urlNew)       
    }


    deleteById = async (req,res) => 
    {
        const id = req.params.id
        const status = await this.urlRepository.deleteById(id)
        
        if(status){
            res.status(200).json('Delete Successfully')
        }else{
            res.status(400).json('Error Deleting')
        }        
    }


    getByCode = async (req,res) => 
    {
        const code = req.params.code

        const urlLong = await this.urlRepository.getByCode(code)

        if(urlLong == false){
            res.status(404).send('Url not found')            
        }else{                        
            res.redirect(urlLong.urlOld)
            return
        }
    }

    getById = async (req,res) =>
    {           
        const id = req.user.id        
        const urls = await this.urlRepository.getById(id)
        res.status(200).json(urls)
    }


    getByUrlCode = async (req,res) => {
        const code = req.params.code
        const url = await  this.urlRepository.getByUrlCode(code)
        res.status(200).json(url)
    }

    updateById = async (req,res) => {
        const {id,name,urlOld} = req.body    
        const status = await this.urlRepository.updateById(id,name,urlOld)
        
        if(status){
            res.status(200).json('Update Successfully')
        }else{
            res.status(400).json('Error updating')
        }
    }
        
}   