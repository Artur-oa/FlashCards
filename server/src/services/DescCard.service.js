const {DescCard} = require("../../db/models/desccard")

class DescCardService {
    static async getAllDescCard() {
        return await DescCard.findAll()
    }
}

module.exports = DescCardService