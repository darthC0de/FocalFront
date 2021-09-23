import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './pages/Login/login'
import ChecklistPanel from './pages/ChecklistPanel/ChecklistPanel'
import NewChecklist from './pages/NewChecklist/NewChecklist'
import Checklist from './pages/Checklist/Checklist'
import ChecklistPDF from './pages/ChecklistPDF/ChecklistPDF'

import GlobalContext from './context/index.js';

export default function Routes() {
    return (
        <BrowserRouter>
            <GlobalContext>
                <Switch>
                    <Route exact path='/' component={Login} />
                    <Route path='/Panel' component={ChecklistPanel} />
                    <Route path='/NewChecklist' component={NewChecklist} />
                    <Route path='/Checklist' component={Checklist} />
                    <Route path='/ChecklistPDF' component={ChecklistPDF} />
                </Switch>
            </GlobalContext>
        </BrowserRouter>
    );
}