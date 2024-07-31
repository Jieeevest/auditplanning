// withTokenFetcher.ts

import withTokenConfig from "@/helpers/withTokenConfig";
import { ProjectOverview } from "@/helpers/types";

export default async function withTokenFetcher(
  url: string
): Promise<ProjectOverview[]> {
  const { headers } = withTokenConfig();

  const response = await fetch(url, {
    method: "GET",
    headers: {
      ...headers,
      "Strict-Transport-Security": "max-age=86400; preload",
    },
  });

  if (!response.ok) {
    throw new Error(response.statusText || "Network response was not ok");
  }

  // Assuming the response contains the array directly, otherwise adapt this part
  const data: ProjectOverview[] = await response.json();
  return data;
}
