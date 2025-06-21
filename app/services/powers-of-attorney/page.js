"use client";
import SideServicesBar from "@/components/services/sideServicesBar";
import React from "react";

export default function PowersOfAttorney() {
	return (
		<div className="relative">
			<div className="relative py-16">
				<div className="relative flex justify-center font-bold text-3xl">Powers of Attorney</div>
				<div className="relative text-sm flex justify-center">
					<div className="flex items-center gap-2 mt-2 text-gray-700">
						<div className="relative">Home</div>
						<div className="relative">{">"}</div>
						<div className="relative">Services</div>
						<div className="relative">{">"}</div>
						<div className="relative">Powers of Attorney</div>
					</div>
				</div>
			</div>

			<div className="relative flex px-32 pb-16">
				<div className="relative w-[calc(100%-340px)] pr-8">
					<div className="relative h-[400px] w-full bg-gray-100"></div>

					<div className="relative font-sans mt-4">
						<h1 className="text-3xl font-bold">Comprehensive Powers of Attorney Services</h1>

						<p className="text-sm text-gray-700 leading-relaxed mb-4">
							A <strong>Power of Attorney (POA)</strong> is a legal document that grants one person the
							authority to act on behalf of another in legal, financial, or personal matters. Whether you
							need a general, special, or durable POA, our professional service ensures your documents are
							properly drafted, translated, and notarized for full legal effect.
						</p>

						<p className="text-sm text-gray-700 leading-relaxed mb-4">
							At <strong>[Your Company Name]</strong>, we assist individuals, families, and businesses in
							preparing and validating Powers of Attorney that meet all legal requirements, helping you
							authorize trusted representatives with confidence and clarity.
						</p>

						<h2 className="text-2xl font-semibold mt-6 mb-2">Our Services Include</h2>
						<ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
							<li>
								<strong>Drafting POA Documents:</strong> Customized Powers of Attorney tailored to your
								needs
							</li>
							<li>
								<strong>Translation Services:</strong> Certified translations for POAs required in
								different languages or jurisdictions
							</li>
							<li>
								<strong>Notarization & Legalization:</strong> Official notarization and authentication
								for legal validity
							</li>
							<li>
								<strong>Consultation & Guidance:</strong> Expert advice on the types and scope of POA
								best suited for your situation
							</li>
						</ul>

						<h2 className="text-2xl font-semibold mt-6 mb-2">Why Trust Us?</h2>
						<p className="text-sm text-gray-700 leading-relaxed mb-2">
							<strong>✔ Legal Expertise:</strong> We collaborate with legal professionals to ensure your
							POA is compliant and enforceable.
						</p>
						<p className="text-sm text-gray-700 leading-relaxed mb-2">
							<strong>✔ Secure Handling:</strong> Your documents and personal information are treated with
							strict confidentiality.
						</p>
						<p className="text-sm text-gray-700 leading-relaxed mb-2">
							<strong>✔ Quick Turnaround:</strong> Efficient processing so you can authorize your agents
							without delay.
						</p>
						<p className="text-sm text-gray-700 leading-relaxed mb-4">
							<strong>✔ Nationwide Support:</strong> Services available for clients across regions, with
							remote assistance.
						</p>

						<h2 className="text-2xl font-semibold mt-6 mb-2">Who Needs a Power of Attorney?</h2>
						<p className="text-sm text-gray-700 leading-relaxed mb-4">
							Powers of Attorney are essential for individuals managing property, finances, or legal
							matters through a trusted representative — whether due to travel, illness, business, or
							other reasons.
						</p>

						<h2 className="text-2xl font-semibold mt-6 mb-2">Get Started with Your POA Today</h2>
						<p className="text-sm text-gray-700 leading-relaxed">
							Ready to grant authority securely and legally? <strong>Contact us now</strong> for
							professional assistance drafting, translating, and notarizing your Power of Attorney
							documents.
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
