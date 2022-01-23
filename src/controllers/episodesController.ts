const api = require("../api")

export class Episodes {
   async get(req, res) {
        try {
            const {data} = await api.get('episode/');
            return res.send(data.data);

        } catch (err) {
            console.log(err)
        }
    }


    async getById(req, res) {
        try {
            const id = req.params.id
            const {data} = await api.get(`episode/${id}`);
            return res.send(data.data);

        } catch (err) {
            console.log(err)
        }
    }

    async getByAnimeId(req, res) {
        try {
            const id = req.params.id
            const {data} = await api.get(`episode?anime_id=${id}`);
            return res.send(data.data);

        } catch (err) {
            console.log(err)
        }
    }
}