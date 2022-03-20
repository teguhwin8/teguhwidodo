import Layout from "../components/layout";
import { Text } from "@nextui-org/react";

export default function Index() {
	return (
		<Layout>
			<>
				<Text
					h1
					size={60}
					css={{ textGradient: "45deg, $blue500 -20%, $pink500 50%" }}
					weight='bold'
				>
					Halo
				</Text>
				<Text
					h1
					size={60}
					css={{
						textGradient: "45deg, $purple500 -20%, $pink500 100%",
					}}
					weight='bold'
				>
					Programmer
				</Text>
				<Text
					h1
					size={60}
					css={{
						textGradient: "45deg, $yellow500 -20%, $red500 100%",
					}}
					weight='bold'
				>
					Indonesia
				</Text>
			</>
		</Layout>
	);
}
