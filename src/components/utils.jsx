import PropTypes from 'prop-types';

function mapFeatData(data) {
  return data.map((element) => {
    const { id, slug, name, rating, background_image } = element;
    return { id, slug, name, rating, background_image };
  });
}

mapFeatData.propTypes = {
  data: PropTypes.array,
};

async function fetchData(url) {
  try {
    const response = await fetch(url, { mode: "cors" });
    if (!response.ok) {
      throw new Error(response.status);
    }
    const json = await response.json();
    return json;
  } catch (err) {
    console.error((err));
    return err;
  }
}

function priceGenerator(gameId, rating) {
  const base = ((gameId % 9) + 1.5);
  return base * rating;
}

function formatDollars(number) {
  let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  return USDollar.format(number);
}

function formatString(string) {
  const lower = string.toLowerCase();
  const arr = lower.split("");
  return arr.reduce((acc, value) => {
    if (
      value !== " " &&
      value !== "," &&
      value !== "'" &&
      value !== "/" &&
      value !== "?" &&
      value !== "&" &&
      value !== "#" &&
      value !== "." 
    ) {
      return acc + value;
    }
    return acc;
  }, "");
}

export { mapFeatData, fetchData, priceGenerator, formatDollars, formatString };

