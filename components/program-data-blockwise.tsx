"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
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
import { School, Users, GraduationCap, Package, MapPin, ChevronRight } from "lucide-react"
import { useState } from "react"

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

export default function ProgramDataBlockwise() {
  const [selectedBlock, setSelectedBlock] = useState(null)

  return (
    <div className="flex flex-col gap-6 px-4">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Program Data - Blockwise</h1>
        <p className="text-muted-foreground">Detailed program implementation statistics by blocks</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-white shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Blocks</CardTitle>
            <MapPin className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">Across 3 districts</p>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Schools</CardTitle>
            <School className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">510</div>
            <p className="text-xs text-muted-foreground">Average 102 schools per block</p>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">51,000</div>
            <p className="text-xs text-muted-foreground">Average 100 students per school</p>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Teachers</CardTitle>
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,550</div>
            <p className="text-xs text-muted-foreground">1:20 teacher-student ratio</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="bg-white shadow-sm">
          <CardHeader>
            <CardTitle>Block-wise Coverage</CardTitle>
            <CardDescription>Program coverage across blocks</CardDescription>
          </CardHeader>
          <CardContent className="h-[400px]">
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
                <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                <XAxis dataKey="block" />
                <YAxis />
                <Tooltip formatter={(value) => [`${value}%`, "Coverage"]} />
                <Legend />
                <Bar dataKey="coverage" fill="#8884d8" name="Coverage %" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-sm">
          <CardHeader>
            <CardTitle>Schools & Students Distribution</CardTitle>
            <CardDescription>Distribution of schools and students across blocks</CardDescription>
          </CardHeader>
          <CardContent className="h-[400px]">
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
                <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
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

      <Card className="bg-white shadow-sm">
        <CardHeader>
          <CardTitle>Block-wise Statistics</CardTitle>
          <CardDescription>Click on any block to view detailed information</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {blockData.map((block) => (
              <Dialog key={block.block}>
                <DialogTrigger asChild>
                  <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent cursor-pointer transition-all duration-200">
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
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-3xl">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">{block.block}</DialogTitle>
                    <CardDescription className="text-base">{block.district}</CardDescription>
                  </DialogHeader>
                  <div className="grid grid-cols-2 gap-6 mt-6">
                    <div className="space-y-6">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg flex items-center gap-2">
                            <School className="h-5 w-5" />
                            School Statistics
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            <div className="flex justify-between items-center">
                              <span className="text-muted-foreground">Total Schools</span>
                              <span className="font-semibold">{block.schools}</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-muted-foreground">Students per School</span>
                              <span className="font-semibold">{Math.round(block.students / block.schools)}</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-muted-foreground">Teachers per School</span>
                              <span className="font-semibold">{Math.round(block.teachers / block.schools)}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg flex items-center gap-2">
                            <Package className="h-5 w-5" />
                            Asset Management
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            <div className="flex justify-between items-center">
                              <span className="text-muted-foreground">Total Assets</span>
                              <span className="font-semibold">{block.assets}</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-muted-foreground">Assets per School</span>
                              <span className="font-semibold">{Math.round(block.assets / block.schools)}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="space-y-6">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg flex items-center gap-2">
                            <Users className="h-5 w-5" />
                            Student Statistics
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            <div className="flex justify-between items-center">
                              <span className="text-muted-foreground">Total Students</span>
                              <span className="font-semibold">{block.students.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-muted-foreground">Student-Teacher Ratio</span>
                              <span className="font-semibold">{Math.round(block.students / block.teachers)}:1</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg flex items-center gap-2">
                            <GraduationCap className="h-5 w-5" />
                            Teacher Statistics
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            <div className="flex justify-between items-center">
                              <span className="text-muted-foreground">Total Teachers</span>
                              <span className="font-semibold">{block.teachers}</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-muted-foreground">Teacher-Student Ratio</span>
                              <span className="font-semibold">1:{Math.round(block.students / block.teachers)}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <Card className="mt-6">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <MapPin className="h-5 w-5" />
                        Program Coverage
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <Progress value={block.coverage} className="h-2" />
                        <p className="text-sm text-muted-foreground">
                          {block.coverage}% of schools in {block.block} are currently covered under the program
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 