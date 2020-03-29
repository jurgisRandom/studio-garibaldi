import React, { useState } from 'react'
import useTranslations from '../useTranslations'
import Navigation from '../Navigation'
import Languages from '../Languages'
import ButtonMenu from '../ButtonMenu'
import Logo from '../Logo'

import * as S from './styled'

const Header = () => {
    return (
        <S.HeaderWrapper>
            <S.Container>
                <S.NavLanguages>
                    <Languages />
                </S.NavLanguages>
            </S.Container>
        </S.HeaderWrapper>
    )
}

export default Header
