import React, { useState } from 'react';

export default function Tmp() {
  const [counter, setCounter] = useState(1);

  const increment = () => {
    setCounter((c) => c + 1);
  };

  return (
    <>
      <div>{counter}</div>
      <button onClick={increment}>Inc</button>
    </>
  );
}
