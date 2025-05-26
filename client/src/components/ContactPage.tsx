import { useState, useEffect } from 'react';
import { fetchApi } from '../services/api';

interface ContactData {
  message: string;
}

export function ContactPage() {
  const [contactData, setContactData] = useState<ContactData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const response:any = await fetchApi<ContactData>('/contact');
        setContactData(response);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchContactData();
  }, []);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>{contactData?.message}</h2>
    </div>
  );
}