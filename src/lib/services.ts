export const services = [
    {
        slug: "web-development",
        title: "Website design & development",
        short: "Websites",
        number: "01",
        summary: "A clear, confident home for your business. Designed around your customers and built around your goals.",
        deliverables: ["Responsive page design", "Development and content setup", "Launch checks and handover"],
        inputs: "Your business goals, page requirements, reference websites, and available content."
    },


    {
        slug: "landing-pages",
        title: "Landing pages",
        short: "Landing pages",
        number: "02",
        summary: "Give every campaign a focused destination, with a clear message and a single next step.",
        deliverables: ["Campaign-focused page structure", "Responsive design and development", "Enquiry form and agreed tracking setup"], inputs: "Your offer, audience, campaign deadline, brand assets, and desired conversion action."
    },


    {
        slug: "advertising",
        title: "Google & Meta advertising",
        short: "Paid advertising",
        number: "03",
        summary: "Reach the people your business is built for, with focused campaign planning and ongoing management.",
        deliverables: ["Audience and campaign planning", "Campaign setup and creative coordination", "Performance reporting and optimisation"],
        inputs: "Your business goals, target locations, channels, proposed ad budget, and existing account access via provider invitations."
    },


    {
        slug: "seo",
        title: "Search engine optimisation",
        short: "SEO", number: "04",
        summary: "Build a stronger search presence with useful content, sound foundations, and local relevance.",
        deliverables: ["Website and search visibility review", "Agreed on-page, technical, or local SEO work", "Progress updates and recommendations"],
        inputs: "Your website, business category, target locations, and search visibility goals."
    },


    {
        slug: "digital-marketing",
        title: "Digital marketing",
        short: "Digital marketing",
        number: "05",
        summary: "Bring your channels together with a considered plan for content, campaigns, and communication.",
        deliverables: ["Channel and content planning", "Agreed creative and campaign deliverables", "Regular activity reports"],
        inputs: "Your channels, audience, current marketing activity, and required deliverables."
    },


    {
        slug: "branding",
        title: "Brand creation",
        short: "Branding",
        number: "06",
        summary: "Create a visual identity that gives your business a consistent, recognisable voice.", deliverables: ["Visual identity direction", "Agreed logo and brand assets", "Usage guidance and final file handover"],
        inputs: "Your brand name, audience, visual references, preferences, and required assets."
    },


    {
        slug: "ongoing-support",
        title: "Lifetime help",
        short: "Ongoing support",
        number: "07",
        summary: "Keep moving after delivery, with a place for guidance, fixes, ongoing edits, and new feature requests.",
        deliverables: ["Guidance and help with delivered work", "Fix and edit requests", "New feature discussions and planning"],
        inputs: "Your related project, request category, description, and impact. Scope, availability, turnaround, and commercial terms are agreed for your project."
    },
] as const;

export const process = [
    { title: "Understand", body: "We discuss your business, your audience, and what you want to achieve." },
    { title: "Plan", body: "We agree the scope, deliverables, and next steps before work begins." },
    { title: "Create", body: "Design and implementation move forward with clear updates and reviews." },
    { title: "Deliver & support", body: "Review the final work, complete handover, and plan what comes next." },
];
