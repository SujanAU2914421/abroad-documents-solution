"use client";
import SideServicesBar from "@/components/services/sideServicesBar";
import React from "react";

export default function DocumentsNotarization() {
	return (
		<div className="relative">
			<div className="relative py-16">
				<div className="relative flex justify-center font-bold text-3xl">Documents Notarization</div>
				<div className="relative text-sm flex justify-center">
					<div className="flex items-center gap-2 mt-2 text-gray-700">
						<div className="relative">Home</div>
						<div className="relative">{">"}</div>
						<div className="relative">Services</div>
						<div className="relative">{">"}</div>
						<div className="relative">Documents Notarization</div>
					</div>
				</div>
			</div>

			<div className="relative flex px-32 pb-16">
				<div className="relative w-[calc(100%-340px)] pr-8">
					<div className="relative h-[400px] w-full bg-gray-100"></div>

					<div className="relative font-sans mt-4">
						<h1 className="text-3xl font-bold">Reliable Documents Notarization Services</h1>

						<p className="text-sm text-gray-700 leading-relaxed mb-4">
							In legal, academic, or professional matters, having your documents notarized properly is
							essential.
							<strong> Notarization verifies the authenticity of your documents</strong> and adds a layer
							of trust and credibility to their use — whether locally or internationally.
						</p>

						<p className="text-sm text-gray-700 leading-relaxed mb-4">
							At <strong>[Your Company Name]</strong>, we provide{" "}
							<strong>affordable and fast notarization services</strong>
							for all types of documents. Our certified notary professionals ensure that your paperwork
							meets all legal requirements, and we handle every process with precision, confidentiality,
							and care.
						</p>

						<h2 className="text-2xl font-semibold mt-6 mb-2">Documents We Notarize</h2>
						<ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
							<li>
								<strong>Affidavits & Declarations:</strong> Sworn statements for legal or personal use
							</li>
							<li>
								<strong>Power of Attorney:</strong> Authorizations for personal or financial
								representation
							</li>
							<li>
								<strong>Property Documents:</strong> Lease agreements, sale deeds, and more
							</li>
							<li>
								<strong>Educational Certificates:</strong> Degree, transcript, and diploma verification
							</li>
							<li>
								<strong>Business Contracts:</strong> Agreements, MoUs, and official company forms
							</li>
						</ul>

						<h2 className="text-2xl font-semibold mt-6 mb-2">Why Choose Us?</h2>

						<p className="text-sm text-gray-700 leading-relaxed mb-2">
							<strong>✔ Certified Notaries:</strong> Our team consists of licensed professionals
							recognized by legal authorities.
						</p>
						<p className="text-sm text-gray-700 leading-relaxed mb-2">
							<strong>✔ Fast Processing:</strong> We provide same-day or next-day notarization for most
							documents.
						</p>
						<p className="text-sm text-gray-700 leading-relaxed mb-2">
							<strong>✔ Secure & Confidential:</strong> We treat every document with strict privacy and
							security.
						</p>
						<p className="text-sm text-gray-700 leading-relaxed mb-4">
							<strong>✔ Convenient Services:</strong> Walk-in, appointment-based, and remote options
							available.
						</p>

						<h2 className="text-2xl font-semibold mt-6 mb-2">Who Needs This?</h2>
						<p className="text-sm text-gray-700 leading-relaxed mb-4">
							Our document notarization services are essential for individuals, students, professionals,
							business owners, and legal representatives who require verified documentation for official
							use across borders or institutions.
						</p>

						<h2 className="text-2xl font-semibold mt-6 mb-2">Get Your Documents Notarized Today</h2>
						<p className="text-sm text-gray-700 leading-relaxed">
							Don’t risk rejection or delays. <strong>Contact us today</strong> to get your documents
							notarized by trusted professionals. Submit your files online or visit us in person for
							quick, secure, and certified service.
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
