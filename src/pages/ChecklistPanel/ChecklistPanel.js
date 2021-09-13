import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header'
import api from '../../services/api';
import { FaClipboardList } from 'react-icons/fa'

import './styles.css'

export default function ChecklistPanel() {
    const [storeInfo, setStoreInfo] = useState([]);
    const id_user = localStorage.getItem('id_user');

    useEffect(() => {
        api.get('panel', {
            headers: {
                authorization: id_user,
            }
        }).then(response => {
                setStoreInfo(response.data)
        })
    }, [id_user]);

    return (
        <>
            <Header title="Painel" />
            <div className="info">
                <h2>Setor Paulista</h2>
                <Link className="button" to="/NewChecklist">Novo Checklist</Link>
            </div>
            <main>
                <section>
                    <h3>Checklists</h3>
                    {storeInfo.length !== 0 ?
                        (storeInfo.map(info => (
                            <div className="panel-field" key={info.id}>
                                <span>
                                    Data: {info.date} | Bk Number: {info.bknumber}
                                    <br />
                                    Loja: {info.store}</span>
                                <Link to="/Checklist" onClick={() => localStorage.setItem('infoId', info.id)}>
                                    <FaClipboardList className="icon-clipboard" title="Ver Checklist" />
                                </Link>
                            </div>
                        ))) : (
                            <span className="empty-panel-message">
                                Não á nenhum (checklist) criado para ser exibido.
                            </span>
                        )}
                </section>
                <span id="checklistCreated" className="checklist-created">
                    Checklist criado com sucesso.
                </span>
            </main>
        </>
    );
}