import React from "react";
import { useHistory } from "react-router-dom";

function get_my_coords(theta, radius) {
  return {
    x: Math.cos(theta) * radius,
    y: Math.sin(theta) * radius,
  };
}

export default function Card(props) {
  let new_coords = get_my_coords(props.theta, props.radius);

  const history = useHistory();
  function handleMouseClick(e) {
    history.push(`/projects/${props.id}`);
  }

  return (
    <div
      onClick={handleMouseClick}
      className="card"
      style={{
        left: `${props.center.x + new_coords.x}px`,
        top: `${props.center.y - new_coords.y}px`,
        zIndex: `${props.id}`,
        transformStyle: `preserve-3d`,
        transform: `translate(-50%, -50%) rotateX(${props.center.y}rad) rotateY(${props.theta}rad)`,
      }}
    >
      <img className="image" src={props.pic} alt="art work image" />
    </div>
  );
}
