import { useWallet } from '@solana/wallet-adapter-react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = (props: any) => {
    const { connected } = useWallet();

    return connected ? props.children : <Navigate to="/" />;
};

export default PrivateRoute;
