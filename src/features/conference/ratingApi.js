const {RESTDataSource} = require('apollo-datasource-rest')

class RatingApi extends RESTDataSource{
    constructor(){
        super()
        this.baseURL = process.env.API2_URL
    }
    async getConferenceRating(){
        return await this.get('Rating/Create')
        
    }
}