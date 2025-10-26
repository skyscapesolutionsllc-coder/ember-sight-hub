import { AlertTriangle, Flame, Wind } from "lucide-react";

interface VegetationAlertProps {
  type: "dryness" | "fuel" | "wind";
  severity: "critical" | "warning";
  location: string;
  description: string;
}

export const VegetationAlert = ({ type, severity, location, description }: VegetationAlertProps) => {
  const getIcon = () => {
    switch (type) {
      case "dryness": return AlertTriangle;
      case "fuel": return Flame;
      case "wind": return Wind;
      default: return AlertTriangle;
    }
  };

  const Icon = getIcon();
  const bgColor = severity === "critical" ? "bg-critical/10" : "bg-warning/10";
  const borderColor = severity === "critical" ? "border-critical/30" : "border-warning/30";
  const textColor = severity === "critical" ? "text-critical" : "text-warning";

  return (
    <div className={`flex items-start gap-3 p-4 rounded-lg border ${bgColor} ${borderColor}`}>
      <Icon className={`${textColor} flex-shrink-0 mt-0.5`} size={24} />
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <h4 className={`font-bold ${textColor}`}>{location}</h4>
          <span className={`text-xs px-2 py-0.5 rounded-full ${severity === "critical" ? "bg-critical text-critical-foreground" : "bg-warning text-warning-foreground"}`}>
            {severity.toUpperCase()}
          </span>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};
