import { Activity, Droplets } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const HyperspectralPanel = () => {
  const classifications = [
    { type: "Dry Grass", coverage: 42, risk: "critical" },
    { type: "Shrubland", coverage: 28, risk: "warning" },
    { type: "Mixed Forest", coverage: 18, risk: "safe" },
    { type: "Bare Soil", coverage: 12, risk: "safe" },
  ];

  return (
    <Card className="bg-card border-border">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Activity className="text-info" size={24} />
            <CardTitle className="text-lg">Hyperspectral Classification</CardTitle>
          </div>
          <Badge className="bg-info text-info-foreground">ACTIVE</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Simulated spectral chart */}
        <div className="relative w-full h-32 bg-secondary/50 rounded-lg overflow-hidden">
          <svg viewBox="0 0 300 100" className="w-full h-full">
            {/* Grid lines */}
            {[0, 25, 50, 75, 100].map((y) => (
              <line key={y} x1="0" y1={y} x2="300" y2={y} stroke="hsl(var(--border))" strokeWidth="0.5" />
            ))}
            {/* Spectral curve */}
            <polyline
              points="0,80 30,75 60,60 90,45 120,35 150,40 180,55 210,70 240,75 270,78 300,80"
              fill="none"
              stroke="hsl(var(--info))"
              strokeWidth="2"
            />
            <polyline
              points="0,90 30,85 60,70 90,55 120,50 150,58 180,75 210,85 240,88 270,90 300,92"
              fill="none"
              stroke="hsl(var(--warning))"
              strokeWidth="2"
              opacity="0.7"
            />
          </svg>
          <div className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-mono">
            Camera ID: HS-02
          </div>
        </div>

        {/* Classification breakdown */}
        <div className="space-y-2">
          <div className="text-sm font-semibold text-foreground mb-2">Vegetation Classification</div>
          {classifications.map((item, idx) => (
            <div key={idx} className="flex items-center justify-between p-2 rounded-lg bg-secondary/30">
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${
                  item.risk === "critical" ? "bg-critical" : 
                  item.risk === "warning" ? "bg-warning" : "bg-safe"
                }`} />
                <span className="text-sm text-foreground">{item.type}</span>
              </div>
              <span className="text-sm font-bold text-muted-foreground">{item.coverage}%</span>
            </div>
          ))}
        </div>

        {/* Moisture index */}
        <div className="flex items-center gap-3 p-3 bg-warning/10 border border-warning/30 rounded-lg">
          <Droplets className="text-warning" size={20} />
          <div className="flex-1">
            <div className="text-sm font-semibold text-warning">Moisture Index</div>
            <div className="text-xs text-muted-foreground">Critically Low: 18%</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
