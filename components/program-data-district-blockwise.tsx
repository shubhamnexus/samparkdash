"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart,
  Bar,
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
import { Progress } from "@/components/ui/progress"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ChevronRight, ArrowLeft } from "lucide-react"

// Mock data - replace with actual data
const districtData = [
  {
    district: "District 1",
    coverage: 85,
    schools: 800,
    students: 80000,
    teachers: 4000,
    assets: 1600,
    blocks: [
      { name: "Block A", coverage: 90, schools: 300, students: 30000, teachers: 1500 },
      { name: "Block B", coverage: 80, schools: 500, students: 50000, teachers: 2500 },
    ],
  },
  {
    district: "District 2",
    coverage: 75,
    schools: 1200,
    students: 120000,
    teachers: 6000,
    assets: 2400,
    blocks: [
      { name: "Block C", coverage: 70, schools: 400, students: 40000, teachers: 2000 },
      { name: "Block D", coverage: 80, schools: 800, students: 80000, teachers: 4000 },
    ],
  },
]

const blockData = [
  {
    block: "Block A",
    district: "District 1",
    coverage: 90,
    schools: 300,
    students: 30000,
    teachers: 1500,
  },
  {
    block: "Block B",
    district: "District 1",
    coverage: 80,
    schools: 500,
    students: 50000,
    teachers: 2500,
  },
  {
    block: "Block C",
    district: "District 2",
    coverage: 70,
    schools: 400,
    students: 40000,
    teachers: 2000,
  },
  {
    block: "Block D",
    district: "District 2",
    coverage: 80,
    schools: 800,
    students: 80000,
    teachers: 4000,
  },
]

const coverageData = [
  { name: "Covered", value: 1500, color: "#8884d8" },
  { name: "Remaining", value: 500, color: "#ff6b00" },
]

export default function ProgramDataDistrictBlockwise() {
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null)
  const [selectedBlock, setSelectedBlock] = useState<string | null>(null)

  const handleBlockClick = (district: string, block: string) => {
    setSelectedDistrict(district)
    setSelectedBlock(block)
  }

  const getBlockData = (district: string, block: string) => {
    const districtInfo = districtData.find(d => d.district === district)
    if (!districtInfo) return null
    return districtInfo.blocks.find(b => b.name === block)
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">District | Blockwise</h1>
        <p className="text-muted-foreground">Comprehensive overview of program implementation across districts and blocks</p>
      </div>

      <Tabs defaultValue="district" className="space-y-6">
        <TabsList>
          <TabsTrigger value="district">Districtwise View</TabsTrigger>
          <TabsTrigger value="block">Blockwise View</TabsTrigger>
        </TabsList>

        <TabsContent value="district" className="space-y-6">
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
                      right: 10,
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
              <CardDescription>Click on any district to view detailed information</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                {districtData.map((district) => (
                  <Dialog key={district.district}>
                    <DialogTrigger asChild>
                      <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent cursor-pointer transition-all duration-200">
                        <div>
                          <h3 className="font-medium">{district.district}</h3>
                          <p className="text-sm text-muted-foreground">
                            {district.schools} schools • {district.students.toLocaleString()} students
                          </p>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <div className="text-sm font-medium">{district.coverage}%</div>
                            <div className="text-xs text-muted-foreground">Coverage</div>
                          </div>
                          <Progress value={district.coverage} className="w-24" />
                          <ChevronRight className="h-4 w-4 text-muted-foreground" />
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-bold">{district.district}</DialogTitle>
                        <CardDescription className="text-base">District Overview</CardDescription>
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
                                  <span className="font-semibold">{district.schools}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                  <span className="text-muted-foreground">Total Students</span>
                                  <span className="font-semibold">{district.students.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                  <span className="text-muted-foreground">Total Teachers</span>
                                  <span className="font-semibold">{district.teachers}</span>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                        <div className="space-y-6">
                          <Card>
                            <CardHeader className="pb-2">
                              <CardTitle className="text-lg flex items-center gap-2">
                                <MapPin className="h-5 w-5" />
                                Block-wise Coverage
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="space-y-4">
                                {district.blocks.map((block) => (
                                  <div key={block.name} className="space-y-2">
                                    <div className="flex justify-between items-center">
                                      <span className="font-medium">{block.name}</span>
                                      <span className="text-sm text-muted-foreground">{block.coverage}%</span>
                                    </div>
                                    <Progress value={block.coverage} className="h-2" />
                                  </div>
                                ))}
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="block" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Blocks</CardTitle>
                <MapPin className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4</div>
                <p className="text-xs text-muted-foreground">Across 2 districts</p>
                <Progress value={100} className="mt-2" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Schools</CardTitle>
                <School className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2,000</div>
                <p className="text-xs text-muted-foreground">Average 500 schools per block</p>
                <Progress value={85} className="mt-2" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Students</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">200,000</div>
                <p className="text-xs text-muted-foreground">Average 50,000 students per block</p>
                <Progress value={90} className="mt-2" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Teachers</CardTitle>
                <GraduationCap className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">10,000</div>
                <p className="text-xs text-muted-foreground">1:20 teacher-student ratio</p>
                <Progress value={88} className="mt-2" />
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
                      right: 10,
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
                      right: 10,
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
                        </div>
                        <div className="space-y-6">
                          <Card>
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
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
} 