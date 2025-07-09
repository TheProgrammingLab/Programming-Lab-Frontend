// const usernameRegex = /^(?![._])[a-zA-Z0-9._]{3,20}(?<![._])$/
// const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
// const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/


export function validateInput (state: string, type: string, handleInvalid: (arg: string) => void, password?:string): boolean {
    if (state == "" || !state) {
        handleInvalid(`${type} is required`)
        return false;
    }

    if (type == "confirm password" && state != password) {
        handleInvalid(`Confirm Password must match password`)
        return false;
    }

    // switch(type) {
    //     case 'username':
    //         if (!usernameRegex.test(state)) {
    //             handleInvalid(`${type} should be more than 3 Letters`)
    //             return false;
    //         }
    //         break;
        
    //     case 'password':
    //         if (!passwordRegex.test(state)) {
    //             handleInvalid(`Use a Stronger Password`)
    //             return false;
    //         }
    //         break;
        
    //     case 'email':
    //         if (!emailRegex.test(state)) {
    //             handleInvalid(`Invalid Email format`)
    //             return false;
    //         }
    //         break;

    //     case 'confirm password':
    //         if (state != password) {
    //             handleInvalid(``)
    //             return false;
    //         }
    //         break;
    //     default:
    //         return true;
    // }

    return true;
}