import styled from 'styled-components'

const HeaderStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 20vh;
`
const Text = styled.div`
    color: ${({color}) => color || '#fafafa'};
    font-family: 'Roboto Flex';
    font-weight: ${({weight}) => weight || '900'};
`
const AnimatedText = styled(Text)`
    line-height: 8vw;
    text-transform: uppercase;
    animation: morph 2.75s ease-in-out forwards, wiggle 2s 3s ease-in-out infinite;
    @keyframes morph {
        from {
            transform: perspective(1200px) rotate3d(1,0,0, 90deg);
        }
        to {
            font-size: 12vw;
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

const Header = (props) => {
    return <HeaderStyle>
        <AnimatedText color={({theme}) => theme.colors.title1}>Camp</AnimatedText>
        <AnimatedText color={({theme}) => theme.colors.title2}>Prodigy</AnimatedText>
    </HeaderStyle>
}

export default Header