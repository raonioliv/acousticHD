import axios from 'axios'

export default axios.create({ 
    baseURL: process.env.VUE_APP_SERVER_BASE_URL || 'http://localhost:8081/', 
})
