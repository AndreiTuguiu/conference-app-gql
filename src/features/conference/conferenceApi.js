const {RESTDataSource} = require('apollo-datasource-rest')
// const suggestedConferences = require('../../mock/suggestedConferences')

class ConferenceApi extends RESTDataSource{
    constructor(){
        super()
        this.baseURL = process.env.API1_URL
    }
    async getConferenceSuggestions(){
        return await this.get('suggestions/List')
        
    }
}



module.exports=ConferenceApi