import React, { useEffect, useState } from "react";
import api from "../../../../api";

export default function Review({ type, id }) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getReview = async () => {
      try {
        const res = await api.getReview(type, id);
        if (res.data) {
          setData(res.data);
        }
        console.log(res);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    getReview();
  }, [id]);
  return <div></div>;
}
