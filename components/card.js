import styled from 'styled-components'

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    border-radius: 20px;
    background-image: linear-gradient(-20deg, ${({theme}) => theme.colors.bggrad2}, ${({theme}) => theme.colors.bggrad1});
    overflow: hidden;
    box-shadow: 0 -3px 10px #3337;
    padding: 20px;
    text-shadow: 0 -3px 10px #3337;
`
