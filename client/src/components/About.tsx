import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Palette, Lightbulb, Workflow, Brain } from "lucide-react";

export default function About() {
  const skills = [
    {
      icon: <Palette className="h-8 w-8" />,
      title: "UI/UX Design",
      description: "Creating user-centered, visually appealing interfaces"
    },
    {
      icon: <Workflow className="h-8 w-8" />,
      title: "Design Process",
      description: "User research, wireframing, and prototyping"
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI Integration",
      description: "Leveraging AI tools to enhance design workflows"
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation",
      description: "Turning complex problems into elegant solutions"
    }
  ];

  return (
    <section id="about" className="py-20 bg-[#0d0c00]/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center text-[#400106] mb-12">
            About Me
          </h2>

          <div className="mb-16 text-center">
            <p className="text-lg text-gray-800 max-w-3xl mx-auto space-y-4">
              <span className="block mb-4">
                I'm a passionate UI/UX Designer with a strong focus on creating user-centered designs that are not only visually appealing but also functional and intuitive. With a deep understanding of user behavior and design principles, I aim to craft seamless experiences that connect users with technology in meaningful ways.
              </span>
              <span className="block mb-4">
                In addition to my core design skills, I am always exploring and integrating AI tools to enhance my design workflow and push the boundaries of what's possible. I'm committed to staying on top of the latest industry trends, continuously learning, and leveraging emerging technologies to deliver exceptional digital experiences.
              </span>
              <span className="block">
                With a keen eye for detail and a passion for innovation, I thrive on turning complex problems into simple, elegant solutions. Whether it's designing for mobile apps, websites, or interactive experiences, I always focus on creating designs that resonate with users and drive engagement.
              </span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 text-[#400106]">{skill.icon}</div>
                    <h3 className="text-xl font-semibold mb-2 text-[#402014]">{skill.title}</h3>
                    <p className="text-gray-600">{skill.description}</p>
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