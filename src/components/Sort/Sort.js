import { useContext, useState, useEffect} from 'react';
import $ from "jquery";

export default function Sort({cName}) {

	return (
		<div className={cName}>
			<div className=" all sort-option active-select" onClick={event => {
				$(".task").removeClass("hide");

				$(".sort-option").removeClass("active-select");
				$(".all").addClass("active-select");
			}}>All</div>
		
			<div className="current sort-option" onClick={event=> {
				$(".task").removeClass("hide");
				$(".completed").addClass("hide");
				
				$(".sort-option").removeClass("active-select");
				$(".current").addClass("active-select");
			}}>Active</div>
		
            <div className="done sort-option" onClick={event=> {
				$(".task").removeClass("hide");
				$(".active").addClass("hide");
				
				$(".sort-option").removeClass("active-select");
				$(".done").addClass("active-select");
			}}>Completed</div>
		</div>
	);
}