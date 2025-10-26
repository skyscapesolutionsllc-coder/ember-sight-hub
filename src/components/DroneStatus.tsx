import { Plane, Battery, Camera, Radio } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface DroneStatusProps {
  droneId: string;
  status: "active" | "standby" | "charging";
  battery: number;
  location: string;
  hasCamera: boolean;
}

const statusConfig = {
  active: { color: "bg-safe text-safe-foreground", label: "ACTIVE" },
  standby: { color: "bg-warning text-warning-foreground", label: "STANDBY" },
  charging: { color: "bg-info text-info-foreground", label: "CHARGING" },
};

export const DroneStatus = ({ droneId, status, battery, location, hasCamera }: DroneStatusProps) => {
  const config = statusConfig[status];
  
  const getBatteryColor = (level: number) => {
    if (level < 20) return "bg-critical";
    if (level < 50) return "bg-warning";
    return "bg-safe";
  };

  return (
    <Card className="bg-card border-border hover:border-primary/50 transition-all">
      <div className="p-4 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Plane className={status === "active" ? "text-safe" : "text-muted-foreground"} size={24} />
            <div>
              <div className="font-mono text-sm font-semibold text-foreground">{droneId}</div>
              <div className="text-xs text-muted-foreground">{location}</div>
            </div>
          </div>
          <Badge className={config.color}>{config.label}</Badge>
        </div>

        <div className="space-y-3">
          <div className="space-y-1">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <Battery size={16} className={battery < 20 ? "text-critical" : "text-foreground"} />
                <span className="text-muted-foreground">Battery</span>
              </div>
              <span className="font-semibold text-foreground">{battery}%</span>
            </div>
            <Progress value={battery} className={`h-2 ${getBatteryColor(battery)}`} />
          </div>

          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Camera size={16} className={hasCamera ? "text-safe" : "text-muted-foreground"} />
              <span className="text-muted-foreground">Camera</span>
            </div>
            <div className="flex items-center gap-2">
              <Radio size={16} className={status === "active" ? "text-safe" : "text-muted-foreground"} />
              <span className="text-muted-foreground">Signal</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
