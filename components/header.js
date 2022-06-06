import styled from 'styled-components'
import Image from 'next/image'

const HeaderStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* height: 250px; */
    height: 15rem;
    @media screen and (max-width: 600px) {
        height: 5rem;
    }
`
const Text = styled.div`
    color: ${({color}) => color || '#fafafa'};
    font-family: 'Luckiest Guy'
`
const AnimatedText = styled(Text)`
    z-index: ${({z}) => z || 0};
    line-height: 60%;
    font-size: 8rem;
    /* font-size: 12vw; */
    text-shadow: 0 -5px 10px #3337;
    text-transform: uppercase;
    animation: morph 2.75s ease-in-out forwards, wiggle 1500ms 3s ease-in-out infinite;
    @media screen and (max-width: 600px) {
        font-size: 3rem;
    }
    @keyframes morph {
        from {
            transform: perspective(1200px) rotate3d(1,0,0, 90deg);
        }
        to {
            transform: perspective(1200px) rotate3d(0,0,0, 90deg);
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

const LogoStyle = styled.span`
    margin-top: -100px;
    z-index: 15;
    animation: glide 3s ease-in-out alternate-reverse infinite;
    @media screen and (max-width: 600px) {
        visibility: hidden;
    }
    @keyframes glide {
        0% {
            transform: translateX(200px);
        }
        100% {
            transform: translateX(-200px);
        }
    }
    @keyframes flip {
        0% {
            transform: rotateY(-180deg);
        }
        100% {
            transform: rotateY(180deg);
        }
    }
`
const Logo = () => {
    return <LogoStyle>
        <Image src='/images/robot.png' width='75px' height='100px' />
    </LogoStyle>
}

const Header = (props) => {
    return <HeaderStyle>
        <AnimatedText color={({theme}) => theme.colors.title1}>Camp</AnimatedText>
        <Logo />
        <AnimatedText z='20' color={({theme}) => theme.colors.title2}>Prodigy</AnimatedText>
    </HeaderStyle>
}

export default Header