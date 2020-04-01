import styled from 'styled-components'
import media from 'styled-media-query'
import { Link } from 'gatsby'

export const LogoContainer = styled.figure`
    position: fixed;
    display: flex;
    width: 30%;

    ${media.greaterThan('large')`

    `}
    ${media.lessThan('large')`
        margin-top: 15%;
        height: 50%;
    `}
`
export const Image = styled.img`
    max-width: 50%;
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
