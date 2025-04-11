import React from "react";
import Image from "next/image";
import Button from "@/app/components/Button";

type AvatarProps = { src: string; alt: string };
const Avatar: React.FC<AvatarProps> = ({ src, alt }) => (
  <div className="relative w-12 h-12 md:w-24 md:h-24">
    <Image
      className="rounded-full object-cover border border-zinc-500"
      src={src}
      alt={alt}
      width={96}
      height={96}
      // fill
      // quality={100}
      // sizes="(max-width: 768px) 48px, 96px"
    />
  </div>
);

type ProfileHeaderProps = { name: string; role: string; avatar: string };
const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  name,
  role,
  avatar,
}) => (
  <div className="flex flex-row md:flex-col items-center md:items-start w-full gap-2 md:gap-4">
    <Avatar src={avatar} alt={`${name}'s profile`} />
    <div className="flex flex-col items-start">
      <h1 className="md:mt-2 text-lg md:text-xl font-bold">{name}</h1>
      <p className="text-xs md:text-sm font-medium text-muted">{role}</p>
    </div>
  </div>
);

type ProfileBioProps = { bio: string };
const ProfileBio: React.FC<ProfileBioProps> = ({ bio }) => (
  <p className="mt-2 text-left text-xs md:text-sm text-muted">{bio}</p>
);

type ProfileLinksProps = {
  links: {
    href: string;
    label: string;
    icon: React.ReactNode;
    active: boolean;
  }[];
};

const ProfileLinks: React.FC<ProfileLinksProps> = ({ links }) => (
  <div className="mt-4 flex flex-col space-y-1.5 border-t pt-3 border-zinc-300">
    {links
      .filter((link) => link.active)
      .map(({ href, label, icon }) => (
        <a
          key={href}
          target="_blank"
          className=" flex items-center gap-2 group"
          href={href}
        >
          {icon}
          <p className="text-sm duration-200 ease-linear text-muted group-hover:text-primary">
            /{label}
          </p>
        </a>
      ))}
  </div>
);

type ProfileCardProps = {
  name: string;
  role: string;
  avatar: string;
  bio: string;
  contactLink: string;
  links: {
    href: string;
    label: string;
    icon: React.ReactNode;
    active: boolean;
  }[];
};

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  role,
  avatar,
  bio,
  contactLink,
  links,
}) => (
  <div className="card p-4 md:p-6">
    <ProfileHeader name={name} role={role} avatar={avatar} />
    <ProfileBio bio={bio} />
    <div className="mt-4 mb-4">
      <Button label="Contact Me" href={contactLink} />
    </div>
    <ProfileLinks links={links} />
  </div>
);

export { Avatar, ProfileHeader, ProfileBio, ProfileLinks, ProfileCard };
