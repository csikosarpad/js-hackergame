import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
export default function LanguageSwitcher() {
    const { i18n, t } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem('i18nextLng', lng);
    };
    return (_jsxs("div", { className: "flex items-center gap-2 text-sm text-gray-300 mb-4 justify-end", children: [_jsxs("span", { children: [t('language.label'), ":"] }), _jsx("button", { className: `px-2 py-1 rounded ${i18n.language === 'hu' ? 'bg-neon-blue' : 'bg-gray-700'}`, onClick: () => changeLanguage('hu'), children: t('language.hu') }), _jsx("button", { className: `px-2 py-1 rounded ${i18n.language === 'en' ? 'bg-neon-blue' : 'bg-gray-700'}`, onClick: () => changeLanguage('en'), children: t('language.en') }), _jsx("button", { className: `px-2 py-1 rounded ${i18n.language === 'de' ? 'bg-neon-blue' : 'bg-gray-700'}`, onClick: () => changeLanguage('de'), children: t('language.de') })] }));
}
//# sourceMappingURL=LanguageSwitcher.js.map