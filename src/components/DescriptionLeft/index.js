import React from 'react'
import * as S from './styled'

const DescriptionLeft = ({ data }) => {
    return (
        <S.TextContainer>
            <S.Text>{data}</S.Text>
        </S.TextContainer>
    )
}

export default DescriptionLeft
