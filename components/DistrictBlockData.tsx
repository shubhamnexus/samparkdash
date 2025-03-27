"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface DistrictData {
  district: string;
  totalBlocks: number;
  totalPrograms: number;
  activePrograms: number;
  completedPrograms: number;
}

interface BlockData {
  block: string;
  district: string;
  totalPrograms: number;
  activePrograms: number;
  completedPrograms: number;
}

export function DistrictBlockData() {
  const [viewType, setViewType] = useState<"district" | "block">("district");
  const [selectedDistrict, setSelectedDistrict] = useState<string>("");

  // Sample data - Replace with actual data from your API
  const districtData: DistrictData[] = [
    {
      district: "District 1",
      totalBlocks: 10,
      totalPrograms: 50,
      activePrograms: 20,
      completedPrograms: 30,
    },
    // Add more district data
  ];

  const blockData: BlockData[] = [
    {
      block: "Block 1",
      district: "District 1",
      totalPrograms: 5,
      activePrograms: 2,
      completedPrograms: 3,
    },
    // Add more block data
  ];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Data District / Blockwise</CardTitle>
        <CardDescription>
          View program data organized by district and block
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-4 mb-6">
          <Select
            value={viewType}
            onValueChange={(value: "district" | "block") => setViewType(value)}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select view type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="district">District View</SelectItem>
              <SelectItem value="block">Block View</SelectItem>
            </SelectContent>
          </Select>

          {viewType === "block" && (
            <Select
              value={selectedDistrict}
              onValueChange={setSelectedDistrict}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select district" />
              </SelectTrigger>
              <SelectContent>
                {districtData.map((district) => (
                  <SelectItem key={district.district} value={district.district}>
                    {district.district}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{viewType === "district" ? "District" : "Block"}</TableHead>
              <TableHead>Total Programs</TableHead>
              <TableHead>Active Programs</TableHead>
              <TableHead>Completed Programs</TableHead>
              {viewType === "district" && <TableHead>Total Blocks</TableHead>}
            </TableRow>
          </TableHeader>
          <TableBody>
            {viewType === "district"
              ? districtData.map((district) => (
                  <TableRow key={district.district}>
                    <TableCell>{district.district}</TableCell>
                    <TableCell>{district.totalPrograms}</TableCell>
                    <TableCell>{district.activePrograms}</TableCell>
                    <TableCell>{district.completedPrograms}</TableCell>
                    <TableCell>{district.totalBlocks}</TableCell>
                  </TableRow>
                ))
              : blockData
                  .filter((block) => !selectedDistrict || block.district === selectedDistrict)
                  .map((block) => (
                    <TableRow key={block.block}>
                      <TableCell>{block.block}</TableCell>
                      <TableCell>{block.totalPrograms}</TableCell>
                      <TableCell>{block.activePrograms}</TableCell>
                      <TableCell>{block.completedPrograms}</TableCell>
                    </TableRow>
                  ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
} 