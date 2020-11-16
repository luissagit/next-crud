function Layout({ children }) {
	return(
		<div id="app" className="">
			<header>
				header
			</header>
			<main className="">
				{ children }
			</main>
			<footer>
				footer
			</footer>
		</div>
	);
}

export default Layout;