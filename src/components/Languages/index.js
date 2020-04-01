import React from 'react'
import { LocaleContext } from '../Layout'
import * as S from './styled'

const Languages = () => {
    const { locale } = React.useContext(LocaleContext)

    return (
        <>
            <S.LanguageContainer>
                {locale !== 'en' ? (
                    <S.LanguageLink
                        // onClick={() => setLanguage('EN')}
                        to="/"
                        hrefLang="en"
                    >
                        EN
                    </S.LanguageLink>
                ) : (
                    <S.LanguageLink
                        // onClick={() => setLanguage('NL')}
                        to="/nl"
                        hrefLang="nl"
                    >
                        NL
                    </S.LanguageLink>
                )}
            </S.LanguageContainer>
        </>
    )
}

export default Languages
