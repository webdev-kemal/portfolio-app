import { useState } from "react";
import db from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * This is a custom hook that can be used to submit a form and simulate an API call
 * It uses Math.random() to simulate a random success or failure, with 50% chance of each
 */
const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (url, data) => {
    // const random = Math.random();

    setLoading(true);

    try {
      // await wait(2000);
      // if (random < 0.5) {
      //   throw new Error("Something went wrong");
      // }
      const docRef = await addDoc(collection(db, "submissions"), data);
      setResponse({
        type: "success",
        message: `E-postanızı tarafıma ulaştı ${data.name}, geri dönüş yapacağım.`,
      });
    } catch (error) {
      setResponse({
        type: "error",
        message: `Hata: ${error}`,
      });
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, submit };
};

export default useSubmit;
