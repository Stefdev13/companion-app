import { useUserDataStore } from "@/stores/UserDataStore";
import { Question } from "@/types/survey-model-types";

export function useGetQuestionById(
  surveyCategoryId: string,
  questionId: string,
): Question | null {
  try {
    const surveyModel = useUserDataStore((state) => state.user!.SurveyModel);

    const parsedCategoryId = Number.parseInt(surveyCategoryId);
    const parsedQuestionId = Number.parseInt(questionId);

    const category =
      surveyModel.surveyCategories.find((c) => c.id === parsedCategoryId) ??
      null;
    if (category === null) {
      return null;
    }

    return (
      category.questions.find((q) => q.id === parsedQuestionId) ?? null
    );
  } catch {
    return null;
  }
}
