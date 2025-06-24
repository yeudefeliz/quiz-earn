import { useState } from 'react';

function App() {
  const [question, setQuestion] = useState("What is 2 + 2?");
  const [answer, setAnswer] = useState("");
  const [correct, setCorrect] = useState<boolean | null>(null);

  const checkAnswer = () => {
    setCorrect(answer.trim() === "4");
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>🧠 Quiz Time</h1>
      <p>{question}</p>
      <input
        type="text"
        value={answer}
        onChange={e => setAnswer(e.target.value)}
      />
      <button onClick={checkAnswer}>Submit</button>
      {correct !== null && (
        <p>{correct ? "✅ Correct!" : "❌ Try Again."}</p>
      )}
    </div>
  );
}

export default App;
