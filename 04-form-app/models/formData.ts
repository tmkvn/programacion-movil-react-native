export type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phome: string;
  company: string;
  city: string;
  subscribe: boolean;
  notes: string;
}

export const defaultFormData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phome: "",
  company: "",
  city: "",
  subscribe: false,
  notes: ""
}
