import Link from "next/link";

class Header extends React.Component {
	render() {
		const { headName } = this.props;

		return (
			<div>
				<header>
					<Link href="/">
						<a>{headName}</a>
					</Link>
				</header>
				<style jsx>{`
                header{
                    color: #fff;
                    padding 15px;
                    background: #000103;
                    text-align: center;
				}
				header a { 
					color: #fff;
					text-decoration: none
				}
            `}</style>
			</div>
		);
	}
}
export default Header;
