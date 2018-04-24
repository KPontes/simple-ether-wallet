import React from "react";

class ControlledCarousel extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      slide: 1
    };
  }

  render() {
    let partialSlide;
    switch (this.state.slide) {
      case 1:
        partialSlide = this.getSlide(1);
        break;
      case 2:
        partialSlide = this.getSlide(2);
        break;
      case 3:
        partialSlide = this.getSlide(3);
        break;
    }
    console.log("props: ", this.props);

    return (
      <div>
        <div className="carrousel-div">
          <div className="row wrapper">
            <div className="col-md-11">
              <label> {partialSlide} </label>
            </div>
            <div className="col-md-1">
              <button
                className="btn btn-primary cursor-pointer"
                onClick={event => this.handleClick()}
              >
                <span style={{ fontSize: "24px" }}>></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  handleClick(e) {
    switch (this.state.slide) {
      case 1:
        this.setState({ slide: 2 });
        break;
      case 2:
        this.setState({ slide: 3 });
        break;
      case 3:
        this.setState({ slide: 1 });
        break;
    }
  }

  getSlide(slide) {
    console.log("slide", slide);
    var result = "";
    switch (slide) {
      case 1: {
        console.log("Entrei 1");
        result = <div id="first">{this.props.slides[0]}</div>;
        break;
      }

      case 2: {
        console.log("Entrei 2");
        result = <div id="second">{this.props.slides[1]}</div>;
        break;
      }

      case 3: {
        console.log("Entrei 3");
        result = <div id="third">{this.props.slides[2]}</div>;
        break;
      }
    }
    console.log("result", result);
    return result;
  }
}

export default ControlledCarousel;
