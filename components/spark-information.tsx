"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function SparkInformation() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader>
          <CardTitle>Spark Information</CardTitle>
          <CardDescription>View and manage spark details</CardDescription>
        </CardHeader>
        <CardContent>
          {/* Add your spark information content here */}
          <p>Spark information content will go here</p>
        </CardContent>
      </Card>
    </div>
  )
} 