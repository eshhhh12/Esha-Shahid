import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-[#400106] shadow-lg" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-white font-bold text-xl">Esha Shahid</span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {["Home", "About", "Projects", "Contact"].map((item) => (
                <Button
                  key={item}
                  variant="ghost"
                  className="text-white hover:bg-[#402014]/20"
                  onClick={() => scrollTo(item.toLowerCase())}
                >
                  {item}
                </Button>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              className="text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#400106]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <Button
                key={item}
                variant="ghost"
                className="w-full text-white hover:bg-[#402014]/20 justify-start"
                onClick={() => scrollTo(item.toLowerCase())}
              >
                {item}
              </Button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}