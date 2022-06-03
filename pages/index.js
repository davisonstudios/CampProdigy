import Link from 'next/link'
import styled from 'styled-components'
import { ThemeProvider } from "styled-components";
import Image from 'next/image';

const sections = [
    {
        title: "Games",
        links: [
            {title: "Friv", link: "https://www.friv.com"},
            {title: "Cartoon Network", link: "https://www.cartoonnetworkhq.com/games"},
            {title: "Crazy Games", link: "https://www.crazygames.com"},
            {title: "Poki", link: "https://poki.com"},
            {title: "Arkadium", link: "https://www.arkadium.com"},
            {title: "Scratch", link: "https://scratch.mit.edu"},
        ]
    },
    {
        title: "Coding",
        links: [
            {title: "Scratch", link: "https://scratch.mit.edu"},
            {title: "Code.org", link: "https://code.org"},
        ]
    },
    {
        title: "Robotics",
        links: [
            {title: "Vex123", link: "https://code123.vex.com"},
            {title: "VexGo", link: "https://codeGO.vex.com"},
            {title: "VexVR", link: "https://vr.vex.com"},
        ]
    },
]

const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 0 50px;
    margin: 0;
    background-image: linear-gradient(${({theme}) => theme.colors.bggrad2}, ${({theme}) => theme.colors.bggrad1});
    /* background-color: ${({theme}) => theme.colors.background}; */
    font-family: 'Roboto Flex';
    font-size: 2rem;
    overflow: hidden;
`

const Sections = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-flow: row wrap;
    font-family: 'Roboto Flex';
    font-size: 2rem;
`

const Card = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    border-radius: 20px;
    background-image: linear-gradient(${({theme}) => theme.colors.bggrad1}, ${({theme}) => theme.colors.bggrad2});
    /* background-color: ${({theme}) => theme.colors.card}; */
    overflow: hidden;
    box-shadow: 0 -3px 10px #3337;
    padding: 20px;
    margin: 0 10px 10px;
    text-shadow: 0 -3px 10px #3337;
`

// const Title = styled.div`
//     color: ${({theme}) => theme.colors.title};
//     font-size: 10vw;
//     font-weight: 900;
//     text-shadow: 5px 5px 5px #666;
//     line-height: 200%;
// `

const Heading = styled.div`
    font-size: 2.5rem;
    font-weight: 600;
    color: ${({theme}) => theme.colors.heading};
`

const Item = styled.div`
    a, a:visited {
        color: ${({theme}) => theme.colors.link};
        text-decoration: none;
    }
`

const Header = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 400px;
`
const Text = styled.div`
    color: ${({color}) => color || '#fafafa'};
    font-family: 'Roboto Flex';
    font-size: ${({size}) => size || '6rem'};
    font-weight: ${({weight}) => weight || '900'};
`
const AnimatedText = styled(Text)`
    line-height: 60%;
    text-transform: uppercase;
    animation: morph 2.75s ease-in-out forwards, wiggle 2s 3s ease-in-out infinite;
    @keyframes morph {
        from {
            transform: perspective(1200px) rotate3d(1,0,0, 90deg);
        }
        to {
            font-size: 10rem;
            text-shadow: 0 -5px 10px #3337;
        }
    }
    @keyframes wiggle {
        20% {
            transform: rotateZ(5deg);
        }
        50% {
            transform: rotateZ(5deg);
        }
        70% {
            transform: rotateZ(-5deg);
        }
        100% {
            transform: rotateZ(-5deg);
        }
    }
`

const RocketStyle = styled.div`
    position: absolute;
    right: 0%;
    bottom: 8%;
    animation: fly 4.75s ease-in-out infinite;
    @keyframes fly {
        0% {
            transform: rotateZ(30deg) translate(0,0) scale(2);
        }
        100% {
            transform: translate(-80vw,-80vh) scale(0.2);
        }
    }
`
const Rocket = () => {
    return <RocketStyle>
        <Image src='/images/rocket.png' width='250px' height='200px' />
    </RocketStyle>
}

const Section = (props) => {
    const { sections } = props

    return <>
        <Rocket />
        {/* <Title>Camp Prodigy</Title> */}
        <Header>
                <AnimatedText color={({theme}) => theme.colors.title1}>Camp</AnimatedText>
                <AnimatedText color={({theme}) => theme.colors.title2}>Prodigy</AnimatedText>
         </Header>

        <Sections>
            {
                sections.map( section => {
                    const {title, links} = section
                    return <Card>
                        <Heading>{title}</Heading>
                        {links.map( (link, index) => {
                            return <Item><Link href={link.link}><a>{link.title}</a></Link></Item>
                        })}
                    </Card>
                })
            }
        </Sections>
    </>
}

export default function Home() {
    const theme = {
        colors: {
            background: '#7de8ea',
            bggrad1: '#61f4de',
            bggrad2: '#6e78ff',
            card: '#C9CFCF',
            title1: '#fff',
            title2: '#E3311D',
            link: '#fff',
            heading: '#E3311D',
        }
    }

  return (
    <ThemeProvider theme={theme}>
        <Container>
            <Section sections={sections} />
        </Container>
    </ThemeProvider>
  )
}
