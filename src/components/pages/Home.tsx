import React from 'react';
import { setCountDown, setCountUp } from '../../store/countSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

export default function Home() {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.count);

  return (
    <main className="main">
      <h1 className="main__title">Home page</h1>
      <h1>{count}</h1>
      <button onClick={() => dispatch(setCountUp(1))}>UP</button>
      <button onClick={() => dispatch(setCountDown(1))}>Down</button>
    </main>
  );
}
