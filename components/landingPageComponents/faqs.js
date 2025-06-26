"use client";
import React, { useEffect, useState } from "react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import HeroButton from "./heroButton";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Faqs() {
	const pathname = usePathname();
	const [lang, setLang] = useState("en");

	// Detect language on mount (default to English)
	useEffect(() => {
		const htmlLang = document.documentElement.lang || "en";
		setLang(htmlLang.startsWith("ne") ? "ne" : "en");
	}, []);

	// FAQ data with translations
	const faqs = [
		{
			question_en: "What types of documents can you notarize?",
			answer_en:
				"We notarize a wide range of documents including affidavits, power of attorney, property deeds, and more.",
			question_ne: "तपाईं कुन प्रकारका कागजातहरू नोटराइज गर्न सक्नुहुन्छ?",
			answer_ne: "हामीले एफिडेविट, पावर अफ अटर्नी, सम्पत्ति कागजातहरू लगायत विभिन्न कागजातहरू नोटराइज गर्छौं।",
		},
		{
			question_en: "Do you offer mobile notary services?",
			answer_en:
				"Yes, we provide mobile notary services where our notary visits your location at your convenience.",
			question_ne: "के तपाईंहरू मोबाइल नोटरी सेवा प्रदान गर्नुहुन्छ?",
			answer_ne: "हो, हामी मोबाइल नोटरी सेवा प्रदान गर्छौं जहाँ हाम्रो नोटरी तपाईंको स्थानमा आउँछ।",
		},
		{
			question_en: "Are your document translations legally accepted?",
			answer_en:
				"Absolutely. All our translations are certified and accepted by most legal and governmental institutions.",
			question_ne: "के तपाईंहरूको कागजात अनुवाद कानुनी रूपमा मान्य छ?",
			answer_ne: "पक्कै पनि। हाम्रा सबै अनुवाद प्रमाणित छन् र धेरै कानुनी र सरकारी संस्थाहरूले स्वीकार गर्छन्।",
		},
		{
			question_en: "How long does a notarization usually take?",
			answer_en:
				"Most notarizations take just 10–15 minutes, depending on the document type and client readiness.",
			question_ne: "सामान्यतया नोटराइजेशन कति समय लाग्छ?",
			answer_ne: "अधिकांश नोटराइजेशन १०–१५ मिनेटमै सम्पन्न हुन्छ, कागजातको प्रकार र ग्राहकको तयारी अनुसार।",
		},
		{
			question_en: "Do I need to bring identification for notarization?",
			answer_en:
				"Yes, a valid government-issued ID such as a passport, driver's license, or citizenship card is required.",
			question_ne: "के नोटराइजेशनको लागि परिचयपत्र ल्याउनु पर्छ?",
			answer_ne: "हो, पासपोर्ट, ड्राइभिङ लाइसेन्स वा नागरिकता प्रमाणपत्र जस्ता मान्य सरकारी परिचयपत्र आवश्यक छ।",
		},
		{
			question_en: "Can I get documents both translated and notarized here?",
			answer_en:
				"Yes! We offer end-to-end service including translation, notarization, and even certification if needed.",
			question_ne: "के म यहाँ कागजातहरू अनुवाद र नोटराइज दुवै गराउन सक्छु?",
			answer_ne: "हो! हामी अनुवाद, नोटराइजेशन र आवश्यक परे प्रमाणिकरण सेवा समेत प्रदान गर्छौं।",
		},
		{
			question_en: "What are your service charges?",
			answer_en:
				"Our charges depend on the type and number of documents. Please contact us for a detailed quote.",
			question_ne: "तपाईंहरूको सेवा शुल्क कति हो?",
			answer_ne:
				"हाम्रो शुल्क कागजातको प्रकार र संख्यामा निर्भर गर्छ। विस्तृत जानकारीका लागि हामीलाई सम्पर्क गर्नुहोस्।",
		},
		{
			question_en: "How do I book an appointment?",
			answer_en:
				"You can book an appointment through our website, by phone, or simply walk in during business hours.",
			question_ne: "म कसरी अपोइन्टमेन्ट बुक गर्न सक्छु?",
			answer_ne: "तपाईं हाम्रो वेबसाइट, फोनबाट, वा कार्यालय समयमा सिधै आएर अपोइन्टमेन्ट बुक गर्न सक्नुहुन्छ।",
		},
	];

	// Text translations for static parts
	const t = {
		en: {
			needHelp: "Need Help? Start Here",
			faqTitle: "Frequently Asked Questions",
			faqDescription:
				"Got questions about our online notary, translation, or legal documentation services? Explore our FAQs to find clear, detailed answers about our process, pricing, document requirements, turnaround time, and how our 100% online support works—so you can get started with confidence.",
			readMore: "Read More FAQs",
		},
		ne: {
			needHelp: "सहायता चाहिन्छ? यहाँबाट सुरु गर्नुहोस्",
			faqTitle: "प्रायः सोधिने प्रश्नहरू",
			faqDescription:
				"हाम्रो अनलाइन नोटरी, अनुवाद, वा कानुनी कागजात सेवाहरू सम्बन्धमा प्रश्न छ? हाम्रो FAQs अन्वेषण गरेर प्रक्रिया, मूल्य, कागजात आवश्यकताहरू, कार्यसमय, र हाम्रो १००% अनलाइन समर्थनको बारेमा स्पष्ट जवाफहरू पाउनुहोस्।",
			readMore: "थप FAQs पढ्नुहोस्",
		},
	};

	const translation = t[lang];

	return (
		<div className="relative max-w-xl mx-auto px-4">
			{pathname !== "/faqs" ? (
				<div className="relative pb-8">
					<div className="relative flex justify-between">
						<div className="relative">
							<div className="flex">
								<div className="relative text-xs bg-gray-700 text-white px-3 py-1">
									{translation.needHelp}
								</div>
							</div>
							<div className="relative font-bold text-2xl mt-4">{translation.faqTitle}</div>
						</div>
						<div className="flex">
							<Link href={"/testinomials"}>
								<HeroButton>
									{translation.readMore}
									<svg
										width="17"
										height="17"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<line x1="5" y1="12" x2="19" y2="12"></line>
										<polyline points="12 5 19 12 12 19"></polyline>
									</svg>
								</HeroButton>
							</Link>
						</div>
					</div>
					<div className="relative text-gray-600 text-sm tracking-wide leading-6 mt-4">
						{translation.faqDescription}
					</div>
				</div>
			) : (
				""
			)}

			<div className="relative pb-16">
				<Accordion type="single" collapsible>
					{faqs.map((faq, index) => {
						const question = lang === "ne" ? faq.question_ne : faq.question_en;
						const answer = lang === "ne" ? faq.answer_ne : faq.answer_en;

						if (pathname === "/faqs") {
							return (
								<AccordionItem
									className="pb-2 border my-5"
									key={index}
									value={`${faq.question_en + index}`}
								>
									<AccordionTrigger>{question}</AccordionTrigger>
									<AccordionContent>
										<div className="relative flex px-8 mt-5 gap-4">
											<div className="relative text-gray-600 mt-1">
												<ArrowRight size={17} />
											</div>
											<div className="relative text-gray-600 tracking-wide text-sm">{answer}</div>
										</div>
									</AccordionContent>
								</AccordionItem>
							);
						} else {
							// Summary: show only first 5 FAQs
							if (index < 5) {
								return (
									<AccordionItem
										className="pb-2 border my-5"
										key={index}
										value={`${faq.question_en + index}`}
									>
										<AccordionTrigger>{question}</AccordionTrigger>
										<AccordionContent>
											<div className="relative px-8 mt-5 text-gray-700 tracking-wide text-sm">
												{answer}
											</div>
										</AccordionContent>
									</AccordionItem>
								);
							} else {
								return null;
							}
						}
					})}
				</Accordion>
			</div>
		</div>
	);
}
