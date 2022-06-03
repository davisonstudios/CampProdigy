import Link from 'next/link'
import styled from 'styled-components'
import { sections } from '../data/config'
import { Card } from './card';

const SectionStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-flow: row wrap;
    font-family: 'Roboto Flex';
    font-size: 2rem;
    @media screen and (max-width: 600px) {
        font-size: 6vw;
    }
`
const Heading = styled.div`
    font-size: 3rem;
    font-weight: 600;
    color: ${({theme}) => theme.colors.heading};
    @media screen and (max-width: 600px) {
        font-size: 5vw;
    }
`
const Item = styled.div`
    a, a:visited {
        color: ${({theme}) => theme.colors.link};
        text-decoration: none;
    }
`

const Sections = (props) => {
    return <>
        <SectionStyle>
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
        </SectionStyle>
    </>
}

export default Sections