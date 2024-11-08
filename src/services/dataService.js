// src/services/dataService.js
"use strict";

export const loadInitialData = async (section) => {
  const savedData = sessionStorage.getItem(`${section}Data`);

  if (savedData) {
    return JSON.parse(savedData);
  } else {
    try {
      const response = await fetch(`/api/data?section=${section}`);
      if (!response.ok) throw new Error(`Failed to fetch ${section} data`);

      const data = await response.json();
      sessionStorage.setItem(`${section}Data`, JSON.stringify(data));

      return data;
    } catch (error) {
      console.error(`Error fetching ${section} data:`, error);
      return null;
    }
  }
};



// Load additional sections in the background
export const loadAdditionalData = async (sections) => {
  const fetchPromises = sections.map((section) => {
    if (!sessionStorage.getItem(`${section}Data`)) {
      return fetch(`/api/data?section=${section}`)
        .then((res) =>
          res.ok
            ? res.json()
            : Promise.reject(`Failed to fetch ${section} data`)
        )
        .then((data) =>
          sessionStorage.setItem(`${section}Data`, JSON.stringify(data))
        )
        .catch((error) =>
          console.error(`Error fetching ${section} data:`, error)
        );
    }
  });
  await Promise.allSettled(fetchPromises);
};
