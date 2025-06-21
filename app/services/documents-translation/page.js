"use client";
import SideServicesBar from "@/components/services/sideServicesBar";
import React from "react";

export default function DocumentTranslation() {
	return (
		<div className="relative">
			<div className="relative py-16">
				<div className="relative flex justify-center font-bold text-3xl">Documents Translation</div>
				<div className="relative text-sm flex justify-center">
					<div className="flex items-center gap-2 mt-2 text-gray-700">
						<div className="relative">Home</div>
						<div className="relative">{">"}</div>
						<div className="relative">Services</div>
						<div className="relative">{">"}</div>
						<div className="relative">Documents Translation</div>
					</div>
				</div>
			</div>
			<div className="relative flex px-32 pb-16">
				<div className="relative w-[calc(100%-340px)] pr-8">
					<div className="relative h-[400px] w-full bg-gray-100"></div>
					<div className="relative font-sans mt-4">
						<h1 className="text-3xl font-bold">Professional Document Translation Services</h1>

						<p className="text-sm text-gray-700 leading-relaxed mb-4">
							In today’s interconnected world, <strong>accurate document translation</strong> is more
							important than ever. Whether you`re a business expanding globally, a student submitting
							academic papers, or an individual handling immigration documents — precision, clarity, and
							cultural sensitivity are non-negotiable.
						</p>

						<p className="text-sm text-gray-700 leading-relaxed mb-4">
							At <strong>[Your Company Name]</strong>, we offer{" "}
							<strong>professional document translation services</strong> in over 100 languages, handled
							by certified linguists who are native speakers. From legal contracts and business reports to
							medical records and technical manuals, we ensure your message is conveyed exactly as
							intended, without losing tone, intent, or accuracy.
						</p>

						<h2 className="text-2xl font-semibold mt-6 mb-2">What We Translate</h2>
						<ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
							<li>
								<strong>Legal Documents:</strong> Contracts, agreements, court transcripts, and more
							</li>
							<li>
								<strong>Business Documents:</strong> Reports, presentations, proposals, financial
								statements
							</li>
							<li>
								<strong>Academic Papers:</strong> Research papers, theses, diplomas, transcripts
							</li>
							<li>
								<strong>Medical Records:</strong> Patient files, prescriptions, clinical studies
							</li>
							<li>
								<strong>Technical Manuals:</strong> User guides, product documentation, safety
								instructions
							</li>
						</ul>

						<h2 className="text-2xl font-semibold mt-6 mb-2">Why Choose Us?</h2>

						<p className="text-sm text-gray-700 leading-relaxed mb-2">
							<strong>✔ Certified Translators:</strong> All our translators are professionals with
							industry experience and native fluency.
						</p>
						<p className="text-sm text-gray-700 leading-relaxed mb-2">
							<strong>✔ Accuracy & Confidentiality:</strong> We prioritize precision while keeping your
							information 100% secure.
						</p>
						<p className="text-sm text-gray-700 leading-relaxed mb-2">
							<strong>✔ Fast Turnaround:</strong> Need your documents quickly? We offer flexible deadlines
							without compromising on quality.
						</p>
						<p className="text-sm text-gray-700 leading-relaxed mb-4">
							<strong>✔ Industry Expertise:</strong> Our translators are specialized in various fields
							including legal, technical, healthcare, academic, and more.
						</p>

						<h2 className="text-2xl font-semibold mt-6 mb-2">Industries We Serve</h2>
						<p className="text-sm text-gray-700 leading-relaxed mb-4">
							Our document translation services cater to a wide range of sectors including law firms,
							hospitals, academic institutions, multinational corporations, government agencies, and
							non-profits.
						</p>

						<h2 className="text-2xl font-semibold mt-6 mb-2">Get Started Today</h2>
						<p className="text-sm text-gray-700 leading-relaxed">
							Ready to translate your documents with clarity and confidence?{" "}
							<strong>Contact us today</strong> or upload your files to receive a free quote. Let us help
							you bridge the language gap — accurately, efficiently, and professionally.
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
