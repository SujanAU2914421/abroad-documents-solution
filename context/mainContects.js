"use client";
import { createContext, useContext, useState } from "react";

// Create the context
const MainContext = createContext(null);

// Provider component
export function MainContextProvider({ children }) {
	const services = [
		{
			name: "Documents Translation",
			description: "Professional translation of official documents with accuracy and confidentiality.",
			image: "https://i.pinimg.com/736x/30/6c/fe/306cfea3a555f3ff26876b2d55d6325a.jpg",
			link: "/services/documents-translation",
		},
		{
			name: "Documents Notarization",
			description: "Certified notarization for legal and personal documents to ensure authenticity.",
			image: "https://i.pinimg.com/1200x/4d/e4/52/4de4523f2f28d4b0f9f9816fdf1dbf4e.jpg",
			link: "/services/documents-notarization",
		},
		{
			name: "Affidavits And Sworn Statements",
			description: "Prepare and notarize affidavits or sworn statements for legal use.",
			image: "https://i.pinimg.com/736x/cc/b2/95/ccb295f2c0bc827027cda15d6ff3d839.jpg",
			link: "/services/affidavits-and-sworn-statements",
		},
		{
			name: "Foreigner Marriage Act Translation",
			description: "Translation and support services under the Foreigner Marriage Act.",
			image: "https://i.pinimg.com/736x/94/af/14/94af1407681d9ff3716aa7c70d41f223.jpg",
			link: "/services/foreigner-marriage-act-translation",
		},
		{
			name: "Multilingual Document Translation & Verification",
			description: "Translation and verification in multiple languages for global use.",
			image: "https://i.pinimg.com/1200x/f1/3b/af/f13baf38e91fc1a06877e7c3739e9322.jpg",
			link: "/services/multilingual-document-translation-and-verification",
		},
		{
			name: "Property Valuation",
			description: "Get accurate and certified property valuations for legal and financial purposes.",
			image: "https://i.pinimg.com/736x/07/20/c7/0720c70b151eb743021edb3acdbf87f1.jpg",
			link: "/services/property-valuation",
		},
		{
			name: "Unofficial Documents Translation",
			description: "Translation of informal or unofficial documents handled with care.",
			image: "https://i.pinimg.com/736x/a3/18/fd/a318fd8ea1fa54909abaf1e6cb95be1b.jpg",
			link: "/services/unofficial-documents-translation",
		},
		{
			name: "CA/Audit Report (Assistance)",
			description: "Support in preparing Chartered Accountant reports and financial audits.",
			image: "https://i.pinimg.com/736x/85/5b/ee/855beebe768e0c8b3def936494927469.jpg",
			link: "/services/ca-audit-report-assistance",
		},
		{
			name: "Powers of Attorney",
			description: "Drafting and notarizing power of attorney documents for various needs.",
			image: "https://i.pinimg.com/736x/ae/45/8e/ae458e585cf4d90bd482bb5fd5a295b3.jpg",
			link: "/services/powers-of-attorney",
		},
		{
			name: "Certification of Documents",
			description: "Official certification of copies and original documents.",
			image: "https://i.pinimg.com/736x/06/91/6c/06916cdd5f5569dd82503b90ca52ff12.jpg",
			link: "/services/certification-of-documents",
		},
	];

	return <MainContext.Provider value={{ services }}>{children}</MainContext.Provider>;
}

// Custom hook to use the context
export function useMainContext() {
	return useContext(MainContext);
}
