"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
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
import { MonitorPlay, Package, Smartphone, Check } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock data - replace with actual data
const assetDistributionData = [
  { month: "Jan", samparkTV: 1200, sssKits: 1800 },
  { month: "Feb", samparkTV: 1300, sssKits: 1900 },
  { month: "Mar", samparkTV: 1400, sssKits: 2000 },
  { month: "Apr", samparkTV: 1500, sssKits: 2100 },
  { month: "May", samparkTV: 1600, sssKits: 2200 },
  { month: "Jun", samparkTV: 1700, sssKits: 2300 },
]

const assetUsageData = [
  { month: "Jan", samparkTV: 65, sssApp: 45 },
  { month: "Feb", samparkTV: 68, sssApp: 48 },
  { month: "Mar", samparkTV: 72, sssApp: 52 },
  { month: "Apr", samparkTV: 75, sssApp: 58 },
  { month: "May", samparkTV: 78, sssApp: 62 },
  { month: "Jun", samparkTV: 82, sssApp: 68 },
]

const syncStatusData = [
  { name: "Synced", value: 1428, color: "#4ade80" },
  { name: "Not Synced", value: 272, color: "#f87171" },
]

const tvDistributionData = [
  {
    id: "TV001",
    school: "Government Higher Secondary School",
    district: "District A",
    block: "Block 1",
    installed: true,
    synced: true,
    lastSync: "2023-06-15",
  },
  {
    id: "TV002",
    school: "Model School",
    district: "District A",
    block: "Block 2",
    installed: true,
    synced: true,
    lastSync: "2023-06-12",
  },
  {
    id: "TV003",
    school: "Central School",
    district: "District B",
    block: "Block 1",
    installed: true,
    synced: false,
    lastSync: "2023-05-20",
  },
  {
    id: "TV004",
    school: "Public School",
    district: "District B",
    block: "Block 3",
    installed: false,
    synced: false,
    lastSync: "-",
  },
  {
    id: "TV005",
    school: "Primary School",
    district: "District C",
    block: "Block 1",
    installed: true,
    synced: true,
    lastSync: "2023-06-10",
  },
  {
    id: "TV006",
    school: "Secondary School",
    district: "District C",
    block: "Block 2",
    installed: true,
    synced: true,
    lastSync: "2023-06-14",
  },
  {
    id: "TV007",
    school: "High School",
    district: "District D",
    block: "Block 1",
    installed: true,
    synced: false,
    lastSync: "2023-05-25",
  },
  {
    id: "TV008",
    school: "Elementary School",
    district: "District D",
    block: "Block 2",
    installed: true,
    synced: true,
    lastSync: "2023-06-08",
  },
  {
    id: "TV009",
    school: "Middle School",
    district: "District E",
    block: "Block 1",
    installed: true,
    synced: true,
    lastSync: "2023-06-11",
  },
  {
    id: "TV010",
    school: "Junior High School",
    district: "District E",
    block: "Block 3",
    installed: false,
    synced: false,
    lastSync: "-",
  },
]

const COLORS = ["#ff6b00", "#ff8c33", "#ffa866", "#ffc499", "#ffe0cc"]

export default function AssetInformation() {
  const [timeFrame, setTimeFrame] = useState("monthly")

  return (
    <div className="flex flex-col gap-6 w-full">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-[#333333] dark:text-white">Asset Information</h1>
        <p className="text-[#666666] dark:text-[#999999]">Track distribution and usage of program assets</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-white dark:bg-[#1e1e1e] border-[#e0e0e0] dark:border-[#333333] shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-[#333333] dark:text-white">Sampark TV Distributed</CardTitle>
            <MonitorPlay className="h-4 w-4 text-[#ff6b00]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#333333] dark:text-white">1,700</div>
            <div className="mt-2">
              <Progress value={85} className="h-2 bg-[#ffe0cc]" indicatorClassName="bg-[#ff6b00]" />
            </div>
            <p className="text-xs text-[#666666] dark:text-[#999999] mt-1">85% of target (2,000)</p>
          </CardContent>
        </Card>
        <Card className="bg-white dark:bg-[#1e1e1e] border-[#e0e0e0] dark:border-[#333333] shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-[#333333] dark:text-white">SSS Kits Distributed</CardTitle>
            <Package className="h-4 w-4 text-[#ff6b00]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#333333] dark:text-white">2,300</div>
            <div className="mt-2">
              <Progress value={92} className="h-2 bg-[#ffe0cc]" indicatorClassName="bg-[#ff6b00]" />
            </div>
            <p className="text-xs text-[#666666] dark:text-[#999999] mt-1">92% of target (2,500)</p>
          </CardContent>
        </Card>
        <Card className="bg-white dark:bg-[#1e1e1e] border-[#e0e0e0] dark:border-[#333333] shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-[#333333] dark:text-white">Sampark TV Synced</CardTitle>
            <MonitorPlay className="h-4 w-4 text-[#ff6b00]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#333333] dark:text-white">1,428</div>
            <div className="mt-2">
              <Progress value={84} className="h-2 bg-[#ffe0cc]" indicatorClassName="bg-[#ff6b00]" />
            </div>
            <p className="text-xs text-[#666666] dark:text-[#999999] mt-1">84% of distributed TVs</p>
          </CardContent>
        </Card>
        <Card className="bg-white dark:bg-[#1e1e1e] border-[#e0e0e0] dark:border-[#333333] shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-[#333333] dark:text-white">SSS App Usage</CardTitle>
            <Smartphone className="h-4 w-4 text-[#ff6b00]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#333333] dark:text-white">68%</div>
            <div className="mt-2">
              <Progress value={68} className="h-2 bg-[#ffe0cc]" indicatorClassName="bg-[#ff6b00]" />
            </div>
            <p className="text-xs text-[#666666] dark:text-[#999999] mt-1">Weekly active users</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-white dark:bg-[#1e1e1e] border-[#e0e0e0] dark:border-[#333333] shadow-sm">
          <CardHeader>
            <CardTitle className="text-[#333333] dark:text-white">Asset Distribution</CardTitle>
            <CardDescription className="text-[#666666] dark:text-[#999999]">
              Sampark TV and SSS Kits distribution over time
            </CardDescription>
          </CardHeader>
          <CardContent className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={assetDistributionData}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="month" stroke="#666666" />
                <YAxis stroke="#666666" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#fff",
                    border: "1px solid #e0e0e0",
                    borderRadius: "4px",
                  }}
                />
                <Legend />
                <Bar dataKey="samparkTV" fill="#ff6b00" name="Sampark TV" />
                <Bar dataKey="sssKits" fill="#333333" name="SSS Kits" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-[#1e1e1e] border-[#e0e0e0] dark:border-[#333333] shadow-sm">
          <CardHeader>
            <CardTitle className="text-[#333333] dark:text-white">Asset Usage</CardTitle>
            <CardDescription className="text-[#666666] dark:text-[#999999]">
              Sampark TV and SSS App usage percentage
            </CardDescription>
          </CardHeader>
          <CardContent className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={assetUsageData}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="month" stroke="#666666" />
                <YAxis stroke="#666666" />
                <Tooltip
                  formatter={(value) => [`${value}%`, "Usage"]}
                  contentStyle={{
                    backgroundColor: "#fff",
                    border: "1px solid #e0e0e0",
                    borderRadius: "4px",
                  }}
                />
                <Legend />
                <Line type="monotone" dataKey="samparkTV" stroke="#ff6b00" name="Sampark TV Usage" />
                <Line type="monotone" dataKey="sssApp" stroke="#333333" name="SSS App Usage" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-white dark:bg-[#1e1e1e] border-[#e0e0e0] dark:border-[#333333] shadow-sm">
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <CardTitle className="text-[#333333] dark:text-white">Sampark TV Status</CardTitle>
              <CardDescription className="text-[#666666] dark:text-[#999999]">
                Installation and sync status of Sampark TVs
              </CardDescription>
            </div>
            <Select value={timeFrame} onValueChange={setTimeFrame}>
              <SelectTrigger className="w-[180px] border-[#e0e0e0] dark:border-[#333333] bg-white dark:bg-[#2a2a2a]">
                <SelectValue placeholder="Select time frame" />
              </SelectTrigger>
              <SelectContent className="bg-white dark:bg-[#2a2a2a] border-[#e0e0e0] dark:border-[#333333]">
                <SelectItem value="weekly">Weekly</SelectItem>
                <SelectItem value="monthly">Monthly</SelectItem>
                <SelectItem value="quarterly">Quarterly</SelectItem>
                <SelectItem value="custom">Custom</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2 mb-6">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={[
                      {
                        name: "Installed & Synced",
                        value: tvDistributionData.filter((tv) => tv.installed && tv.synced).length,
                      },
                      {
                        name: "Installed Not Synced",
                        value: tvDistributionData.filter((tv) => tv.installed && !tv.synced).length,
                      },
                      { name: "Not Installed", value: tvDistributionData.filter((tv) => !tv.installed).length },
                    ]}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {[0, 1, 2].map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value) => [value.toLocaleString(), "TVs"]}
                    contentStyle={{
                      backgroundColor: "#fff",
                      border: "1px solid #e0e0e0",
                      borderRadius: "4px",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={[
                    { district: "District A", installed: 2, synced: 2 },
                    { district: "District B", installed: 2, synced: 1 },
                    { district: "District C", installed: 2, synced: 2 },
                    { district: "District D", installed: 2, synced: 1 },
                    { district: "District E", installed: 2, synced: 1 },
                  ]}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                  layout="vertical"
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                  <XAxis type="number" stroke="#666666" />
                  <YAxis dataKey="district" type="category" stroke="#666666" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#fff",
                      border: "1px solid #e0e0e0",
                      borderRadius: "4px",
                    }}
                  />
                  <Legend />
                  <Bar dataKey="installed" fill="#ff6b00" name="Installed" />
                  <Bar dataKey="synced" fill="#333333" name="Synced" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <Table>
            <TableHeader className="bg-[#f8f8f8] dark:bg-[#2a2a2a]">
              <TableRow>
                <TableHead className="text-[#333333] dark:text-white">TV ID</TableHead>
                <TableHead className="text-[#333333] dark:text-white">School</TableHead>
                <TableHead className="text-[#333333] dark:text-white">District</TableHead>
                <TableHead className="text-[#333333] dark:text-white">Block</TableHead>
                <TableHead className="text-[#333333] dark:text-white">Installed</TableHead>
                <TableHead className="text-[#333333] dark:text-white">Synced</TableHead>
                <TableHead className="text-[#333333] dark:text-white">Last Sync</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tvDistributionData.map((tv) => (
                <TableRow key={tv.id} className="hover:bg-[#fff3e6] dark:hover:bg-[#3a3a3a]">
                  <TableCell className="font-medium text-[#333333] dark:text-white">{tv.id}</TableCell>
                  <TableCell className="text-[#333333] dark:text-white">{tv.school}</TableCell>
                  <TableCell className="text-[#333333] dark:text-white">{tv.district}</TableCell>
                  <TableCell className="text-[#333333] dark:text-white">{tv.block}</TableCell>
                  <TableCell>
                    {tv.installed ? (
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
                    {tv.synced ? (
                      <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-100">
                        <Check className="mr-1 h-3 w-3" /> Yes
                      </span>
                    ) : (
                      <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-100">
                        No
                      </span>
                    )}
                  </TableCell>
                  <TableCell className="text-[#333333] dark:text-white">{tv.lastSync}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

