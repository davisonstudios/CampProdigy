import styled from 'styled-components'
import { sections } from '../data/config'
import SectionCard from './sectioncard'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-flow: row wrap;
    gap: 20px;

    /* display: grid;
    grid-template-columns: repeat(3, 1fr); */
`

const Sections = (props) => {
    return (
        <Container>
            {sections.map( (section, index) =>
                <SectionCard key={index} section={section} />
            )}
        </Container>
    )
}

export default Sections