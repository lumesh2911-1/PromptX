import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-md">{children}</div>
    </section>
  );
}
