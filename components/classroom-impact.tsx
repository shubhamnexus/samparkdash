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
import { BookOpen, GraduationCap, School } from "lucide-react"

// Mock data - replace with actual data
const resourceUsageData = [
  { month: "Jan", total: 12500 },
  { month: "Feb", total: 15800 },
  { month: "Mar", total: 18200 },
  { month: "Apr", total: 21500 },
  { month: "May", total: 24800 },
  { month: "Jun", total: 28500 },
]

const subjectData = [
  { name: "English", value: 35, color: "#8884d8" },
  { name: "Math", value: 40, color: "#82ca9d" },
  { name: "Science", value: 20, color: "#ffc658" },
  { name: "Others", value: 5, color: "#ff8042" },
]

const gradeData = [
  { grade: "Grade 1", resources: 4200 },
  { grade: "Grade 2", resources: 3800 },
  { grade: "Grade 3", resources: 4500 },
  { grade: "Grade 4", resources: 3900 },
  { grade: "Grade 5", resources: 3600 },
  { grade: "Grade 6", resources: 3200 },
  { grade: "Grade 7", resources: 2800 },
  { grade: "Grade 8", resources: 2500 },
]

export default function ClassroomImpact() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Classroom Impact</h1>
        <p className="text-muted-foreground">Measure the impact of resources in classrooms</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Registered Teachers</CardTitle>
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8,942</div>
            <div className="mt-2">
              <Progress value={92} className="h-2" />
            </div>
            <p className="text-xs text-muted-foreground mt-1">92% of total teachers</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Resources Used</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28,500</div>
            <p className="text-xs text-muted-foreground">YTD resources accessed</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Schools with Trained Teachers</CardTitle>
            <School className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,456</div>
            <div className="mt-2">
              <Progress value={83.4} className="h-2" />
            </div>
            <p className="text-xs text-muted-foreground mt-1">83.4% of total schools</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Schools with &gt;5 Lessons</CardTitle>
            <School className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,872</div>
            <div className="mt-2">
              <Progress value={63.6} className="h-2" />
            </div>
            <p className="text-xs text-muted-foreground mt-1">63.6% of total schools</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Resource Usage Trend</CardTitle>
            <CardDescription>Total resources used over time</CardDescription>
          </CardHeader>
          <CardContent className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={resourceUsageData}
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
                <Tooltip formatter={(value) => [value.toLocaleString(), "Resources"]} />
                <Legend />
                <Line type="monotone" dataKey="total" stroke="#8884d8" name="Total Resources" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Subject-wise Resource Usage</CardTitle>
            <CardDescription>Distribution of resources by subject</CardDescription>
          </CardHeader>
          <CardContent className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={subjectData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {subjectData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, "Usage"]} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Grade-wise Resource Usage</CardTitle>
          <CardDescription>Distribution of resources by grade</CardDescription>
        </CardHeader>
        <CardContent className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={gradeData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="grade" />
              <YAxis />
              <Tooltip formatter={(value) => [value.toLocaleString(), "Resources"]} />
              <Legend />
              <Bar dataKey="resources" fill="#8884d8" name="Resources Used" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>District-wise Resource Usage</CardTitle>
          <CardDescription>Resource usage by district</CardDescription>
        </CardHeader>
        <CardContent className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={[
                { district: "District A", english: 3500, math: 4200, science: 2800 },
                { district: "District B", english: 2800, math: 3500, science: 2200 },
                { district: "District C", english: 4200, math: 4800, science: 3200 },
                { district: "District D", english: 3200, math: 3800, science: 2500 },
                { district: "District E", english: 2500, math: 3200, science: 2000 },
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
              <Tooltip formatter={(value) => [value.toLocaleString(), "Resources"]} />
              <Legend />
              <Bar dataKey="english" stackId="a" fill="#8884d8" name="English" />
              <Bar dataKey="math" stackId="a" fill="#82ca9d" name="Math" />
              <Bar dataKey="science" stackId="a" fill="#ffc658" name="Science" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}

