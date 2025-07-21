import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
import "react-lazy-load-image-component/src/effects/blur.css";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number | string;
  height?: number | string;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = "",
  width,
  height,
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0.5, scale: 0.95 }}
      animate={{ opacity: loaded ? 1 : 0.5, scale: loaded ? 1 : 0.95 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{ width, height }}
      className={className}
    >
      <LazyLoadImage
        src={src}
        alt={alt}
        effect="blur"
        onLoad={() => setLoaded(true)}
        width="100%"
        height="100%"
        className="object-cover"
      />
    </motion.div>
  );
};

export default LazyImage; // <-- Important!
