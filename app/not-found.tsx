import { NotFoundNavigation } from "@/app/components/NotFoundNavigation";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] container mx-auto px-4 py-16 max-w-5xl">
      <div className="p-8 text-center space-y-6">
        <h1 className="text-4xl font-bold">404</h1>
        <h2 className="text-2xl font-semibold">Page Not Found</h2>
        <p className="text-zinc-500">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <NotFoundNavigation />
      </div>
    </div>
  );
}
