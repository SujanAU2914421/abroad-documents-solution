"use client";
import SideServicesBar from "@/components/services/sideServicesBar";
import React from "react";

export default function CertificationOfDocuments() {
	return (
		<div className="relative">
			<div className="relative py-16">
				<div className="relative flex justify-center font-bold text-3xl">Certification of Documents</div>
				<div className="relative text-sm flex justify-center">
					<div className="flex items-center gap-2 mt-2 text-gray-700">
						<div className="relative">Home</div>
						<div className="relative">{">"}</div>
						<div className="relative">Services</div>
						<div className="relative">{">"}</div>
						<div className="relative">Certification of Documents</div>
					</div>
				</div>
			</div>

			<div className="relative flex px-32 pb-16">
				<div className="relative w-[calc(100%-340px)] pr-8">
					<div className="relative h-[400px] w-full bg-gray-100"></div>

					<div className="relative font-sans mt-4">
						<h1 className="text-3xl font-bold">Professional Certification of Documents</h1>

						<p className="text-sm text-gray-700 leading-relaxed mb-4">
							Ensuring your documents are officially certified is vital for legal, academic, and
							professional purposes. Our <strong>Certification of Documents</strong> service provides you
							with trusted verification that your copies, translations, or originals are authentic and
							accepted by authorities.
						</p>

						<p className="text-sm text-gray-700 leading-relaxed mb-4">
							At <strong>[Your Company Name]</strong>, we offer thorough document certification carried
							out by authorized professionals to help you meet requirements for education, immigration,
							legal processes, and more.
						</p>

						<h2 className="text-2xl font-semibold mt-6 mb-2">Types of Certifications We Provide</h2>
						<ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
							<li>
								<strong>True Copy Certification:</strong> Verified copies of your original documents
							</li>
							<li>
								<strong>Translation Certification:</strong> Authentication of translated documents
							</li>
							<li>
								<strong>Notarized Certifications:</strong> Official notarization for legal validity
							</li>
							<li>
								<strong>Academic & Professional Documents:</strong> Certificates, transcripts, licenses
							</li>
						</ul>

						<h2 className="text-2xl font-semibold mt-6 mb-2">Why Choose Our Certification Services?</h2>
						<p className="text-sm text-gray-700 leading-relaxed mb-2">
							<strong>✔ Authorized Professionals:</strong> Certifications done by legally recognized
							authorities.
						</p>
						<p className="text-sm text-gray-700 leading-relaxed mb-2">
							<strong>✔ Trusted & Accepted:</strong> Our certifications meet standards required by
							government bodies, educational institutions, and employers.
						</p>
						<p className="text-sm text-gray-700 leading-relaxed mb-2">
							<strong>✔ Secure & Confidential:</strong> Your documents are handled with utmost care and
							privacy.
						</p>
						<p className="text-sm text-gray-700 leading-relaxed mb-4">
							<strong>✔ Efficient Service:</strong> Fast processing and delivery to meet your deadlines.
						</p>

						<h2 className="text-2xl font-semibold mt-6 mb-2">Who Should Use This Service?</h2>
						<p className="text-sm text-gray-700 leading-relaxed mb-4">
							Individuals, students, professionals, and businesses who require official document
							certification for academic admissions, visa applications, legal procedures, or employment
							verification.
						</p>

						<h2 className="text-2xl font-semibold mt-6 mb-2">Start Your Document Certification Today</h2>
						<p className="text-sm text-gray-700 leading-relaxed">
							Need reliable and official document certification? <strong>Contact us today</strong> or
							upload your files for a free consultation and prompt service.
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
