import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Lightbulb } from "lucide-react";

export default function About() {
  const skills = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Web Development",
      description: "Proficient in modern web technologies and frameworks"
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "UI/UX Design",
      description: "Creating beautiful and intuitive user interfaces"
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Problem Solving",
      description: "Turning complex problems into elegant solutions"
    }
  ];

  return (
    <section id="about" className="py-20 bg-[#BABD8D]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center text-[#EB6424] mb-12">
            About Me
          </h2>

          <div className="mb-16 text-center">
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              I'm a passionate web developer with a keen eye for creating engaging
              digital experiences. My journey in web development has equipped me
              with both technical expertise and creative problem-solving skills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                    <div className="mb-4 text-[#FA9500]">{skill.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
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
