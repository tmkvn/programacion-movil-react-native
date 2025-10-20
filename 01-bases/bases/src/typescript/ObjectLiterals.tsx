interface Address {
  country: string,
  city: string,
  houseNumber: string
}

interface Person {
  age: number,
  firstname: string,
  lastname?: string,
  address: Address
}

interface Student extends Person {
  course: string
}

export const ObjectLiterals = () => {
  const person: Person = {
    age: 25,
    firstname: 'Kevin',
    address: {
      country: 'Ecuador',
      city: 'Cuenca',
      houseNumber: '1-93'
    }
  }

  const student: Student = {
    course: '7B',
    ...person
  }

  return (
    <>
      <h3>Objetos Literales:</h3>
      <pre>
        {JSON.stringify(student, null, 2)}
      </pre>
    </>
  )
}
