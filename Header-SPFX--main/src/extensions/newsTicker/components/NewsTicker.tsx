/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import Ticker from "react-ticker";

import INewsTickerProps from "./INewsTickerProps";
import Constants from "../helpers/Constants";

const NewsTicker = (props: INewsTickerProps): JSX.Element => {
  const [isMove, setIsMove] = React.useState(true);



  const itemStyle: React.CSSProperties = {
    margin: "0 5px",
  };
  const newsContainer: React.CSSProperties = {
    backgroundColor: props.bgColor ? props.bgColor : "##ad65f763",
    color: props.textColor ? props.textColor : "white",
    margin:" 0px",
    padding: "3px 0",
    height:"26px",
    fontSize: "13px",
  
  };
  return (
    <div
      id={Constants.ROOT_ID}
      onMouseEnter={() => {
        setIsMove(false);
      }}
      onMouseLeave={() => {
        setIsMove(true);
      }}
      style={newsContainer}
    >
      <Ticker move={isMove} speed={5}>
        {( index:any ) => (
          <>
            {props.items &&
              props.items.map((news) => (
                <>
                  <span style={itemStyle}> | </span>
                  <span style={itemStyle}>
                     {news.content}
                  </span>
                </>
              ))}
          </>
        )}
      </Ticker>
    </div>
  );
};

export default NewsTicker;
