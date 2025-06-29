"use client";

import React, { Suspense, useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { useBlogContext } from "@/context/blogContext";
import { useMainContext } from "@/context/mainContects";
import { useRouter } from "next/navigation";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default function Page() {
	const { blogs } = useBlogContext();
	const { services } = useMainContext();
	const router = useRouter();

	const resultRef = useRef(null);
	const [searchInput, setSearchInput] = useState("");
	const [loading, setLoading] = useState(false);
	const [query, setQuery] = useState("");

	// 🍃 Get query from URL on mount
	useEffect(() => {
		if (typeof window !== "undefined") {
			const params = new URLSearchParams(window.location.search);
			const q = params.get("query")?.toLowerCase().trim() || "";
			setQuery(q);
			setSearchInput(q);
		}
	}, []);

	const filteredServices = services.filter((s) => s.name.toLowerCase().includes(query));
	const filteredBlogs = blogs.filter((b) => b.topic.toLowerCase().includes(query));

	const handleSearch = async (e) => {
		e.preventDefault();
		if (searchInput.trim()) {
			setLoading(true);
			const encodedQuery = encodeURIComponent(searchInput.trim());
			router.push(`/search?query=${encodedQuery}`);
			setTimeout(() => {
				resultRef.current?.scrollIntoView({ behavior: "smooth" });
				setQuery(searchInput.trim().toLowerCase());
				setLoading(false);
			}, 500);
		}
	};

	return (
		<Suspense fallback={<div className="text-center py-20">Loading search...</div>}>
			<div className="relative tracking-wide">
				<div className="px-6 md:px-20 py-14 bg-white dark:bg-[#010104] text-gray-800 dark:text-gray-100">
					{/* Title */}
					<div className="relative">
						<div className="relative flex justify-center font-bold text-3xl">Search</div>
						<div className="relative text-sm flex justify-center">
							<div className="flex items-center gap-2 mt-2 text-gray-700">
								<div className="relative">Home</div>
								<div className="relative">{">"}</div>
								<div className="relative">Search</div>
							</div>
						</div>
					</div>

					{/* Search Input */}
					<form onSubmit={handleSearch} className="relative max-w-xl mx-auto mt-8">
						<div className="relative flex items-center gap-4 flex-wrap justify-center">
							<Input
								type="search"
								placeholder="Search for blogs or services..."
								value={searchInput}
								className="h-13 rounded-full px-8 text-sm"
								onChange={(e) => setSearchInput(e.target.value)}
							/>
							<button
								type="submit"
								className="outline-none h-13 bg-purple-600 text-white px-8 cursor-pointer rounded-full font-bold shadow-xl"
							>
								{loading ? "Loading search..." : "Search"}
							</button>
						</div>
					</form>

					{/* Search Results */}
					{query && (
						<div ref={resultRef} className="relative max-w-xl mx-auto space-y-8 pt-16">
							{/* Services */}
							{filteredServices.length > 0 && (
								<div>
									<h2 className="font-bold text-xl mb-4">Matching Services</h2>
									<div className="grid gap-4">
										{filteredServices.map((service, i) => (
											<Link key={i} href={service.link}>
												<div className="border p-4 rounded-md hover:shadow-md">
													<div className="font-semibold text-sm mb-1">{service.name}</div>
													<div className="text-xs text-blue-600 underline mb-1">
														{service.link}
													</div>
													<div className="text-xs text-gray-700 line-clamp-2">
														{service.description}
													</div>
												</div>
											</Link>
										))}
									</div>
								</div>
							)}

							{/* Blogs */}
							{filteredBlogs.length > 0 && (
								<div>
									<h2 className="font-bold text-xl mb-4">Matching Blogs</h2>
									<div className="grid gap-4">
										{filteredBlogs.map((blog, i) => (
											<Link key={i} href={`/blogs/${blog.formatted_topic}`}>
												<div className="border p-4 rounded-md hover:shadow-md">
													<div className="font-semibold text-sm mb-1">{blog.topic}</div>
													<div className="text-xs text-blue-600 underline mb-1">{`/blogs/${blog.formatted_topic}`}</div>
													<div className="text-[10px] text-gray-500 mb-1">
														{new Date(blog.date).toLocaleDateString()} | {blog.publisher}
													</div>
													<div
														className="text-xs text-gray-700 line-clamp-2"
														dangerouslySetInnerHTML={{
															__html:
																blog.description.replace(/<[^>]+>/g, "").slice(0, 150) +
																"...",
														}}
													/>
												</div>
											</Link>
										))}
									</div>
								</div>
							)}

							{/* No results */}
							{filteredServices.length === 0 && filteredBlogs.length === 0 && (
								<div className="text-sm text-red-500">No results found for “{query}”</div>
							)}
						</div>
					)}
				</div>
			</div>
		</Suspense>
	);
}
