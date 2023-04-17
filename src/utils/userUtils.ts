export const saveUser = (user) => {
    localStorage.setItem('USER',JSON.stringify(user))
}

export const getUser = () => {
    if (localStorage.getItem('USER')) {
        return JSON.parse(localStorage.getItem('USER')) 
    } else {
        return undefined;
       }   
}

export const removeUser = () => {
    localStorage.removeItem('USER')
}