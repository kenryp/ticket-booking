import React from 'react';
import { CreditCard } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const BookingSummary = ({ selectedTrain }) => (
  <Card className="mt-6">
    <CardHeader>
      <CardTitle>Booking Summary</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="space-y-2">
        <p><strong>From:</strong> {selectedTrain.departure}</p>
        <p><strong>To:</strong> {selectedTrain.arrival}</p>
        <p><strong>Departure:</strong> {selectedTrain.departureTime}</p>
        <p><strong>Arrival:</strong> {selectedTrain.arrivalTime}</p>
        <p><strong>Price:</strong> £{selectedTrain.price}</p>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center space-x-2">
          <CreditCard className="h-4 w-4" />
          <span>Proceed to Payment</span>
        </button>
      </div>
    </CardContent>
  </Card>
);

export default BookingSummary;
