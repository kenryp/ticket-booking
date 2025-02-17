import React, { useState } from 'react';
import SearchForm from '@/components/SearchForm';
import TrainList from '@/components/TrainList';
import BookingSummary from '@/components/BookingSummary';

const SAMPLE_TRAINS = [
  { id: 1, departure: "London Paddington", arrival: "Manchester Piccadilly", departureTime: "09:00", arrivalTime: "11:30", price: 45, seatsAvailable: 42 },
  { id: 2, departure: "London Paddington", arrival: "Manchester Piccadilly", departureTime: "10:30", arrivalTime: "13:00", price: 35, seatsAvailable: 28 }
];

const BookingApp = () => {
  const [searchResults, setSearchResults] = useState(null);
  const [selectedTrain, setSelectedTrain] = useState(null);

  const handleSearch = (searchParams) => {
    console.log('Search params:', searchParams);
    setSearchResults(SAMPLE_TRAINS);
  };

  const handleSelectTrain = (train) => {
    setSelectedTrain(train);
    console.log('Selected train:', train);
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Train Ticket Booking</h1>
      <SearchForm onSearch={handleSearch} />
      {searchResults && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Available Trains</h2>
          <TrainList trains={searchResults} onSelect={handleSelectTrain} />
        </div>
      )}
      {selectedTrain && <BookingSummary selectedTrain={selectedTrain} />}
    </div>
  );
};

export default BookingApp;
