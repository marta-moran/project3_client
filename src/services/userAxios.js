import InitAxios from './initAxios';

class UserAxios extends InitAxios {
    constructor() {
        super('/user');
    }

    me(token) {
        return this.axios.get('/me').then((response) => response.data);
    }

    edit(id) {
        return this.axios.put(`/edit/${id}`).then((response) => response.data)
    }

    delete(id) {
        return this.axios.delete(`/delete/${id}`).then((response) => response.data)
    }

    like(id) {
        return this.axios.put(`/like/${id}`).then((response) => response.data)
    }

    dislike(id) {
        console.log("dando dislike")
        return this.axios.put(`/dislike/${id}`).then((response) => response.data)
    }

    match(body) {

        return this.axios.put(`/match`, body)
            .then((response) => {
                return response.data;
            })
    }

    /* pensar mejor */
    getProfile() {
        return this.axios.get(`/profile`).then((response) => response.data)
    }

    getAllPeople() {
        return this.axios.get('/').then(({ data }) => data) //hacer q te salga todo el mundo menos tu
    }
    getOnePerson(id) {
        return this.axios.get(`/${id}`).then((response) => response.data)
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new UserAxios();
            console.log(this.instance)
        }
        return this.instance;
    }

}

export default UserAxios.getInstance();