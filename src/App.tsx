import { Features } from './components/Features'
import { FooterCta } from './components/FooterCta'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'

function App() {
  return (
    <div className="min-h-screen bg-ink text-fg">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
      </main>
      <FooterCta />
    </div>
  )
}

export default App
