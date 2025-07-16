"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Footer() {
	const [lang, setLang] = useState("en");

	useEffect(() => {
		const htmlLang = document.documentElement.lang || "en";
		setLang(htmlLang.startsWith("ne") ? "ne" : "en");
	}, []);

	const translations = {
		en: {
			aboutTitle: "Abroad Documents Solution Nepal",
			aboutDesc:
				"Fast, Reliable Online Notary & Translation Services in Nepal. Need documents notarized or translated? We serve individuals & businesses with over 10 years of trusted experience.",
			aboutLink: "Read More About Us →",

			quickLinksTitle: "Quick Links",
			faqs: "FAQs",
			blog: "Blog",
			testimonials: "Testimonials",
			search: "Search",
			privacyPolicy: "Privacy Policy",
			termsConditions: "Terms & Conditions",

			servicesTitle: "Services",
			sop: "Statement of Purpose (SOP)",
			appealLetter: "Appeal Letter Writing",
			localization: "Website Localization",
			mofa: "MOFA Attestation",
			legalization: "Legalization of Documents",

			contactInfoTitle: "Contact Info",
			phoneLabel: "📞 ",
			phoneNumber: "+977 9826923934",
			emailLabel: "📧 ",
			email: "ads.services@gmail.com",
			address: "📍 Anamanagar 29, Kathmandu, Nepal",
			hours: "🕒 Sun - Fri, 10:00 AM - 6:00 PM",
			support: "✅ Support available 24/7",

			copyright: "Notary Nepal. All rights reserved.",
		},
		ne: {
			aboutTitle: "अब्रोड डकुमेन्ट्स सोलुसन नेपाल",
			aboutDesc:
				"छिटो, भरपर्दो अनलाइन नोटरी र अनुवाद सेवा नेपालमा। कागजातहरू नोटराइज वा अनुवाद गर्न आवश्यक छ? हामी व्यक्तिहरू र व्यवसायहरूलाई १० वर्षभन्दा बढी विश्वसनीय अनुभवका साथ सेवा दिन्छौं।",
			aboutLink: "हाम्रो बारेमा थप पढ्नुहोस् →",

			quickLinksTitle: "छिटो लिङ्कहरू",
			faqs: "प्राय सोधिने प्रश्नहरू",
			blog: "ब्लग",
			testimonials: "प्रशंसापत्रहरू",
			search: "खोजी",
			privacyPolicy: "गोपनीयता नीति",
			termsConditions: "नियम र सर्तहरू",

			servicesTitle: "सेवाहरू",
			sop: "उद्देश्य वक्तव्य (SOP)",
			appealLetter: "अपिल पत्र लेखन",
			localization: "वेबसाइट लोकलाइजेशन",
			mofa: "MOFA प्रमाणिकरण",
			legalization: "कागजातहरूको वैधानिकीकरण",

			contactInfoTitle: "सम्पर्क विवरण",
			phoneLabel: "📞 ",
			phoneNumber: "+९७७ 9826923934",
			emailLabel: "📧 ",
			email: "ads.services@gmail.com",
			address: "📍 अनामनगर २९, काठमाडौं, नेपाल",
			hours: "🕒 आइतबार - शुक्रबार, बिहान १०:०० देखि साँझ ६:००",
			support: "✅ २४/७ सहयोग उपलब्ध छ",

			copyright: "नोटरी नेपाल। सबै अधिकार सुरक्षित।",
		},
	};

	const t = translations[lang];

	return (
		<div className="bg-gray-900 text-gray-100 pb-8 pt-16 px-6 md:px-20 tracking-wide">
			<div className="grid md:grid-cols-4 gap-10">
				{/* About */}
				<div className="space-y-4">
					<div className="text-xl font-semibold">{t.aboutTitle}</div>
					<div className="text-xs text-gray-400 leading-5">
						<span>{t.aboutDesc}</span>
					</div>
					<Link href="/about-us" className="text-purple-400 hover:underline text-sm block">
						{t.aboutLink}
					</Link>
				</div>

				{/* Quick Links */}
				<div className="space-y-2">
					<div className="text-lg font-semibold mb-4">{t.quickLinksTitle}</div>
					<div className="text-xs space-y-3 flex flex-col text-gray-300">
						<Link href="/faqs" className="hover:underline">
							{t.faqs}
						</Link>
						<Link href="/blog" className="hover:underline">
							{t.blog}
						</Link>
						<Link href="/testimonials" className="hover:underline">
							{t.testimonials}
						</Link>
						<Link href="/search" className="hover:underline">
							{t.search}
						</Link>
						<Link href="/pages/privacy-policy" className="hover:underline">
							{t.privacyPolicy}
						</Link>
						<Link href="/pages/terms-and-conditions" className="hover:underline">
							{t.termsConditions}
						</Link>
					</div>
				</div>

				{/* Services */}
				<div className="space-y-2">
					<div className="text-lg font-semibold mb-4">{t.servicesTitle}</div>
					<div className="text-xs space-y-3 flex flex-col text-gray-300">
						<Link href="/services/sop" className="hover:underline">
							{t.sop}
						</Link>
						<Link href="/services/appeal-letter" className="hover:underline">
							{t.appealLetter}
						</Link>
						<Link href="/services/localization" className="hover:underline">
							{t.localization}
						</Link>
						<Link href="/services/mofa" className="hover:underline">
							{t.mofa}
						</Link>
						<Link href="/services/legalization" className="hover:underline">
							{t.legalization}
						</Link>
					</div>
				</div>

				{/* Contact Info */}
				<div className="space-y-4">
					<div className="text-lg font-semibold mb-4">{t.contactInfoTitle}</div>
					<div className="text-xs text-gray-400 space-y-3">
						<div>
							<span>{t.phoneLabel}</span>
							<a href={`tel:${t.phoneNumber.replace(/\s/g, "")}`} className="hover:underline">
								{t.phoneNumber}
							</a>
						</div>
						<div>
							<span>{t.emailLabel}</span>
							<a href={`mailto:${t.email}`} className="hover:underline">
								{t.email}
							</a>
						</div>
						<div>{t.address}</div>
						<div>{t.hours}</div>
						<div className="text-green-400">{t.support}</div>
					</div>
				</div>
			</div>

			{/* Footer Bottom */}
			<div className="mt-10 border-t border-gray-700 pt-6 text-sm text-center text-gray-500">
				<span>
					&copy; {new Date().getFullYear()} Notary Nepal. {t.copyright}
				</span>
			</div>
		</div>
	);
}
