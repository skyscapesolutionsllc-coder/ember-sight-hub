import { Leaf, TrendingDown } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export const MultispectralPanel = () => {
  const metrics = [
    { label: "NDVI Index", value: 0.32, status: "warning", color: "bg-warning" },
    { label: "Plant Health", value: 45, status: "critical", color: "bg-critical" },
    { label: "Dryness Level", value: 78, status: "critical", color: "bg-critical" },
    { label: "Vegetation Density", value: 62, status: "warning", color: "bg-warning" },
  ];

  return (
    <Card className="bg-card border-border">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Leaf className="text-info" size={24} />
            <CardTitle className="text-lg">Multispectral Analysis</CardTitle>
          </div>
          <Badge className="bg-info text-info-foreground">ACTIVE</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Simulated thermal overlay visualization */}
        <div className="relative w-full h-40 rounded-lg overflow-hidden bg-gradient-to-br from-safe via-warning to-critical">
          <div className="absolute inset-0 opacity-60" style={{
            backgroundImage: "radial-gradient(circle at 70% 30%, hsl(var(--critical)) 0%, transparent 35%), radial-gradient(circle at 30% 70%, hsl(var(--warning)) 0%, transparent 40%)",
          }} />
          <div className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-mono">
            Camera ID: MS-01
          </div>
          <div className="absolute bottom-2 left-2 flex gap-2 text-xs">
            <div className="bg-background/80 backdrop-blur-sm px-2 py-1 rounded">
              <span className="text-muted-foreground">Type:</span> Grassland/Shrub
            </div>
          </div>
        </div>

        {/* Metrics */}
        <div className="space-y-3">
          {metrics.map((metric, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">{metric.label}</span>
                <span className={`font-bold ${metric.status === "critical" ? "text-critical" : "text-warning"}`}>
                  {typeof metric.value === 'number' && metric.value < 1 ? metric.value.toFixed(2) : `${metric.value}%`}
                </span>
              </div>
              <Progress value={typeof metric.value === 'number' && metric.value < 1 ? metric.value * 100 : metric.value} className="h-2" />
            </div>
          ))}
        </div>

        {/* Risk indicator */}
        <div className="flex items-center gap-2 p-3 bg-critical/10 border border-critical/30 rounded-lg">
          <TrendingDown className="text-critical" size={18} />
          <span className="text-sm text-critical font-semibold">High Fire Risk Detected</span>
        </div>
      </CardContent>
    </Card>
  );
};
