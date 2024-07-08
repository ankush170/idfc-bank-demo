import Header from '@/components/Header'
import InvestmentCard from '@/components/InvestmentCard'
import BankBalanceCard from '@/components/BankBalanceCard'
import CreditCardSection from '@/components/CreditCardSection'
import BillsPaymentsSection from '@/components/BillsPaymentsSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Header />
      <div className="flex-1 p-4">
        <div className="flex space-x-4 mb-4">
          <InvestmentCard />
          <BankBalanceCard />
        </div>
        <CreditCardSection />
        <BillsPaymentsSection />
      </div>
      <Footer />
    </main>
  )
}