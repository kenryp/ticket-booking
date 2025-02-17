import React from 'react';
import TrainCard from './TrainCard';

const TrainList = ({ trains, onSelect }) => (
  <div className="space-y-4">
    {trains.map(train => <TrainCard key={train.id} train={train} onSelect={onSelect} />)}
  </div>
);

export default TrainList;
