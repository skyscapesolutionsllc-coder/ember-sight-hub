import { Flame, MapPin, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface AlertCardProps {
  location: string;
  severity: "critical" | "warning" | "monitoring";
  time: string;
  temperature?: number;
  coordinates?: string;
}

const severityConfig = {
  critical: {
    bg: "bg-critical/10",
    border: "border-critical/50",
    badge: "bg-critical text-critical-foreground",
    glow: "shadow-[0_0_20px_hsl(var(--glow-critical))]",
    label: "CRITICAL",
  },
  warning: {
    bg: "bg-warning/10",
    border: "border-warning/50",
    badge: "bg-warning text-warning-foreground",
    glow: "shadow-[0_0_20px_hsl(var(--glow-warning))]",
    label: "WARNING",
  },
  monitoring: {
    bg: "bg-accent/10",
    border: "border-accent/50",
    badge: "bg-accent text-accent-foreground",
    glow: "shadow-[0_0_15px_hsl(var(--glow-warning))]",
    label: "MONITORING",
  },
};

export const AlertCard = ({ location, severity, time, temperature, coordinates }: AlertCardProps) => {
  const config = severityConfig[severity];
  
  return (
    <Card className={`${config.bg} ${config.border} ${config.glow} border-2 transition-all hover:scale-[1.02]`}>
      <div className="p-4 space-y-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <Flame className={severity === "critical" ? "text-critical animate-pulse" : "text-warning"} size={24} />
            <span className="font-semibold text-foreground">{location}</span>
          </div>
          <Badge className={config.badge}>{config.label}</Badge>
        </div>
        
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Clock size={16} />
            <span>{time}</span>
          </div>
          {coordinates && (
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span className="font-mono">{coordinates}</span>
            </div>
          )}
          {temperature && (
            <div className="text-foreground font-semibold">
              Temperature: {temperature}°C
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};
