import axios from "axios";
import { apiUrl } from "./apiUrl";

export const checkUserExistence = async (token: string) => {
  await axios.get(`${apiUrl}/user/existence`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
