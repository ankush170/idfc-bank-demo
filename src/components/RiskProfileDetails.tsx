"use client"
import ProgressBar from './ProgressBar'

const RiskProfileDetails = () => {
  return (
    <div>
      <div className="mb-4">
        <p className="font-bold">Your Risk Range</p>
        <ProgressBar value={20} max={100} isRiskRange={true} />
        <div className="flex justify-between text-xs">
          <span>0</span>
          <span>40</span>
          <span>60</span>
          <span>100</span>
        </div>
      </div>
      
      <div className="mb-4">
        <p className="font-bold">Your Investment Style</p>
        <p>As an Explorer, you&apos;re willing to take calculated risks for potentially higher returns. You understand market fluctuations and are comfortable with some volatility in your portfolio.</p>
      </div>
      
      <div className="mb-4">
        <p className="font-bold">Factors influencing your risk profile:</p>
        {['Financial Knowledge', 'Risk Sensitivity', 'Risk Aversion'].map((factor, index) => (
          <div key={index} className="mb-2">
            <p>{factor}</p>
            <ProgressBar value={(3 - index) * 30} max={100} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default RiskProfileDetails