import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import Button from '@material-ui/core/Button';
import {auth, provider} from '../firebase';

function Login() {

    const signIn = () => {
        auth.signInWithPopup(provider).catch(console.error)
    }

    return (
        <Container>
            <Head>
                <title>
                    Login
                </title>
            </Head>

            <LoginContainer>
                <Logo
                    src='https://seeklogo.com/images/W/whatsapp-icon-logo-6E793ACECD-seeklogo.com.png'
                    alt='WhatsApp'
                />

                <Button onClick={signIn} variant='outlined' color='primary'>
                    Sign In
                </Button>
            </LoginContainer>
        </Container>
    );
}

export default Login;

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
`

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px;
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 4px 14px -3px rgba(0, 0, 0, 0.7);
`

const Logo = styled.img`
  height: 200px;
  width: 200px;
  margin-bottom: 50px;
`
