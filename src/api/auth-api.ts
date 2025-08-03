const apiUrl = import.meta.env.VITE_API_URL;

type t_auth = {
    loginId: string
    password: string
}

type t_signup = {
    email: string
    username: string
    password: string
    role: "student" | "tutor" | ""
    confirmPassword: string

}

export async function auth_login (login: t_auth) {
    try {    
        
        const response = await fetch(`${apiUrl}/auth/login`, {
            method: 'POST',
            body: JSON.stringify(login)
        })

        console.log(response)

        return response;
    } catch (err) {
        console.log(err)
        return err;
    }
}


export async function auth_register (signup: t_signup) {
    try {
        const response = await fetch(`${apiUrl}/auth/signup`, {
            method: "POST",
            body: JSON.stringify(signup)
        })


        return response;
    } catch (err) {
        console.log(err)
        return err;
    }

}

export async function auth_send_verification_email () {}

export async function auth_verification () {}

export async function auth_forgot_password () {}

export async function auth_reset_password () {}

export async function auth_logout () {}