import React from "react";
import Link from "next/link";

export default function Footer() {
	return (
		<div className="bg-gray-900 text-gray-100 pb-8 pt-16 px-6 md:px-20 tracking-wide">
			<div className="grid md:grid-cols-4 gap-10">
				{/* About */}
				<div className="space-y-4">
					<div className="text-xl font-semibold">Abroad Documents Solution Nepal</div>
					<div className="text-xs text-gray-400">
						<span>
							Fast, Reliable Online Notary & Translation Services in Nepal. Need documents notarized or
							translated? We serve individuals & businesses with over 10 years of trusted experience.
						</span>
					</div>
					<Link href="/about-us" className="text-purple-400 hover:underline text-sm block">
						Read More About Us →
					</Link>
				</div>

				{/* Quick Links */}
				<div className="space-y-2">
					<div className="text-lg font-semibold mb-4">Quick Links</div>
					<div className="text-xs space-y-3 flex flex-col text-gray-300">
						<Link href="/faqs" className="hover:underline">
							FAQs
						</Link>
						<Link href="/blog" className="hover:underline">
							Blog
						</Link>
						<Link href="/testimonials" className="hover:underline">
							Testimonials
						</Link>
						<Link href="/search" className="hover:underline">
							Search
						</Link>
						<Link href="/privacy-policy" className="hover:underline">
							Privacy Policy
						</Link>
						<Link href="/terms" className="hover:underline">
							Terms & Conditions
						</Link>
					</div>
				</div>

				{/* Services */}
				<div className="space-y-2">
					<div className="text-lg font-semibold mb-4">Services</div>
					<div className="text-xs space-y-3 flex flex-col text-gray-300">
						<Link href="/services/sop" className="hover:underline">
							Statement of Purpose (SOP)
						</Link>
						<Link href="/services/appeal-letter" className="hover:underline">
							Appeal Letter Writing
						</Link>
						<Link href="/services/localization" className="hover:underline">
							Website Localization
						</Link>
						<Link href="/services/mofa" className="hover:underline">
							MOFA Attestation
						</Link>
						<Link href="/services/legalization" className="hover:underline">
							Legalization of Documents
						</Link>
					</div>
				</div>

				{/* Contact Info */}
				<div className="space-y-4">
					<div className="text-lg font-semibold mb-4">Contact Info</div>
					<div className="text-xs text-gray-400 space-y-3">
						<div>
							<span>📞 </span>
							<a href="tel:+9779765979296" className="hover:underline">
								+977 9765979296
							</a>
						</div>
						<div>
							<span>📧 </span>
							<a href="mailto:info@notarynepal.com" className="hover:underline">
								info@notarynepal.com
							</a>
						</div>
						<div>📍 Anamanagar 29, Kathmandu, Nepal</div>
						<div>🕒 Sun - Fri, 10:00 AM - 6:00 PM</div>
						<div className="text-green-400">✅ Support available 24/7</div>
					</div>
				</div>
			</div>

			{/* Footer Bottom */}
			<div className="mt-10 border-t border-gray-700 pt-6 text-sm text-center text-gray-500">
				<span>&copy; {new Date().getFullYear()} Notary Nepal. All rights reserved.</span>
			</div>
		</div>
	);
}
