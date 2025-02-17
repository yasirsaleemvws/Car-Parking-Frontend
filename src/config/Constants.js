export const CONSTANTS = {

  USER_ROLE: {
    EVENT_ORGANIZER: "event_organizer",
    EVENT_SPONSOR: "event_sponsor",
  },

  BACKEND_URL_PUBLIC: `https://the-sponsor-backend.vercel.app/the-sponsor-apis/v1/`,

};

export const APP_ROUTES = {
  LOGIN: "/",
  SIGN_UP: "/sign-up",

};

export const ADMIN_ROUTES = {
  EVENT: "/admin/event",
  SPONSER: "/admin/sponser",
  SETTINGS: "/admin/settings",
  CREATE_EVENT: "/admin/create-event",
  VIEW_EVENT: "/admin/view/event/:id",
  EDIT_EVENT: "/admin/edit/event/:id",
  VIEW_SPONSER: "/admin/view-sponser/:id",
  DASHBOARED: "/admin/dashboard",
  ORGANIZER: "/admin/organizers",
};

