import axios from "axios";
// consumindo api sujeito progamador
const api = axios.create({
    baseURL: 'https://sujeitoprogramador.com'
})

export default api;
