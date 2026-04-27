import { QuestionType } from "@/enums/survey-enums";
import {
  DisplayRule,
  FJLeg,
  FJQuestionOption,
  Question,
  QuestionOption,
  ReusableQuestionOption,
  StandardQuestionOption,
  SubQuestion,
  SurveyCategory,
  SurveyModel,
} from "@/types/survey-model-types";
import * as zod from "zod";

export const DisplayRuleSchema = zod.lazy(() =>
  zod.object({
    id: zod.coerce.number().nullable(),
    subQuestion: SubQuestionSchema,
    validValues: zod.array(zod.string()),
  }),
) satisfies zod.ZodType<DisplayRule>;

export const SubQuestionSchema: zod.ZodType<SubQuestion> = zod.lazy(
  () =>
    zod.object({
      id: zod.coerce.number().nullable(),
      question: zod.string(),
      description: zod.string(),
      questionType: zod.enum(QuestionType),
      answerOptions: zod.array(zod.string()).nullable(),
      answer: zod.string(),
      unitOptions: zod.array(zod.string()).nullable(),
      selectedUnit: zod.string().nullable(),
      defaultMetricUnit: zod.string().nullable(),
      defaultImperialUnit: zod.string().nullable(),
      averageValueRoute: zod.string().nullable(),
      averageValueParams: zod.array(SubQuestionSchema).nullable(),
      displayRules: zod.array(DisplayRuleSchema).nullable(),
      markedForCheckingWithClones: zod.boolean(),
      usersValueOverriddenMessage: zod.string().nullable(),
    }) satisfies zod.ZodType<SubQuestion>,
);

export const QuestionOptionSchema = zod.object({
  id: zod.coerce.number().nullable(),
  name: zod.string(),
  isSelected: zod.boolean(),
  displaySubQuestions: zod.array(SubQuestionSchema),
  tags: zod.array(zod.string()),
}) satisfies zod.ZodType<QuestionOption>;

export const ReusableQuestionOptionSchema = zod.object({
  id: zod.coerce.number().nullable(),
  originalQuestionOption: QuestionOptionSchema,
  clones: zod.array(QuestionOptionSchema),
  tags: zod.array(zod.string()),
}) satisfies zod.ZodType<ReusableQuestionOption>;

export const StandardQuestionOptionSchema = zod.object({
  ...QuestionOptionSchema.shape,
  subQuestions: zod.array(SubQuestionSchema),
  reusableQuestionOption: ReusableQuestionOptionSchema.nullable(),
  usedInOtherSurveyQuestions: zod.boolean(),
  cloneOfOtherQuestionOption: zod.boolean(),
  shouldInfluenceOriginalQuestionOption: zod.boolean(),
}) satisfies zod.ZodType<StandardQuestionOption>;

export const FJLegSchema = zod.object({
  id: zod.coerce.number().nullable(),
  motName: zod.string(),
  reusableQuestionOption: ReusableQuestionOptionSchema,
  distanceQuestion: SubQuestionSchema,
  motSubQuestion: SubQuestionSchema,
}) satisfies zod.ZodType<FJLeg>;

export const FJQuestionOptionSchema = zod.object({
  ...QuestionOptionSchema.shape,
  roundTripSubQuestion: SubQuestionSchema,
  frequencySubQuestion: SubQuestionSchema,
  startDateSubQuestion: SubQuestionSchema,
  endDateSubQuestion: SubQuestionSchema,
  legs: zod.array(FJLegSchema),
  reusableQuestionOption: ReusableQuestionOptionSchema,
}) satisfies zod.ZodType<FJQuestionOption>;

export const QuestionSchema = zod.object({
  id: zod.coerce.number().nullable(),
  questionName: zod.string(),
  shortQuestionName: zod.string(),
  description: zod.string(),
  tips: zod.array(zod.string()),
  questionOptions: zod.array(QuestionOptionSchema),
  optionTemplate: QuestionOptionSchema.nullable(),
  allowCustomOptions: zod.boolean(),
  newCustomOptionPrompt: zod.string(),
  allowReusableQuestionOptions: zod.boolean(),
  reusableQuestionOptionsTags: zod.array(zod.string()),
  dynamicQuestionOptionParams: zod.array(zod.string()).nullable(),
}) satisfies zod.ZodType<Question>;

export const SurveyCategorySchema = zod.object({
  id: zod.coerce.number().nullable(),
  categoryName: zod.string(),
  description: zod.string(),
  questions: zod.array(QuestionSchema),
}) satisfies zod.ZodType<SurveyCategory>;

export const SurveyModelSchema = zod.object({
  id: zod.coerce.number().nullable(),
  version: zod.string(),
  surveyCategories: zod.array(SurveyCategorySchema),
  reusableQuestionOptions: zod.array(ReusableQuestionOptionSchema),
}) satisfies zod.ZodType<SurveyModel>;
