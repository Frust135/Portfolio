import React from "react";
import { Link } from "react-scroll";
import "./styles/navBar.css";

const NavBar = (props) => {
	return (
		<div className="nav-container">
			<nav className="navbar">
				<div className="nav-background">
					<ul className="nav-list">
						<li className="nav-item">
							<Link
								to="page-content"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
							>
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to="homepage-projects"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
							>
								Projects
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to="homepage-works"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
							>
								Experience
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to="homepage-publish"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
							>
								Publications
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
