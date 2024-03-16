import { useState } from 'react';
import { ConfirmationMessage } from './components/ConfirmationMessage';
import { MoodSelector } from './components/MoodSelector';
import "./App.css"
const App = () => {
  const [submittedMood, setSubmittedMood] = useState();

  const handleMoodSubmit = (mood) => {
    setSubmittedMood(mood);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-800">
      {submittedMood ? (
        <ConfirmationMessage mood={submittedMood} />
      ) : (
        <MoodSelector onSelect={handleMoodSubmit} />
      )}
    </div>
  );
};

export default App;