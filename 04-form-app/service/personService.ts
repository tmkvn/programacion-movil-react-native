import { Person } from "../models/person"

const REGISTER_URL = 'http://172.18.68.95:8080/v1/users'

export const regsistrarPersona = async (person: Person) => {
  const response = await fetch(REGISTER_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(person)
  });

  if (response.status != 201) {
    let errorMessage = 'No se pudo registrar a la persona';
    console.error(errorMessage);
    throw new Error(errorMessage)
  }

  try {
    return await response.json();
  } catch {
    return undefined
  }
}

