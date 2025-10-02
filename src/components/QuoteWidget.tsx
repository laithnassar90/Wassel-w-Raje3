import React, { useState, useEffect } from 'react';
import { getDailyQuote, getRandomQuote } from '../utils/randomQuotes';

const QuoteWidget: React.FC = () => {
  const [quote, setQuote] = useState<string>('');
  const [isDaily, setIsDaily] = useState<boolean>(true);

  useEffect(() => {
    setQuote(getDailyQuote());
  }, []);

  const handleNewQuote = () => {
    if (isDaily) {
      setQuote(getRandomQuote());
      setIsDaily(false);
    } else {
      setQuote(getRandomQuote());
    }
  };

  const handleDailyQuote = () => {
    setQuote(getDailyQuote());
    setIsDaily(true);
  };

  return (
    <div className="max-w-lg mx-auto mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">
          {isDaily ? '📅 Daily Quote' : '✨ Random Quote'}
        </h3>
        <blockquote className="text-gray-700 italic mb-4 min-h-[3rem] flex items-center justify-center">
          "{quote}"
        </blockquote>
        <div className="flex gap-2 justify-center">
          <button
            onClick={handleDailyQuote}
            className={`px-3 py-1 rounded text-sm ${
              isDaily 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Daily
          </button>
          <button
            onClick={handleNewQuote}
            className="px-3 py-1 bg-indigo-500 text-white rounded text-sm hover:bg-indigo-600"
          >
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuoteWidget;