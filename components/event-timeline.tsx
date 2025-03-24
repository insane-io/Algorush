import { Badge } from "@/components/ui/badge"
import { CalendarClock, Flag, LightbulbIcon, Play, Award, MessageSquare } from 'lucide-react'

interface TimelineEvent {
  icon: React.ReactNode
  title: string
  time: string
  description: string
}

export default function EventTimeline() {
  const events: TimelineEvent[] = [
    {
      icon: <Flag className="h-5 w-5" />,
      title: "Inauguration",
      time: "10:00 AM",
      description: "The Matrix opens. Welcome ceremony and introduction to AlgoRush."
    },
    {
      icon: <LightbulbIcon className="h-5 w-5" />,
      title: "Release of Problem Statements",
      time: "12:00 PM",
      description: "The Architect reveals the challenges. Problem statements go live."
    },
    {
      icon: <Play className="h-5 w-5" />,
      title: "Competition Begins",
      time: "09:00 AM",
      description: "Enter the Matrix. Coding competition officially starts."
    },
    {
      icon: <CalendarClock className="h-5 w-5" />,
      title: "Break",
      time: "01:00 PM - 02:00 PM",
      description: "Take the blue pill. Short rest period for all participants."
    },
    {
      icon: <Award className="h-5 w-5" />,
      title: "Result Announcement",
      time: "05:00 PM",
      description: "The One is revealed. Winners and rankings announced."
    },
    {
      icon: <MessageSquare className="h-5 w-5" />,
      title: "Discussion of Questions",
      time: "11:00 AM",
      description: "Free your mind. Solution walkthrough and open discussion."
    }
  ]

  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 top-6 bottom-6 w-0.5 bg-green-600/50 z-0"></div>

      <div className="space-y-8 relative z-10">
        {events.map((event, index) => (
          <div key={index} className="flex gap-6 group">
            {/* Icon circle */}
            <div className="relative flex-shrink-0 w-8 h-8 rounded-full bg-green-900 border border-green-500 flex items-center justify-center group-hover:bg-green-700 group-hover:border-green-400 transition-colors">
              {event.icon}

              {/* Pulse effect */}
              <span className="absolute inset-0 rounded-full bg-green-500/20 animate-ping opacity-75 duration-1000"></span>
            </div>

            {/* Content */}
            <div className="bg-green-900/20 border border-green-900 rounded-lg p-4 flex-1 hover:bg-green-950 hover:bg-opacity-80 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                <h3 className="font-bold text-lg text-green-400">{event.title}</h3>
                <div className="flex items-center gap-2">
                  <Badge className="bg-green-800/70 text-green-200 font-mono">
                    {event.time}
                  </Badge>
                </div>
              </div>
              <p className="text-green-300 font-mono">{event.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Matrix code rain effect at the bottom */}
      <div className="h-16 overflow-hidden relative mt-4 opacity-30">
        <div className="absolute inset-0 font-mono text-green-500 text-xs leading-none tracking-tight">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="whitespace-nowrap">
              {'01'.repeat(50).split('').map((char, j) => (
                <span
                  key={j}
                  className="inline-block"
                  style={{
                    opacity: Math.random(),
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${1 + Math.random() * 3}s`
                  }}
                >
                  {char}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
