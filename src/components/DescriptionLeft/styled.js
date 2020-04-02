import styled from 'styled-components'
import media from 'styled-media-query'
import { Link } from 'gatsby'

export const TextContainer = styled.div`
    height: fit-content;
    order: -1;
    flex: 1;

    ${media.lessThan('medium')`
        align-self:flex-start;
        flex:0;
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
