import styled from 'styled-components'
import media from 'styled-media-query'
import { Link } from 'gatsby'

export const LogoContainer = styled.div`
    margin-top: 12%;
    display: flex;
    width: fit-content;
    height: fit-content;
    ${media.greaterThan('large')`
        margin-top: 7%;
    `}
    ${media.lessThan('large')`
        margin-top: 15%;
    `}
`
export const Image = styled.img`
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
