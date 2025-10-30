import { useMemo, useState } from "react";
import { defaultFormData, FormData } from "../models/formData";

export function useForm() {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState<FormData>(() => ({ ...defaultFormData }));

  const stepDescription = useMemo(() => {
    switch (activeStep) {
      case 0:
        return "Ingresa tu información personal";
      case 1:
        return "Como podemos contactarte";
      case 3:
        return "Preferencias sobre nuestro sitio";
      default:
        return "Revisa que tu información este correcta";
    }
  }, [activeStep])
}
