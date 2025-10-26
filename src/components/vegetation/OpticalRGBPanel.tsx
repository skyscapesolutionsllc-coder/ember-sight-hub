import { Camera, MapPin } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const OpticalRGBPanel = () => {
  const markers = [
    { id: "P1", x: 35, y: 30, label: "Fuel Load", risk: "critical" },
    { id: "P2", x: 65, y: 45, label: "Access Road", risk: "safe" },
    { id: "P3", x: 50, y: 70, label: "Water Source", risk: "safe" },
    { id: "P4", x: 80, y: 60, label: "Dense Brush", risk: "warning" },
  ];

  return (
    <Card className="bg-card border-border">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Camera className="text-info" size={24} />
            <CardTitle className="text-lg">Optical RGB Mapping</CardTitle>
          </div>
          <Badge className="bg-info text-info-foreground">ACTIVE</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* High-resolution area mapping */}
        <div className="relative w-full h-40 rounded-lg overflow-hidden bg-gradient-to-br from-secondary via-secondary/60 to-muted">
          {/* Simulated terrain texture */}
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: "radial-gradient(circle at 40% 50%, hsl(var(--safe)) 0%, transparent 40%), radial-gradient(circle at 70% 30%, hsl(var(--warning)) 0%, transparent 30%)",
          }} />

          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "30px 30px"
          }} />

          {/* Markers */}
          {markers.map((marker) => (
            <div
              key={marker.id}
              className="absolute cursor-pointer group"
              style={{ left: `${marker.x}%`, top: `${marker.y}%`, transform: "translate(-50%, -50%)" }}
            >
              <MapPin
                className={`${
                  marker.risk === "critical" ? "text-critical" : 
                  marker.risk === "warning" ? "text-warning" : "text-safe"
                } transition-transform group-hover:scale-125`}
                size={24}
              />
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-popover border border-border rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="text-xs font-semibold text-foreground">{marker.id}: {marker.label}</div>
              </div>
            </div>
          ))}

          <div className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-mono">
            Camera ID: RGB-04
          </div>

          {/* Coordinates */}
          <div className="absolute bottom-2 left-2 bg-background/80 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-mono">
            37.7849° N, 122.4194° W
          </div>
        </div>

        {/* Points of Interest */}
        <div className="space-y-2">
          <div className="text-sm font-semibold text-foreground">Points of Interest</div>
          {markers.map((marker, idx) => (
            <div key={idx} className="flex items-center justify-between p-2 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors cursor-pointer">
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${
                  marker.risk === "critical" ? "bg-critical" : 
                  marker.risk === "warning" ? "bg-warning" : "bg-safe"
                }`} />
                <span className="text-sm text-foreground">{marker.id}: {marker.label}</span>
              </div>
              <MapPin size={14} className="text-muted-foreground" />
            </div>
          ))}
        </div>

        {/* Image quality stats */}
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="p-2 bg-secondary/30 rounded-lg">
            <div className="text-muted-foreground">Resolution</div>
            <div className="text-sm font-bold text-foreground">4096x2160</div>
          </div>
          <div className="p-2 bg-secondary/30 rounded-lg">
            <div className="text-muted-foreground">Coverage</div>
            <div className="text-sm font-bold text-foreground">2.4 km²</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
