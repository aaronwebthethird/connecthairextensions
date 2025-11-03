import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Permanent Hair Extensions Guide - Keratin Bonds & Micro Rings',
  description: 'Complete educational guide to permanent hair extensions including keratin bonds and micro rings. Learn about professional installation, care, costs, and what to expect.',
  alternates: {
    canonical: 'https://www.connecthairextensions.com/permanent-hair-extensions'
  },
  openGraph: {
    title: 'Permanent Hair Extensions Guide - Professional Methods Explained',
    description: 'Expert guide to keratin bonds, micro rings, and permanent hair extension methods.',
    type: 'website',
  }
};

export default function PermanentExtensionsPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FDFCFB' }}>

      {/* Hero */}
      <section className="text-white py-16" style={{ background: 'linear-gradient(135deg, #123D35 0%, #1B5A4E 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">
            The Complete Guide to Permanent Hair Extensions
          </h1>
          <p className="text-xl mb-8" style={{ color: '#E0F0ED' }}>
            Understanding keratin bonds and micro rings - professional methods
            for long-lasting volume, length, and natural-looking results.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">

          <h2 className="text-4xl font-bold mb-6" style={{ color: '#123D35' }}>
            What Are Permanent Hair Extensions?
          </h2>

          <p className="text-xl mb-8" style={{ color: '#5A5A5A' }}>
            Permanent (or semi-permanent) hair extensions are professionally installed methods that
            last 3-4 months, becoming part of your daily hair routine without the need for daily
            application and removal.
          </p>

          <p className="mb-6" style={{ color: '#3A3A3A' }}>
            Unlike temporary clip-in extensions, permanent methods attach individual strands or
            small wefts directly to your natural hair, creating seamless integration that moves,
            flows, and behaves like your own hair.
          </p>

          <div className="p-6 mb-12 rounded-lg" style={{ backgroundColor: '#F8F5F2', borderLeft: '4px solid #123D35' }}>
            <p className="mb-0" style={{ color: '#3A3A3A' }}>
              <strong>Important:</strong> The term "permanent" is somewhat misleading.
              These extensions last 3-4 months as your natural hair grows, at which point they
              need professional removal and refitting. They're better described as
              "semi-permanent" or "long-term" extensions.
            </p>
          </div>

          <h2 className="text-4xl font-bold mb-8 mt-16" style={{ color: '#123D35' }}>
            Types of Permanent Hair Extensions
          </h2>

          {/* Keratin Bonds Section */}
          <div className="p-8 rounded-lg mb-10" style={{ backgroundColor: '#F8F5F2' }}>
            <h3 className="text-3xl font-bold mb-6" style={{ color: '#123D35' }}>
              Keratin Bond Extensions (Fusion)
            </h3>

            <p className="mb-6" style={{ color: '#3A3A3A' }}>
              Keratin bonding is considered the gold standard of permanent hair extensions.
              Individual extension strands are attached to small sections of your natural hair
              using keratin - the same protein that makes up human hair.
            </p>

            <h4 className="text-xl font-bold mb-3" style={{ color: '#123D35' }}>How It Works:</h4>
            <ol className="list-decimal pl-6 mb-6 space-y-2" style={{ color: '#3A3A3A' }}>
              <li>Small sections of your natural hair are isolated</li>
              <li>An extension strand with a keratin tip is positioned at the root</li>
              <li>Heat is applied to melt and mold the keratin into a tiny, invisible bond</li>
              <li>The bond cools and hardens, securing the extension in place</li>
              <li>Process is repeated across the head for full coverage</li>
            </ol>

            <h4 className="text-xl font-bold mb-3" style={{ color: '#123D35' }}>Best For:</h4>
            <ul className="space-y-2 mb-6" style={{ color: '#3A3A3A' }}>
              <li className="flex gap-3">
                <span style={{ color: '#123D35' }} className="font-bold">✓</span>
                <span><strong>Fine or thinning hair</strong> - Bonds are tiny and place minimal stress on follicles</span>
              </li>
              <li className="flex gap-3">
                <span style={{ color: '#123D35' }} className="font-bold">✓</span>
                <span><strong>Perimenopause and postpartum hair loss</strong> - Gentle on delicate, changing hair</span>
              </li>
              <li className="flex gap-3">
                <span style={{ color: '#123D35' }} className="font-bold">✓</span>
                <span><strong>Natural, invisible results</strong> - Bonds are virtually undetectable</span>
              </li>
              <li className="flex gap-3">
                <span style={{ color: '#123D35' }} className="font-bold">✓</span>
                <span><strong>Long-lasting wear</strong> - 3-4 months between services</span>
              </li>
            </ul>

            <div className="p-6 rounded border-l-4" style={{ backgroundColor: 'white', borderColor: '#123D35' }}>
              <p className="mb-0" style={{ color: '#3A3A3A' }}>
                <strong>Expert Installation Required:</strong> Keratin bonding demands precision,
                experience, and specialized equipment. The quality of your results depends entirely
                on your stylist's skill and the materials used.
              </p>
            </div>
          </div>

          {/* Micro Rings Section */}
          <div className="p-8 rounded-lg mb-10" style={{ backgroundColor: '#F8F5F2' }}>
            <h3 className="text-3xl font-bold mb-6" style={{ color: '#123D35' }}>
              Micro Ring Extensions (Micro Beads)
            </h3>

            <p className="mb-6" style={{ color: '#3A3A3A' }}>
              Micro ring extensions use tiny metal rings (beads) to secure extension strands to
              your natural hair. This method requires no heat, glue, or chemicals, making it the
              most gentle permanent extension option.
            </p>

            <h4 className="text-xl font-bold mb-3" style={{ color: '#123D35' }}>How It Works:</h4>
            <ol className="list-decimal pl-6 mb-6 space-y-2" style={{ color: '#3A3A3A' }}>
              <li>A small section of natural hair is threaded through a tiny metal ring</li>
              <li>The extension strand is inserted into the same ring</li>
              <li>The ring is clamped flat using specialized pliers</li>
              <li>The secure, flat bead holds the extension in place</li>
              <li>No heat, glue, or chemicals are used</li>
            </ol>

            <h4 className="text-xl font-bold mb-3" style={{ color: '#123D35' }}>Best For:</h4>
            <ul className="space-y-2 mb-6" style={{ color: '#3A3A3A' }}>
              <li className="flex gap-3">
                <span style={{ color: '#123D35' }} className="font-bold">✓</span>
                <span><strong>Clients wanting zero heat or adhesive</strong> - Completely damage-free application</span>
              </li>
              <li className="flex gap-3">
                <span style={{ color: '#123D35' }} className="font-bold">✓</span>
                <span><strong>Adjustable extensions</strong> - Rings can be moved up as hair grows</span>
              </li>
              <li className="flex gap-3">
                <span style={{ color: '#123D35' }} className="font-bold">✓</span>
                <span><strong>Reusable hair</strong> - Extensions can be removed and refitted multiple times</span>
              </li>
              <li className="flex gap-3">
                <span style={{ color: '#123D35' }} className="font-bold">✓</span>
                <span><strong>Natural movement</strong> - Hair flows freely and naturally</span>
              </li>
            </ul>

            <div className="p-6 rounded border-l-4" style={{ backgroundColor: 'white', borderColor: '#123D35' }}>
              <p className="mb-0" style={{ color: '#3A3A3A' }}>
                <strong>Professional Expertise Matters:</strong> While micro rings don't use
                heat, proper placement, tension, and sizing are critical. Poorly installed rings
                can slip, damage hair, or be visible.
              </p>
            </div>
          </div>

          {/* Why Choose Permanent */}
          <div className="my-16">
            <h2 className="text-4xl font-bold mb-8" style={{ color: '#123D35' }}>
              Why Choose Permanent Over Temporary Extensions?
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="border p-6 rounded-lg" style={{ borderColor: '#E5DDD5' }}>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#5A5A5A' }}>Temporary Extensions</h3>
                <ul className="space-y-2 text-sm" style={{ color: '#5A5A5A' }}>
                  <li>✗ Daily application and removal</li>
                  <li>✗ Limited styling options</li>
                  <li>✗ Can't wear while sleeping or swimming</li>
                  <li>✗ Visible clips or attachment points</li>
                  <li>✗ Limited color matching (pre-packaged shades)</li>
                  <li>✓ Lower upfront cost</li>
                  <li>✓ No commitment</li>
                </ul>
              </div>

              <div className="p-6 rounded-lg" style={{ border: '2px solid #123D35', backgroundColor: '#F8F5F2' }}>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#123D35' }}>Permanent Extensions</h3>
                <ul className="space-y-2 text-sm" style={{ color: '#3A3A3A' }}>
                  <li>✓ Wear 24/7 - sleep, swim, shower freely</li>
                  <li>✓ Style like natural hair - updos, ponytails, braids</li>
                  <li>✓ Completely invisible integration</li>
                  <li>✓ Custom color and texture matching</li>
                  <li>✓ 3-4 months of wear between services</li>
                  <li>✓ Better long-term value</li>
                  <li>✓ Confidence every single day</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Professional Installation Considerations */}
          <div className="text-white p-10 rounded-lg my-16" style={{ background: 'linear-gradient(135deg, #123D35 0%, #1B5A4E 100%)' }}>
            <h2 className="text-4xl font-bold mb-8 text-center">
              Professional Installation Considerations
            </h2>

            <p className="text-xl text-center mb-10" style={{ color: '#E0F0ED' }}>
              What to look for when choosing a salon and stylist for permanent extensions.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur p-6 rounded-xl">
                <h4 className="font-bold text-lg mb-2">🎨 Custom Color Matching</h4>
                <p className="text-sm" style={{ color: '#E0F0ED' }}>
                  Professional salons should hand-blend hair to match your unique color, not just offer
                  pre-packaged shades. Eastern European hair typically offers better quality and more
                  natural color variety than mass-produced Asian hair.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur p-6 rounded-xl">
                <h4 className="font-bold text-lg mb-2">💇‍♀️ Texture Matching</h4>
                <p className="text-sm" style={{ color: '#E0F0ED' }}>
                  If you have curly or wavy hair, find a salon that can match your natural texture. Straight
                  extensions on curly hair look obviously fake, especially when wet.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur p-6 rounded-xl">
                <h4 className="font-bold text-lg mb-2">🌸 Specialist Services</h4>
                <p className="text-sm" style={{ color: '#E0F0ED' }}>
                  If you have thinning hair from perimenopause, postpartum, or aging, look for specialists who
                  understand gentle application techniques for delicate hair.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur p-6 rounded-xl">
                <h4 className="font-bold text-lg mb-2">🤝 Ongoing Support</h4>
                <p className="text-sm" style={{ color: '#E0F0ED' }}>
                  Quality salons offer adjustment appointments within your wear period and maintain open
                  communication throughout. Ask about their aftercare policy before booking.
                </p>
              </div>
            </div>

            <p className="text-center text-sm" style={{ color: '#E0F0ED' }}>
              Choose an exclusive extensions salon (not a general salon offering extensions as a side service)
              for better training, materials, and results.
            </p>
          </div>

          {/* Care Guide */}
          <div className="my-16">
            <h2 className="text-4xl font-bold mb-8" style={{ color: '#123D35' }}>
              Caring for Permanent Hair Extensions
            </h2>

            <p className="mb-8" style={{ color: '#5A5A5A' }}>
              With proper care, permanent extensions maintain their quality and appearance throughout
              their 3-4 month lifespan. Your stylist will provide detailed care instructions, but
              here are the essentials:
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#F8F5F2' }}>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#123D35' }}>Daily Care</h3>
                <ul className="space-y-2 text-sm" style={{ color: '#3A3A3A' }}>
                  <li>• Brush gently from ends to roots using a soft bristle brush</li>
                  <li>• Avoid pulling or tugging on the bonds</li>
                  <li>• Tie hair up loosely for sleep</li>
                  <li>• Use sulfate-free, extension-safe products</li>
                </ul>
              </div>

              <div className="p-6 rounded-lg" style={{ backgroundColor: '#F8F5F2' }}>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#123D35' }}>Washing</h3>
                <ul className="space-y-2 text-sm" style={{ color: '#3A3A3A' }}>
                  <li>• Wash 2-3 times per week (not daily)</li>
                  <li>• Apply conditioner only to mid-lengths and ends</li>
                  <li>• Avoid oils or heavy products near bonds</li>
                  <li>• Dry bonds completely to prevent slipping</li>
                </ul>
              </div>

              <div className="p-6 rounded-lg" style={{ backgroundColor: '#F8F5F2' }}>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#123D35' }}>Styling</h3>
                <ul className="space-y-2 text-sm" style={{ color: '#3A3A3A' }}>
                  <li>• Use heat protectant before heat styling</li>
                  <li>• Avoid applying direct heat to bonds</li>
                  <li>• Style as you would natural hair</li>
                  <li>• Updos and ponytails are perfectly fine</li>
                </ul>
              </div>

              <div className="p-6 rounded-lg" style={{ backgroundColor: '#F8F5F2' }}>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#123D35' }}>Swimming</h3>
                <ul className="space-y-2 text-sm" style={{ color: '#3A3A3A' }}>
                  <li>• Wet hair with fresh water before entering chlorine</li>
                  <li>• Braid or tie hair to prevent tangling</li>
                  <li>• Rinse and condition immediately after</li>
                  <li>• Dry bonds thoroughly</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Cost and Investment */}
          <div className="my-16">
            <h2 className="text-4xl font-bold mb-8" style={{ color: '#123D35' }}>
              Investment and Long-Term Value
            </h2>

            <p className="mb-6" style={{ color: '#5A5A5A' }}>
              Permanent hair extensions represent a significant investment - both financially and
              in time. Understanding the costs helps you make an informed decision.
            </p>

            <div className="p-8 rounded-lg mb-8" style={{ backgroundColor: '#F8F5F2' }}>
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#123D35' }}>Typical Investment Range</h3>

              <div className="space-y-4">
                <div className="flex justify-between items-start pb-4" style={{ borderBottom: '1px solid #E5DDD5' }}>
                  <div>
                    <h4 className="font-bold" style={{ color: '#123D35' }}>Initial Installation</h4>
                    <p className="text-sm" style={{ color: '#5A5A5A' }}>Full head of extensions, custom color matching</p>
                  </div>
                  <span className="font-bold" style={{ color: '#123D35' }}>£300-£600</span>
                </div>

                <div className="flex justify-between items-start pb-4" style={{ borderBottom: '1px solid #E5DDD5' }}>
                  <div>
                    <h4 className="font-bold" style={{ color: '#123D35' }}>Refit (Every 3 Months)</h4>
                    <p className="text-sm" style={{ color: '#5A5A5A' }}>Removal, new installation, hair if needed</p>
                  </div>
                  <span className="font-bold" style={{ color: '#123D35' }}>£300-£500</span>
                </div>

                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold" style={{ color: '#123D35' }}>Yearly Investment</h4>
                    <p className="text-sm" style={{ color: '#5A5A5A' }}>Initial + 3 refits for year-round wear</p>
                  </div>
                  <span className="font-bold" style={{ color: '#123D35' }}>£1,200-£2,000</span>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-lg" style={{ background: 'linear-gradient(135deg, #E8F4F2 0%, #D4E9E5 100%)' }}>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#123D35' }}>
                Why It's Worth the Investment
              </h3>
              <ul className="space-y-3" style={{ color: '#3A3A3A' }}>
                <li className="flex gap-3">
                  <span style={{ color: '#257165' }} className="font-bold">✓</span>
                  <span><strong>Daily confidence:</strong> Wake up with perfect hair every single day</span>
                </li>
                <li className="flex gap-3">
                  <span style={{ color: '#257165' }} className="font-bold">✓</span>
                  <span><strong>Time savings:</strong> Eliminate hours of styling per week</span>
                </li>
                <li className="flex gap-3">
                  <span style={{ color: '#257165' }} className="font-bold">✓</span>
                  <span><strong>Psychological impact:</strong> Address hair loss from perimenopause, postpartum, or aging</span>
                </li>
                <li className="flex gap-3">
                  <span style={{ color: '#257165' }} className="font-bold">✓</span>
                  <span><strong>Versatility:</strong> Style options you never had before</span>
                </li>
                <li className="flex gap-3">
                  <span style={{ color: '#257165' }} className="font-bold">✓</span>
                  <span><strong>Custom quality:</strong> Hand-blended color that truly matches</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Choosing the Right Salon */}
          <div className="my-16 pt-16" style={{ borderTop: '2px solid #E5DDD5' }}>
            <h2 className="text-4xl font-bold mb-8" style={{ color: '#123D35' }}>
              Choosing the Right Extension Salon
            </h2>

            <p className="text-xl mb-8" style={{ color: '#5A5A5A' }}>
              The quality of your extension experience depends almost entirely on your stylist's
              expertise. Not all salons are created equal.
            </p>

            <div className="p-6 mb-8 rounded-lg" style={{ backgroundColor: '#FFF5F5', borderLeft: '4px solid #DC2626' }}>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#991B1B' }}>Warning Signs to Avoid:</h3>
              <ul className="space-y-2" style={{ color: '#7F1D1D' }}>
                <li>✗ Salons that offer extensions as a side service (not their specialty)</li>
                <li>✗ Stylists with limited extension-specific training</li>
                <li>✗ Pre-packaged hair in limited shades with no customization</li>
                <li>✗ No aftercare support or adjustment policy</li>
                <li>✗ Prices significantly below market rate (cheap materials or inexperience)</li>
                <li>✗ No consultation process or hair assessment</li>
              </ul>
            </div>

            <div className="p-6 mb-8 rounded-lg" style={{ backgroundColor: '#F0FDF4', borderLeft: '4px solid #16A34A' }}>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#166534' }}>What to Look For:</h3>
              <ul className="space-y-2" style={{ color: '#14532D' }}>
                <li>✓ Exclusive extension salons (it's all they do)</li>
                <li>✓ Custom color and texture matching capabilities</li>
                <li>✓ Premium hair sourcing (Eastern European hair is superior to Asian)</li>
                <li>✓ Comprehensive consultation and hair assessment</li>
                <li>✓ Clear aftercare instructions and ongoing support</li>
                <li>✓ Portfolio of real client results</li>
                <li>✓ Genuine reviews from multiple clients</li>
              </ul>
            </div>

            <div className="p-6 rounded-lg" style={{ backgroundColor: '#F8F5F2' }}>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#123D35' }}>
                Questions to Ask During Consultation
              </h3>
              <ul className="space-y-2" style={{ color: '#3A3A3A' }}>
                <li>• What hair quality do you use and where is it sourced?</li>
                <li>• Do you offer custom color blending or only pre-packaged shades?</li>
                <li>• Can you match curly or textured hair?</li>
                <li>• What is your aftercare and adjustment policy?</li>
                <li>• How many years of experience do you have with this method?</li>
                <li>• Can I see before/after photos of clients with similar hair to mine?</li>
                <li>• What happens if I have problems within the 3-month wear period?</li>
              </ul>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16" style={{ backgroundColor: 'white', borderTop: '2px solid #E5DDD5' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold mb-3" style={{ color: '#123D35' }}>Connect Hair Extensions</h3>
              <p className="text-sm" style={{ color: '#5A5A5A' }}>
                Educational hair extension resources and professional guidance.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-3" style={{ color: '#123D35' }}>Learn More</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" style={{ color: '#5A5A5A' }}>
                    Home
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
              <h3 className="font-bold mb-3" style={{ color: '#123D35' }}>About This Site</h3>
              <p className="text-sm" style={{ color: '#5A5A5A' }}>
                Educational resource providing honest, unbiased information about hair extensions.
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 text-center text-sm" style={{ borderTop: '1px solid #E5DDD5', color: '#8A8A8A' }}>
            <p>© {new Date().getFullYear()} Connect Hair Extensions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
