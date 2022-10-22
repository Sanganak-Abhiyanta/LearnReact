import React from 'react'

export default function Like(props) {

    let classes="fa fa-heart";
    if(!props.liked)
    classes+="-o";
  return (<i onClick={props.onClick } className={classes} style={{cursor:"pointer"}} aria-hidden="true" ></i>);
}
