export const BasicFunctions = () => {
  const a: number = 2;
  const b: number = 8;

  const addTwoNumbers = (a: number, b: number): number => {
    return a + b;
  }

  return (
    <>
      <h3>Funciones</h3>
      <span>El resultado de sumar {a} + {b} = {addTwoNumbers(a, b)}</span>
    </>
  )
}
