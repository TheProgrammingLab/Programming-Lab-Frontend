import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

export async function user_profile(token: string) {
  try {
    const response = await axios.get(`${apiUrl}/user/me`, {
      headers: { Authorization: `Bearer ${token}` },
      withCredentials: true,
    });

    return response;
  } catch (err) {
    console.log(err);
    return err;
  }
}

export async function update_user_profile() {}

export async function update_profile_image() {}
