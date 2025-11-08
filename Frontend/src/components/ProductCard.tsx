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
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-lg bg-card border border-border transition-all duration-300 group-hover:border-primary/50">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden">
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

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-x-0 bottom-0 p-4 flex gap-2"
          >
            <Button
              size="sm"
              variant="default"
              className="flex-1 bg-gradient-neon hover:opacity-90 border-0"
              onClick={() => {
                addToCart(product);
              }}
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Add to Cart
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="px-3"
              onClick={() => onQuickView(product)}
            >
              <Eye className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>

        {/* Product Info */}
        <div className="p-4">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
            {product.category}
          </p>
          <h3 className="font-semibold text-foreground mb-2 group-hover:text-gradient transition-all">
            {product.name}
          </h3>
          <p className="text-lg font-bold text-primary">
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
