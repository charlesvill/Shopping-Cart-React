import PropTypes from 'prop-types';

function mapFeatData (data) {
  return data.map((element) => {
    const { id, slug, name, rating, background_image} = element;
    return { id, slug, name, rating, background_image};
  });
}

mapFeatData.propTypes = {
  data : PropTypes.array,
};

export { mapFeatData }; 

