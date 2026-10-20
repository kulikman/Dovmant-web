export const research = {
  title: "RESEARCH {PARTNERSHIPS}",
  lead: "We place instruments with laboratories and get out of the way. You write the protocol, you hold the IRB approval, you own the data and the publication. We supply the device, the integration work and an engineer who answers the phone.",
  split: {
    heading: "WHO DOES {WHAT}",
    left: "The laboratory",
    right: "Dovmant",
    rows: [
      ["Writes the protocol and the research question", "Supplies the device and spare parts"],
      [
        "Holds IRB approval and informed consent",
        "Supplies the full technical specification for the IRB submission",
      ],
      [
        "Recruits and supervises participants",
        "Integrates with your capture, force-plate and EMG setup",
      ],
      [
        "Owns the physiological and participant data",
        "Receives engineering telemetry only: load, temperature, faults, usage profile",
      ],
      [
        "Authors and submits the publication",
        "Named in the methods section, not as an author unless you choose to",
      ],
      ["Decides what gets published", "No review rights over your findings, no embargo"],
    ] as [string, string][],
  },
  routes: {
    heading: "THREE {ROUTES}",
    items: [
      {
        title: "Purchase",
        text: "Outright purchase, with a specification and a written quotation built for instrumentation grant submissions. Price, lead time and warranty are quoted to your institution.",
      },
      {
        title: "Loan for a defined study",
        text: "A unit placed for the duration of one protocol, with integration support. Terms are agreed per study and depend on its length and what it asks of the hardware.",
      },
      {
        title: "Co-developed programme",
        text: "A longer engagement where protocol requirements feed back into the hardware roadmap. For laboratories prepared to work on an instrument that is still evolving. Terms are written per programme, and the feedback concerns the hardware — we are not a sponsor of your research.",
      },
    ],
  },
  integration: {
    heading: "IT HAS TO FIT YOUR {LAB}",
    text: "Tell us what you run — capture system, force plates, EMG — and we check the trigger against it before you commit to anything. We name the systems it has been verified with rather than claiming compatibility in general.",
  },
  publications: {
    heading: "PUBLISHED {WORK}",
    columns: ["Title", "Institution", "Year", "Status", "Link"],
    rows: [] as string[][],
    empty:
      "No published studies yet. The instrument is at an early stage and we say so. If you are considering being among the first laboratories to work with it, that is exactly the conversation we want to have.",
  },
  cta: {
    heading: "REQUEST A LAB {EVALUATION}",
    text: "Tell us what you study and what you run. We will tell you honestly whether the instrument fits.",
  },
};
