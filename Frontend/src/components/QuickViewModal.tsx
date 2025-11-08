import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Product, useCart } from "@/contexts/CartContext";
import { ShoppingCart, X } from "lucide-react";
import { motion } from "framer-motion";

interface QuickViewModalProps {
  product: Product | null;
  open: boolean;
  onClose: () => void;
}

const QuickViewModal = ({ product, open, onClose }: QuickViewModalProps) => {
  const { addToCart } = useCart();

  if (!product) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl glass border-primary/20">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gradient">
            {product.name}
          </DialogTitle>
        </DialogHeader>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid md:grid-cols-2 gap-8 mt-4"
        >
          {/* Product Image */}
          <div className="relative aspect-square rounded-lg overflow-hidden border border-border">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 glow-mixed opacity-20 pointer-events-none" />
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">
                {product.category}
              </p>
              
              <p className="text-3xl font-bold text-primary mb-6">
                ${product.price.toFixed(2)}
              </p>

              <div className="space-y-4 text-muted-foreground">
                <p>
                  Premium streetwear piece crafted with attention to detail.
                  Features high-quality materials and modern design aesthetics.
                </p>
                <ul className="space-y-2">
                  <li>• Premium cotton blend fabric</li>
                  <li>• Unisex fit</li>
                  <li>• Limited edition release</li>
                  <li>• Exclusive NXTWEAR branding</li>
                </ul>
              </div>
            </div>

            <div className="space-y-3 mt-8">
              <Button
                className="w-full bg-gradient-neon hover:opacity-90 border-0 text-primary-foreground font-semibold py-6"
                onClick={() => {
                  addToCart(product);
                  onClose();
                }}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
              <Button
                variant="outline"
                className="w-full"
                onClick={onClose}
              >
                Continue Shopping
              </Button>
            </div>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

export default QuickViewModal;
