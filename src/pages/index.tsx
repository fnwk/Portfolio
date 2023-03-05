import { createRef, useEffect, useState } from "react";

import Hero from "@/components/Hero/Index";
import Header from "@/components/Header/Index";
import CustomCanvas from "@/components/CustomCanvas";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <CustomCanvas>
          <Hero />
        </CustomCanvas>
      </main>
    </>
  );
}
