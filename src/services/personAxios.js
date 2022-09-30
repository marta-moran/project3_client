import InitAxios from "./initAxios";

class PersonAxios extends InitAxios {
    constructor() {
        super('/user')
    }

    getAllPeople() {
        return this.axios.get('/').then((response) => response.data)
    }

    getOnePerson(id) {
        return this.axios.get(`/${id}`).then((response) => response.data)
    }

}

export default PersonAxios