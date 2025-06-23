"use client";
import React, { useState, useEffect } from "react";

export default function SendAMessage() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const [status, setStatus] = useState(null); // null | "loading" | "success" | "error"
	const [errorMsg, setErrorMsg] = useState("");
	const [lang, setLang] = useState("en");

	useEffect(() => {
		const htmlLang = document.documentElement.lang || "en";
		setLang(htmlLang.startsWith("ne") ? "ne" : "en");
	}, []);

	const t = {
		en: {
			heading: "Send Us a Message",
			fullName: "Full Name",
			fullNamePlaceholder: "Your Name",
			emailAddress: "Email Address",
			emailPlaceholder: "you@example.com",
			subject: "Subject",
			subjectPlaceholder: "Subject",
			message: "Message",
			messagePlaceholder: "Write your message...",
			sendButton: "Send Message",
			sendingButton: "Sending...",
			successMessage: "Message sent successfully! Thank you.",
			errorMessage: "Error: ",
		},
		ne: {
			heading: "हामीलाई सन्देश पठाउनुहोस्",
			fullName: "पूरा नाम",
			fullNamePlaceholder: "तपाईंको नाम",
			emailAddress: "इमेल ठेगाना",
			emailPlaceholder: "you@example.com",
			subject: "विषय",
			subjectPlaceholder: "विषय",
			message: "सन्देश",
			messagePlaceholder: "यहाँ आफ्नो सन्देश लेख्नुहोस्...",
			sendButton: "सन्देश पठाउनुहोस्",
			sendingButton: "पठाउँदैछ...",
			successMessage: "सन्देश सफलतापूर्वक पठाइयो! धन्यवाद।",
			errorMessage: "त्रुटि: ",
		},
	};

	const translation = t[lang];

	function handleChange(e) {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	}

	async function handleSubmit(e) {
		e.preventDefault();
		setStatus("loading");
		setErrorMsg("");

		try {
			const res = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			if (res.ok) {
				setStatus("success");
				setFormData({ name: "", email: "", subject: "", message: "" }); // reset form
			} else {
				const data = await res.json();
				setErrorMsg(data.error || "Failed to send message");
				setStatus("error");
			}
		} catch (error) {
			setErrorMsg("Failed to send message");
			setStatus("error");
		}
	}

	return (
		<div className="relative xl:px-32 lg:px-32 md:px-16 sm:px-8 p-4 my-16">
			<div className="w-full flex mx-auto p-8 gap-8 bg-gray-200 xl:flex-nowrap lg:flex-nowrap md:flex-nowrap flex-wrap xl:*:w-1/2 lg:*:w-1/2 md:*:w-1/2 *:w-full">
				{/* Form Section */}
				<div className="relative h-auto">
					<h2 className="text-2xl font-bold text-gray-800 mb-6">{translation.heading}</h2>

					<form onSubmit={handleSubmit} className="space-y-5">
						<div className="relative flex *:w-1/2 gap-4">
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-1">
									{translation.fullName}
								</label>
								<input
									type="text"
									name="name"
									value={formData.name}
									onChange={handleChange}
									required
									placeholder={translation.fullNamePlaceholder}
									className="w-full px-4 py-2 border text-sm h-10 bg-white outline-none"
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-1">
									{translation.emailAddress}
								</label>
								<input
									type="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									required
									placeholder={translation.emailPlaceholder}
									className="w-full px-4 py-2 border text-sm h-10 bg-white outline-none"
								/>
							</div>
						</div>
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-1">
								{translation.subject}
							</label>
							<input
								type="text"
								name="subject"
								value={formData.subject}
								onChange={handleChange}
								required
								placeholder={translation.subjectPlaceholder}
								className="w-full px-4 py-2 border text-sm h-10 bg-white outline-none"
							/>
						</div>
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-1">
								{translation.message}
							</label>
							<textarea
								name="message"
								value={formData.message}
								onChange={handleChange}
								required
								rows={4}
								placeholder={translation.messagePlaceholder}
								className="w-full px-4 py-2 border text-sm min-h-32 bg-white outline-none"
							></textarea>
						</div>

						<button
							type="submit"
							disabled={status === "loading"}
							className="w-full bg-purple-600 cursor-pointer font-bold text-sm h-10 text-white flex items-center justify-center rounded-md hover:bg-purple-700 transition-colors duration-200 disabled:opacity-60"
						>
							{status === "loading" ? translation.sendingButton : translation.sendButton}
						</button>
					</form>

					{/* Status messages */}
					{status === "success" && (
						<p className="mt-4 text-green-600 font-semibold">{translation.successMessage}</p>
					)}
					{status === "error" && (
						<p className="mt-4 text-red-600 font-semibold">{translation.errorMessage + errorMsg}</p>
					)}
				</div>

				{/* Map Section */}
				<div className="relative h-auto">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14263.374199649728!2d87.98208000000001!3d26.653491199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e5bb9cd81165c5%3A0x8b1400aa4620516!2sJhapa%20Natak%20Ghar!5e0!3m2!1sen!2snp!4v1750298013882!5m2!1sen!2snp"
						className="h-[500px] w-full"
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
				</div>
			</div>
		</div>
	);
}
