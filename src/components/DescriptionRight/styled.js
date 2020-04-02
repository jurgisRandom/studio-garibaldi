import styled from 'styled-components'
import media from 'styled-media-query'
import { Link } from 'gatsby'

export const TextContainer = styled.div`
    height: fit-content;
    flex: 1;

    ${media.lessThan('medium')`
        align-self: flex-start;
        order: 2;
        flex:0;
        margin-top: 1rem;
    `}
`

export const Text = styled.p`
    line-height: 2.5rem;
    color: rgb(212, 34, 38);
    font-family: Helvetica;
    text-align: right;

    ${media.greaterThan('medium')`
        font-size: 2rem;
    `}

    ${media.lessThan('medium')`
        font-size: 2rem;
        text-align: left;
    `}
`
