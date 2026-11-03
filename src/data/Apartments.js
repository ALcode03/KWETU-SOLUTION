// Pricing rules:
// dailyPrice is a number and longStay is true  -> owner offers daily AND long stay
// dailyPrice is a number and longStay is false -> daily only
// dailyPrice is null and longStay is true      -> long stay only

const apartments = [
    {
  id: 1,
  location: "Himbi, Goma",
  propertyType: "Studio",
  dailyPrice: 35,
  longStay: false,
  availabilityStatus: "taken",
  isFavorite: false,
  photo: "/images/himbi-studio.jpg"
},
   {
    id: 2,
    location: "Le volcan, Goma",
    propertyType: "Two Bedroom Apartment",
    dailyPrice: null,
    longStay: true,
    availabilityStatus: "available",
    isFavorite: true,
    photo: "/images/levolcan-apartment.jpg"
},

   {
  id: 3,
  location: "Kyeshero, Goma",
  propertyType: "One Room Apartment",
  dailyPrice: null,
  longStay: true,
  availabilityStatus: "available",
  isFavorite: false,
  photo: "/images/kyeshero-apartment.jpg"
}, 

 {
  id: 4,
  location: "Kituku, Goma",
  propertyType: "Two Bedroom Apartment",
  dailyPrice: 45,
  longStay: true,
  availabilityStatus: "available",
  isFavorite: false,
  photo: "/images/kituku-apartment.jpg"
},

 {
  id: 5,
  location: "Katoyi, Karisimbi",
  propertyType: "Family House",
  dailyPrice: null,
  longStay: true,
  availabilityStatus: "available",
  isFavorite: true,
  photo: "/images/katoyi-house.jpg"
},

 {
  id: 6,
  location: "Virunga, Karisimbi",
  propertyType: "One Room Apartment",
  dailyPrice: 35,
  longStay: true,
  availabilityStatus: "taken",
  isFavorite: false,
  photo: "/images/virunga-apartment.jpg"
},

 {
  id: 7,
  location: "Ville, Goma",
  propertyType: "Two Bedroom Apartment",
  dailyPrice: 45,
  longStay: true,
  availabilityStatus: "available",
  isFavorite: true,
  photo: "/images/ville-apartment.jpg"
},

];

export default apartments;