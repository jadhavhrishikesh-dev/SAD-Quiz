
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

export type QuestionType = 'FILL_UP' | 'TRUE_FALSE' | 'MATCHING';
export type QuestionBank = 'BASIC' | 'APPLICATION';

export interface MatchingPair {
    id: string;
    term: string;
    definition: string;
}

export interface Question {
  id: string;
  number: number;
  type: QuestionType;
  bank: QuestionBank;
  text: string; // The question or statement
  answer: string;
  explanation?: string;
  options?: string[]; // For multiple choice if needed
  difficulty?: string;
  matchingPairs?: MatchingPair[]; // For aggregated matching questions
}

export interface QuizConfig {
  selectedBank: QuestionBank | 'BOTH';
  selectedTypes: QuestionType[];
}

export interface QuizState {
  status: 'MENU' | 'ACTIVE' | 'COMPLETED';
  questions: Question[];
  currentIndex: number;
  score: number; // For self-assessment
  revealed: boolean; // Has the user looked at the answer?
}
