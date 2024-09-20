"use client";

import React, { createContext, useContext, useReducer, Dispatch } from "react";

export type ImageObject = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
};

type CarouselState = {
  selectedImageId: string | null;
  images: ImageObject[];
};

type CarouselAction =
  | { type: "SET_SELECTED_IMAGE"; payload: string }
  | { type: "SET_IMAGES"; payload: ImageObject[] };

type CarouselContextType = {
  state: CarouselState;
  dispatch: Dispatch<CarouselAction>;
};

const CarouselContext = createContext<CarouselContextType | undefined>(
  undefined
);

const carouselReducer = (
  state: CarouselState,
  action: CarouselAction
): CarouselState => {
  switch (action.type) {
    case "SET_SELECTED_IMAGE":
      return { ...state, selectedImageId: action.payload };
    case "SET_IMAGES":
      return { ...state, images: action.payload };
    default:
      return state;
  }
};

export const CarouselProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(carouselReducer, {
    selectedImageId: null,
    images: [],
  });

  return (
    <CarouselContext.Provider value={{ state, dispatch }}>
      {children}
    </CarouselContext.Provider>
  );
};

export const useCarousel = () => {
  const context = useContext(CarouselContext);
  if (context === undefined) {
    throw new Error("useCarousel must be used within a CarouselProvider");
  }
  return context;
};
