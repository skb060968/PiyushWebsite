// Global type definitions for the project

declare module '*.json' {
  const value: any;
  export default value;
}

declare module '@/public/data/content.json' {
  const content: {
    siteInfo: {
      siteName: string;
      tagline: string;
      description: string;
      copyright: string;
    };
    hero: {
      title: string;
      subtitle: string;
      description: string;
      primaryButtonText: string;
      secondaryButtonText: string;
    };
    about: {
      heading: string;
      paragraph1: string;
      paragraph2: string;
      stats: {
        experience: { label: string; value: string };
        projects: { label: string; value: string };
        clients: { label: string; value: string };
        awards: { label: string; value: string };
      };
    };
    contact: {
      heroTitle: string;
      heroDescription: string;
      heading: string;
      description: string;
      email: string;
      phone: string;
      location: string;
      instagram: string;
      responseTime: string;
      nextAvailable: string;
      formHeading: string;
      submitButtonText: string;
      faqHeading: string;
    };
    faq: Array<{
      question: string;
      answer: string;
    }>;
    [key: string]: any;
  };
  export default content;
}