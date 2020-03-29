import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import PostItem from '../components/PostItem'
import TitlePage from '../components/TitlePage'
import LocalizedLink from '../components/LocalizedLink'
import useTranslations from '../components/useTranslations'

import * as S from '../components/ListWrapper/styled'

const Index = ({ data: { markdownRemark } }) => {
    // useTranslations is aware of the global context (and therefore also "locale")
    // so it'll automatically give back the right translations
    const {
        hello,
        subline,
        category,
        latestPosts,
        allPosts,
    } = useTranslations()

    const postList = markdownRemark.edges
    console.log('markdownRemark:', markdownRemark)
    console.log('postList:', postList)

    return (
        <div className="homepage">
            <SEO title="Home" />
            <TitlePage text={hello} />

            <br />
            {markdownRemark.frontmatter.title}
            {/* <S.ListWrapper>
                {postList.map(
                    ({
                        node: {
                            frontmatter: {
                                background,
                                category,
                                date,
                                description,
                                title,
                                image,
                            },
                            timeToRead,
                            fields: { slug },
                        },
                    }) => (
                        <PostItem
                            slug={`/${slug}`}
                            background={background}
                            category={category}
                            date={date}
                            timeToRead={timeToRead}
                            title={title}
                            description={description}
                            image={image}
                        />
                    )
                )}
            </S.ListWrapper> */}
        </div>
    )
}

export default Index

export const query = graphql`
    query Index {
        markdownRemark(fileAbsolutePath: { regex: "/(pages)/.*\\\\.md$/" }) {
            id
            children {
                id
            }
            frontmatter {
                title
                description
                descriptionRight
                descriptionLeft
            }
            htmlAst
        }
    }
`
