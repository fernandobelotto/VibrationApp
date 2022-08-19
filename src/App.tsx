import { Center, VStack } from "@chakra-ui/react";
import { useState } from "react";
import AppButton from "./components/Button";

export default function App() {
  const [vibrateIntervalRef, setVibrateIntervalRef] = useState<number>();

  function vibrate() {
      window.navigator.vibrate(1000)
  }
  function vibratePattern() {
      window.navigator.vibrate([100,200,100])
  }
  
  function startVibrate(duration: number) {
    navigator.vibrate(duration);
  }

  function startPersistentVibrate() {
    setVibrateIntervalRef(
      setInterval(() => {
        startVibrate(10000);
      }, 1000)
    );
  }

  function stopVibrate() {
    // Clear interval and stop persistent vibrating
    if (vibrateIntervalRef) clearInterval(vibrateIntervalRef);
    navigator.vibrate(0);
  }

  return (
    <Center h="100vh">
      <VStack>
        <AppButton onClick={vibrate}>Vibrate once!!</AppButton>
        <AppButton onClick={vibratePattern}>Vibrate pattern!</AppButton>
        <AppButton onClick={startPersistentVibrate}>Start Vibrating!</AppButton>
        <AppButton onClick={stopVibrate}>Stop Vibrating</AppButton>
      </VStack>
    </Center>
  );
}
