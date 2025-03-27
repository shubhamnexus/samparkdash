"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { School, Users, GraduationCap, Package, MapPin } from "lucide-react"
import ProgramDataDistrictwise from "./program-data-districtwise"
import ProgramDataBlockwise from "./program-data-blockwise"

export default function DistrictBlockwise() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">District | Blockwise</h1>
        <p className="text-muted-foreground">Comprehensive overview of program implementation across districts and blocks</p>
      </div>

      <Tabs defaultValue="district" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="district">Program Data Districtwise</TabsTrigger>
          <TabsTrigger value="block">Program Data Blockwise</TabsTrigger>
        </TabsList>
        <TabsContent value="district">
          <ProgramDataDistrictwise />
        </TabsContent>
        <TabsContent value="block">
          <ProgramDataBlockwise />
        </TabsContent>
      </Tabs>
    </div>
  )
} 