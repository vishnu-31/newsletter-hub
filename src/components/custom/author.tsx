import * as React from "react"
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from "@/components/ui/avatar"


import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
export function Author({ name, email }: { name: string, email: string }) {
	return (
		<Card className="w-fit min-w-6 ">
			<CardHeader className="p-2">
				<Avatar>
					<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
				<CardTitle className="text-md">{name}</CardTitle>
				<CardDescription className="text-sm">{email}</CardDescription>
			</CardHeader>
		</Card>
	)
}
export default Author
