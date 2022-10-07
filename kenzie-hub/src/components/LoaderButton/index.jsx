import { LoaderButton } from "@sproutsocial/racine";
import { useState } from "react";

export const ButtonLoader = () => {
  const [loading, setLoading] = useState(false);

  return (
    <LoaderButton
      appearance="primary"
      isLoading={loading}
      onClick={() => {
        setLoading(!loading);
        window.setTimeout(() => setLoading(loading), 3000);
      }}
      loaderLabel="Loading..."
      margin="auto"
    >
      Click me to load!
    </LoaderButton>
  );
};
