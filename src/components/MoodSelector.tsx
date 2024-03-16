import React, { useState } from 'react';

export const MoodSelector = ({ onSelect }) => {
    const [selectedMood, setSelectedMood] = useState('');

    const moods = [
        { label: '😊', value: 'happy' },
        { label: '😢', value: 'sad' },
        { label: '😡', value: 'angry' },
        // Add more mood objects as needed
    ];

    const handleMoodSelect = (mood) => {
        setSelectedMood(mood);
    };

    const handleSubmit = () => {
        if (selectedMood) {
            onSelect(selectedMood);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold mb-4">Select your mood</h1>
            <div className="flex space-x-4">
                {moods.map((mood) => (
                    <button
                        key={mood.value}
                        className={`mood-button ${selectedMood === mood.value ? 'bg-blue-500 text-white' : ''} p-3 rounded-sm`}
                        onClick={() => handleMoodSelect(mood.value)}
                    >
                        {mood.label}
                    </button>
                ))}
            </div>
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
                onClick={handleSubmit}
            >
                Submit
            </button>
        </div>
    );
};