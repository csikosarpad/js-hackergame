import { useTranslation } from 'react-i18next';
import { getLEVELS } from '@/data/levels';

interface LevelSelectorProps {
    onSelectLevel: (levelId: number) => void;
    completedLevels: number[];
}

export default function LevelSelector({ onSelectLevel, completedLevels }: LevelSelectorProps) {
    const { t } = useTranslation();
    const LEVELS = getLEVELS();
    const totalLevels = LEVELS.length;
    const completedCount = completedLevels.length;
    const unlockedLevel = completedLevels.length === 0 ? 1 : Math.max(...completedLevels) + 1;

    return (
        <div className="min-h-screen bg-dark-bg p-6">
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-5xl font-bold text-neon-green glow-green mb-2">
                    {t('selector.title')}
                </h1>
                <p className="text-neon-blue glow-blue mb-2">
                    {t('selector.subtitle')}
                </p>
                <p className="text-gray-400">
                    {t('selector.levelsCompleted', {
                        count: completedCount,
                        total: totalLevels,
                        percent: Math.round((completedCount / totalLevels) * 100),
                    })}
                </p>
            </div>

            {/* Progress Bar */}
            <div className="max-w-2xl mx-auto mb-12">
                <div className="w-full bg-dark-card border border-neon-blue rounded-lg overflow-hidden">
                    <div
                        className="bg-gradient-to-r from-neon-green to-neon-blue h-3 transition-all duration-500"
                        style={{ width: `${(completedCount / totalLevels) * 100}%` }}
                    />
                </div>
            </div>

            {/* Levels Grid */}
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {LEVELS.map((level) => {
                        const levelId = level.id;
                        const isCompleted = completedLevels.includes(levelId);
                        const isLocked = levelId > unlockedLevel;

                        return (
                            <button
                                key={levelId}
                                onClick={() => !isLocked && onSelectLevel(levelId)}
                                disabled={isLocked}
                                className={`
                  p-4 rounded-lg border-2 transition-all duration-300
                  ${isLocked
                                        ? 'border-gray-600 bg-dark-card opacity-50 cursor-not-allowed'
                                        : isCompleted
                                            ? 'border-neon-green bg-dark-card hover:shadow-lg hover:shadow-neon-green'
                                            : 'border-neon-blue bg-dark-card hover:border-neon-green hover:shadow-lg hover:shadow-neon-blue'
                                    }
                `}
                            >
                                <div className="text-left">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-lg font-bold text-neon-blue">#{levelId}</span>
                                        {isCompleted && <span className="text-neon-green text-xl">✓</span>}
                                        {isLocked && <span className="text-gray-500 text-xl">🔒</span>}
                                    </div>
                                    <p className="text-sm text-gray-300 truncate">
                                        {t(`level.${level.id}.title`, { defaultValue: level.title })}
                                    </p>
                                    <span
                                        className={`
                      inline-block mt-2 text-xs font-bold px-2 py-1 rounded
                      ${level.difficulty === 'easy'
                                                ? 'bg-green-900 text-neon-green'
                                                : level.difficulty === 'medium'
                                                    ? 'bg-yellow-900 text-yellow-300'
                                                    : level.difficulty === 'hard'
                                                        ? 'bg-red-900 text-neon-red'
                                                        : 'bg-purple-900 text-neon-purple'
                                            }
                    `}
                                    >
                                        {level.difficulty.toUpperCase()}
                                    </span>
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Footer Tips */}
            <div className="max-w-2xl mx-auto mt-12 text-center text-gray-400 text-sm">
                <p>💡 <strong>{t('selector.tipsTitle')}</strong> {t('selector.tip1')}</p>
                <p className="mt-2">{t('selector.tip2')}</p>
                <p>{t('selector.tip3')}</p>
            </div>
        </div>
    );
}
