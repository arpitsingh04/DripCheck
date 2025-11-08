import { useState } from "react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import QuickViewModal from "@/components/QuickViewModal";
import { Product } from "@/contexts/CartContext";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

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
  {
    id: 9,
    name: "Vintage Denim",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=500&fit=crop",
    category: "Jeans",
  },
  {
    id: 10,
    name: "Sporty Windbreaker",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=500&h=500&fit=crop",
    category: "Jackets",
  },
  {
    id: 11,
    name: "Classic Polo",
    price: 54.99,
    image: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=500&h=500&fit=crop",
    category: "T-Shirts",
  },
  {
    id: 12,
    name: "Elite Sneakers",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
    category: "Shoes",
  },
];

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quickViewOpen, setQuickViewOpen] = useState(false);

  const handleQuickView = (product: Product) => {
    setSelectedProduct(product);
    setQuickViewOpen(true);
  };

  // Split products: first 4 for grid, next 4 for slider, rest for bottom grid
  const gridProducts = products.slice(0, 4);
  const sliderProducts = products.slice(4, 8);
  const bottomGridProducts = products.slice(8);

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

          {/* Products Grid - First 2 rows (4 products) */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-16">
            {gridProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                onQuickView={handleQuickView}
              />
            ))}
          </div>

          {/* Slider Section */}
          {sliderProducts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              {/* Product Slider - Touch-enabled and draggable */}
              <Carousel
                opts={{
                  align: "start",
                  dragFree: true,
                  containScroll: "trimSnaps",
                  loop: false,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-3 sm:-ml-4 md:-ml-6">
                  {/* First item: "Explore Latest Drip" text */}
                  <CarouselItem className="pl-3 sm:pl-4 md:pl-6 basis-1/2 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                    <div className="h-full flex flex-col">
                      <div className="relative overflow-hidden rounded-lg bg-card border border-border h-full flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center leading-tight">
                          <span className="text-gradient">Explore Latest Drip</span>
                        </h2>
                      </div>
                    </div>
                  </CarouselItem>
                  
                  {/* Product Cards */}
                  {sliderProducts.map((product, index) => (
                    <CarouselItem
                      key={product.id}
                      className="pl-3 sm:pl-4 md:pl-6 basis-1/2 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                    >
                      <ProductCard
                        product={product}
                        index={gridProducts.length + index}
                        onQuickView={handleQuickView}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </motion.div>
          )}

          {/* Bottom Products Grid - Same layout as top grid */}
          {bottomGridProducts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-16"
            >
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                {bottomGridProducts.map((product, index) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    index={gridProducts.length + sliderProducts.length + index}
                    onQuickView={handleQuickView}
                  />
                ))}
              </div>
            </motion.div>
          )}
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
