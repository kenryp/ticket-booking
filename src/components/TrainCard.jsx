import React from 'react';
import { Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const TrainCard = ({ train, onSelect }) => (
  <Card className="hover:shadow-lg transition-shadow">
    <CardContent className="p-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-gray-500" />
            <span className="font-semibold">{train.departureTime}</span>
            <span className="text-gray-500">→</span>
            <span className="font-semibold">{train.arrivalTime}</span>
          </div>
          <div className="mt-2 text-sm text-gray-600">
            {train.departure} → {train.arrival}
          </div>
        </div>
        <div className="mt-4 md:mt-0 flex items-center space-x-4">
          <div className="text-right">
            <div className="font-semibold text-lg">£{train.price}</div>
            <div className="text-sm text-gray-600">{train.seatsAvailable} seats left</div>
          </div>
          <button onClick={() => onSelect(train)} className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
            Select
          </button>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default TrainCard;
