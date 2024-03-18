import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import MoodTracker from './components/MoodTracker';
import App from './App';

describe('MoodTracker Component', () => {
  it('MoodTracker Component', () => {
    render(<MoodTracker />);
    const headerElement = screen.getByText('please could you pick your mood');
    expect(headerElement).toBeInTheDocument();

    const happyEmoji = screen.getByAltText('Happy');
    expect(happyEmoji).toBeInTheDocument();

  });

  it('displays ConfirmationMood component after selecting mood', () => {
    render(<App />);
    const happyEmoji = screen.getByAltText('Happy');
    fireEvent.click(happyEmoji);
    const confirmationHeader = screen.getByText('You picked Happy');
    expect(confirmationHeader).toBeInTheDocument();
  });
})