import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { executeScriptsInElement } from '../utils/scriptExecutor';
export default function ChallengePanel({ level, onSuccess, onBack }) {
    const { t } = useTranslation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const challengeContentRef = useRef(null);
    // Execute scripts in the challenge content after it renders
    useEffect(() => {
        if (!challengeContentRef.current || !level) {
            return;
        }
        // Use a small delay to ensure DOM is properly updated
        const timer = setTimeout(() => {
            if (challengeContentRef.current) {
                executeScriptsInElement(challengeContentRef.current);
            }
        }, 0);
        return () => clearTimeout(timer);
    }, [level, level?.id]);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!level)
            return;
        if (username.trim() === level.username && password.trim() === level.password) {
            setSuccess(true);
            setError('');
            setTimeout(() => {
                setSuccess(false);
                onSuccess();
            }, 1500);
        }
        else {
            setError(t('challenge.incorrect'));
            setSuccess(false);
        }
    };
    if (!level) {
        return _jsx("div", { className: "text-center text-neon-red", children: t('challenge.levelNotFound') });
    }
    return (_jsx("div", { className: "min-h-screen bg-dark-bg flex items-center justify-center p-4", children: _jsxs("div", { className: "max-w-2xl w-full", children: [_jsxs("div", { className: "bg-dark-card border-2 border-neon-blue rounded-lg p-8 mb-8 shadow-lg", children: [_jsx("h2", { className: "text-2xl font-bold text-neon-green mb-2 glow-green", children: t(`level.${level.id}.title`, { defaultValue: level.title }) }), _jsx("p", { className: "text-neon-blue mb-4 glow-blue", children: t(`level.${level.id}.description`, { defaultValue: level.description }) }), _jsx("div", { className: "mb-6 inline-block", children: _jsx("span", { className: `px-3 py-1 rounded text-sm font-bold ${level.difficulty === 'easy'
                                    ? 'bg-green-900 text-neon-green'
                                    : level.difficulty === 'medium'
                                        ? 'bg-yellow-900 text-yellow-300'
                                        : level.difficulty === 'hard'
                                            ? 'bg-red-900 text-neon-red'
                                            : 'bg-purple-900 text-neon-purple'}`, children: level.difficulty.toUpperCase() }) }), _jsxs("details", { className: "mb-6", children: [_jsx("summary", { className: "cursor-pointer text-neon-purple hover:text-neon-blue transition", children: t('challenge.showHint') }), _jsx("p", { className: "mt-3 text-sm text-gray-300 bg-dark-bg rounded p-3 border-l-2 border-neon-purple", children: t(`level.${level.id}.hint`, { defaultValue: level.hint }) })] }), _jsx("div", { className: "bg-dark-bg rounded p-4 border border-gray-700 mb-6 overflow-auto max-h-64", children: _jsx("div", { ref: challengeContentRef, dangerouslySetInnerHTML: { __html: level.challenge }, className: "text-xs text-gray-400" }) })] }), _jsxs("div", { className: "bg-dark-card border-2 border-neon-green rounded-lg p-8 shadow-lg", children: [_jsx("h3", { className: "text-xl font-bold text-neon-green mb-6 glow-green", children: t('challenge.enterCredentials') }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-neon-blue mb-2", children: t('challenge.username') }), _jsx("input", { type: "text", value: username, onChange: (e) => setUsername(e.target.value), placeholder: t('challenge.username'), className: "input-field focus:ring-2 ring-neon-green", disabled: success })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-neon-blue mb-2", children: t('challenge.password') }), _jsx("input", { type: "password", value: password, onChange: (e) => setPassword(e.target.value), placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", className: "input-field focus:ring-2 ring-neon-green", disabled: success })] }), error && _jsx("div", { className: "error text-center", children: error }), success && (_jsx("div", { className: "success text-center text-lg font-bold", children: t('challenge.levelComplete') })), _jsxs("div", { className: "flex gap-4 mt-8", children: [_jsx("button", { type: "submit", disabled: success, className: "button flex-1", children: "Submit" }), _jsx("button", { type: "button", onClick: onBack, className: "button secondary flex-1", disabled: success, children: "Back" })] })] })] }), _jsxs("div", { className: "mt-6 p-4 bg-dark-card border border-neon-purple rounded text-center text-sm text-gray-400", children: [_jsx("p", { children: t('challenge.devtoolsHelp') }), _jsx("p", { className: "mt-2 text-neon-purple", children: t('challenge.devtoolsAreas') })] })] }) }));
}
//# sourceMappingURL=ChallengePanel.js.map