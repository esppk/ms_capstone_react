import React, { Component } from "react";
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
      console.log(this.state.slideIdx);
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
    const carousel = (
      <div>
        <div className="carousel-container" style={{ height: "50vh" }}>
          {this.props.products.map((d, idx) => {
            let slideClass = "slide fade";
            if (idx === this.state.slideIdx) {
              slideClass = "slide fade activeSlide";
            } else {
              slideClass = "slide fade";
            }
            return (
              <div className={slideClass} key={d.name}>
                <img
                  src={d.imagelink}
                  alt={d.name}
                  style={{ height: "50vh", margin: "auto", display: "block" }}
                />
                <div className="text">{d.name}</div>
              </div>
            );
          })}

          <a className="prev" onClick={this.goNext}>
            &#10094;
          </a>
          <a className="next" onClick={this.goNext}>
            &#10095;
          </a>
        </div>

        <div style={{ textAlign: "center" }}>
          <span className="dot" onClick={this.showSlide(0)} />
          <span className="dot" onClick={this.showSlide(1)} />
          <span className="dot" onClick={this.showSlide(2)} />
          <span className="dot" onClick={this.showSlide(3)} />
          <span className="dot" onClick={this.showSlide(4)} />
        </div>
      </div>
    );

    return (
      <section>
        {carousel}
        <div>
          <button>Go To Shopping</button>
        </div>
      </section>
    );
  }
}

export default Home;
