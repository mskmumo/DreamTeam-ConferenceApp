import React, { useRef, useState, useEffect } from "react";
import { View, Image, StyleSheet, ScrollView, Dimensions } from "react-native";

const images = [
  require("../assets/images/image1.jpg"),
  require("../assets/images/img2.jpg"),
  require("../assets/images/img3.jpeg"),
];

export default function Carousel() {
  const scrollViewRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { width } = Dimensions.get("window"); // Get the screen width

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Automatically scroll every 4 seconds

    return () => clearInterval(interval); // Clear the interval when the component unmounts
  }, []);

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        x: currentIndex * width, // Scroll to the current index
        animated: true,
      });
    }
  }, [currentIndex, width]);

  return (
    <ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      style={styles.carousel}
      ref={scrollViewRef} // Attach the ref to the ScrollView
    >
      {images.map((image, index) => (
        <Image key={index} source={image} style={[styles.image, { width }]} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  carousel: {
    marginVertical: 20,
  },
  image: {
    height: 200,
    borderRadius: 10,
    marginHorizontal: 10,
  },
});
