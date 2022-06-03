import styled from 'styled-components'

export const Card = styled.div`
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
