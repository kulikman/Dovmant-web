/** Abstract schematic of the system's parts (a diagram, not a depiction of the device). */
export type PartId = "control" | "sensors" | "knee" | "hip" | "battery" | "fit" | "sync";

export const parts: { id: PartId; label: string; description: string }[] = [
  {
    id: "control",
    label: "Control unit",
    description: "Real-time loop at [TBD] Hz. Profiles loaded over [TBD].",
  },
  {
    id: "sensors",
    label: "Sensor array",
    description: "[TBD] — sensor types, axes and sampling rate.",
  },
  {
    id: "hip",
    label: "Hip actuator",
    description:
      "[TBD] N·m peak, [TBD] N·m continuous. Commanded and measured torque are both logged.",
  },
  {
    id: "knee",
    label: "Knee actuator",
    description: "[TBD] N·m peak, [TBD] N·m continuous.",
  },
  {
    id: "battery",
    label: "Battery",
    description: "[TBD] Wh, [TBD] h runtime, hot-swappable [TBD].",
  },
  {
    id: "fit",
    label: "Structure and fit",
    description: "Adjustable over [TBD] segment lengths. Donning time [TBD].",
  },
  {
    id: "sync",
    label: "Sync port",
    description: "[TBD] — trigger type and connector.",
  },
];
