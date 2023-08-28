'use client';
import { createTheme } from '@mui/material/styles';
import Dropdown from './Dropdown';
import { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
export const theme = createTheme({
    palette: {
        primary: {
            main: '#181414',
        },
    },
});
const Header: React.FC = () => {
    const back = () => {
        window.history.back();
    };
    const forward = () => {
        window.history.forward();
    };
    const [open, setopen] = useState(false);

    return (
        <div>
            <div className="flex justify-between relative">
                <div className="ml-2.5">
                    <button onClick={back}>
                        <ArrowCircleLeftOutlinedIcon fontSize="large" />{' '}
                    </button>
                    <button onClick={forward} className="ml-1.5">
                        <ArrowCircleRightOutlinedIcon fontSize="large" />
                    </button>
                </div>
                <ul
                    className="relative"
                    onClick={() => {
                        setopen(!open);
                    }}
                >
                    <button className="flex-1 w-32">
                        <AccountCircleIcon fontSize="large" />
                    </button>
                    {open && (
                        <div
                            className="absolute top full"
                            style={{ marginLeft: '-180px' }}
                        >
                            {<Dropdown />}
                        </div>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Header;
