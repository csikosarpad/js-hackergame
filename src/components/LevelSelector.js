import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { LEVELS } from '../data/levels';
export default function LevelSelector({ onSelectLevel, completedLevels }) {
    const { t } = useTranslation();
    const totalLevels = LEVELS.length;
    const completedCount = completedLevels.length;
    const unlockedLevel = completedLevels.length === 0 ? 1 : Math.max(...completedLevels) + 1;
    return (_jsxs("div", { className: "min-h-screen bg-dark-bg p-6", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h1", { className: "text-5xl font-bold text-neon-green glow-green mb-2", children: t('selector.title') }), _jsx("p", { className: "text-neon-blue glow-blue mb-2", children: t('selector.subtitle') }), _jsx("p", { className: "text-gray-400", children: t('selector.levelsCompleted', {
                            count: completedCount,
                            total: totalLevels,
                            percent: Math.round((completedCount / totalLevels) * 100),
                        }) })] }), _jsx("div", { className: "max-w-2xl mx-auto mb-12", children: _jsx("div", { className: "w-full bg-dark-card border border-neon-blue rounded-lg overflow-hidden", children: _jsx("div", { className: "bg-gradient-to-r from-neon-green to-neon-blue h-3 transition-all duration-500", style: { width: `${(completedCount / totalLevels) * 100}%` } }) }) }), _jsx("div", { className: "max-w-6xl mx-auto", children: _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", children: LEVELS.map((level) => {
                        const levelId = level.id;
                        const isCompleted = completedLevels.includes(levelId);
                        const isLocked = levelId > unlockedLevel;
                        return (_jsx("button", { onClick: () => !isLocked && onSelectLevel(levelId), disabled: isLocked, className: `
                  p-4 rounded-lg border-2 transition-all duration-300
                  ${isLocked
                                ? 'border-gray-600 bg-dark-card opacity-50 cursor-not-allowed'
                                : isCompleted
                                    ? 'border-neon-green bg-dark-card hover:shadow-lg hover:shadow-neon-green'
                                    : 'border-neon-blue bg-dark-card hover:border-neon-green hover:shadow-lg hover:shadow-neon-blue'}
                `, children: _jsxs("div", { className: "text-left", children: [_jsxs("div", { className: "flex items-center justify-between mb-2", children: [_jsxs("span", { className: "text-lg font-bold text-neon-blue", children: ["#", levelId] }), isCompleted && _jsx("span", { className: "text-neon-green text-xl", children: "\u2713" }), isLocked && _jsx("span", { className: "text-gray-500 text-xl", children: "\uD83D\uDD12" })] }), _jsx("p", { className: "text-sm text-gray-300 truncate", children: t(`level.${level.id}.title`, { defaultValue: level.title }) }), _jsx("span", { className: `
                      inline-block mt-2 text-xs font-bold px-2 py-1 rounded
                      ${level.difficulty === 'easy'
                                            ? 'bg-green-900 text-neon-green'
                                            : level.difficulty === 'medium'
                                                ? 'bg-yellow-900 text-yellow-300'
                                                : level.difficulty === 'hard'
                                                    ? 'bg-red-900 text-neon-red'
                                                    : 'bg-purple-900 text-neon-purple'}
                    `, children: level.difficulty.toUpperCase() })] }) }, levelId));
                    }) }) }), _jsxs("div", { className: "max-w-2xl mx-auto mt-12 text-center text-gray-400 text-sm", children: [_jsxs("p", { children: ["\uD83D\uDCA1 ", _jsx("strong", { children: t('selector.tipsTitle') }), " ", t('selector.tip1')] }), _jsx("p", { className: "mt-2", children: t('selector.tip2') }), _jsx("p", { children: t('selector.tip3') })] })] }));
}
//# sourceMappingURL=LevelSelector.js.map