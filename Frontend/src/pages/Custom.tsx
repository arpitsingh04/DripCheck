import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Upload, Palette } from "lucide-react";

const Custom = () => {
  const [selectedColor, setSelectedColor] = useState("#b026ff");
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const colors = [
    { name: "Purple", value: "#b026ff" },
    { name: "Cyan", value: "#00d9ff" },
    { name: "Pink", value: "#ff00ff" },
    { name: "Green", value: "#00ff88" },
    { name: "Yellow", value: "#ffee00" },
    { name: "Red", value: "#ff0055" },
  ];

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen">
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="text-gradient">Custom Design</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Create your unique piece with custom colors and designs
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Customization Options */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              {/* Color Selection */}
              <div className="glass p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Palette className="w-5 h-5 text-primary" />
                  Choose Your Color
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {colors.map((color) => (
                    <button
                      key={color.value}
                      onClick={() => setSelectedColor(color.value)}
                      className={`aspect-square rounded-lg border-2 transition-all hover:scale-105 ${
                        selectedColor === color.value
                          ? "border-primary ring-2 ring-primary/50"
                          : "border-border"
                      }`}
                      style={{ backgroundColor: color.value }}
                    >
                      <span className="sr-only">{color.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Upload Design */}
              <div className="glass p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Upload className="w-5 h-5 text-primary" />
                  Upload Your Design
                </h3>
                <label className="block">
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center cursor-pointer hover:border-primary transition-colors">
                    {uploadedImage ? (
                      <img
                        src={uploadedImage}
                        alt="Uploaded design"
                        className="max-h-32 mx-auto"
                      />
                    ) : (
                      <>
                        <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                        <p className="text-muted-foreground">
                          Click to upload or drag and drop
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">
                          PNG, JPG up to 10MB
                        </p>
                      </>
                    )}
                  </div>
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                </label>
              </div>

              {/* Product Selection */}
              <div className="glass p-6 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-4">Select Product Type</h3>
                <div className="grid grid-cols-2 gap-3">
                  {["T-Shirt", "Hoodie", "Tank Top", "Long Sleeve"].map((type) => (
                    <Button
                      key={type}
                      variant="outline"
                      className="hover:border-primary/50"
                    >
                      {type}
                    </Button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Preview */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="glass p-8 rounded-lg border border-border sticky top-24">
                <h3 className="text-xl font-bold mb-6">Live Preview</h3>
                
                {/* T-Shirt Preview */}
                <div className="aspect-square rounded-lg border border-border overflow-hidden mb-6 relative">
                  <div
                    className="w-full h-full flex items-center justify-center"
                    style={{ backgroundColor: selectedColor }}
                  >
                    {uploadedImage ? (
                      <img
                        src={uploadedImage}
                        alt="Design preview"
                        className="max-w-[60%] max-h-[60%] object-contain"
                      />
                    ) : (
                      <div className="text-center text-white/50">
                        <p className="text-lg font-semibold">Your Design Here</p>
                        <p className="text-sm mt-2">Upload a design to preview</p>
                      </div>
                    )}
                  </div>
                  <div className="absolute inset-0 glow-mixed opacity-20 pointer-events-none" />
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between text-lg">
                    <span className="text-muted-foreground">Estimated Price</span>
                    <span className="font-bold text-primary">$79.99</span>
                  </div>
                  <Button
                    className="w-full bg-gradient-neon hover:opacity-90 border-0 py-6 text-lg font-semibold"
                  >
                    Add to Cart
                  </Button>
                  <p className="text-sm text-muted-foreground text-center">
                    Production time: 5-7 business days
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Custom;
