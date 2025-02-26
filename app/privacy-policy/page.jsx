// CHATGPT PROMPT TO GENERATE YOUR PRIVACY POLICY — replace with your own data 👇

// 1. Go to https://chat.openai.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent lawyer.

// I need your help to write a simple privacy policy for my website. Here is some context:
// - Website: https://shipfa.st
// - Name: ShipFast
// - Description: A JavaScript code boilerplate to help entrepreneurs launch their startups faster
// - User data collected: name, email and payment information
// - Non-personal data collection: web cookies
// - Purpose of Data Collection: Order processing
// - Data sharing: we do not share the data with any other parties
// - Children's Privacy: we do not collect any data from children
// - Updates to the Privacy Policy: users will be updated by email
// - Contact information: marc@shipfa.st

// Please write a simple privacy policy for my site. Add the current date.  Do not add or explain your reasoning. Answer:

const PrivacyPolicy = () => {
  return (
    <main className="bg-base-200 py-8 min-h-screen">
      <div className="max-w-5xl mx-auto p-6 mt-10 card bg-base-100 shadow-xl">
        <div className="card-body">
          <h1 className="card-title text-3xl font-bold mb-4">PRIVACY POLICY</h1>
          <p className="text-sm text-gray-500 mb-6">
            Last Updated: February 20, 2025
          </p>

          <div className="mb-6">
            <h2 className="font-semibold text-lg mb-2">1. Introduction</h2>
            <p>
              Welcome to <strong>Prioritize</strong> (“we,” “us,” or “our”).
              This Privacy Policy explains how we collect, use, and protect your
              personal information when you visit our website at
              <a
                href="https://prioritize.cezarybek.com"
                className="text-blue-500 underline"
              >
                {" https://prioritize.cezarybek.com"}
              </a>
              .
            </p>
          </div>

          <div className="mb-6">
            <h2 className="font-semibold text-lg mb-2">
              2. Information We Collect
            </h2>
            <ul className="list-disc list-inside">
              <li>
                <strong>Personal Data:</strong> We collect your name, email
                address, and payment information when you create an account or
                place an order.
              </li>
              <li>
                <strong>Non-Personal Data:</strong> We use cookies and similar
                technologies to collect non-personal information for analytics
                and site functionality.
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h2 className="font-semibold text-lg mb-2">
              3. How We Use Your Information
            </h2>
            <p>
              We use the information we collect to process orders, provide and
              improve our services, and communicate with you.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="font-semibold text-lg mb-2">4. Data Sharing</h2>
            <p>We do not share your personal data with any third parties.</p>
          </div>

          <div className="mb-6">
            <h2 className="font-semibold text-lg mb-2">
              5. Children’s Privacy
            </h2>
            <p>
              We do not knowingly collect any personal information from
              children. If you believe a child has provided us with personal
              data, please contact us immediately.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="font-semibold text-lg mb-2">
              6. Updates to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. If we make
              changes, we will notify you by email.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg mb-2">7. Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy,
              please contact us at
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

export default PrivacyPolicy;
