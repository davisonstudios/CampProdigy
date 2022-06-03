import styled from 'styled-components'
import { ThemeProvider } from "styled-components";
import Section from '../components/sections';
import { theme } from '../data/theme';

const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 0 50px;
    margin: 0;
    background-image: linear-gradient(${({theme}) => theme.colors.bggrad2}, ${({theme}) => theme.colors.bggrad1});
    font-family: 'Roboto Flex';
    font-size: 1rem;
    overflow: hidden;
`

export default function Home() {
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Section />
            </Container>
        </ThemeProvider>
    )
}
