import axios from "axios"

const api = axios.create({
    baseURL: 'https://api.nasa.gov/planetary'
})

export default api