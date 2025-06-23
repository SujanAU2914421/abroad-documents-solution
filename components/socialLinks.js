"use client";

import React from "react";
import { Instagram, PhoneCall } from "lucide-react";
import { useMainContext } from "@/context/mainContects";

const translations = {
	en: {
		chatOnWhatsApp: "Chat on WhatsApp",
	},
	ne: {
		chatOnWhatsApp: "व्हाट्सएपमा कुरा गर्नुहोस्",
	},
};

export default function SocialLinks() {
	const { language } = useMainContext();

	const t = translations[language] || translations.en;

	return (
		<>
			{/* WhatsApp Chat Button Bottom Left */}
			<a
				href="https://wa.me/9779826923934"
				target="_blank"
				rel="noopener noreferrer"
				className="fixed z-50 bg-white rounded-full text-gray-700 shadow-xl border bottom-8 left-8 flex items-center justify-center h-10 px-4 gap-2 hover:bg-green-100 transition"
				aria-label={t.chatOnWhatsApp}
			>
				{/* WhatsApp Icon */}
				<span className="inline-block">
					<svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							fill="#67C15E"
							d="M24 4C12.95 4 4 12.95 4 24c0 4.19 1.13 8.12 3.1 11.49L4 44l8.91-2.94C15.88 43.9 19.81 45 24 45c11.05 0 20-8.95 20-20S35.05 4 24 4Zm.06 37c-3.68 0-7.07-1.06-9.94-2.9L8 40l1.89-6.17A16.895 16.895 0 0 1 7 24c0-9.38 7.62-17 17-17s17 7.62 17 17-7.62 17-17 17Zm8.5-12.19c-.47-.23-2.77-1.37-3.2-1.52s-.74-.23-1.06.24c-.31.47-1.22 1.51-1.49 1.82-.27.31-.55.35-1.02.12-.47-.23-1.97-.73-3.76-2.33-1.39-1.24-2.33-2.77-2.61-3.24-.27-.47-.03-.72.2-.94.2-.2.47-.55.7-.82.23-.27.31-.47.47-.78.15-.31.08-.59-.04-.82-.12-.23-1.06-2.55-1.45-3.49-.38-.9-.78-.78-1.06-.8-.27-.01-.59-.01-.9-.01s-.82.12-1.25.59c-.43.47-1.65 1.62-1.65 3.94s1.69 4.57 1.93 4.89c.23.31 3.31 5.08 8.03 7.12 1.12.48 1.99.76 2.67.97 1.12.36 2.14.31 2.95.19.9-.14 2.77-1.13 3.17-2.21.39-1.08.39-2 .27-2.2-.11-.2-.43-.31-.9-.55Z"
						/>
					</svg>
				</span>
				<span className="text-sm font-medium">{t.chatOnWhatsApp}</span>
			</a>

			{/* Social Icons Bar Right Side */}
			<div className="fixed top-0 right-4 h-screen flex items-center z-40">
				<div className="bg-white border shadow-xl rounded-full grid grid-cols-1 overflow-hidden">
					{/* WhatsApp */}
					<a
						href="https://wa.me/9779826923934"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="WhatsApp"
						className="h-16 w-16 flex items-center justify-center hover:bg-gray-100 duration-200"
					>
						<svg width="30" height="30" viewBox="0 0 48 48" fill="#67C15E">
							<path d="M24 4C12.95 4 4 12.95 4 24c0 4.19 1.13 8.12 3.1 11.49L4 44l8.91-2.94C15.88 43.9 19.81 45 24 45c11.05 0 20-8.95 20-20S35.05 4 24 4Zm.06 37c-3.68 0-7.07-1.06-9.94-2.9L8 40l1.89-6.17A16.895 16.895 0 0 1 7 24c0-9.38 7.62-17 17-17s17 7.62 17 17-7.62 17-17 17Zm8.5-12.19c-.47-.23-2.77-1.37-3.2-1.52s-.74-.23-1.06.24c-.31.47-1.22 1.51-1.49 1.82-.27.31-.55.35-1.02.12-.47-.23-1.97-.73-3.76-2.33-1.39-1.24-2.33-2.77-2.61-3.24-.27-.47-.03-.72.2-.94.2-.2.47-.55.7-.82.23-.27.31-.47.47-.78.15-.31.08-.59-.04-.82-.12-.23-1.06-2.55-1.45-3.49-.38-.9-.78-.78-1.06-.8-.27-.01-.59-.01-.9-.01s-.82.12-1.25.59c-.43.47-1.65 1.62-1.65 3.94s1.69 4.57 1.93 4.89c.23.31 3.31 5.08 8.03 7.12 1.12.48 1.99.76 2.67.97 1.12.36 2.14.31 2.95.19.9-.14 2.77-1.13 3.17-2.21.39-1.08.39-2 .27-2.2-.11-.2-.43-.31-.9-.55Z" />
						</svg>
					</a>

					{/* Instagram */}
					<a
						href="https://instagram.com/yourprofile"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Instagram"
						className="h-16 w-16 flex items-center justify-center hover:bg-gray-100 duration-200"
					>
						<Instagram size={30} />
					</a>

					{/* Viber */}
					<a
						href="https://viber.com/yourprofile"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Viber"
						className="h-16 w-16 flex items-center justify-center hover:bg-gray-100 duration-200"
					>
						<svg width="30" height="30" viewBox="0 0 495 495" fill="#933EC5">
							<path d="M185.428,309.197c36.332,36.332,80.711,64.548,132.199,85.521c35.751,14.563,65.944-0.643,78.29-37.357c2.216-6.591,2.37-13.043-0.014-19.522c-5.76-15.657-60.331-55.305-76.661-56.194c-12.523-0.681-19.306,7.829-25.037,16.275c-10.838,15.953-24.576,16.042-39.899,9.224c-15.419-6.862-28.91-15.662-40.037-26.79c-11.127-11.127-19.928-24.618-26.79-40.037c-6.818-15.323-6.729-29.061,9.225-39.898c8.446-5.731,16.955-12.514,16.274-25.037c-0.889-16.329-40.537-70.901-56.194-76.66c-6.479-2.384-12.931-2.229-19.522-0.014c-36.714,12.346-51.92,42.54-37.357,78.29C120.88,228.486,149.096,272.865,185.428,309.197z" />
						</svg>
					</a>

					{/* Phone Call */}
					<a
						href="tel:+9779812818289"
						aria-label="Call Phone"
						className="h-16 w-16 flex items-center justify-center hover:bg-gray-100 duration-200"
					>
						<PhoneCall size={30} />
					</a>
				</div>
			</div>
		</>
	);
}
