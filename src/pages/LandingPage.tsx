import { Button } from '@/components/ui/button'
import { Navbar } from '@/components/ui/navbar/Navbar'
import './LandingPage.css'

const LandingPage = () => {
  const handleGetStarted = () => {
    console.log('Get Started clicked')
    // Add navigation or scroll logic here
  }

  return (
    <div className="landing-page">
      <Navbar />
      
      <main className="landing-page-main">
        <div className="landing-page-container">
          {/* Hero Content */}
          <div className="hero-section">
            <h1 className="hero-title">Welcome to the Travel Planner!</h1>
            <p className="hero-subtitle">
              Get perfectly personalised itineraries for your trips, find your spots in a new city! And more!
            </p>
            <Button 
              onClick={handleGetStarted}
              className="cta-button"
            >
              Get Started
            </Button>
          </div>

          {/* Decorative Elements */}
          <div className="hero-decoration">
            <div className="decoration-circle decoration-circle-1"></div>
            <div className="decoration-circle decoration-circle-2"></div>
            <div className="decoration-circle decoration-circle-3"></div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default LandingPage