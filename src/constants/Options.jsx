export const SelectTravelesList =[
        {
          id: 1,
          title: "Just Me",
          desc: "A solo travel in exploration",
          icons: "✈️",
          people: "1"
        },
        {
          id: 2,
          title: "Couple Getaway",
          desc: "A romantic escape for two",
          icons: "❤️",
          people: "2 people"
        },
        {
          id: 3,
          title: "Family Vacation",
          desc: "A fun-filled adventure with family",
          icons: "👨‍👩‍👧‍👦",
          people: "3 to 5 people"
        },
        {
          id: 4,
          title: "Friends Trip",
          desc: "An exciting journey with friends",
          icons: "🎉",
          people: "5 to 8 people"
        }
]

export const SelectBudgetOptions =[
    {
      id: 1,
      title: "Cheap",
      desc: "Stay conscious of cost",
      icons: "💸"
    },
    {
      id: 2,
      title: "Moderate",
      desc: "Keep cost on the average side",
      icons: "💰"
    },
    {
      id: 3,
      title: "Luxury",
      desc: "Dont worry about cost",
      icons: "👑"
    }
  ]
  


  export const AI_PROMPT ="Generate Travel Plan for Location : {location}, for {totalDays} Days for {traveler} people with a {budget} budget, give me Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest , itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time travel each of the location for {totalDays} days with each day plan with best time to visit in JSON format."