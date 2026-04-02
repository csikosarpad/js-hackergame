import { useState, useEffect } from 'react';
import { LEVELS } from '../data/levels';
export const useLevel = (levelId) => {
    const [level, setLevel] = useState(null);
    useEffect(() => {
        if (levelId >= 1 && levelId <= LEVELS.length) {
            setLevel(LEVELS[levelId - 1]);
        }
    }, [levelId]);
    return { level };
};
//# sourceMappingURL=useLevel.js.map