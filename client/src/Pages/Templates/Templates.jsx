import { useEffect, useState } from "react";

const Templates = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const getTemplates = async () => {
      try {
        const res = await fetch("/api/templates");
        const result = await res.json();
        setData(result);
      } catch (error) {
        console.log(error);
      }
    };
    getTemplates();
  }, []);
  return (
    <div>
      <h1 className="heading">{data && <p> render templates </p>}</h1>
    </div>
  );
};

export default Templates;
