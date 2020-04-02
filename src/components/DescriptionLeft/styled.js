import styled from 'styled-components'
import media from 'styled-media-query'
import { Link } from 'gatsby'

export const TextContainer = styled.div`
    height: fit-content;
    border: 1px solid red;
    order: -1;

     ${media.greaterThan('huge')`
        max-width: 20%;
    `}
    ${media.between('large', 'huge')`
        max-width: 30%;
    `}
    ${media.between('medium', 'large')`
        max-width: 30%;
        left: 5rem;
        width: 100%;
    `}
    ${media.lessThan('medium')`
        align-self:flex-start;
    `};
`

export const Text = styled.p`
    line-height: 2.5rem;
    color: rgb(212, 34, 38);
    font-family: Helvetica;

    ${media.greaterThan('medium')`
        font-size: 2rem;
    `}

    ${media.lessThan('medium')`
        line-height: 3.5rem;
        font-size: 2.7rem;

    `}
`
