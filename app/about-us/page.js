"use client";
import React from "react";
import DiscoverOurServices from "@/components/landingPageComponents/discoverOurServices";

export default function Page() {
	return (
		<div className="relative tracking-wide">
			<div className="px-6 md:px-20 py-14 space-y-16 bg-white dark:bg-[#010104] text-gray-800 dark:text-gray-100">
				<div className="relative">
					<div className="relative flex justify-center font-bold text-3xl">Contact Us</div>
					<div className="relative text-sm flex justify-center">
						<div className="flex items-center gap-2 mt-2 text-gray-700">
							<div className="relative">Home</div>
							<div className="relative">{">"}</div>
							<div className="relative">Contact Us</div>
						</div>
					</div>
				</div>
				<div className="relative flex *:w-1/2 items-center pb-16">
					<div className="space-y-4 pr-16">
						<div className="text-2xl font-semibold leading-9 tracking-wide">
							Fast, Reliable Online Notary & Translation Services in Nepal
						</div>
						<div className="max-w-2xl mx-auto text-sm leading-6 tracking-wide text-gray-600 dark:text-gray-300">
							Need documents notarized or translated in Nepal? Notary Nepal offers fast, reliable notary
							public and translation services for individuals and businesses. With over 10 years of
							experience, we’ve helped thousands of clients across various sectors. Whether it’s for
							visas, passports, citizenship, or legal documentation — we’ve got you covered.
						</div>
						<button className="mt-4 px-6 h-10 flex items-center justify-center bg-purple-600 text-white rounded-md font-bold text-sm hover:bg-purple-700 transition-all">
							Get a Free Quote Now
						</button>
						<div className="text-sm text-gray-500 mt-2">Don’t miss this limited-time offer!</div>
					</div>
					<div className="relative h-96 bg-gray-100 rounded-2xl"></div>
				</div>

				<div className="relative">
					<div className="text-2xl font-semibold flex justify-center w-full">Why Choose Notary Nepal?</div>
					<div className="mt-8 flex flex-wrap gap-4 justify-center">
						<div className="flex justify-center">
							<div className="border px-5 py-5 rounded-lg border-gray-300">
								<div className="relative text-sm font-bold">Experienced Professionals</div>
								<div className="relative mt-2 text-sm text-gray-600">
									Licensed notaries and expert translators guarantee accurate handling.
								</div>
							</div>
						</div>
						<div className="flex justify-center">
							<div className="border px-5 py-5 rounded-lg border-gray-300">
								<div className="relative text-sm font-bold">Latest Technology</div>
								<div className="relative mt-2 text-sm text-gray-600">
									Upload documents through our secure site and access your notarized files anytime.
								</div>
							</div>
						</div>
						<div className="flex justify-center">
							<div className="border px-5 py-5 rounded-lg border-gray-300">
								<div className="relative text-sm font-bold">24/7 Support</div>
								<div className="relative mt-2 text-sm text-gray-600">
									Reach out to us via phone, email, or chat — we’re always here to help.
								</div>
							</div>
						</div>
						<div className="flex justify-center">
							<div className="border px-5 py-5 rounded-lg border-gray-300">
								<div className="relative text-sm font-bold">Affordable Rates</div>
								<div className="relative mt-2 text-sm text-gray-600">
									Competitive pricing with bulk discounts and flexible payment options.
								</div>
							</div>
						</div>
						<div className="flex justify-center">
							<div className="border px-5 py-5 rounded-lg border-gray-300">
								<div className="relative text-sm font-bold">Ethical & Trustworthy</div>
								<div className="relative mt-2 text-sm text-gray-600">
									We maintain full transparency and client-focused service.
								</div>
							</div>
						</div>
						<div className="flex justify-center">
							<div className="border px-5 py-5 rounded-lg border-gray-300">
								<div className="relative text-sm font-bold">High Standards & Ethics</div>
								<div className="relative mt-2 text-sm text-gray-600">
									We follow Nepal Notary Public Council rules and Ministry guidelines, ensuring full
									confidentiality.
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="relative flex *:w-1/2 items-center">
					<div className="relative h-96 bg-gray-100 rounded-2xl"></div>
					<div className="space-y-4 pl-16">
						<div className="text-2xl font-semibold leading-9 tracking-wide">
							Get Your Documents Notarized or Translated Online
						</div>
						<div className="max-w-2xl mx-auto text-sm leading-6 tracking-wide text-gray-600 dark:text-gray-300">
							Looking for reliable notary and translation services in Nepal? Look no further. We handle
							all kinds of documents — Nepali to English, English to Nepali — and provide apostille and
							legalization support for foreign use.
						</div>
						<button className="mt-4 px-6 h-10 flex items-center justify-center bg-purple-600 text-white rounded-md font-bold text-sm hover:bg-purple-700 transition-all">
							Get a Free Quote Now
						</button>
						<div className="text-sm text-gray-500 mt-2">Don’t miss this limited-time offer!</div>
					</div>
				</div>
			</div>
			<DiscoverOurServices />
		</div>
	);
}
