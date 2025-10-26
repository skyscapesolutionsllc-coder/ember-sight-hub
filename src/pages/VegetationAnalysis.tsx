import { DashboardHeader } from "@/components/DashboardHeader";
import { MultispectralPanel } from "@/components/vegetation/MultispectralPanel";
import { HyperspectralPanel } from "@/components/vegetation/HyperspectralPanel";
import { ThermalPanel } from "@/components/vegetation/ThermalPanel";
import { OpticalRGBPanel } from "@/components/vegetation/OpticalRGBPanel";
import { VegetationRiskMap } from "@/components/vegetation/VegetationRiskMap";
import { VegetationAlert } from "@/components/vegetation/VegetationAlert";
import { Sprout } from "lucide-react";

const VegetationAnalysis = () => {
  const alerts = [
    {
      type: "fuel" as const,
      severity: "critical" as const,
      location: "Sector A3 - Pine Ridge",
      description: "Dangerous fuel load detected with 78% dryness level. Immediate monitoring required.",
    },
    {
      type: "dryness" as const,
      severity: "warning" as const,
      location: "Sector B2 - Oak Valley",
      description: "Vegetation moisture at 18%. Increased fire risk in dry grassland areas.",
    },
    {
      type: "wind" as const,
      severity: "warning" as const,
      location: "Sector C1 - Maple Hills",
      description: "Wind speeds elevated with dry conditions. Monitor for rapid fire spread potential.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Page Title */}
        <div className="flex items-center gap-3">
          <Sprout className="text-primary" size={32} />
          <div>
            <h1 className="text-3xl font-bold text-foreground">Vegetation Risk Analysis</h1>
            <p className="text-muted-foreground">Multi-sensor wildfire fuel assessment and monitoring</p>
          </div>
        </div>

        {/* Alert Banners */}
        <section>
          <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <div className="w-1 h-6 bg-critical rounded-full" />
            Active Risk Alerts
          </h2>
          <div className="space-y-3">
            {alerts.map((alert, idx) => (
              <VegetationAlert key={idx} {...alert} />
            ))}
          </div>
        </section>

        {/* Sensor Panels Grid */}
        <section>
          <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <div className="w-1 h-6 bg-info rounded-full" />
            Camera & Sensor Analysis
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <MultispectralPanel />
            <HyperspectralPanel />
            <ThermalPanel />
            <OpticalRGBPanel />
          </div>
        </section>

        {/* Risk Map */}
        <section>
          <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <div className="w-1 h-6 bg-warning rounded-full" />
            Geographic Risk Distribution
          </h2>
          <VegetationRiskMap />
        </section>
      </main>
    </div>
  );
};

export default VegetationAnalysis;
