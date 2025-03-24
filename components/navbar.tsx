//@ts-nocheck

"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

interface NavbarProps {
  scrollTo: (id: string) => void;
}

export default function Navbar({ scrollTo }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavClick = (id: string) => {
    scrollTo(id);
    setIsMenuOpen(false);
  }

  return (
    <header className="border-b border-green-900/50 bg-black/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold tracking-tighter">
              ALGO<span className="text-white">RUSH</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => handleNavClick("about")}
              className="text-green-400 hover:text-green-300 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => handleNavClick("prizes")}
              className="text-green-400 hover:text-green-300 transition-colors"
            >
              Prizes
            </button>
            <button
              onClick={() => handleNavClick("timeline")}
              className="text-green-400 hover:text-green-300 transition-colors"
            >
              Timeline
            </button>
            <button
              onClick={() => handleNavClick("faq")}
              className="text-green-400 hover:text-green-300 transition-colors"
            >
              FAQ
            </button>
            <Button
              onClick={() => handleNavClick("reg")}
              className="bg-green-600 hover:bg-green-700 text-black ml-2"
            >
              Register
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-green-400" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-green-900/50">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => handleNavClick("about")}
                className="text-green-400 hover:text-green-300 transition-colors py-2 text-left"
              >
                About
              </button>
              <button
                onClick={() => handleNavClick("format")}
                className="text-green-400 hover:text-green-300 transition-colors py-2 text-left"
              >
                Format
              </button>
              <button
                onClick={() => handleNavClick("prizes")}
                className="text-green-400 hover:text-green-300 transition-colors py-2 text-left"
              >
                Prizes
              </button>
              <button
                onClick={() => handleNavClick("faq")}
                className="text-green-400 hover:text-green-300 transition-colors py-2 text-left"
              >
                FAQ
              </button>
              <Button
                onClick={() => handleNavClick("reg")}
                className="bg-green-600 hover:bg-green-700 text-black w-full"
              >
                Register
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}