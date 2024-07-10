import Header2 from '@/components/Header2'
import RiskAssessmentForm from '@/components/RiskAssessmentForm'
import RoboIcon from '@/components/RoboIcon'

export default function RiskAssessment() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header2 title='Investment Analysis' />
      <div className='p-4'>
        <RoboIcon message="Hi Raj! I&apos;m J.A.R.V.I.S. Help me with a few more details before I can understand your risk profile…" />
      </div>
      <div className='p-4'>
        <h1 className="text-2xl font-bold mb-2">What are you willing to risk to potentially gain returns?</h1>
        <p className="text-xs mb-4">This will help me assess your loss aversion</p>
      </div>
      <div className='p-4'>
        <RiskAssessmentForm />
      </div>
      
    </div>
  )
}