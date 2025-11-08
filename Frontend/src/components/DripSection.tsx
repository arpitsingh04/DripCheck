import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const DripSection = () => {
  return (
    <section className="relative py-24 overflow-x-visible overflow-y-visible">
      {/* Background drip shapes */}
      <div className="pointer-events-none absolute inset-0 opacity-30 -z-10">
        <div
          className="absolute -top-24 -left-24 w-[25vw] h-[25vw] max-w-[520px] max-h-[520px] rounded-full blur-3xl"
          style={{ backgroundImage: "var(--gradient-neon)" }}
        />
        <div
          className="absolute -bottom-32 -right-28 w-[28vw] h-[28vw] max-w-[600px] max-h-[600px] rounded-full blur-3xl"
          style={{ backgroundImage: "var(--gradient-neon)" }}
        />
      </div>

      {/* Drip divider */}
      <div className="absolute top-0 left-0 right-0 h-16 gradient-glow opacity-70" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="glass border border-primary/20 rounded-2xl p-8 md:p-12 shadow-xl"
        >
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                The <span className="text-gradient">Drip</span> You Can't Ignore
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-prose">
                Fresh silhouettes, bold palettes, and premium fabrics. Our latest drop
                merges performance-grade comfort with runway-level energy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/products" className="inline-flex">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-gradient-neon text-primary-foreground font-semibold px-6 py-3 rounded-lg border-0 inline-flex items-center justify-center"
                  >
                    Shop the Drip
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </motion.button>
                </Link>
                <Link to="/custom" className="inline-flex">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="glass px-6 py-3 rounded-lg font-semibold border hover:border-primary/50"
                  >
                    Build Your Fit
                  </motion.button>
                </Link>
              </div>
            </div>

            {/* Highlight panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative rounded-xl p-0.5"
              style={{ backgroundImage: "var(--gradient-neon)" }}
            >
              <div className="rounded-xl bg-background p-6 md:p-8">
                <div className="grid grid-cols-3 gap-4 text-center">
                  {[
                    { label: "New Arrivals", value: "+24" },
                    { label: "Sold Out", value: "7" },
                    { label: "Restock", value: "3" },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-lg glass p-4">
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                      <p className="text-2xl font-bold mt-1 text-gradient">{stat.value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  {[
                    "Tech Knit",
                    "Reflective Ink",
                    "Aero Mesh",
                    "Prime Fleece",
                  ].map((tag) => (
                    <div key={tag} className="text-xs md:text-sm glass rounded-md px-3 py-2 text-muted-foreground">
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom drip divider */}
      <div className="absolute -bottom-8 left-0 right-0 h-24 gradient-glow opacity-60 blur-md" />
    </section>
  );
};

export default DripSection;


