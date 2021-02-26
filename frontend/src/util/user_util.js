import axios from 'axios'

export const getUser = (id) => {
    return axios.get(`/api/users/${id}`)
        
}

export const getUsers = (data) => {
    return axios.get('/api/users')
    
}