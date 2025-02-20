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

};

export const ADMIN_ROUTES = {
  PARKING: "/parking",
  PARKING_OVERVIEW: "/parking-overview",
  PARKING_ANALYTICS: "/parking-analytics",
  AVG_PARKING: "/parking-analytics/avg-parking",
  PEAK_TRAFFIC: "/parking-analytics/peak-traffic",
  AVG_VEHICLE: "/parking-analytics/avg-vehicle",
  AVG_OCCUPANCY: "/parking-analytics/avg-occupancy",
  PARKING_SECTION: "/parking-section",
  ACCESS_RULE: "/access-rule",
  GUARANTED: "/access-rule/guaranted",
  MEMBERSHIP: "/access-rule-membership",
  BLOCKED: "/access-rule-blocked",
  FINANCE: "/finance",
  TEAM: "/team",
  SETTINGS: "/settings"
};

