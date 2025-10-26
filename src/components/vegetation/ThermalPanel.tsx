import { Thermometer, AlertTriangle } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const ThermalPanel = () => {
  const hotspots = [
    { zone: "A3", temp: 47, status: "critical" },
    { zone: "B2", temp: 39, status: "warning" },
    { zone: "C1", temp: 35, status: "warning" },
  ];

  return (
    <Card className="bg-card border-border">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Thermometer className="text-info" size={24} />
            <CardTitle className="text-lg">Thermal (Infrared)</CardTitle>
          </div>
          <Badge className="bg-info text-info-foreground">ACTIVE</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Thermal gradient heatmap */}
        <div className="relative w-full h-40 rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-info via-warning to-critical" />
          
          {/* Hotspot indicators */}
          <div className="absolute top-[25%] right-[30%] w-16 h-16 rounded-full border-2 border-critical animate-pulse">
            <div className="absolute inset-0 rounded-full bg-critical/30 blur-lg" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs font-bold text-white bg-critical/80 px-2 py-1 rounded">A3</span>
            </div>
          </div>
          
          <div className="absolute top-[60%] left-[35%] w-12 h-12 rounded-full border-2 border-warning">
            <div className="absolute inset-0 rounded-full bg-warning/30 blur-lg" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs font-bold text-background bg-warning/80 px-2 py-1 rounded">B2</span>
            </div>
          </div>

          <div className="absolute bottom-[20%] right-[20%] w-10 h-10 rounded-full border-2 border-warning">
            <div className="absolute inset-0 rounded-full bg-warning/30 blur-lg" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs font-bold text-background bg-warning/80 px-1.5 py-0.5 rounded">C1</span>
            </div>
          </div>

          {/* Temperature scale */}
          <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center bg-background/80 backdrop-blur-sm p-2 rounded-lg text-xs font-mono">
            <span className="text-info">20°C</span>
            <span className="text-warning">35°C</span>
            <span className="text-critical">50°C</span>
          </div>

          <div className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-mono">
            Camera ID: TH-03
          </div>
        </div>

        {/* Hotspot list */}
        <div className="space-y-2">
          <div className="text-sm font-semibold text-foreground">Detected Hotspots</div>
          {hotspots.map((spot, idx) => (
            <div key={idx} className={`flex items-center justify-between p-2 rounded-lg ${
              spot.status === "critical" ? "bg-critical/10 border border-critical/30" : "bg-warning/10 border border-warning/30"
            }`}>
              <div className="flex items-center gap-2">
                <AlertTriangle className={spot.status === "critical" ? "text-critical" : "text-warning"} size={16} />
                <span className="text-sm text-foreground">Zone {spot.zone}</span>
              </div>
              <span className={`text-sm font-bold ${spot.status === "critical" ? "text-critical" : "text-warning"}`}>
                {spot.temp}°C
              </span>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="p-2 bg-secondary/30 rounded-lg">
            <div className="text-muted-foreground">Avg Temp</div>
            <div className="text-lg font-bold text-warning">32°C</div>
          </div>
          <div className="p-2 bg-secondary/30 rounded-lg">
            <div className="text-muted-foreground">Stressed Areas</div>
            <div className="text-lg font-bold text-critical">38%</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
