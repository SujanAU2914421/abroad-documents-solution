"use client";

import React, { useEffect, useState } from "react";

export default function SubNavbar() {
	const [lang, setLang] = useState("en");

	useEffect(() => {
		const storedLang = localStorage.getItem("lang") || "en";
		setLang(storedLang);
		document.documentElement.lang = storedLang;
	}, []);

	const handleChange = (value) => {
		setLang(value);
		localStorage.setItem("lang", value);
		document.documentElement.lang = value;
		location.reload(); // Reload to reflect language changes
	};

	return (
		<div className="relative flex justify-end gap-8 py-1">
			<div className="relative flex items-center gap-4">
				<a href="tel:982-6923934">
					<div className="relative hover:bg-gray-200 hover:text-gray-800 px-2 py-1 cursor-pointer rounded-md font-bold text-xs flex">
						📞 +977 982-6923934
					</div>
				</a>
				<a href="mailto:ads.doc.services@gmail.com">
					<div className="relative hover:bg-gray-200 hover:text-gray-800 px-2 py-1 cursor-pointer rounded-md font-bold text-xs">
						📧 ads.doc.services@gmail.com
					</div>
				</a>
			</div>
			<div className="flex gap-2 text-[10px]">
				<button
					className={`px-2 h-7 rounded-md border cursor-pointer ${
						lang === "en" ? "bg-gray-800 text-white" : "bg-white text-gray-800"
					}`}
					onClick={() => handleChange("en")}
				>
					English
				</button>
				<button
					className={`px-2 h-7 rounded-md border cursor-pointer ${
						lang === "ne" ? "bg-gray-800 text-white" : "bg-white text-gray-800"
					}`}
					onClick={() => handleChange("ne")}
				>
					नेपाली
				</button>
			</div>
		</div>
	);
}
