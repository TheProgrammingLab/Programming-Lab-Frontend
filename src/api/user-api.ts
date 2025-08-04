const apiUrl = import.meta.env.VITE_API_URL; 

export async function user_profile () {
    try{
        const response = await fetch(`${apiUrl}/user/me`, {
            method: "GET",
            credentials: "include"
        })

        return response;
    } catch (err) {
        console.log(err)
        return err;
    }
}

export async function update_user_profile () {}

export async function update_profile_image () {}
