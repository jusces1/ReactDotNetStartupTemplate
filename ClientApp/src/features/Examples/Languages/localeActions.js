import {LOCALE_SET} from './constats'

export const localeSet = lang => ({
    type: LOCALE_SET,
    lang
})

export const setLocale = lang => (dispatch) => {
    localStorage.alhubLang = lang;
    dispatch(localeSet(lang));
}