<script>
	import { getRandomNumber } from '../utils/utils';

	let promise = getRandomNumber();

	function handleClick() {
		promise = getRandomNumber();
	}
</script>

<button on:click={handleClick}>
	Get F1 Constructor Data
</button>

{#await promise}
	<p>...waiting</p>
{:then res}

  <h3>Standings for the Year: {res.MRData.StandingsTable.season}</h3>

  <ol>
  {#each res.MRData.StandingsTable.StandingsLists[0].ConstructorStandings as cons (cons.Constructor.constructorId)}
    <li>Name - {cons.Constructor.name} Points - {cons.points} Wins - {cons.wins}</li>
  {/each}
  </ol>

{:catch error}
	<p style="color: red">{error.message}</p>
{/await}