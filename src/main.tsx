import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/layout/header';
import Home from './Home';
import FindCampaign from './FindCampaign';
import DetailCampaign from './DetailCampaign';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Header/>
        <DetailCampaign/>
    </React.StrictMode>
);
