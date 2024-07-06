import React from "react";
import { Button } from "src/components/ui/button";
import { HomeIcon } from "lucide-react";
import { Separator } from "../components/ui/separator";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

export default function ControlLayer() {
  return (
    <div className="relative z-10 flex items-center justify-center px-4 py-2">
      <Button className=" shadow-sm bg-teal-200 rounded-xl hover:rounded-3xl hover:bg-teal-300 transition-all duration-300 hover:shadow-md">
        <HomeIcon />
      </Button>
      <Separator className="mx-4 h-4 w-[1px]" />
      <Label htmlFor="longitude mr" className="mr-2">LONGITUDE: </Label>
      <Input className=" w-[200px]" type="number" placeholder="lon"  />
      <Separator className="mx-4 h-4 w-[1px]" />
      <Label htmlFor="latitude" className="mr-2">LATIUDE: </Label>
      <Input className=" w-[200px]" type="number" placeholder="lat" />
    </div>
  );
}
