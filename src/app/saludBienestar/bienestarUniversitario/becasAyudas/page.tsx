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
      <PDFViewer href="https://pdftron.s3.amazonaws.com/downloads/pl/demo-annotated.pdf" />
    </div>
  );
}

export default BecasAyudasPage;
