
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Question } from '../types';

interface SideDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    questions: Question[];
    currentIndex: number;
    onJump: (index: number) => void;
}

const SideDrawer = ({ isOpen, onClose, questions, currentIndex, onJump }: SideDrawerProps) => {
    if (!isOpen) return null;

    return (
        <div className="drawer-overlay" onClick={onClose}>
            <div className="drawer-content" onClick={(e) => e.stopPropagation()}>
                <div className="drawer-header">
                    <h2>Navigator</h2>
                    <button onClick={onClose} className="close-button">&times;</button>
                </div>
                <div className="drawer-body">
                    <div className="question-grid">
                        {questions.map((q, i) => (
                            <button 
                                key={q.id} 
                                className={`nav-item ${i === currentIndex ? 'active' : ''}`}
                                onClick={() => {
                                    onJump(i);
                                    onClose();
                                }}
                            >
                                {q.number}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideDrawer;
