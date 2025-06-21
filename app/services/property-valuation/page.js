"use client";
import SideServicesBar from "@/components/services/sideServicesBar";
import React from "react";

export default function PropertyValuation() {
	return (
		<div className="relative">
			<div className="relative py-16">
				<div className="relative flex justify-center font-bold text-3xl">Property Valuation</div>
				<div className="relative text-sm flex justify-center">
					<div className="flex items-center gap-2 mt-2 text-gray-700">
						<div className="relative">Home</div>
						<div className="relative">{">"}</div>
						<div className="relative">Services</div>
						<div className="relative">{">"}</div>
						<div className="relative">Property Valuation</div>
					</div>
				</div>
			</div>

			<div className="relative flex px-32 pb-16">
				<div className="relative w-[calc(100%-340px)] pr-8">
					<div className="relative h-[400px] w-full bg-gray-100"></div>

					<div className="relative font-sans mt-4">
						<h1 className="text-3xl font-bold">Certified Property Valuation Services</h1>

						<p className="text-sm text-gray-700 leading-relaxed mb-4">
							Whether you`re buying, selling, mortgaging, or settling legal matters — having a{" "}
							<strong>professional property valuation</strong> is essential. A reliable valuation gives
							you clarity on your asset’s real worth, protects your investment, and ensures fair dealings
							across the board.
						</p>

						<p className="text-sm text-gray-700 leading-relaxed mb-4">
							At <strong>[Your Company Name]</strong>, we provide{" "}
							<strong>certified property valuation services</strong> conducted by experienced,
							government-authorized valuers. We assess both land and buildings with complete transparency,
							using official metrics and up-to-date market data.
						</p>

						<h2 className="text-2xl font-semibold mt-6 mb-2">What We Value</h2>
						<ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
							<li>
								<strong>Residential Property:</strong> Land, houses, apartments, and private buildings
							</li>
							<li>
								<strong>Commercial Property:</strong> Shops, business premises, hotels, warehouses
							</li>
							<li>
								<strong>Land Only:</strong> Agriculture land, plots, leasehold areas
							</li>
							<li>
								<strong>Mixed-Use Property:</strong> Rental buildings, shared-use complexes
							</li>
							<li>
								<strong>Industrial Assets:</strong> Factories, production units, and storage areas
							</li>
						</ul>

						<h2 className="text-2xl font-semibold mt-6 mb-2">Why Our Valuation Services?</h2>
						<p className="text-sm text-gray-700 leading-relaxed mb-2">
							<strong>✔ Government-Registered Valuers:</strong> All valuations are handled by certified
							professionals recognized by official authorities.
						</p>
						<p className="text-sm text-gray-700 leading-relaxed mb-2">
							<strong>✔ Court & Bank Acceptance:</strong> Our reports are valid for banks, court
							submissions, and government documentation.
						</p>
						<p className="text-sm text-gray-700 leading-relaxed mb-2">
							<strong>✔ Transparent Reports:</strong> Detailed reports with land area, construction
							details, depreciation, and current market price.
						</p>
						<p className="text-sm text-gray-700 leading-relaxed mb-4">
							<strong>✔ Fast Delivery:</strong> Get your valuation report within 24–48 hours depending on
							property type and location.
						</p>

						<h2 className="text-2xl font-semibold mt-6 mb-2">Who Needs a Valuation?</h2>
						<p className="text-sm text-gray-700 leading-relaxed mb-4">
							Property valuation is useful for individuals applying for bank loans, legal cases, property
							transfers, sales, government compensation, inheritance, or simply understanding real worth.
							We also support real estate agents, law firms, and corporate bodies.
						</p>

						<h2 className="text-2xl font-semibold mt-6 mb-2">Request a Property Valuation Today</h2>
						<p className="text-sm text-gray-700 leading-relaxed">
							Looking to know the true value of your property? <strong>Contact us now</strong> or book
							your valuation visit online. We’ll assign an expert, inspect your property, and deliver a
							verified, official report that you can trust.
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
