// CHATGPT PROMPT TO GENERATE YOUR TERMS & SERVICES — replace with your own data 👇

// 1. Go to https://chat.openai.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent lawyer.

// I need your help to write a simple Terms & Services for my website. Here is some context:
// - Website: https://shipfa.st
// - Name: ShipFast
// - Contact information: marc@shipfa.st
// - Description: A JavaScript code boilerplate to help entrepreneurs launch their startups faster
// - Ownership: when buying a package, users can download code to create apps. They own the code but they do not have the right to resell it. They can ask for a full refund within 7 day after the purchase.
// - User data collected: name, email and payment information
// - Non-personal data collection: web cookies
// - Link to privacy-policy: https://shipfa.st/privacy-policy
// - Governing Law: France
// - Updates to the Terms: users will be updated by email

// Please write a simple Terms & Services for my site. Add the current date. Do not add or explain your reasoning. Answer:

const TOS = () => {
  return (
    <main className="bg-base-200 py-8 min-h-screen">
      <div className="max-w-5xl mx-auto p-6 card bg-base-100 shadow-xl">
        <div className="card-body">
          <h1 className="card-title text-3xl font-bold mb-4">
            TERMS &amp; SERVICES
          </h1>
          <p className="text-sm text-gray-500 mb-6">
            Last Updated: February 20, 2025
          </p>

          <div className="mb-6">
            <h2 className="font-semibold text-lg mb-2">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using <strong>Prioritize</strong> (“we,” “us,” or
              “our”) at
              <a
                href="https://prioritize.cezarybek.com"
                className="text-blue-500 underline"
              >
                {" https://prioritize.cezarybek.com"}
              </a>
              , you agree to be bound by these Terms &amp; Services.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="font-semibold text-lg mb-2">
              2. Description of Service
            </h2>
            <p>
              We provide a project management tool for creating and managing
              feature request boards. Upon purchasing a package, you can create
              and manage boards, collecting feedback from public users.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="font-semibold text-lg mb-2">3. User Obligations</h2>
            <p>
              You agree to use our service responsibly and comply with all
              applicable laws. You must provide accurate information, including
              your name, email address, and payment details, when creating an
              account or making a purchase.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="font-semibold text-lg mb-2">4. Data Collection</h2>
            <p>
              We collect personal data (name, email, payment information) and
              non-personal data (cookies). For more information, please review
              our
              <a
                href="https://prioritize.cezarybek.com/privacy-policy"
                className="text-blue-500 underline"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>

          <div className="mb-6">
            <h2 className="font-semibold text-lg mb-2">
              5. Intellectual Property
            </h2>
            <p>
              All content on our site is owned or licensed by us. You may not
              reproduce, distribute, or create derivative works from our content
              without our express written permission.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="font-semibold text-lg mb-2">6. Governing Law</h2>
            <p>
              These Terms &amp; Services are governed by the laws of Italy,
              without regard to its conflict of law provisions.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="font-semibold text-lg mb-2">
              7. Updates to These Terms
            </h2>
            <p>
              We may update these Terms &amp; Services at any time. If changes
              are made, we will notify you by email.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="font-semibold text-lg mb-2">
              8. Contact Information
            </h2>
            <p>
              If you have any questions about these Terms &amp; Services, please
              contact us at
              <a
                href="mailto:cezary@cezarybek.com"
                className="text-blue-500 underline"
              >
                {" cezary@cezarybek.com"}
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TOS;
