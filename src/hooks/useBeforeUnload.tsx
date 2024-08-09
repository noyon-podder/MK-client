import { useEffect } from "react";

const useBeforeReloadPage = (shouldPrompt: boolean) => {
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (shouldPrompt) {
        e.preventDefault();
        e.returnValue = ""; // Required for some browsers to show the confirmation dialog
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [shouldPrompt]);
};

export default useBeforeReloadPage;
