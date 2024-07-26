import { FC, useState } from "react";
import styles from "./index.module.css";
import { PIPButton } from "@getpip/react-pip-button";


export const PIPButtonCustom: FC = ({ }) => {

  const [isClicked, setIsClicked] = useState(false);
  const [tipAmount, setTipAmount] = useState('1');
  const [currency, setCurrency] = useState('SOL');
  const [message, setMessage] = useState('');

  const handleChange = (e: any) => {
    setCurrency(e.target.value)
  }

  return (



    <div>

    </div>
  );
};
