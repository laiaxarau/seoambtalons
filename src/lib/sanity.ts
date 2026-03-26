import { createClient } from "@sanity/client";

export const sanity = createClient({
  projectId: "wkz7gdqb",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});
