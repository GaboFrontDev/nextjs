import "isomorphic-fetch";
import Link from "next/link";
import Header from "../components/header";
export default class extends React.Component {
	static async getInitialProps() {
		let req = await fetch("https://api.audioboom.com/channels/recommended");
		let { body: channels } = await req.json();
		return { channels };
	}

	render() {
		const { channels } = this.props;
		return (
			<div>
				<Header />
				<div className="channels">
					{channels.map(channel => (
						<Link href={`/channel?id=${channel.id}`} prefetch>
							<a className="channel">
								<img src={channel.urls.logo_image.original} alt="" />
								<h2>{channel.title}</h2>
							</a>
						</Link>
					))}
				</div>

				<style jsx>{`
					.channels {
						display: grid;
						grid-gap: 15px;
						padding: 15px;
						grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
					}

					.channel {
						display: block;
						border-radius: 3px;
						box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
						margin-bottom: 0.5em;
						background: #354446;
						color: #fff;
					}

					.channel img {
						width: 100%;
					}

					h2 {
						padding: 5px;
						font-size: 0.9em;
						text-align: center;
						margin: 0;
					}
				`}</style>
				<style jsx global>{`
					body {
						margin: 0;
						font-family: system-ui;
						background: #f7df1e;
					}
				`}</style>
			</div>
		);
	}
}
