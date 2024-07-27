import * as React from 'react';
import "./Schemecard.css";
import Container from 'react-bootstrap/Container';

export default function SelectDropdown(props) {
  const { data } = props;

  return (
    <Container>
      <article className="postcard light green">
        <a className="postcard__img_link" href={data.Links} target="_blank" rel="noopener noreferrer">
          <img className="postcard__img" src={data.Image || "https://picsum.photos/500/501"} alt={data.Scheme_Name || "Image Title"} />
        </a>
        <div className="postcard__text t-dark">
          <h1 className="postcard__title green">
            <a href={data.Links} target="_blank" rel="noopener noreferrer">{data.Scheme_Name}</a>
          </h1>
          <div className="postcard__subtitle small">
            {/* Optional Date/Time or other subtitle info */}
          </div>
          <div className="postcard__bar"></div>
          <div className="postcard__preview-txt">{data.Description}</div>
          <ul className="postcard__tagbox">
            <li className="tag__item play green">
              <a href={data.Links} target="_blank" rel="noopener noreferrer">Check Website</a>
            </li>
          </ul>
        </div>
      </article>
    </Container>
  );
}
