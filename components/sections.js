import styled from 'styled-components'
import { config, configMac } from '../data/config'
import SectionCard from './sectioncard'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: start;
    gap: 20px;
    /* background-color: blue; */

    @media screen and (max-width: 700px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

const Sections = (props) => {
    const sections = props.config == 'mac' ? configMac : config
    console.log( sections )
    return (
        <Container>
            {sections.map( (section, index) =>
                <SectionCard key={index} section={section} />
            )}
        </Container>
    )
}

export default Sections