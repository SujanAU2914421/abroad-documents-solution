"use client";
import React from "react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import HeroButton from "./heroButton";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";

export default function Faqs() {
	const pathname = usePathname();

	const faqs = [
		{
			question: "What types of documents can you notarize?",
			answer: "We notarize a wide range of documents including affidavits, power of attorney, property deeds, and more.",
		},
		{
			question: "Do you offer mobile notary services?",
			answer: "Yes, we provide mobile notary services where our notary visits your location at your convenience.",
		},
		{
			question: "Are your document translations legally accepted?",
			answer: "Absolutely. All our translations are certified and accepted by most legal and governmental institutions.",
		},
		{
			question: "How long does a notarization usually take?",
			answer: "Most notarizations take just 10–15 minutes, depending on the document type and client readiness.",
		},
		{
			question: "Do I need to bring identification for notarization?",
			answer: "Yes, a valid government-issued ID such as a passport, driver's license, or citizenship card is required.",
		},
		{
			question: "Can I get documents both translated and notarized here?",
			answer: "Yes! We offer end-to-end service including translation, notarization, and even certification if needed.",
		},
		{
			question: "What are your service charges?",
			answer: "Our charges depend on the type and number of documents. Please contact us for a detailed quote.",
		},
		{
			question: "How do I book an appointment?",
			answer: "You can book an appointment through our website, by phone, or simply walk in during business hours.",
		},
	];

	return (
		<div className="relative max-w-xl mx-auto px-4">
			{pathname != "/faqs" ? (
				<div className="relative pb-8">
					<div className="relative flex justify-between">
						<div className="relative">
							<div className="flex">
								<div className="relative text-xs bg-gray-700 text-white px-3 py-1">
									Need Help? Start Here
								</div>
							</div>
							<div className="relative font-bold text-2xl mt-4">Frequently Asked Questions</div>
						</div>
						<div className="flex">
							<HeroButton>Read More FAQs</HeroButton>
						</div>
					</div>
					<div className="relative text-gray-600 text-sm tracking-wide leading-6 mt-4">
						Got questions about our online notary, translation, or legal documentation services? Explore our
						FAQs to find clear, detailed answers about our process, pricing, document requirements,
						turnaround time, and how our 100% online support works—so you can get started with confidence.
					</div>
				</div>
			) : (
				""
			)}
			<div className="relative pb-16">
				<Accordion type="single" collapsible>
					{faqs.map((faq, index) => {
						if (pathname == "/faqs") {
							return (
								<AccordionItem
									className="pb-2 border my-5"
									key={index}
									value={`${faq.question + index}`}
								>
									<AccordionTrigger>{faq.question}</AccordionTrigger>
									<AccordionContent>
										<div className="relative flex px-8 mt-5 gap-4">
											<div className="relative text-gray-600 mt-1">
												<ArrowRight size={17} />
											</div>
											<div className="relative text-gray-600 tracking-wide text-sm">
												{faq.answer}
											</div>
										</div>
									</AccordionContent>
								</AccordionItem>
							);
						} else {
							if (index < 5) {
								return (
									<AccordionItem
										className="pb-2 border my-5"
										key={index}
										value={`${faq.question + index}`}
									>
										<AccordionTrigger>{faq.question}</AccordionTrigger>
										<AccordionContent>
											<div className="relative px-8 mt-5 text-gray-700 tracking-wide text-sm">
												{faq.answer}
												{faq.answer}
												{faq.answer}
											</div>
										</AccordionContent>
									</AccordionItem>
								);
							} else {
								return;
							}
						}
					})}
				</Accordion>
			</div>
		</div>
	);
}
