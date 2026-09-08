// Core Tech Partner site file
import type { Metadata } from "next";
import LegalPage, { type LegalSection } from "@/app/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Core Tech Partner",
  description:
    "How Core Tech Partner collects, uses, and protects your personal information.",
};

const sections: LegalSection[] = [
  {
    id: "overview",
    heading: "Overview",
    paragraphs: [
      "Core Tech Partner (referred to as “we”, “us”, or “our”) respects your privacy and is committed to protecting the personal information you share with us. This policy explains what we collect, why we collect it, how we use it, and the choices you have.",
      "It applies to our website, our contact and inquiry forms, and any communication you have with us while exploring or using our services. It does not cover the practices of third party websites we may link to.",
    ],
  },
  {
    id: "information-we-collect",
    heading: "Information we collect",
    paragraphs: [
      "We only collect information that helps us respond to you and improve our services. This typically includes:",
    ],
    bullets: [
      "Contact details you provide, such as your name, email address, and company name.",
      "Project details you share through our forms, including goals, timelines, and requirements.",
      "Technical information collected automatically, such as browser type, device, pages visited, and approximate location based on IP address.",
      "Communication history, including emails and messages exchanged with our team.",
    ],
    after: [
      "We do not knowingly collect information from children under the age of 16. If you believe a child has provided us with personal data, please contact us and we will delete it promptly.",
    ],
  },
  {
    id: "how-we-use-information",
    heading: "How we use your information",
    paragraphs: ["We use the information we collect to:"],
    bullets: [
      "Respond to your inquiries and prepare proposals or estimates.",
      "Deliver, maintain, and support the services you engage us for.",
      "Send updates about your project, invoices, and important service notices.",
      "Understand how our website is used so we can improve performance and content.",
      "Meet legal, accounting, and regulatory obligations.",
    ],
    after: [
      "We will never sell your personal information. We only send marketing communication if you have asked to receive it, and you can opt out at any time.",
    ],
  },
  {
    id: "cookies",
    heading: "Cookies and analytics",
    paragraphs: [
      "Our website uses a small number of cookies and similar technologies. Essential cookies keep the site working correctly. Analytics cookies help us understand traffic patterns so we can make the site faster and more useful.",
      "You can control cookies through your browser settings. Disabling some cookies may affect how parts of the website function, but you will still be able to contact us.",
    ],
  },
  {
    id: "sharing",
    heading: "How we share information",
    paragraphs: [
      "We share personal information only when it is necessary to run our business and serve you. This may include:",
    ],
    bullets: [
      "Trusted service providers who help us with hosting, email delivery, analytics, and payment processing, under agreements that require them to protect your data.",
      "Professional advisers such as accountants, auditors, or lawyers where required.",
      "Authorities, where we are legally obliged to do so or to protect our rights, our clients, or the public.",
    ],
    after: [
      "If Core Tech Partner is ever involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction. We will notify you before your data becomes subject to a different privacy policy.",
    ],
  },
  {
    id: "security",
    heading: "How we protect your data",
    paragraphs: [
      "We use industry standard safeguards to protect your information, including encrypted connections, access controls, and secure hosting. Access to personal data is limited to team members who need it to do their jobs.",
      "No method of transmission or storage is completely secure. If we become aware of a security incident affecting your personal data, we will notify you and the relevant authorities as required by law.",
    ],
  },
  {
    id: "retention",
    heading: "How long we keep information",
    paragraphs: [
      "We keep personal information only for as long as we need it for the purposes described in this policy. Inquiry data is typically retained for up to 24 months. Client and contract records are retained for the duration of our relationship and for the period required by tax and accounting law.",
      "When information is no longer needed, we delete it or anonymize it so it can no longer be linked to you.",
    ],
  },
  {
    id: "your-rights",
    heading: "Your rights and choices",
    paragraphs: ["Depending on where you live, you may have the right to:"],
    bullets: [
      "Access the personal information we hold about you.",
      "Ask us to correct information that is inaccurate or incomplete.",
      "Request that we delete your personal information.",
      "Object to, or ask us to restrict, certain types of processing.",
      "Receive a copy of your data in a portable format.",
      "Withdraw consent where our processing is based on consent.",
    ],
    after: [
      "To exercise any of these rights, email us at info@coretechpartner.com. We will respond within 30 days. If you are not satisfied with our response, you have the right to raise a complaint with your local data protection authority.",
    ],
  },
  {
    id: "international",
    heading: "International transfers",
    paragraphs: [
      "Core Tech Partner is based in Islamabad, Pakistan. Some of our service providers operate in other countries. When your information is transferred across borders, we make sure appropriate safeguards are in place so your data receives a consistent level of protection.",
    ],
  },
  {
    id: "changes",
    heading: "Changes to this policy",
    paragraphs: [
      "We may update this policy from time to time to reflect changes in our practices or legal requirements. When we do, we will update the date at the top of this page. Significant changes will be communicated by email or a notice on our website.",
    ],
  },
  {
    id: "contact",
    heading: "Contact us",
    paragraphs: [
      "If you have any questions about this policy or how we handle your information, please reach out to us at info@coretechpartner.com or write to Core Tech Partner, COCO WorkSpace, Floor 2, Office 10, I-10, Islamabad, Pakistan.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="September 7, 2026"
      intro="Your trust matters to us. This policy explains in plain language how Core Tech Partner handles the personal information you share when you visit our website, get in touch, or work with us."
      sections={sections}
    />
  );
}
