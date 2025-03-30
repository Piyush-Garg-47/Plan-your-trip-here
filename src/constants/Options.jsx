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
  


  export const AI_PROMPT ="Generate a Travel Plan for Location: {location}, for {totalDays} days for {traveler} people with a {budget} budget. Provide a list of hotel options with real hotel names, addresses, price ranges, hotel image URLs, geo-coordinates, ratings, and descriptions. Additionally, suggest a detailed itinerary including place names, place details, place image URLs, geo-coordinates, ticket pricing, travel time between locations, and the best time to visit for each day. The output should be in JSON format."