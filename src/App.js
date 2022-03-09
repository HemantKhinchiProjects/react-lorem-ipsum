import React, { useState } from 'react';
import './style.css';
import data from './data.js';

export default function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
    }
    if (count > 8) {
      amount = 8;
    }
    setText(data.slice(0, amount));
  };
  return (
    <section className="section-center">
      <h2>Tried of boring lorem ipsum</h2>
      <form className="lorem-form" onSubmit={submitHandler}>
        <label htmlFor="amount">Paragraph:</label>
        <input
          type="number"
          id="amount"
          value={count}
          name="amount"
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn" onClick={submitHandler}>
          Generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}
