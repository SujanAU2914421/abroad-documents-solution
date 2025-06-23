"use client";

import { createContext, useContext, useState, useEffect } from "react";

const servicesTranslations = {
	en: [
		{
			name: "Documents Translation",
			description:
				"Professional and precise translation of official documents including certificates, contracts, legal papers, academic transcripts, and more. We ensure accuracy, confidentiality, and cultural appropriateness for all your translation needs.",
			image: "https://i.pinimg.com/736x/30/6c/fe/306cfea3a555f3ff26876b2d55d6325a.jpg",
			link: "/services/documents-translation",
		},
		{
			name: "Documents Notarization",
			description:
				"Certified notarization services for legal and personal documents such as affidavits, contracts, powers of attorney, ensuring authenticity and legal acceptance in Nepal and abroad.",
			image: "https://i.pinimg.com/1200x/4d/e4/52/4de4523f2f28d4b0f9f9816fdf1dbf4e.jpg",
			link: "/services/documents-notarization",
		},
		{
			name: "Affidavits And Sworn Statements",
			description:
				"Preparation and notarization of affidavits and sworn statements for various legal proceedings, court cases, and official requirements, handled with confidentiality and professionalism.",
			image: "https://i.pinimg.com/736x/cc/b2/95/ccb295f2c0bc827027cda15d6ff3d839.jpg",
			link: "/services/affidavits-and-sworn-statements",
		},
		{
			name: "Foreigner Marriage Act Translation",
			description:
				"Expert translation and comprehensive support services in accordance with Nepal’s Foreigner Marriage Act, facilitating smooth legal processes for international marriages.",
			image: "https://i.pinimg.com/736x/94/af/14/94af1407681d9ff3716aa7c70d41f223.jpg",
			link: "/services/foreigner-marriage-act-translation",
		},
		{
			name: "Multilingual Document Translation & Verification",
			description:
				"Accurate translation and official verification of documents in multiple languages to meet international standards and global requirements for business, education, and immigration.",
			image: "https://i.pinimg.com/1200x/f1/3b/af/f13baf38e91fc1a06877e7c3739e9322.jpg",
			link: "/services/multilingual-document-translation-and-verification",
		},
		{
			name: "Property Valuation",
			description:
				"Certified and detailed property valuation reports provided by experts to assist in legal transactions, tax assessments, and financial planning, ensuring reliable and recognized valuations.",
			image: "https://i.pinimg.com/736x/07/20/c7/0720c70b151eb743021edb3acdbf87f1.jpg",
			link: "/services/property-valuation",
		},
		{
			name: "Unofficial Documents Translation",
			description:
				"Careful and confidential translation of informal, personal, or unofficial documents to meet your personal or professional needs with high quality and attention to detail.",
			image: "https://i.pinimg.com/736x/a3/18/fd/a318fd8ea1fa54909abaf1e6cb95be1b.jpg",
			link: "/services/unofficial-documents-translation",
		},
		{
			name: "CA/Audit Report (Assistance)",
			description:
				"Professional support in preparing and reviewing Chartered Accountant reports and financial audits to ensure compliance with accounting standards and legal requirements.",
			image: "https://i.pinimg.com/736x/85/5b/ee/855beebe768e0c8b3def936494927469.jpg",
			link: "/services/ca-audit-report-assistance",
		},
		{
			name: "Powers of Attorney",
			description:
				"Drafting, reviewing, and notarizing power of attorney documents tailored to your specific legal and personal needs for effective authorization and representation.",
			image: "https://i.pinimg.com/736x/ae/45/8e/ae458e585cf4d90bd482bb5fd5a295b3.jpg",
			link: "/services/powers-of-attorney",
		},
		{
			name: "Certification of Documents",
			description:
				"Official certification services for true copies and original documents to verify authenticity for use in legal, educational, and governmental processes.",
			image: "https://i.pinimg.com/736x/06/91/6c/06916cdd5f5569dd82503b90ca52ff12.jpg",
			link: "/services/certification-of-documents",
		},
	],
	ne: [
		{
			name: "कागजात अनुवाद",
			description:
				"प्रमाणपत्र, सम्झौता, कानूनी कागजात, शैक्षिक प्रतिलिपि लगायत आधिकारिक कागजातहरूको व्यावसायिक र सही अनुवाद, सांस्कृतिक उपयुक्तता र गोपनीयता सहित।",
			image: "https://i.pinimg.com/736x/30/6c/fe/306cfea3a555f3ff26876b2d55d6325a.jpg",
			link: "/services/documents-translation",
		},
		{
			name: "कागजात नोटराइजेशन",
			description:
				"कानूनी र व्यक्तिगत कागजातहरू जस्तै शपथपत्र, सम्झौता, अधिकारपत्रहरूको प्रमाणित नोटराइजेशन जसले नेपालको भित्र र बाहिर प्रामाणिकता सुनिश्चित गर्दछ।",
			image: "https://i.pinimg.com/1200x/4d/e4/52/4de4523f2f28d4b0f9f9816fdf1dbf4e.jpg",
			link: "/services/documents-notarization",
		},
		{
			name: "शपथपत्र र प्रमाणपत्र",
			description:
				"विभिन्न कानूनी कार्यवाहि, अदालत मुद्दा र आधिकारिक आवश्यकताका लागि शपथपत्र र प्रमाणपत्रहरूको तयारी र नोटराइजेशन, गोपनीयता र व्यावसायिकता सहित।",
			image: "https://i.pinimg.com/736x/cc/b2/95/ccb295f2c0bc827027cda15d6ff3d839.jpg",
			link: "/services/affidavits-and-sworn-statements",
		},
		{
			name: "विदेशी विवाह ऐन अनुवाद",
			description:
				"नेपालको विदेशी विवाह ऐन अनुसार अनुवाद र व्यापक सहयोग सेवा, अन्तर्राष्ट्रिय विवाहको कानूनी प्रक्रिया सहज बनाउन।",
			image: "https://i.pinimg.com/736x/94/af/14/94af1407681d9ff3716aa7c70d41f223.jpg",
			link: "/services/foreigner-marriage-act-translation",
		},
		{
			name: "बहुभाषिक कागजात अनुवाद र प्रमाणीकरण",
			description:
				"व्यापार, शिक्षा र आप्रवासनका लागि अन्तर्राष्ट्रिय मापदण्ड अनुसार बहुभाषिक कागजातहरूको सही अनुवाद र आधिकारिक प्रमाणीकरण।",
			image: "https://i.pinimg.com/1200x/f1/3b/af/f13baf38e91fc1a06877e7c3739e9322.jpg",
			link: "/services/multilingual-document-translation-and-verification",
		},
		{
			name: "सम्पत्ति मूल्याङ्कन",
			description:
				"कानूनी लेनदेन, कर निर्धारण र वित्तीय योजना बनाउन विशेषज्ञहरूद्वारा तयार गरिएको प्रमाणित सम्पत्ति मूल्याङ्कन रिपोर्ट, भरपर्दो र मान्य।",
			image: "https://i.pinimg.com/736x/07/20/c7/0720c70b151eb743021edb3acdbf87f1.jpg",
			link: "/services/property-valuation",
		},
		{
			name: "गैर-आधिकारिक कागजात अनुवाद",
			description:
				"व्यक्तिगत वा अनौपचारिक कागजातहरूको सावधानीपूर्वक र गोपनीय अनुवाद, उच्च गुणस्तर र सूक्ष्मता सहित।",
			image: "https://i.pinimg.com/736x/a3/18/fd/a318fd8ea1fa54909abaf1e6cb95be1b.jpg",
			link: "/services/unofficial-documents-translation",
		},
		{
			name: "चार्टर्ड एकाउन्टेन्ट / अडिट रिपोर्ट (सहयोग)",
			description:
				"चार्टर्ड एकाउन्टेन्ट रिपोर्ट र वित्तीय अडिट तयारीमा व्यावसायिक सहयोग, लेखा मापदण्ड र कानूनी आवश्यकतासँग मेल खाने।",
			image: "https://i.pinimg.com/736x/85/5b/ee/855beebe768e0c8b3def936494927469.jpg",
			link: "/services/ca-audit-report-assistance",
		},
		{
			name: "अधिकारपत्रहरू",
			description:
				"तपाईंको कानूनी र व्यक्तिगत आवश्यकताका लागि अधिकारपत्रहरू तयार पार्नु, समीक्षा गर्नु र नोटराइज गर्नुहोस् ताकि प्रभावकारी अधिकार र प्रतिनिधित्व सुनिश्चित होस्।",
			image: "https://i.pinimg.com/736x/ae/45/8e/ae458e585cf4d90bd482bb5fd5a295b3.jpg",
			link: "/services/powers-of-attorney",
		},
		{
			name: "कागजात प्रमाणीकरण",
			description:
				"कानूनी, शैक्षिक र सरकारी प्रक्रियामा प्रामाणिकता पुष्टि गर्न प्रतिलिपि र मूल कागजातहरूको आधिकारिक प्रमाणीकरण सेवा।",
			image: "https://i.pinimg.com/736x/06/91/6c/06916cdd5f5569dd82503b90ca52ff12.jpg",
			link: "/services/certification-of-documents",
		},
	],
};

const MainContext = createContext(null);

export function MainContextProvider({ children }) {
	const [language, setLanguage] = useState("en");
	const [services, setServices] = useState(servicesTranslations.en);

	useEffect(() => {
		if (typeof window !== "undefined") {
			const htmlLang = document.documentElement.lang || "en";
			if (htmlLang.startsWith("ne")) {
				setLanguage("ne");
				setServices(servicesTranslations.ne);
			} else {
				setLanguage("en");
				setServices(servicesTranslations.en);
			}
		}
	}, []);

	return <MainContext.Provider value={{ language, services }}>{children}</MainContext.Provider>;
}

export function useMainContext() {
	return useContext(MainContext);
}
