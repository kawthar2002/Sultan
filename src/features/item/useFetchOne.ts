import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchOne, Good } from '../../lib';

export const useGood = () => {
  const [good, setGood] = useState<Good | undefined>();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    fetchOne(Number(id), setGood);
  }, []);

  return good;
};
