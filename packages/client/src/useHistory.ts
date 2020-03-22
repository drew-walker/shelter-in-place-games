import { useEffect, useState } from "react";

export const useHistory = () => {
  const [currentLocation, setCurrentLocation] = useState(
    window.location.pathname
  );

  const handleClick = (event: MouseEvent) => {
    const clickedElement = event.target as HTMLAnchorElement;
    const nearestAnchor = clickedElement.closest("a");
    if (nearestAnchor) {
      setCurrentLocation(
        nearestAnchor.href.replace(window.location.origin, "")
      );
      window.history.pushState(null, document.title, nearestAnchor.href);
      event.preventDefault();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });

  return { currentLocation };
};
