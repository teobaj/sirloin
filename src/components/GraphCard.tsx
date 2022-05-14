import { Card, CardContent, CardHeader } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { Line, LineChart, XAxis, YAxis } from "recharts";

const data = [
  {
    name: "volume",
    volume: 90,
    date: "24/10/2020",
    day: '24'
  },
  {
    name: "volume",
    volume: 80,
    date: "25/10/2020",
    day: '25'
  },
  {
    name: "volume",
    volume: 20,
    date: "26/10/2020",
    day: '26'
  },
  {
    name: "volume",
    volume: 90,
    date: "27/10/2020",
    day: 27
  },
];
export type GraphCardProps = {
  title: string,
  data: any[],
  yDataKey: string,
  xDataKey: string
}

export const GraphCard = ({title, data, yDataKey, xDataKey}: GraphCardProps) => {
  const cardRef = useRef(null)
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const { width } = cardRef.current.getBoundingClientRect();
    setWidth(width - 50);
  }, [])
  
  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <Card>
      <CardHeader title={title}>
      </CardHeader>
      <CardContent style={{padding: "0.5rem"}} ref={cardRef}>
        <LineChart data={data} height={200} width={width}>
          <Line type="monotone" dataKey={yDataKey} stroke="#000" />
          <XAxis dataKey={xDataKey} />
          <YAxis />
        </LineChart>
      </CardContent>
    </Card>
  );
};
