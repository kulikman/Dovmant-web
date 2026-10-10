/** Abstract schematic parts (a diagram, NOT a depiction of the device). */
export type PartId = "controller" | "sensors" | "actuator" | "fit" | "app";

export const parts: { id: PartId; label: string; description: string }[] = [
  {
    id: "controller",
    label: "Controller",
    description:
      "[TBD] Onboard compute running the motion model. Describe processor, latency and safety supervision once confirmed.",
  },
  {
    id: "sensors",
    label: "Sensors",
    description:
      "[TBD] Inertial and load sensing along the leg. List sensor types and sampling rates once confirmed.",
  },
  {
    id: "actuator",
    label: "Knee actuator",
    description:
      "[TBD] Actuation at the knee joint. Add torque, speed and range of motion once confirmed.",
  },
  {
    id: "fit",
    label: "Fit & straps",
    description:
      "[TBD] Adjustable fit for different users. Add size range and donning time once confirmed.",
  },
  {
    id: "app",
    label: "App & data",
    description:
      "[TBD] Clinician and coach dashboard with session data. Add data handling and privacy details once confirmed.",
  },
];
