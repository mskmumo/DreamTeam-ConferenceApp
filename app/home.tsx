import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable, Modal, ScrollView, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons'; // Import for the settings icon

type Event = {
    name: string;
    time: string;
    presenter: string;
    venue: string;
};

type DayEvents = {
    day: number;
    events: Event[];
};

const events: DayEvents[] = [
    { day: 1, events: [{ name: "AI Workshop", time: "10:00 AM", presenter: "Dr. John Doe", venue: "Room 101" }] },
    { day: 2, events: [{ name: "Blockchain Seminar", time: "2:00 PM", presenter: "Jane Smith", venue: "Main Hall" }] },
    { day: 3, events: [{ name: "Web Dev Bootcamp", time: "1:00 PM", presenter: "Alice Brown", venue: "Lab 3" }] },
    { day: 4, events: [
        { name: "Cybersecurity Basics", time: "11:00 AM", presenter: "Michael Chen", venue: "Room 202" },
        { name: "AI in Healthcare", time: "4:00 PM", presenter: "Samantha Blue", venue: "Room 203" }
    ] },
    { day: 5, events: [{ name: "Mobile App Dev", time: "3:00 PM", presenter: "Rachel Green", venue: "Room 105" }] },
];

// Array of image URLs for the carousel
const images = [
    { uri: 'https://events.enderuncolleges.com/wp-content/uploads/2019/03/image1-3.jpg' }, 
    { uri: 'https://www.joogleberry.com/wp-content/uploads/2022/03/e8f473_709c06c682754b7d85f4c8063de43769mv2_d_3000_2002_s_2.jpg' }, 
    { uri: 'https://www.timeshighereducation.com/sites/default/files/thelmas16.jpg' }
];

export default function Timetable() {
    const [selectedDayEvents, setSelectedDayEvents] = useState<Event[] | null>(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [settingsVisible, setSettingsVisible] = useState(false);
    
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openEventModal = (dayEvents: Event[]) => {
        setSelectedDayEvents(dayEvents);
        setModalVisible(true);
    };

    const closeEventModal = () => {
        setModalVisible(false);
        setSelectedDayEvents(null);
    };

    const toggleSettings = () => {
        setSettingsVisible(!settingsVisible);
    };

    // Carousel effect: Switch image every 5 seconds
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            {/* Hello message */}
            <Text style={styles.greeting}>Hello, John Doe</Text>

            {/* Settings Icon */}
            <View style={styles.settingsContainer}>
                <Pressable onPress={toggleSettings}>
                    <Ionicons name="settings-outline" size={28} color="black" />
                </Pressable>

                {/* Settings Options */}
                {settingsVisible && (
                    <View style={styles.settingsMenu}>
                        <Pressable onPress={() => alert('Account Settings')}>
                            <Text style={styles.settingsOption}>See Account</Text>
                        </Pressable>
                        <Pressable onPress={() => alert('Logging out...')}>
                            <Text style={styles.settingsOption}>Log Out</Text>
                        </Pressable>
                    </View>
                )}
            </View>

            {/* Image Carousel */}
            <View style={styles.carouselContainer}>
                <Image source={images[currentImageIndex]} style={styles.carouselImage} />
            </View>

            {/* See Events Text */}
            <Text style={styles.seeEventsText}></Text>

            {/* Scrollable events (horizontally) */}
            <ScrollView 
                contentContainerStyle={styles.horizontalScroll} 
                horizontal 
                showsHorizontalScrollIndicator={false}
            >
                {events.map((dayEvent) => (
                    <Pressable
                        key={dayEvent.day}
                        style={styles.dayCard}
                        onPress={() => openEventModal(dayEvent.events)}
                    >
                        <Text style={styles.dayText}>Day {dayEvent.day}</Text>
                        <Text style={styles.dayText}>{dayEvent.events[0].name}</Text>
                    </Pressable>
                ))}
            </ScrollView>

            {/* Modal for showing event details */}
            <Modal
                visible={modalVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={closeEventModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        {selectedDayEvents ? (
                            selectedDayEvents.map((event, index) => (
                                <View key={index} style={styles.eventDetailContainer}>
                                    <Text style={styles.eventTitle}>{event.name}</Text>
                                    <Text style={styles.eventDetail}>Time: {event.time}</Text>
                                    <Text style={styles.eventDetail}>Presenter: {event.presenter}</Text>
                                    <Text style={styles.eventDetail}>Venue: {event.venue}</Text>
                                </View>
                            ))
                        ) : (
                            <Text>No events available.</Text>
                        )}
                        <Pressable style={styles.closeButton} onPress={closeEventModal}>
                            <Text style={styles.closeButtonText}>Close</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#f8f9fa",
    },
    greeting: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 16,
    },
    settingsContainer: {
        position: "absolute",
        top: 40,
        right: 10,
    },
    settingsMenu: {
        position: "absolute",
        top: 30,
        right: 0,
        backgroundColor: "rgba(255, 255, 255, 0.8)", // Translucent background
        borderRadius: 8,
        padding: 10,
        width: 150, // Smaller card size
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
    },
    settingsOption: {
        paddingVertical: 8,
        fontSize: 16,
        textAlign: "center",
    },
    carouselContainer: {
        marginBottom: 20,
        height: 200, // Height for the image
        alignItems: 'center',
    },
    carouselImage: {
        top:'40%',
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    seeEventsText: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 10, // Margin for spacing above the events
    },
    horizontalScroll: {
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 20,
    },
    dayCard: {
        backgroundColor: "#007bff",
        padding: 16,
        marginHorizontal: 10,
        borderRadius: 10,
        width: 200, // Set fixed width for the cards
        alignItems: "center",
    },
    dayText: {
        color: "#ffffff",
        fontWeight: "bold",
        textAlign: "center",
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
        backgroundColor: "#ffffff",
        padding: 24,
        borderRadius: 10,
        alignItems: "center",
        width: "80%",
    },
    eventDetailContainer: {
        marginBottom: 16,
    },
    eventTitle: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 4,
    },
    eventDetail: {
        fontSize: 16,
        marginBottom: 4,
    },
    closeButton: {
        marginTop: 16,
        backgroundColor: "#007bff",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    closeButtonText: {
        color: "#ffffff",
        fontWeight: "bold",
    },
});
