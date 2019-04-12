import "isomorphic-fetch";
export default class extends React.Component {
	static async getInitialProps({ query }) {
		let channelId = query.id;
		let [reqChannel, reqAudio, reqSeries] = await Promise.all([
			fetch(`https://api.audioboom.com/channels/${channelId}`),
			fetch(`https://api.audioboom.com/channels/${channelId}/audio_clips`),
			fetch(`https://api.audioboom.com/channels/${channelId}/child_channels`)
		]);
		let {
			body: { channel }
		} = await reqChannel.json();
		let {
			body: { audio_clips }
		} = await reqAudio.json();

		let {
			body: { channels }
		} = await reqSeries.json();
		return { channel, audio_clips, channels };
	}

	render() {
		let { channel, audio_clips, channels } = this.props;
		let clipsContainer = <div>No se encontraron clips </div>;
		let channelsContainer = <div>No se encontraron series </div>;
		if (audio_clips.length > 0) {
			clipsContainer = this.getAudiosContent();
		}
		if (channels.length > 0) {
			channelsContainer = this.getSeriesContent();
		}

		return (
			<div>
				<header>PodCasts</header>
				<h1>{channel.title}</h1>
				<h2>Ultimos PodCasts</h2>
				{clipsContainer}
				<h2>Series</h2>
				{channelsContainer}

				<style jsx>{`
					header{
						color: #fff;
						padding 15px;
						background: #8576ca;
						text-align: center;
					}
					.audio_clips { 
						display: grid;
						grid-gap: 25px;
						padding: 15px;
						grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
					}

					.clip {
						display: block;
						border-radius: 3px;
						box-shadow: 0px 2px 6px rgba(0,0,0,0.15);
						margin-bottom: 0.5em;
					}

					.channel img{
						width: 100%;
					}

					h1 { 
						font-weight: 600;
						margin: 15px
					}

					h2 {
						padding: 5px;
						margin: 15px;
						font-size: 0.9em;
						text-align: center;
					}
					p {
						margin: 15px;
						font-size: 18px;
						text-align: left;
					}
					`}</style>
				<style jsx global>{`
					body {
						margin: 0;
						font-family: system-ui;
						background: #354446;
					}
				`}</style>
			</div>
		);
	}
	getSeriesContent() {
		return (
			<div className="channels">
				{this.props.channels.map(channel => (
					<div className="channel">
						<h5>{channel.title}</h5>
					</div>
				))}
			</div>
		);
	}

	getAudiosContent() {
		return (
			<div className="audio_clips">
				{this.props.audio_clips.map(clip => (
					<div className="clip">
						<h5>{clip.title}</h5>
					</div>
				))}
			</div>
		);
	}
}
