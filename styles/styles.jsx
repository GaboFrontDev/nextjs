import React from "react";
const Styles = () => (
	<React.Fragment>
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
	</React.Fragment>
);
export default Styles;
