// Core Tech Partner site file
import type { Metadata } from "next";
import LegalPage, { type LegalSection } from "@/app/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service | Core Tech Partner",
  description:
    "The terms that govern your use of the Core Tech Partner website and services.",
};

const sections: LegalSection[] = [
  {
    id: "acceptance",
    heading: "Acceptance of these terms",
    paragraphs: [
      "These Terms of Service (“Terms”) govern your use of the Core Tech Partner website and any services we provide. By accessing our website or engaging our services, you agree to these Terms. If you do not agree, please do not use the website or our services.",
      "Where you enter into a separate written agreement, statement of work, or proposal with us, that document takes priority over these Terms for the matters it covers.",
    ],
  },
  {
    id: "our-services",
    heading: "Our services",
    paragraphs: [
      "Core Tech Partner designs and builds software, including web applications, mobile apps, FMCG and retail systems, cloud infrastructure, and related consulting and support. The exact scope, deliverables, timeline, and fees for any project are defined in a proposal or statement of work agreed by both parties.",
      "We may update, improve, or discontinue features of our website at any time without notice.",
    ],
  },
  {
    id: "proposals-and-payment",
    heading: "Proposals, fees, and payment",
    paragraphs: ["Unless otherwise agreed in writing:"],
    bullets: [
      "Proposals and estimates are valid for 30 days from the date issued.",
      "Projects typically begin after a signed agreement and an initial deposit.",
      "Invoices are due within 14 days of the invoice date.",
      "Work may be paused if payments are overdue, and timelines may shift accordingly.",
      "Fees are quoted exclusive of applicable taxes, which are added where required by law.",
    ],
    after: [
      "Requests that fall outside the agreed scope will be estimated separately and require your approval before work begins.",
    ],
  },
  {
    id: "client-responsibilities",
    heading: "Your responsibilities",
    paragraphs: [
      "Successful projects depend on collaboration. To help us deliver on time and to the agreed quality, you agree to:",
    ],
    bullets: [
      "Provide timely feedback, approvals, content, and access to systems we need.",
      "Ensure you have the rights to any material you supply to us, including text, images, brand assets, and data.",
      "Use our deliverables in compliance with applicable laws and regulations.",
      "Keep login credentials and access keys we provide secure and confidential.",
    ],
  },
  {
    id: "intellectual-property",
    heading: "Intellectual property",
    paragraphs: [
      "Once all fees for a project have been paid in full, you own the custom deliverables created specifically for you, including source code and designs, unless your agreement states otherwise.",
      "We retain ownership of our pre existing tools, frameworks, libraries, templates, and general knowledge used to build your project. Where these are included in your deliverables, you receive a perpetual, non exclusive license to use them as part of the work we delivered.",
      "Third party components such as open source libraries and licensed fonts remain subject to their own licenses.",
      "Unless you ask us not to, we may showcase completed work in our portfolio and marketing materials, without disclosing confidential information.",
    ],
  },
  {
    id: "confidentiality",
    heading: "Confidentiality",
    paragraphs: [
      "Both parties agree to keep confidential any non public information shared during a project, including business plans, technical details, customer data, and pricing. This obligation continues after the project ends.",
      "Confidential information may only be disclosed where required by law, or to advisers and service providers who are bound by similar confidentiality obligations.",
    ],
  },
  {
    id: "warranties",
    heading: "Warranties and support",
    paragraphs: [
      "We warrant that our services will be performed with reasonable skill and care, and that deliverables will substantially conform to the agreed specification at the time of delivery.",
      "Unless a separate support agreement is in place, we will fix defects reported within 30 days of delivery at no additional cost. Issues caused by changes made by you or third parties, by hosting environments we do not control, or by requirements not included in the agreed scope are handled as new work.",
      "Except as expressly stated, our services and website are provided “as is” without warranties of any kind, whether express or implied.",
    ],
  },
  {
    id: "liability",
    heading: "Limitation of liability",
    paragraphs: [
      "To the fullest extent permitted by law, Core Tech Partner will not be liable for indirect, incidental, special, or consequential damages, including loss of profits, revenue, data, or business opportunities, arising from your use of our website or services.",
      "Our total liability for any claim arising out of a project is limited to the fees you paid to us for that project during the twelve months before the claim arose.",
      "Nothing in these Terms limits liability that cannot be limited under applicable law.",
    ],
  },
  {
    id: "termination",
    heading: "Termination",
    paragraphs: [
      "Either party may end a project with 14 days written notice. If you terminate, you agree to pay for all work completed and any non cancellable costs incurred up to the termination date. We will hand over completed deliverables that have been paid for.",
      "We may suspend or terminate services immediately if you materially breach these Terms and do not remedy the breach within a reasonable period after being notified.",
    ],
  },
  {
    id: "website-use",
    heading: "Acceptable use of the website",
    paragraphs: ["When using our website you agree not to:"],
    bullets: [
      "Attempt to gain unauthorized access to our systems or data.",
      "Introduce malicious code or interfere with the normal operation of the site.",
      "Copy, scrape, or reproduce content without our written permission.",
      "Use the site for any unlawful or harmful purpose.",
    ],
  },
  {
    id: "governing-law",
    heading: "Governing law",
    paragraphs: [
      "These Terms are governed by the laws of Pakistan. Any dispute that cannot be resolved amicably will be subject to the exclusive jurisdiction of the courts of Islamabad, Pakistan.",
    ],
  },
  {
    id: "changes",
    heading: "Changes to these terms",
    paragraphs: [
      "We may revise these Terms from time to time. The updated version will be posted on this page with a new date. Continued use of our website or services after changes are posted means you accept the revised Terms.",
    ],
  },
  {
    id: "contact",
    heading: "Contact us",
    paragraphs: [
      "For any questions about these Terms, please contact us at info@coretechpartner.com or write to Core Tech Partner, COCO WorkSpace, Floor 2, Office 10, I-10, Islamabad, Pakistan.",
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="September 7, 2026"
      intro="These terms set out how we work together and what you can expect from Core Tech Partner. We have written them to be clear and fair, so please take a few minutes to read them."
      sections={sections}
    />
  );
}
