import { useState, useCallback, JSX } from "react";

export function useLoadingSpinner() {
  const [isLoading, setIsLoading] = useState(false);

  const showLoader = useCallback(() => {
    setIsLoading(true);
  }, []);

  const hideLoader = useCallback(() => {
    setIsLoading(false);
  }, []);

  // Ensure that the type is JSX.Element or null
  const Loader: JSX.Element | null = isLoading ? <LoadingSpinner /> : null;

  return [Loader, showLoader, hideLoader] as const;
}

import React from "react";

export const LoadingSpinner: React.FC = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 z-50">
      <div className="loader"></div>
    </div>
  );
};
