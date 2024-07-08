interface ProgressBarProps {
  value: number;
  max: number;
  isRiskRange?: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value, max, isRiskRange = false }) => {
  const percentage = (value / max) * 100;

  if (isRiskRange) {
    return (
      <div className="w-full bg-gray-200 h-4 rounded-full relative">
        <div 
          className="absolute top-0 left-[40%] h-4 bg-[#EF5350]" 
          style={{ width: '20%' }}
        ></div>
      </div>
    );
  }

  return (
    <div className="w-full bg-gray-200 h-4 rounded-full">
      <div 
        className="bg-[#EF5350] h-4 rounded-full" 
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;