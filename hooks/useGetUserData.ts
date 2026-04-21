import { User } from "@/types/user-types";
import { useGenerateSurveyModel } from "./useGenerateSurveyModel";

export function useGetUserData() {
  // Get the user's personal data (account info, location, premium/free status, etc...)

  // Get the users SurveyModel (backend will generate one if they don't have one)
  const surveyModel = useGenerateSurveyModel({
    version: "1",
    country: "Belgium",
  });

  // Get the users EmissionsModel or generate one using SurveyModel if they don't have one

  // Create error state
  // const errors = profile.error ?? surveyModel.error ?? emissionsProfile.error;
  const error = surveyModel.error;

  // Create loading state
  // const loading = profile.loading || surveyModel.loading || emissionsProfile.loading;
  const loading: boolean = surveyModel.loading;

  // Create user object
  // const user: User | null = profile.profile && surveyModel.surveyModel && emissionsProfile.emissionsModel
  const user: User | null = surveyModel.surveyModel
    ? {
        id: 1,
        name: "Stef",
        tier: "premium",
        SurveyModel: surveyModel.surveyModel,
      }
    : null;

  // Create isLoaded state (all data loaded, and no errors)
  const isLoaded: boolean = !loading && !error && user !== null;

  return { user, isLoaded, error };
}
