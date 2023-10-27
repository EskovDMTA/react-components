import axios from "axios";
import {configs} from "@typescript-eslint/eslint-plugin";

class ApiService {
    static url = "https://swapi.dev/api/"
    static async response(pageQuery: string){
        const queryParams = pageQuery.toLowerCase()
        const response = await axios.get(`${this.url + queryParams}`)
        console.log(response)
    }
}
