import React, { useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const PDFDownloadButton = ({ canvasRef, pdfData }) => {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownloadPDF = async () => {
    if (!pdfData && canvasRef.current) {
      const canvas = await html2canvas(canvasRef.current);
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const width = pdf.internal.pageSize.getWidth();
      const height = (canvas.height * width) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, width, height);
      setDownloaded(pdf.output("blob"));
    }

    if (pdfData) {
      const a = document.createElement("a");
      a.href = URL.createObjectURL(pdfData);
      a.download = "converted_content.pdf";
      a.click();
    }
  };

  return (
    <div>
      <button className="p-2 me-2 bg-red-300" onClick={handleDownloadPDF} disabled={!pdfData || downloaded}>
        Download PDF
      </button>
    </div>
  );
};

export default PDFDownloadButton;
