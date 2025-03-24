import Link from "next/link"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-green-900/50 bg-black/80 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              ALGO<span className="text-white">RUSH</span>
            </h3>
            <p className="text-green-400 text-sm mb-4 font-mono">
              The ultimate DSA competition inspired by The Matrix Revolution.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-green-400 hover:text-green-300">
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-green-400 hover:text-green-300">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-green-400 hover:text-green-300">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-green-400 hover:text-green-300">
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-white">Competition</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-green-400 hover:text-green-300 text-sm">
                  Rules & Guidelines
                </Link>
              </li>
              <li>
                <Link href="#" className="text-green-400 hover:text-green-300 text-sm">
                  Schedule
                </Link>
              </li>
              <li>
                <Link href="#" className="text-green-400 hover:text-green-300 text-sm">
                  Prize Distribution
                </Link>
              </li>
              <li>
                <Link href="#" className="text-green-400 hover:text-green-300 text-sm">
                  Past Winners
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-white">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-green-400 hover:text-green-300 text-sm">
                  Practice Problems
                </Link>
              </li>
              <li>
                <Link href="#" className="text-green-400 hover:text-green-300 text-sm">
                  Learning Materials
                </Link>
              </li>
              <li>
                <Link href="#" className="text-green-400 hover:text-green-300 text-sm">
                  DSA Cheat Sheets
                </Link>
              </li>
              <li>
                <Link href="#" className="text-green-400 hover:text-green-300 text-sm">
                  Community Forum
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-white">Contact</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-green-400 hover:text-green-300 text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-green-400 hover:text-green-300 text-sm">
                  Sponsorship
                </Link>
              </li>
              <li>
                <Link href="#" className="text-green-400 hover:text-green-300 text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-green-400 hover:text-green-300 text-sm">
                  Privacy Policy
                </Link>
              </li>
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

