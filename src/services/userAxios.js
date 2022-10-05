import InitAxios from './initAxios';

class UserAxios extends InitAxios {
    constructor() {
        super('/user');
    }

    me(token) {
        return this.axios.get('/me').then((response) => response.data);


    }

    edit(user) {
        return this.axios.put('/profile/edit', user).then((response) => response.data)
    }

    delete(user) {
        return this.axios.delete('/profile/delete', user).then((response) => response.data)
    }

    like(id, body) {
        console.log("hola?")
        console.log(body)
        return this.axios.put(`/like/${id}`, body).then((response) => response.data)
    }

    dislike(id) {
        return this.axios.get(`/dislike/${id}`).then((response) => response.data)
    }

    matches() {
        return this.axios.get(`/matches`).then((response) => response.data)
    }

    /* pensar mejor */
    getProfile(user) {
        return this.axios.get('/profile', user).then((response) => response.data)
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