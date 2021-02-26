import api from "./api"

const service = {
getHero: (user: any) => api.get(`/${user}`)
}

export default service

