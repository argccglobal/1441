"use client";

export const PdfViewer = ({
  url = "https://research.google.com/pubs/archive/44678.pdf#toolbar=0",
}: {
  url: string;
}) => {
  return (
    <div className="w-full">
      <iframe style={{ zoom: 1 }} src={url} height="700" width="100%"></iframe>
      {/* <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Viewer
          defaultScale={1}
          fileUrl={url}
          plugins={[defaultLayoutPluginInstance]}
        />
      </Worker> */}
    </div>
  );
};
