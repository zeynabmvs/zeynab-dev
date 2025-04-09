import React from "react";
import Image from "next/image";
import { techStacks } from "../data/constants";

type TechStackItemProps = {
  label: string;
  icon: React.ReactNode;
};

const TechStackItem: React.FC<TechStackItemProps> = ({ label, icon }) => {
  return (
    <div className="transition-transform -ml-2 first:ml-0" role="listitem">
      <div className="w-[40px] h-[40px] rounded-full border border-zinc-200 dark:border-zinc-700 flex items-center justify-center bg-white">
        {icon}
      </div>
    </div>
  );
};

interface TechStackListProps {
  techStackIds: number[];
}

export const TechStackList: React.FC<TechStackListProps> = ({
  techStackIds,
}) => {
  if (!techStackIds?.length) return null;
  return (
    <div
      className="flex items-center"
      role="list"
      aria-label="Technology stack"
    >
      {techStackIds.map((id) => {
        const stack = techStacks[id];
        if (!stack) return null;

        return (
          <TechStackItem
            key={stack.id}
            label={stack.label}
            icon={
              <Image
                src={stack.icon}
                alt={stack.label}
                width={22}
                height={22}
                // className="size-5"
              />
            }
          />
        );
      })}
    </div>
  );
};
