import { useState } from 'react';
import { Text } from '@chakra-ui/react';
import { Button } from "@/components/ui/button";

const locations = ['公園', 'カフェ', '映画館', '美術館', 'レストラン'];
const activities = ['散歩', '読書', '食事', '観賞', '遊び'];

const Roulette = () => {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedActivity, setSelectedActivity] = useState('');
  const [isSpinning, setIsSpinning] = useState(false);

  const startRoulette = () => {
    setIsSpinning(true);
    setTimeout(() => {
      const randomLocation = locations[Math.floor(Math.random() * locations.length)];
      const randomActivity = activities[Math.floor(Math.random() * activities.length)];
      setSelectedLocation(randomLocation);
      setSelectedActivity(randomActivity);
      setIsSpinning(false);
    }, 200);
  };

  return (
    <div>
      <Button onClick={startRoulette} loading={isSpinning}>
        ルーレットを回す
      </Button>
      {selectedLocation && selectedActivity && (
        <Text mt={4}>
          行き先: {selectedLocation}、活動: {selectedActivity}
        </Text>
      )}
    </div>
  );
};

export default Roulette;