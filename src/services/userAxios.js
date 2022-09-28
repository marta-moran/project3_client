import InitAxios from './initAxios';

class UserAxios extends InitAxios {
    constructor() {
        super('/user');
    }
    me(token) {
        return this.axios.get('/me', {
            headers: {
                'authorization': `Bearer ${token}`
            }
        }).then((response) => response.data);
    }

    edit(id) {
        return this.axios.get(`/edit/${id}`).then((response) => response.data)
    }

    delete(id) {
        return this.axios.get(`/delete/${id}`).then((response) => response.data)
    }

    like(id) {
        return this.axios.get(`/like/${id}`).then((response) => response.data)
    }

    dislike(id) {
        return this.axios.get(`/dislike/${id}`).then((response) => response.data)
    }

    matches() {
        return this.axios.get(`/matches`).then((response) => response.data)
    }

    /* pensar mejor */
    getProfile() {
        return this.axios.get(`/profile`).then((response) => response.data)
    }


    static getInstance() {
        if (!this.instance) {
            this.instance = new UserAxios();
        }
        console.log(this.instance);
        return this.instance;
    }

}

export default UserAxios.getInstance();