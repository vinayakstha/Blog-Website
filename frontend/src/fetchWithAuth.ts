import axios, { AxiosRequestConfig } from "axios";

// Define the type for the options parameter
interface FetchWithAuthOptions extends AxiosRequestConfig {
    body?: any; // Optional, since not all requests need a body
}

export const fetchWithAuth = (
    url: string,
    options: FetchWithAuthOptions = {}
) => {
    const token = localStorage.getItem("token");

    return axios({
        url,
        method: options.method || "GET", // Default to GET if no method is provided
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            ...options.headers, // Preserve other headers
        },
        data: options.body, // Attach the request body if provided
    }).then((response) => response.data);
};
