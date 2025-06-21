"use client";
import SideServicesBar from "@/components/services/sideServicesBar";
import React from "react";

export default function CAAuditReportAssistance() {
	return (
		<div className="relative">
			<div className="relative py-16">
				<div className="relative flex justify-center font-bold text-3xl">CA/Audit Report (Assistance)</div>
				<div className="relative text-sm flex justify-center">
					<div className="flex items-center gap-2 mt-2 text-gray-700">
						<div className="relative">Home</div>
						<div className="relative">{">"}</div>
						<div className="relative">Services</div>
						<div className="relative">{">"}</div>
						<div className="relative">CA/Audit Report (Assistance)</div>
					</div>
				</div>
			</div>

			<div className="relative flex px-32 pb-16">
				<div className="relative w-[calc(100%-340px)] pr-8">
					<div className="relative h-[400px] w-full bg-gray-100"></div>

					<div className="relative font-sans mt-4">
						<h1 className="text-3xl font-bold">Expert CA & Audit Report Assistance</h1>

						<p className="text-sm text-gray-700 leading-relaxed mb-4">
							Navigating the complexities of Chartered Accountant (CA) reports and audit documentation can
							be challenging. Our <strong>CA/Audit Report Assistance</strong> service provides
							professional guidance and support to ensure your financial reports are accurate, compliant,
							and ready for submission.
						</p>

						<p className="text-sm text-gray-700 leading-relaxed mb-4">
							At <strong>[Your Company Name]</strong>, we work closely with experienced CAs and auditors
							to help you prepare, review, and finalize your audit reports, balance sheets, income
							statements, and other financial documents with precision and confidence.
						</p>

						<h2 className="text-2xl font-semibold mt-6 mb-2">Our Assistance Includes</h2>
						<ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
							<li>
								<strong>Preparation & Review:</strong> Drafting and checking CA and audit reports for
								accuracy and compliance
							</li>
							<li>
								<strong>Financial Statement Analysis:</strong> Helping interpret and explain financial
								data clearly
							</li>
							<li>
								<strong>Compliance Support:</strong> Ensuring reports meet regulatory standards and
								accounting principles
							</li>
							<li>
								<strong>Report Finalization:</strong> Formatting and organizing documents for official
								submission
							</li>
							<li>
								<strong>Consultation & Advice:</strong> Expert recommendations on improving financial
								reporting and audit processes
							</li>
						</ul>

						<h2 className="text-2xl font-semibold mt-6 mb-2">Why Choose Our CA/Audit Assistance?</h2>
						<p className="text-sm text-gray-700 leading-relaxed mb-2">
							<strong>✔ Experienced Professionals:</strong> Our team includes qualified CAs and auditors
							with years of industry expertise.
						</p>
						<p className="text-sm text-gray-700 leading-relaxed mb-2">
							<strong>✔ Accurate & Compliant Reports:</strong> We focus on precision and adherence to
							legal and accounting standards.
						</p>
						<p className="text-sm text-gray-700 leading-relaxed mb-2">
							<strong>✔ Confidentiality:</strong> Your financial data is handled with strict privacy and
							security.
						</p>
						<p className="text-sm text-gray-700 leading-relaxed mb-4">
							<strong>✔ Timely Delivery:</strong> Meet your deadlines with our efficient support and fast
							turnaround.
						</p>

						<h2 className="text-2xl font-semibold mt-6 mb-2">Who Can Benefit?</h2>
						<p className="text-sm text-gray-700 leading-relaxed mb-4">
							This service is perfect for businesses, entrepreneurs, NGOs, and individuals needing
							professional help with CA and audit reports for tax filing, compliance, loan applications,
							or internal audits.
						</p>

						<h2 className="text-2xl font-semibold mt-6 mb-2">Get Professional CA/Audit Support Now</h2>
						<p className="text-sm text-gray-700 leading-relaxed">
							Need expert assistance with your CA or audit reports? <strong>Contact us today</strong> to
							discuss your requirements and get reliable support tailored to your needs.
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
