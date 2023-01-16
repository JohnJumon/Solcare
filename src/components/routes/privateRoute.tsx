import { useWallet } from '@solana/wallet-adapter-react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = (props: any) => {
    return localStorage.getItem('token') ? props.children : <Navigate to="/" />;
};

export default PrivateRoute;
