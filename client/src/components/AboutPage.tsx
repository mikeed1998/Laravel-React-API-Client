import { useState, useEffect } from 'react';
import { fetchApi } from '../services/api';

interface AboutData {
  message: string;
  data: string[];
}

export function AboutPage() {
  const [apiData, setApiData] = useState<AboutData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data:any = await fetchApi<AboutData>('/about');
        setApiData(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!apiData) return <div>No hay datos</div>;

  return (
    <div>
      <h2>{apiData.message}</h2>
      <ul>
        {apiData.data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}