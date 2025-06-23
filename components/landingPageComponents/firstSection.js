import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import ImagesSlider from "./imagesSlider";

const content = {
	en: {
		tagline: "Trusted Notary Services – Fast, Secure, and Always By Your Side.",
		heading: "Certified Notary, Certification, and Translation Services in Nepal",
		description: "Certified professionals delivering seamless notarization—anytime, anywhere.",
		buttonText: "Checkout our services",
		buttonLink: "/services",
	},
	hi: {
		tagline: "विश्वसनीय नोटरी सेवाएं – तेज, सुरक्षित और हमेशा आपके साथ।",
		heading: "नेपाल में प्रमाणित नोटरी, प्रमाणन और अनुवाद सेवाएं",
		description: "प्रमाणित पेशेवरों द्वारा निर्बाध नोटरीकरण – कभी भी, कहीं भी।",
		buttonText: "हमारी सेवाएं देखें",
		buttonLink: "/services",
	},
	ur: {
		tagline: "قابل اعتماد نوٹری خدمات – تیز، محفوظ، اور ہمیشہ آپ کے ساتھ۔",
		heading: "نیپال میں مصدقہ نوٹری، تصدیق، اور ترجمہ کی خدمات",
		description: "مصدقہ پیشہ ور افراد سے آسان نوٹری کی سہولت — جب چاہیں، جہاں چاہیں۔",
		buttonText: "ہماری خدمات دیکھیں",
		buttonLink: "/services",
	},
	ne: {
		tagline: "भरपर्दो नोटरी सेवा — छिटो, सुरक्षित, र सधैं तपाईंको साथमा।",
		heading: "नेपालमा प्रमाणित नोटरी, प्रमाणीकरण, र अनुवाद सेवाहरू",
		description: "प्रमाणित पेशेवरहरूबाट सहज नोटरीकरण सेवा — जबसुकै, जहाँसुकै।",
		buttonText: "हाम्रा सेवाहरू हेर्नुहोस्",
		buttonLink: "/services",
	},
};

export default function FirstSection() {
	const OnloadAnimationElements = useRef([]);
	OnloadAnimationElements.current = [];

	const [language, setLanguage] = useState("en"); // Default to English

	const setRef = (el) => {
		if (el && !OnloadAnimationElements.current.includes(el)) {
			OnloadAnimationElements.current.push(el);
		}
	};

	// 🌐 Detect <html lang=""> instead of browser setting
	useEffect(() => {
		if (typeof document !== "undefined") {
			const htmlLang = document.documentElement.lang?.split("-")[0] || "en";
			if (Object.keys(content).includes(htmlLang)) {
				setLanguage(htmlLang);
			}
		}
	}, []);

	useEffect(() => {
		setTimeout(() => {
			OnloadAnimationElements.current.forEach((elem, index) => {
				const delay = index * 100;
				elem.style.transitionDelay = `${delay}ms`;
				elem.style.opacity = 1;
				elem.style.transform = "translateX(0) translateY(0) scale(1) rotate(0deg)";
			});
		}, 10);
	}, []);

	const t = content[language];

	return (
		<div className="relative h-auto xl:px-32 lg:px-32 md:px-16 sm:px-8 px-4 flex items-center gap-8 xl:*:w-1/2 lg:*:w-1/2 xl:flex-nowrap lg:flex-nowrap flex-wrap-reverse *:w-full">
			<div className="relative flex items-center">
				<div className="relative">
					<div
						className="relative flex transition-all duration-500 ease-out"
						style={{ transform: "translateX(30px)", opacity: 0 }}
						ref={setRef}
					>
						<div className="relative text-sm bg-purple-200 p-1">{t.tagline}</div>
					</div>
					<div
						className="text-4xl font-bold mt-2 leading-12 font-sans tracking-wide transition-all duration-500 ease-out"
						style={{ transform: "translateX(30px)", opacity: 0 }}
						ref={setRef}
					>
						{t.heading}
					</div>
					<div
						className="relative mt-4 transition-all duration-500 ease-out"
						style={{ transform: "translateX(30px)", opacity: 0 }}
						ref={setRef}
					>
						<div className="relative max-w-md tracking-wide">{t.description}</div>
					</div>
					<div
						className="relative flex mt-4 transition-all duration-500 ease-out"
						style={{ transform: "translateX(30px)", opacity: 0 }}
						ref={setRef}
					>
						<Link href={t.buttonLink}>
							<div className="relative text-sm text-white bg-purple-600 font-bold rounded-md shadow-xl shadow-gray-200 cursor-pointer flex items-center justify-center px-8 h-10 gap-2">
								{t.buttonText}
							</div>
						</Link>
					</div>
				</div>
			</div>

			<div className="relative h-[80vh]">
				<ImagesSlider />
			</div>
		</div>
	);
}
