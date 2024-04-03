import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import Card from "../common/card";
import "./styles/works.css";
import EXPERIENCE from "../../data/experience";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Experience"
				body={
					<div className="works-body">
						{EXPERIENCE.experiences.map((experience, index) => (
							<div className="work" key={index}>
								<div className="work-header">
									<img
										src={experience.logo}
										alt={experience.logoalt}
										className="work-image"
									/>
									<div className="work-header">
										<div className="work-title">
											{experience.title}
										</div>
										<div className="work-duration">
											{experience.duration}
										</div>
									</div>
								</div>
								<div className="work-duration-res">
									{experience.duration}
								</div>
								<div className="work-subtitle">
									{experience.subtitle}
								</div>
								<div className="work-description">
									{experience.description.includes("-") ? (
										<p>
											{
												experience.description.split(
													"-"
												)[0]
											}
										</p>
									) : (
										<p>{experience.description}</p>
									)}
									<ul>
										{experience.description.includes("-")
											? experience.description
													.split("-")
													.slice(1)
													.map((item, index) => (
														<li key={index}>
															{item}
														</li>
													))
											: null}
									</ul>
								</div>
							</div>
						))}
					</div>
				}
			/>
		</div>
	);
};

export default Works;
