import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div``

export const SiteContent = styled.section``

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    padding: 5rem;
    ${media.lessThan('medium')`
        padding: 3rem;
        flex-direction: column;

  `}
`
