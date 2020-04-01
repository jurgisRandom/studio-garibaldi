import React from 'react'
import logo from '../../images/studio-garibaldi.svg'
import * as S from './styled'

const Logo = () => {
    return (
        <S.LogoContainer>
            <S.Image src={logo} alt="Studio Garibaldi Logo" />
        </S.LogoContainer>
    )
}

export default Logo
