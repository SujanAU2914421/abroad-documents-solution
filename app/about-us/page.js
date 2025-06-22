"use client";
import React, { useEffect, useRef } from "react";
import DiscoverOurServices from "@/components/landingPageComponents/discoverOurServices";
import HeroButton from "@/components/landingPageComponents/heroButton";
import { Award, Check, CheckCircle, DollarSign, Settings, Timer, User } from "lucide-react";

export default function Page() {
	const firstSectionRefs = useRef([]);
	firstSectionRefs.current = [];

	const setFirstSectionRef = (el) => {
		if (el && !firstSectionRefs.current.includes(el)) {
			firstSectionRefs.current.push(el);
		}
	};

	useEffect(() => {
		setTimeout(() => {
			firstSectionRefs.current.forEach((elem, index) => {
				const delay = index * 100; // stagger 100ms
				elem.style.transition = "all 500ms ease-out";
				elem.style.transitionDelay = `${delay}ms`;
				elem.style.opacity = 1;
				elem.style.transform = "translateX(0)";
			});
		}, 10);
	}, []);

	return (
		<div className="relative tracking-wide">
			<div className="px-6 py-14 space-y-16 bg-white dark:bg-[#010104] text-gray-800 dark:text-gray-100">
				<div className="relative">
					<div
						className="relative flex justify-center font-bold text-3xl"
						style={{ opacity: 0, transform: "translateX(10px)" }}
						ref={setFirstSectionRef}
					>
						About Us
					</div>
					<div
						className="relative text-sm flex justify-center"
						style={{ opacity: 0, transform: "translateX(10px)" }}
						ref={setFirstSectionRef}
					>
						<div className="flex items-center gap-2 mt-2 text-gray-700">
							<div className="relative">Home</div>
							<div className="relative">{">"}</div>
							<div className="relative">About Us</div>
						</div>
					</div>
				</div>{" "}
				{/* first section */}
				<div className="relative h-auto xl:px-16 lg:px-16 px-4 flex items-center gap-16 xl:*:w-1/2 lg:*:w-1/2 xl:flex-nowrap lg:flex-nowrap flex-wrap-reverse *:w-full">
					<div className="space-y-4 xl:pr-16 lg:pr-16 pr-0">
						<div
							className="text-2xl font-semibold leading-9 tracking-wide"
							style={{ opacity: 0, transform: "translateX(10px)" }}
							ref={setFirstSectionRef}
						>
							Fast, Reliable Online Notary & Translation Services in Nepal
						</div>
						<div
							className="max-w-2xl mx-auto text-sm leading-6 tracking-wide text-gray-600 dark:text-gray-300"
							style={{ opacity: 0, transform: "translateX(10px)" }}
							ref={setFirstSectionRef}
						>
							Need documents notarized or translated in Nepal? Notary Nepal offers fast, reliable notary
							public and translation services for individuals and businesses. With over 10 years of
							experience, we’ve helped thousands of clients across various sectors. Whether it’s for
							visas, passports, citizenship, or legal documentation — we’ve got you covered.
						</div>
						<div
							className="flex mt-8"
							style={{ opacity: 0, transform: "translateX(10px)" }}
							ref={setFirstSectionRef}
						>
							<HeroButton>Get a Free Quote Now</HeroButton>
						</div>
						<div
							className="text-sm text-gray-500 mt-2"
							style={{ opacity: 0, transform: "translateX(10px)" }}
							ref={setFirstSectionRef}
						>
							Don’t miss this limited-time offer!
						</div>
					</div>
					<div
						className="relative h-96 bg-gray-100 rounded-2xl"
						style={{ opacity: 0, transform: "scale(0.9)" }}
						ref={setFirstSectionRef}
					></div>
				</div>
				<div className="relative">
					<div className="text-2xl font-semibold flex justify-center w-full">Why Choose Notary Nepal?</div>
					<div className="mt-8 flex flex-wrap gap-8 justify-center">
						<div className="flex justify-center">
							<div className="border px-5 py-5 rounded-lg border-gray-300 flex gap-8 items-center">
								<div className="relative px-2">
									<Check />
								</div>
								<div className="relative">
									<div className="relative text-sm font-bold">Experienced Professionals</div>
									<div className="relative mt-2 text-sm text-gray-600">
										Licensed notaries and expert translators guarantee accurate handling.
									</div>
								</div>
							</div>
						</div>
						<div className="flex justify-center">
							<div className="border px-5 py-5 rounded-lg border-gray-300 flex gap-8 items-center">
								<div className="relative px-2">
									<Settings />
								</div>
								<div className="relative">
									<div className="relative text-sm font-bold">Latest Technology</div>
									<div className="relative mt-2 text-sm text-gray-600">
										Upload documents through our secure site and access your notarized files
										anytime.
									</div>
								</div>
							</div>
						</div>
						<div className="flex justify-center">
							<div className="border px-5 py-5 rounded-lg border-gray-300 flex gap-8 items-center">
								<div className="relative px-2">
									<Timer />
								</div>
								<div className="relative">
									<div className="relative text-sm font-bold">24/7 Support</div>
									<div className="relative mt-2 text-sm text-gray-600">
										Reach out to us via phone, email, or chat — we’re always here to help.
									</div>
								</div>
							</div>
						</div>
						<div className="flex justify-center">
							<div className="border px-5 py-5 rounded-lg border-gray-300 flex gap-8 items-center">
								<div className="relative px-2">
									<DollarSign />
								</div>
								<div className="relative">
									<div className="relative text-sm font-bold">Affordable Rates</div>
									<div className="relative mt-2 text-sm text-gray-600">
										Competitive pricing with bulk discounts and flexible payment options.
									</div>
								</div>
							</div>
						</div>
						<div className="flex justify-center">
							<div className="border px-5 py-5 rounded-lg border-gray-300 flex gap-8 items-center">
								<div className="relative px-2">
									<CheckCircle />
								</div>
								<div className="relative">
									<div className="relative text-sm font-bold">Ethical & Trustworthy</div>
									<div className="relative mt-2 text-sm text-gray-600">
										We maintain full transparency and client-focused service.
									</div>
								</div>
							</div>
						</div>
						<div className="flex justify-center">
							<div className="border px-5 py-5 rounded-lg border-gray-300 flex gap-8 items-center">
								<div className="relative px-2">
									<Award />
								</div>
								<div className="relative">
									<div className="relative text-sm font-bold">High Standards & Ethics</div>
									<div className="relative mt-2 text-sm text-gray-600">
										We follow Nepal Notary Public Council rules and Ministry guidelines, ensuring
										full confidentiality.
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="relative h-auto xl:px-16 lg:px-16 px-4 flex items-center gap-y-16 xl:*:w-1/2 lg:*:w-1/2 xl:flex-nowrap lg:flex-nowrap flex-wrap *:w-full">
					<div className="relative h-96 bg-gray-100 rounded-2xl"></div>
					<div className="space-y-4 xl:pl-16 lg:pl-16 pl-0">
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
