import styled from 'styled-components'
import media from 'styled-media-query'
import { Link } from 'gatsby'

export const LogoContainer = styled.figure`
    height: fit-content;
    flex: 1;
    align-self: center;
    justify-self: center;

    ${media.lessThan('medium')`
        align-self: center;
        position: initial;
        order: -1;
        flex: .8;
    `}
    @media (min-height: 450px) and screen and (orientation: landscape) {
        width: 25;
    }
`
export const Image = styled.img`
    ${media.lessThan('medium')`
    max-width: 80%;
    margin: 0 auto;

    `}
`
