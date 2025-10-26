import { MapPin, Flame, Plane, Radio } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useState } from "react";

interface MapMarker {
  id: string;
  type: "fire" | "sensor" | "drone";
  x: number;
  y: number;
  label: string;
  severity?: "critical" | "warning" | "monitoring";
  data?: {
    temperature?: number;
    status?: string;
    [key: string]: any;
  };
}

const mockMarkers: MapMarker[] = [
  { id: "f1", type: "fire", x: 35, y: 45, label: "Fire Zone A", severity: "critical", data: { temperature: 42 } },
  { id: "f2", type: "fire", x: 65, y: 30, label: "Fire Zone B", severity: "warning", data: { temperature: 36 } },
  { id: "s1", type: "sensor", x: 25, y: 55, label: "Sensor S-001", data: { status: "online", temperature: 28 } },
  { id: "s2", type: "sensor", x: 50, y: 65, label: "Sensor S-002", data: { status: "online", temperature: 32 } },
  { id: "s3", type: "sensor", x: 75, y: 50, label: "Sensor S-003", data: { status: "online", temperature: 38 } },
  { id: "d1", type: "drone", x: 45, y: 40, label: "Drone Alpha", data: { status: "active", battery: 87 } },
  { id: "d2", type: "drone", x: 60, y: 60, label: "Drone Beta", data: { status: "standby", battery: 92 } },
];

export const MapView = () => {
  const [hoveredMarker, setHoveredMarker] = useState<string | null>(null);

  const getMarkerIcon = (type: string) => {
    switch (type) {
      case "fire": return Flame;
      case "sensor": return Radio;
      case "drone": return Plane;
      default: return MapPin;
    }
  };

  const getMarkerColor = (marker: MapMarker) => {
    if (marker.type === "fire") {
      if (marker.severity === "critical") return "text-critical";
      if (marker.severity === "warning") return "text-warning";
      return "text-accent";
    }
    if (marker.type === "sensor") return "text-info";
    if (marker.type === "drone") return "text-safe";
    return "text-foreground";
  };

  return (
    <Card className="bg-card border-border overflow-hidden">
      <div className="p-4">
        <h3 className="text-lg font-semibold text-foreground mb-4">Tactical Map</h3>
        <div className="relative w-full aspect-video bg-secondary/50 rounded-lg overflow-hidden">
          {/* Grid overlay */}
          <div className="absolute inset-0" style={{
            backgroundImage: "linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)",
            backgroundSize: "50px 50px"
          }} />
          
          {/* Markers */}
          {mockMarkers.map((marker) => {
            const Icon = getMarkerIcon(marker.type);
            const isHovered = hoveredMarker === marker.id;
            
            return (
              <div
                key={marker.id}
                className="absolute cursor-pointer transition-transform hover:scale-125"
                style={{ left: `${marker.x}%`, top: `${marker.y}%`, transform: "translate(-50%, -50%)" }}
                onMouseEnter={() => setHoveredMarker(marker.id)}
                onMouseLeave={() => setHoveredMarker(null)}
              >
                <div className="relative">
                  <Icon
                    className={`${getMarkerColor(marker)} ${marker.type === "fire" && marker.severity === "critical" ? "animate-pulse" : ""}`}
                    size={marker.type === "fire" ? 32 : 24}
                  />
                  {marker.type === "fire" && (
                    <div className={`absolute inset-0 rounded-full blur-xl opacity-50 ${
                      marker.severity === "critical" ? "bg-critical" : "bg-warning"
                    }`} />
                  )}
                </div>
                
                {/* Tooltip */}
                {isHovered && (
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-popover border border-border rounded-lg shadow-lg whitespace-nowrap z-10 animate-fade-in">
                    <div className="text-sm font-semibold text-foreground">{marker.label}</div>
                    {marker.data && (
                      <div className="text-xs text-muted-foreground space-y-1 mt-1">
                        {marker.data.temperature && <div>Temp: {marker.data.temperature}°C</div>}
                        {marker.data.status && <div>Status: {marker.data.status}</div>}
                        {marker.data.battery && <div>Battery: {marker.data.battery}%</div>}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
};
