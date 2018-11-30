import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import "./home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIdx: 1
    };

    this.showSlide = this.showSlide.bind(this);
    this.goPrev = this.goPrev.bind(this);
    this.goNext = this.goNext.bind(this);
  }

  showSlide(idx) {
    return () => {
      this.setState({ slideIdx: idx });
      // console.log(this.state.slideIdx);
      return null;
    };
  }

  goPrev() {
    this.setState(prev => {
      if (this.state.slideIdx > 0) {
        return { slideIdx: prev.slideIdx - 1 };
      } else {
        return { slideIdx: 4 };
      }
    });
  }

  goNext() {
    this.setState(prev => {
      if (this.state.slideIdx < 4) {
        return { slideIdx: prev.slideIdx + 1 };
      } else {
        return { slideIdx: 0 };
      }
    });
  }

  render() {
    const slides = this.props.products.map((d, idx) => {
      let slideClass = "slide fade";
      if (idx === this.state.slideIdx) {
        slideClass = "slide fade activeSlide";
      } else {
        slideClass = "slide fade";
      }
      return (
        <div
          className={slideClass}
          key={d.name}
          onClick={() => {
            this.props.history.push(`/products/${this.state.slideIdx}`);
          }}
        >
          <img
            src={d.imagelink}
            alt={d.name}
            style={{ height: "50vh", margin: "auto", display: "block" }}
          />
          <div className="text">{d.name}</div>
        </div>
      );
    });

    const dotClass = idx => {
      if (idx === this.state.slideIdx) {
        return "dot active";
      } else {
        return "dot";
      }
    };

    const carousel = (
      <div>
        <div className="carousel-container" style={{ height: "50vh" }}>
          {slides}

          <a className="prev" onClick={this.goNext}>
            &#10094;
          </a>
          <a className="next" onClick={this.goNext}>
            &#10095;
          </a>
        </div>

        <div style={{ textAlign: "center" }}>
          {[0, 1, 2, 3, 4].map(idx => (
            <span
              className={dotClass(idx)}
              onClick={this.showSlide(idx)}
              key={idx}
            />
          ))}
        </div>
      </div>
    );

    return (
      <section>
        {carousel}
        <div className="hero">
          <Link to="/products">Go To Shopping</Link>
        </div>
      </section>
    );
  }
}

const HomeWithRouter = withRouter(Home);

export default HomeWithRouter;
