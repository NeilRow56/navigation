import Announcements from "@/components/users/Announcements";
import BigCalendarContainer from "@/components/users/BigCalendarContainer";
import EventCalendar from "@/components/users/EventCalendar";
import db from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

const StudentPage = async () => {
  const { userId } = auth();

  const classItem = await db.class.findMany({
    where: {
      students: { some: { id: userId! } },
    },
  });

  return (
    <div className="flex flex-col gap-4 p-4 xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        <div className="h-full rounded-md bg-white p-4">
          <h1 className="text-xl font-semibold">Schedule {classItem[0].id}</h1>
          <BigCalendarContainer type="classId" id={classItem[0].id} />
        </div>
      </div>
      {/* RIGHT */}
      <div className="flex w-full flex-col gap-8 xl:w-1/3">
        <EventCalendar />
        <Announcements />
      </div>
    </div>
  );
};

export default StudentPage;
