import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import api from '../../services/api'

import logoBk from '../../assets/logoBk.png'
import './styles.css'

export default function Login() {
    const history = useHistory();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('/login', { email, password });

            localStorage.setItem('id_user', response.data.id);

            history.push('/Panel');
        } catch (err) {
            const messageLoginError = "Falha ao fazer login, por favor verifique o email e senha e tente novamente."
            document.getElementById("messageError").innerHTML = messageLoginError
        }
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
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    name="psw"
                    autoComplete="current-password"
                    placeholder="Senha"
                    value={password}
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