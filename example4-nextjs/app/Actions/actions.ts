"use server";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function logIn(formData: FormData) {
  const role = formData.get("role") as string;
  (await cookies()).set("role", role);
  (await cookies()).set("auth", "true");
  if (role === "admin") {
    redirect("/Admin");
  }
  if (role === "user") {
    redirect("/Dashboard");
  }
}

export async function logout() {
  const cookieStore = await cookies();

  cookieStore.delete("auth");
  cookieStore.delete("role");

  redirect("/Register");
}
