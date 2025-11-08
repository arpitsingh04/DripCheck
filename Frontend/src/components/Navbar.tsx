import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Menu, Home, Package, Wand2, Info } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";

const Navbar = () => {
  const { totalItems } = useCart();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/", icon: Home },
    { name: "Products", path: "/products", icon: Package },
    { name: "Custom", path: "/custom", icon: Wand2 },
    { name: "About", path: "/about", icon: Info },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="relative">
            <h1 className="text-2xl font-bold text-gradient tracking-wider">
              NXTWEAR
            </h1>
            <div className="absolute -inset-1 bg-gradient-neon opacity-20 blur-xl -z-10" />
          </div>
        </Link>

        {/* Mobile Menu Trigger */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-lg">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80 p-0 glass border-r border-border">
              <div className="p-4 border-b border-border/60">
                <Link to="/" className="flex items-center gap-2">
                  <span className="text-xl font-bold text-gradient tracking-wider">NXTWEAR</span>
                </Link>
              </div>
              <nav className="px-2 py-3">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  const isActive = location.pathname === link.path;
                  return (
                    <SheetClose asChild key={link.path}>
                      <Link
                        to={link.path}
                        className={`flex items-center gap-3 rounded-md px-3 py-3 mb-1 transition-colors ${
                          isActive
                            ? "bg-card text-primary border border-primary/30"
                            : "text-foreground/90 hover:bg-card/60"
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                        <span className="text-sm font-medium">{link.name}</span>
                      </Link>
                    </SheetClose>
                  );
                })}
                <div className="mt-4 px-1">
                  <SheetClose asChild>
                    <Link to="/cart" className="flex items-center gap-3 rounded-md px-3 py-3 hover:bg-card/60">
                      <ShoppingCart className="h-4 w-4" />
                      <span className="text-sm font-medium">Cart</span>
                      {totalItems > 0 && (
                        <span className="ml-auto inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-gradient-neon px-1.5 text-xs font-bold text-primary-foreground">
                          {totalItems}
                        </span>
                      )}
                    </Link>
                  </SheetClose>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="relative group"
            >
              <span
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {link.name}
              </span>
              {location.pathname === link.path && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-neon"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Cart Icon */}
        <Link
          to="/cart"
          className="relative group hidden md:block"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="relative p-2 rounded-lg bg-card/50 hover:bg-card transition-colors"
          >
            <ShoppingCart className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
            {totalItems > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-neon rounded-full flex items-center justify-center text-xs font-bold text-primary-foreground glow-mixed"
              >
                {totalItems}
              </motion.span>
            )}
          </motion.div>
        </Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;
