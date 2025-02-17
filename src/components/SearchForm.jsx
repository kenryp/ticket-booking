import React, { useState } from 'react';
import { Search, Calendar, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const STATIONS = ["London Paddington", "Manchester Piccadilly", "Birmingham New Street", "Edinburgh Waverley", "Liverpool Lime Street"];

const SearchForm = ({ onSearch }) => {
  const [formState, setFormState] = useState({ from: '', to: '', date: '', passengers: 1 });

  const handleChange = (e) => setFormState({ ...formState, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); onSearch(formState); };

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Search Train Tickets</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {['from', 'to', 'date', 'passengers'].map((field, index) => (
            <div key={index} className="flex-1">
              <label className="block text-sm font-medium mb-1">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
              <div className="relative">
                {field === 'date' ? <Calendar className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" /> : 
                field === 'passengers' ? <Users className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" /> : 
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />}
                {field === 'date' || field === 'passengers' ? (
                  <input type={field === 'date' ? 'date' : 'number'} 
                         name={field} value={formState[field]} 
                         onChange={handleChange} 
                         className="w-full pl-8 pr-4 py-2 border rounded-md" 
                         min="1" max="8" required />
                ) : (
                  <select name={field} value={formState[field]} onChange={handleChange} 
                          className="w-full pl-8 pr-4 py-2 border rounded-md" required>
                    <option value="">Select {field}</option>
                    {STATIONS.map(station => <option key={station} value={station}>{station}</option>)}
                  </select>
                )}
              </div>
            </div>
          ))}
          <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
            Search Trains
          </button>
        </form>
      </CardContent>
    </Card>
  );
};

export default SearchForm;
