import { getProjectsBySlug, getAllProjects } from "@/lib/markdown";
import Image from "next/image";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const projects = getAllProjects(["slug"]);
  return projects.map((p) => ({ slug: p.slug as string }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = getProjectsBySlug(slug, ["title", "introduction"]);
  if (!project?.title) return { title: "Not Found" };
  return {
    title: project.title,
    description: project.introduction ?? "",
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectsBySlug(slug, [
    "title",
    "dateRange",
    "coverImage",
    "introduction",
    "role",
    "designProcess",
    "gallery",
    "outcome",
    "technology",
    "website",
  ]);

  if (!project?.title) notFound();

  const designProcess: string[] = Array.isArray(project.designProcess)
    ? (project.designProcess as string[])
    : [];

  const gallery: string[] = Array.isArray(project.gallery)
    ? (project.gallery as string[])
    : [];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[824px] mx-auto px-6 py-12 md:py-20 flex flex-col gap-0">

        {/* Hero */}
        <div className="pb-10 md:pb-14">
          <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold leading-tight tracking-tight text-foreground">
            {project.title as string}
          </h1>
        </div>

        {/* Divider + Cover Image */}
        <div className="flex flex-col gap-6">
          <hr className="border-t border-[#e9e9e7] dark:border-border" />

          {project.coverImage && (
            <div className="relative w-full aspect-square rounded-[11px] overflow-hidden bg-muted">
              <Image
                src={project.coverImage as string}
                alt={project.title as string}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 824px"
                priority
              />
            </div>
          )}
        </div>

        {/* Content sections */}
        <div className="flex flex-col mt-12 md:mt-16">

          {/* Introduction */}
          {project.introduction && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 py-8 border-b border-[#e9e9e7] dark:border-border">
              <h2 className="text-2xl md:text-[30px] font-semibold leading-snug text-foreground">
                Introduction
              </h2>
              <p className="text-base leading-relaxed text-[#787673] dark:text-muted-foreground">
                {project.introduction as string}
              </p>
            </div>
          )}

          {/* My Role */}
          {project.role && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 py-8 border-b border-[#e9e9e7] dark:border-border">
              <h2 className="text-2xl md:text-[30px] font-semibold leading-snug text-foreground">
                My Role
              </h2>
              <p className="text-base leading-relaxed text-[#787673] dark:text-muted-foreground">
                {project.role as string}
              </p>
            </div>
          )}

          {/* Design Process */}
          {designProcess.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 py-8 border-b border-[#e9e9e7] dark:border-border">
              <h2 className="text-2xl md:text-[30px] font-semibold leading-snug text-foreground">
                Design Process
              </h2>
              <ol className="flex flex-col gap-2 text-base leading-relaxed text-[#787673] dark:text-muted-foreground list-decimal list-inside">
                {designProcess.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            </div>
          )}

          {/* Output */}
          {gallery.length > 0 && (
            <div className="flex flex-col gap-6 py-8 border-b border-[#e9e9e7] dark:border-border">
              <h2 className="text-2xl md:text-[30px] font-semibold leading-snug text-foreground">
                Output
              </h2>
              <div className="flex flex-col gap-4">
                {gallery.map((src, i) => (
                  <div
                    key={i}
                    className="relative w-full overflow-hidden rounded-[11px] bg-muted"
                    style={{ aspectRatio: i === 0 ? "16/9" : "4/3" }}
                  >
                    <Image
                      src={src}
                      alt={`Output ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 824px"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Outcome */}
          {project.outcome && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 py-8">
              <h2 className="text-2xl md:text-[30px] font-semibold leading-snug text-foreground">
                Outcome
              </h2>
              <p className="text-base leading-relaxed text-[#787673] dark:text-muted-foreground">
                {project.outcome as string}
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
