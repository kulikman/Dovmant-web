/** Abstract schematic of the system's parts (a diagram, not a depiction of the device). */
export type PartId = "control" | "sensors" | "knee" | "hip" | "battery" | "fit" | "sync";

export const parts: { id: PartId; label: string; description: string; planned?: boolean }[] = [
  {
    id: "control",
    label: "Control unit",
    description:
      "Runs the torque profile on a real-time loop and records what it commanded. Loop rate and latency are in the specification.",
  },
  {
    id: "sensors",
    label: "Sensor array",
    description:
      "Reads joint state and interaction forces along the leg. Sensor types, axes and rates are in the specification.",
  },
  {
    id: "hip",
    label: "Hip actuator",
    description:
      "Actuation at the hip. Commanded and measured torque are both logged, and the gap between them is itself a measurement.",
  },
  {
    id: "knee",
    label: "Knee module",
    planned: true,
    description:
      "In development. The device shipping today actuates the hip only; the knee module is not part of it. Figures follow once there is hardware to measure.",
  },
  {
    id: "battery",
    label: "Battery",
    description: "Carried on the belt. Capacity, runtime and charge time are in the specification.",
  },
  {
    id: "fit",
    label: "Structure and fit",
    description:
      "Belt and thigh cuffs adjust to the participant. The fitting range is in the specification.",
  },
  {
    id: "sync",
    label: "Sync port",
    description:
      "Hardware trigger for alignment with capture systems. Connector and timing accuracy are in the specification.",
  },
];
