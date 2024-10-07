import "./globals.css";

export const metadata = {
	title: "David Buraga",
	description: "David Buraga - Personal Portfolio",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
