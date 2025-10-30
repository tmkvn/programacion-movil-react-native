import { FormData } from "./formData";

export const formSteps = ["Profile", "Contact", "Preference", "Summary"] as const;

export type FormStep = (typeof formSteps)[number];

export type FormFileUpdater = <key extends keyof FormData>(
  field: key,
  value: FormData[key]
) => void;
