
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom/client';
import { Question, QuestionBank, QuestionType, QuizConfig, QuizState } from './types';
import { getQuestions } from './utils';
import QuestionCard from './components/ArtifactCard'; // We reused the file but changed content
import SideDrawer from './components/SideDrawer';
import { 
    ArrowLeftIcon, 
    ArrowRightIcon, 
    GridIcon 
} from './components/Icons';

function App() {
  const [allQuestions, setAllQuestions] = useState<Question[]>([]);
  const [quizState, setQuizState] = useState<QuizState>({
      status: 'MENU',
      questions: [],
      currentIndex: 0,
      score: 0,
      revealed: false
  });
  
  const [config, setConfig] = useState<QuizConfig>({
      selectedBank: 'BOTH',
      selectedTypes: ['FILL_UP', 'TRUE_FALSE', 'MATCHING']
  });

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [jumpInput, setJumpInput] = useState('');

  // Load questions on mount
  useEffect(() => {
      const qs = getQuestions();
      setAllQuestions(qs);
  }, []);

  const startQuiz = () => {
      let filtered = allQuestions;

      if (config.selectedBank !== 'BOTH') {
          filtered = filtered.filter(q => q.bank === config.selectedBank);
      }

      if (config.selectedTypes.length > 0) {
          filtered = filtered.filter(q => config.selectedTypes.includes(q.type));
      }

      // Sort by bank then number, or simple shuffle? Let's keep order for "Jump to" consistency with number
      // Actually, if we filter, numbers won't be contiguous (1, 2, 5, 8).
      // Let's re-sort based on ID or keep original order.
      
      if (filtered.length === 0) {
          alert("No questions found for this configuration.");
          return;
      }

      setQuizState({
          status: 'ACTIVE',
          questions: filtered,
          currentIndex: 0,
          score: 0,
          revealed: false
      });
  };

  const handleNext = useCallback(() => {
      if (quizState.currentIndex < quizState.questions.length - 1) {
          setQuizState(prev => ({
              ...prev,
              currentIndex: prev.currentIndex + 1,
              revealed: false
          }));
      }
  }, [quizState.currentIndex, quizState.questions.length]);

  const handlePrev = useCallback(() => {
      if (quizState.currentIndex > 0) {
          setQuizState(prev => ({
              ...prev,
              currentIndex: prev.currentIndex - 1,
              revealed: false
          }));
      }
  }, [quizState.currentIndex]);

  const handleJump = (index: number) => {
      if (index >= 0 && index < quizState.questions.length) {
          setQuizState(prev => ({
              ...prev,
              currentIndex: index,
              revealed: false
          }));
      }
  };

  const handleJumpByNumber = () => {
      const num = parseInt(jumpInput);
      if (isNaN(num)) return;
      
      const idx = quizState.questions.findIndex(q => q.number === num);
      if (idx !== -1) {
          handleJump(idx);
          setJumpInput('');
      } else {
          alert(`Question ${num} not found in current set.`);
      }
  };

  const toggleType = (type: QuestionType) => {
      setConfig(prev => {
          const types = prev.selectedTypes.includes(type)
              ? prev.selectedTypes.filter(t => t !== type)
              : [...prev.selectedTypes, type];
          return { ...prev, selectedTypes: types };
      });
  };

  // Keyboard navigation
  useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
          if (quizState.status !== 'ACTIVE') return;
          if (e.key === 'ArrowRight') handleNext();
          if (e.key === 'ArrowLeft') handlePrev();
          if (e.key === ' ' || e.key === 'Enter') {
             setQuizState(prev => ({ ...prev, revealed: !prev.revealed }));
          }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
  }, [quizState.status, handleNext, handlePrev]);

  return (
    <>
        <div className="immersive-app">
            {quizState.status === 'MENU' && (
                <div className="menu-container">
                    <h1 className="title-gradient">SAD Quiz Prep</h1>
                    <p className="subtitle">Software Analysis & Design Practice</p>
                    
                    <div className="config-section">
                        <h3>1. Choose Question Bank</h3>
                        <div className="bank-options">
                            <button 
                                className={config.selectedBank === 'BASIC' ? 'selected' : ''}
                                onClick={() => setConfig(p => ({...p, selectedBank: 'BASIC'}))}
                            >
                                Basic Knowledge
                            </button>
                            <button 
                                className={config.selectedBank === 'APPLICATION' ? 'selected' : ''}
                                onClick={() => setConfig(p => ({...p, selectedBank: 'APPLICATION'}))}
                            >
                                Application Based
                            </button>
                            <button 
                                className={config.selectedBank === 'BOTH' ? 'selected' : ''}
                                onClick={() => setConfig(p => ({...p, selectedBank: 'BOTH'}))}
                            >
                                All Questions
                            </button>
                        </div>

                        <h3>2. Question Types</h3>
                        <div className="type-options">
                            <button 
                                className={config.selectedTypes.includes('FILL_UP') ? 'selected' : ''}
                                onClick={() => toggleType('FILL_UP')}
                            >
                                Fill Ups
                            </button>
                            <button 
                                className={config.selectedTypes.includes('TRUE_FALSE') ? 'selected' : ''}
                                onClick={() => toggleType('TRUE_FALSE')}
                            >
                                True/False
                            </button>
                            <button 
                                className={config.selectedTypes.includes('MATCHING') ? 'selected' : ''}
                                onClick={() => toggleType('MATCHING')}
                            >
                                Matching
                            </button>
                        </div>

                        <button className="start-button" onClick={startQuiz}>
                            Start Practice
                        </button>
                    </div>
                </div>
            )}

            {quizState.status === 'ACTIVE' && (
                <div className="quiz-container">
                    <div className="quiz-header">
                        <button className="icon-btn" onClick={() => setQuizState(p => ({...p, status: 'MENU'}))}>
                            &larr; Exit
                        </button>
                        <div className="progress">
                            Question {quizState.currentIndex + 1} of {quizState.questions.length}
                        </div>
                        <button className="icon-btn" onClick={() => setDrawerOpen(true)}>
                            <GridIcon /> Map
                        </button>
                    </div>

                    <div className="card-stage">
                         <QuestionCard 
                             question={quizState.questions[quizState.currentIndex]}
                             revealed={quizState.revealed}
                             onFlip={() => setQuizState(p => ({...p, revealed: !p.revealed}))}
                         />
                    </div>

                    <div className="controls">
                        <button onClick={handlePrev} disabled={quizState.currentIndex === 0}>
                            <ArrowLeftIcon /> Prev
                        </button>
                        
                        <div className="jump-control">
                            <input 
                                type="number" 
                                placeholder="Jump to #" 
                                value={jumpInput}
                                onChange={(e) => setJumpInput(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleJumpByNumber()}
                            />
                            <button onClick={handleJumpByNumber}>Go</button>
                        </div>

                        <button onClick={handleNext} disabled={quizState.currentIndex === quizState.questions.length - 1}>
                            Next <ArrowRightIcon />
                        </button>
                    </div>
                </div>
            )}

            <SideDrawer 
                isOpen={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                questions={quizState.questions}
                currentIndex={quizState.currentIndex}
                onJump={handleJump}
            />
        </div>
    </>
  );
}

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<React.StrictMode><App /></React.StrictMode>);
}
