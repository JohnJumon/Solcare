import * as anchor from '@project-serum/anchor';
import { ConnectionProvider as WalletConnectionProvider } from '@solana/wallet-adapter-react';
import { Solcare } from '../resources/solcare.types';
import SolcareIdl from '../resources/solcare.json';
import { createContext, useContext } from 'react';
import { PROGRAM_ADDRESS, RPC_API_KEY } from '../utils';
import NodeWallet from '@project-serum/anchor/dist/cjs/nodewallet';

const scDefaultValue = () => {
    const connection = new anchor.web3.Connection(RPC_API_KEY, {
        commitment: 'processed',
    });

    const provider = new anchor.AnchorProvider(
        connection,
        new NodeWallet(anchor.web3.Keypair.generate()),
        {
            commitment: 'processed',
            preflightCommitment: 'processed',
        }
    );

    const program = new anchor.Program<Solcare>(
        SolcareIdl as Solcare,
        new anchor.web3.PublicKey(PROGRAM_ADDRESS),
        provider
    );
    return program;
};

const smartContractContext = createContext({
    smartContract: scDefaultValue(),
});

export const useSmartContract = () => {
    return useContext(smartContractContext);
};

export const ConnectionProvider = (props: any) => {
    return (
        <WalletConnectionProvider endpoint="https://solana-devnet.g.alchemy.com/v2/bIPuobg6X0eDu34Afyg_24zQsQAjPoLE">
            {props.children}
        </WalletConnectionProvider>
    );
};
