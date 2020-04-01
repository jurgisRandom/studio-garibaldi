import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import PostItem from '../components/PostItem'
import TitlePage from '../components/TitlePage'
import LocalizedLink from '../components/LocalizedLink'
import useTranslations from '../components/useTranslations'

import * as S from '../components/ListWrapper/styled'
import Logo from '../components/Logo'
import DescriptionLeft from '../components/DescriptionLeft'
import DescriptionRight from '../components/DescriptionRight'
import Languages from '../components/Languages'
import styled from 'styled-components'
import media from 'styled-media-query'

const Index = ({ data: { markdownRemark } }) => {
    console.log('markdownRemark:', markdownRemark)
    // useTranslations is aware of the global context (and therefore also "locale")
    // so it'll automatically give back the right translations
    return (
        <>
            <SEO title="Home" />
            <Languages />
            <Logo />

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
