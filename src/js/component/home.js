import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div className="container bg-dark mt-5 p-3" style={{ width: "230px" }}>
			<>
				<div className="circle shadow mb-2"></div>
				<div
					className="circle mb-2"
					style={{ background: "yellow" }}></div>
				<div className="circle" style={{ background: "green" }}></div>
			</>
		</div>
	);
}
