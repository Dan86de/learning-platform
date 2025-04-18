import { createFileRoute, Router } from "@tanstack/react-router";

export const Route = createFileRoute(
	"/_authed/course/$courseName_/module/$moduleName_/lesson/$lessonName",
)({
	component: LessonComponent,
});

function LessonComponent() {
	const { courseName, moduleName, lessonName } = Route.useParams();
	return (
		<div>
			Hello
			"/_authed/course/$courseName_/module/$moduleName_/lesson/$lessonName"!
		</div>
	);
}
