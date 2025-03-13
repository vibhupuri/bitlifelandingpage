import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

export function Contact() {
  const [category, setCategory] = useState('')
  const [meetingType, setMeetingType] = useState('zoom')
  const [categoryOpen, setCategoryOpen] = useState(false)
  const [meetingOpen, setMeetingOpen] = useState(false)

  return (
    <div className="grid md:grid-cols-2 gap-6 p-8">
      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-6">
            <h4 className="text-lg font-semibold">50+ Engine Saves</h4>
            <p className="text-sm text-gray-500">Highlighting our industry expertise and technical excellence.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h4 className="text-lg font-semibold">377 Project Solutions</h4>
            <p className="text-sm text-gray-500">Providing top-tier solutions for a range of business challenges.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h4 className="text-lg font-semibold">Training Location</h4>
            <p className="text-sm text-gray-500">Flexible and accessible locations to meet your needs.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h4 className="text-lg font-semibold">Project Locations</h4>
            <p className="text-sm text-gray-500">Expanding our reach to provide excellent service.</p>
          </CardContent>
        </Card>
      </div>

      {/* Contact Form */}
      <div className="bg-white p-6 shadow-md rounded-lg">
        <h3 className="text-xl font-bold mb-4">Contact Is <span className="text-red-500">Elon Musk</span></h3>
        <div className="space-y-4">
          <Select value={category} onChange={setCategory} onOpenChange={setCategoryOpen}>
            <SelectTrigger onClick={() => setCategoryOpen(!categoryOpen)}>
              <SelectValue>{category || 'Select Category'}</SelectValue>
            </SelectTrigger>
            <SelectContent show={categoryOpen}>
              <SelectItem value="consulting" onSelect={() => { setCategory('Business Consulting'); setCategoryOpen(false); }}>Business Consulting</SelectItem>
              <SelectItem value="development" onSelect={() => { setCategory('Software Development'); setCategoryOpen(false); }}>Software Development</SelectItem>
              <SelectItem value="training" onSelect={() => { setCategory('Professional Training'); setCategoryOpen(false); }}>Professional Training</SelectItem>
              <SelectItem value="support" onSelect={() => { setCategory('Technical Support'); setCategoryOpen(false); }}>Technical Support</SelectItem>
            </SelectContent>
          </Select>
          <div className="flex gap-4">
            <Input placeholder="Phone" className="flex-1" />
            <Input placeholder="Email" className="flex-1" />
          </div>
          <Select value={meetingType} onChange={setMeetingType} onOpenChange={setMeetingOpen}>
            <SelectTrigger onClick={() => setMeetingOpen(!meetingOpen)}>
              <SelectValue>{meetingType === 'zoom' ? 'Zoom' : 'Google Meet'}</SelectValue>
            </SelectTrigger>
            <SelectContent show={meetingOpen}>
              <SelectItem value="zoom" onSelect={() => { setMeetingType('zoom'); setMeetingOpen(false); }}>Zoom</SelectItem>
              <SelectItem value="meet" onSelect={() => { setMeetingType('meet'); setMeetingOpen(false); }}>Google Meet</SelectItem>
            </SelectContent>
          </Select>
          <Button className="w-full bg-red-500 hover:bg-red-600 text-white py-3 text-lg font-medium transition-all duration-200 hover:shadow-lg">
            Connect
          </Button>
        </div>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-gray-100 p-4 flex justify-between items-center text-gray-700 text-sm">
      <div className="flex items-center space-x-4">
        <span className="flex items-center">
          📍 Locations
        </span>
        <span>Disclaimer</span>
        <span>Design & Trademarks</span>
        <span>Copyright & Customer Satisfaction</span>
        <span>Entire Refunds Policy</span>
      </div>
      <div className="flex items-center space-x-2">
        <span>Connect &nbsp; with</span>
        <span className="font-bold">bitlife</span>
      </div>
    </footer>
  );
}