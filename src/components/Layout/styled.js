import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
    display: flex;
    min-height: 100vh;
    flex-direction: column;
`

export const SiteContent = styled.section`
    display: flex;
    flex: 1;
    width: 100%;
`

export const Container = styled.div`
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    padding: 1rem;
    ${media.greaterThan('large')`
    padding:1rem;
  `}
`
