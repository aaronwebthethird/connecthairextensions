import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Clip-In Hair Extensions Guide - Types, Application & Care',
  description: 'Complete educational guide to clip-in hair extensions. Learn about different types, how to apply them, care instructions, and what to expect.',
  openGraph: {
    title: 'Clip-In Hair Extensions - Complete Educational Guide',
    description: 'Learn everything about clip-in extensions, from application to care and maintenance.',
    type: 'website',
  }
};

export default function ClipInExtensionsPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FDFCFB' }}>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6" style={{ color: '#123D35' }}>
            Clip-In Hair Extensions Guide
          </h1>

          <p className="text-xl mb-12" style={{ color: '#5A5A5A' }}>
            Understanding the different types of clip-in extensions, how to apply them,
            and how to care for them properly.
          </p>

          {/* Types Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="rounded-lg p-8" style={{ border: '1px solid #E5DDD5' }}>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#123D35' }}>
                <Link href="/hair-clip-extensions-products/pony-tail" style={{ color: '#123D35' }}>
                  Ponytail Extensions
                </Link>
              </h3>
              <p className="mb-4" style={{ color: '#5A5A5A' }}>
                Instant volume and length specifically for ponytail styles. Available in
                wrap-around or claw clip varieties.
              </p>
              <ul className="space-y-2 mb-6 text-sm" style={{ color: '#5A5A5A' }}>
                <li>• Wrap-around or claw clip attachment styles</li>
                <li>• 14" to 24" lengths typically available</li>
                <li>• Heat-styleable if using human hair</li>
                <li>• Multiple color options</li>
              </ul>
              <Link
                href="/hair-clip-extensions-products/pony-tail"
                className="font-semibold"
                style={{ color: '#257165' }}
              >
                Learn More →
              </Link>
            </div>

            <div className="rounded-lg p-8" style={{ border: '1px solid #E5DDD5' }}>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#123D35' }}>
                Full Head Clip-Ins
              </h3>
              <p className="mb-4" style={{ color: '#5A5A5A' }}>
                Complete transformation with full volume and length. Multiple wefts
                that layer throughout your hair for seamless coverage.
              </p>
              <ul className="space-y-2 mb-6 text-sm" style={{ color: '#5A5A5A' }}>
                <li>• 7-10 piece sets for full coverage</li>
                <li>• 100g to 220g weight options</li>
                <li>• Secure grip clips on each weft</li>
                <li>• Reusable for 6-12 months with proper care</li>
              </ul>
            </div>

            <div className="rounded-lg p-8" style={{ border: '1px solid #E5DDD5' }}>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#123D35' }}>
                Volume Boosters
              </h3>
              <p className="mb-4" style={{ color: '#5A5A5A' }}>
                Add thickness and fullness without added length. Ideal for fine or
                thinning hair that needs extra volume at the crown.
              </p>
              <ul className="space-y-2 mb-6 text-sm" style={{ color: '#5A5A5A' }}>
                <li>• Lightweight design for comfort</li>
                <li>• Crown volume enhancement</li>
                <li>• 3-5 piece sets typically</li>
                <li>• Designed for undetectable placement</li>
              </ul>
            </div>

            <div className="rounded-lg p-8" style={{ border: '1px solid #E5DDD5' }}>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#123D35' }}>
                Highlight Pieces
              </h3>
              <p className="mb-4" style={{ color: '#5A5A5A' }}>
                Add dimension and color without permanent dye. Streak, balayage, and ombre
                options for temporary style changes.
              </p>
              <ul className="space-y-2 mb-6 text-sm" style={{ color: '#5A5A5A' }}>
                <li>• No bleach or dye needed</li>
                <li>• Mix and match colors</li>
                <li>• Single or multi-piece sets</li>
                <li>• Temporary color change option</li>
              </ul>
            </div>
          </div>

          {/* Why Choose Clip-Ins */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8" style={{ color: '#123D35' }}>
              Why Choose Clip-In Extensions?
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: '#123D35' }}>
                  Instant Results, Zero Commitment
                </h3>
                <p className="mb-4" style={{ color: '#3A3A3A' }}>
                  Unlike permanent extensions, clip-ins can be applied in minutes and removed
                  just as quickly. Perfect for those who want versatility and the option to
                  change their look day by day.
                </p>
                <p style={{ color: '#3A3A3A' }}>
                  You can wear them for special events only, or use them daily - the choice
                  is entirely yours with no long-term commitment required.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: '#123D35' }}>
                  Human Hair vs. Synthetic
                </h3>
                <p className="mb-4" style={{ color: '#3A3A3A' }}>
                  Clip-in extensions come in both human hair and synthetic fiber options.
                  Human hair (particularly Remy hair with aligned cuticles) offers the most
                  natural look and versatility:
                </p>
                <ul className="list-disc pl-6 space-y-2" style={{ color: '#3A3A3A' }}>
                  <li>Heat style with flat irons, curling wands, and blow dryers</li>
                  <li>Can be colored or highlighted to match your natural hair</li>
                  <li>Wash and condition like your own hair</li>
                  <li>Typically lasts 6-12 months with proper care</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: '#123D35' }}>
                  Affordable Entry Point
                </h3>
                <p style={{ color: '#3A3A3A' }}>
                  Compared to permanent extension methods (keratin bonds, micro rings, etc.),
                  clip-ins have a much lower upfront cost. Quality sets range from £50-£300
                  depending on hair quality, length, and weight. This makes them accessible
                  for those wanting to try extensions without a major financial commitment.
                </p>
              </div>
            </div>
          </div>

          {/* How to Apply */}
          <div className="p-8 rounded-lg mb-16" style={{ backgroundColor: '#F8F5F2' }}>
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#123D35' }}>
              How to Apply Clip-In Extensions
            </h2>

            <ol className="space-y-4">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm text-white" style={{ backgroundColor: '#123D35' }}>
                  1
                </span>
                <div>
                  <h4 className="font-bold mb-1" style={{ color: '#123D35' }}>Section Your Hair</h4>
                  <p className="text-sm" style={{ color: '#5A5A5A' }}>
                    Part your hair horizontally from ear to ear, about 2 inches above your neck.
                    Clip the top section up and out of the way.
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm text-white" style={{ backgroundColor: '#123D35' }}>
                  2
                </span>
                <div>
                  <h4 className="font-bold mb-1" style={{ color: '#123D35' }}>Tease for Grip</h4>
                  <p className="text-sm" style={{ color: '#5A5A5A' }}>
                    Lightly backcomb the roots of the bottom section to create texture.
                    This helps the clips grip securely throughout the day.
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm text-white" style={{ backgroundColor: '#123D35' }}>
                  3
                </span>
                <div>
                  <h4 className="font-bold mb-1" style={{ color: '#123D35' }}>Attach the Weft</h4>
                  <p className="text-sm" style={{ color: '#5A5A5A' }}>
                    Open the clips on your extension weft, position it close to the roots,
                    and snap each clip firmly into place on your teased hair.
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm text-white" style={{ backgroundColor: '#123D35' }}>
                  4
                </span>
                <div>
                  <h4 className="font-bold mb-1" style={{ color: '#123D35' }}>Layer and Repeat</h4>
                  <p className="text-sm" style={{ color: '#5A5A5A' }}>
                    Release another section of hair about 2 inches above the first weft.
                    Repeat the teasing and clipping process, working your way up to the crown.
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm text-white" style={{ backgroundColor: '#123D35' }}>
                  5
                </span>
                <div>
                  <h4 className="font-bold mb-1" style={{ color: '#123D35' }}>Blend and Style</h4>
                  <p className="text-sm" style={{ color: '#5A5A5A' }}>
                    Once all wefts are in place, release your top layer of hair to cover the clips.
                    Style as desired, blending your natural hair with the extensions.
                  </p>
                </div>
              </li>
            </ol>

            <div className="mt-8 p-6 rounded" style={{ backgroundColor: 'white', borderLeft: '4px solid #123D35' }}>
              <p className="text-sm mb-0" style={{ color: '#3A3A3A' }}>
                <strong>Pro Tip:</strong> Practice the application process several times before
                wearing your extensions out. It typically takes 3-4 attempts to become comfortable
                with the technique and achieve natural-looking results.
              </p>
            </div>
          </div>

          {/* Care Guide */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8" style={{ color: '#123D35' }}>
              Caring for Your Clip-In Extensions
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#123D35' }}>Washing</h3>
                <ul className="space-y-2 text-sm" style={{ color: '#3A3A3A' }}>
                  <li>• Wash every 15-30 wears, or when product buildup occurs</li>
                  <li>• Use sulfate-free shampoo and moisturizing conditioner</li>
                  <li>• Gently detangle with a wide-tooth comb before washing</li>
                  <li>• Let air dry on a towel or use low heat</li>
                  <li>• Never sleep in wet extensions</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#123D35' }}>Styling</h3>
                <ul className="space-y-2 text-sm" style={{ color: '#3A3A3A' }}>
                  <li>• Always apply heat protectant before styling</li>
                  <li>• Use heat tools at 300°F (150°C) or lower</li>
                  <li>• Avoid applying heat near the clips</li>
                  <li>• Curl, straighten, or wave like natural hair</li>
                  <li>• Minimize product use to extend lifespan</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#123D35' }}>Storage</h3>
                <ul className="space-y-2 text-sm" style={{ color: '#3A3A3A' }}>
                  <li>• Store in original packaging or extension hanger</li>
                  <li>• Keep away from direct sunlight and heat</li>
                  <li>• Brush gently before storing to prevent tangling</li>
                  <li>• Use silk or satin storage bags for protection</li>
                  <li>• Never fold or crease the wefts</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#123D35' }}>Maintenance</h3>
                <ul className="space-y-2 text-sm" style={{ color: '#3A3A3A' }}>
                  <li>• Brush before and after each wear</li>
                  <li>• Use extension-friendly hair products</li>
                  <li>• Avoid oils and serums near the clips</li>
                  <li>• Check clips regularly for damage</li>
                  <li>• Replace clips if they become loose or broken</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Limitations */}
          <div className="p-8 rounded-lg mb-16" style={{ background: 'linear-gradient(135deg, #E8F4F2 0%, #D4E9E5 100%)' }}>
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#123D35' }}>
              Limitations to Consider
            </h2>

            <div className="space-y-4" style={{ color: '#3A3A3A' }}>
              <div>
                <h4 className="font-bold mb-2">Daily Application Time</h4>
                <p className="text-sm">
                  Most people need 10-20 minutes daily to apply and blend clip-in extensions.
                  This time commitment adds up and can become tedious for daily wear.
                </p>
              </div>

              <div>
                <h4 className="font-bold mb-2">Not Suitable for All Activities</h4>
                <p className="text-sm">
                  You must remove clip-ins before sleeping, swimming, or showering. High-impact
                  activities like vigorous workouts may cause them to slip or become visible.
                </p>
              </div>

              <div>
                <h4 className="font-bold mb-2">Color Matching Challenges</h4>
                <p className="text-sm">
                  Finding a perfect color match can be difficult, especially if you have highlights,
                  lowlights, or multi-tonal hair. Pre-packaged colors rarely match exactly.
                </p>
              </div>

              <div>
                <h4 className="font-bold mb-2">Limited Styling Options</h4>
                <p className="text-sm">
                  Updos, high ponytails, and braids may expose clips. Your styling options are
                  somewhat limited compared to permanent extension methods.
                </p>
              </div>
            </div>
          </div>

          {/* Compare with Permanent */}
          <div className="pt-12" style={{ borderTop: '2px solid #E5DDD5' }}>
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#123D35' }}>
              Considering Other Extension Methods?
            </h2>
            <p className="mb-8" style={{ color: '#5A5A5A' }}>
              If you're looking for longer-term solutions that don't require daily application,
              you might want to explore permanent extension methods like keratin bonds or micro rings.
            </p>
            <Link
              href="/permanent-hair-extensions"
              className="inline-block px-8 py-4 rounded-lg font-semibold transition"
              style={{ backgroundColor: '#123D35', color: 'white' }}
            >
              Learn About Permanent Extensions
            </Link>
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
              <h3 className="font-bold mb-3" style={{ color: '#123D35' }}>Extension Guides</h3>
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
                  <Link href="/permanent-hair-extensions" style={{ color: '#5A5A5A' }}>
                    Permanent Extensions
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
