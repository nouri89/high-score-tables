import React, { useState } from "react";
import PlayerScore from "./PlayerScore";
import scores from "./scores";
import SortButton from "./SortButton";
function HighScoreTable(props) {
	const cont = scores;

	const allCountryScores = cont.sort((a, b) => a.name.localeCompare(b.name));
	const currentScoresOrder = allCountryScores.map(function (ele) {
		return ele.scores;
	});
	console.log(currentScoresOrder);
	const [scoresOrder1, setScoresOrder] = useState(currentScoresOrder);
	console.log(scoresOrder1);

	function changeSorting() {
		console.log("change sorting is called");
	}

	return (
		<div>
			<SortButton handel />
			{allCountryScores.map((country) => {
				return (
					<table>
						<tr>
							<th>HIGH SCORES : {country.name} </th>
						</tr>

						{country.scores
							.sort(function (a, b) {
								return b.s - a.s;
							})
							.map((player) => {
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
