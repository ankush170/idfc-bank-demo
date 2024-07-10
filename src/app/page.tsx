import Header from '@/components/Header'
import InvestmentCard from '@/components/home/InvestmentCard'
import CreditCardSection from '@/components/CreditCardSection'
import BillsPaymentsSection from '@/components/BillsPaymentsSection'
import Footer from '@/components/Footer'
import Greet from '@/components/home/Greet'
import EmiDueNotice from '@/components/home/EmiDueNotice'
import BankBalanceCard from '@/components/home/BankBalanceCard'
import InvestmentsSection from '@/components/home/InvestmentsSection'

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex-1 px-4">
        <Greet />
        <EmiDueNotice />
        <div className="flex space-x-4 mb-4">
          <InvestmentCard />
          <BankBalanceCard />
        </div>
        <InvestmentsSection />
        <CreditCardSection />
        <BillsPaymentsSection />
      </div>
    </>
  )
}