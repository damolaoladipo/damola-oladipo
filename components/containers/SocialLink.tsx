import { ISocialLink } from "@/utils/interfaces"
import Link from "next/link"

const SocialLink =(data: ISocialLink) => {

    const { icon: Icon, ...props } = data
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-neutral-500 transition group-hover:fill-neutral-600 dark:fill-neutral-400 dark:group-hover:fill-neutral-300" />
    </Link>
  )
}

export default SocialLink