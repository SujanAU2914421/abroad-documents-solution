"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { MainContextProvider } from "@/context/mainContects";
import BlogContextProvider from "@/context/blogContext";
import Footer from "@/components/footer";
import SocialLinks from "@/components/socialLinks";
import HelperPopUp from "@/components/helper";

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
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}>
				<div className="h-auto w-screen min-h-screen bg-gradient-to-br from-indigo-100 to-white">
					<MainContextProvider>
						<BlogContextProvider>
							<HelperPopUp />
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
