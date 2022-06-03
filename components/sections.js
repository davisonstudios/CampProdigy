import Link from 'next/link'
import styled from 'styled-components'
import { sections } from '../data/config'
import Rocket from './rocket';
import Header from './header';

const SectionStyle = styled.div`
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
    align-items: center;
    border-radius: 20px;
    background-image: linear-gradient(${({theme}) => theme.colors.bggrad1}, ${({theme}) => theme.colors.bggrad2});
    overflow: hidden;
    box-shadow: 0 -3px 10px #3337;
    padding: 20px;
    margin: 0 10px 10px;
    text-shadow: 0 -3px 10px #3337;
`

const Heading = styled.div`
    font-size: 3rem;
    font-weight: 600;
    color: ${({theme}) => theme.colors.heading};
`

const Item = styled.div`
    a, a:visited {
        color: ${({theme}) => theme.colors.link};
        text-decoration: none;
    }
`

const Section = (props) => {
    // const { sectionStyle } = props

    return <>
        <Rocket />
        <Header />
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

export default Section