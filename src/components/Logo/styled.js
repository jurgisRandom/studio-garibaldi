import styled from 'styled-components'
import media from 'styled-media-query'
import { Link } from 'gatsby'

export const LogoContainer = styled.figure`
    position: fixed;
    display: flex;
    width: 30%;

    ${media.greaterThan('large')`
        width: 70%;
        padding-bottom: 30rem;
    `}
    ${media.lessThan('large')`
        width: 50%;
        height: 100%;
        align-self: center;
    `}
    ${media.lessThan('medium')`
        position: initial;
        width: 100%;

    `}
`
export const Image = styled.img`
    max-width: 90%;
    min-width: 20%;

    margin: 0 auto;
    height: auto;

    ${media.greaterThan('large')`
        width: 30%;
    `}
    ${media.lessThan('large')`
        width: 50%;
    `}
    ${media.lessThan('medium')`
        width: 90%;
    `}
`
