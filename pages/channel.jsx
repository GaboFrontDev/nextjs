import ChannelGrid from "../components/ChannelGrid";
import PodcastGrid from "../components/PodcastGrid";
import Layout from "../components/Layout";

export default class extends React.Component {
	static async getInitialProps({ query }) {
		let idChannel = query.id;

		let [reqChannel, reqSeries, reqAudios] = await Promise.all([
			fetch(`https://api.audioboom.com/channels/${idChannel}`),
			fetch(
				`https://api.audioboom.com/channels/${idChannel}/child_channels`
			),
			fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`)
		]);

		let dataChannel = await reqChannel.json();
		let channel = dataChannel.body.channel;

		let dataAudios = await reqAudios.json();
		let audioClips = dataAudios.body.audio_clips;

		let dataSeries = await reqSeries.json();
		let series = dataSeries.body.channels;

		return { channel, audioClips, series };
	}

	render() {
		const { channel, audioClips, series } = this.props;

		return (
			<Layout title={channel.title} headName="Back to home">
				<div
					className="banner"
					style={{
						backgroundImage: `url(${
							channel.urls.banner_image.original
						})`
					}}
				/>
				<div className="contain">
					<div>
						{series.length > 0 && (
							<ChannelGrid channels={series}>
								<h2>Series</h2>
							</ChannelGrid>
						)}
					</div>

					<div>
						{audioClips.length > 0 && (
							<PodcastGrid audio_clips={audioClips}>
								<h2>Ultimos Podcasts</h2>
							</PodcastGrid>
						)}
					</div>
				</div>
				<style jsx>{`
					.banner {
						width: 100%;
						padding-bottom: 25%;
						background-position: 50% 50%;
						background-size: cover;
						background-color: #aaa;
					}

					h1 {
						font-weight: 600;
						padding: 15px;
					}
					h2 {
						padding: 5px;
						font-size: 1.2em;
						text-align: center;
						margin: 0;
					}
					.contain {
						display: grid;
						grid-gap: 15px;
						padding: 15px;
						grid-template-areas: "header header header" "sidebar main main";
					}
				`}</style>
			</Layout>
		);
	}
}
