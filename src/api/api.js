import * as userAxios from "axios";

const axios = userAxios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'eded5159-581a-432d-ba1c-86c3bc8f1bdf'
    }
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return axios.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    },
    setProfile(id) {
        return axios.get('profile/' + id, {}).then(res => res.data);
    }
}

export const profileAPI = {
    getStatus(id) {
        return axios.get(`profile/status/${id}`).then(response => response.data);
    },
    updateStatus(s) {
        return axios.put(`profile/status`, {status:s}).then(response => response.data);
    },
    setProfile(id) {
        return axios.get('profile/' + id, {}).then(res => res.data);
    }
}
export const followAPI = {
    follow(id) {
        return axios.post('follow/' + id, {}).then(res => res.data.resultCode);
    },
    unfollow(id) {
        return axios.delete('follow/' + id).then(res => res.data.resultCode);
    }
}

export const authAPI = {
    getMe() {
        return axios.get(`auth/me`).then(response => { return response.data });
    }
}