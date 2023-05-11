export async function getRandomNumber() {
  // Fetch a random number between 0 and 100
  // (with a delay, so that we can see it)

  const currentYear = new Date().getFullYear();
  const minYear = 1990;
  const randomYear = Math.floor(Math.random() * (currentYear - minYear + 1)) + minYear;

  const res = await fetch(`https://ergast.com/api/f1/${randomYear}/constructorStandings.json`);

  if (res.ok) {
      return await res.json();
  } else {
      // Sometimes the API will fail!
      throw new Error('Request failed');
  }
}