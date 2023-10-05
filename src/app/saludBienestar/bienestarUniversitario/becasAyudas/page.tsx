"use client";

import HeaderTitle from "@/app/components/header-title";
import dynamic from "next/dynamic";
import { useEffect } from "react";

const DynamicPDFViewer = dynamic(() => import("@/app/components/pdfViewer"), {
  ssr: false,
});

function BecasAyudasPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className=" mb-5 ">
        <HeaderTitle
          title="Reglamento de Becas"
          direction="/saludBienestar/bienestarUniversitario"
        />
      </div>
      <DynamicPDFViewer href="/REGLAMENTO DE BECAS.pdf" />
    </div>
  );
}

export default BecasAyudasPage;
