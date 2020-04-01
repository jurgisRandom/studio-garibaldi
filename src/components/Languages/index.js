import React, { useState } from 'react'

import * as S from './styled'

const Languages = () => {
    const [language, setLanguage] = useState('EN')
    return (
        <>
            <S.LanguageContainer>
                {language !== 'EN' ? (
                    <S.LanguageLink
                        onClick={() => setLanguage('EN')}
                        to="/"
                        hrefLang="en"
                    >
                        EN
                    </S.LanguageLink>
                ) : (
                    <S.LanguageLink
                        onClick={() => setLanguage('NL')}
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
