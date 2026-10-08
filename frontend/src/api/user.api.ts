import axios from "axios";
import { apiUrl } from "./apiUrl";

export const checkUserExistenceAPI = async (token: string) => {
  return await axios.get(`${apiUrl}/user/existence`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
