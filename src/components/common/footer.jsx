import React from "react";
import { Link } from "react-router-dom";

import "./styles/footer.css";

const Footer = () => {
	return (
		<React.Fragment>
			<div className="footer">
				<div className="footer-credits">
					<div className="footer-credits-text">
						Santiago Saavedra
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;