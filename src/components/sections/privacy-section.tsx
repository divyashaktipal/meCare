import Link from "next/link";

export function PrivacySection() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <h1 className="text-4xl md:text-[54px] font-bold text-[#03112E] mb-12">Privacy Policy</h1>

        <div className="prose prose-lg max-w-none text-[#4B5563] text-sm md:text-[15px] leading-loose font-medium">
          <p className="mb-5">
            This Privacy and Cookies Policy ("policy") describes Mecare's commitment to protecting your personal data and respecting your privacy. This policy applies to our customers (including those on free trials), subscribers, website visitors, and applicants (hereinafter referred to as "you", "your", and "yours").
          </p>
          <p className="mb-5">
            The following statements describe who we are, which types of personal data we collect when you use our services, visit our websites, communicate with Mecare, and/or apply for a job at Mecare, what happens with this personal data, and how you can object to this processing, where applicable. All collection, processing, and use of personal data ("processing") by Mecare is exclusively for the purposes of providing and optimizing the Mecare services ("services"), monitoring the function and performance of our websites, supporting our business operations, complying with legal and regulatory obligations, providing customer service, and marketing our services. The services have been designed with the goal of collecting as little personal data as possible to function.
          </p>
          <p className="mb-5">
            Except as otherwise provided herein, for the purposes of this policy and data protection laws, namely the General Data Protection Regulation (GDPR) (EU) 2016/679 ("GDPR”), we are the data controller, meaning we determine the purpose and means of processing of your personal data. If you have questions about our processing of personal data, you will find our contact information and the contact details for our Data Protection Officer in the section below.
          </p>
          <p className="mb-12">
            There may be situations when more than one data controller processes your information, such as when you access the Mecare website through a widget. In these situations, we act as an independent data controller over our processing activities and make determinations over how data will be processed independently from other data controllers. We are not responsible for the processing of other data controllers, including customers, and you should contact them directly regarding questions about how they process your personal data. If you have questions about our processing of personal data, you will find our contact information and the contact details for our Data Protection Officer in the section below.
          </p>

          <h2 className="text-2xl font-bold text-[#03112E] mt-10 mb-5">2. Data Protection Principles</h2>
          <p className="mb-5">
            The GDPR sets out the principles which must be complied with by any party handling personal data. Mecare will comply with these principles, as detailed in Article 5 of the GDPR:
          </p>
          <ul className="list-disc pl-6 mb-12 space-y-3 marker:text-[#03112E]">
            <li>Processed lawfully, fairly, and in a transparent manner in relation to the data subject;</li>
            <li>Collected for specified, explicit, and legitimate purposes and not further processed in a manner that is incompatible with those purposes; further processing for archiving purposes in the public interest, scientific, or historical research purposes or statistical purposes shall not be considered to be incompatible with the initial purposes, subject to appropriate safeguards, and provided that there is no risk of breaching the privacy of the data subject;</li>
            <li>Adequate, relevant, and limited to what is necessary in relation to the purposes for which it is processed.</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#03112E] mt-10 mb-5">3. Legal Basis for Processing Personal Data</h2>
          <p className="mb-5">
            In order to process personal data, a lawful ground must exist. A number of permitted grounds for processing are enumerated in Article 6 of the GDPR.
          </p>
          <p className="mb-5">
            One ground for the processing of personal data is Article 6, Paragraph 1(a) of the GDPR, which is the freely given consent of the data subject to do so. This consent is bound to a particular purpose. For example, we may collect personal data such as your name and email address when you subscribe to our newsletter.
          </p>
          <p className="mb-5">
            A second ground for processing of personal data is to fulfill the requirements of a contract, as specified in Article 6, Paragraph 1(b) of the GDPR. Performance of contract is understood to include the initiation of a commercial relationship. This ground applies to Mecare when a user completes our contact form or contacts our Customer Success or Sales team using any other means to obtain a non-binding quotation.
          </p>
          <p className="mb-12">
            It is also possible that personal data will be processed on the basis of Article 6, paragraph 1(f) of the GDPR. This is the so-called "legitimate interests" ground, which is interpreted with reference to Recital 47 of the GDPR. The GDPR treats this as a "fallback ground", which only applies where no other previously listed lawful ground for processing applies. When this ground is relied upon, an assessment must carefully weigh the legitimate interests of the data subject against the legitimate interests of the data controller.
          </p>

          <h2 className="text-2xl font-bold text-[#03112E] mt-10 mb-5">4. Use of Cookies</h2>
          <p className="mb-5">
            In addition to the previously listed data, cookies will be saved on your computer when you use our website. Cookies are small pieces of textual data which are saved on your hard disk by your web browser, through which Mecare, who sets the cookie's contents, can collect certain information about you. Cookies cannot execute any code, nor transfer any viruses to your computer. We use them in order to anonymously or pseudonymously analyze the use of the website and present relevant offers to you.
          </p>
          <p className="mb-5">
            This website uses the following types of cookies, whose scope and functionality is detailed in the following paragraphs:
          </p>
          <ul className="list-disc pl-6 mb-5 space-y-3 marker:text-[#03112E]">
            <li>transient cookies (see paragraph 1)</li>
            <li>persistent cookies (see paragraph 2)</li>
            <li>Transient cookies are automatically deleted when you close your browser. They are used particularly as session cookies. These save a so-called "session ID" which is used to link subsequent requests made by your browser to each other. Through this, your computer can be recognized when you return to our website. These session cookies are deleted when you log out, or close your browser.</li>
            <li>Persistent cookies are only deleted after a predetermined duration, which can be different for each cookie. You can delete these persistent cookies anytime, though, in the "Settings" configuration of your browser. Be aware you that, if you do so, not all functionality of this website will be available.</li>
          </ul>
          <p className="mb-5">
            Previously set cookies can be deleted through the settings of your browser. You may also be able to prevent the placement of some cookies on your computer through the relevant settings of your internet browser. We advise you that certain browser security and privacy configurations may impact the display and functionality of our website and embedded widgets, and preventing the placement of cookies on your computer can mean that not all functionality of our website is available without limitations. Moreover, due to a lack of industry standard for recognizing Do Not Track browser signals, it's possible that third party service providers may continue to collect your personal data through cookies.
          </p>
          <p className="mb-12">
            View our cookie declaration at <Link href="#" className="text-[#5ACDCA] hover:underline">https://mecare.com/cookies/</Link>.
          </p>

          <h2 className="text-2xl font-bold text-[#03112E] mt-10 mb-5">5. Changes to this Privacy Policy</h2>
          <p className="mb-12">
            Mecare reserves the right to update this policy from time to time without notice. Any changes are effective when we post the updated policy on our website. We recommend that you regularly check back. We may provide you with notices about changes to this policy if you are a registered user of the Mecare application.
          </p>

          <h2 className="text-2xl font-bold text-[#03112E] mt-10 mb-5">6. Contact</h2>
          <p className="mb-12">
            Should you have further questions, or wish to contact us, you can do so through our website at <Link href="/" className="text-[#5ACDCA] hover:underline">https://www.mecare.com</Link>. When you do so, the data required to answer your query will be automatically saved and processed. Your data will not be transferred to third parties unless Mecare has a lawful ground to do so.
          </p>

          <p className="text-sm font-semibold text-[#03112E] mt-12 pb-4">
            Updated: August 7, 2024
          </p>
        </div>

      </div>
    </section>
  );
}
