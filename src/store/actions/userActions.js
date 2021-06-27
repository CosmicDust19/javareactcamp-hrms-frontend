export const LOGIN = "LOGIN"
export const SIGN_OUT = "SIGN_OUT"

export function login(user) {
    return {
        type: LOGIN,
        payload: user
    }
}

export function signOut() {
    return {
        type: SIGN_OUT
    }
}