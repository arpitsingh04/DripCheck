import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import { Sparkles, Target, Heart, Zap } from "lucide-react";

const About = () => {
  const timeline = [
    {
      year: "2023",
      title: "The Beginning",
      description: "NXTWEAR was born from a vision to revolutionize streetwear with futuristic designs.",
    },
    {
      year: "2024",
      title: "First Collection",
      description: "Launched our debut collection featuring innovative materials and bold aesthetics.",
    },
    {
      year: "2025",
      title: "Global Expansion",
      description: "Expanded worldwide, bringing next-gen fashion to style enthusiasts everywhere.",
    },
  ];

  const values = [
    {
      icon: Sparkles,
      title: "Innovation",
      description: "Pushing boundaries with cutting-edge design and materials",
    },
    {
      icon: Target,
      title: "Quality",
      description: "Uncompromising standards in every stitch and detail",
    },
    {
      icon: Heart,
      title: "Community",
      description: "Building a movement of forward-thinking individuals",
    },
    {
      icon: Zap,
      title: "Sustainability",
      description: "Creating fashion that's conscious of our future",
    },
  ];

  return (
    <div className="min-h-screen">
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Our Story</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              NXTWEAR represents the future of streetwear - where innovation meets style, 
              and where every piece tells a story of bold creativity and uncompromising quality.
            </p>
          </motion.div>

          {/* Values */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-6 rounded-lg border border-border hover:border-primary/50 transition-all group"
              >
                <value.icon className="w-10 h-10 mb-4 text-primary group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-24"
          >
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="text-gradient">Our Journey</span>
            </h2>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary" />
              
              <div className="space-y-12">
                {timeline.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className="relative pl-20"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-6 top-2 w-5 h-5 rounded-full bg-gradient-neon border-4 border-background glow-mixed" />
                    
                    <div className="glass p-6 rounded-lg border border-border hover:border-primary/50 transition-all">
                      <div className="text-sm font-bold text-primary mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-12 rounded-lg border border-border text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-gradient">Our Mission</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To empower individuals through fashion that breaks conventions, 
              celebrates uniqueness, and inspires confidence. We're not just making clothes - 
              we're crafting the future of self-expression.
            </p>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
