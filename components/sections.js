import Link from 'next/link'
import styled from 'styled-components'
import { sections } from '../data/config'
import { Card } from './card';

const SectionStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-flow: row wrap;
    font-family: 'Luckiest Guy';
    font-size: 2rem;
    @media screen and (max-width: 600px) {
        font-size: 6vw;
    }
`
const Heading = styled.div`
    font-size: 3rem;
    height: 4rem;
    /* font-weight: 600; */
    color: ${({theme}) => theme.colors.heading};
    @media screen and (max-width: 600px) {
        font-size: 5vw;
    }
`
const Item = styled.div`
    color: ${({theme}) => theme.colors.link};
    text-decoration: none;
    :hover {
        color: ${({theme}) => theme.colors.linkselected};
        animation: jiggle 600ms ease-in-out infinite;
        @keyframes jiggle {
            0% {
                transform: rotateZ(0deg);
            }
            33% {
                transform: rotateZ(2deg);
            }
            66% {
                transform: rotateZ(0deg);
            }
            100% {
                transform: rotateZ(-2deg);
            }
        }
    }
`

const Sections = (props) => {
    return (
        <SectionStyle>
            {sections.map( (section, index) => {
                const {title, links} = section
                return <Card key={index}>
                    <Heading>{title}</Heading>
                    {links.map( (link, index) => {
                        return <Link key={index} href={link.link}>
                                <Item>{link.title}</Item>
                            </Link>
                    })}
                </Card>
            })}
        </SectionStyle>
    )
}

export default Sections