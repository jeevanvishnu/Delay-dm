import React, { useState } from "react";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {BeatLoader} from "react-spinners"

const MessageForm = () => {
  const [message, setMessage] = useState<string>("");
  const [delay, setDelay] = useState<number>(0);
  const [isSending, setIsSending] = useState<boolean>(false);
  const [timmerId, setTimmerId] = useState<NodeJS.Timeout | null>(null);
  const [sentMessage, setSendMessage] = useState<string>("");
  const [receivedMessage , setReceivedMessage] = useState<boolean>(false)

  const handleSend = () => {
    setIsSending(true);
    

    const id = setTimeout(() => {
      setSendMessage(message);
      setMessage("");
      setIsSending(false);
      setReceivedMessage(true)
    }, delay * 1000);

    setTimmerId(id);
  };

  const handleCancel = () => {
    if (timmerId) clearTimeout(timmerId);
    setIsSending(false);
  };

  return (
    <div className=" mx-auto border bg-white space-y-4 rounded-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800">Dm Delay Button</h2>

      <Textarea
        placeholder="Type"
        onChange={(e) => setMessage(e.target.value)}
      />
      <Input
        placeholder="Delay in secound"
        onChange={(e) => setDelay(Number(e.target.value))}
        disabled={isSending}
      />

      {!isSending ? (
        <Button onClick={handleSend}>Send with delay</Button>
      ) : (
        <Button onClick={handleCancel} variant="destructive">
          Cancel Sending
        </Button>
      )}

      {isSending ? 
          <BeatLoader/> : null
      } 
     
      {
        receivedMessage ? 
      
        <div className="bg-green-200 border p-3 rounded-md text-green-800 ">
          <p className="font-bold">Message Send :</p>
          <p>{sentMessage}</p>
        </div> : null
}
    </div>
  );
};

export default MessageForm;
