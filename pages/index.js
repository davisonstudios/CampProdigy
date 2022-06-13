import styled from 'styled-components'
import { ThemeProvider } from "styled-components";
import Sections from '../components/sections';
import { theme } from '../data/theme';
import Rocket from '../components/rocket';
import Header from '../components/header';

const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 0 50px;
    margin: 0;
    @media screen and (max-width: 700px) {
        height: 100%;
    }
`

export default function Home(props) {
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Rocket />
                <Header />
                <Sections config={props.config} />
            </Container>
        </ThemeProvider>
    )
}
