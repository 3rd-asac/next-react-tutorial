'use client';
import * as React from 'react';
import { useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { useState, useRef } from 'react';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { openModal, closeModal, useModal } from '../ModalProvider';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Modal } from '@mui/material';

function Copyright(props: any) {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SignUp() {
    const Idref = useRef<HTMLInputElement>(null);
    const Pwref = useRef<HTMLInputElement>(null);
    const { modalState, dispatch } = useModal();
    const [Id, setId] = useState('');
    const [Pw, setPw] = useState('');
    const modalRef = useRef<HTMLDivElement>(null);

    const Pwregex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const Idregex =
        /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/;

    function Changeid(e: React.ChangeEvent<HTMLInputElement>) {
        setId(e.target.value);
        console.log(e.target.value);
    }

    function Changepw(e: React.ChangeEvent<HTMLInputElement>) {
        setPw(e.target.value);
        console.log(e.target.value);
        if (Pwregex.test(Pw) == false) {
            return 'password 가 조건에 맞지 않습니다.';
        } else {
            console.log('Pw 설정 ok');
        }
    }

    function validateInput() {
        if (!Idregex.test(Id) && !Pwregex.test(Pw)) {
            dispatch(
                openModal(
                    '이메일: @를 포함하여 앞뒤로 한글자 이상의 조건이 필요합니다.비밀번호: 8자 이상 + 특수문자 1개 이상 + 영문 소문자 최소 1개 + 영문 대문자 최소 1개의 조건이 필요합니다.',
                ),
            );
            Idref.current?.focus();
        } else if (!Idregex.test(Id)) {
            dispatch(
                openModal(
                    '이메일 : @를 포함하여 앞뒤로 한글자 이상의 조건이 필요합니다',
                ),
            );
            Idref.current?.focus();
        } else if (!Pwregex.test(Pw)) {
            dispatch(
                openModal(
                    ' 비밀번호 : 8자 이상 + 특수문자 1개 이상 + 영문 소문자 최소 1개 + 영문 대문자 최소 1개의 조건이 필요합니다.',
                ),
            );
            Pwref.current?.focus();
        } else {
            console.log('회원가입 성공!');
        }
    }
    const Modalclose = () => {
        dispatch(closeModal());
    };

    const handleModalContentClick = (e) => {
        e.stopPropagation();
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: '#1E90FF' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        회원가입
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    type="text"
                                    placeholder="아이디 입력"
                                    value={Id}
                                    onChange={(e) => setId(e.target.value)}
                                    ref={Idref}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    type="password"
                                    placeholder="비밀번호 입력"
                                    value={Pw}
                                    onChange={(e) => setPw(e.target.value)}
                                    ref={Pwref}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            fullWidth
                            sx={{ mt: 3, mb: 2 }}
                            onClick={validateInput}
                            className="bg-[#1E90FF] text-[#fff] hover:bg-[#808080]"
                        >
                            Sign Up
                        </Button>
                        {modalState.isOpen && (
                            <div
                                className="absolute top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.2)] z-100 flex items-center justify-center"
                                onClick={Modalclose}
                            >
                                <div
                                    className="w-[600px] h-[400px] text-center bg-white p-4 mx-auto my-8 rounded-lg shadow-lg w-96"
                                    onClick={handleModalContentClick}
                                >
                                    <p>{modalState.content}</p>
                                    <button
                                        onClick={() => dispatch(closeModal())}
                                        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                    >
                                        확인
                                    </button>
                                </div>
                            </div>
                        )}

                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="#" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    );
}
