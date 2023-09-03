'use client';
import React, { useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {
    useModal,
    openModal,
    closeModal,
    ModalProvider,
} from './ModalProvider';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Signin(props) {
    const { modalState, dispatch } = useModal();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const Idref = useRef(null);
    const Pwref = useRef(null);

    const validId = 'helloworld';
    const validPw = 'Qwer!234';

    const onSubmit = (data) => {
        if (data.id === validId && data.password === validPw) {
            console.log('로그인 성공!');
        } else if (data.id !== validId && data.password !== validPw) {
            dispatch(
                openModal(
                    '이메일: @를 포함하여 앞뒤로 한글자 이상의 조건이 필요합니다.비밀번호: 8자 이상 + 특수문자 1개 이상 + 영문 소문자 최소 1개 + 영문 대문자 최소 1개의 조건이 필요합니다.',
                ),
            );
            Idref.current?.focus();
        } else if (data.id !== validId) {
            dispatch(
                openModal(
                    '이메일 : @를 포함하여 앞뒤로 한글자 이상의 조건이 필요합니다',
                ),
            );
            Idref.current?.focus();
        } else {
            dispatch(
                openModal(
                    ' 비밀번호 : 8자 이상 + 특수문자 1개 이상 + 영문 소문자 최소 1개 + 영문 대문자 최소 1개의 조건이 필요합니다.',
                ),
            );
            Pwref.current?.focus();
        }
    };

    const Modalclose = () => {
        dispatch(closeModal());
    };

    const handleModalContentClick = (e) => {
        e.stopPropagation();
    };

    return (
        <ThemeProvider theme={createTheme()}>
            {' '}
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
                        Sign in
                    </Typography>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <TextField
                            {...register('id', { required: true })}
                            margin="normal"
                            fullWidth
                            id="id"
                            label="아이디"
                            name="id"
                            autoFocus
                        />
                        {errors.id && <p>아이디를 입력하세요.</p>}
                        <TextField
                            {...register('password', { required: true })}
                            margin="normal"
                            fullWidth
                            name="password"
                            label="비밀번호"
                            type="password"
                            id="password"
                        />
                        {errors.password && <p>비밀번호를 입력하세요.</p>}

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            className="bg-[#1E90FF] text-[#fff] hover:bg-[#808080]"
                        >
                            Sign In
                        </Button>
                    </form>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
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
            </Container>{' '}
        </ThemeProvider>
    );
}

export default Signin;
