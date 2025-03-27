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
import { School, Users, GraduationCap, Package, ChevronRight, ArrowLeft, Building2 } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"
// Mock data for districtwise statistics
const districtData = [
  {
    district: "District A",
    blocks: [
      {
        name: "Block 1",
        schools: 150,
        students: 15000,
        teachers: 750,
        assets: 300,
        coverage: 88,
      },
      {
        name: "Block 2",
        schools: 120,
        students: 12000,
        teachers: 600,
        assets: 240,
        coverage: 82,
      },
      {
        name: "Block 3",
        schools: 180,
        students: 18000,
        teachers: 900,
        assets: 360,
        coverage: 85,
      }
    ],
    totalSchools: 450,
    totalStudents: 45000,
    totalTeachers: 2250,
    totalAssets: 900,
    coverage: 85,
  },
  {
    district: "District B",
    blocks: [
      {
        name: "Block 1",
        schools: 130,
        students: 13000,
        teachers: 650,
        assets: 260,
        coverage: 80,
      },
      {
        name: "Block 2",
        schools: 150,
        students: 15000,
        teachers: 750,
        assets: 300,
        coverage: 78,
      },
      {
        name: "Block 3",
        schools: 100,
        students: 10000,
        teachers: 500,
        assets: 200,
        coverage: 76,
      }
    ],
    totalSchools: 380,
    totalStudents: 38000,
    totalTeachers: 1900,
    totalAssets: 760,
    coverage: 78,
  },
  {
    district: "District C",
    blocks: [
      {
        name: "Block 1",
        schools: 140,
        students: 14000,
        teachers: 700,
        assets: 280,
        coverage: 84,
      },
      {
        name: "Block 2",
        schools: 130,
        students: 13000,
        teachers: 650,
        assets: 260,
        coverage: 81,
      },
      {
        name: "Block 3",
        schools: 150,
        students: 15000,
        teachers: 750,
        assets: 300,
        coverage: 81,
      }
    ],
    totalSchools: 420,
    totalStudents: 42000,
    totalTeachers: 2100,
    totalAssets: 840,
    coverage: 82,
  }
]

const coverageData = [
  { name: "Covered", value: 2000, color: "#4ade80" },
  { name: "Remaining", value: 500, color: "#f87171" },
]

export default function ProgramDataDistrictwise() {
  const router = useRouter()
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null)
  const [selectedBlock, setSelectedBlock] = useState<string | null>(null)

  const handleBlockClick = (district: string, block: string) => {
    setSelectedDistrict(district)
    setSelectedBlock(block)
  }

  // Get block data from districtData
  const getBlockData = (district: string, block: string) => {
    const districtInfo = districtData.find(d => d.district === district)
    if (!districtInfo) return null
    return districtInfo.blocks.find(b => b.name === block)
  }

  return (
    <div className="flex flex-col gap-6 px-4">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Program Data - Districtwise</h1>
        <p className="text-muted-foreground">Comprehensive overview of program implementation across districts</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-white shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Schools</CardTitle>
            <School className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,000</div>
            <p className="text-xs text-muted-foreground">Across all districts</p>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">200,000</div>
            <p className="text-xs text-muted-foreground">Enrolled students</p>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Teachers</CardTitle>
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">10,000</div>
            <p className="text-xs text-muted-foreground">Trained teachers</p>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-sm">
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

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="bg-white shadow-sm">
          <CardHeader>
            <CardTitle>District-wise Coverage</CardTitle>
            <CardDescription>Program coverage across districts</CardDescription>
          </CardHeader>
          <CardContent className="h-[400px]">
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
                <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                <XAxis dataKey="district" />
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
            <CardTitle>Overall Program Coverage</CardTitle>
            <CardDescription>Schools covered vs remaining</CardDescription>
          </CardHeader>
          <CardContent className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={coverageData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={150}
                  fill="#4ade80"
                  dataKey="value"
                  label={({ name, value, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {coverageData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-white shadow-sm">
        <CardHeader>
          <CardTitle>District-wise Statistics</CardTitle>
          <CardDescription>Click on any district to view detailed information</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {districtData.map((district) => (
              <Dialog key={district.district}>
                <DialogTrigger asChild>
                  <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent cursor-pointer transition-all duration-200">
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-primary/10 rounded-full">
                        <Building2 className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">{district.district}</h3>
                        <p className="text-sm text-muted-foreground">
                          {district.totalSchools} schools • {district.totalStudents.toLocaleString()} students
                        </p>
                      </div>
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
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-xl">{district.district} Overview</DialogTitle>
                  </DialogHeader>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="space-y-3">
                      <div className="p-3 bg-primary/5 rounded-lg">
                        <div className="flex items-center gap-2 mb-1">
                          <School className="h-4 w-4 text-primary" />
                          <h4 className="font-semibold text-sm">Schools</h4>
                        </div>
                        <p className="text-xl font-bold">{district.totalSchools}</p>
                        <p className="text-xs text-muted-foreground">Total number of schools in the district</p>
                      </div>
                      <div className="p-3 bg-primary/5 rounded-lg">
                        <div className="flex items-center gap-2 mb-1">
                          <Users className="h-4 w-4 text-primary" />
                          <h4 className="font-semibold text-sm">Students</h4>
                        </div>
                        <p className="text-xl font-bold">{district.totalStudents.toLocaleString()}</p>
                        <p className="text-xs text-muted-foreground">Total enrolled students</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="p-3 bg-primary/5 rounded-lg">
                        <div className="flex items-center gap-2 mb-1">
                          <GraduationCap className="h-4 w-4 text-primary" />
                          <h4 className="font-semibold text-sm">Teachers</h4>
                        </div>
                        <p className="text-xl font-bold">{district.totalTeachers.toLocaleString()}</p>
                        <p className="text-xs text-muted-foreground">Total trained teachers</p>
                      </div>
                      <div className="p-3 bg-primary/5 rounded-lg">
                        <div className="flex items-center gap-2 mb-1">
                          <Package className="h-4 w-4 text-primary" />
                          <h4 className="font-semibold text-sm">Assets</h4>
                        </div>
                        <p className="text-xl font-bold">{district.totalAssets.toLocaleString()}</p>
                        <p className="text-xs text-muted-foreground">Total distributed assets</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h4 className="font-semibold text-sm mb-3">Block-wise Statistics</h4>
                    <div className="space-y-3">
                      {district.blocks.map((block) => (
                        <div 
                          key={block.name} 
                          className="p-3 border rounded-lg hover:bg-accent cursor-pointer transition-all duration-200"
                          onClick={() => handleBlockClick(district.district, block.name)}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <h5 className="font-medium text-sm">{block.name}</h5>
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-medium">{block.coverage}%</span>
                              <Progress value={block.coverage} className="w-20" />
                            </div>
                          </div>
                          <div className="grid grid-cols-3 gap-3 text-xs">
                            <div>
                              <p className="text-muted-foreground">Schools</p>
                              <p className="font-medium">{block.schools}</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Students</p>
                              <p className="font-medium">{block.students.toLocaleString()}</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Teachers</p>
                              <p className="font-medium">{block.teachers}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4">
                    <h4 className="font-semibold text-sm mb-2">Program Coverage</h4>
                    <div className="flex items-center gap-3">
                      <Progress value={district.coverage} className="flex-1" />
                      <span className="text-base font-bold">{district.coverage}%</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      {district.coverage >= 80 ? "Excellent coverage" : district.coverage >= 60 ? "Good coverage" : "Needs improvement"}
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Blockwise Statistics Dialog */}
      <Dialog open={!!selectedBlock} onOpenChange={() => setSelectedBlock(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setSelectedBlock(null)}
                className="text-primary hover:text-primary/80"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <div>
                <DialogTitle className="text-xl">Blockwise Statistics</DialogTitle>
                <p className="text-sm text-muted-foreground">
                  {selectedDistrict} - {selectedBlock}
                </p>
              </div>
            </div>
          </DialogHeader>

          {selectedBlock && selectedDistrict && (
            <>
              {(() => {
                const blockInfo = getBlockData(selectedDistrict, selectedBlock)
                if (!blockInfo) return null

                return (
                  <>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-4">
                      <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                          <CardTitle className="text-sm font-medium">Total Schools</CardTitle>
                          <School className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">{blockInfo.schools}</div>
                          <p className="text-xs text-muted-foreground">Schools in this block</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                          <CardTitle className="text-sm font-medium">Total Students</CardTitle>
                          <Users className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">{blockInfo.students.toLocaleString()}</div>
                          <p className="text-xs text-muted-foreground">Enrolled students</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                          <CardTitle className="text-sm font-medium">Total Teachers</CardTitle>
                          <GraduationCap className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">{blockInfo.teachers.toLocaleString()}</div>
                          <p className="text-xs text-muted-foreground">Trained teachers</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                          <CardTitle className="text-sm font-medium">Total Assets</CardTitle>
                          <Package className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">{blockInfo.assets.toLocaleString()}</div>
                          <p className="text-xs text-muted-foreground">Distributed assets</p>
                        </CardContent>
                      </Card>
                    </div>

                    <Card className="mt-4">
                      <CardHeader>
                        <CardTitle>Program Coverage</CardTitle>
                        <CardDescription>Overall coverage of the program in this block</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-3">
                          <Progress value={blockInfo.coverage} className="flex-1" />
                          <span className="text-base font-bold">{blockInfo.coverage}%</span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                          {blockInfo.coverage >= 80 ? "Excellent coverage" : blockInfo.coverage >= 60 ? "Good coverage" : "Needs improvement"}
                        </p>
                      </CardContent>
                    </Card>
                  </>
                )
              })()}
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
} 