import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Pyaar.ca",
  description: "Privacy policy for Pyaar.ca - Love Language Compatibility Test",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-red-100">
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Privacy Policy</h1>

        <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Introduction</h2>
            <p className="text-gray-600">
              Pyaar.ca (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share information when you use our love language compatibility quiz.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Information We Collect</h2>
            <p className="text-gray-600 mb-2">We collect the following types of information:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Quiz responses and compatibility results</li>
              <li>Usage data and analytics</li>
              <li>Cookie data for site functionality</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Advertising</h2>
            <p className="text-gray-600">
              We use Google AdSense to manage and display advertisements on our site. Google AdSense may collect and use certain data for advertising purposes. You can learn more about how Google uses data in their privacy policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cookies and Tracking</h2>
            <p className="text-gray-600">
              We use cookies and similar tracking technologies to improve your experience, analyze site usage, and deliver personalized advertisements. You can manage your cookie preferences through our cookie consent manager.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Security</h2>
            <p className="text-gray-600">
              We implement reasonable security measures to protect your information. However, no method of transmission over the Internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Rights</h2>
            <p className="text-gray-600">
              Depending on your location, you may have rights regarding your personal data, including the right to access, correct, or delete your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-gray-600">
              If you have questions about this Privacy Policy, please contact us through our website.
            </p>
          </section>

          <section>
            <p className="text-gray-500 text-sm">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}