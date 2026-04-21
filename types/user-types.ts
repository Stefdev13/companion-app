import { SurveyModel } from "./survey-model-types";

export type User = {
  id: number | null;
  name: string;
  tier: "free" | "premium";
  SurveyModel: SurveyModel;
  //   EmissionsProfile: EmissionsProfile;
};
