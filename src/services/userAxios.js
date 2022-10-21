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

    /* ver tus matches */

    viewMatches(user) {
        return this.axios.get('/viewMatches', user).then((response) => response.data)
    }

    like(id) {
        return this.axios.put(`/like/${id}`).then((response) => response.data)
    }

    dislike(id) {
        // console.log("dando dislike")
        return this.axios.put(`/dislike/${id}`).then((response) => response.data)
    }

    match(body) {

        return this.axios.put(`/match`, body)
            .then((response) => {
                return response.data;
            })
    }

    getProfile(user) {
        return this.axios.get('/profile', user).then((response) => response.data)
    }

    getAllPeople() {
        return this.axios.get('/').then(({ data }) => data) //hacer q te salga todo el mundo menos tu
    }
    getOnePerson(id) {
        return this.axios.get(`/${id}`).then((response) => response.data)
    }

    getMessages(id) {
        return this.axios.get(`/messages/${id}`).then((response) => response.data)
    }

    saveMessages(id, msg) {
        console.log("BODY", msg)
        return this.axios.put(`/saveMessage/${id}`, msg).then((response) => response.data)
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new UserAxios();
            // console.log(this.instance)
        }
        return this.instance;
    }

}

export default UserAxios.getInstance();