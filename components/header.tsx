"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image
              src="/images/guardian-x-logo.jpg"
              alt="Guardian-X Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span className="text-xl font-bold text-foreground">Guardian-X</span>
          </div>

          <nav className="hidden lg:flex items-center space-x-6">
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <div className="relative group">
              <button className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                Product
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <a
                    href="#device-showcase"
                    className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted"
                  >
                    Device Showcase
                  </a>
                  <a
                    href="#hardware"
                    className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted"
                  >
                    Hardware
                  </a>
                  <a
                    href="#advantages"
                    className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted"
                  >
                    Features
                  </a>
                </div>
              </div>
            </div>
            <a href="#problem" className="text-muted-foreground hover:text-foreground transition-colors">
              Problem
            </a>
            <a href="#team" className="text-muted-foreground hover:text-foreground transition-colors">
              Team
            </a>
            <a href="#achievements" className="text-muted-foreground hover:text-foreground transition-colors">
              Progress
            </a>
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
              Services
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" size="sm" asChild>
              <a href="#problem">Learn More</a>
            </Button>
            <Button size="sm" asChild>
              <a href="#contact">Get Started</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <a href="#device-showcase" className="text-muted-foreground hover:text-foreground transition-colors">
                Product
              </a>
              <a href="#problem" className="text-muted-foreground hover:text-foreground transition-colors">
                Problem
              </a>
              <a href="#team" className="text-muted-foreground hover:text-foreground transition-colors">
                Team
              </a>
              <a href="#achievements" className="text-muted-foreground hover:text-foreground transition-colors">
                Progress
              </a>
              <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                Services
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" size="sm" asChild>
                  <a href="#problem">Learn More</a>
                </Button>
                <Button size="sm" asChild>
                  <a href="#contact">Get Started</a>
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
