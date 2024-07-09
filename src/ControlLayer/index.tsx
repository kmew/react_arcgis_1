import React from "react";
import { Button } from "src/components/ui/button";
import { HomeIcon } from "lucide-react";
import { Separator } from "../components/ui/separator";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "src/components/ui/select";

export default function ControlLayer() {
  return (
    <div className="relative z-10 flex items-center justify-center px-4 py-2">
      <Button className=" shadow-sm bg-teal-200 rounded-xl hover:rounded-3xl hover:bg-teal-300 transition-all duration-300 hover:shadow-md">
        <HomeIcon />
      </Button>
      <Separator className="mx-4 h-4 w-[1px]" />
      <Label htmlFor="longitude mr" className="mr-2">
        LONGITUDE:{" "}
      </Label>
      <Input className=" w-[200px]" type="number" placeholder="lon" />
      <Separator className="mx-4 h-4 w-[1px]" />
      <Label htmlFor="latitude" className="mr-2">
        LATIUDE:{" "}
      </Label>
      <Input className=" w-[200px]" type="number" placeholder="lat" />
      <Separator className="mx-4 h-4 w-[1px]" />
      <Label htmlFor="basemap" className="mr-2">
        basemap:{" "}
      </Label>

      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select Basemap" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
