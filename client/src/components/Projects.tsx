import { motion } from "framer-motion";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Virtual Wardrobe App",
    description: "A comprehensive digital wardrobe management system with a focus on user experience and intuitive organization. Features include outfit suggestions and seasonal categorization.",
    tech: ["Figma", "UI/UX", "Prototyping"],
    link: "https://www.figma.com/proto/qgBTlP8KsKA5a6mSKzUkq6/virtual-wardrobe-app?node-id=1-5&p=f&t=27xzfC11w64BJKmh-1",
    caseStudy: "https://www.figma.com/design/v2Eoa31KwM9AocltgjzKyi/case-study?t=nc1WBVA2NiW1h48j-1"
  },
  {
    title: "Instagram Mockup Design",
    description: "A reimagined Instagram interface design focusing on improved user interaction and visual hierarchy.",
    tech: ["Figma", "UI Design", "Social Media"],
    link: "https://www.figma.com/proto/HdMKMBZWguygBIKoZMBQAk/mockup?t=mC9tbxRIFpeZYwsL-1"
  },
  {
    title: "Bakery Website Prototype",
    description: "A modern and appetizing website design for a bakery, featuring an intuitive ordering system and appealing visual design.",
    tech: ["Uizard", "Web Design", "Prototyping"],
    link: "https://app.uizard.io/p/71687ee0"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center text-[#400106] mb-12">
            My Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-full bg-[#0d0c00] hover:bg-[#400106] transition-colors duration-300">
                  <CardHeader>
                    <h3 className="text-2xl font-semibold text-white">
                      {project.title}
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/90 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-[#440000] text-white px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <Button
                        variant="secondary"
                        className="bg-white text-[#400106] hover:bg-white/90"
                        onClick={() => window.open(project.link, "_blank")}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Project
                      </Button>
                      {project.caseStudy && (
                        <Button
                          variant="secondary"
                          className="bg-white text-[#400106] hover:bg-white/90"
                          onClick={() => window.open(project.caseStudy, "_blank")}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Case Study
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}