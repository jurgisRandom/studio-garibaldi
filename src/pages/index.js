import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'

import * as S from '../components/ListWrapper/styled'
import Logo from '../components/Logo'
import DescriptionLeft from '../components/DescriptionLeft'
import DescriptionRight from '../components/DescriptionRight'
import Languages from '../components/Languages'
import styled from 'styled-components'
import media from 'styled-media-query'

const Index = ({ data: { markdownRemark } }) => {
    return (
        <>
            <SEO title="Home" />
            <Logo />
            <Languages />

            <DescriptionLeft
                data={markdownRemark.frontmatter.descriptionLeft}
            />
            <DescriptionRight
                email={markdownRemark.frontmatter.email}
                phone={markdownRemark.frontmatter.phone}
            />
        </>
    )
}

export default Index

export const query = graphql`
    query Index($locale: String!) {
        markdownRemark(
            fileAbsolutePath: { regex: "/(pages)/.*\\\\.md$/" }
            fields: { locale: { eq: $locale } }
        ) {
            id
            children {
                id
            }
            frontmatter {
                title
                description
                descriptionRight
                descriptionLeft
                email
                phone
            }
            htmlAst
        }
    }
`
const StyledTextContainer = styled.div`
    display: flex;
    ${media.lessThan('medium')`
        flex-direction: column-reverse;

    `};
`
