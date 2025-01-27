import { ApiResponse } from "@/model/ApiResponse";
import { ErrorResponse } from "@/model/ErrorReponse";
import { User } from "@/model/User";
import axios, { AxiosError } from "axios";
import api from "..";

export const createUser = async (user: User): Promise<ApiResponse<unknown>> => {
    console.log(user)
    try {
        const response = await api.post('/user/create', user)
        return {
            success: true,
            message: response.data.data
        }
    } catch (err) {
        if (axios.isAxiosError(err)) {
            const axiosError = err as AxiosError<ErrorResponse>;
            if (axiosError.response) {
                return {
                    success: false,
                    error: axiosError.response.data.details
                };
            }
        }
    }
    return {
        error: "Internal server error"
    }
}