"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { School, Package, Target, BarChart } from "lucide-react"
import SchoolInformation from "./school-information"
import AssetInformation from "./asset-information"
import ProgramGoals from "./program-goals"
import ProgramEvaluation from "./program-evaluation"

export default function ProgramData() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Program Data</h1>
        <p className="text-muted-foreground">Comprehensive overview of program implementation and progress</p>
      </div>

      <Tabs defaultValue="school" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="school" className="flex items-center gap-2">
            <School className="h-4 w-4" />
            School Information
          </TabsTrigger>
          <TabsTrigger value="asset" className="flex items-center gap-2">
            <Package className="h-4 w-4" />
            Asset Information
          </TabsTrigger>
          <TabsTrigger value="goals" className="flex items-center gap-2">
            <Target className="h-4 w-4" />
            Program Goals
          </TabsTrigger>
          <TabsTrigger value="evaluation" className="flex items-center gap-2">
            <BarChart className="h-4 w-4" />
            Program Evaluation
          </TabsTrigger>
        </TabsList>
        <TabsContent value="school">
          <SchoolInformation />
        </TabsContent>
        <TabsContent value="asset">
          <AssetInformation />
        </TabsContent>
        <TabsContent value="goals">
          <ProgramGoals />
        </TabsContent>
        <TabsContent value="evaluation">
          <ProgramEvaluation />
        </TabsContent>
      </Tabs>
    </div>
  )
} 