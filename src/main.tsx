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
import FundraiserDetailCampaign from './views/FundraiserDetailCampaign';
import AdminContent from './components/layout/admin/adminContent';
import ReportDetail from './components/layout/admin/reportDetail';
import DetailCampaignReports from './views/DetailCampaignReports';

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
                            <PrivateRoute forAdmin={true}>
                                <Admin page="Dashboard">
                                    <AdminContent page="Dashboard" />
                                </Admin>
                            </PrivateRoute>
                        }
                    />

                    <Route
                        path="/admin/manage-KYC"
                        element={
                            <PrivateRoute forAdmin={true}>
                                <Admin page="Verifikasi User">
                                    <AdminContent page="Verifikasi User" />
                                </Admin>
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/admin/manage-user"
                        element={
                            <PrivateRoute forAdmin={true}>
                                <Admin page="Manajemen User">
                                    <AdminContent page="Manajemen User" />
                                </Admin>
                            </PrivateRoute>
                        }
                    />

                    <Route
                        path="/admin/manage-user/detail/:address"
                        element={
                            <PrivateRoute forAdmin={true}>
                                <Admin page="Detail User">
                                    <AdminContent page="Detail User" />
                                </Admin>
                            </PrivateRoute>
                        }
                    />

                    <Route
                        path="/admin/manage-campaign"
                        element={
                            <PrivateRoute forAdmin={true}>
                                <Admin page="Verifikasi Kesuksesan Campaign">
                                    <AdminContent page="Verifikasi Kesuksesan Campaign" />
                                </Admin>
                            </PrivateRoute>
                        }
                    />

                    <Route
                        path="/admin/manage-pengaduan"
                        element={
                            <PrivateRoute forAdmin={true}>
                                <Admin page="Pengaduan">
                                    <AdminContent page="Pengaduan" />
                                </Admin>
                            </PrivateRoute>
                        }
                    />

                    <Route
                        path="/admin/manage-pengaduan/detail/:id"
                        element={
                            <PrivateRoute forAdmin={true}>
                                <Admin page="Detail Pengaduan">
                                    <AdminContent page="Detail Pengaduan" />
                                </Admin>
                            </PrivateRoute>
                        }
                    />

                    <Route path="/explore" element={<FindCampaign />} />
                    <Route path="/campaign/:id" element={<DetailCampaign />} />
                    <Route
                        path="/campaign/reports/:id"
                        element={<DetailCampaignReports />}
                    />
                    <Route
                        path="/profile"
                        element={
                            <PrivateRoute>
                                <Profile page="Profil">
                                    <ProfileContent page="Profil" />
                                </Profile>
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/profile/my-campaign"
                        element={
                            <PrivateRoute>
                                <Profile page="Campaign Anda">
                                    <ProfileContent page="Campaign Anda" />
                                </Profile>
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/profile/my-campaign/create"
                        element={
                            <PrivateRoute>
                                <Profile page="Buat Campaign">
                                    <ProfileContent page="Buat Campaign" />
                                </Profile>
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/profile/transaction-history"
                        element={
                            <PrivateRoute>
                                <Profile page="Riwayat Transaksi">
                                    <ProfileContent page="Riwayat Transaksi" />
                                </Profile>
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/profile/settings"
                        element={
                            <PrivateRoute>
                                <Profile page="Pengaturan Akun">
                                    <ProfileContent page="Pengaturan Akun" />
                                </Profile>
                            </PrivateRoute>
                        }
                    />

                    <Route
                        path="/profile/my-campaign/detail/:id"
                        element={
                            <PrivateRoute>
                                <FundraiserDetailCampaign />
                            </PrivateRoute>
                        }
                    />
                </Routes>
            </App>
        </Router>
    </React.StrictMode>
);
