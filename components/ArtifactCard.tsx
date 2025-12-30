
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Question } from '../types';
import MatchingWidget from './MatchingWidget';

interface QuestionCardProps {
    question: Question;
    onFlip: () => void;
    revealed: boolean;
}

const formatType = (type: string) => {
    switch(type) {
        case 'FILL_UP': return 'Fill Up';
        case 'TRUE_FALSE': return 'True / False';
        case 'MATCHING': return 'Matching';
        default: return type.replace('_', ' ');
    }
};

const QuestionCard = ({ question, onFlip, revealed }: QuestionCardProps) => {
    
    // For Matching questions, we override the standard card behavior
    if (question.type === 'MATCHING' && question.matchingPairs) {
        return (
            <div className="question-card-container matching-mode">
                <div className="card-static">
                     <div className="card-badge">{formatType(question.type)}</div>
                     <h3 className="matching-title">{question.text}</h3>
                     <div className="matching-content">
                        <MatchingWidget pairs={question.matchingPairs} />
                     </div>
                </div>
            </div>
        );
    }

    return (
        <div className={`question-card-container ${revealed ? 'revealed' : ''}`} onClick={onFlip}>
            <div className="card-flipper">
                <div className="card-front">
                    <div className="card-badge">{formatType(question.type)}</div>
                    <div className="card-content">
                        <h3>Question {question.number}</h3>
                        <p className="question-text">{question.text}</p>
                        <div className="tap-hint">Tap to reveal answer</div>
                    </div>
                </div>
                <div className="card-back">
                    <div className="card-content">
                        <h3>Answer</h3>
                        <p className="answer-text">{question.answer}</p>
                        {question.explanation && (
                            <div className="explanation-box">
                                <strong>Explanation:</strong>
                                <p>{question.explanation}</p>
                            </div>
                        )}
                         {question.difficulty && (
                            <div className="difficulty-badge">
                                {question.difficulty}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuestionCard;
