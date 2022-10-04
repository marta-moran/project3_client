import axios from 'axios';

class InitAxios {
    constructor(path) {
        this.axios = axios.create({
            baseURL: `http://localhost:5005/api${path}`
        })

        this.axios.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("tokenAuth");

            if (storedToken) {
                config.headers = { authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }
}

export default InitAxios;