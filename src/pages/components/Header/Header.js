import React from 'react'
import { useHistory } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa'
import './styles.css'

import LogoBk from '../../../assets/logoBk.png'

export default function Header(props) {
    const hisotry = useHistory();

    function handleLogout() {
        localStorage.clear();

        hisotry.push('/')
    }
    return (
        <header>
                <div className="group-header">
                    <div className="logo">
                        <img src={LogoBk} alt="Logo BurgerKing" />
                    </div>
                    <h1>{props.title}</h1>
                </div>

                <FaSignOutAlt className="icon-out" onClick={handleLogout} />
            </header>
    );
}