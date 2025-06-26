"use client";

import React, { useEffect, useRef, useState } from "react";
import QuoteSvg from "./quoteSvg";
import HeroButton from "./heroButton";
import Link from "next/link";

export default function Reviews() {
	const sectionRef = useRef();
	const animatedRefs = useRef([]);
	const [lang, setLang] = useState("en");

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

		// Detect lang on mount
		const htmlLang = document.documentElement.lang || "en";
		setLang(htmlLang.startsWith("ne") ? "ne" : "en");

		return () => observer.disconnect();
	}, []);

	const setAnimatedRef = (el, i) => {
		if (el && animatedRefs.current[i] !== el) {
			animatedRefs.current[i] = el;
		}
	};

	const reviews = [
		{
			text_en: "Fast, professional, and very friendly. They made the notarization process so easy!",
			text_ne: "छिटो, व्यावसायिक र धेरै मैत्रीपूर्ण। उनीहरूले नोटराइजेशन प्रक्रिया धेरै सजिलो बनाए!",
			author: "Aashish T.",
		},
		{
			text_en: "Very helpful team! Got everything done in a single visit, smooth and efficient.",
			text_ne: "धेरै सहयोगी टिम! एकै पटक सबै काम सम्पन्न भयो, सहज र प्रभावकारी।",
			author: "Sita M.",
		},
		{
			text_en: "Absolutely reliable. Highly recommend their services for any official documentation.",
			text_ne: "पूर्ण भरोसायोग्य। कुनै पनि आधिकारिक कागजातका लागि उनीहरूको सेवा अत्यधिक सिफारिस गरिन्छ।",
			author: "Ram B.",
		},
		{
			text_en: "I was surprised how quick the process was—everything done under 15 minutes!",
			text_ne: "म आश्चर्यचकित भएँ प्रक्रिया कति छिटो भयो—सबै कुरा १५ मिनेट भित्र सकियो!",
			author: "Maya K.",
		},
		{
			text_en: "Friendly staff and professional setup. Will use again!",
			text_ne: "मैत्रीपूर्ण कर्मचारी र व्यावसायिक व्यवस्था। फेरि प्रयोग गर्नेछु!",
			author: "Bibek L.",
		},
		{
			text_en: "The translation was accurate and notarized fast. Big thumbs up!",
			text_ne: "अनुवाद सही थियो र छिटो नोटराइज भयो। ठूलो प्रशंसा!",
			author: "Anita P.",
		},
	];

	const translations = {
		en: {
			clientTestimonials: "Client Testimonials",
			whatOurClientsSay: "What Our Clients Say",
			hearFromCustomers:
				"Hear from our satisfied customers who have trusted us for notarization, certification, and translation services. Your peace of mind is our greatest reward.",
			readAllTestimonials: "Read All Testimonials",
			testimonialsLink: "/testimonials",
		},
		ne: {
			clientTestimonials: "ग्राहक प्रशंसापत्र",
			whatOurClientsSay: "हाम्रो ग्राहकहरूले के भन्छन्",
			hearFromCustomers:
				"हाम्रा सन्तुष्ट ग्राहकहरूबाट सुनौं जसले नोटराइजेशन, प्रमाणिकरण, र अनुवाद सेवाहरूमा हामीलाई विश्वास गरेका छन्। तपाईंको शान्ति हाम्रो सबैभन्दा ठूलो पुरस्कार हो।",
			readAllTestimonials: "सबै प्रशंसापत्रहरू पढ्नुहोस्",
			testimonialsLink: "/testimonials",
		},
	};

	const t = translations[lang];

	return (
		<section
			aria-label={t.clientTestimonials}
			ref={sectionRef}
			className="relative flex flex-col xl:flex-row gap-8 items-start xl:items-center xl:px-32 lg:px-32 md:px-16 sm:px-8 px-4 py-16"
		>
			{/* Left Section */}
			<div
				className="xl:w-2/5 w-full"
				style={{ transform: "translateY(10px)", opacity: 0 }}
				ref={(el) => setAnimatedRef(el, 0)}
			>
				<p className="text-sm bg-purple-200 px-3 py-1 inline-block">{t.clientTestimonials}</p>
				<h2 className="mt-3 font-bold text-4xl">{t.whatOurClientsSay}</h2>
				<p className="text-sm tracking-wide max-w-md leading-5 mt-4 text-gray-600">{t.hearFromCustomers}</p>
				<div className="mt-5 flex">
					<Link href={t.testimonialsLink}>
						<HeroButton>
							<div className="relative">{t.readAllTestimonials}</div>
							<div className="relative pl-4 text-xl">{">"}</div>
						</HeroButton>
					</Link>
				</div>
			</div>

			{/* Right Section - Reviews */}
			<div className="xl:w-3/5 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
				{reviews.map(({ text_en, text_ne, author }, i) => (
					<blockquote
						key={i}
						className="bg-white rounded-lg p-6 border border-gray-500 flex flex-col"
						style={{ transform: "translateY(10px)", opacity: 0 }}
						ref={(el) => setAnimatedRef(el, i + 1)}
					>
						<div className="text-gray-700" aria-hidden="true">
							<QuoteSvg />
						</div>
						<p className="text-gray-700 text-xs mt-2 flex-grow">{lang === "ne" ? text_ne : text_en}</p>
						<footer className="mt-4 font-semibold text-sm">– {author}</footer>
					</blockquote>
				))}
			</div>
		</section>
	);
}
