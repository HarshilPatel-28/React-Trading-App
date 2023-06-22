import axios from "axios"

const TOKEN = "chu18g1r01qvn1d2sho0chu18g1r01qvn1d2shog"

export default axios.create({
    baseURL:"https://finnhub.io/api/v1",
    params:{
        token: TOKEN
    }
})