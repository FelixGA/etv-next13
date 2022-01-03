import arrowDown from "../../public/images/Chevron_down.png";
import Image from "next/image";
import { useState } from "react";

function TruncateFilterDesktop() {
  const [truncPrice, setTruncPrice] = useState(false);
  const [truncDistance, setTruncDistance] = useState(false);
  const [truncLoad, setTruncLoad] = useState(false);
  const [truncSpeed, setTruncSpeed] = useState(false);
  const [truncMoreFilters, setTruncMoreFilters] = useState(false);
  return <div className="w-full border-2">content</div>;
}

export default TruncateFilterDesktop;
