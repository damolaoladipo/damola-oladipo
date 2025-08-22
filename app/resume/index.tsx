import { redirect } from "next/navigation";

export default function MyResume() {
  redirect("/resume.pdf");
  return null;
}
