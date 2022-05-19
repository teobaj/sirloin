import { Card, CardContent, CardHeader } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { Line, LineChart, XAxis, YAxis } from "recharts";

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
