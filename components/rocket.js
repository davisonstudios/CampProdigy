import styled from 'styled-components'
import Image from 'next/image';

const RocketStyle = styled.div`
    position: absolute;
    right: 0%;
    bottom: 8%;
    animation: fly 4.75s ease-in-out infinite;
    @keyframes fly {
        0% {
            transform: rotateZ(30deg) translate(0,0) scale(1.5);
        }
        100% {
            transform: translate(-80vw,-80vh) scale(0.2);
        }
    }
    @media screen and (max-width: 600px) {
        visibility: hidden;
        animation: none;
    }
`
const Rocket = () => {
    return <RocketStyle>
        <Image src='/images/rocket.png' width='130px' height='100px' />
    </RocketStyle>
}

export default Rocket