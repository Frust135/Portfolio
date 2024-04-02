import React from "react";
import { Helmet } from "react-helmet";

import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import Article from "../components/homepage/article";
import Works from "../components/homepage/works";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import myArticles from "../data/articles";

import "./styles/homepage.css";

const Homepage = () => {
	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
			</Helmet>

			<div className="page-content" id="page-content">
				<NavBar />
				<div className="content-wrapper">
					<div className="homepage-logo-container"></div>

					<div className="homepage-container">
						<div
							className="homepage-first-area"
							id="homepage-first-area"
						>
							<div className="homepage-first-area-left-side">
								<div className="title homepage-title">
									{INFO.homepage.title}
								</div>

								<div className="subtitle homepage-subtitle">
									{INFO.homepage.description}
								</div>
							</div>

							<div className="homepage-first-area-right-side">
								<div className="homepage-image-container">
									<div className="homepage-image-wrapper">
										<img
											src="homepage.jpg"
											alt="about"
											className="homepage-image"
										/>
									</div>
								</div>
							</div>
						</div>

						<div className="homepage-socials">
							<a
								href={INFO.socials.github}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faGithub}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.linkedin}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faLinkedin}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={`mailto:${INFO.main.email}`}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faMailBulk}
									className="homepage-social-icon"
								/>
							</a>
						</div>
						<br></br>
						<div
							className="homepage-projects"
							id="homepage-projects"
						>
							<AllProjects />
						</div>
						<br></br>

						<div className="homepage-works" id="homepage-works">
							<Works />
						</div>
						<br></br>
						<div
							className="homepage-articles"
							id="homepage-publish"
						>
							{myArticles.map((article, index) => (
								<div
									className="homepage-article"
									key={(index + 1).toString()}
								>
									<Article
										key={(index + 1).toString()}
										date={article().date}
										title={article().title}
										description={article().description}
										link={article().link}
									/>
								</div>
							))}
						</div>
					</div>
					<div className="page-footer">
							<Footer />
						</div>
				</div>
				<br />
			</div>
		</React.Fragment>
	);
};

export default Homepage;
