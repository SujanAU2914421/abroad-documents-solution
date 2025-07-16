"use client";
import React from "react";

// Sample reviews array
const reviews = [
	{
		id: 1,
		name: "Ram",
		rating: 4.5,
		comment: "Fast and accurate translation. Helped a lot with my visa process.",
		date: "2025-07-14",
	},
	{
		id: 2,
		name: "Sita",
		rating: 5,
		comment: "Exceptional service! My notary documents were ready within hours.",
		date: "2025-07-13",
	},
	{
		id: 3,
		name: "Hari",
		rating: 3.8,
		comment: "Decent work, but took a bit longer than expected.",
		date: "2025-07-10",
	},
	{
		id: 4,
		name: "Gita",
		rating: 4.2,
		comment: "Professional translation with proper formatting. Satisfied!",
		date: "2025-07-12",
	},
	{
		id: 5,
		name: "Bikash",
		rating: 4.9,
		comment: "Very reliable and quick. Definitely recommend for legal docs.",
		date: "2025-07-11",
	},
	{
		id: 6,
		name: "Nita",
		rating: 3.5,
		comment: "Service was okay, but some minor spelling issues were there.",
		date: "2025-07-09",
	},
	{
		id: 7,
		name: "Ravi",
		rating: 4.0,
		comment: "Solid work. The notary stamp was properly included.",
		date: "2025-07-08",
	},
	{
		id: 8,
		name: "Sunita",
		rating: 5.0,
		comment: "Perfectly done! Embassy accepted it without any issues.",
		date: "2025-07-07",
	},
];

function splitIntoColumns(data, columns = 3) {
	const result = Array.from({ length: columns }, () => []);
	data.forEach((item, index) => {
		result[index % columns].push(item);
	});
	return result;
}

export default function Page() {
	let columns = splitIntoColumns(reviews, 3);

	// Sort columns by length (least -> most)
	const sorted = [...columns].sort((a, b) => a.length - b.length);

	// Re-arranged: [least, most, mid] -> [1st (least), 2nd (most), 3rd (middle)]
	const ordered = [sorted[0], sorted[2], sorted[1]];

	return (
		<div className="relative min-h-screen h-auto">
			<div className="relative mt-20 xl:px-32 pb-16 lg:px-32 md:px-16 sm:px-8 px-4">
				<div className="relative flex justify-between">
					<div className="relative">
						<div className="font-bold text-2xl pt-16">Ratings And Reviews</div>
						<div className="mt-2 text-gray-700 text-sm">See what others are saying about their experience.</div>
					</div>
					<div className="relative"></div>
				</div>

				<div className="relative mt-8">
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{ordered.map((col, colIdx) => (
							<div key={colIdx} className="flex flex-col gap-6">
								{col.map((review) => (
									<div
										key={review.id}
										className="h-auto rounded-xl bg-white border cursor-pointer hover:shadow-xl shadow-gray-200 hover:scale-105 hover:-rotate-1 duration-300 p-8 flex flex-col justify-between"
									>
										<div>
											<div className="text-md font-semibold text-gray-700">{review.name}</div>
											<div className="flex items-center gap-2 mt-1">
												<div className="relative text-gray-500">
													<svg
														width="15"
														height="15"
														viewBox="0 0 24 24"
														fill="currentColor"
														stroke="currentColor"
														strokeWidth="2"
														strokeLinecap="round"
														strokeLinejoin="round"
														className="feather feather-star"
													>
														<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
													</svg>
												</div>
												<span className="text-xs text-gray-800 font-bold">{review.rating}/5</span>
											</div>
										</div>
										<p className="text-gray-700 text-sm mt-4 line-clamp-3">{review.comment}</p>
										<div className="text-gray-400 text-xs mt-4">{review.date}</div>
									</div>
								))}
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
