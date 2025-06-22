"use client";

import React, { useEffect, useRef } from "react";
import QuoteSvg from "./quoteSvg";
import HeroButton from "./heroButton";
import Link from "next/link";

export default function Reviews() {
	const sectionRef = useRef();
	const animatedRefs = useRef([]);

	useEffect(() => {
		if (!sectionRef.current) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					animatedRefs.current.forEach((el, index) => {
						if (!el) return;
						el.style.transition = `opacity 0.6s ease-out ${index * 100}ms, transform 0.6s ease-out ${
							index * 100
						}ms`;
						el.style.opacity = "1";
						el.style.transform = "translateY(0)";
					});
					observer.disconnect();
				}
			},
			{
				root: null,
				rootMargin: "0px",
				threshold: 0.7,
			}
		);

		observer.observe(sectionRef.current);

		return () => observer.disconnect();
	}, []);

	const setAnimatedRef = (el, i) => {
		if (el) animatedRefs.current[i] = el;
	};

	const reviews = [
		"Fast, professional, and very friendly. They made the notarization process so easy!",
		"Very helpful team! Got everything done in a single visit, smooth and efficient.",
		"Absolutely reliable. Highly recommend their services for any official documentation.",
		"I was surprised how quick the process was—everything done under 15 minutes!",
		"Friendly staff and professional setup. Will use again!",
		"The translation was accurate and notarized fast. Big thumbs up!",
	];

	return (
		<div
			ref={sectionRef}
			className="relative flex flex-col xl:flex-row gap-8 items-start xl:items-center xl:px-32 lg:px-32 md:px-16 sm:px-8 px-4 py-16"
		>
			{/* Left Section */}
			<div
				className="xl:w-2/5 w-full"
				style={{ transform: "translateY(10px)", opacity: 0 }}
				ref={(el) => setAnimatedRef(el, 0)}
			>
				<div className="text-sm bg-purple-200 px-3 py-1 inline-block">Client Testimonials</div>
				<div className="mt-3 font-bold text-4xl">What Our Clients Say</div>
				<div className="text-sm tracking-wide max-w-md leading-5 mt-4 text-gray-600">
					Hear from our satisfied customers who have trusted us for notarization, certification, and
					translation services. Your peace of mind is our greatest reward.
				</div>
				<div className="mt-5">
					<Link href="/testinomials">
						<HeroButton>Read All Testimonials</HeroButton>
					</Link>
				</div>
			</div>

			{/* Right Section - Reviews */}
			<div className="xl:w-3/5 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
				{reviews.map((text, i) => (
					<div
						key={i}
						className="bg-white rounded-lg p-6 border border-gray-500 flex flex-col"
						style={{ transform: "translateY(10px)", opacity: 0 }}
						ref={(el) => setAnimatedRef(el, i + 1)} // +1 since 0 is left section
					>
						<div className="text-gray-700">
							<QuoteSvg />
						</div>
						<div className="text-gray-700 text-xs mt-2 flex-grow">{text}</div>
						<div className="mt-4 font-semibold text-sm">– Aashish T.</div>
					</div>
				))}
			</div>
		</div>
	);
}
