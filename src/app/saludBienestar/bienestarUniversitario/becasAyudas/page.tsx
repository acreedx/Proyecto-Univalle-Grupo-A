import HeaderTitle from "@/app/components/header-title";
import PDFViewer from "@/app/components/pdfViewer";

function BecasAyudasPage() {
  return (
    <div>
      <div className=" mb-5 ">
        <HeaderTitle
          title="Reglamento de Becas"
          direction="/saludBienestar/bienestarUniversitario"
        />
      </div>
      <PDFViewer href="http://localhost:3000/REGLAMENTO DE BECAS.pdf" />
    </div>
  );
}

export default BecasAyudasPage;
