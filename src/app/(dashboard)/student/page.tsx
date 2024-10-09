import Announcements from "@/components/users/Announcements";
import BigCalendar from "@/components/users/BigCalendar";
import EventCalendar from "@/components/users/EventCalendar";
import React from "react";

const StudentPage = () => {
  return (
    <div className="flex h-lvh flex-col gap-4 px-4 pb-12 xl:flex-row">
      {/* Left */}
      <div className="w-full bg-blue-50 xl:w-2/3">
        <div className="h-full rounded-md bg-white p-4">
          <h1 className="text-xl font-semibold">Schedule (4A)</h1>
          <BigCalendar />
        </div>
      </div>

      {/* Right */}
      <div className="flex w-full flex-col gap-8 bg-green-50 xl:w-1/3">
        <EventCalendar />
        <Announcements />
      </div>
    </div>
  );
};

export default StudentPage;
