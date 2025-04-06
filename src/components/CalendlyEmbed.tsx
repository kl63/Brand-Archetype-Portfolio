"use client";

import { useEffect } from 'react';
import Script from 'next/script';

interface CalendlyEmbedProps {
  url: string;
  styles?: React.CSSProperties;
}

export default function CalendlyEmbed({ url, styles = {} }: CalendlyEmbedProps) {
  useEffect(() => {
    // Initialize Calendly when component mounts
    const loadCalendly = () => {
      if ((window as any).Calendly) {
        (window as any).Calendly.initInlineWidget({
          url,
          parentElement: document.getElementById('calendly-embed'),
          prefill: {},
          utm: {},
        });
      }
    };

    // If Calendly is already loaded, initialize it
    if ((window as any).Calendly) {
      loadCalendly();
    }

    return () => {
      // Clean up any Calendly related elements when component unmounts
      const calendlyElements = document.querySelectorAll('.calendly-inline-widget, .calendly-badge-widget');
      calendlyElements.forEach(el => el.remove());
    };
  }, [url]);

  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
        onLoad={() => {
          if ((window as any).Calendly) {
            (window as any).Calendly.initInlineWidget({
              url,
              parentElement: document.getElementById('calendly-embed'),
              prefill: {},
              utm: {},
            });
          }
        }}
      />
      <div
        id="calendly-embed"
        style={{
          minWidth: '320px',
          height: '630px',
          ...styles,
        }}
      />
    </>
  );
}
