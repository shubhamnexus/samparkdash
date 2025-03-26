"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
import { BookOpen, GraduationCap, MonitorPlay, Package, School, Users } from "lucide-react"
import IndiaMap from "@/components/india-map"

// Mock data - replace with actual data
const programData = [
  { name: "Jan", enrollment: 4000, schools: 2400, teachers: 1800 },
  { name: "Feb", enrollment: 4200, schools: 2500, teachers: 1900 },
  { name: "Mar", enrollment: 4500, schools: 2600, teachers: 2000 },
  { name: "Apr", enrollment: 4800, schools: 2700, teachers: 2100 },
  { name: "May", enrollment: 5000, schools: 2800, teachers: 2200 },
  { name: "Jun", enrollment: 5200, schools: 2900, teachers: 2300 },
]

const assetData = [
  { name: "Jan", samparkTV: 1200, sssKits: 1800 },
  { name: "Feb", samparkTV: 1300, sssKits: 1900 },
  { name: "Mar", samparkTV: 1400, sssKits: 2000 },
  { name: "Apr", samparkTV: 1500, sssKits: 2100 },
  { name: "May", samparkTV: 1600, sssKits: 2200 },
  { name: "Jun", samparkTV: 1700, sssKits: 2300 },
]

const COLORS = ["#ff6b00", "#ff8c33", "#ffa866", "#ffc499", "#ffe0cc"]

export default function Overview() {
  const [selectedState, setSelectedState] = useState<string | null>(null)

  return (
    <div className="flex flex-col gap-4 min-w-0">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-[#333333] dark:text-white">Dashboard Overview</h1>
        <p className="text-[#666666] dark:text-[#999999]">A comprehensive view of your education program metrics</p>
      </div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 min-w-0">
        <Card className="bg-white dark:bg-[#1e1e1e] border-[#e0e0e0] dark:border-[#333333] shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-[#333333] dark:text-white">Total Schools</CardTitle>
            <School className="h-4 w-4 text-[#ff6b00]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#333333] dark:text-white">2,945</div>
            <p className="text-xs text-[#666666] dark:text-[#999999]">+37% from baseline</p>
          </CardContent>
        </Card>
        <Card className="bg-white dark:bg-[#1e1e1e] border-[#e0e0e0] dark:border-[#333333] shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-[#333333] dark:text-white">Student Enrollment</CardTitle>
            <Users className="h-4 w-4 text-[#ff6b00]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#333333] dark:text-white">245,678</div>
            <p className="text-xs text-[#666666] dark:text-[#999999]">+18% from last year</p>
          </CardContent>
        </Card>
        <Card className="bg-white dark:bg-[#1e1e1e] border-[#e0e0e0] dark:border-[#333333] shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-[#333333] dark:text-white">Trained Teachers</CardTitle>
            <GraduationCap className="h-4 w-4 text-[#ff6b00]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#333333] dark:text-white">8,942</div>
            <p className="text-xs text-[#666666] dark:text-[#999999]">+24% from target</p>
          </CardContent>
        </Card>
        <Card className="bg-white dark:bg-[#1e1e1e] border-[#e0e0e0] dark:border-[#333333] shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-[#333333] dark:text-white">Program Budget</CardTitle>
            <BookOpen className="h-4 w-4 text-[#ff6b00]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#333333] dark:text-white">₹245.8L</div>
            <p className="text-xs text-[#666666] dark:text-[#999999]">65% utilized YTD</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 min-w-0">
        <Card className="bg-white dark:bg-[#1e1e1e] border-[#e0e0e0] dark:border-[#333333] shadow-sm">
          <CardHeader>
            <CardTitle className="text-[#333333] dark:text-white">Geographic Coverage</CardTitle>
            <CardDescription className="text-[#666666] dark:text-[#999999]">
              School coverage across states {selectedState && `- ${selectedState} selected`}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <IndiaMap onStateClick={(state) => setSelectedState(state)} />
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-[#1e1e1e] border-[#e0e0e0] dark:border-[#333333] shadow-sm">
          <CardHeader>
            <CardTitle className="text-[#333333] dark:text-white">Program Distribution</CardTitle>
            <CardDescription className="text-[#666666] dark:text-[#999999]">
              Distribution of program resources
            </CardDescription>
          </CardHeader>
          <CardContent className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={[
                    { name: "Schools", value: 2945 },
                    { name: "Teachers", value: 8942 },
                    { name: "Sampark TV", value: 1700 },
                    { name: "SSS Kits", value: 2300 },
                    { name: "Sparks", value: 190 },
                  ]}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {[0, 1, 2, 3, 4].map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value) => [value.toLocaleString(), "Count"]}
                  contentStyle={{
                    backgroundColor: "#fff",
                    border: "1px solid #e0e0e0",
                    borderRadius: "4px",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="program" className="w-full space-y-4 min-w-0">
        <TabsList className="bg-[#f0f0f0] dark:bg-[#2a2a2a] border border-[#e0e0e0] dark:border-[#333333]">
          <TabsTrigger value="program" className="data-[state=active]:bg-[#ff6b00] data-[state=active]:text-white">
            Program Metrics
          </TabsTrigger>
          <TabsTrigger value="assets" className="data-[state=active]:bg-[#ff6b00] data-[state=active]:text-white">
            Asset Distribution
          </TabsTrigger>
          <TabsTrigger value="impact" className="data-[state=active]:bg-[#ff6b00] data-[state=active]:text-white">
            Classroom Impact
          </TabsTrigger>
        </TabsList>
        <TabsContent value="program" className="space-y-4">
          <Card className="bg-white dark:bg-[#1e1e1e] border-[#e0e0e0] dark:border-[#333333] shadow-sm">
            <CardHeader>
              <CardTitle className="text-[#333333] dark:text-white">Program Growth</CardTitle>
              <CardDescription className="text-[#666666] dark:text-[#999999]">
                Tracking enrollment, schools, and teacher training over time
              </CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={programData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                  <XAxis dataKey="name" stroke="#666666" />
                  <YAxis stroke="#666666" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#fff",
                      border: "1px solid #e0e0e0",
                      borderRadius: "4px",
                    }}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="enrollment" stroke="#ff6b00" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="schools" stroke="#333333" />
                  <Line type="monotone" dataKey="teachers" stroke="#999999" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="assets" className="space-y-4">
          <Card className="bg-white dark:bg-[#1e1e1e] border-[#e0e0e0] dark:border-[#333333] shadow-sm">
            <CardHeader>
              <CardTitle className="text-[#333333] dark:text-white">Asset Distribution</CardTitle>
              <CardDescription className="text-[#666666] dark:text-[#999999]">
                Tracking Sampark TV and SSS Kits distribution
              </CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={assetData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                  <XAxis dataKey="name" stroke="#666666" />
                  <YAxis stroke="#666666" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#fff",
                      border: "1px solid #e0e0e0",
                      borderRadius: "4px",
                    }}
                  />
                  <Legend />
                  <Bar dataKey="samparkTV" fill="#ff6b00" name="Sampark TV" />
                  <Bar dataKey="sssKits" fill="#333333" name="SSS Kits" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="bg-white dark:bg-[#1e1e1e] border-[#e0e0e0] dark:border-[#333333] shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-[#333333] dark:text-white">
                  Sampark TV Distributed
                </CardTitle>
                <MonitorPlay className="h-4 w-4 text-[#ff6b00]" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-[#333333] dark:text-white">1,745</div>
                <p className="text-xs text-[#666666] dark:text-[#999999]">87% of target</p>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-[#1e1e1e] border-[#e0e0e0] dark:border-[#333333] shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-[#333333] dark:text-white">
                  SSS Kits Distributed
                </CardTitle>
                <Package className="h-4 w-4 text-[#ff6b00]" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-[#333333] dark:text-white">2,342</div>
                <p className="text-xs text-[#666666] dark:text-[#999999]">93% of target</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="impact" className="space-y-4">
          <Card className="bg-white dark:bg-[#1e1e1e] border-[#e0e0e0] dark:border-[#333333] shadow-sm">
            <CardHeader>
              <CardTitle className="text-[#333333] dark:text-white">Classroom Impact</CardTitle>
              <CardDescription className="text-[#666666] dark:text-[#999999]">
                Resource usage by subject and grade
              </CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={[
                    { grade: "Grade 1", english: 65, math: 78, science: 45 },
                    { grade: "Grade 2", english: 75, math: 88, science: 55 },
                    { grade: "Grade 3", english: 85, math: 95, science: 65 },
                    { grade: "Grade 4", english: 78, math: 90, science: 70 },
                    { grade: "Grade 5", english: 70, math: 85, science: 60 },
                    { grade: "Grade 6", english: 65, math: 80, science: 55 },
                    { grade: "Grade 7", english: 60, math: 75, science: 50 },
                    { grade: "Grade 8", english: 55, math: 70, science: 45 },
                  ]}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                  <XAxis dataKey="grade" stroke="#666666" />
                  <YAxis stroke="#666666" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#fff",
                      border: "1px solid #e0e0e0",
                      borderRadius: "4px",
                    }}
                  />
                  <Legend />
                  <Bar dataKey="english" fill="#ff6b00" name="English" />
                  <Bar dataKey="math" fill="#333333" name="Math" />
                  <Bar dataKey="science" fill="#999999" name="Science" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

