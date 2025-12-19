import { Instagram, Twitter, Facebook, Linkedin, Youtube, Globe } from "lucide-react";
import { motion } from "framer-motion";

interface SocialLink {
  platform: string;
  url: string;
}

interface SocialMediaIconsProps {
  links: SocialLink[];
  size?: "sm" | "md" | "lg";
  variant?: "default" | "outline" | "ghost";
}

const iconMap: Record<string, React.ElementType> = {
  instagram: Instagram,
  twitter: Twitter,
  facebook: Facebook,
  linkedin: Linkedin,
  youtube: Youtube,
  website: Globe,
};

const sizeClasses = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-12 w-12",
};

const iconSizes = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
};

export const SocialMediaIcons = ({ 
  links, 
  size = "md", 
  variant = "default" 
}: SocialMediaIconsProps) => {
  const variantClasses = {
    default: "bg-accent/20 hover:bg-accent text-foreground hover:text-accent-foreground",
    outline: "border border-border hover:border-accent hover:bg-accent/10",
    ghost: "hover:bg-accent/10",
  };

  return (
    <div className="flex gap-3 flex-wrap">
      {links.map((link, index) => {
        const Icon = iconMap[link.platform.toLowerCase()] || Globe;
        return (
          <motion.a
            key={link.platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className={`
              ${sizeClasses[size]} 
              ${variantClasses[variant]}
              rounded-full flex items-center justify-center transition-all duration-300
            `}
            title={link.platform}
          >
            <Icon className={iconSizes[size]} />
          </motion.a>
        );
      })}
    </div>
  );
};

// Pre-configured social links for company
export const companySocialLinks: SocialLink[] = [
  { platform: "instagram", url: "https://instagram.com/gsmodeling" },
  { platform: "twitter", url: "https://twitter.com/gsmodeling" },
  { platform: "facebook", url: "https://facebook.com/gsmodeling" },
  { platform: "linkedin", url: "https://linkedin.com/company/gsmodeling" },
  { platform: "youtube", url: "https://youtube.com/@gsmodeling" },
];
