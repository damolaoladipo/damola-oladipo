import { redirect } from "next/navigation";

export default function MyResume() {
  redirect("./damola-resume.pdf");
  return null;
}
