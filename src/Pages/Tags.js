import React from 'react';
import Select from 'react-select';
// import { Tags } from '../../server/tags';

const TagList = ({ selectedTags, setSelectedTags }) => {
  const handleTagChange = (selectedOptions) => {
    setSelectedTags(selectedOptions.map((option) => option.value));
  };

 const Tags=[
    {
        "value": "2 Adjacent Rooms",
        "label": "2 Adjacent Rooms"
    },
    {
        "value": "2 rooms",
        "label": "2 rooms"
    },
    {
        "value": "3 rooms",
        "label": "3 rooms"
    },
    {
        "value": "Aldwych Double Twin Room",
        "label": "Aldwych Double Twin Room"
    },
    {
        "value": "Business trip",
        "label": "Business trip"
    },
    {
        "value": "Champagne Shopping package Double Room",
        "label": "Champagne Shopping package Double Room"
    },
    {
        "value": "City King Room",
        "label": "City King Room"
    },
    {
        "value": "City Twin Room",
        "label": "City Twin Room"
    },
    {
        "value": "Classic Double Room",
        "label": "Classic Double Room"
    },
    {
        "value": "Classic Double or Twin Room",
        "label": "Classic Double or Twin Room"
    },
    {
        "value": "Classic Double or Twin Room with Pool Access",
        "label": "Classic Double or Twin Room with Pool Access"
    },
    {
        "value": "Classic Room",
        "label": "Classic Room"
    },
    {
        "value": "Classic Single Room",
        "label": "Classic Single Room"
    },
    {
        "value": "Classic Single Room with Spa Access",
        "label": "Classic Single Room with Spa Access"
    },
    {
        "value": "Classic Triple Room",
        "label": "Classic Triple Room"
    },
    {
        "value": "Classic Twin Room",
        "label": "Classic Twin Room"
    },
    {
        "value": "Classique Double Room",
        "label": "Classique Double Room"
    },
    {
        "value": "Club Double Room",
        "label": "Club Double Room"
    },
    {
        "value": "Club Double or Twin Room",
        "label": "Club Double or Twin Room"
    },
    {
        "value": "Club King Room with Lounge Access",
        "label": "Club King Room with Lounge Access"
    },
    {
        "value": "Club Twin Room",
        "label": "Club Twin Room"
    },
    {
        "value": "Comfort Double Room",
        "label": "Comfort Double Room"
    },
    {
        "value": "Comfort Room",
        "label": "Comfort Room"
    },
    {
        "value": "Comfort Triple Room",
        "label": "Comfort Triple Room"
    },
    {
        "value": "Compact Double Room",
        "label": "Compact Double Room"
    },
    {
        "value": "Couple",
        "label": "Couple"
    },
    {
        "value": "Deluxe Double Room",
        "label": "Deluxe Double Room"
    },
    {
        "value": "Deluxe Double Room with Balcony",
        "label": "Deluxe Double Room with Balcony"
    },
    {
        "value": "Deluxe Double Room with Club Lounge Access",
        "label": "Deluxe Double Room with Club Lounge Access"
    },
    {
        "value": "Deluxe Double Room with Private Access to Pool and Spa",
        "label": "Deluxe Double Room with Private Access to Pool and Spa"
    },
    {
        "value": "Deluxe Double or Twin Room",
        "label": "Deluxe Double or Twin Room"
    },
    {
        "value": "Deluxe Double with Winter Garden View",
        "label": "Deluxe Double with Winter Garden View"
    },
    {
        "value": "Deluxe Junior Suite",
        "label": "Deluxe Junior Suite"
    },
    {
        "value": "Deluxe King Room",
        "label": "Deluxe King Room"
    },
    {
        "value": "Deluxe King Room with Canary Wharf View",
        "label": "Deluxe King Room with Canary Wharf View"
    },
    {
        "value": "Deluxe King Room with Club Lounge Access",
        "label": "Deluxe King Room with Club Lounge Access"
    },
    {
        "value": "Deluxe King Room with Club Lounge Access and Balcony",
        "label": "Deluxe King Room with Club Lounge Access and Balcony"
    },
    {
        "value": "Deluxe King Room with River View",
        "label": "Deluxe King Room with River View"
    },
    {
        "value": "Deluxe Room",
        "label": "Deluxe Room"
    },
    {
        "value": "Deluxe Room With Pool Access",
        "label": "Deluxe Room With Pool Access"
    },
    {
        "value": "Deluxe Room with Club Lounge access",
        "label": "Deluxe Room with Club Lounge access"
    },
    {
        "value": "Deluxe Single Room",
        "label": "Deluxe Single Room"
    },
    {
        "value": "Deluxe Studio",
        "label": "Deluxe Studio"
    },
    {
        "value": "Deluxe Suite",
        "label": "Deluxe Suite"
    },
    {
        "value": "Deluxe Triple Room",
        "label": "Deluxe Triple Room"
    },
    {
        "value": "Deluxe Twin Room",
        "label": "Deluxe Twin Room"
    },
    {
        "value": "Double Room",
        "label": "Double Room"
    },
    {
        "value": "Double Room 3 Adults",
        "label": "Double Room 3 Adults"
    },
    {
        "value": "Double Room Non Smoking",
        "label": "Double Room Non Smoking"
    },
    {
        "value": "Double Room with Club Lounge Access",
        "label": "Double Room with Club Lounge Access"
    },
    {
        "value": "Double Room with Courtyard View",
        "label": "Double Room with Courtyard View"
    },
    {
        "value": "Double Room with Four Poster Bed",
        "label": "Double Room with Four Poster Bed"
    },
    {
        "value": "Double Room with Sofa Bed Non Smoking",
        "label": "Double Room with Sofa Bed Non Smoking"
    },
    {
        "value": "Double Room with Two Double Beds",
        "label": "Double Room with Two Double Beds"
    },
    {
        "value": "Duplex Double Room",
        "label": "Duplex Double Room"
    },
    {
        "value": "Duplex King Suite",
        "label": "Duplex King Suite"
    },
    {
        "value": "Duplex King Suite 2 Adults 2 Children",
        "label": "Duplex King Suite 2 Adults 2 Children"
    },
    {
        "value": "Duplex Twin Room",
        "label": "Duplex Twin Room"
    },
    {
        "value": "Eiffel Suite with partial view",
        "label": "Eiffel Suite with partial view"
    },
    {
        "value": "Executive Double Room",
        "label": "Executive Double Room"
    },
    {
        "value": "Executive Double Room Top Floor",
        "label": "Executive Double Room Top Floor"
    },
    {
        "value": "Executive King Room",
        "label": "Executive King Room"
    },
    {
        "value": "Executive Premium Room with a Queen Bed",
        "label": "Executive Premium Room with a Queen Bed"
    },
    {
        "value": "Executive Queen Room",
        "label": "Executive Queen Room"
    },
    {
        "value": "Executive Room",
        "label": "Executive Room"
    },
    {
        "value": "Executive Room Non Smoking",
        "label": "Executive Room Non Smoking"
    },
    {
        "value": "Executive Room with Queen Bed",
        "label": "Executive Room with Queen Bed"
    },
    {
        "value": "Executive Studio City View",
        "label": "Executive Studio City View"
    },
    {
        "value": "Executive Studio City View Family",
        "label": "Executive Studio City View Family"
    },
    {
        "value": "Executive Studio with London Eye View",
        "label": "Executive Studio with London Eye View"
    },
    {
        "value": "Executive Suite",
        "label": "Executive Suite"
    },
    {
        "value": "Family Room",
        "label": "Family Room"
    },
    {
        "value": "Family Room 2 Adults 1 Child",
        "label": "Family Room 2 Adults 1 Child"
    },
    {
        "value": "Family Room Two Connecting Rooms VIP Welcome for Kids",
        "label": "Family Room Two Connecting Rooms VIP Welcome for Kids"
    },
    {
        "value": "Family Room Two connecting Rooms",
        "label": "Family Room Two connecting Rooms"
    },
    {
        "value": "Family Room Two connecting Rooms 3 Adults",
        "label": "Family Room Two connecting Rooms 3 Adults"
    },
    {
        "value": "Family with older children",
        "label": "Family with older children"
    },
    {
        "value": "Family with young children",
        "label": "Family with young children"
    },
    {
        "value": "Group",
        "label": "Group"
    },
    {
        "value": "Interconnecting Rooms",
        "label": "Interconnecting Rooms"
    },
    {
        "value": "Junior Suite",
        "label": "Junior Suite"
    },
    {
        "value": "Junior Suite 2 Adults",
        "label": "Junior Suite 2 Adults"
    },
    {
        "value": "Junior Suite 2 Adults 1 Child",
        "label": "Junior Suite 2 Adults 1 Child"
    },
    {
        "value": "Junior Suite 3 Adults",
        "label": "Junior Suite 3 Adults"
    },
    {
        "value": "Junior Suite Attic",
        "label": "Junior Suite Attic"
    },
    {
        "value": "Junior Suite Premium with Spa Access",
        "label": "Junior Suite Premium with Spa Access"
    },
    {
        "value": "Junior Suite with Pool Access",
        "label": "Junior Suite with Pool Access"
    },
    {
        "value": "Junior Suite with Private Access to Pool and Spa",
        "label": "Junior Suite with Private Access to Pool and Spa"
    },
    {
        "value": "Junior Suite with Spa Access",
        "label": "Junior Suite with Spa Access"
    },
    {
        "value": "King Double or Twin Room",
        "label": "King Double or Twin Room"
    },
    {
        "value": "King Room",
        "label": "King Room"
    },
    {
        "value": "King Room with Eiffel Tower View",
        "label": "King Room with Eiffel Tower View"
    },
    {
        "value": "Knightsbridge Suite",
        "label": "Knightsbridge Suite"
    },
    {
        "value": "Kube Double or Twin Room",
        "label": "Kube Double or Twin Room"
    },
    {
        "value": "Large King Room",
        "label": "Large King Room"
    },
    {
        "value": "Leisure trip",
        "label": "Leisure trip"
    },
    {
        "value": "Loft",
        "label": "Loft"
    },
    {
        "value": "Loft Suite",
        "label": "Loft Suite"
    },
    {
        "value": "Luxury Double Room",
        "label": "Luxury Double Room"
    },
    {
        "value": "Luxury Junior Suite",
        "label": "Luxury Junior Suite"
    },
    {
        "value": "Luxury Room",
        "label": "Luxury Room"
    },
    {
        "value": "Luxury Room Club Sofitel with Spa Access",
        "label": "Luxury Room Club Sofitel with Spa Access"
    },
    {
        "value": "Luxury Room with Spa Access",
        "label": "Luxury Room with Spa Access"
    },
    {
        "value": "Luxury Suite",
        "label": "Luxury Suite"
    },
    {
        "value": "Master Suite",
        "label": "Master Suite"
    },
    {
        "value": "Nadler Deluxe Double Room",
        "label": "Nadler Deluxe Double Room"
    },
    {
        "value": "One Bedroom Suite",
        "label": "One Bedroom Suite"
    },
    {
        "value": "Penthouse",
        "label": "Penthouse"
    },
    {
        "value": "Penthouse Suite",
        "label": "Penthouse Suite"
    },
    {
        "value": "Penthouse Suite Family",
        "label": "Penthouse Suite Family"
    },
    {
        "value": "Plaza Club Room",
        "label": "Plaza Club Room"
    },
    {
        "value": "Premier Double or Twin Room",
        "label": "Premier Double or Twin Room"
    },
    {
        "value": "Premium Double Room",
        "label": "Premium Double Room"
    },
    {
        "value": "Premium Double or Twin Room",
        "label": "Premium Double or Twin Room"
    },
    {
        "value": "Prestige Double Room With View",
        "label": "Prestige Double Room With View"
    },
    {
        "value": "Prestige Double or Twin Room",
        "label": "Prestige Double or Twin Room"
    },
    {
        "value": "Privilege Room With View",
        "label": "Privilege Room With View"
    },
    {
        "value": "Privilege Room with 1 Double Bed",
        "label": "Privilege Room with 1 Double Bed"
    },
    {
        "value": "Quadruple Room",
        "label": "Quadruple Room"
    },
    {
        "value": "Quadruple Suite",
        "label": "Quadruple Suite"
    },
    {
        "value": "Queen Room",
        "label": "Queen Room"
    },
    {
        "value": "Single Room",
        "label": "Single Room"
    },
    {
        "value": "Single Room with Arc de Triomphe View",
        "label": "Single Room with Arc de Triomphe View"
    },
    {
        "value": "Single Room with Double Bed",
        "label": "Single Room with Double Bed"
    },
    {
        "value": "Small Double Room",
        "label": "Small Double Room"
    },
    {
        "value": "Solo traveler",
        "label": "Solo traveler"
    },
    {
        "value": "Standard Double Room",
        "label": "Standard Double Room"
    },
    {
        "value": "Standard Double or Twin Room",
        "label": "Standard Double or Twin Room"
    },
    {
        "value": "Standard Family Suite with Two Connecting Rooms",
        "label": "Standard Family Suite with Two Connecting Rooms"
    },
    {
        "value": "Standard Room",
        "label": "Standard Room"
    },
    {
        "value": "Standard Room with Queen Bed and Sofa",
        "label": "Standard Room with Queen Bed and Sofa"
    },
    {
        "value": "Standard Single Room",
        "label": "Standard Single Room"
    },
    {
        "value": "Standard Twin Room with Arc de Triomphe View",
        "label": "Standard Twin Room with Arc de Triomphe View"
    },
    {
        "value": "Stayed 1 night",
        "label": "Stayed 1 night"
    },
    {
        "value": "Stayed 10 nights",
        "label": "Stayed 10 nights"
    },
    {
        "value": "Stayed 11 nights",
        "label": "Stayed 11 nights"
    },
    {
        "value": "Stayed 12 nights",
        "label": "Stayed 12 nights"
    },
    {
        "value": "Stayed 13 nights",
        "label": "Stayed 13 nights"
    },
    {
        "value": "Stayed 14 nights",
        "label": "Stayed 14 nights"
    },
    {
        "value": "Stayed 16 nights",
        "label": "Stayed 16 nights"
    },
    {
        "value": "Stayed 17 nights",
        "label": "Stayed 17 nights"
    },
    {
        "value": "Stayed 2 nights",
        "label": "Stayed 2 nights"
    },
    {
        "value": "Stayed 23 nights",
        "label": "Stayed 23 nights"
    },
    {
        "value": "Stayed 3 nights",
        "label": "Stayed 3 nights"
    },
    {
        "value": "Stayed 4 nights",
        "label": "Stayed 4 nights"
    },
    {
        "value": "Stayed 5 nights",
        "label": "Stayed 5 nights"
    },
    {
        "value": "Stayed 6 nights",
        "label": "Stayed 6 nights"
    },
    {
        "value": "Stayed 7 nights",
        "label": "Stayed 7 nights"
    },
    {
        "value": "Stayed 8 nights",
        "label": "Stayed 8 nights"
    },
    {
        "value": "Stayed 9 nights",
        "label": "Stayed 9 nights"
    },
    {
        "value": "Studio Double Family",
        "label": "Studio Double Family"
    },
    {
        "value": "Studio Double Room",
        "label": "Studio Double Room"
    },
    {
        "value": "Studio Suite",
        "label": "Studio Suite"
    },
    {
        "value": "Submitted from a mobile device",
        "label": "Submitted from a mobile device"
    },
    {
        "value": "Suite",
        "label": "Suite"
    },
    {
        "value": "Suite Juliana",
        "label": "Suite Juliana"
    },
    {
        "value": "Suite with Eiffel Tower View VIP welcome",
        "label": "Suite with Eiffel Tower View VIP welcome"
    },
    {
        "value": "Suite with Terrace",
        "label": "Suite with Terrace"
    },
    {
        "value": "Suite with View",
        "label": "Suite with View"
    },
    {
        "value": "Superior Double Room",
        "label": "Superior Double Room"
    },
    {
        "value": "Superior Double Room with Balcony",
        "label": "Superior Double Room with Balcony"
    },
    {
        "value": "Superior Double Room with London Eye View",
        "label": "Superior Double Room with London Eye View"
    },
    {
        "value": "Superior Double Room with Spa Access",
        "label": "Superior Double Room with Spa Access"
    },
    {
        "value": "Superior Double Room with Two Double Beds",
        "label": "Superior Double Room with Two Double Beds"
    },
    {
        "value": "Superior Double or Twin Room",
        "label": "Superior Double or Twin Room"
    },
    {
        "value": "Superior King Room",
        "label": "Superior King Room"
    },
    {
        "value": "Superior King Room with Balcony",
        "label": "Superior King Room with Balcony"
    },
    {
        "value": "Superior King or Twin Room",
        "label": "Superior King or Twin Room"
    },
    {
        "value": "Superior Premium Room with Queen Bed Sofa",
        "label": "Superior Premium Room with Queen Bed Sofa"
    },
    {
        "value": "Superior Queen Room",
        "label": "Superior Queen Room"
    },
    {
        "value": "Superior Room",
        "label": "Superior Room"
    },
    {
        "value": "Superior Room with 1 Double Bed and 1 Single Bed",
        "label": "Superior Room with 1 Double Bed and 1 Single Bed"
    },
    {
        "value": "Superior Room with 2 Double Beds",
        "label": "Superior Room with 2 Double Beds"
    },
    {
        "value": "Superior Room with 2 Single Beds",
        "label": "Superior Room with 2 Single Beds"
    },
    {
        "value": "Superior Room with Queen Bed",
        "label": "Superior Room with Queen Bed"
    },
    {
        "value": "Superior Room with Queen Bed Sofa",
        "label": "Superior Room with Queen Bed Sofa"
    },
    {
        "value": "Superior Room with Queen Bed and Sofa",
        "label": "Superior Room with Queen Bed and Sofa"
    },
    {
        "value": "Superior Suite 2 Adults 2 Children",
        "label": "Superior Suite 2 Adults 2 Children"
    },
    {
        "value": "Superior Suite 3 Adults 1 Child",
        "label": "Superior Suite 3 Adults 1 Child"
    },
    {
        "value": "Superior Suite with 1 Double Bed and 1 Single Bed",
        "label": "Superior Suite with 1 Double Bed and 1 Single Bed"
    },
    {
        "value": "Superior Triple Room",
        "label": "Superior Triple Room"
    },
    {
        "value": "Superior Triple Room with 1 Double Bed 1 Single Bed",
        "label": "Superior Triple Room with 1 Double Bed 1 Single Bed"
    },
    {
        "value": "Superior Triple Room with 3 Single Beds",
        "label": "Superior Triple Room with 3 Single Beds"
    },
    {
        "value": "Superior Twin Room",
        "label": "Superior Twin Room"
    },
    {
        "value": "Travelers with friends",
        "label": "Travelers with friends"
    },
    {
        "value": "Treat your Partner Package Double Room",
        "label": "Treat your Partner Package Double Room"
    },
    {
        "value": "Triple Room",
        "label": "Triple Room"
    },
    {
        "value": "Twin Room",
        "label": "Twin Room"
    },
    {
        "value": "Two Adjacent Classic Rooms",
        "label": "Two Adjacent Classic Rooms"
    },
    {
        "value": "Two Adjoining Superior Suite",
        "label": "Two Adjoining Superior Suite"
    },
    {
        "value": "Two Bedroom Suite with Private Access to Pool and Spa",
        "label": "Two Bedroom Suite with Private Access to Pool and Spa"
    },
    {
        "value": "Two Connecting Double Rooms with Pool Access",
        "label": "Two Connecting Double Rooms with Pool Access"
    },
    {
        "value": "Two Connecting Rooms",
        "label": "Two Connecting Rooms"
    },
    {
        "value": "With a pet",
        "label": "With a pet"
    }
]




//   const tags = [
//     { value: 'Luxury', label: 'Luxury' },
//     { value: 'Budget', label: 'Budget' },
//     { value: 'Family-Friendly', label: 'Family-Friendly' },
//     { value: 'Pet-Friendly', label: 'Pet-Friendly' },
//     { value: '2 Adjacent Rooms', label: '2 Adjacent Rooms' },
//     { value: '2 rooms', label: '2 rooms' },
//     { value: 'Business trip', label: 'Business trip' },
//     { value: 'Beachfront', label: 'Beachfront' },
//     { value: 'Beachfront', label: 'Beachfront' },
//     { value: 'Beachfront', label: 'Beachfront' },
//     { value: 'Beachfront', label: 'Beachfront' },
//     { value: 'Beachfront', label: 'Beachfront' },
//     { value: 'Beachfront', label: 'Beachfront' },
//     { value: 'Beachfront', label: 'Beachfront' },
//     { value: 'Beachfront', label: 'Beachfront' },
//     { value: 'City Center', label: 'City Center' }
//   ];

  return (
    <div className="mb-4">
      <p className="mb-2">Select Tags:</p>
      <Select
        isMulti
        options={Tags}
        value={selectedTags.map((tag) => ({ value: tag, label: tag }))}
        onChange={handleTagChange}
      />
    </div>
  );
};

export default TagList;
