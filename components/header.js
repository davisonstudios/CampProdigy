import styled from 'styled-components'

const HeaderStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 40vh;
`
const Text = styled.div`
    color: ${({color}) => color || '#fafafa'};
    font-family: 'Luckiest Guy'
    /* font-family: 'Roboto Flex'; */
    /* font-weight: ${({weight}) => weight || '900'}; */
`
const AnimatedText = styled(Text)`
    z-index: ${({z}) => z || 0};
    line-height: 8vh;
    text-transform: uppercase;
    animation: morph 2.75s ease-in-out forwards, wiggle 1500ms 3s ease-in-out infinite;
    @keyframes morph {
        from {
            transform: perspective(1200px) rotate3d(1,0,0, 90deg);
        }
        to {
            font-size: 12vh;
            text-shadow: 0 -5px 10px #3337;
        }
    }
    @keyframes wiggle {
        0% {
            transform: rotateZ(0deg);
        }
        20% {
            transform: rotateZ(1.5deg) skewX(-2deg);
        }
        90% {
            transform: rotateZ(-1.5deg) skewX(2deg);
        }
        100% {
            transform: rotateZ(0deg);
        }
    }
`

const Header = (props) => {
    return <HeaderStyle>
        <AnimatedText color={({theme}) => theme.colors.title1}>Camp</AnimatedText>
        <AnimatedText z='20' color={({theme}) => theme.colors.title2}>Prodigy</AnimatedText>
    </HeaderStyle>
}

export default Header