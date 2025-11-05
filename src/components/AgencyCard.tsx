// Guidesoft: Agency Card Component
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";

interface AgencyCardProps {
  id: string;
  name: string;
  location?: string;
  website?: string;
  verified?: boolean;
  modelCount?: number;
}

export const AgencyCard = ({
  id,
  name,
  location,
  website,
  verified = false,
  modelCount,
}: AgencyCardProps) => {
  return (
    <Link to={`/agencies/${id}`}>
      <Card className="group p-6 hover-lift cursor-pointer">
        <div className="flex items-start justify-between mb-4">
          <div className="h-16 w-16 rounded-full bg-gradient-to-br from-accent to-accent/50 flex items-center justify-center text-2xl font-bold">
            {name.charAt(0)}
          </div>
          {verified && (
            <Badge className="bg-accent text-accent-foreground">
              Verified
            </Badge>
          )}
        </div>
        <h3 className="font-semibold text-xl mb-2">{name}</h3>
        {location && (
          <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>
        )}
        {modelCount !== undefined && (
          <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
            <Users className="h-4 w-4" />
            <span>{modelCount} Models</span>
          </div>
        )}
        {website && (
          <p className="text-sm text-accent truncate">{website}</p>
        )}
      </Card>
    </Link>
  );
};