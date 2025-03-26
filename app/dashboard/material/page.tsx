import type { Metadata } from "next"
import DashboardLayout from "@/components/dashboard-layout"
import Material from "@/components/material"

export const metadata: Metadata = {
  title: "Material | Education Dashboard",
  description: "Track material sync and distribution",
}

export default function MaterialPage() {
  return (
    <DashboardLayout>
      <Material />
    </DashboardLayout>
  )
}

