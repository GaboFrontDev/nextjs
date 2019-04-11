export default class extends React.Component {
	render() {
		return (
			<div>
				<p>We learn</p>
				<div>
					<p> Next.JS</p>
				</div>
				<style jsx>{`
					p {
						color: #3c3c3c;
						font-family: "Helvetica";
						display: block;
						padding: 10px;
						font-weight: bold;
						font-size: 24px;
					}
					div {
						position: relative;
						margin: 0 25px;
						background-color: #f7df1e;
					}
					div :global(div) {
						backgound: none;
						text-align: right;
						top: 0px;
						margin: 100px 0 0 0;
					}
					div :global(div p) {
						color: black;
					}
				`}</style>
				<style jsx global>
					{`
						body {
							margin: 0;
							background: #354446;
							background-size: cover;
							background-repeat: no-repeat;
						}
					`}
				</style>
			</div>
		);
	}
}
