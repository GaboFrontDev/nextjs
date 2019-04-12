import "isomorphic-fetch";
import Link from "next/link";
import Header from "../components/header";
import Styles from "../styles/styles";

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

				<Styles />
			</div>
		);
	}
}
