import React from "react";
import QuoteSvg from "./quoteSvg";
import HeroButton from "./heroButton";
import Link from "next/link";

export default function Reviews() {
	return (
		<div className="relative flex flex-col xl:flex-row gap-8 items-start xl:items-center min-h-screen xl:px-32 lg:px-32 md:px-16 sm:px-8 px-4 my-16">
			{/* Left Section */}
			<div className="xl:w-2/5 w-full">
				<div className="text-sm bg-purple-200 px-3 py-1 inline-block">Client Testimonials</div>
				<div className="mt-2 font-bold text-4xl">What Our Clients Say</div>
				<div className="text-sm tracking-wide max-w-md leading-5 mt-2 text-gray-600">
					Hear from our satisfied customers who have trusted us for notarization, certification, and
					translation services. Your peace of mind is our greatest reward.
				</div>
				<div className="mt-5">
					<Link href="/testinomials">
						<HeroButton>Read All Testinomials</HeroButton>
					</Link>
				</div>
			</div>

			{/* Right Section - Reviews */}
			<div className="xl:w-3/5 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
				{/* Single Review Card */}
				<div className="bg-white rounded-lg p-6 border border-gray-500 flex flex-col">
					<div className="text-gray-700">
						<QuoteSvg />
					</div>
					<div className="text-gray-700 text-xs mt-2 flex-grow">
						Fast, professional, and very friendly. They made the notarization process so easy!
					</div>
					<div className="mt-4 font-semibold text-sm">– Aashish T.</div>
				</div>

				<div className="bg-white rounded-lg p-6 border border-gray-500 flex flex-col">
					<div className="text-gray-700">
						<QuoteSvg />
					</div>
					<div className="text-gray-700 text-xs mt-2 flex-grow">
						Fast, professional, and very friendly. They made the notarization process so easy! Fast,
						professional, and very friendly. They made the notarization process so easy! Fast,
					</div>
					<div className="mt-4 font-semibold text-sm">– Aashish T.</div>
				</div>

				<div className="bg-white rounded-lg p-6 border border-gray-500 flex flex-col">
					<div className="text-gray-700">
						<QuoteSvg />
					</div>
					<div className="text-gray-700 text-xs mt-2 flex-grow">
						Fast, professional, and very friendly. They made the notarization process so easy!
					</div>
					<div className="mt-4 font-semibold text-sm">– Aashish T.</div>
				</div>

				<div className="bg-white rounded-lg p-6 border border-gray-500 flex flex-col">
					<div className="text-gray-700">
						<QuoteSvg />
					</div>
					<div className="text-gray-700 text-xs mt-2 flex-grow">
						Fast, professional, and very friendly. They made the notarization process so easy!
					</div>
					<div className="mt-4 font-semibold text-sm">– Aashish T.</div>
				</div>

				<div className="bg-white rounded-lg p-6 border border-gray-500 flex flex-col">
					<div className="text-gray-700">
						<QuoteSvg />
					</div>
					<div className="text-gray-700 text-xs mt-2 flex-grow">
						Fast, professional, and very friendly. They made the notarization process so easy!
					</div>
					<div className="mt-4 font-semibold text-sm">– Aashish T.</div>
				</div>

				<div className="bg-white rounded-lg p-6 border border-gray-500 flex flex-col">
					<div className="text-gray-700">
						<QuoteSvg />
					</div>
					<div className="text-gray-700 text-xs mt-2 flex-grow">
						Fast, professional, and very friendly. They made the notarization process so easy!
					</div>
					<div className="mt-4 font-semibold text-sm">– Aashish T.</div>
				</div>
			</div>
		</div>
	);
}
