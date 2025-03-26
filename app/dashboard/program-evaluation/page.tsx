import type { Metadata } from "next"
import DashboardLayout from "@/components/dashboard-layout"
import ProgramEvaluation from "@/components/program-evaluation"

export const metadata: Metadata = {
  title: "Program Evaluation | Education Dashboard",
  description: "Evaluate program progress and performance",
}

export default function ProgramEvaluationPage() {
  return (
    <DashboardLayout>
      <ProgramEvaluation />
    </DashboardLayout>
  )
}

