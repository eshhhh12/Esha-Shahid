import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#400106] text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Esha Shahid. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}