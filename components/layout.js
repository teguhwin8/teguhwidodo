import Head from "next/head";

export default function Layout({ children }) {
	return (
		<>
			<Head>
				<title>Halo Programmer</title>
			</Head>
      <nav className="text-center">Navbar</nav>
			<main>{children}</main>
      <footer>Footer</footer>
		</>
	);
}
