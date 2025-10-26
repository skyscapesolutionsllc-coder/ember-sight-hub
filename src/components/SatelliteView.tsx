import { Satellite } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const SatelliteView = () => {
  return (
    <Card className="bg-card border-border overflow-hidden">
      <div className="p-4 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Satellite className="text-primary" size={24} />
            <h3 className="text-lg font-semibold text-foreground">Satellite Thermal Feed</h3>
          </div>
          <Badge className="bg-safe text-safe-foreground">LIVE</Badge>
        </div>

        <div className="relative w-full aspect-video bg-gradient-to-br from-secondary via-secondary/80 to-background rounded-lg overflow-hidden">
          {/* Simulated thermal imagery */}
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: "radial-gradient(circle at 60% 40%, hsl(var(--critical)) 0%, transparent 40%), radial-gradient(circle at 30% 60%, hsl(var(--warning)) 0%, transparent 30%)",
          }} />
          
          {/* Heat anomaly indicators */}
          <div className="absolute top-[35%] left-[55%] w-20 h-20 rounded-full border-2 border-critical animate-pulse">
            <div className="absolute inset-0 rounded-full bg-critical/20 blur-xl" />
          </div>
          <div className="absolute top-[55%] left-[25%] w-16 h-16 rounded-full border-2 border-warning">
            <div className="absolute inset-0 rounded-full bg-warning/20 blur-xl" />
          </div>

          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }} />

          {/* Data overlay */}
          <div className="absolute bottom-4 left-4 right-4 flex justify-between text-xs font-mono text-foreground bg-background/80 backdrop-blur-sm p-3 rounded-lg border border-border">
            <div>
              <div className="text-muted-foreground">COORDS</div>
              <div>37.7749° N, 122.4194° W</div>
            </div>
            <div>
              <div className="text-muted-foreground">HOTSPOTS</div>
              <div className="text-critical font-bold">2 DETECTED</div>
            </div>
            <div>
              <div className="text-muted-foreground">LAST UPDATE</div>
              <div>2 min ago</div>
            </div>
          </div>
        </div>

        <div className="flex gap-4 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-critical" />
            <span className="text-muted-foreground">Critical (&gt;40°C)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-warning" />
            <span className="text-muted-foreground">Warning (30-40°C)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-safe" />
            <span className="text-muted-foreground">Normal (&lt;30°C)</span>
          </div>
        </div>
      </div>
    </Card>
  );
};
