"use client";
import { useEffect, useRef } from "react";
import WebViewer, { WebViewerInstance } from "@pdftron/webviewer";

interface PDFViewerProps {
  href: string;
}
function PDFViewer({ href }: PDFViewerProps) {
  const viewer: any = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    import("@pdftron/webviewer").then(() => {
      if (viewer.current) {
        WebViewer(
          {
            path: "/lib",
            initialDoc: href,
          },
          viewer.current
        ).then((instance) => {
          // you can now call WebViewer APIs here...
          instance.UI.disableElements(["toolbarGroup-Shapes"]);
          instance.UI.disableElements(["toolbarGroup-Edit"]);
          instance.UI.disableElements(["toolbarGroup-Insert"]);
          instance.UI.disableElements(["toolbarGroup-Forms"]);
          instance.UI.disableElements(["toolbarGroup-Annotate"]);
          instance.UI.disableElements(["toolbarGroup-FillAndSign"]);
          instance.UI.setHeaderItems((header) => {
            const items = header.getItems().slice(4, -7);
            header.update(items);
          });
        });
      }

    });
  }, []);

  return (
    <div>
      <div className="webviewer" ref={viewer} style={{ height: "100vh" }}></div>
    </div>
  );
}

export default PDFViewer;
