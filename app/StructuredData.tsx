const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Bluewaves Boutique",
    "url": "https://bluewaves.boutique",
    "logo": "https://bluewaves.boutique/bluewaves-logo.webp",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "contactType": "sales",
        "email": "hello@bluewaves.boutique"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can Bluewaves build AI tools for my team?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bluewaves crafts AI tools within short \"Wave\" engagements, focusing on real workflows rather than slideware."
        }
      },
      {
        "@type": "Question",
        "name": "How do Waves work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Each Wave is a focused 3-6 week delivery cadence with weekly reveals and production-ready outputs."
        }
      },
      {
        "@type": "Question",
        "name": "Who leads Bluewaves?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bluewaves is led by Bertrand, Érica, and Bernardo—builders who prefer delivering working tools over strategies."
        }
      }
    ]
  }
];

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
