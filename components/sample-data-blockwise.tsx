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
import { School, Users, GraduationCap, Package, MapPin } from "lucide-react"

// Mock data for blockwise statistics
const blockData = [
  {
    block: "Block A",
    district: "District 1",
    schools: 120,
    students: 12000,
    teachers: 600,
    assets: 240,
    coverage: 88,
  },
  {
    block: "Block B",
    district: "District 1",
    schools: 95,
    students: 9500,
    teachers: 475,
    assets: 190,
    coverage: 82,
  },
  {
    block: "Block C",
    district: "District 2",
    schools: 110,
    students: 11000,
    teachers: 550,
    assets: 220,
    coverage: 85,
  },
  {
    block: "Block D",
    district: "District 2",
    schools: 85,
    students: 8500,
    teachers: 425,
    assets: 170,
    coverage: 78,
  },
  {
    block: "Block E",
    district: "District 3",
    schools: 100,
    students: 10000,
    teachers: 500,
    assets: 200,
    coverage: 80,
  },
]

const districtBlockData = [
  {
    district: "District 1",
    blocks: 2,
    totalSchools: 215,
    coverage: 85,
  },
  {
    district: "District 2",
    blocks: 2,
    totalSchools: 195,
    coverage: 81.5,
  },
  {
    district: "District 3",
    blocks: 1,
    totalSchools: 100,
    coverage: 80,
  },
]

export default function SampleDataBlockwise() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Program Data - Blockwise</h1>
        <p className="text-muted-foreground">Detailed program implementation statistics by blocks</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Blocks</CardTitle>
            <MapPin className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">Across all districts</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Schools</CardTitle>
            <School className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">510</div>
            <p className="text-xs text-muted-foreground">Across all blocks</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">51,000</div>
            <p className="text-xs text-muted-foreground">Enrolled students</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Teachers</CardTitle>
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,550</div>
            <p className="text-xs text-muted-foreground">Trained teachers</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Block-wise Coverage</CardTitle>
            <CardDescription>Program coverage across blocks</CardDescription>
          </CardHeader>
          <CardContent className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={blockData}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="block" />
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
            <CardTitle>Schools & Students Distribution</CardTitle>
            <CardDescription>Distribution of schools and students across blocks</CardDescription>
          </CardHeader>
          <CardContent className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={blockData}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="block" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip formatter={(value) => [value.toLocaleString(), "Count"]} />
                <Legend />
                <Bar yAxisId="left" dataKey="schools" fill="#8884d8" name="Schools" />
                <Bar yAxisId="right" dataKey="students" fill="#82ca9d" name="Students" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Block-wise Statistics</CardTitle>
          <CardDescription>Detailed breakdown of program metrics by block</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {blockData.map((block) => (
              <div key={block.block} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-medium">{block.block}</h3>
                  <p className="text-sm text-muted-foreground">
                    {block.district} • {block.schools} schools • {block.students.toLocaleString()} students
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="text-sm font-medium">{block.coverage}%</div>
                    <div className="text-xs text-muted-foreground">Coverage</div>
                  </div>
                  <Progress value={block.coverage} className="w-24" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 