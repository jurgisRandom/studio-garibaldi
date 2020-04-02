import styled from 'styled-components'
import media from 'styled-media-query'
import { Link } from 'gatsby'

export const LogoContainer = styled.figure`
    height: fit-content;
    flex-grow: 0;
    border: 1px solid green;
    align-self:center;
    justify-self: center;
    /* position: fixed; */
    /* display: flex; */
    /* max-width: 70%; */
    /* width: 30%; */

    ${media.greaterThan('large')`
    background-color:blue;
        /* width: 70%; */
        /* padding-bottom: 30rem; */
    `}
    ${media.lessThan('large')`
    background-color:green;

        /* width: 50%; */
        /* align-self: center; */
    `}
    ${media.lessThan('medium')`
    background-color:yellow;
        align-self: center;
        position: initial;
        order: -1;
        flex: .8;
    `}
`
export const Image = styled.img`
    /* max-width: 500px; */
    /* max-width: 90%; */
    /* min-width: 20%; */

    /* margin: 0 auto; */
    /* height: auto; */

    ${media.greaterThan('large')`
        /* width: 30%; */
    `}
    ${media.lessThan('large')`
        /* width: 50%; */
    `}
    ${media.lessThan('medium')`
    max-width: 80%;
    margin: 0 auto;

    `}
`
