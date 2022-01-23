const api = require("../api")

export class Animes {
   async get(req, res) {
        try {
            const {data} = await api.get('anime/');
            return res.send(data.data);

        } catch (err) {
            console.log(err)
        }
    }


    async getById(req, res) {
        try {
            const id = req.params.id
            const {data} = await api.get(`anime/${id}`);
            return res.send(data.data);

        } catch (err) {
            console.log(err)
        }
    }

    async getByName(req, res) {
        try {
            const title = req.params.title
            const {data} = await api.get(`anime/?title=${title}`);
            return res.send(data.data);

        } catch (err) {
            console.log(err)
        }
    }
}