"use client";

import React from "react";

interface StorylaneSectionProps {
  title: string;
  description?: string;
  demoUrl: string;
}

const StorylaneSection: React.FC<StorylaneSectionProps> = ({
  title,
  description,
  demoUrl,
}) => {
  return (
    <section className="storylane-section">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        {description && <p className="section-description">{description}</p>}
        <div className="demo-container">
          <iframe
            src={demoUrl}
            title="Storylane Demo"
            style={{
              width: "100%",
              height: "100%",
              border: "none",
            }}
            allow="fullscreen"
          />
        </div>
      </div>

      <style jsx>{`
        .storylane-section {
          padding: 80px 0;
          text-align: center;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 20px;
        }

        .section-description {
          font-size: 1.25rem;
          margin-bottom: 40px;
          color: #555;
        }

        .demo-container {
          max-width: 1000px;
          height: 700px;
          margin: 0 auto;
          border: 1px solid #ddd;
          border-radius: 10px;
          overflow: hidden;
        }

        @media (max-width: 768px) {
          .demo-container {
            height: 500px;
          }

          .section-title {
            font-size: 2rem;
          }

          .section-description {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default StorylaneSection;