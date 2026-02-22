import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <a href="#home" className="font-display text-lg font-bold text-gradient">
          Deva.
        </a>
        <p className="text-sm text-muted-foreground flex items-center gap-1">
          Built with <Heart size={14} className="text-accent" /> by Devadharshini J © 2026
        </p>
      </div>
    </footer>
  );
};

export default Footer;
