import { useState } from "react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import QuickViewModal from "@/components/QuickViewModal";
import { Product } from "@/contexts/CartContext";

// Mock product data
const products: Product[] = [
  {
    id: 1,
    name: "Cyber Hoodie",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop",
    category: "Hoodies",
  },
  {
    id: 2,
    name: "Neon Tee",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
    category: "T-Shirts",
  },
  {
    id: 3,
    name: "Tech Jacket",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop",
    category: "Jackets",
  },
  {
    id: 4,
    name: "Urban Pants",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&h=500&fit=crop",
    category: "Pants",
  },
  {
    id: 5,
    name: "Future Cap",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500&h=500&fit=crop",
    category: "Accessories",
  },
  {
    id: 6,
    name: "Street Shorts",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500&h=500&fit=crop",
    category: "Shorts",
  },
  {
    id: 7,
    name: "Glow Hoodie",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500&h=500&fit=crop",
    category: "Hoodies",
  },
  {
    id: 8,
    name: "Minimal Tee",
    price: 44.99,
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&h=500&fit=crop",
    category: "T-Shirts",
  },
];

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quickViewOpen, setQuickViewOpen] = useState(false);

  const handleQuickView = (product: Product) => {
    setSelectedProduct(product);
    setQuickViewOpen(true);
  };

  return (
    <div className="min-h-screen">
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="text-gradient">Product Collection</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our latest drops and find your next statement piece
            </p>
          </motion.div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                onQuickView={handleQuickView}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />

      {/* Quick View Modal */}
      <QuickViewModal
        product={selectedProduct}
        open={quickViewOpen}
        onClose={() => setQuickViewOpen(false)}
      />
    </div>
  );
};

export default Products;
