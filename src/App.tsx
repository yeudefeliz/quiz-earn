import { useState } from 'react';
import { useEffect } from 'react';

declare global {
  interface Window {
    adsbygoogle: any;
  }
}

const questions = [
  { question: "What is 2 + 2?", answer: "4" },
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "Which planet is known as the Red Planet?", answer: "Mars" }
];

function App() {
  const [current, setCurrent] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    if (window.adsbygoogle && Array.isArray(window.adsbygoogle)) {
      window.adsbygoogle.push({});
    }
  }, [current]); // Reload ad when question changes

  const checkAnswer = () => {
    const correct = userAnswer.trim().toLowerCase() === questions[current].answer.toLowerCase();
    if (correct) setScore(prev => prev + 1);

    if (current + 1 < questions.length) {
      setCurrent(prev => prev + 1);
      setUserAnswer("");
    } else {
      setShowResult(true);
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>🧠 Quiz App</h1>

      {/* Google Ad Block */}
      <ins className="adsbygoogle"
        style={{ display: 'block', marginBottom: '1rem' }}
        data-ad-client="ca-pub-1602412867887085"
        data-ad-slot="1234567890"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>

      {!showResult ? (
        <>
          <p><strong>Question {current + 1}:</strong> {questions[current].question}</p>
          <input
            type="text"
            value={userAnswer}
            onChange={e => setUserAnswer(e.target.value)}
            style={{ padding: '0.5rem', width: '100%', marginBottom: '1rem' }}
          />
          <button onClick={checkAnswer}>Submit</button>
        </>
      ) : (
        <div>
          <h2>Your Score: {score} / {questions.length}</h2>
          <p>🎉 Thanks for playing!</p>
        </div>
      )}
    </div>
  );
}

export default App;
