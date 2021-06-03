import axios from 'axios'

const venodrAxios = axios.create({
    baseURL:"http://localhost:8000/api/vendor" //dev
    // baseURL:"https://gchatapplication.herokuapp.com/" //production
})

export default venodrAxios;
