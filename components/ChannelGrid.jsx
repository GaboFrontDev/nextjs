import Link from "next/link";

export default class ChannelGrid extends React.Component {
	render() {
		const { children, channels } = this.props;

		return (
			<React.Fragment>
				{children}
				<div className="channels">
					{channels.map(channel => (
						<Link
							href={`/channel?id=${channel.id}`}
							key={channel.id}
							prefetch
						>
							<a className="channel">
								<img
									src={channel.urls.logo_image.original}
									alt="LOGO"
								/>
							</a>
						</Link>
					))}
					<style jsx global>{`
						.channels {
							display: grid;
							grid-gap: 15px;
							padding: 15px;
							grid-template-columns: repeat(
								auto-fill,
								minmax(160px, 1fr)
							);
						}

						.channel {
							display: block;
							border-radius: 3px;
							margin-bottom: 0.5em;
							color: #fff;
						}

						a.channel {
							display: block;
							margin-bottom: 0.5em;
							color: #333;
							text-decoration: none;
						}

						.channel img {
							border-radius: 3px;
							box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
							width: 100%;
						}
					`}</style>
				</div>
			</React.Fragment>
		);
	}
}
