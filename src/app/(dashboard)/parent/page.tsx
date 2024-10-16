import Announcements from "@/components/users/Announcements";
import BigCalendarContainer from "@/components/users/BigCalendarContainer";
import db from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

const ParentPage = async () => {
  const { userId } = auth();
  const currentUserId = userId;

  const students = await db.student.findMany({
    where: {
      parentId: currentUserId!,
    },
  });

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 xl:flex-row">
      {/* LEFT */}
      <div className="flex w-full">
        {students.map((student) => (
          <div className="w-full xl:w-2/3" key={student.id}>
            <div className="h-full rounded-md bg-white p-4">
              <h1 className="text-xl font-semibold">
                Schedule ({student.name + " " + student.surname})
              </h1>
              <BigCalendarContainer type="classId" id={student.classId} />
            </div>
          </div>
        ))}
      </div>
      {/* RIGHT */}
      <div className="flex w-full flex-col gap-8 xl:w-1/3">
        <Announcements />
      </div>
    </div>
  );
};

export default ParentPage;
