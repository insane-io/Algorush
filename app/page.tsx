//@ts-nocheck

"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Clock, Code, Trophy, Users, Zap } from "lucide-react"
import MatrixRain from "@/components/matrix-rain"
import CountdownTimer from "@/components/countdown-timer"
import PrizePool from "@/components/prize-pool"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import EventTimeline from "@/components/event-timeline"
import TeamRegistrationForm from "@/components/form"

export default function Home() {
  // Competition date - set to 30 days from now
  const competitionDate = new Date()
  competitionDate.setDate(competitionDate.getDate() + 10)

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    console.log(id)
    console.log("Clicked")
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }

  return (
    <div className="relative min-h-screen bg-black text-green-500">
      <MatrixRain />
      <div className="relative z-10">
        <Navbar scrollTo={scrollTo} />

        <main className="container mx-auto px-4 py-10">
          {/* Hero Section */}
          <section id="reg" className="py-20 text-center">
            <div className="glitch-wrapper mb-4">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter glitch-text">
                ALGO<span className="text-white">RUSH</span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-green-400 font-mono">
              Enter the Matrix. Solve the Algorithm. Free your mind.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Button size="lg" onClick={() => scrollTo("register")} className="bg-green-600 hover:bg-green-700 text-black font-bold">
                REGISTER NOW
              </Button>
              <Button size="lg" onClick={() => scrollTo("about")} variant="outline" className="border-green-500 text-green-500 hover:bg-green-900/20">
                LEARN MORE
              </Button>
            </div>

            <div id="about" className="max-w-md mx-auto">
              <CountdownTimer targetDate={competitionDate} />
            </div>
          </section>

          {/* About Section */}
          <section className="py-16 border-t border-green-900/50">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-green-900/50 text-green-400 hover:bg-green-900">THE CHALLENGE</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">The System Has You</h2>
                <p className="text-green-300 mb-4 font-mono">
                  Algo Rush is not just a competition. It's a test of your ability to see beyond the code, to bend the
                  rules of algorithms and data structures.
                </p>
                <p className="text-green-400 mb-6 font-mono">
                  Like Neo navigating the Matrix, you'll face increasingly complex challenges that will push your coding
                  skills to the limit.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Code className="h-5 w-5" />
                    <span>DSA Challenges</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    <span>Timed Rounds</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    <span>Team Battles</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="h-5 w-5" />
                    <span>Live Leaderboard</span>
                  </div>
                </div>
              </div>
              <div className="bg-green-900/20 border border-green-900 hover:bg-green-950 hover:bg-opacity-70 rounded-lg p-6 max-sm:w-96 font-mono">
                <pre className="text-green-400 overflow-x-auto">
                  <code>{`function redPill() {
  // Are you ready to see how deep
  // the rabbit hole goes?
  const matrix = new Matrix();
  const path = matrix.findPath(start, end);
  
  if (path.complexity === O(1)) {
    return "Impossible. The Oracle warned about this.";
  }
  
  return path.optimize();
}`}</code>
                </pre>
              </div>
            </div>
          </section>

          {/* Prize Pool Section */}
          <section id="prizes" className="py-16 border-t border-green-900/50">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-green-900/50 text-green-400 hover:bg-green-900">REWARDS</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Prize Pool</h2>
              <p className="text-green-300 max-w-2xl mx-auto font-mono">
                The Architect has designed a system of rewards for those who can navigate the Matrix and solve its
                algorithmic puzzles.
              </p>
            </div>

            <PrizePool />
          </section>

          {/* Competition Format */}
          <div id="timeline" className="pt-20 border-t border-green-900/50">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">Timeline</h2>
            <EventTimeline />
          </div>


          <div id="register" className="pt-10"></div>

          {/* Registration */}
          {/* <section className="py-16 border-t border-green-900/50">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-green-900/50 text-green-400 hover:bg-green-900">JOIN US</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Take the Red Pill</h2>
                <p className="text-green-300 mb-6 font-mono">
                  The choice is yours. Register now to test your skills against the best algorithmic minds in the world.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-green-900/30 p-2 rounded-full mt-1">
                      <Trophy className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Substantial Prize Pool</h3>
                      <p className="text-green-400 text-sm">Compete for cash prizes and exclusive opportunities</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-900/30 p-2 rounded-full mt-1">
                      <Users className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Global Community</h3>
                      <p className="text-green-400 text-sm">Connect with top coders and potential employers</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-900/30 p-2 rounded-full mt-1">
                      <Code className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Skill Development</h3>
                      <p className="text-green-400 text-sm">
                        Sharpen your DSA skills with our Matrix-inspired challenges
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <Card className="bg-black border-green-900">
                <CardHeader>
                  <CardTitle>Register for Algo Rush</CardTitle>
                  <CardDescription className="text-green-400">
                    Complete the form to join the competition
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-green-400">First Name</label>
                        <input
                          type="text"
                          className="w-full bg-green-900/20 border border-green-900 rounded-md p-2 text-green-100 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-green-400">Last Name</label>
                        <input
                          type="text"
                          className="w-full bg-green-900/20 border border-green-900 rounded-md p-2 text-green-100 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-green-400">Email</label>
                      <input
                        type="email"
                        className="w-full bg-green-900/20 border border-green-900 rounded-md p-2 text-green-100 focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-green-400">Experience Level</label>
                      <select className="w-full bg-green-900/20 border border-green-900 rounded-md p-2 text-green-100 focus:outline-none focus:ring-2 focus:ring-green-500">
                        <option>Beginner (0-1 years)</option>
                        <option>Intermediate (1-3 years)</option>
                        <option>Advanced (3-5 years)</option>
                        <option>Expert (5+ years)</option>
                      </select>
                    </div>
                  </form>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-black font-bold">REGISTER NOW</Button>
                </CardFooter>
              </Card>
            </div>
          </section> */}
          <TeamRegistrationForm />

          {/* FAQ Section */}
          <section id="faq" className="py-16 border-t border-green-900/50">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-green-900/50 text-green-400 hover:bg-green-900">QUESTIONS</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {[
                {
                  q: "Who can participate in Algo Rush?",
                  a: "Algo Rush is open to programmers of all skill levels worldwide. Whether you're a student, professional, or self-taught coder, you're welcome to join.",
                },
                {
                  q: "What programming languages are supported?",
                  a: "Participants can use Python, Java, C++, JavaScript, and Go for their solutions.",
                },
                {
                  q: "Is there a registration fee?",
                  a: "No, participation in Algo Rush is completely free.",
                },
                {
                  q: "How are solutions evaluated?",
                  a: "Solutions are evaluated based on correctness, time complexity, and space complexity. In case of ties, submission time will be considered.",
                },
                {
                  q: "Can I participate as part of a team?",
                  a: "The qualifying and semifinal rounds are individual competitions. The finals will include both individual and team components.",
                },
              ].map((faq, index) => (
                <div key={index} className="border border-green-900 bg-green-900/10 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-2">{faq.q}</h3>
                  <p className="text-green-300 font-mono">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  )
}

