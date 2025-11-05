// Guidesoft: Model Card Component
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";

interface ModelCardProps {
  id: string;
  name: string;
  category: string;
  location?: string;
  height?: number;
  rating?: number;
  imageUrl?: string;
  verified?: boolean;
}

export const ModelCard = ({
  id,
  name,
  category,
  location,
  height,
  rating,
  imageUrl = "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
  verified = false,
}: ModelCardProps) => {
  return (
    <Link to={`/models/${id}`}>
      <Card className="group overflow-hidden hover-lift cursor-pointer">
        <div className="aspect-[3/4] overflow-hidden relative">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {verified && (
            <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
              Verified
            </Badge>
          )}
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-1">{name}</h3>
          <p className="text-sm text-muted-foreground mb-2">{category}</p>
          <div className="flex items-center justify-between text-sm">
            {location && (
              <div className="flex items-center gap-1 text-muted-foreground">
                <MapPin className="h-3 w-3" />
                <span>{location}</span>
              </div>
            )}
            {rating && (
              <div className="flex items-center gap-1 text-accent">
                <Star className="h-3 w-3 fill-current" />
                <span>{rating.toFixed(1)}</span>
              </div>
            )}
          </div>
          {height && (
            <p className="text-xs text-muted-foreground mt-2">
              Height: {height} cm
            </p>
          )}
        </div>
      </Card>
    </Link>
  );
};