"use server";

import { ClassSchema } from "@/app/schemas/formValidationSchemas";
import db from "@/lib/db";
import { revalidatePath } from "next/cache";

type CurrentState = { success: boolean; error: boolean };

export const createClass = async (
  currentState: CurrentState,
  data: ClassSchema,
) => {
  try {
    await db.class.create({
      data,
    });

    // revalidatePath("/list/classes");
    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

export const updateClass = async (
  currentState: CurrentState,
  data: ClassSchema,
) => {
  try {
    await db.class.update({
      where: {
        id: data.id,
      },
      data,
    });

    // revalidatePath("/list/classes");
    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

export const deleteClass = async (
  currentState: CurrentState,
  data: FormData,
) => {
  const id = data.get("id") as string;
  try {
    await db.class.delete({
      where: {
        id: parseInt(id),
      },
    });

    // revalidatePath("/list/classes");
    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};
