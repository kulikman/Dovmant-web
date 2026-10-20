/**
 * The specification is not published. At this stage the parameters are the
 * company's own ground, and a public table hands a competitor a map. The page
 * says what the document covers and who can have it — which keeps the grant
 * path open, since a quotation and a specification are issued to a named
 * institution rather than to the internet.
 */
export const specifications = {
  title: "SPECIFICATION ON {REQUEST}",
  lead: "The full technical specification, a formal quotation and the paperwork a grants office needs are issued to a named institution. They are not published here.",

  why: {
    heading: "WHY IT IS NOT {PUBLISHED}",
    text: "The instrument is at an early stage and its parameters are the part of the work that took the longest. We share them with laboratories that are considering an evaluation, and with the people who have to put a figure in a budget — directly, in writing, and in a form you can attach to an application. We do not leave them on an open page.",
  },

  covers: {
    heading: "WHAT THE DOCUMENT {COVERS}",
    note: "Every heading below is answered with measured values in the document itself.",
    items: [
      {
        title: "Mechanical",
        text: "Mass and its distribution, actuated joints and degrees of freedom, range of motion, adjustment range, and the participant limits the device is built around.",
      },
      {
        title: "Actuation",
        text: "Peak and continuous torque per joint, angular velocity, torque resolution and measurement accuracy, and the residual torque in transparent mode.",
      },
      {
        title: "Sensing",
        text: "Sensor types and locations, sampling rate per channel, resolution and measurement range.",
      },
      {
        title: "Control",
        text: "Loop rate, sensor-to-actuation latency, the profile format, and the interface a researcher writes against.",
      },
      {
        title: "Data and synchronisation",
        text: "Logged channels with units and rates, export formats, the hardware trigger and connector, timestamp accuracy and clock drift.",
      },
      {
        title: "Power",
        text: "Battery capacity, runtime and the load profile behind it, charge time, and the operating temperature range.",
      },
      {
        title: "Commercial terms",
        text: "Price, academic pricing, lead time from purchase order, warranty, service, installation and training, spares and shipping — written so they can go straight into a grant budget.",
      },
      {
        title: "For an ethics submission",
        text: "Device description and intended use, torque and range limits and how they are enforced, safety behaviour, operator training outline and the incident reporting route.",
      },
    ],
  },

  how: {
    heading: "HOW TO {GET IT}",
    steps: [
      {
        title: "Tell us who you are",
        note: "Institution, the investigator who would hold the protocol, and what you would use the instrument for.",
      },
      {
        title: "We send the document",
        note: "The specification and, where you need one, a formal quotation naming your institution. A confidentiality agreement where your institution requires it.",
      },
      {
        title: "We answer the follow-up",
        note: "An engineer, not a sales channel. Including the questions that decide whether it integrates with your setup.",
      },
    ],
  },

  grants: {
    heading: "FOR {GRANT} APPLICATIONS",
    text: "Applying for instrumentation funding? We provide a formal quotation, a letter of support, and a technical justification section you can adapt for your application. Tell us your submission deadline and we will work to it.",
    note: "A letter of support here is a supplier statement on availability, price and lead time. It is not a scientific endorsement and makes no claim about outcomes.",
  },
};
