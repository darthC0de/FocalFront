import React, { useState, useContext} from 'react'
import { LoginContext } from '../../context/LoginContext'

import logoBk from '../../assets/logoBk.png'
import './styles.css'

export default function Login() {
    const { handleLoginContext } = useContext(LoginContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    async function handleLogin(e) {
        e.preventDefault();
        handleLoginContext(email, password);
    }

    return (
        <div className="form-container">
            <form onSubmit={handleLogin}>
                <div className="group-form">
                    <img src={logoBk} alt="Logo Burger King" />
                    <p>Identifique-se</p>
                </div>

                <input
                    type="email"
                    name="email"
                    autoComplete="username"
                    placeholder="Email@gmail.com"
                    onChange={e => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    name="psw"
                    autoComplete="current-password"
                    placeholder="Senha"
                    onChange={e => setPassword(e.target.value)}
                />
                <label htmlFor="check">
                    <input type="checkbox" id="check" />
                    Manter-me conectado
                </label>

                <p id="messageError" className="messageErr"></p>
                <button type="submit">Entrar</button>
            </form>
        </div>
    );
}