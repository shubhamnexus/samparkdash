"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import {
  BarChart3,
  BookOpen,
  FileSpreadsheet,
  GraduationCap,
  Home,
  Info,
  LineChart,
  Map,
  MapPin,
  Package,
  School,
  Search,
  Settings,
  Sparkles,
  Target,
  Users,
  Building2,
  Building,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DatePickerWithRange } from "@/components/date-range-picker"
import { RegionFilter } from "@/components/region-filter"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { ThemeToggle } from "@/components/theme-toggle"
import type { DateRange } from "react-day-picker"

interface DashboardLayoutProps {
  children: React.ReactNode
  className?: string
}

export default function DashboardLayout({ children, className }: DashboardLayoutProps) {
  const pathname = usePathname()
  const [dateRange, setDateRange] = useState<DateRange | undefined>()
  const [breadcrumbs, setBreadcrumbs] = useState<{ label: string; path: string }[]>([])

  useEffect(() => {
    const pathSegments = pathname.split("/").filter(Boolean)
    const breadcrumbItems = pathSegments.map((segment, index) => {
      const path = `/${pathSegments.slice(0, index + 1).join("/")}`
      return {
        label: segment
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" "),
        path,
      }
    })
    setBreadcrumbs(breadcrumbItems)
  }, [pathname])

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-[#f8f8f8] dark:bg-[#121212]">
        <Sidebar className="border-r border-[#e0e0e0] dark:border-[#333333] w-64 shrink-0">
          <SidebarHeader className="border-b border-[#e0e0e0] dark:border-[#333333] bg-white dark:bg-[#1e1e1e]">
            <div className="flex items-center gap-2 px-2">
              <GraduationCap className="h-6 w-6 text-[#ff6b00]" />
              <div className="font-semibold text-lg text-[#333333] dark:text-white">Sampark Dashboard</div>
            </div>
          </SidebarHeader>
          <SidebarContent className="bg-white dark:bg-[#1e1e1e]">
            <SidebarGroup>
              <SidebarGroupLabel className="text-[#666666] dark:text-[#999999]">Navigation</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname === "/dashboard"}>
                      <a
                        href="/dashboard"
                        className="text-[#333333] dark:text-white hover:text-[#ff6b00] dark:hover:text-[#ff6b00]"
                      >
                        <Home className="h-4 w-4" />
                        <span>Overview</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel className="text-[#666666] dark:text-[#999999]">Program Data</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname === "/dashboard/program-data-districtwise"}>
                      <a
                        href="/dashboard/program-data-districtwise"
                        className="text-[#333333] dark:text-white hover:text-[#ff6b00] dark:hover:text-[#ff6b00]"
                      >
                        <Building2 className="h-4 w-4" />
                        <span>Program Data Districtwise</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname === "/dashboard/program-data-blockwise"}>
                      <a
                        href="/dashboard/program-data-blockwise"
                        className="text-[#333333] dark:text-white hover:text-[#ff6b00] dark:hover:text-[#ff6b00]"
                      >
                        <Building className="h-4 w-4" />
                        <span>Program Data Blockwise</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname === "/dashboard/school-information"}>
                      <a
                        href="/dashboard/school-information"
                        className="text-[#333333] dark:text-white hover:text-[#ff6b00] dark:hover:text-[#ff6b00]"
                      >
                        <School className="h-4 w-4" />
                        <span>School Information</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname === "/dashboard/asset-information"}>
                      <a
                        href="/dashboard/asset-information"
                        className="text-[#333333] dark:text-white hover:text-[#ff6b00] dark:hover:text-[#ff6b00]"
                      >
                        <Package className="h-4 w-4" />
                        <span>Asset Information</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname === "/dashboard/program-goals"}>
                      <a
                        href="/dashboard/program-goals"
                        className="text-[#333333] dark:text-white hover:text-[#ff6b00] dark:hover:text-[#ff6b00]"
                      >
                        <Target className="h-4 w-4" />
                        <span>Program Goals</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname === "/dashboard/program-evaluation"}>
                      <a
                        href="/dashboard/program-evaluation"
                        className="text-[#333333] dark:text-white hover:text-[#ff6b00] dark:hover:text-[#ff6b00]"
                      >
                        <LineChart className="h-4 w-4" />
                        <span>Program Evaluation</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel className="text-[#666666] dark:text-[#999999]">Spark Data</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname === "/dashboard/spark-monitoring"}>
                      <a
                        href="/dashboard/spark-monitoring"
                        className="text-[#333333] dark:text-white hover:text-[#ff6b00] dark:hover:text-[#ff6b00]"
                      >
                        <Sparkles className="h-4 w-4" />
                        <span>Spark Monitoring</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname === "/dashboard/spark-information"}>
                      <a
                        href="/dashboard/spark-information"
                        className="text-[#333333] dark:text-white hover:text-[#ff6b00] dark:hover:text-[#ff6b00]"
                      >
                        <Info className="h-4 w-4" />
                        <span>Spark Information</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel className="text-[#666666] dark:text-[#999999]">Performance & Impact</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname === "/dashboard/teacher-assessment"}>
                      <a
                        href="/dashboard/teacher-assessment"
                        className="text-[#333333] dark:text-white hover:text-[#ff6b00] dark:hover:text-[#ff6b00]"
                      >
                        <Users className="h-4 w-4" />
                        <span>Teacher Assessment</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname === "/dashboard/performance-tracking"}>
                      <a
                        href="/dashboard/performance-tracking"
                        className="text-[#333333] dark:text-white hover:text-[#ff6b00] dark:hover:text-[#ff6b00]"
                      >
                        <BarChart3 className="h-4 w-4" />
                        <span>Performance Tracking</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname === "/dashboard/classroom-impact"}>
                      <a
                        href="/dashboard/classroom-impact"
                        className="text-[#333333] dark:text-white hover:text-[#ff6b00] dark:hover:text-[#ff6b00]"
                      >
                        <School className="h-4 w-4" />
                        <span>Classroom Impact</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel className="text-[#666666] dark:text-[#999999]">Other</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname === "/dashboard/program-monitoring"}>
                      <a
                        href="/dashboard/program-monitoring"
                        className="text-[#333333] dark:text-white hover:text-[#ff6b00] dark:hover:text-[#ff6b00]"
                      >
                        <FileSpreadsheet className="h-4 w-4" />
                        <span>Program Monitoring</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname === "/dashboard/program-info"}>
                      <a
                        href="/dashboard/program-info"
                        className="text-[#333333] dark:text-white hover:text-[#ff6b00] dark:hover:text-[#ff6b00]"
                      >
                        <Info className="h-4 w-4" />
                        <span>Program Info</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname === "/dashboard/material"}>
                      <a
                        href="/dashboard/material"
                        className="text-[#333333] dark:text-white hover:text-[#ff6b00] dark:hover:text-[#ff6b00]"
                      >
                        <BookOpen className="h-4 w-4" />
                        <span>Material</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter className="border-t border-[#e0e0e0] dark:border-[#333333] bg-white dark:bg-[#1e1e1e]">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-2">
                <Settings className="h-4 w-4 text-[#666666] dark:text-[#999999]" />
                <span className="text-xs text-[#666666] dark:text-[#999999]">Settings</span>
              </div>
              <ThemeToggle />
            </div>
          </SidebarFooter>
        </Sidebar>

        <div className="flex-1 flex flex-col min-w-0 w-full">
          <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b border-[#e0e0e0] dark:border-[#333333] bg-white dark:bg-[#1e1e1e] px-4 w-full">
            <SidebarTrigger />
            <div className="flex flex-1 items-center gap-4 overflow-x-auto">
              <form className="flex-1">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-[#666666] dark:text-[#999999]" />
                  <Input
                    type="search"
                    placeholder="Search..."
                    className="w-full appearance-none bg-[#f8f8f8] dark:bg-[#2a2a2a] pl-8 shadow-none border-[#e0e0e0] dark:border-[#333333] md:w-2/3 lg:w-1/3"
                  />
                </div>
              </form>
              <div className="flex items-center gap-4">
                <RegionFilter />
                <DatePickerWithRange value={dateRange} onChange={setDateRange} />
                <Select defaultValue="ytd">
                  <SelectTrigger className="w-[180px] border-[#e0e0e0] dark:border-[#333333] bg-white dark:bg-[#2a2a2a]">
                    <SelectValue placeholder="Select period" />
                  </SelectTrigger>
                  <SelectContent className="bg-white dark:bg-[#2a2a2a] border-[#e0e0e0] dark:border-[#333333]">
                    <SelectItem value="ytd">Year to Date</SelectItem>
                    <SelectItem value="q1">Q1</SelectItem>
                    <SelectItem value="q2">Q2</SelectItem>
                    <SelectItem value="q3">Q3</SelectItem>
                    <SelectItem value="q4">Q4</SelectItem>
                    <SelectItem value="custom">Custom</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </header>

          <div className="flex-1 overflow-auto w-full">
            <div className={`w-full h-full max-w-none ${className || ''}`}>
              <Breadcrumb className="mb-4 px-4">
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink
                      href="/dashboard"
                      className="text-[#666666] dark:text-[#999999] hover:text-[#ff6b00] dark:hover:text-[#ff6b00]"
                    >
                      Dashboard
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  {breadcrumbs.slice(1).map((item, index) => (
                    <BreadcrumbItem key={index}>
                      <BreadcrumbSeparator />
                      <BreadcrumbLink
                        href={item.path}
                        className={
                          index === breadcrumbs.length - 2
                            ? "text-[#ff6b00] font-medium"
                            : "text-[#666666] dark:text-[#999999] hover:text-[#ff6b00] dark:hover:text-[#ff6b00]"
                        }
                      >
                        {item.label}
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                  ))}
                </BreadcrumbList>
              </Breadcrumb>

              <main className="w-full h-full flex-1">{children}</main>
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  )
}

