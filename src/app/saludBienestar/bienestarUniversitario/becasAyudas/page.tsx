"use client";

import HeaderTitle from "@/app/components/header-title";
import PDFViewer from "@/app/components/pdfViewer";
import { useEffect } from "react";

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
      <PDFViewer href="/REGLAMENTO DE BECAS.pdf" />
    </div>
  );
}

export default BecasAyudasPage;
