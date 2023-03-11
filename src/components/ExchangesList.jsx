const names = [
  "Barkr",
  "Woofbase",
  "DoggieX",
  "Fido Trading",
  "Golden Paws",
  "Pawtrading",
  "Barking Exchange",
  "Hound Market",
  "Dogecoin Depot",
  "Poodle Trading",
  "Scooby Trading",
  "Petcoin Exchange",
  "PawsomeX",
  "Canine Market",
  "Pawcoin Depot",
  "Chewy Trading",
  "Whisker Exchange",
  "Meow Trading",
  "Purrfect Market",
  "Kittycoin Depot",
  "Ruffcoin Exchange",
  "Fetch Trading",
  "Tailwag Market",
  "Paws Trading",
];
const volumes = [
  1234567, 2345678, 3456789, 4567890, 5678901, 6789012, 7890123, 8901234,
  9012345, 1234567, 2345678, 3456789, 4567890, 5678901, 6789012, 7890123,
  8901234, 9012345, 1234567, 2345678, 3456789, 4567890, 5678901, 6789012,
];
const numberOfMarkets = [
  100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400,
  1500, 1600, 1700, 1800, 1900, 2000, 2100, 2200, 2300, 2400, 2500,
];
const marketShare = [
  10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170,
  180, 190, 200, 210, 220, 230, 240, 250,
];

const iconUrl = "https://example.com/exchange";
const description = "Description of ";

const exchangesList = [];

names.forEach((name, index) => {
  const exchange = {
    uuid: `${index + 1}`,
    rank: index + 1,
    iconUrl: `${iconUrl}${index + 1}.png`,
    name,
    volume: volumes[index],
    numberOfMarkets: numberOfMarkets[index],
    marketShare: marketShare[index],
    description: `<p>${description}${name}</p>`,
  };
  exchangesList.push(exchange);
});

export default exchangesList;
