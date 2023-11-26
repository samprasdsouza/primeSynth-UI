import { PRIMESYNTH_API_URL } from "../constants"
import axios from "axios"

export const primesynthService = {
    getAllProducts: async () => {
        console.log('here');
        const getAllProducts = await axios.get(
            `${PRIMESYNTH_API_URL}`
        )
        return { data: getAllProducts }
    }
}