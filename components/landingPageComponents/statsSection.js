"use client";

import React, { useEffect, useRef, useState } from "react";

const translations = {
	en: {
		labels: [
			"Documents Notarized",
			"Documents Translated",
			"Success Rate",
			"Court Marriage Act Translation",
			"Reviews on Google",
		],
	},
	ne: {
		labels: [
			"कागजात प्रमाणित गरियो",
			"कागजात अनुवादित गरियो",
			"सफलता दर",
			"विवाह सम्बन्धी ऐन अनुवाद",
			"गुगलमा समीक्षा",
		],
	},
};

export default function StatsSection() {
	const sectionRef = useRef(null);
	const [startCount, setStartCount] = useState(false);
	const [counts, setCounts] = useState([0, 0, 0, 0, 0]);
	const [lang, setLang] = useState("en");

	const targetValues = [100000, 500000, 100, 6000, 3404];

	useEffect(() => {
		// Detect language from <html lang=""> or default to English
		const htmlLang = typeof document !== "undefined" ? document.documentElement.lang : "en";
		setLang(htmlLang.startsWith("ne") ? "ne" : "en");
	}, []);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setStartCount(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.3 }
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		if (!startCount) return;

		const duration = 2000; // animation duration in ms
		const frameRate = 30; // frames per second
		const totalFrames = Math.round(duration / (1000 / frameRate));

		let frame = 0;

		const interval = setInterval(() => {
			frame++;
			const newCounts = targetValues.map((target) => Math.floor((target * frame) / totalFrames));
			setCounts(newCounts);

			if (frame >= totalFrames) clearInterval(interval);
		}, 1000 / frameRate);

		return () => clearInterval(interval);
	}, [startCount]);

	const labels = translations[lang].labels;

	return (
		<div
			ref={sectionRef}
			className="relative h-auto py-16 w-full justify-center bg-gray-800 text-white my-32 xl:px-32 lg:px-32 md:px-16 sm:px-8 px-4 flex items-center"
		>
			<div className="relative w-full h-auto grid xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-8">
				{counts.map((count, idx) => (
					<div key={idx} className="relative w-full">
						<div className="relative text-4xl font-bold text-center">
							{count.toLocaleString()}
							{idx === 2 ? "%" : "+"}
						</div>
						<div className="relative text-sm text-center mt-2">{labels[idx]}</div>
					</div>
				))}
			</div>
		</div>
	);
}
