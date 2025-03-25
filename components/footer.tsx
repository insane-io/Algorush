import Link from "next/link"
import { Mail, Phone } from "lucide-react"

interface NavbarProps {
  scrollTo: (id: string) => void;
}

export default function Footer({ scrollTo }: NavbarProps) {
  return (
    <footer className="border-t border-green-900/50 bg-black/80 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img src="https://cdn.discordapp.com/attachments/1353718832459550801/1353808729249812604/image.png?ex=67e30021&is=67e1aea1&hm=becfc98dc3a24528492203339f9e8a2254ea6c5bda3adbfc3b2ff2c86b2f253e&" alt="" className="h-24" />
            <p className="text-green-400 text-md mb-4 font-mono mt-5">
              Design and Code Club, Atharva College of Engineering
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-white">Competition</h3>
            <ul className="space-y-2">
              {/* <li>
                <Link href="#" className="text-green-400 hover:text-green-300 text-sm">
                  Rules & Guidelines
                </Link>
              </li> */}
              <li>
                <p onClick={() => scrollTo("timeline")} className="text-green-400 cursor-pointer hover:text-green-300 text-sm">
                  Schedule
                </p>
              </li>
              <li>
                <p onClick={() => scrollTo("prizes")} className="text-green-400 cursor-pointer hover:text-green-300 text-sm">
                  Prize Distribution
                </p>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-white">Contact</h3>
            <ul className="space-y-2">

              <li>
                <p className="text-green-400 flex items-center gap-3 hover:text-green-300 text-sm">
                  <Phone size={20} />
                  +91 9923728849
                </p>
              </li>
              <div className="flex space-x-4">
                <p className="text-green-400 flex items-center gap-3 hover:text-green-300">
                  <Mail size={20} />
                  <h1>designandcode@atharvacoe.ac.in</h1>
                </p>
              </div>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-900/50 mt-8 pt-8 text-center">
          <p className="text-green-400 text-sm font-mono">
            &copy; {new Date().getFullYear()} AlgoRush. All rights reserved. Enter the Matrix at your own risk.
          </p>
        </div>
      </div>
    </footer>
  )
}

