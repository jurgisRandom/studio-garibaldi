import styled from 'styled-components'
import media from 'styled-media-query'
import { Link } from 'gatsby'

export const TextContainer = styled.div`
    height: fit-content;
    position: absolute;
    bottom: 5rem;
    left: 5rem;

    ${media.greaterThan('huge')`
        max-width: 20%;
    background: orange;

    `}

    ${media.between('large', 'huge')`
    max-width: 30%;
    background: blue;
    `}

    ${media.between('medium', 'large')`
        background: green;
        margin: 0 auto;
        max-width: 30%;
        left: 5rem;
        width: 100%;
    `}

    ${media.lessThan('medium')`
        margin: 0 auto;
        max-width: 80%;
        left: 3rem;
        bottom: 15rem;
        width: 100%;
    `}
`

export const Text = styled.p`
    line-height: 2.5rem;
    color: red;
    font-family: Helvetica;

    ${media.greaterThan('medium')`
        font-size: 2rem;
    `}

    ${media.lessThan('medium')`
        line-height: 3.5rem;
        font-size: 2.7rem;

    `}
`
