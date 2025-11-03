import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Hair Extensions: Educational Resources & Guides',
  description: 'Comprehensive, unbiased information about hair extensions - from temporary clip-ins to permanent keratin bonds. Make informed decisions about your hair.',
  alternates: {
    canonical: 'https://www.connecthairextensions.com/'
  },
  openGraph: {
    title: 'Hair Extensions: Educational Resources & Guides',
    description: 'Comprehensive, unbiased information about hair extensions.',
    type: 'website',
  }
};

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FDFCFB' }}>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-5xl font-bold mb-6" style={{ color: '#123D35' }}>
            Hair Extensions: Educational Resources &amp; Guides
          </h2>
          <p className="text-xl mb-8" style={{ color: '#5A5A5A' }}>
            Comprehensive, unbiased information about hair extensions - from temporary clip-ins
            to permanent keratin bonds. Make informed decisions about your hair.
          </p>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-16" style={{ backgroundColor: '#F8F5F2' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold mb-12 text-center" style={{ color: '#123D35' }}>
            Extension Types Explained
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h4 className="text-2xl font-bold mb-4" style={{ color: '#123D35' }}>
                <Link href="/hair-clip-extensions-products/pony-tail" style={{ color: '#123D35' }}>
                  Ponytail Extensions
                </Link>
              </h4>
              <p className="mb-4" style={{ color: '#5A5A5A' }}>
                Considering clip-in ponytails? Learn about the pros, cons, and what they're
                actually like to use daily - an honest assessment.
              </p>
              <Link
                href="/hair-clip-extensions-products/pony-tail"
                className="font-semibold hover:underline"
                style={{ color: '#257165' }}
              >
                Read Honest Review →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h4 className="text-2xl font-bold mb-4" style={{ color: '#123D35' }}>
                <Link href="/permanent-hair-extensions" style={{ color: '#123D35' }}>
                  Permanent Extensions
                </Link>
              </h4>
              <p className="mb-4" style={{ color: '#5A5A5A' }}>
                Complete guide to keratin bonds and micro rings - how they work, costs,
                maintenance, and who they're best suited for.
              </p>
              <Link
                href="/permanent-hair-extensions"
                className="font-semibold hover:underline"
                style={{ color: '#257165' }}
              >
                Learn More →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h4 className="text-2xl font-bold mb-4" style={{ color: '#123D35' }}>
                <Link href="/hair-clip-extensions-products" style={{ color: '#123D35' }}>
                  Clip-In Extensions
                </Link>
              </h4>
              <p className="mb-4" style={{ color: '#5A5A5A' }}>
                Everything you need to know about temporary clip-in extensions - types,
                application, care, and realistic expectations.
              </p>
              <Link
                href="/hair-clip-extensions-products"
                className="font-semibold hover:underline"
                style={{ color: '#257165' }}
              >
                Explore Guide →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center" style={{ color: '#123D35' }}>
            Unbiased Hair Extension Information
          </h3>
          <div className="space-y-6" style={{ color: '#3A3A3A' }}>
            <p>
              Connect Hair Extensions provides educational content about all types of hair extensions.
              Our guides offer honest assessments, realistic cost breakdowns, and practical advice
              to help you understand different extension methods.
            </p>
            <p>
              Whether you&apos;re considering temporary clip-ins for a special event or exploring permanent
              solutions for thinning hair, you'll find unbiased information about the benefits, limitations,
              and real-world expectations for each method.
            </p>
          </div>
        </div>
      </section>

      {/* Key Topics */}
      <section className="py-16" style={{ backgroundColor: '#F8F5F2' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold mb-12 text-center" style={{ color: '#123D35' }}>
            Common Questions Answered
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-bold mb-3" style={{ color: '#123D35' }}>
                Temporary vs Permanent
              </h4>
              <p className="text-sm" style={{ color: '#5A5A5A' }}>
                Understand the real differences in cost, time commitment, and results between
                clip-in and permanent extension methods.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-bold mb-3" style={{ color: '#123D35' }}>
                Extensions for Thinning Hair
              </h4>
              <p className="text-sm" style={{ color: '#5A5A5A' }}>
                Special considerations for perimenopause, postpartum, and age-related hair loss -
                which methods are gentlest and most effective.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-bold mb-3" style={{ color: '#123D35' }}>
                Color &amp; Texture Matching
              </h4>
              <p className="text-sm" style={{ color: '#5A5A5A' }}>
                Why pre-packaged extensions rarely match perfectly, and what options exist
                for curly or multi-tonal hair.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-bold mb-3" style={{ color: '#123D35' }}>
                Realistic Costs
              </h4>
              <p className="text-sm" style={{ color: '#5A5A5A' }}>
                Honest breakdowns of upfront costs, ongoing maintenance, time investment,
                and total annual expenses for different extension types.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white" style={{ borderTop: '2px solid #E5DDD5' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold mb-4" style={{ color: '#123D35' }}>Connect Hair Extensions</h3>
              <p className="text-sm" style={{ color: '#5A5A5A' }}>
                Educational hair extension resources and unbiased information.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4" style={{ color: '#123D35' }}>Extension Guides</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/permanent-hair-extensions" style={{ color: '#5A5A5A' }}>
                    Permanent Extensions
                  </Link>
                </li>
                <li>
                  <Link href="/hair-clip-extensions-products/pony-tail" style={{ color: '#5A5A5A' }}>
                    Ponytail Extensions
                  </Link>
                </li>
                <li>
                  <Link href="/hair-clip-extensions-products" style={{ color: '#5A5A5A' }}>
                    Clip-In Extensions
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4" style={{ color: '#123D35' }}>About This Site</h3>
              <p className="text-sm" style={{ color: '#5A5A5A' }}>
                This is an educational resource providing unbiased information about hair extensions.
                We don&apos;t sell products or services.
              </p>
            </div>
          </div>
          <div className="mt-12 pt-8 text-center text-sm" style={{ borderTop: '1px solid #E5DDD5', color: '#8A8A8A' }}>
            <p>© {new Date().getFullYear()} Connect Hair Extensions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
