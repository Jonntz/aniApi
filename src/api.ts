import axios from "axios";

const api = axios.create({
    baseURL:"https://api.aniapi.com/v1/"
})

module.exports = api;