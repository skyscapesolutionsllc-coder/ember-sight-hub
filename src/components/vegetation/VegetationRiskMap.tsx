import { MapPin, Camera, AlertCircle } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useState } from "react";

interface MapMarker {
  id: string;
  type: "camera" | "risk";
  x: number;
  y: number;
  label: string;
  severity?: "critical" | "warning" | "safe";
}

const mockMarkers: MapMarker[] = [
  { id: "c1", type: "camera", x: 30, y: 35, label: "MS-01 (Multispectral)", severity: "safe" },
  { id: "c2", type: "camera", x: 60, y: 30, label: "HS-02 (Hyperspectral)", severity: "safe" },
  { id: "c3", type: "camera", x: 50, y: 60, label: "TH-03 (Thermal)", severity: "safe" },
  { id: "c4", type: "camera", x: 75, y: 55, label: "RGB-04 (Optical)", severity: "safe" },
  { id: "r1", type: "risk", x: 40, y: 45, label: "High Fuel Load", severity: "critical" },
  { id: "r2", type: "risk", x: 70, y: 40, label: "Dry Vegetation", severity: "warning" },
  { id: "r3", type: "risk", x: 55, y: 70, label: "Elevated Risk", severity: "warning" },
];

export const VegetationRiskMap = () => {
  const [hoveredMarker, setHoveredMarker] = useState<string | null>(null);

  return (
    <Card className="bg-card border-border">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg">Vegetation Risk Overview Map</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative w-full aspect-video bg-secondary/50 rounded-lg overflow-hidden">
          {/* Risk overlay zones */}
          <div className="absolute inset-0">
            <div className="absolute top-[30%] left-[30%] w-32 h-32 rounded-full bg-critical/20 blur-2xl animate-pulse" />
            <div className="absolute top-[35%] right-[25%] w-28 h-28 rounded-full bg-warning/20 blur-2xl" />
            <div className="absolute bottom-[25%] left-[45%] w-24 h-24 rounded-full bg-warning/15 blur-xl" />
          </div>

          {/* Grid overlay */}
          <div className="absolute inset-0" style={{
            backgroundImage: "linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)",
            backgroundSize: "50px 50px"
          }} />

          {/* Markers */}
          {mockMarkers.map((marker) => {
            const Icon = marker.type === "camera" ? Camera : AlertCircle;
            const isHovered = hoveredMarker === marker.id;

            return (
              <div
                key={marker.id}
                className="absolute cursor-pointer transition-transform hover:scale-125 z-10"
                style={{ left: `${marker.x}%`, top: `${marker.y}%`, transform: "translate(-50%, -50%)" }}
                onMouseEnter={() => setHoveredMarker(marker.id)}
                onMouseLeave={() => setHoveredMarker(null)}
              >
                <Icon
                  className={`${
                    marker.type === "camera" ? "text-info" :
                    marker.severity === "critical" ? "text-critical animate-pulse" :
                    "text-warning"
                  }`}
                  size={marker.type === "camera" ? 20 : 28}
                />

                {/* Tooltip */}
                {isHovered && (
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-popover border border-border rounded-lg shadow-lg whitespace-nowrap animate-fade-in">
                    <div className="text-sm font-semibold text-foreground">{marker.label}</div>
                    {marker.type === "risk" && (
                      <div className="text-xs text-muted-foreground mt-1">
                        Severity: {marker.severity === "critical" ? "Critical" : "Warning"}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}

          {/* Legend */}
          <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm p-3 rounded-lg border border-border">
            <div className="text-xs font-semibold text-foreground mb-2">Legend</div>
            <div className="space-y-1 text-xs">
              <div className="flex items-center gap-2">
                <Camera className="text-info" size={14} />
                <span className="text-muted-foreground">Camera Sensor</span>
              </div>
              <div className="flex items-center gap-2">
                <AlertCircle className="text-critical" size={14} />
                <span className="text-muted-foreground">Critical Risk</span>
              </div>
              <div className="flex items-center gap-2">
                <AlertCircle className="text-warning" size={14} />
                <span className="text-muted-foreground">Warning Zone</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
