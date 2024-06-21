import { useState, useEffect } from "react";
import Layout from "../../Componentes/Layout";
import Card from "../../Componentes/Card";

function Home() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <Layout>
      Home
      <div className="grid grid-cols-4 gap-4 w-full max-w-screen-lg">
        {items?.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </Layout>
  );
}

export default Home;
