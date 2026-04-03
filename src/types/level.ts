export interface Level {
    id: number;
    title: string;
    description: string;
    username: string;
    password: string;
    hint: string;
    hint2?: string;
    showInfo?: string;
    consoleLog?: string;
    difficulty: 'easy' | 'medium' | 'hard' | 'insane';
    challenge: string; // HTML/CSS/JS obfuscation
}

export interface GameProgress {
    completedLevels: number[];
    currentLevel: number;
    gameStarted: boolean;
}
