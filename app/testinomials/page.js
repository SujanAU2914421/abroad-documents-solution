import React from "react";

export default function ReviewPage() {
	const reviews = [
		{
			name: "Sanjay Thapa",
			rating: 5,
			comment:
				"I needed a notarized document urgently for visa purposes, and Notary Nepal delivered it flawlessly and quickly. The team was super responsive and professional.",
			date: "2025-05-10",
		},
		{
			name: "Rita Gurung",
			rating: 4,
			comment:
				"Their translation service was very accurate and fast. I submitted Nepali documents for immigration and they handled everything smoothly. A bit expensive but worth it.",
			date: "2025-04-28",
		},
		{
			name: "Nitesh Sharma",
			rating: 5,
			comment:
				"Super impressed with how detailed their Affidavit preparation was. They even guided me on how to present it in court. Highly recommended!",
			date: "2025-06-01",
		},
		{
			name: "Meera Rai",
			rating: 4,
			comment:
				"They helped me translate and verify some French academic certificates. The process was smooth and the staff were friendly.",
			date: "2025-06-05",
		},
		{
			name: "Suresh Limbu",
			rating: 5,
			comment:
				"Hands down the best service for document notarization in Nepal. I didn't expect such a digital-friendly experience. Everything done online with great follow-ups.",
			date: "2025-06-15",
		},
	];

	return (
		<div className="relative px-32">
			<div className="relative pt-16">
				<div className="relative flex justify-center font-bold text-3xl">What Our Clients Say</div>
				<div className="relative text-sm flex justify-center">
					<div className="flex items-center gap-2 mt-2 text-gray-700">
						<div className="relative">Home</div>
						<div className="relative">{">"}</div>
						<div className="relative">Reviews</div>
					</div>
				</div>
			</div>
			<div className="relative py-16">
				<div className="relative flex flex-wrap justify-center gap-4">
					{reviews.map((review, index) => {
						return (
							<div className="relative" key={index}>
								<div className="relative w-72 py-5 px-5 rounded-xl border-gray-300 border shadow-xl">
									<div className="relative flex gap-4">
										<div className="relative w-10 h-10 rounded-full bg-gray-200"></div>
										<div className="w-[calc(100%-3.5rem)]">
											<div className="relative flex items-center gap-1 text-gray-700">
												{Array.from({ length: review.rating }).map((_, index) => {
													return (
														<svg
															width="14"
															height="14"
															viewBox="0 0 24 24"
															fill="currentColor"
															stroke="currentColor"
															strokeWidth="2"
															strokeLinecap="round"
															strokeLinejoin="round"
															key={index}
														>
															<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
														</svg>
													);
												})}
											</div>
											<div className="relative text-sm font-bold mt-2">{review.name}</div>
										</div>
									</div>
									<div className="relative text-xs mt-4 text-gray-600 leading-5 line-clamp-4">
										{review.comment}
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
