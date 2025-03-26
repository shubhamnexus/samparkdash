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
import { CalendarDays, MapPin, School, Sparkles, Users } from "lucide-react"

// Mock data - replace with actual data
const schoolVisitData = [
  { month: "Jan", visits: 420 },
  { month: "Feb", visits: 480 },
  { month: "Mar", visits: 520 },
  { month: "Apr", visits: 580 },
  { month: "May", visits: 620 },
  { month: "Jun", visits: 680 },
]

const meetingData = [
  { month: "Jan", meetings: 45 },
  { month: "Feb", meetings: 52 },
  { month: "Mar", meetings: 58 },
  { month: "Apr", meetings: 62 },
  { month: "May", meetings: 68 },
  { month: "Jun", meetings: 72 },
]

const assessmentData = [
  { district: "District A", completed: 85, pending: 15 },
  { district: "District B", completed: 72, pending: 28 },
  { district: "District C", completed: 92, pending: 8 },
  { district: "District D", completed: 78, pending: 22 },
  { district: "District E", completed: 65, pending: 35 },
]

export default function SparkMonitoring() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Spark Monitoring</h1>
        <p className="text-muted-foreground">Track spark activities, school visits, and meetings</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Sparks</CardTitle>
            <Sparkles className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">190</div>
            <p className="text-xs text-muted-foreground">Across all districts</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">School Visits</CardTitle>
            <School className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3,280</div>
            <p className="text-xs text-muted-foreground">YTD total visits</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Meetings</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">357</div>
            <p className="text-xs text-muted-foreground">YTD total meetings</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">GPS Tracked Visits</CardTitle>
            <MapPin className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">92%</div>
            <div className="mt-2">
              <Progress value={92} className="h-2" />
            </div>
            <p className="text-xs text-muted-foreground mt-1">Of total school visits</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>School Visits</CardTitle>
            <CardDescription>Monthly school visits by sparks</CardDescription>
          </CardHeader>
          <CardContent className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={schoolVisitData}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="visits" fill="#8884d8" name="School Visits" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Meetings</CardTitle>
            <CardDescription>Monthly meetings conducted by sparks</CardDescription>
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
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="meetings" stroke="#8884d8" name="Meetings" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>School Visit Assessments</CardTitle>
          <CardDescription>Completed vs pending assessments by district</CardDescription>
        </CardHeader>
        <CardContent className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={assessmentData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
              layout="vertical"
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="district" type="category" />
              <Tooltip formatter={(value) => [`${value}%`, "Assessments"]} />
              <Legend />
              <Bar dataKey="completed" stackId="a" fill="#4ade80" name="Completed" />
              <Bar dataKey="pending" stackId="a" fill="#f87171" name="Pending" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Spark Activity Calendar</CardTitle>
            <CardDescription>Recent and upcoming spark activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { date: "2023-06-15", title: "District A School Visit", type: "Visit", count: 8 },
                { date: "2023-06-18", title: "Teacher Training Workshop", type: "Meeting", count: 1 },
                { date: "2023-06-20", title: "District B School Assessments", type: "Assessment", count: 5 },
                { date: "2023-06-22", title: "District C School Visit", type: "Visit", count: 6 },
                { date: "2023-06-25", title: "Quarterly Review Meeting", type: "Meeting", count: 1 },
              ].map((activity, index) => (
                <div key={index} className="flex items-start gap-4 rounded-lg border p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <CalendarDays className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">{activity.title}</p>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <span>{activity.date}</span>
                      <span className="mx-2">•</span>
                      <span>{activity.type}</span>
                      {activity.count > 1 && (
                        <>
                          <span className="mx-2">•</span>
                          <span>{activity.count} schools</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Spark Performance</CardTitle>
            <CardDescription>Top performing sparks by visit count</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Spark ID: SP-1245", district: "District A", visits: 42, completion: 95 },
                { name: "Spark ID: SP-1382", district: "District C", visits: 38, completion: 92 },
                { name: "Spark ID: SP-1156", district: "District B", visits: 36, completion: 90 },
                { name: "Spark ID: SP-1423", district: "District A", visits: 35, completion: 88 },
                { name: "Spark ID: SP-1287", district: "District D", visits: 32, completion: 85 },
              ].map((spark, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">{spark.name}</p>
                      <span className="text-sm font-medium">{spark.visits} visits</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{spark.district}</span>
                      <span>{spark.completion}% completion</span>
                    </div>
                    <Progress value={spark.completion} className="h-1 mt-2" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

