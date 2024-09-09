import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params:{
        key : 'be07b38d610c4e6197fe66f22e6a16e8'
    }
})

