import React, { useState } from "react";
import PlayerScore from "./PlayerScore";
import scores from "./scores";
import SortButton from "./SortButton";
function HighScoreTable() {
	const [currentOrder, setCurrentOrder] = useState("ascending");
	let arrayOrder = [];
	const cont = scores;

	const allCountryScores = cont.sort((a, b) => a.name.localeCompare(b.name));
	function changeOrder(chosenOrder) {
		setCurrentOrder(chosenOrder);
	}

	function applySorting(array) {
	
		if (currentOrder === "ascending") {
		
			const newArray = array.sort(function (a, b) {
				return b.s - a.s;
			});
			return newArray;
		} else {
			const newArray = array.sort(function (a, b) {
			return a.s - b.s;
		});
		return newArray;
	
			
		}

	}
	


	return (
		<div>
			<SortButton scoreOrder={currentOrder} alterOrder={changeOrder}/>
			{allCountryScores.map((country) => {
				arrayOrder = applySorting(country.scores);
		
				return (
					<table>
						<tr>
							<th>HIGH SCORES : {country.name} </th>
						</tr>

						{arrayOrder.map((player) => {
							return (
								<td>
									<PlayerScore pName={player.n} pScore={player.s} />
								</td>
							);
						})}
					</table>
				);
			})}
		</div>
	);
}

export default HighScoreTable;
