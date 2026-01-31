import { createFileRoute } from '@tanstack/react-router'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <main className="flex flex-col gap-4">
        <Hero />
        <Footer />
      </main>
    </div>
  )
}
