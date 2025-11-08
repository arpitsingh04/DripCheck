import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import QuickViewModal from "@/components/QuickViewModal";
import type { Product } from "@/contexts/CartContext";
import Footer from "@/components/Footer";
import DripSection from "@/components/DripSection";
import { TestimonialsSection } from "@/components/ui/testimonials-with-marquee";
import { ParallaxComponent } from "@/components/ui/parallax-scrolling";

const Index = () => {
  // Curated, limited trending products for quick access
  const trendingProducts: Product[] = [
    {
      id: 101,
      name: "Cyber Hoodie",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop",
      category: "Hoodies",
    },
    {
      id: 102,
      name: "Tech Jacket",
      price: 149.99,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop",
      category: "Jackets",
    },
    {
      id: 103,
      name: "Neon Tee",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
      category: "T-Shirts",
    },
  ];

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quickViewOpen, setQuickViewOpen] = useState(false);

  const handleQuickView = (product: Product) => {
    setSelectedProduct(product);
    setQuickViewOpen(true);
  };
  return (
    <div className="min-h-screen overflow-x-hidden">
      
      {/* Parallax Hero Section */}
      <ParallaxComponent />

      {/* Trending Now */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-10 flex items-end justify-between gap-4"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="text-gradient">Trending Now</span>
              </h2>
              <p className="text-muted-foreground mt-2">
                Limited picks — grab the look before it’s gone
              </p>
            </div>
            <Link to="/products" className="hidden sm:block">
              <Button variant="outline" className="glass hover:border-primary/50">
                View all
              </Button>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                onQuickView={handleQuickView}
              />
            ))}
          </div>

          <div className="mt-8 sm:hidden text-center">
            <Link to="/products">
              <Button className="bg-gradient-neon border-0 text-primary-foreground px-6">
                View all products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Drip Section */}
      <DripSection />

      {/* Testimonials Section */}
      <TestimonialsSection
        title="Trusted by creators and customers"
        description="Real stories from people who wear NXTWEAR in the wild."
        testimonials={[
          {
            author: {
              name: "Emma Thompson",
              handle: "@emmaai",
              avatar:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
            },
            text:
              "The fabric and fit are ridiculously good. I wore it to a night ride and the reflective details popped!",
            href: "https://twitter.com/emmaai",
          },
          {
            author: {
              name: "David Park",
              handle: "@davidtech",
              avatar:
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
            },
            text:
              "Clean, futuristic aesthetic. Pairs perfectly with my daily techwear rotation.",
            href: "https://twitter.com/davidtech",
          },
          {
            author: {
              name: "Sofia Rodriguez",
              handle: "@sofiaml",
              avatar:
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
            },
            text:
              "Breathable but warm. The Aero Mesh tee became my go-to for studio sessions.",
          },
          {
            author: {
              name: "Marcus Lee",
              handle: "@marcuswears",
              avatar:
                "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
            },
            text:
              "Build quality is top tier. Stitching and zips feel premium—no compromises.",
          },
        ]}
        className="border-t"
      />

      {/* Quick View Modal */}
      <QuickViewModal
        product={selectedProduct}
        open={quickViewOpen}
        onClose={() => setQuickViewOpen(false)}
      />

      <Footer />
    </div>
  );
};

export default Index;
