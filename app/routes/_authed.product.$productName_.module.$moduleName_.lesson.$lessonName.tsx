import { createFileRoute, Router } from "@tanstack/react-router";

export const Route = createFileRoute(
	"/_authed/product/$productName_/module/$moduleName_/lesson/$lessonName",
)({
	component: LessonComponent,
});

function LessonComponent() {
	const { productName, moduleName, lessonName } = Route.useParams();
	return (
		<div>
			Hello
			"/_authed/product/$productName/module/$moduleName/lesson/$lessonName"!
		</div>
	);
}
