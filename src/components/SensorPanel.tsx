import { Thermometer, Droplets, Wind } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface SensorPanelProps {
  sensorId: string;
  temperature: number;
  humidity: number;
  airQuality: number;
  status: "online" | "offline";
}

export const SensorPanel = ({ sensorId, temperature, humidity, airQuality, status }: SensorPanelProps) => {
  const getAirQualityColor = (value: number) => {
    if (value > 150) return "bg-critical";
    if (value > 50) return "bg-warning";
    return "bg-safe";
  };

  const getTemperatureColor = (temp: number) => {
    if (temp > 35) return "text-critical";
    if (temp > 25) return "text-warning";
    return "text-safe";
  };

  return (
    <Card className="bg-card border-border hover:border-primary/50 transition-all">
      <div className="p-4 space-y-4">
        <div className="flex items-center justify-between">
          <div className="font-mono text-sm text-muted-foreground">{sensorId}</div>
          <div className={`w-2 h-2 rounded-full ${status === "online" ? "bg-safe animate-pulse" : "bg-muted"}`} />
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Thermometer className={getTemperatureColor(temperature)} size={20} />
              <span className="text-sm text-muted-foreground">Temperature</span>
            </div>
            <span className={`font-semibold ${getTemperatureColor(temperature)}`}>{temperature}°C</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Droplets className="text-info" size={20} />
              <span className="text-sm text-muted-foreground">Humidity</span>
            </div>
            <span className="font-semibold text-foreground">{humidity}%</span>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Wind className="text-accent" size={20} />
                <span className="text-sm text-muted-foreground">Air Quality</span>
              </div>
              <span className="font-semibold text-foreground">{airQuality} AQI</span>
            </div>
            <Progress value={(airQuality / 300) * 100} className={`h-2 ${getAirQualityColor(airQuality)}`} />
          </div>
        </div>
      </div>
    </Card>
  );
};
