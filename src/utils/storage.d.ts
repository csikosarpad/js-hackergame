export interface GameState {
    completedLevels: number[];
    currentLevel: number;
    gameStarted: boolean;
}
export declare const initializeGame: () => void;
export declare const getGameState: () => GameState;
export declare const markLevelComplete: (levelId: number) => void;
export declare const getCompletedLevels: () => number[];
export declare const resetGame: () => void;
//# sourceMappingURL=storage.d.ts.map