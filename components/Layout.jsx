import Header from "./Header";
import Head from "next/head";
export default class Layout extends React.Component {
	render() {
		const { children, title, headName } = this.props;

		return (
			<div>
				<Head>
					<title>{title}</title>
				</Head>
				<Header headName={headName} />
				{children}
				<style jsx global>{`
					body {
						margin: 0;
						font-family: system-ui;
						background: #f7df1e;
					}
					a {
						text-decoration: none;
					}
				`}</style>
			</div>
		);
	}
}
