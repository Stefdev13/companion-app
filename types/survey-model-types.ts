import { QuestionType } from "@/enums/survey-enums";

export type SurveyModel = {
  id: number | null;
  version: string;
  surveyCategories: SurveyCategory[];
  reusableQuestionOptions: ReusableQuestionOption[];
};

export type SurveyCategory = {
  id: number | null;
  categoryName: string;
  description: string;
  questions: Question[];
};

export type ReusableQuestionOption = {
  id: number | null;
  originalQuestionOption: QuestionOption;
  clones: QuestionOption[];
  tags: string[];
};

//Questions
export type Question = {
  id: number | null;
  questionName: string;
  description: string;
  tips: string[];
  questionOptions: QuestionOption[];
  optionTemplate: QuestionOption | null;
  allowCustomOptions: boolean;
  newCustomOptionPrompt: string;
  allowReusableQuestionOptions: boolean;
  reusableQuestionOptionsTags: string[];
  dynamicQuestionOptionParams: string[] | null;
};

//Question options
export type QuestionOption = {
  id: number | null;
  name: string;
  isSelected: boolean;
  displaySubQuestions: SubQuestion[];
  tags: string[];
};

export type StandardQuestionOption = QuestionOption & {
  subQuestions: SubQuestion[];
  reusableQuestionOption: ReusableQuestionOption | null;
  usedInOtherSurveyQuestions: boolean;
  cloneOfOtherQuestionOption: boolean;
  shouldInfluenceOriginalQuestionOption: boolean;
};

export type FJQuestionOption = QuestionOption & {
  roundTripSubQuestion: SubQuestion;
  frequencySubQuestion: SubQuestion;
  startDateSubQuestion: SubQuestion;
  endDateSubQuestion: SubQuestion;
  legs: FJLeg[];
  reusableQuestionOption: ReusableQuestionOption;
};

//SubQuestions
export type SubQuestion = {
  id: number | null;
  question: string;
  description: string;
  questionType: QuestionType;
  answerOptions: string[] | null;
  answer: string;
  unitOptions: string[] | null;
  selectedUnit: string | null;
  defaultMetricUnit: string | null;
  defaultImperialUnit: string | null;
  averageValueRoute: string | null;
  averageValueParams: SubQuestion[] | null;
  displayRules: DisplayRule[] | null;
  markedForCheckingWithClones: boolean;
  usersValueOverriddenMessage: string | null;
};

export type DisplayRule = {
  id: number | null;
  subQuestion: SubQuestion;
  validValues: string[];
};

export type FJLeg = {
  id: number | null;
  motName: string;
  reusableQuestionOption: ReusableQuestionOption;
  distanceQuestion: SubQuestion;
  motSubQuestion: SubQuestion;
};
