import React from "react";
type Props = {
  onNextClick: Function;
  onPrevClick: Function;
  pageNumber: number;
};
function NavigateButton(props: Props) {
  const pageNumber = props.pageNumber;
  const onNextClick = props.onNextClick;
  const onPrevClick = props.onPrevClick;
  return (
    <div className="container-fluid bg-black p-3 my-2 opacity-90">
      <div className="d-flex justify-content-center">
        <button
          className="btn btn-danger"
          onClick={() => {
            onPrevClick()
            window.scrollTo(0, 0);
          }}
        >
          <i className="fa-solid fa-arrow-left-long"></i>
        </button>
        <p className="white fs-4 mx-5">{pageNumber}</p>
        <button
          className="btn btn-danger"
          onClick={() => {
            onNextClick()
            window.scrollTo(0, 0);
          }}
        >
          <i className="fa-solid fa-arrow-right-long"></i>
        </button>
      </div>{" "}
    </div>
  );
}

export default NavigateButton;
