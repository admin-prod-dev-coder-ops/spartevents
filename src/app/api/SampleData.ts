import { Timestamp } from "firebase/firestore";

export const sampleData = [
    {   
        id: "1",
        title: "Trip to Empire State Building - 100",
        date: Timestamp.fromDate(new Date(Date.now() + 30 * 86400000)),
        category: "culture",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus solasdas",
        city: "NY, USA",
        venue : "Empire state building",
        hostedBy : "Bob",
        attendees: [
            {
                id : "a",
                name: "Bob",
                photoURL: "https://randomuser.me/api/portraits/men/8.jpg"
            },
            {
                id : "b",
                name: "Tom",
                photoURL: "https://randomuser.me/api/portraits/men/21.jpg"
            }
        ]
        
    },
    {
        id: "2",
        title: "Trip to Empire State Building - 200",
        date: Timestamp.fromDate(new Date(Date.now() + 60 * 86400000)),
        category: "culture",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus solasdas",
        city: "NY, USA",
        venue : "Empire state building",
        hostedBy : "Bob",
        attendees: [
            {
                id : "a",
                name: "Bob",
                photoURL: "https://randomuser.me/api/portraits/men/8.jpg"
            },
            {
                id : "b",
                name: "Tom",
                photoURL: "https://randomuser.me/api/portraits/men/21.jpg"
            }
        ]        
    }
]