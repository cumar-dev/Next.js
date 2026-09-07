"use server";

type formState = {
  success: boolean;
  message: string;
  error: string;
};
// export const useForm = (formData: FormData) => {
//   const name = formData.get("name") as string;
// };

export const form = async (prevState: formState, formData: FormData): Promise<formState> => {
  const name = formData.get("name") as string;
  if (!name || name.trim() === "") {
    return { success: false, message: "", error: "name is not get yet" };
  }
  return { success: true, message: `Hello ${name} from the server`, error: "" };
};
