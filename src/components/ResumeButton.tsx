import React, { useRef, useState } from 'react';
import { generatePDF } from 'react-to-pdf';
import ResumePDF from './ResumePDF';

const ResumeButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const resumeRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (resumeRef.current) {
      // Generate PDF from the component
      await generatePDF(resumeRef, {
        filename: 'PrinceStephen-Resume.pdf',
        page: { 
          margin: 20,
          format: 'A4',
          orientation: 'portrait'
        }
      });
    }
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <button
        onClick={openModal}
        className="flex items-center gap-2 px-5 py-2 bg-primary/10 text-primary rounded-lg font-medium hover:bg-primary/20 transition-colors"
      >
        <i className="fa-solid fa-file-pdf" />
        Resume PDF
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-card text-card-foreground rounded-lg shadow-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="p-4 border-b border-border flex justify-between items-center">
              <h2 className="text-xl font-semibold">Resume Preview</h2>
              <div className="flex gap-2">
                <button
                  onClick={handleDownload}
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center gap-2"
                >
                  <i className="fa-solid fa-download" />
                  Download PDF
                </button>
                <button
                  onClick={closeModal}
                  className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/70 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
            <div className="p-4 bg-background border">
              <ResumePDF ref={resumeRef} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ResumeButton;
