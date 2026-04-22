import { useUserDataStore } from "@/stores/UserDataStore";
import { SurveyCategory } from "@/types/survey-model-types";

export function useGetSurveyCategoryById(
  surveyCategoryId: string,
): SurveyCategory | null {
  try {
    const surveyModel = useUserDataStore((state) => state.user!.SurveyModel);

    const parsedId = Number.parseInt(surveyCategoryId);

    return surveyModel.surveyCategories.find((c) => c.id === parsedId) ?? null;
  } catch {
    return null;
  }
}
