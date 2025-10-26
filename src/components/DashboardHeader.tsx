import { Shield, Bell, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
export const DashboardHeader = () => {
  return <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Shield className="text-primary" size={32} />
            <div>
              <h1 className="text-2xl font-bold text-foreground">Fuego Fighters</h1>
              <p className="text-sm text-muted-foreground">Wildfire Early Detection & Monitoring</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Badge variant="outline" className="bg-safe/10 text-safe border-safe/50">
              System Online
            </Badge>
            <div className="relative">
              <Button variant="ghost" size="icon">
                <Bell size={20} />
              </Button>
              <div className="absolute top-1 right-1 w-2 h-2 bg-critical rounded-full animate-pulse" />
            </div>
            <Button variant="ghost" size="icon">
              <Settings size={20} />
            </Button>
          </div>
        </div>
      </div>
    </header>;
};