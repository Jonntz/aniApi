const api = require("../api")

export class Songs {
   async get(req, res) {
        try {
            const {data} = await api.get('song/');
            return res.send(data.data);

        } catch (err) {
            console.log(err)
        }
    }


    async getById(req, res) {
        try {
            const id = req.params.id
            const {data} = await api.get(`song/${id}`);
            return res.send(data.data);

        } catch (err) {
            console.log(err)
        }
    }

    async getByAnimeId(req, res) {
        try {
            const id = req.params.id
            const {data} = await api.get(`song?anime_id=${id}`);
            return res.send(data.data);

        } catch (err) {
            console.log(err)
        }
    }

    async getByName(req, res) {
        try {
            const title = req.params.title
            const {data} = await api.get(`song?title=${title}`);
            return res.send(data.data);

        } catch (err) {
            console.log(err)
        }
    }

    async getByArtist(req, res) {
        try {
            const artist = req.params.artist
            const {data} = await api.get(`song?artist=${artist}`);
            return res.send(data.data);

        } catch (err) {
            console.log(err)
        }
    }

    // async getByAlbum(req, res) {
    //     try {
    //         const album = req.params.album
    //         const {data} = await api.get(`song?album=${album}`);
    //         return res.send(data.data);

    //     } catch (err) {
    //         console.log(err)
    //     }
    // }
}