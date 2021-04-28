import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import Button from '@material-ui/core/Button';

function Login() {
    return (
        <Container>
            <Head>
                <title>
                    Login
                </title>
            </Head>

            <Button>
                Start a New Chat
            </Button>
        </Container>
    );
}

export default Login;

const Container = styled.div``
