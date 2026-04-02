export interface Level {
    id: number;
    title: string;
    description: string;
    username: string;
    password: string;
    hint: string;
    difficulty: 'easy' | 'medium' | 'hard' | 'insane';
    challenge: string; // HTML/CSS/JS obfuscation
}

export interface GameProgress {
    completedLevels: number[];
    currentLevel: number;
    gameStarted: boolean;
}
