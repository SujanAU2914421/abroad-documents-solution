"use client";

import { useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { MainContextProvider } from "@/context/mainContects";
import BlogContextProvider from "@/context/blogContext";
import Footer from "@/components/footer";
import SocialLinks from "@/components/socialLinks";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<div className="relative h-screen w-screen overflow-x-hidden overflow-y-auto tracking-wide scroll-smooth">
					<MainContextProvider>
						<BlogContextProvider>
							<Navbar />
							<SocialLinks />
							{children}
							<Footer />
						</BlogContextProvider>
					</MainContextProvider>
				</div>
			</body>
		</html>
	);
}
