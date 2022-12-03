import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/layout/header';
import Home from './Home';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Header/>
        <Home/>
    </React.StrictMode>
);
