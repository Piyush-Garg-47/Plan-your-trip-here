import { GoogleGenerativeAI } from "@google/generative-ai";


  const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseModalities: [
    ],
    responseMimeType: "application/json",
  };
  

    export const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate Travel Plan for Location: Las Vegas, for 3 Days for Couple with a Cheap budget, Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time travel each of the location for 3 days with each day plan with best time to visit in JSON format."},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "I cannot directly access and display real-time information, including hotel images, prices, and availability, or real-time geo-coordinates.  Hotel prices and availability change constantly.  Also, I cannot access and display image URLs.  To get current pricing and imagery, you will need to use a hotel booking website (like Expedia, Booking.com, Kayak, etc.) and a map service (like Google Maps).\n\nHowever, I can provide you with a JSON template for a Las Vegas travel plan for a couple on a cheap budget, which you can then populate with information found on those websites.  Remember to check dates and prices on your chosen booking sites!\n\n\njson\n{\n  \"tripName\": \"Las Vegas Budget Trip for Couples\",\n  \"duration\": \"3 Days\",\n  \"budget\": \"Cheap\",\n  \"travelers\": 2,\n  \"hotels\": [\n    {\n      \"hotelName\": \"Name of Hotel 1\",\n      \"hotelAddress\": \"Address of Hotel 1\",\n      \"price\": \"Price Range (e.g., $50-$80 per night)\", \n      \"hotelImageUrl\": \"URL of Hotel Image (replace with actual URL)\",\n      \"geoCoordinates\": {\n        \"latitude\": 36.1234, \n        \"longitude\": -115.1234\n      },\n      \"rating\": 3.5, \n      \"description\": \"Brief description of hotel (e.g., 'Budget-friendly motel with pool, near the Strip.')\"\n    },\n    {\n      \"hotelName\": \"Name of Hotel 2\",\n      \"hotelAddress\": \"Address of Hotel 2\",\n      \"price\": \"Price Range (e.g., $60-$90 per night)\",\n      \"hotelImageUrl\": \"URL of Hotel Image (replace with actual URL)\",\n      \"geoCoordinates\": {\n        \"latitude\": 36.1234,\n        \"longitude\": -115.1234\n      },\n      \"rating\": 4.0,\n      \"description\": \"Brief description of hotel (e.g., 'Clean and basic hotel, free shuttle to the Strip.')\"\n    }\n    // Add more hotels here...\n  ],\n  \"itinerary\": {\n    \"day1\": [\n      {\n        \"placeName\": \"Fremont Street Experience\",\n        \"placeDetails\": \"Free walking area with light shows, street performers.\",\n        \"placeImageUrl\": \"URL of Fremont Street Image (replace with actual URL)\",\n        \"geoCoordinates\": {\n          \"latitude\": 36.1699,\n          \"longitude\": -115.1400\n        },\n        \"ticketPricing\": \"Free\",\n        \"rating\": 4.2,\n        \"timeToVisit\": \"Evening (7:00 PM - 10:00 PM)\"\n      },\n      {\n        \"placeName\": \"Container Park\",\n        \"placeDetails\": \"Shopping and dining in repurposed shipping containers.\",\n        \"placeImageUrl\": \"URL of Container Park Image (replace with actual URL)\",\n        \"geoCoordinates\": {\n          \"latitude\": 36.1700,\n          \"longitude\": -115.1364\n        },\n        \"ticketPricing\": \"Free entry, pay for purchases\",\n        \"rating\": 4.0,\n        \"timeToVisit\": \"Afternoon (2:00 PM - 5:00 PM)\"\n      }\n      // Add more places for Day 1\n    ],\n    \"day2\": [\n      {\n        \"placeName\": \"The Strip (walking)\",\n        \"placeDetails\": \"Walk the length of the Strip, admiring the hotels and atmosphere.\",\n        \"placeImageUrl\": \"URL of Strip Image (replace with actual URL)\",\n        \"geoCoordinates\": {\n          \"latitude\": 36.1146,\n          \"longitude\": -115.1728\n        },\n        \"ticketPricing\": \"Free\",\n        \"rating\": 4.5,\n        \"timeToVisit\": \"Morning/Afternoon (10:00 AM - 4:00 PM)\"\n      },\n      {\n        \"placeName\": \"Bellagio Fountains\",\n        \"placeDetails\": \"Free water show.\",\n        \"placeImageUrl\": \"URL of Bellagio Fountains Image (replace with actual URL)\",\n        \"geoCoordinates\": {\n          \"latitude\": 36.1146,\n          \"longitude\": -115.1728\n        },\n        \"ticketPricing\": \"Free\",\n        \"rating\": 4.8,\n        \"timeToVisit\": \"Evening (7:00 PM - 9:00 PM)\"\n      }\n      // Add more places for Day 2\n    ],\n    \"day3\": [\n      //Add Day 3 places. Consider a cheaper option like hiking in Red Rock Canyon (requires transport though)\n    ]\n  }\n}\n\n\n\nRemember to replace the placeholder values with actual data you find online.  Prioritize free activities to stick to a cheap budget!  You might also consider using public transportation (buses) instead of taxis or ride-sharing services to further reduce costs.\n"},
          ],
        },
      ],
    });
  
   