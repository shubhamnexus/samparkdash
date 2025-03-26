"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { CalendarDays, ClipboardCheck, FileSpreadsheet, Users } from "lucide-react"

// Mock data - replace with actual data
const auditData = [
  { quarter: "Q1", completed: 45, target: 50 },
  { quarter: "Q2", completed: 48, target: 50 },
  { quarter: "Q3", completed: 52, target: 55 },
  { quarter: "Q4", completed: 58, target: 60 },
]

const meetingData = [
  { quarter: "Q1", meetings: 12 },
  { quarter: "Q2", meetings: 15 },
  { quarter: "Q3", meetings: 18 },
  { quarter: "Q4", meetings: 22 },
]

export default function ProgramMonitoring() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Program Monitoring</h1>
        <p className="text-muted-foreground">Monitor program governance and compliance</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">School Audits</CardTitle>
            <ClipboardCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">203</div>
            <div className="mt-2">
              <Progress value={78} className="h-2" />
            </div>
            <p className="text-xs text-muted-foreground mt-1">78% of target (260)</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Advocacy Meetings</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">67</div>
            <div className="mt-2">
              <Progress value={84} className="h-2" />
            </div>
            <p className="text-xs text-muted-foreground mt-1">84% of target (80)</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Compliance Rate</CardTitle>
            <FileSpreadsheet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">92%</div>
            <div className="mt-2">
              <Progress value={92} className="h-2" />
            </div>
            <p className="text-xs text-muted-foreground mt-1">Program compliance score</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Governance Score</CardTitle>
            <FileSpreadsheet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87%</div>
            <div className="mt-2">
              <Progress value={87} className="h-2" />
            </div>
            <p className="text-xs text-muted-foreground mt-1">Overall governance rating</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>School Audit & Review</CardTitle>
            <CardDescription>Quarterly audit completion vs target</CardDescription>
          </CardHeader>
          <CardContent className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={auditData}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="quarter" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="completed" fill="#8884d8" name="Completed Audits" />
                <Bar dataKey="target" fill="#82ca9d" name="Target Audits" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>State Advocacy Meetings</CardTitle>
            <CardDescription>Quarterly advocacy meetings</CardDescription>
          </CardHeader>
          <CardContent className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={meetingData}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="quarter" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="meetings" stroke="#8884d8" name="Advocacy Meetings" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>District-wise Monitoring</CardTitle>
          <CardDescription>Audit and meeting completion by district</CardDescription>
        </CardHeader>
        <CardContent className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={[
                { district: "District A", audits: 85, meetings: 90 },
                { district: "District B", audits: 75, meetings: 80 },
                { district: "District C", audits: 92, meetings: 95 },
                { district: "District D", audits: 78, meetings: 85 },
                { district: "District E", audits: 70, meetings: 75 },
              ]}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="district" />
              <YAxis />
              <Tooltip formatter={(value) => [`${value}%`, "Completion"]} />
              <Legend />
              <Bar dataKey="audits" fill="#8884d8" name="Audit Completion %" />
              <Bar dataKey="meetings" fill="#82ca9d" name="Meeting Completion %" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Monitoring Activities</CardTitle>
          <CardDescription>Latest program monitoring events</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { date: "2023-06-15", title: "District A School Audit", type: "Audit", status: "Completed" },
              {
                date: "2023-06-18",
                title: "State Education Department Meeting",
                type: "Advocacy",
                status: "Completed",
              },
              { date: "2023-06-20", title: "District B School Audits", type: "Audit", status: "In Progress" },
              { date: "2023-06-22", title: "District C Compliance Review", type: "Review", status: "Scheduled" },
              { date: "2023-06-25", title: "Quarterly Governance Meeting", type: "Governance", status: "Scheduled" },
            ].map((activity, index) => (
              <div key={index} className="flex items-start gap-4 rounded-lg border p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <CalendarDays className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">{activity.title}</p>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        activity.status === "Completed"
                          ? "bg-green-100 text-green-800"
                          : activity.status === "In Progress"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {activity.status}
                    </span>
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <span>{activity.date}</span>
                    <span className="mx-2">•</span>
                    <span>{activity.type}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

