/* ============================================================
   Google Forms configuration — see README.md, section
   "Connect the RSVP form", for step-by-step instructions.
   Until formId is filled in, the page shows "RSVP opening soon"
   and no data is sent anywhere.
   ============================================================ */

const RSVP_CONFIG = {
  // The long ID from your Google Form URL:
  // https://docs.google.com/forms/d/e/<THIS PART>/viewform
  formId: "1FAIpQLSeHvtNtNQPXjrjfY2GLb9C5jsXATOr3EHuRFFRmS2rxcTzClg",

  // The entry IDs of each question. Find them via
  // "Get pre-filled link" in Google Forms (see README.md).
  fields: {
    name: "entry.1991119917",      // entry.XXXXXXXXX  — "Your name"
    attending: "entry.1571034821", // entry.XXXXXXXXX  — "Will you join us on Christmas Eve?"
    guests: "entry.898360570",    // entry.XXXXXXXXX  — "Number of guests (including you)"
    dietary: "entry.925413514",   // entry.XXXXXXXXX  — "Dietary restrictions or allergies"
    message: "entry.785255346",   // entry.XXXXXXXXX  — "Message or Christmas song request"
  },
};
