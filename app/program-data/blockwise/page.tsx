"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { School, Users, GraduationCap, Package, ArrowLeft } from "lucide-react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Suspense } from "react"

interface SchoolDetail {
  name: string
  students: number
  teachers: number
  assets: number
  coverage: number
}

interface BlockInfo {
  schools: number
  students: number
  teachers: number
  assets: number
  coverage: number
  schoolDetails: SchoolDetail[]
}

interface BlockData {
  [district: string]: {
    [block: string]: BlockInfo
  }
}

// Mock data for blockwise statistics
const blockData: BlockData = {
  "District A": {
    "Block 1": {
      schools: 150,
      students: 15000,
      teachers: 750,
      assets: 300,
      coverage: 88,
      schoolDetails: [
        {
          name: "School 1",
          students: 500,
          teachers: 25,
          assets: 10,
          coverage: 90,
        },
        {
          name: "School 2",
          students: 450,
          teachers: 22,
          assets: 9,
          coverage: 85,
        },
        // Add more schools as needed
      ]
    },
    // Add more blocks as needed
  },
  // Add more districts as needed
}

function BlockwiseContent() {
  const searchParams = useSearchParams()
  const district = searchParams.get("district")
  const block = searchParams.get("block")

  // Get block data from mock data
  const blockInfo = district && block ? blockData[district]?.[block] : null

  if (!blockInfo) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Block Not Found</h1>
        <Link href="/program-data/districtwise" className="text-primary hover:underline">
          Return to Districtwise Statistics
        </Link>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <Link href="/program-data/districtwise" className="text-primary hover:text-primary/80">
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Blockwise Statistics</h1>
          <p className="text-muted-foreground">
            {district} - {block}
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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

      <Card>
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

      <Card>
        <CardHeader>
          <CardTitle>School-wise Statistics</CardTitle>
          <CardDescription>Detailed information about each school in the block</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {blockInfo.schoolDetails.map((school) => (
              <div key={school.name} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">{school.name}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium">{school.coverage}%</span>
                    <Progress value={school.coverage} className="w-20" />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Students</p>
                    <p className="font-medium">{school.students.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Teachers</p>
                    <p className="font-medium">{school.teachers}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Assets</p>
                    <p className="font-medium">{school.assets}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default function BlockwiseStatistics() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BlockwiseContent />
    </Suspense>
  )
} 