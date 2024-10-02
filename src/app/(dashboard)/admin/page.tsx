import Announcements from "@/components/users/Announcements";
import AttendanceChart from "@/components/users/AttendanceChart";
import CountChart from "@/components/users/CountChart";
import EventCalendar from "@/components/users/EventCalendar";
import FinanceChart from "@/components/users/FinanceChart";
import UserCard from "@/components/users/UserCard";
import React from "react";

const AdminPage = () => {
  return (
    <div className="flex flex-col p-4 gap-4 lg:flex-row bg-secondary">
      {/* Left */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* User Cards */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="Students" />
          <UserCard type="Teachers" />
          <UserCard type="Parents" />
          <UserCard type="Admin Staff" />
        </div>
        {/* MIDDLE CHARTS */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* COUNT CHART */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>
          {/* ATTENDANCE CHART */}
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceChart />
          </div>
        </div>
        {/* BOTTOM CHART */}
        <div className="w-full h-[500px]">
          <FinanceChart />
        </div>
      </div>

      {/* Right */}
      <div className="w-full flex flex-col gap-8 lg:w-1/3 bg-green-50">
        <EventCalendar />
        <Announcements />
      </div>
    </div>
  );
};

export default AdminPage;
