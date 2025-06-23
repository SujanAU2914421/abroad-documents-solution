import { Award, Check, CheckCircle, DollarSign, Settings, Timer } from "lucide-react";
import React, { useEffect, useState } from "react";

const translations = {
	en: {
		title: "Why Choose Notary Nepal?",
		items: [
			{
				icon: <Check />,
				title: "Experienced Professionals",
				description: "Licensed notaries and expert translators guarantee accurate handling.",
			},
			{
				icon: <Settings />,
				title: "Latest Technology",
				description: "Upload documents through our secure site and access your notarized files anytime.",
			},
			{
				icon: <Timer />,
				title: "24/7 Support",
				description: "Reach out to us via phone, email, or chat — we’re always here to help.",
			},
			{
				icon: <DollarSign />,
				title: "Affordable Rates",
				description: "Competitive pricing with bulk discounts and flexible payment options.",
			},
			{
				icon: <CheckCircle />,
				title: "Ethical & Trustworthy",
				description: "We maintain full transparency and client-focused service.",
			},
			{
				icon: <Award />,
				title: "High Standards & Ethics",
				description:
					"We follow Nepal Notary Public Council rules and Ministry guidelines, ensuring full confidentiality.",
			},
		],
	},
	ne: {
		title: "किन रोज्ने नोटरी नेपाल?",
		items: [
			{
				icon: <Check />,
				title: "अनुभवी पेशेवरहरू",
				description:
					"लाइसेन्स प्राप्त नोटरी र विशेषज्ञ अनुवादकर्ताहरूले तपाईंका कागजातहरू सही तरिकाले हेर्छन्।",
			},
			{
				icon: <Settings />,
				title: "नवीनतम प्रविधि",
				description: "हामीमार्फत कागजात सुरक्षित रूपमा पठाउनुहोस् र कहिले पनि पहुँच पाउनुहोस्।",
			},
			{
				icon: <Timer />,
				title: "२४/७ सहयोग",
				description: "फोन, इमेल वा च्याटमार्फत हामी सधैं सहयोग गर्न तयार छौं।",
			},
			{
				icon: <DollarSign />,
				title: "सस्तो शुल्क",
				description: "प्रतिस्पर्धात्मक मूल्य, थोक छुट र लचिलो भुक्तानी विकल्पहरू।",
			},
			{
				icon: <CheckCircle />,
				title: "नैतिक र विश्वासिलो",
				description: "हामी पूर्ण पारदर्शिता र ग्राहक-केन्द्रित सेवा सुनिश्चित गर्छौं।",
			},
			{
				icon: <Award />,
				title: "उच्च मापदण्ड र नैतिकता",
				description: "हामी नेपाल नोटरी पब्लिक काउन्सिलको नियम र मन्त्रालयको मार्गनिर्देशन अनुसार सेवा दिन्छौं।",
			},
		],
	},
};

export default function WhyChooseUs() {
	const [lang, setLang] = useState("en");

	useEffect(() => {
		const htmlLang = document.documentElement.lang?.split("-")[0] || "en";
		setLang(htmlLang);
	}, []);

	const t = translations[lang] || translations.en;

	return (
		<div className="relative">
			<div className="text-2xl font-semibold flex justify-center w-full">{t.title}</div>
			<div className="mt-8 flex flex-wrap gap-8 justify-center">
				{t.items.map((item, index) => (
					<div key={index} className="flex justify-center">
						<div className="border px-5 py-5 rounded-lg border-gray-300 flex gap-8 items-center max-w-md">
							<div className="relative px-2 text-purple-700">{item.icon}</div>
							<div className="relative">
								<div className="relative text-sm font-bold">{item.title}</div>
								<div className="relative mt-2 text-sm text-gray-600 leading-6">{item.description}</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
