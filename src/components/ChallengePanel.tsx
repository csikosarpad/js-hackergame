import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Level } from '../types/level';
import { executeScriptsInElement } from '../utils/scriptExecutor';

interface ChallengeProps {
    level: Level | null;
    onSuccess: () => void;
    onBack: () => void;
}

export default function ChallengePanel({ level, onSuccess, onBack }: ChallengeProps) {
    const { t } = useTranslation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const challengeContentRef = useRef<HTMLDivElement>(null);

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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!level) return;

        if (username.trim() === level.username && password.trim() === level.password) {
            setSuccess(true);
            setError('');
            setTimeout(() => {
                setSuccess(false);
                onSuccess();
            }, 1500);
        } else {
            setError(t('challenge.incorrect'));
            setSuccess(false);
        }
    };

    if (!level) {
        return <div className="text-center text-neon-red">{t('challenge.levelNotFound')}</div>;
    }

    return (
        <div className="min-h-screen bg-dark-bg flex items-center justify-center p-4">
            <div className="max-w-2xl w-full">
                {/* Challenge Display */}
                <div className="bg-dark-card border-2 border-neon-blue rounded-lg p-8 mb-8 shadow-lg">
                    <h2 className="text-2xl font-bold text-neon-green mb-2 glow-green">
                        {t(`level.${level.id}.title`, { defaultValue: level.title })}
                    </h2>
                    <p className="text-neon-blue mb-4 glow-blue">
                        {t(`level.${level.id}.description`, { defaultValue: level.description })}
                    </p>

                    {/* Difficulty Badge */}
                    <div className="mb-6 inline-block">
                        <span
                            className={`px-3 py-1 rounded text-sm font-bold ${level.difficulty === 'easy'
                                ? 'bg-green-900 text-neon-green'
                                : level.difficulty === 'medium'
                                    ? 'bg-yellow-900 text-yellow-300'
                                    : level.difficulty === 'hard'
                                        ? 'bg-red-900 text-neon-red'
                                        : 'bg-purple-900 text-neon-purple'
                                }`}
                        >
                            {level.difficulty.toUpperCase()}
                        </span>
                    </div>

                    {/* Hint Section */}
                    <details className="mb-6">
                        <summary className="cursor-pointer text-neon-purple hover:text-neon-blue transition">
                            {t('challenge.showHint')}
                        </summary>
                        <p className="mt-3 text-sm text-gray-300 bg-dark-bg rounded p-3 border-l-2 border-neon-purple">
                            {t(`level.${level.id}.hint`, { defaultValue: level.hint })}
                        </p>
                    </details>

                    {/* Challenge Content */}
                    <div className="bg-dark-bg rounded p-4 border border-gray-700 mb-6 overflow-auto max-h-64">
                        <div
                            ref={challengeContentRef}
                            dangerouslySetInnerHTML={{ __html: level.challenge }}
                            className="text-xs text-gray-400"
                        />
                    </div>
                </div>

                {/* Login Form */}
                <div className="bg-dark-card border-2 border-neon-green rounded-lg p-8 shadow-lg">
                    <h3 className="text-xl font-bold text-neon-green mb-6 glow-green">
                        {t('challenge.enterCredentials')}
                    </h3>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-neon-blue mb-2">{t('challenge.username')}</label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder={t('challenge.username')}
                                className="input-field focus:ring-2 ring-neon-green"
                                disabled={success}
                            />
                        </div>

                        <div>
                            <label className="block text-neon-blue mb-2">{t('challenge.password')}</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                className="input-field focus:ring-2 ring-neon-green"
                                disabled={success}
                            />
                        </div>

                        {error && <div className="error text-center">{error}</div>}
                        {success && (
                            <div className="success text-center text-lg font-bold">
                                {t('challenge.levelComplete')}
                            </div>
                        )}

                        <div className="flex gap-4 mt-8">
                            <button
                                type="submit"
                                disabled={success}
                                className="button flex-1"
                            >
                                Submit
                            </button>
                            <button
                                type="button"
                                onClick={onBack}
                                className="button secondary flex-1"
                                disabled={success}
                            >
                                Back
                            </button>
                        </div>
                    </form>
                </div>

                {/* Tips Section */}
                <div className="mt-6 p-4 bg-dark-card border border-neon-purple rounded text-center text-sm text-gray-400">
                    <p>{t('challenge.devtoolsHelp')}</p>
                    <p className="mt-2 text-neon-purple">{t('challenge.devtoolsAreas')}</p>
                </div>
            </div>
        </div>
    );
}
