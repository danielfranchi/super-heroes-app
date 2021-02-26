import axios from "axios"

const baseApiURL = "https://www.superheroapi.com/api.php/100185885467083/search"

const api = axios.create({
  baseURL: baseApiURL
})

export default api
