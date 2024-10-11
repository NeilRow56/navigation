import Announcements from "@/components/users/Announcements";

import AttendanceChartContainer from "@/components/users/AttendanceChartContainer";

import CountChartContainer from "@/components/users/CountChartContainer";
import EventCalendar from "@/components/users/EventCalendar";
import FinanceChart from "@/components/users/FinanceChart";
import UserCard from "@/components/users/UserCard";
import React from "react";

const AdminPage = () => {
  return (
    <div className="flex flex-col gap-4 bg-secondary p-4 lg:flex-row">
      {/* Left */}
      <div className="flex w-full flex-col gap-8 lg:w-2/3">
        {/* User Cards */}
        <div className="flex flex-wrap justify-between gap-4">
          <UserCard type="admin" />
          <UserCard type="teacher" />
          <UserCard type="student" />
          <UserCard type="parent" />
        </div>
        {/* MIDDLE CHARTS */}
        <div className="flex flex-col gap-4 lg:flex-row">
          {/* COUNT CHART */}
          <div className="h-[450px] w-full lg:w-1/3">
            <CountChartContainer />
          </div>
          {/* ATTENDANCE CHART */}
          <div className="h-[450px] w-full lg:w-2/3">
            <AttendanceChartContainer />
          </div>
        </div>
        {/* BOTTOM CHART */}
        <div className="h-[500px] w-full">
          <FinanceChart />
        </div>
      </div>

      {/* Right */}
      <div className="flex w-full flex-col gap-8 bg-green-50 lg:w-1/3">
        <EventCalendar />
        <Announcements />
      </div>
    </div>
  );
};

export default AdminPage;
