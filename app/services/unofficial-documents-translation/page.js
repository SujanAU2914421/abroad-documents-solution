"use client";
import SideServicesBar from "@/components/services/sideServicesBar";
import React from "react";

export default function UnofficialDocumentsTranslation() {
	return (
		<div className="relative">
			<div className="relative py-16">
				<div className="relative flex justify-center font-bold text-3xl">Unofficial Documents Translation</div>
				<div className="relative text-sm flex justify-center">
					<div className="flex items-center gap-2 mt-2 text-gray-700">
						<div className="relative">Home</div>
						<div className="relative">{">"}</div>
						<div className="relative">Services</div>
						<div className="relative">{">"}</div>
						<div className="relative">Unofficial Documents Translation</div>
					</div>
				</div>
			</div>

			<div className="relative flex px-32 pb-16">
				<div className="relative w-[calc(100%-340px)] pr-8">
					<div className="relative h-[400px] w-full bg-gray-100"></div>

					<div className="relative font-sans mt-4">
						<h1 className="text-3xl font-bold">Reliable Unofficial Documents Translation</h1>

						<p className="text-sm text-gray-700 leading-relaxed mb-4">
							Not all documents require official certification, but clear and accurate translation is
							still key. Our <strong>Unofficial Documents Translation</strong> service is perfect for
							personal letters, informal contracts, manuals, or any document where you need understanding
							without legal notarization.
						</p>

						<p className="text-sm text-gray-700 leading-relaxed mb-4">
							At <strong>[Your Company Name]</strong>, we provide precise translations done by native
							speakers who respect tone, context, and meaning — ensuring your message is conveyed
							perfectly across languages without the extra costs of official certification.
						</p>

						<h2 className="text-2xl font-semibold mt-6 mb-2">Types of Unofficial Documents We Translate</h2>
						<ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
							<li>
								<strong>Personal Letters & Emails:</strong> Correspondence, invitations, and notes
							</li>
							<li>
								<strong>Informal Agreements:</strong> Rental agreements, family arrangements
							</li>
							<li>
								<strong>Instruction Manuals:</strong> User guides, how-to documents
							</li>
							<li>
								<strong>Marketing Materials:</strong> Flyers, brochures, website copy
							</li>
							<li>
								<strong>Creative Content:</strong> Stories, poems, blogs, and more
							</li>
						</ul>

						<h2 className="text-2xl font-semibold mt-6 mb-2">Why Choose Our Unofficial Translation?</h2>
						<p className="text-sm text-gray-700 leading-relaxed mb-2">
							<strong>✔ Fast & Affordable:</strong> Quick turnaround with budget-friendly pricing for
							non-certified needs.
						</p>
						<p className="text-sm text-gray-700 leading-relaxed mb-2">
							<strong>✔ Natural Tone Preservation:</strong> We keep your style and tone intact for
							authentic communication.
						</p>
						<p className="text-sm text-gray-700 leading-relaxed mb-2">
							<strong>✔ Wide Language Support:</strong> Translations available for dozens of languages by
							native speakers.
						</p>
						<p className="text-sm text-gray-700 leading-relaxed mb-4">
							<strong>✔ Confidential & Secure:</strong> Your documents are handled with the utmost privacy
							and security.
						</p>

						<h2 className="text-2xl font-semibold mt-6 mb-2">Who Needs This Service?</h2>
						<p className="text-sm text-gray-700 leading-relaxed mb-4">
							This service is ideal for individuals, families, freelancers, small businesses, and
							creatives who want quality translations without formal certification or notarization.
						</p>

						<h2 className="text-2xl font-semibold mt-6 mb-2">Get Started with Your Translation Today</h2>
						<p className="text-sm text-gray-700 leading-relaxed">
							Need clear, accurate translations without the official paperwork?{" "}
							<strong>Contact us today</strong> or upload your documents to get a free quote and fast
							service.
						</p>
					</div>
				</div>

				<div className="relative w-[340px] h-auto">
					<SideServicesBar />
				</div>
			</div>
		</div>
	);
}
