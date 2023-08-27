import React, { useRef, useEffect, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import PDFDownloadButton from "../../smallComponents/PDFDownloadButton";

const HTMLCanvasViewer = ({ htmlContent }) => {
  const canvasRef = useRef(null);
  const [pdfData, setPDFData] = useState(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvasElement = canvasRef.current;

    // Create an async function to use await
    const generatePDF = async () => {
      const canvas = await html2canvas(canvasElement);
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const width = pdf.internal.pageSize.getWidth();
      const height = (canvas.height * width) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, width, height);
      setPDFData(pdf.output("blob"));
    };

    generatePDF(); // Call the async function
  }, [htmlContent]);

  return (
    <div>
      <div ref={canvasRef} style={{ width: "100%", height: "100%" }}>
        {htmlContent}
      </div>
      <PDFDownloadButton canvasRef={canvasRef} pdfData={pdfData} />
    </div>
  );
};

export default HTMLCanvasViewer;
