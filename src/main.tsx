import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './views/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Admin from './views/admin/Admin';

import './index.css';
import App from './App';
import FindCampaign from './views/FindCampaign';
import DetailCampaign from './views/DetailCampaign';
import Profile from './views/Profile';
import ProfileContent from './components/layout/profile/profileContent';

import 'react-toastify/dist/ReactToastify.min.css';
import PrivateRoute from './components/routes/privateRoute';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Router>
            <App>
                <Routes>
                    <Route
                        path="/*"
                        element={
                            <p className="text-xl font-bold text-center my-10">
                                Halaman Tidak Ditemukan ...
                            </p>
                        }
                    />
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/admin"
                        element={
                            <PrivateRoute>
                                <Admin />
                            </PrivateRoute>
                        }
                    />
                    <Route path="/campaign/:id" element={<DetailCampaign />} />
                    <Route path="/explore" element={<FindCampaign />} />
                    <Route path="/campaign/:id" element={<DetailCampaign />} />
                    <Route
                        path="/profile"
                        element={
                            <Profile page="Profil">
                                <ProfileContent page="Profil" />
                            </Profile>
                        }
                    />
                    <Route
                        path="/profile/my-campaign"
                        element={
                            <Profile page="Campaign Anda">
                                <ProfileContent page="Campaign Anda" />
                            </Profile>
                        }
                    />
                    <Route
                        path="/profile/my-campaign/create"
                        element={
                            <Profile page="Buat Campaign">
                                <ProfileContent page="Buat Campaign" />
                            </Profile>
                        }
                    />
                    <Route
                        path="/profile/transaction-history"
                        element={
                            <Profile page="Riwayat Transaksi">
                                <ProfileContent page="Riwayat Transaksi" />
                            </Profile>
                        }
                    />
                    <Route
                        path="/profile/settings"
                        element={
                            <Profile page="Pengaturan Akun">
                                <ProfileContent page="Pengaturan Akun" />
                            </Profile>
                        }
                    />
                </Routes>
            </App>
        </Router>
    </React.StrictMode>
);
