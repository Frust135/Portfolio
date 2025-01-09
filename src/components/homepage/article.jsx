import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./styles/article.css";

const Article = (props) => {
    const { title, description, date, link } = props;

    return (
        <div className="homepage-article">
            <div className="homepage-article-content">
                <div className="homepage-article-date">
                    {date}
                </div>
                <div className="homepage-article-title">{title}</div>
                <div className="homepage-article-description">
                    {description}
                </div>
                <div className="homepage-article-link">
                    <a href={`https://ieeexplore.ieee.org/document/10814833`} target="_blank" rel="noopener noreferrer" style={{ marginRight: "40px" }}>
                        IEEE Explorer{" "}
                        <FontAwesomeIcon
                            style={{ fontSize: "10px" }}
                            icon={faChevronRight}
                        />
                    </a>
                    <a href={`/articles/${link}.pdf`} target="_blank" rel="noopener noreferrer">
                        Read article{" "}
                        <FontAwesomeIcon
                            style={{ fontSize: "10px" }}
                            icon={faChevronRight}
                        />
                    </a>
                </div>                
            </div>
        </div>
    );
};

export default Article;
