const STORAGE_KEY = 'hackergame_progress';
export const initializeGame = () => {
    const existing = localStorage.getItem(STORAGE_KEY);
    if (!existing) {
        const initial = {
            completedLevels: [],
            currentLevel: 1,
            gameStarted: true,
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
    }
};
export const getGameState = () => {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) {
        initializeGame();
        return getGameState();
    }
    return JSON.parse(data);
};
export const markLevelComplete = (levelId) => {
    const state = getGameState();
    if (!state.completedLevels.includes(levelId)) {
        state.completedLevels.push(levelId);
        state.currentLevel = Math.max(state.currentLevel, levelId + 1);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }
};
export const getCompletedLevels = () => {
    return getGameState().completedLevels;
};
export const resetGame = () => {
    localStorage.removeItem(STORAGE_KEY);
    initializeGame();
};
//# sourceMappingURL=storage.js.map