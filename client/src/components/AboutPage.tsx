import { useState, useEffect } from 'react';
// import { fetchApi } from '../services/api';

interface AboutData {
  message: string;
  data: string[];
}

export function AboutPage() {
  const [apiData, setApiData] = useState<AboutData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await fetch('https://michcvdev.com/api_sistemas/api/v1/about', {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error(`Error HTTP! estado: ${response.status}`);
        }

        const data = await response.json();
        setApiData(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchAboutData();
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