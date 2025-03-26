"use client"

import * as React from "react"
import { Check, ChevronsUpDown, MapPin } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

// Mock data - replace with actual data
const states = [
  { value: "all", label: "All States" },
  { value: "rajasthan", label: "Rajasthan" },
  { value: "maharashtra", label: "Maharashtra" },
  { value: "karnataka", label: "Karnataka" },
  { value: "tamilnadu", label: "Tamil Nadu" },
]

export function RegionFilter() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("all")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between border-[#e0e0e0] dark:border-[#333333] bg-white dark:bg-[#2a2a2a]"
        >
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-[#ff6b00]" />
            {states.find((state) => state.value === value)?.label || "Select region"}
          </div>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 text-[#666666] dark:text-[#999999]" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0 bg-white dark:bg-[#2a2a2a] border-[#e0e0e0] dark:border-[#333333]">
        <Command className="bg-white dark:bg-[#2a2a2a]">
          <CommandInput placeholder="Search region..." className="border-[#e0e0e0] dark:border-[#333333]" />
          <CommandList>
            <CommandEmpty>No region found.</CommandEmpty>
            <CommandGroup>
              {states.map((state) => (
                <CommandItem
                  key={state.value}
                  value={state.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                  className="text-[#333333] dark:text-white hover:bg-[#fff3e6] dark:hover:bg-[#3a3a3a]"
                >
                  <Check
                    className={cn("mr-2 h-4 w-4 text-[#ff6b00]", value === state.value ? "opacity-100" : "opacity-0")}
                  />
                  {state.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

