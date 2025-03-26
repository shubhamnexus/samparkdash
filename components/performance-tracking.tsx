"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { Award, BookOpen, GraduationCap, School } from "lucide-react"

// Mock data - replace with actual data
const academicPlanData = [
  { district: "District A", grade1to5: 85, grade6to8: 78 },
  { district: "District B", grade1to5: 75, grade6to8: 68 },
  { district: "District C", grade1to5: 92, grade6to8: 85 },
  { district: "District D", grade1to5: 80, grade6to8: 72 },
  { district: "District E", grade1to5: 70, grade6to8: 65 },
]

export default function PerformanceTracking() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Performance Tracking</h1>
        <p className="text-muted-foreground">Track top performing schools and teachers</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Top Teachers</CardTitle>
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">250</div>
            <p className="text-xs text-muted-foreground">Recognized for excellence</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Top Schools</CardTitle>
            <School className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">120</div>
            <p className="text-xs text-muted-foreground">Recognized for excellence</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Academic Plan Adherence</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78%</div>
            <div className="mt-2">
              <Progress value={78} className="h-2" />
            </div>
            <p className="text-xs text-muted-foreground mt-1">Average across all schools</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Performance Growth</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+15%</div>
            <p className="text-xs text-muted-foreground">YoY improvement</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Teaching as per Academic Plan</CardTitle>
          <CardDescription>District-wise adherence to academic plan by grade groups</CardDescription>
        </CardHeader>
        <CardContent className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={academicPlanData}
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
              <Tooltip formatter={(value) => [`${value}%`, "Adherence"]} />
              <Legend />
              <Bar dataKey="grade1to5" fill="#8884d8" name="Grades 1-5" />
              <Bar dataKey="grade6to8" fill="#82ca9d" name="Grades 6-8" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Top 5 Teachers</CardTitle>
            <CardDescription>Teachers with highest performance scores</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Teacher ID: T-1245", school: "School A, District C", score: 95 },
                { name: "Teacher ID: T-1382", school: "School B, District A", score: 92 },
                { name: "Teacher ID: T-1156", school: "School C, District C", score: 90 },
                { name: "Teacher ID: T-1423", school: "School D, District B", score: 88 },
                { name: "Teacher ID: T-1287", school: "School E, District A", score: 85 },
              ].map((teacher, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">{teacher.name}</p>
                      <span className="text-sm font-medium">{teacher.score} pts</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{teacher.school}</p>
                    <Progress value={teacher.score} className="h-1 mt-2" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top 5 Schools</CardTitle>
            <CardDescription>Schools with highest performance scores</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "School ID: S-1245", district: "District C", score: 93 },
                { name: "School ID: S-1382", district: "District A", score: 91 },
                { name: "School ID: S-1156", district: "District C", score: 89 },
                { name: "School ID: S-1423", district: "District B", score: 87 },
                { name: "School ID: S-1287", district: "District A", score: 84 },
              ].map((school, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <School className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">{school.name}</p>
                      <span className="text-sm font-medium">{school.score} pts</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{school.district}</p>
                    <Progress value={school.score} className="h-1 mt-2" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

