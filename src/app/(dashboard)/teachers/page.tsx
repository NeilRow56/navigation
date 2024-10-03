import Announcements from "@/components/users/Announcements";
import BigCalendar from "@/components/users/BigCalendar";

import React from "react";

const TeacherPage = () => {
  return (
    <div className="flex h-lvh flex-col gap-4 p-4 xl:flex-row">
      {/* Left */}
      <div className="h-[vh90] w-full bg-blue-50 xl:w-2/3">
        <div className="h-full rounded-md bg-white p-4">
          <h1 className="text-xl font-semibold">Schedule </h1>
          <BigCalendar />
        </div>
      </div>

      {/* Right */}
      <div className="flex w-full flex-col gap-8 bg-green-50 xl:w-1/3">
        <Announcements />
      </div>
    </div>
  );
};

export default TeacherPage;
