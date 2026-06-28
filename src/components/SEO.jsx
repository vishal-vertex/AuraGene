import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, canonical }) => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Auragene Technologies",
    alternateName: "AuraGene",
    url: "https://auragene.vercel.app",
    logo: "https://auragene.vercel.app/logo.png",
    image: "https://auragene.vercel.app/logo.png",
    description:
      "Auragene Technologies provides Web Development, SaaS Platforms, AI Automation, ERP Solutions, Mobile Apps and Custom Software Development.",
    email: "auragene.tech@gmail.com",
    telephone: "+91-9655760580",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    founder: {
      "@type": "Person",
      name: "Vishal",
    },
  };

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{title}</title>

      <meta name="description" content={description} />

      <meta
        name="keywords"
        content="Auragene, Auragene Technologies, Web Development, Software Development, SaaS, AI Automation, ERP Development, React, Node.js, UI UX Design, Mobile App Development, Cloud Solutions"
      />

      <meta name="author" content="Auragene Technologies" />

      <meta name="robots" content="index, follow" />

      <meta name="theme-color" content="#000020" />

      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />

      <meta property="og:site_name" content="Auragene Technologies" />

      <meta property="og:title" content={title} />

      <meta property="og:description" content={description} />

      <meta property="og:url" content={canonical} />

      <meta
        property="og:image"
        content="https://auragene.vercel.app/logo.png"
      />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:title" content={title} />

      <meta name="twitter:description" content={description} />

      <meta
        name="twitter:image"
        content="https://auragene.vercel.app/logo.png"
      />

      {/* Schema.org */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;