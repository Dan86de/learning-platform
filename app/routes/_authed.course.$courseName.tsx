import { Button } from "@/components/catalyst/button";
import { Text } from "@/components/catalyst/text";
import { ProductPageHeader } from "@/components/product-page-header";
import { ProductPageModuleList } from "@/components/product-page-module-list";
import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/_authed/course/$courseName")({
	component: CourseOverviewComponent,
});

const product = {
	productName: "Decision-Making Mastery",
	productDescription:
		"A comprehensive journey that helps you navigate uncertainty and make choices aligned with your values and goals.",
	productImage: "/course_images/test.webp",
	numOfModules: 5,
	numOfLessons: 25,
	duration: "6h 38m",
	modules: [
		{
			title: "Orientation",
			description:
				"Discover your internal compass and understand your decision-making landscape",
			sections: [
				{
					title: "The landscape of choice",
					description: "Understanding the terrain of decision-making",
					duration: "15:23",
				},
				{
					title: "Internal vs. external compass",
					description:
						"Learning to balance internal guidance with external input",
					duration: "14:07",
				},
				{
					title: "The stories you're living",
					description: "Examining the narratives that shape your decisions",
					duration: "16:18",
				},
				{
					title: "Recognizing patterns in past decisions",
					description:
						"Identyfying recurring themes in your decision-making history",
					duration: "17:21",
				},
				{
					title: "Values, goals, ant the difference between them",
					description:
						"Understanding how values and goals influence your choices",
					duration: "11:21",
				},
			],
		},
		{
			title: "Discrement",
			description:
				"Learn to evaluate options with clarity and wisdom, moving beyond surface-level analysis to deeper understanding",
			sections: [
				{
					title: "What makes a 'good' decision, really?",
					description:
						"Exploring the components of effective decision-making and challenging common misconceptions",
					duration: "11:14",
				},
				{
					title: "Internal vs. external compass",
					description:
						"Learning to balance internal guidance with external input",
					duration: "14:07",
				},
				{
					title: "The stories you're living",
					description: "Examining the narratives that shape your decisions",
					duration: "16:18",
				},
				{
					title: "Recognizing patterns in past decisions",
					description:
						"Identyfying recurring themes in your decision-making history",
					duration: "17:21",
				},
				{
					title: "Values, goals, ant the difference between them",
					description:
						"Understanding how values and goals influence your choices",
					duration: "11:21",
				},
			],
		},
	],
};
function CourseOverviewComponent() {
	const courseContentRef = useRef<HTMLDivElement>(null);
	const [scrollProgress, setScrollProgress] = useState(1);

	useEffect(() => {
		const handleScroll = () => {
			if (courseContentRef.current) {
				const { scrollTop, scrollHeight, clientHeight } =
					courseContentRef.current;
				const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
				setScrollProgress(Math.min(progress, 100) + 1);
			}
		};

		const contentElement = courseContentRef.current;
		if (contentElement) {
			contentElement.addEventListener("scroll", handleScroll);
			return () => contentElement.removeEventListener("scroll", handleScroll);
		}
	}, []);

	return (
		<>
			<ProductPageHeader
				productName={product.productName}
				productDescription={product.productDescription}
				productImage={product.productImage}
				scrollProgress={scrollProgress}
				numOfModules={product.numOfModules}
				numOfLessons={product.numOfLessons}
				duration={product.duration}
			/>

			<ProductPageModuleList
				courseContentRef={courseContentRef}
				modules={product.modules}
			/>
		</>
	);
}
