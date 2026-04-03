import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
    const { i18n, t } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="flex items-center gap-2 text-sm text-gray-300 mb-4 justify-end">
            <span>{t('language.label')}:</span>
            <button
                className={`px-2 py-1 rounded ${i18n.language === 'hu' ? 'bg-neon-blue' : 'bg-gray-700'}`}
                onClick={() => changeLanguage('hu')}
            >
                {t('language.hu')}
            </button>
            <button
                className={`px-2 py-1 rounded ${i18n.language === 'en' ? 'bg-neon-blue' : 'bg-gray-700'}`}
                onClick={() => changeLanguage('en')}
            >
                {t('language.en')}
            </button>
            <button
                className={`px-2 py-1 rounded ${i18n.language === 'de' ? 'bg-neon-blue' : 'bg-gray-700'}`}
                onClick={() => changeLanguage('de')}
            >
                {t('language.de')}
            </button>
        </div>
    );
}
