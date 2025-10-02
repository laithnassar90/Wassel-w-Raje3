interface Suggestion {
  id: string;
  title: string;
  description: string;
  action: string;
  priority: 'high' | 'medium' | 'low';
  onClick: () => void;
}

interface SmartSuggestionsProps {
  suggestions: Suggestion[];
  className?: string;
}

export const SmartSuggestions = ({ suggestions, className = '' }: SmartSuggestionsProps) => {
  const priorityColors = {
    high: 'border-l-red-500 bg-red-50',
    medium: 'border-l-yellow-500 bg-yellow-50', 
    low: 'border-l-green-500 bg-green-50'
  };

  return (
    <div className={`space-y-3 ${className}`}>
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Smart Suggestions</h3>
      {suggestions.map((suggestion) => (
        <div
          key={suggestion.id}
          className={`p-4 rounded-lg border-l-4 ${priorityColors[suggestion.priority]} hover:shadow-md transition-shadow cursor-pointer`}
          onClick={suggestion.onClick}
        >
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-800">{suggestion.title}</h4>
              <p className="text-sm text-gray-600 mt-1">{suggestion.description}</p>
            </div>
            <button className="text-cyan-600 hover:text-cyan-700 font-medium text-sm">
              {suggestion.action}
            </button>
          </div>
        </div>
      ))}