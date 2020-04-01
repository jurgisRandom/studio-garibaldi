import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div``

export const SiteContent = styled.section``

export const Container = styled.div`
    background-color: green;
    display: flex;
    justify-content: center;
    flex-direction: row;
    /* width: 100%;
    max-width: 100%;
    margin: 0 auto;
    padding: 1rem;
    */
    ${media.lessThan('medium')`
        justify-content: flex-end;
        flex-direction: column;

  `}
`
