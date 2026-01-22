"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export function SplashScreen() {
	const [isLoading, setIsLoading] = useState(true);
	const pathname = usePathname();

	useEffect(() => {
		// Show splash screen on route change
		setIsLoading(true);

		const checkContentLoaded = () => {
			// Wait for document to be ready
			if (document.readyState !== "complete") {
				return false;
			}

			// Get all images and videos on the page
			const images = Array.from(document.querySelectorAll("img"));
			const videos = Array.from(document.querySelectorAll("video"));

			// Check if all images are loaded
			const imagesLoaded = images.every((img) => img.complete);

			// Check if all videos are ready (have loaded metadata)
			const videosReady = videos.every(
				(video) => video.readyState >= 1, // HAVE_METADATA or higher
			);

			return imagesLoaded && videosReady;
		};

		const hideLoader = () => {
			// Add a small delay for smooth transition
			setTimeout(() => {
				setIsLoading(false);
			}, 300);
		};

		const handleLoad = () => {
			if (checkContentLoaded()) {
				hideLoader();
			} else {
				// If not all content is loaded, set up listeners
				const images = Array.from(document.querySelectorAll("img"));
				const videos = Array.from(document.querySelectorAll("video"));

				let loadedCount = 0;
				const totalAssets = images.length + videos.length;

				const checkAllLoaded = () => {
					loadedCount++;
					if (loadedCount >= totalAssets || checkContentLoaded()) {
						hideLoader();
					}
				};

				images.forEach((img) => {
					if (img.complete) {
						checkAllLoaded();
					} else {
						img.addEventListener("load", checkAllLoaded, { once: true });
						img.addEventListener("error", checkAllLoaded, { once: true });
					}
				});

				videos.forEach((video) => {
					if (video.readyState >= 1) {
						checkAllLoaded();
					} else {
						video.addEventListener("loadedmetadata", checkAllLoaded, {
							once: true,
						});
						video.addEventListener("error", checkAllLoaded, { once: true });
					}
				});

				// Fallback: hide after 5 seconds if content still not loaded
				const timeout = setTimeout(() => {
					hideLoader();
				}, 5000);

				return () => clearTimeout(timeout);
			}
		};

		// Wait a bit for the DOM to settle after route change
		const initialTimeout = setTimeout(() => {
			if (document.readyState === "complete") {
				handleLoad();
			} else {
				window.addEventListener("load", handleLoad, { once: true });
			}
		}, 100);

		return () => {
			clearTimeout(initialTimeout);
			window.removeEventListener("load", handleLoad);
		};
	}, [pathname]); // Re-run when route changes

	if (!isLoading) return null;

	return (
		<div className="fixed inset-0 z-9999 flex items-center justify-center bg-[#fdfbf8] transition-opacity duration-300">
			<div className="animate-pulse">
				<Image
					src="/logo.svg"
					alt="Smart Range Leather"
					width={200}
					height={200}
					priority
					className="h-auto w-32 sm:w-40 md:w-48 lg:w-56"
				/>
			</div>
		</div>
	);
}
