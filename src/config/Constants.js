export const CONSTANTS = {

  USER_ROLE: {
    EVENT_ORGANIZER: "event_organizer",
    EVENT_SPONSOR: "event_sponsor",
  },

  BACKEND_URL_PUBLIC: `https://the-sponsor-backend.vercel.app/the-sponsor-apis/v1/`,

};


export const APP_ROUTES = {
  HOME: '/',
  LOGIN: "/login",
  SIGN_UP: "/sign-up",
  PARKING: "/parking",
  PARKING_OVERVIEW: "/parking-overview",
  PARKING_ANALYTICS: "/parking-analytics",
  AVG_PARKING: "/parking-analytics/avg-parking",
  PEAK_TRAFFIC: "/parking-analytics/peak-traffic",
  AVG_VEHICLE: "/parking-analytics/avg-vehicle",
  AVG_OCCUPANCY: "/parking-analytics/avg-occupancy",
  PARKING_SECTION: "/parking-section",
  PARKING_AREA: "/parking-section/parking-area",
  PARKING_CAMERA: "/parking-section/camera-view",
  PARKING_CAMERA_DETAILS: "/parking-section/camera/:id",
  ACCESS_RULE: "/access-rule",
  GUARANTED: "/access-rule/guaranted",
  MEMBERSHIP: "/access-rule-membership",
  BLOCKED: "/access-rule-blocked",
  FINANCE: "/finance",
  TEAM: "/team",
  SETTINGS: "/settings"
};

export const table_data = [
  { date: "November", membership: "Monthly", checkIn: "12:19 am", checkOut: "---" },
  { date: "March", membership: "Nil", checkIn: "12:19 am", checkOut: "02:19 pm" },
  { date: "December", membership: "Monthly", checkIn: "12:19 am", checkOut: "02:19 pm" },
  { date: "April", membership: "Nil", checkIn: "12:19 am", checkOut: "02:19 pm" },
  { date: "May", membership: "Weekly", checkIn: "12:19 am", checkOut: "02:19 pm" },
  { date: "June", membership: "Nil", checkIn: "12:19 am", checkOut: "02:19 pm" },
  { date: "January", membership: "Monthly", checkIn: "12:19 am", checkOut: "02:19 pm" },
  { date: "July", membership: "Nil", checkIn: "12:19 am", checkOut: "02:19 pm" },
  { date: "February", membership: "Monthly", checkIn: "12:19 am", checkOut: "02:19 pm" },
  { date: "August", membership: "Nil", checkIn: "12:19 am", checkOut: "02:19 pm" },
];

export const bar_chart_data = [
  { day: "0-1", value: Math.floor(Math.random() * 100) },
  { day: "1-2", value: Math.floor(Math.random() * 100) },
  { day: "2-3", value: Math.floor(Math.random() * 100) },
  { day: "3-4", value: Math.floor(Math.random() * 100) },
  { day: "4-5", value: Math.floor(Math.random() * 100) },
  { day: "5-6", value: Math.floor(Math.random() * 100) },
  { day: "6-7", value: Math.floor(Math.random() * 100) },
  { day: "8-9", value: Math.floor(Math.random() * 100) },
  { day: "10-11", value: Math.floor(Math.random() * 100) },
  { day: "12-13", value: Math.floor(Math.random() * 100) },
  { day: "14-15", value: Math.floor(Math.random() * 100) },
  { day: "16-17", value: Math.floor(Math.random() * 100) },
  { day: "18-19", value: Math.floor(Math.random() * 100) },
  { day: "20-21", value: Math.floor(Math.random() * 100) },
  { day: "22-23", value: Math.floor(Math.random() * 100) }
];

export const bar_chart_data2 = [
  { day: "S", value: Math.floor(Math.random() * 100) },
  { day: "M", value: Math.floor(Math.random() * 100) },
  { day: "T", value: Math.floor(Math.random() * 100) },
  { day: "W", value: Math.floor(Math.random() * 100) },
  { day: "T", value: Math.floor(Math.random() * 100) },
  { day: "F", value: Math.floor(Math.random() * 100) },
  { day: "S", value: Math.floor(Math.random() * 100) },
];

export const bar_chart_data3 = [
  { day: "Jan", value: Math.floor(Math.random() * 100) },
  { day: "Feb", value: Math.floor(Math.random() * 100) },
  { day: "Mar", value: Math.floor(Math.random() * 100) },
  { day: "Apr", value: Math.floor(Math.random() * 100) },
  { day: "May", value: Math.floor(Math.random() * 100) },
  { day: "Jun", value: Math.floor(Math.random() * 100) },
  { day: "Jul", value: Math.floor(Math.random() * 100) },
  { day: "Aug", value: Math.floor(Math.random() * 100) },
  { day: "Sep", value: Math.floor(Math.random() * 100) },
  { day: "Oct", value: Math.floor(Math.random() * 100) },
  { day: "Nov", value: Math.floor(Math.random() * 100) },
  { day: "Dec", value: Math.floor(Math.random() * 100) },
]

export const bar_chart_data4 = [
  { day: "0-1", value: Math.floor(Math.random() * 100), value2: Math.floor(Math.random() * 100) },
  { day: "1-2", value: Math.floor(Math.random() * 100), value2: Math.floor(Math.random() * 100) },
  { day: "2-3", value: Math.floor(Math.random() * 100), value2: Math.floor(Math.random() * 100) },
  { day: "3-4", value: Math.floor(Math.random() * 100), value2: Math.floor(Math.random() * 100) },
  { day: "4-5", value: Math.floor(Math.random() * 100), value2: Math.floor(Math.random() * 100) },
  { day: "5-6", value: Math.floor(Math.random() * 100), value2: Math.floor(Math.random() * 100) },
  { day: "6-7", value: Math.floor(Math.random() * 100), value2: Math.floor(Math.random() * 100) },
  { day: "8-9", value: Math.floor(Math.random() * 100), value2: Math.floor(Math.random() * 100) },
  { day: "10-11", value: Math.floor(Math.random() * 100), value2: Math.floor(Math.random() * 100) },
  { day: "12-13", value: Math.floor(Math.random() * 100), value2: Math.floor(Math.random() * 100) },
  { day: "14-15", value: Math.floor(Math.random() * 100), value2: Math.floor(Math.random() * 100) },
  { day: "16-17", value: Math.floor(Math.random() * 100), value2: Math.floor(Math.random() * 100) },
  { day: "18-19", value: Math.floor(Math.random() * 100), value2: Math.floor(Math.random() * 100) },
  { day: "20-21", value: Math.floor(Math.random() * 100), value2: Math.floor(Math.random() * 100) },
  { day: "22-23", value: Math.floor(Math.random() * 100), value2: Math.floor(Math.random() * 100) }
];

export const bar_chart_data5 = [
  { day: "1", value: Math.floor(Math.random() * 100) },
  { day: "2", value: Math.floor(Math.random() * 100) },
  { day: "3", value: Math.floor(Math.random() * 100) },
  { day: "4", value: Math.floor(Math.random() * 100) },
  { day: "5", value: Math.floor(Math.random() * 100) },
  { day: "6", value: Math.floor(Math.random() * 100) },
  { day: "7", value: Math.floor(Math.random() * 100) },
  { day: "8", value: Math.floor(Math.random() * 100) },
  { day: "9", value: Math.floor(Math.random() * 100) },
  { day: "10", value: Math.floor(Math.random() * 100) },
  { day: "11", value: Math.floor(Math.random() * 100) },
  { day: "12", value: Math.floor(Math.random() * 100) },
  { day: "13", value: Math.floor(Math.random() * 100) },
  { day: "14", value: Math.floor(Math.random() * 100) },
  { day: "15", value: Math.floor(Math.random() * 100) },
  { day: "16", value: Math.floor(Math.random() * 100) },
  { day: "17", value: Math.floor(Math.random() * 100) },
  { day: "18", value: Math.floor(Math.random() * 100) },
  { day: "19", value: Math.floor(Math.random() * 100) },
  { day: "21", value: Math.floor(Math.random() * 100) },
  { day: "22", value: Math.floor(Math.random() * 100) },
  { day: "23", value: Math.floor(Math.random() * 100) },
  { day: "24", value: Math.floor(Math.random() * 100) },
  { day: "25", value: Math.floor(Math.random() * 100) },
  { day: "26", value: Math.floor(Math.random() * 100) },
  { day: "27", value: Math.floor(Math.random() * 100) },
  { day: "28", value: Math.floor(Math.random() * 100) },
  { day: "29", value: Math.floor(Math.random() * 100) },
  { day: "30", value: Math.floor(Math.random() * 100) },
]

export const donut_chart_data = [
  { name: 'Group A', value: Math.floor(Math.random() * 100) },
  { name: 'Group B', value: Math.floor(Math.random() * 100) },
  { name: 'Group C', value: Math.floor(Math.random() * 100) },
];

export const pie_chart_data = [
  { name: "Filled Space", value: Math.floor(Math.random() * 100) },
  { name: "Available Space", value: Math.floor(Math.random() * 100) }
];

export const area_chart_data = [
  { day: "S", value: Math.floor(Math.random() * 100) },
  { day: "M", value: Math.floor(Math.random() * 100) },
  { day: "T", value: Math.floor(Math.random() * 100) },
  { day: "W", value: Math.floor(Math.random() * 100) },
  { day: "T", value: Math.floor(Math.random() * 100) },
  { day: "F", value: Math.floor(Math.random() * 100) },
  { day: "S", value: Math.floor(Math.random() * 100) },
];

export const parking_section_data = [
  { id: "1", title: "Ground Floor", available: 20, total: 40, occupied: 32, vacant: 10 },
  { id: "2", title: "Floor A", available: 22, total: 40, occupied: 32, vacant: 10 },
  { id: "3", title: "Floor B", available: 24, total: 40, occupied: 32, vacant: 10 },
  { id: "4", title: "Floor C", available: 26, total: 40, occupied: 32, vacant: 10 },
  { id: "5", title: "Floor D", available: 28, total: 40, occupied: 32, vacant: 10 },
  { id: "6", title: "Floor E", available: 30, total: 40, occupied: 32, vacant: 10 },
]

export const access_rules_card_data = [
  {
    id: 1,
    title: "Guaranteed Parkers",
    description: "People who always get a free space",
    icon: "/images/icons/guaranted.png",
    navigateTo: APP_ROUTES.GUARANTED,
  },
  {
    id: 2,
    title: "Membership Parkers",
    description: "People who always pay for space",
    icon: "/images/icons/membership.png",
    navigateTo: APP_ROUTES.MEMBERSHIP,
  },
  {
    id: 3,
    title: "Restricted Parkers",
    description: "People who are restricted from entry",
    icon: "/images/icons/blocked.png",
    navigateTo: APP_ROUTES.BLOCKED,
  },
];

