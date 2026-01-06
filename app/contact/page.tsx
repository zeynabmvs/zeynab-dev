import type { Metadata } from "next";
import { profile } from "@/app/lib/data";
import Link from "next/link";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${profile.name}`,
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <div className="space-y-6">
        <p className="text-muted dark:text-muted-dark">
          Feel free to reach out if you&apos;d like to collaborate, have a
          question, or just want to connect!
        </p>
        <div className="card p-6 space-y-4">
          <div>
            <h2 className="text-xl font-semibold mb-2">Email</h2>
            <Link
              href={profile.contactLink}
              className="inline-flex items-center gap-2 text-primary dark:text-primary-dark hover:underline"
            >
              <EnvelopeIcon className="w-5 h-5" />
              {profile.contactLink.replace("mailto:", "")}
            </Link>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Social Links</h2>
            <div className="flex flex-col gap-2">
              {profile.links
                .filter((link) => link.active)
                .map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary dark:text-primary-dark hover:underline"
                  >
                    {link.icon}
                    {link.label}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
