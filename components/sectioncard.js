import styled from 'styled-components'
import Link from 'next/link'
import { Card } from './card';

const Heading = styled.div`
    font-size: 2rem;
    /* line-height: 150%; */
    /* height: 6vw; */
    color: ${({theme}) => theme.colors.heading};
`
const Item = styled.div`
    color: ${({theme}) => theme.colors.link};
    font-size: 1.75rem;
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
const Container = styled.div`
    width: 320px;
    font-family: 'Luckiest Guy';
`

const SectionCard = (props) => {
    const {key} = props
    const {title, links} = props.section

    return (
        <Container key={key}>
            <Card>
                <Heading>{title}</Heading>
                {links.map( (link, index) => {
                    return <Link key={index} href={link.link}>
                            <Item>{link.title}</Item>
                        </Link>
                })}
            </Card>
        </Container>
    )
}

export default SectionCard