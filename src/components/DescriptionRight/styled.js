import styled from 'styled-components'
import media from 'styled-media-query'
import { Link } from 'gatsby'

export const TextContainer = styled.div`
    height: fit-content;
    align-self: flex-end;
    margin-left: auto;

    ${media.greaterThan('huge')`
        max-width: 20%;
    `}

    ${media.between('large', 'huge')`
        max-width: 30%;
    `}

    ${media.between('medium', 'large')`
        max-width: 30%;
        right: 5rem;
        width: 100%;
    `}

    ${media.lessThan('medium')`
        margin: 1rem auto 0;

        max-width: 80%;
        bottom: 6rem;
        width: 100%;
        align-self: flex-end;
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
        line-height: 3.5rem;
        font-size: 2.7rem;
        text-align: left;


    `}
`
