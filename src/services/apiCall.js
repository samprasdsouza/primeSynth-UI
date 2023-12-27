import { PRIMESYNTH_API_URL } from "../constants"
import axios from "axios"

export const primesynthService = {
    getAllProducts: async () => {
        const getAllProducts = await axios.get(
            `${PRIMESYNTH_API_URL}/api/v1/products?offset=`
        )
        return { data: getAllProducts }
    }
}