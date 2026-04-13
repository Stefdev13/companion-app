import { SurveyModelSchema } from "@/schemas/survey-model.schema";
import { SurveyModel } from "@/types/survey-model-types";
import { useEffect, useState } from "react";

const API_BASE = process.env.EXPO_PUBLIC_API_BASE;

type UseGenerateSurveyModelParams = {
  country: string;
  version: string;
};

export function useGenerateSurveyModel({
  version = "1",
  country,
}: UseGenerateSurveyModelParams) {
  const [surveyModel, setSurveyModel] = useState<SurveyModel | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchSurveyModel() {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(`${API_BASE}/survey/generate`, {
          // If load() is still running when the component unmounts, abort() cancels this request
          signal: controller.signal,
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            version: version,
            country: country,
          }),
        });
        // fetch only throws on network errors; 404/500 return res.ok === false instead
        if (!res.ok) {
          throw new Error(`Request failed: ${res.status}`);
        }
        const response = await res.json();
        setSurveyModel(SurveyModelSchema.parse(response));
      } catch (e) {
        setError(e instanceof Error ? e.message : "Something went wrong");
      } finally {
        // Always clear loading whether we succeeded, failed, or aborted
        setLoading(false);
      }
    }

    void fetchSurveyModel();

    // Cleanup: when leaving the screen, cancel any in-flight request
    return () => controller.abort();
  }, []);

  return { surveyModel, loading, error };
}
