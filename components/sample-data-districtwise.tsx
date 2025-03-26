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
import { School, Users, GraduationCap, Package } from "lucide-react"

// Mock data for districtwise statistics
const districtData = [
  {
    district: "District A",
    schools: 450,
    students: 45000,
    teachers: 2250,
    assets: 900,
    coverage: 85,
  },
  {
    district: "District B",
    schools: 380,
    students: 38000,
    teachers: 1900,
    assets: 760,
    coverage: 78,
  },
  {
    district: "District C",
    schools: 420,
    students: 42000,
    teachers: 2100,
    assets: 840,
    coverage: 82,
  },
  {
    district: "District D",
    schools: 350,
    students: 35000,
    teachers: 1750,
    assets: 700,
    coverage: 75,
  },
  {
    district: "District E",
    schools: 400,
    students: 40000,
    teachers: 2000,
    assets: 800,
    coverage: 80,
  },
]

const coverageData = [
  { name: "Covered", value: 2000, color: "#4ade80" },
  { name: "Remaining", value: 500, color: "#f87171" },
]

export default function SampleDataDistrictwise() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Program Data - Districtwise</h1>
        <p className="text-muted-foreground">Comprehensive overview of program implementation across districts</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Schools</CardTitle>
            <School className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,000</div>
            <p className="text-xs text-muted-foreground">Across all districts</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">200,000</div>
            <p className="text-xs text-muted-foreground">Enrolled students</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Teachers</CardTitle>
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">10,000</div>
            <p className="text-xs text-muted-foreground">Trained teachers</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Assets</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4,000</div>
            <p className="text-xs text-muted-foreground">Distributed assets</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>District-wise Coverage</CardTitle>
            <CardDescription>Program coverage across districts</CardDescription>
          </CardHeader>
          <CardContent className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={districtData}
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
                <Bar dataKey="coverage" fill="#8884d8" name="Coverage %" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Overall Program Coverage</CardTitle>
            <CardDescription>Schools covered vs remaining</CardDescription>
          </CardHeader>
          <CardContent className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={coverageData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {coverageData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [value, "Schools"]} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>District-wise Statistics</CardTitle>
          <CardDescription>Detailed breakdown of program metrics by district</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {districtData.map((district) => (
              <div key={district.district} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-medium">{district.district}</h3>
                  <p className="text-sm text-muted-foreground">
                    {district.schools} schools • {district.students.toLocaleString()} students • {district.teachers.toLocaleString()} teachers
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="text-sm font-medium">{district.coverage}%</div>
                    <div className="text-xs text-muted-foreground">Coverage</div>
                  </div>
                  <Progress value={district.coverage} className="w-24" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 