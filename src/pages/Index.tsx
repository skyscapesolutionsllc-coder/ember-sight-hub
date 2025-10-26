import { DashboardHeader } from "@/components/DashboardHeader";
import { AlertCard } from "@/components/AlertCard";
import { SensorPanel } from "@/components/SensorPanel";
import { DroneStatus } from "@/components/DroneStatus";
import { MapView } from "@/components/MapView";
import { SatelliteView } from "@/components/SatelliteView";

const Index = () => {
  // Mock data for demonstration
  const alerts = [
    {
      location: "Pine Ridge Forest - Sector 7",
      severity: "critical" as const,
      time: "5 minutes ago",
      temperature: 42,
      coordinates: "37.7749° N, 122.4194° W",
    },
    {
      location: "Oak Valley - Sector 3",
      severity: "warning" as const,
      time: "12 minutes ago",
      temperature: 36,
      coordinates: "37.7849° N, 122.4094° W",
    },
    {
      location: "Maple Hills - Sector 5",
      severity: "monitoring" as const,
      time: "28 minutes ago",
      temperature: 31,
      coordinates: "37.7649° N, 122.4294° W",
    },
  ];

  const sensors = [
    { sensorId: "S-001", temperature: 28, humidity: 45, airQuality: 42, status: "online" as const },
    { sensorId: "S-002", temperature: 32, humidity: 38, airQuality: 68, status: "online" as const },
    { sensorId: "S-003", temperature: 38, humidity: 25, airQuality: 156, status: "online" as const },
    { sensorId: "S-004", temperature: 26, humidity: 52, airQuality: 35, status: "online" as const },
  ];

  const drones = [
    { droneId: "ALPHA-01", status: "active" as const, battery: 87, location: "Zone A Patrol", hasCamera: true },
    { droneId: "BETA-02", status: "standby" as const, battery: 92, location: "Base Station", hasCamera: true },
    { droneId: "GAMMA-03", status: "charging" as const, battery: 45, location: "Base Station", hasCamera: true },
  ];

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Alerts Section */}
        <section>
          <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <div className="w-1 h-6 bg-primary rounded-full" />
            Active Alerts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {alerts.map((alert, idx) => (
              <AlertCard key={idx} {...alert} />
            ))}
          </div>
        </section>

        {/* Map and Satellite Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <MapView />
          <SatelliteView />
        </section>

        {/* Sensors Section */}
        <section>
          <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <div className="w-1 h-6 bg-info rounded-full" />
            IoT Sensor Network
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {sensors.map((sensor, idx) => (
              <SensorPanel key={idx} {...sensor} />
            ))}
          </div>
        </section>

        {/* Drones Section */}
        <section>
          <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <div className="w-1 h-6 bg-safe rounded-full" />
            Drone Operations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {drones.map((drone, idx) => (
              <DroneStatus key={idx} {...drone} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
