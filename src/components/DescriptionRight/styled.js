import styled from 'styled-components'
import media from 'styled-media-query'
import { Link } from 'gatsby'

export const TextContainer = styled.div`
    height: fit-content;
    align-self: flex-end;
    margin-left: auto;

    ${media.greaterThan('huge')`
        max-width: 20%;
        background: orange;

    `}

    ${media.between('large', 'huge')`
    max-width: 30%;
    background: yellow;
    `}

    ${media.between('medium', 'large')`
        background: green;
        /* margin: 0 auto; */
        max-width: 30%;
        right: 5rem;
        width: 100%;
    `}

    ${media.lessThan('medium')`
    align-self: flex-end;

        max-width: 80%;
        left: 3rem;
        bottom: 6rem;
        width: 100%;
    `}
`

export const Text = styled.p`
    line-height: 2.5rem;
    color: red;
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
