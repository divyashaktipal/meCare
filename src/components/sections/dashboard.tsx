import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const upcomingSessions = [
  { id: 1, doctor: "Dr. Sarah Jenkins", specialty: "Cardiology", date: "Oct 24, 2024", time: "10:00 AM", status: "Upcoming", type: "Video Consult" },
  { id: 2, doctor: "Dr. Michael Chen", specialty: "Neurology", date: "Oct 28, 2024", time: "02:30 PM", status: "Upcoming", type: "In-Person" },
];

const stats = [
  { title: "Upcoming Sessions", value: "2", trend: "+1 this week" },
  { title: "Completed Sessions", value: "14", trend: "Last 6 months" },
  { title: "Prescriptions", value: "3", trend: "2 active" },
];

export function Dashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Welcome back, Alex!</h1>
        <p className="text-muted mt-2">Here is a summary of your health management.</p>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <Card key={i}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted">{stat.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted mt-1">{stat.trend}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <div className="xl:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Upcoming Sessions</h2>
            <Button variant="outline" size="sm">View All</Button>
          </div>
          
          <div className="space-y-4">
            {upcomingSessions.map((session) => (
              <Card key={session.id} className="hover:border-primary/30 transition-colors">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                        {session.doctor.split(' ')[1][0]}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{session.doctor}</h4>
                        <p className="text-sm text-muted">{session.specialty}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 md:gap-8">
                      <div className="text-sm">
                        <p className="font-medium">{session.date}</p>
                        <p className="text-muted">{session.time}</p>
                      </div>
                      <Badge variant="default">{session.type}</Badge>
                      <Button size="sm">Join Call</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="space-y-6">
          <h2 className="text-xl font-bold">Quick Actions</h2>
          <Card>
            <CardContent className="p-6 space-y-4">
              <Button className="w-full justify-start" variant="outline">
                <span className="mr-2">+</span> Book New Session
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <span className="mr-2">⚕️</span> Request Prescription Refill
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <span className="mr-2">📄</span> View Medical Records
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-primary text-white border-none">
             <CardContent className="p-6 text-center">
                 <h3 className="font-bold text-lg mb-2">Need immediate help?</h3>
                 <p className="text-primary-100 text-sm mb-6 opacity-90">Our 24/7 support team is here to assist you with any urgent medical queries.</p>
                 <Button variant="secondary" className="w-full bg-white text-primary hover:bg-white/90">Contact Support</Button>
             </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
