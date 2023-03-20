import axios, { AxiosResponse, AxiosError } from "axios";

const axiosInstance = axios.create({
  timeout: 5000, // Request timeout in milliseconds
});

export const ApiService = {
  async get<T = any>(url: string, data?: any): Promise<T> {
    return await axiosInstance
      .get(url, { params: data })
      .then((response: AxiosResponse<T>) => response.data)
      .catch((error: AxiosError) => {
        console.error(`ApiService GET error: ${error}`);
        throw error;
      });
  },

  async post<T = any>(url: string, data: any): Promise<T> {
    return await axiosInstance
      .post(url, data)
      .then((response: AxiosResponse<T>) => response.data)
      .catch((error: AxiosError) => {
        console.error(`ApiService POST error: ${error}`);
        throw error;
      });
  },

  async put<T = any>(url: string, data: any): Promise<T> {
    return await axiosInstance
      .put(url, data)
      .then((response: AxiosResponse<T>) => response.data)
      .catch((error: AxiosError) => {
        console.error(`ApiService PUT error: ${error}`);
        throw error;
      });
  },

  async delete<T = any>(url: string, data?: any): Promise<T> {
    return await axiosInstance
      .delete(url, { data })
      .then((response: AxiosResponse<T>) => response.data)
      .catch((error: AxiosError) => {
        console.error(`ApiService DELETE error: ${error}`);
        throw error;
      });
  },
};
