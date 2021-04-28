import Head from 'next/head'
import styled from 'styled-components';
import SideBar from '../components/SideBar';

export default function Home() {
    return (
        <Container>
            <Head>
                <title>
                    WhatsNick
                </title>

                <link rel='icon' href='/favicon.ico' />
            </Head>

            <SideBar />
        </Container>
    )
}

const Container = styled.div``
