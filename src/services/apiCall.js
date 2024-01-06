import { isEmpty } from "lodash";
import { PRIMESYNTH_API_URL } from "../constants"
import axios from "axios"

export const primesynthService = {
    getAllProducts: async (payload) => {
        let url = `${PRIMESYNTH_API_URL}/api/v1/products`
        if (!isEmpty(payload.payload)) {
            url = payload.payload
        }
        const getAllProducts = await axios.get(
            url
        )
        return { data: getAllProducts.data }
    },
    getProductById: async(payload) => {
        let url = `${PRIMESYNTH_API_URL}/api/v1/products/test/${payload.payload}`
        
        const getProductById = await axios.get(
            url,
        )

        return { data: getProductById.data }
    }
}