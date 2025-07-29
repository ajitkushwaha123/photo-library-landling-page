"use client";

import { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";

export default function AppShell({ children }) {
  return (
    <>
      <Header />
      <div className="pt-12 min-h-screen">{children}</div>
      <Footer />
    </>
  );
}
