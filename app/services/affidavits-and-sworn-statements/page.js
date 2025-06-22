"use client";
import SideServicesBar from "@/components/services/sideServicesBar";
import React from "react";

export default function AffidavitsSwornStatements() {
	return (
		<div className="relative">
			<div className="relative py-16">
				<div className="relative flex justify-center font-bold text-3xl">Affidavits & Sworn Statements</div>
				<div className="relative text-sm flex justify-center">
					<div className="flex items-center gap-2 mt-2 text-gray-700">
						<div className="relative">Home</div>
						<div className="relative">{">"}</div>
						<div className="relative">Services</div>
						<div className="relative">{">"}</div>
						<div className="relative">Affidavits & Sworn Statements</div>
					</div>
				</div>
			</div>

			<div className="relative flex xl:px-32 lg:px-32 md:px-8 px-4 pb-16">
				<div className="relative xl:w-[calc(100%-340px)] lg:w-[calc(100%-340px)] md:w-[calc(100%-340px)] w-full xl:pr-8 lg:pr-8 md:pr-4 pr-0">
					<div className="relative h-[400px] w-full bg-gray-100"></div>

					<div className="relative font-sans mt-4">
						<h1 className="text-2xl font-bold">Legal Affidavits & Sworn Statement Services</h1>

						<p className="text-sm text-gray-700 leading-relaxed mb-4">
							When it comes to legally verifying your statements or declarations,{" "}
							<strong>affidavits and sworn statements</strong> are essential. These documents are used in
							courts, immigration cases, job applications, name changes, and a variety of legal and
							official matters.
						</p>

						<p className="text-sm text-gray-700 leading-relaxed mb-4">
							At <strong>[Your Company Name]</strong>, we provide{" "}
							<strong>professionally drafted, notarized affidavits and sworn statements</strong> tailored
							to your specific needs. Whether you`re submitting a personal declaration or an official
							business statement, we ensure it` s prepared and authenticated to meet all legal standards.
						</p>

						<h2 className="text-base text-gray-800 font-semibold mt-6 mb-2">Common Uses for Affidavits</h2>
						<ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
							<li>
								<strong>Identity Declarations:</strong> For name correction, address proof, and age
								declarations
							</li>
							<li>
								<strong>Relationship Affidavits:</strong> Marriage, guardianship, or family-related
								declarations
							</li>
							<li>
								<strong>Immigration Support:</strong> Statements required for visa or immigration
								procedures
							</li>
							<li>
								<strong>Financial Declarations:</strong> Income, property ownership, or asset statements
							</li>
							<li>
								<strong>Employment & Academic:</strong> Experience letters, gap declarations, or lost
								certificate claims
							</li>
						</ul>

						<h2 className="text-base text-gray-800 font-semibold mt-6 mb-2">What We Provide</h2>
						<p className="text-sm text-gray-700 leading-relaxed mb-2">
							<strong>✔ Drafting Services:</strong> Custom-written affidavits based on your situation and
							purpose
						</p>
						<p className="text-sm text-gray-700 leading-relaxed mb-2">
							<strong>✔ Notarization:</strong> Legally verified with official seals and signatures from
							certified notaries
						</p>
						<p className="text-sm text-gray-700 leading-relaxed mb-2">
							<strong>✔ Format Compliance:</strong> Fully compliant with court, embassy, or institutional
							requirements
						</p>
						<p className="text-sm text-gray-700 leading-relaxed mb-4">
							<strong>✔ Fast Turnaround:</strong> Get your documents prepared and notarized in as little
							as 24 hours
						</p>

						<h2 className="text-base text-gray-800 font-semibold mt-6 mb-2">Who Needs This?</h2>
						<p className="text-sm text-gray-700 leading-relaxed mb-4">
							Our affidavit services are ideal for students, working professionals, landlords, tenants,
							legal clients, NRIs, and anyone who requires a sworn statement for personal, official, or
							international use.
						</p>

						<h2 className="text-base text-gray-800 font-semibold mt-6 mb-2">
							Get Your Affidavit Prepared Today
						</h2>
						<p className="text-sm text-gray-700 leading-relaxed">
							Need a trustworthy team to prepare your affidavit? <strong>Contact us today</strong> to get
							started. Upload your requirements or visit our office for a hassle-free, professional
							service you can count on.
						</p>
					</div>
				</div>

				<div className="relative w-[340px] h-auto xl:blog lg:block md:block hidden">
					<SideServicesBar />
				</div>
			</div>
		</div>
	);
}
