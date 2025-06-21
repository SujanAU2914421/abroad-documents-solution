"use client";
import SideServicesBar from "@/components/services/sideServicesBar";
import React from "react";

export default function MultilingualDocumentTranslation() {
	return (
		<div className="relative">
			<div className="relative py-16">
				<div className="relative flex justify-center font-bold text-3xl">
					Multilingual Document Translation & Verification
				</div>
				<div className="relative text-sm flex justify-center">
					<div className="flex items-center gap-2 mt-2 text-gray-700">
						<div className="relative">Home</div>
						<div className="relative">{">"}</div>
						<div className="relative">Services</div>
						<div className="relative">{">"}</div>
						<div className="relative">Multilingual Document Translation & Verification</div>
					</div>
				</div>
			</div>

			<div className="relative flex px-32 pb-16">
				<div className="relative w-[calc(100%-340px)] pr-8">
					<div className="relative h-[400px] w-full bg-gray-100"></div>

					<div className="relative font-sans mt-4">
						<h1 className="text-3xl font-bold">Multilingual Document Translation & Legal Verification</h1>

						<p className="text-sm text-gray-700 leading-relaxed mb-4">
							In today’s global world, documents are required across borders, in different languages, and
							under strict legal standards. Our{" "}
							<strong>Multilingual Document Translation & Verification</strong> service bridges the gap
							between languages, laws, and accuracy — ensuring your documents are not only translated, but
							legally verified and accepted internationally.
						</p>

						<p className="text-sm text-gray-700 leading-relaxed mb-4">
							At <strong>[Your Company Name]</strong>, we provide{" "}
							<strong>certified translation and verification services</strong> in multiple languages —
							including English, Nepali, Hindi, Chinese, Japanese, German, French, Spanish, Korean, and
							more. Every document goes through a two-step process: precise human translation by native
							experts, and legal verification to meet the destination country’s requirements.
						</p>

						<h2 className="text-2xl font-semibold mt-6 mb-2">Languages We Support</h2>
						<ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
							<li>English ⇄ Nepali</li>
							<li>English ⇄ Hindi</li>
							<li>English ⇄ Chinese / Japanese / Korean</li>
							<li>English ⇄ German / French / Spanish</li>
							<li>And more — based on your destination country’s needs</li>
						</ul>

						<h2 className="text-2xl font-semibold mt-6 mb-2">Types of Documents We Handle</h2>
						<ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
							<li>
								<strong>Academic Certificates:</strong> Transcripts, diplomas, mark sheets
							</li>
							<li>
								<strong>Legal Papers:</strong> Affidavits, court orders, power of attorney
							</li>
							<li>
								<strong>Immigration Documents:</strong> Birth certificates, passports, marriage
								certificates
							</li>
							<li>
								<strong>Business Docs:</strong> Agreements, tenders, tax documents, export/import files
							</li>
							<li>
								<strong>Medical Reports:</strong> Hospital files, prescriptions, insurance claims
							</li>
						</ul>

						<h2 className="text-2xl font-semibold mt-6 mb-2">What Makes Our Service Unique?</h2>
						<p className="text-sm text-gray-700 leading-relaxed mb-2">
							<strong>✔ Native Human Translators:</strong> Every document is translated by real, qualified
							linguists — not AI tools.
						</p>
						<p className="text-sm text-gray-700 leading-relaxed mb-2">
							<strong>✔ Legal Verification:</strong> We offer notary and legal approval services for
							documents that require official status.
						</p>
						<p className="text-sm text-gray-700 leading-relaxed mb-2">
							<strong>✔ Quality Control:</strong> Each translation is reviewed and verified for
							terminology accuracy.
						</p>
						<p className="text-sm text-gray-700 leading-relaxed mb-4">
							<strong>✔ Fast & Reliable:</strong> We meet urgent deadlines without compromising quality or
							legal standards.
						</p>

						<h2 className="text-2xl font-semibold mt-6 mb-2">Who Is This For?</h2>
						<p className="text-sm text-gray-700 leading-relaxed mb-4">
							This service is ideal for students applying abroad, professionals migrating for work,
							businesses expanding overseas, or legal representatives dealing with multilingual case
							files. We ensure that every word is understood — and approved — in any language.
						</p>

						<h2 className="text-2xl font-semibold mt-6 mb-2">Let’s Get Started</h2>
						<p className="text-sm text-gray-700 leading-relaxed">
							Ready to translate and verify your documents for international use?{" "}
							<strong>Contact us now</strong> to receive a quote, or upload your files for a free
							consultation. We’re here to support your global journey — in every language you need.
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
