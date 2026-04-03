import { useState, useEffect } from 'react';
import { Level } from '@/types/level';
import { LEVELS } from '@/data/levels';

export const useLevel = (levelId: number) => {
    const [level, setLevel] = useState<Level | null>(null);

    useEffect(() => {
        if (levelId >= 1 && levelId <= LEVELS.length) {
            setLevel(LEVELS[levelId - 1]);
        }
    }, [levelId]);

    return { level };
};
