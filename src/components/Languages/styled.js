import styled from 'styled-components'
import media from 'styled-media-query'
import { Link } from 'gatsby'

export const LanguageContainer = styled.div`
    position: absolute;
    right: 2.5rem;
    top: 2.5rem;
    height: fit-content;

    ${media.lessThan('medium')`
        position: absolute;
        left: 3rem;
        top: 70%;
    `}
    ${media.lessThan('535px')`
        top: 65%;
    `}
`

export const LanguageLink = styled(Link)`
    display: inline-block;
    margin-right: 0.5rem;
    color: red;
    font-size: 2.7rem;
    text-decoration: none;
`
