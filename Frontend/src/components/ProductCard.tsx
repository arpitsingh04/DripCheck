import { motion } from "framer-motion";
import { ShoppingCart, Eye } from "lucide-react";
import { Product, useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
  index: number;
  onQuickView: (product: Product) => void;
}

const ProductCard = ({ product, index, onQuickView }: ProductCardProps) => {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative h-full flex flex-col"
    >
      <div className="relative overflow-hidden rounded-lg bg-card border border-border transition-all duration-300 group-hover:border-primary/50 h-full flex flex-col">
        {/* Image Container - Larger on mobile */}
        <div className="relative aspect-[4/5] sm:aspect-square overflow-hidden flex-shrink-0">
          <motion.img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            animate={{
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.6 }}
          />
          
          {/* Gradient Overlay on Hover */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"
          />

          {/* Quick Actions - Hidden on mobile, shown on hover for desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-x-0 bottom-0 p-2 sm:p-4 gap-2 hidden sm:flex"
          >
            <Button
              size="sm"
              variant="default"
              className="flex-1 bg-gradient-neon hover:opacity-90 border-0 text-xs"
              onClick={() => {
                addToCart(product);
              }}
            >
              <ShoppingCart className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              <span className="hidden md:inline">Add to Cart</span>
              <span className="md:hidden">Add</span>
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="px-2 sm:px-3"
              onClick={() => onQuickView(product)}
            >
              <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
            </Button>
          </motion.div>
        </div>

        {/* Product Info - Reduced padding and text size on mobile */}
        <div className="p-2 sm:p-4 flex flex-col flex-grow">
          <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider mb-0.5 sm:mb-1">
            {product.category}
          </p>
          <h3 className="text-xs sm:text-sm md:text-base font-semibold text-foreground mb-1 sm:mb-2 group-hover:text-gradient transition-all line-clamp-2 flex-grow">
            {product.name}
          </h3>
          <p className="text-sm sm:text-base md:text-lg font-bold text-primary mt-auto">
            ${product.price.toFixed(2)}
          </p>
        </div>

        {/* Glow Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0.3 : 0 }}
          className="absolute inset-0 glow-mixed pointer-events-none rounded-lg"
        />
      </div>
    </motion.div>
  );
};

export default ProductCard;
