import React from 'react';
import Header from './header';
import { SvgIcon } from '@mui/material';
import SignUp from './Signup';
import AbcIcon from '@mui/icons-material/Abc';
import { ModalProvider } from './ModalProvider';
const Home = () => {
    return (
        <ModalProvider>
            <div>
                <SignUp></SignUp>
            </div>
        </ModalProvider>
    );
};
export default Home;
