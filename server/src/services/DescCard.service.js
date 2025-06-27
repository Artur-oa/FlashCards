const {DescCard} = require("../../db/models")

class DescCardService {
    static async getAllDescCard() {
        return await DescCard.findAll()
    }
}

module.exports = DescCardService