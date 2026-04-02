import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';
import LevelSelector from './components/LevelSelector';
import ChallengePanel from './components/ChallengePanel';
import LanguageSwitcher from './components/LanguageSwitcher';
import { useLevel } from './hooks/useLevel';
import { initializeGame, markLevelComplete, getCompletedLevels } from './utils/storage';

function App() {
    const { t } = useTranslation();
    const [currentScreen, setCurrentScreen] = useState<'selector' | 'challenge'>('selector');
    const [selectedLevelId, setSelectedLevelId] = useState<number | null>(null);

    const { level } = useLevel(selectedLevelId || 1);
    const completedLevels = getCompletedLevels();

    useEffect(() => {
        console.log('%c' + t('app.consoleLine1'), 'color: #00ff41; font-size: 16px; font-weight: bold; text-shadow: 0 0 10px #00ff41');
        console.log('%c' + t('app.consoleLine2'), 'color: #00d4ff; font-size: 12px');
        console.log('%c' + t('app.consoleLine3'), 'color: #b300ff; font-size: 12px');
        initializeGame();
    }, [t]);

    const handleLevelSelect = (levelId: number) => {
        setSelectedLevelId(levelId);
        setCurrentScreen('challenge');
    };

    const handleBackToSelector = () => {
        setSelectedLevelId(null);
        setCurrentScreen('selector');
    };

    const handleLevelSuccess = () => {
        if (selectedLevelId) {
            markLevelComplete(selectedLevelId);
            setTimeout(() => {
                const nextLevel = selectedLevelId + 1;
                if (nextLevel <= 20) {
                    handleLevelSelect(nextLevel);
                } else {
                    alert(t('app.completedAll'));
                    handleBackToSelector();
                }
            }, 1000);
        }
    };

    return (
        <div className="min-h-screen bg-dark-bg overflow-hidden">
            <div className="p-4">
                <LanguageSwitcher />
            </div>

            {currentScreen === 'selector' ? (
                <LevelSelector onSelectLevel={handleLevelSelect} completedLevels={completedLevels} />
            ) : selectedLevelId ? (
                <ChallengePanel
                    level={level}
                    onSuccess={handleLevelSuccess}
                    onBack={handleBackToSelector}
                />
            ) : null}
        </div>
    );
}

export default App;
