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
import { GraduationCap, Users } from "lucide-react"

// Mock data - replace with actual data
const enrollmentData = [
  { month: "Jan", actual: 210000, target: 220000 },
  { month: "Feb", actual: 218000, target: 230000 },
  { month: "Mar", actual: 225000, target: 240000 },
  { month: "Apr", actual: 232000, target: 250000 },
  { month: "May", actual: 240000, target: 260000 },
  { month: "Jun", actual: 245678, target: 270000 },
]

const teacherTrainingData = [
  { month: "Jan", trained: 7200, target: 8000 },
  { month: "Feb", trained: 7500, target: 8200 },
  { month: "Mar", trained: 7800, target: 8400 },
  { month: "Apr", trained: 8200, target: 8600 },
  { month: "May", trained: 8600, target: 8800 },
  { month: "Jun", trained: 8942, target: 9000 },
]

export default function ProgramEvaluation() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Program Evaluation</h1>
        <p className="text-muted-foreground">Track enrollment progress and teacher training metrics</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Enrollment Progress</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">245,678</div>
            <div className="mt-2">
              <Progress value={91} className="h-2" />
            </div>
            <p className="text-xs text-muted-foreground mt-1">91% of target (270,000)</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Teacher Training</CardTitle>
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8,942</div>
            <div className="mt-2">
              <Progress value={99.4} className="h-2" />
            </div>
            <p className="text-xs text-muted-foreground mt-1">99.4% of target (9,000)</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Enrollment Progress</CardTitle>
            <CardDescription>Actual vs target enrollment over time</CardDescription>
          </CardHeader>
          <CardContent className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={enrollmentData}
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
                <Tooltip formatter={(value) => [value.toLocaleString(), "Students"]} />
                <Legend />
                <Line type="monotone" dataKey="actual" stroke="#8884d8" name="Actual Enrollment" />
                <Line
                  type="monotone"
                  dataKey="target"
                  stroke="#82ca9d"
                  name="Target Enrollment"
                  strokeDasharray="5 5"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Teacher Training</CardTitle>
            <CardDescription>Trained teachers vs target over time</CardDescription>
          </CardHeader>
          <CardContent className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={teacherTrainingData}
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
                <Tooltip formatter={(value) => [value.toLocaleString(), "Teachers"]} />
                <Legend />
                <Line type="monotone" dataKey="trained" stroke="#8884d8" name="Trained Teachers" />
                <Line type="monotone" dataKey="target" stroke="#82ca9d" name="Target" strokeDasharray="5 5" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

