
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { MatchingPair } from '../types';

interface MatchingWidgetProps {
    pairs: MatchingPair[];
    onComplete?: () => void;
}

const MatchingWidget = ({ pairs, onComplete }: MatchingWidgetProps) => {
    const [shuffledDefs, setShuffledDefs] = useState<MatchingPair[]>([]);
    const [selectedTermId, setSelectedTermId] = useState<string | null>(null);
    const [solvedIds, setSolvedIds] = useState<Set<string>>(new Set());
    const [errorId, setErrorId] = useState<string | null>(null); // Id of the term that had an error

    useEffect(() => {
        // Shuffle definitions only on mount or when pairs change
        const shuffled = [...pairs].sort(() => Math.random() - 0.5);
        setShuffledDefs(shuffled);
        setSolvedIds(new Set());
        setSelectedTermId(null);
    }, [pairs]);

    const handleTermClick = (id: string) => {
        if (solvedIds.has(id)) return;
        setSelectedTermId(id);
        setErrorId(null);
    };

    const handleDefClick = (pair: MatchingPair) => {
        if (solvedIds.has(pair.id)) return;
        if (!selectedTermId) return;

        if (selectedTermId === pair.id) {
            // Correct Match
            const newSolved = new Set(solvedIds);
            newSolved.add(pair.id);
            setSolvedIds(newSolved);
            setSelectedTermId(null);
            
            if (newSolved.size === pairs.length && onComplete) {
                onComplete();
            }
        } else {
            // Incorrect Match
            setErrorId(selectedTermId);
            setTimeout(() => setErrorId(null), 500);
        }
    };

    return (
        <div className="matching-widget">
            <div className="matching-col">
                <h4 className="col-header">Terms</h4>
                {pairs.map(pair => (
                    <button
                        key={pair.id}
                        className={`match-item term 
                            ${selectedTermId === pair.id ? 'selected' : ''} 
                            ${solvedIds.has(pair.id) ? 'solved' : ''}
                            ${errorId === pair.id ? 'error' : ''}
                        `}
                        onClick={() => handleTermClick(pair.id)}
                        disabled={solvedIds.has(pair.id)}
                    >
                        {pair.term}
                    </button>
                ))}
            </div>
            <div className="matching-col">
                <h4 className="col-header">Definitions</h4>
                {shuffledDefs.map(pair => (
                    <button
                        key={pair.id}
                        className={`match-item def 
                            ${solvedIds.has(pair.id) ? 'solved' : ''}
                            ${selectedTermId && !solvedIds.has(pair.id) ? 'clickable' : ''}
                        `}
                        onClick={() => handleDefClick(pair)}
                        disabled={solvedIds.has(pair.id)}
                    >
                        {pair.definition}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default MatchingWidget;
