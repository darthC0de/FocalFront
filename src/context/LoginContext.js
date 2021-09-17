import { createContext, useState } from 'react';
import { useHistory } from 'react-router-dom'
import api from '../services/api';

export const LoginContext = createContext({ handleLoginContext: () => { } });

const getTokenKey = () => localStorage.getItem('TOKEN_KEY')

const LoginContextProvider = ({ children }) => {
    const history = useHistory();

    async function handleLoginContext(email, password) {
        try {
            const response = await api.post('login', { email, password });

            localStorage.setItem('TOKEN_KEY', response.data.token);
            getTokenKey()
            history.push(`/Panel:${response.data.token}`)
            console.log(email, password);

        } catch (err) {
            console.error(err);
            const messageLoginError = "Falha ao fazer login, por favor verifique o email e senha e tente novamente."
            document.getElementById("messageError").innerHTML = messageLoginError
        }
    }

    return (
        <LoginContext.Provider value={{ handleLoginContext }}>
            {children}
        </LoginContext.Provider>
    );
}

export { LoginContextProvider };
export { getTokenKey };
export default LoginContext;
