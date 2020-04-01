import React from 'react'
import * as S from './styled'

const DescriptionRight = ({ email, phone }) => {
    return (
        <S.TextContainer>
            <S.Text>
                <a href="mailto:studio@garibaldi.nl">{email}</a>
            </S.Text>
            <S.Text>{phone}</S.Text>
        </S.TextContainer>
    )
}

export default DescriptionRight
