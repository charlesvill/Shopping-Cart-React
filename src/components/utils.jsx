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
  const base = (gameId % 9) + 1; 

  return base * rating;
}

export { mapFeatData, fetchData, priceGenerator };

