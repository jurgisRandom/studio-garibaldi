import styled from 'styled-components'
import media from 'styled-media-query'
import { Link } from 'gatsby'

export const LanguageContainer = styled.div`
    z-index: 999;
    position: absolute;
    right: 2.5rem;
    top: 2.5rem;
    height: fit-content;
    display: flex;
    align-content: flex-start;

    ${media.lessThan('medium')`
        /* margin: 0 0 1rem 0; */
        /* position: inherit;
        margin: 2rem auto;
        max-width: 80%;
        left: 3rem;
        bottom: 15rem;
        width: 100%; */
        position: inherit;
        align-self: flex-start;
        order:-1;
        margin-bottom:4rem;
    `}
    ${media.lessThan('535px')`
        /* top: 65%; */
    `}
`

export const LanguageLink = styled(Link)`
    display: inline-block;
    color: rgb(212, 34, 38);
    font-size: 2.7rem;
    text-decoration: none;
`
