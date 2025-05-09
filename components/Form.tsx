import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "./ui/textarea"

export function CardWithForm() {
  return (
    <div className="relative h-screen max-2xl mx-auto flex items-center justify-center pt-10 ">
            <div className="">
      <div className="absolute -top-9 left-0 w-96 h-96 bg-violet-500/10 hidden md:block rounded-full blur-3xl"></div>
      <div className="absolute right-0 -bottom-9 w-96 h-96 bg-violet-500/10 md:bg-pink-500/15 rounded-full blur-3xl"></div>
      </div>
    <Card className="w-[350px] text-center">
      <CardHeader>
        <CardTitle>Get in Touch</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5 gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" type="text" placeholder="John Does" required/>
              <Label htmlFor="name">Email</Label>
              <Input id="email" type="email" placeholder="user@gmail.com" required />
              <Label htmlFor="name">Company</Label>
              <Input id="company" type="text" placeholder="Company" required />
            </div>
            <div className="flex justify-between space-y-1.5 items-center">
                <div className="flex flex-col gap-1">              
                  <Label htmlFor="framework">License Type</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="Microsoft Office">Microsoft Office</SelectItem>
                  <SelectItem value="Adobe Creative Cloud">Adobe Creative Cloud</SelectItem>
                  <SelectItem value="Autodesk">Autodesk</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select></div>
              <div className="pt-2" > 
                <Button>Touch</Button>
              </div>
            </div>
            <div>
              <Textarea placeholder="Feel free to ask anything" />
            </div>
          </div>
        </form>
      </CardContent>

    </Card>
    </div>
  )
}
