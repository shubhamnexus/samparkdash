"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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
import { School, Users } from "lucide-react"

// Mock data - replace with actual data
const schoolCoverageData = [
  { name: "Covered", value: 2945, color: "#4ade80" },
  { name: "Remaining", value: 1055, color: "#f87171" },
]

const studentCoverageData = [
  { name: "Covered", value: 245678, color: "#60a5fa" },
  { name: "Remaining", value: 154322, color: "#f87171" },
]

const budgetData = [
  { month: "Jan", actual: 15.2, planned: 18.5 },
  { month: "Feb", actual: 32.1, planned: 35.8 },
  { month: "Mar", actual: 48.6, planned: 52.3 },
  { month: "Apr", actual: 65.2, planned: 69.7 },
  { month: "May", actual: 82.5, planned: 87.2 },
  { month: "Jun", actual: 98.7, planned: 104.6 },
]

export default function ProgramGoals() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Program Goals & Investment</h1>
        <p className="text-muted-foreground">Track program coverage, enrollment, and budget utilization</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Schools</CardTitle>
            <School className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4,000</div>
            <p className="text-xs text-muted-foreground">Target schools in program</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Schools Covered</CardTitle>
            <School className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,945</div>
            <div className="mt-2">
              <Progress value={73.6} className="h-2" />
            </div>
            <p className="text-xs text-muted-foreground mt-1">73.6% of target</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">400,000</div>
            <p className="text-xs text-muted-foreground">Target student enrollment</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Students Covered</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">245,678</div>
            <div className="mt-2">
              <Progress value={61.4} className="h-2" />
            </div>
            <p className="text-xs text-muted-foreground mt-1">61.4% of target</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Program Budget</CardTitle>
            <CardDescription>Annual budget: ₹380.5 Lakhs</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-2xl font-bold">₹245.8L</div>
                <p className="text-xs text-muted-foreground">Spent to date</p>
              </div>
              <div>
                <div className="text-2xl font-bold">₹134.7L</div>
                <p className="text-xs text-muted-foreground">Remaining</p>
              </div>
              <div>
                <div className="text-2xl font-bold">65%</div>
                <p className="text-xs text-muted-foreground">Budget utilized</p>
              </div>
            </div>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={budgetData}
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
                  <Tooltip formatter={(value) => [`₹${value}L`, "Amount"]} />
                  <Legend />
                  <Line type="monotone" dataKey="actual" stroke="#8884d8" name="Actual Spend" />
                  <Line type="monotone" dataKey="planned" stroke="#82ca9d" name="Planned Spend" strokeDasharray="5 5" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Program Coverage</CardTitle>
            <CardDescription>Schools and students covered by the program</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="schools" className="space-y-4">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="schools">Schools</TabsTrigger>
                <TabsTrigger value="students">Students</TabsTrigger>
              </TabsList>
              <TabsContent value="schools" className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={schoolCoverageData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {schoolCoverageData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [value, "Schools"]} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </TabsContent>
              <TabsContent value="students" className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={studentCoverageData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {studentCoverageData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [value.toLocaleString(), "Students"]} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>District-wise Coverage</CardTitle>
          <CardDescription>School and student coverage by district</CardDescription>
        </CardHeader>
        <CardContent className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={[
                { district: "District A", schools: 85, students: 72 },
                { district: "District B", schools: 65, students: 58 },
                { district: "District C", schools: 92, students: 87 },
                { district: "District D", schools: 78, students: 65 },
                { district: "District E", schools: 45, students: 38 },
                { district: "District F", schools: 72, students: 64 },
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
              <Tooltip formatter={(value) => [`${value}%`, "Coverage"]} />
              <Legend />
              <Bar dataKey="schools" fill="#8884d8" name="Schools Coverage %" />
              <Bar dataKey="students" fill="#82ca9d" name="Students Coverage %" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}

