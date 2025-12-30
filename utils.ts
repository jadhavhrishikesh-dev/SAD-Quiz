
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { Question, QuestionBank, QuestionType, MatchingPair } from './types';
import { RAW_APP_TEXT, RAW_BASIC_TEXT } from './questionData';

export const generateId = () => Date.now().toString(36) + Math.random().toString(36).substring(2);

const parseMarkdown = (text: string, bank: QuestionBank): Question[] => {
  const questions: Question[] = [];
  
  const lines = text.split('\n');
  let currentQuestion: Partial<Question> | null = null;
  
  // Regex patterns
  const questionStartRegex = /^(\d+)\.\s+\*\*(.+?)\*\*$/; // 1. **Question text**
  const answerRegex = /^\s*-\s*Answer:\s*(.+)$/;
  const explanationRegex = /^\s*-\s*Explanation:\s*(.+)$/;
  const difficultyRegex = /^\s*-\s*Difficulty:\s*(.+)$/;

  let currentSection: QuestionType = 'FILL_UP';

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    // Section detection
    if (line.toUpperCase().includes('TRUE/FALSE') || line.toUpperCase().includes('TRUE OR FALSE')) {
        currentSection = 'TRUE_FALSE';
    } else if (line.toUpperCase().includes('MATCHING')) {
        currentSection = 'MATCHING';
    } else if (line.toUpperCase().includes('FILL-UPS')) {
        currentSection = 'FILL_UP';
    }

    const qMatch = line.match(questionStartRegex);
    if (qMatch) {
      if (currentQuestion && currentQuestion.text && currentQuestion.answer) {
        questions.push(currentQuestion as Question);
      }

      currentQuestion = {
        id: generateId(),
        number: parseInt(qMatch[1]),
        text: qMatch[2],
        bank: bank,
        type: currentSection
      };
    } else if (currentQuestion) {
      const aMatch = line.match(answerRegex);
      const eMatch = line.match(explanationRegex);
      const dMatch = line.match(difficultyRegex);

      if (aMatch) currentQuestion.answer = aMatch[1];
      if (eMatch) currentQuestion.explanation = eMatch[1];
      if (dMatch) currentQuestion.difficulty = dMatch[1];
    }
  }

  if (currentQuestion && currentQuestion.text && currentQuestion.answer) {
    questions.push(currentQuestion as Question);
  }

  return questions;
};

// Post-process to group matching questions
const aggregateMatchingQuestions = (questions: Question[]): Question[] => {
    const nonMatching = questions.filter(q => q.type !== 'MATCHING');
    const matching = questions.filter(q => q.type === 'MATCHING');

    if (matching.length === 0) return questions;

    // Group by Bank to ensure we don't mix BASIC and APPLICATION matching sets if they exist
    const banks = Array.from(new Set(matching.map(q => q.bank)));
    const aggregatedMatching: Question[] = [];

    banks.forEach(bank => {
        const bankMatching = matching.filter(q => q.bank === bank);
        
        // Chunk into groups of 10 if necessary, but prompt implies all in one page for now. 
        // We will put all found matching questions for this bank into one set.
        if (bankMatching.length > 0) {
            const pairs: MatchingPair[] = bankMatching.map(q => ({
                id: q.id,
                term: q.text.replace(/^Match:\s*/i, ''), // Remove "Match: " prefix
                definition: q.answer
            }));

            aggregatedMatching.push({
                id: generateId(),
                number: bankMatching[0].number, // Use number of first item
                type: 'MATCHING',
                bank: bank,
                text: 'Match the following terms with their correct definitions.',
                answer: 'Complete the matching game above.',
                matchingPairs: pairs
            });
        }
    });

    return [...nonMatching, ...aggregatedMatching].sort((a, b) => {
        // Simple sort to keep relative order if possible, or put matching at the end of their sections
        if (a.bank === b.bank) return a.number - b.number;
        return 0;
    });
};

export const getQuestions = (): Question[] => {
    const basicQs = parseMarkdown(RAW_BASIC_TEXT, 'BASIC');
    const appQs = parseMarkdown(RAW_APP_TEXT, 'APPLICATION');
    const all = [...basicQs, ...appQs];
    return aggregateMatchingQuestions(all);
};
