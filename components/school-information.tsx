"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"
import { BookOpen, Check, School } from "lucide-react"
import IndiaMap from "@/components/india-map"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

// Mock data - replace with actual data
const schoolData = [
  {
    id: "SCH001",
    name: "Government Higher Secondary School",
    district: "District A",
    block: "Block 1",
    trained: true,
    lessons: 8,
  },
  { id: "SCH002", name: "Model School", district: "District A", block: "Block 2", trained: true, lessons: 6 },
  { id: "SCH003", name: "Central School", district: "District B", block: "Block 1", trained: true, lessons: 4 },
  { id: "SCH004", name: "Public School", district: "District B", block: "Block 3", trained: false, lessons: 2 },
  { id: "SCH005", name: "Primary School", district: "District C", block: "Block 1", trained: true, lessons: 7 },
  { id: "SCH006", name: "Secondary School", district: "District C", block: "Block 2", trained: true, lessons: 9 },
  { id: "SCH007", name: "High School", district: "District D", block: "Block 1", trained: false, lessons: 3 },
  { id: "SCH008", name: "Elementary School", district: "District D", block: "Block 2", trained: true, lessons: 5 },
  { id: "SCH009", name: "Middle School", district: "District E", block: "Block 1", trained: true, lessons: 6 },
  { id: "SCH010", name: "Junior High School", district: "District E", block: "Block 3", trained: false, lessons: 1 },
]

const COLORS = ["#ff6b00", "#ff8c33", "#ffa866", "#ffc499", "#ffe0cc"]

export default function SchoolInformation() {
  const [selectedState, setSelectedState] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState("")

  const filteredSchools = schoolData.filter(
    (school) =>
      school.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      school.district.toLowerCase().includes(searchTerm.toLowerCase()) ||
      school.block.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const schoolsWithTrainedTeachers = schoolData.filter((school) => school.trained).length
  const schoolsWith5PlusLessons = schoolData.filter((school) => school.lessons > 5).length

  return (
    <div className="flex flex-col gap-4 w-full -m-4">
      <div className="px-4">
        <h1 className="text-3xl font-bold tracking-tight text-[#333333] dark:text-white">School Information</h1>
        <p className="text-[#666666] dark:text-[#999999]">Track school data and performance metrics</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3 w-full px-4">
        <Card className="bg-white dark:bg-[#1e1e1e] border-[#e0e0e0] dark:border-[#333333] shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-[#333333] dark:text-white">Total Schools</CardTitle>
            <School className="h-4 w-4 text-[#ff6b00]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#333333] dark:text-white">{schoolData.length}</div>
            <p className="text-xs text-[#666666] dark:text-[#999999]">In program</p>
          </CardContent>
        </Card>
        <Card className="bg-white dark:bg-[#1e1e1e] border-[#e0e0e0] dark:border-[#333333] shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-[#333333] dark:text-white">
              Schools with Trained Teachers
            </CardTitle>
            <School className="h-4 w-4 text-[#ff6b00]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#333333] dark:text-white">{schoolsWithTrainedTeachers}</div>
            <div className="mt-2">
              <Progress
                value={(schoolsWithTrainedTeachers / schoolData.length) * 100}
                className="h-2 bg-[#ffe0cc]"
                indicatorClassName="bg-[#ff6b00]"
              />
            </div>
            <p className="text-xs text-[#666666] dark:text-[#999999] mt-1">
              {((schoolsWithTrainedTeachers / schoolData.length) * 100).toFixed(1)}% of total schools
            </p>
          </CardContent>
        </Card>
        <Card className="bg-white dark:bg-[#1e1e1e] border-[#e0e0e0] dark:border-[#333333] shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-[#333333] dark:text-white">
              Schools with &gt; 5 Lessons
            </CardTitle>
            <BookOpen className="h-4 w-4 text-[#ff6b00]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#333333] dark:text-white">{schoolsWith5PlusLessons}</div>
            <div className="mt-2">
              <Progress
                value={(schoolsWith5PlusLessons / schoolData.length) * 100}
                className="h-2 bg-[#ffe0cc]"
                indicatorClassName="bg-[#ff6b00]"
              />
            </div>
            <p className="text-xs text-[#666666] dark:text-[#999999] mt-1">
              {((schoolsWith5PlusLessons / schoolData.length) * 100).toFixed(1)}% of total schools
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 w-full px-4">
        <Card className="bg-white dark:bg-[#1e1e1e] border-[#e0e0e0] dark:border-[#333333] shadow-sm">
          <CardHeader>
            <CardTitle className="text-[#333333] dark:text-white">School Distribution</CardTitle>
            <CardDescription className="text-[#666666] dark:text-[#999999]">
              School distribution across states {selectedState && `- ${selectedState} selected`}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <IndiaMap  />
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-[#1e1e1e] border-[#e0e0e0] dark:border-[#333333] shadow-sm">
          <CardHeader>
            <CardTitle className="text-[#333333] dark:text-white">School Performance</CardTitle>
            <CardDescription className="text-[#666666] dark:text-[#999999]">
              Distribution of schools by lesson completion
            </CardDescription>
          </CardHeader>
          <CardContent className="h-[400px] p-0">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={[
                    { name: "0-2 Lessons", value: schoolData.filter((s) => s.lessons <= 2).length },
                    { name: "3-5 Lessons", value: schoolData.filter((s) => s.lessons > 2 && s.lessons <= 5).length },
                    { name: "6-8 Lessons", value: schoolData.filter((s) => s.lessons > 5 && s.lessons <= 8).length },
                    { name: "9+ Lessons", value: schoolData.filter((s) => s.lessons > 8).length },
                  ]}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {[0, 1, 2, 3].map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value) => [value.toLocaleString(), "Schools"]}
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

      <Card className="bg-white dark:bg-[#1e1e1e] border-[#e0e0e0] dark:border-[#333333] shadow-sm w-full">
        <CardHeader>
          <CardTitle className="text-[#333333] dark:text-white">School List</CardTitle>
          <CardDescription className="text-[#666666] dark:text-[#999999]">
            Schools in program by district and block
          </CardDescription>
          <div className="flex w-full max-w-sm items-center space-x-2 mt-2">
            <Input
              type="search"
              placeholder="Search schools..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border-[#e0e0e0] dark:border-[#333333] bg-white dark:bg-[#2a2a2a]"
            />
            <Button
              type="submit"
              className="bg-[#ff6b00] hover:bg-[#ff8c33] text-white"
              onClick={() => setSearchTerm("")}
            >
              Clear
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table className="w-full">
            <TableHeader className="bg-[#f8f8f8] dark:bg-[#2a2a2a]">
              <TableRow>
                <TableHead className="text-[#333333] dark:text-white">School ID</TableHead>
                <TableHead className="text-[#333333] dark:text-white">School Name</TableHead>
                <TableHead className="text-[#333333] dark:text-white">District</TableHead>
                <TableHead className="text-[#333333] dark:text-white">Block</TableHead>
                <TableHead className="text-[#333333] dark:text-white">Trained Teachers</TableHead>
                <TableHead className="text-[#333333] dark:text-white">Lessons Completed</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredSchools.map((school) => (
                <TableRow key={school.id} className="hover:bg-[#fff3e6] dark:hover:bg-[#3a3a3a]">
                  <TableCell className="font-medium text-[#333333] dark:text-white">{school.id}</TableCell>
                  <TableCell className="text-[#333333] dark:text-white">{school.name}</TableCell>
                  <TableCell className="text-[#333333] dark:text-white">{school.district}</TableCell>
                  <TableCell className="text-[#333333] dark:text-white">{school.block}</TableCell>
                  <TableCell>
                    {school.trained ? (
                      <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-100">
                        <Check className="mr-1 h-3 w-3" /> Yes
                      </span>
                    ) : (
                      <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-100">
                        No
                      </span>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span className="text-[#333333] dark:text-white">{school.lessons}</span>
                      <Progress
                        value={(school.lessons / 10) * 100}
                        className="h-2 w-20 bg-[#ffe0cc]"
                        indicatorClassName="bg-[#ff6b00]"
                      />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

