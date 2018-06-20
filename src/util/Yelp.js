const apiKey = 'iaV7Gnm1J4cqY5QOLLfGWNVE8jsr3wBQyF80wr5CA8v2mUETF3c4H46Jbn5a-ahNP0LEFeFgJPie5odnwH-gBhm28hz1ILchCN4ktxm5UuXfvHKFrCptQ2lbTVoqW3Yx';
const Yelp = {
  search(term, location, sortBy){
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,{
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if(jsonResponse.businesses){
      return jsonResponse.businesses.map(business =>({
        id: business.id,
        imageSrc: business.image_url,
        name: business.name,
        address: business.location.address1,
        city: business.location.city,
        state: business.location.state,
        zipCode: business.location.zip_code,
        category: business.categories.title,
        rating: business.rating,
        reviewCount:business.review_count
      }));
      }
    });
  }
};

export default Yelp;
