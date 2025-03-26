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
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { BookOpen, MessageSquare, MonitorPlay, ThumbsUp } from "lucide-react"

// Mock data - replace with actual data
const feedbackData = [
  { month: "Jan", count: 850 },
  { month: "Feb", count: 920 },
  { month: "Mar", count: 980 },
  { month: "Apr", count: 1050 },
  { month: "May", count: 1120 },
  { month: "Jun", count: 1200 },
]

const tvUsageData = [
  { month: "Jan", uploads: 420 },
  { month: "Feb", uploads: 480 },
  { month: "Mar", uploads: 520 },
  { month: "Apr", uploads: 580 },
  { month: "May", uploads: 620 },
  { month: "Jun", uploads: 680 },
]

const lessonReviewData = [
  { name: "Reviewing", value: 65, color: "#4ade80" },
  { name: "Not Reviewing", value: 35, color: "#f87171" },
]

export default function TeacherAssessment() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Teacher Assessment</h1>
        <p className="text-muted-foreground">Evaluate teacher engagement and performance</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">SMS Feedback Count</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5,120</div>
            <p className="text-xs text-muted-foreground">YTD total feedback messages</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">TV Usage Uploads</CardTitle>
            <MonitorPlay className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3,300</div>
            <p className="text-xs text-muted-foreground">YTD total uploads</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Teachers Reviewing Lessons</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5,812</div>
            <div className="mt-2">
              <Progress value={65} className="h-2" />
            </div>
            <p className="text-xs text-muted-foreground mt-1">65% of total teachers</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Positive Feedback</CardTitle>
            <ThumbsUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78%</div>
            <div className="mt-2">
              <Progress value={78} className="h-2" />
            </div>
            <p className="text-xs text-muted-foreground mt-1">Of total feedback received</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>SMS Feedback Trend</CardTitle>
            <CardDescription>Monthly SMS feedback count</CardDescription>
          </CardHeader>
          <CardContent className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={feedbackData}
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
                <Tooltip formatter={(value) => [value.toLocaleString(), "Feedback Messages"]} />
                <Legend />
                <Line type="monotone" dataKey="count" stroke="#8884d8" name="SMS Feedback" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>TV Usage Uploads</CardTitle>
            <CardDescription>Monthly TV usage data uploads by teachers</CardDescription>
          </CardHeader>
          <CardContent className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={tvUsageData}
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
                <Tooltip formatter={(value) => [value.toLocaleString(), "Uploads"]} />
                <Legend />
                <Bar dataKey="uploads" fill="#8884d8" name="TV Usage Uploads" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Lesson Review Status</CardTitle>
            <CardDescription>Percentage of teachers reviewing lessons before class</CardDescription>
          </CardHeader>
          <CardContent className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={lessonReviewData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {lessonReviewData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, "Teachers"]} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>District-wise Teacher Engagement</CardTitle>
            <CardDescription>Teacher engagement metrics by district</CardDescription>
          </CardHeader>
          <CardContent className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={[
                  { district: "District A", feedback: 75, uploads: 68, reviews: 62 },
                  { district: "District B", feedback: 65, uploads: 58, reviews: 52 },
                  { district: "District C", feedback: 82, uploads: 75, reviews: 70 },
                  { district: "District D", feedback: 70, uploads: 62, reviews: 58 },
                  { district: "District E", feedback: 60, uploads: 55, reviews: 48 },
                ]}
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
                <Tooltip formatter={(value) => [`${value}%`, "Engagement"]} />
                <Legend />
                <Bar dataKey="feedback" fill="#8884d8" name="SMS Feedback" />
                <Bar dataKey="uploads" fill="#82ca9d" name="TV Uploads" />
                <Bar dataKey="reviews" fill="#ffc658" name="Lesson Reviews" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

