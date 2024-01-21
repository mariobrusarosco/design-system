import React from "react";

interface Props {
  children: React.ReactNode;
}

export const AppSidebar = ({ children }: Props) => {
  return (
    <aside className="flex flex-col bg-primary-base shadow-right z-[2] min-w-[95px] h-screen">
      {children}
    </aside>
  );
};
