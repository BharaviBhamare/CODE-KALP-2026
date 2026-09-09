export interface JudgingCriterion {
  title: string;
  description: string;
}

export interface RoundDetail {
  roundNumber: number;
  title: string;
  description: string;
  type: string;
  marks: string[];
  totalMarks: number;
  topics: string;
  duration: string;
  difficulty: string;
  format?: string;
  
}

export interface WinnerSelection {
  points: string[];
}

export interface EventData {
  id: string;
  name: string;
   type: "competition" | "workshop";
  tagline: string;
  fee: string;
  teamSize: string;
  date: string;
  description: string;
  teamComposition?: string;
  extraSections?: { title: string; content: string }[];
  judgingCriteria?: JudgingCriterion[];
  competitionRounds?: RoundDetail[];
  themes?: string[];
  winnerSelection?: WinnerSelection;
  rules: string[];
  venue: string;
  coordinators: { name: string; phone: string }[];
  accessCode?: string;
  eventLink?: string;
}

export const events: EventData[] = [
  {
  id: "blindbyte",
  name: "BLINDBYTE",
  type: "competition",
  tagline: "Blind Coding Competition",
  fee: "₹50 per person",
  teamSize: "2 Members",
  date: "15th september 2026",
  description:
    "BlindByte is a unique coding competition where participants cannot see their computer screen and must type the entire code blindly. It tests their coding skills, memory, logic, accuracy, and problem-solving ability without visual assistance.",
  teamComposition: "Each team must consist of 2 members.",
  judgingCriteria: [
    {
      title: "Coding Skills",
      description:
        "Evaluation based on the participant's ability to write code accurately without visual assistance."
    },
    {
      title: "Logic & Problem Solving",
      description:
        "Evaluation based on logical thinking and the ability to solve the given coding problems."
    },
    {
      title: "Accuracy",
      description:
        "Evaluation based on the correctness and precision of the code written by the participants."
    },
    {
      title: "Memory",
      description:
        "Evaluation based on the participant's ability to remember syntax and coding logic while coding blindly."
    }
  ],
  rules: [
    "Each team must consist of 2 members.",
    "Registration fee is ₹50 per person.",
    "The competition will consist of three rounds.",
    "Participants must type the entire code without viewing the computer screen.",
    "Participants will not be provided with visual assistance while coding.",
    "The competition will test coding skills, memory, logic, accuracy, and problem-solving ability.",
    "The judges' decision will be final and binding."
  ],
  venue: "To be announced",
  coordinators: [
    { name: "Ruhanee Patil", phone: "8788961381" }
  ]
},

{
  id: "bug-buster",
  name: "BUG BUSTER",
  type: "competition",
  tagline: "Debug. Solve. Conquer.",
  fee: "₹50 per person",
  teamSize: "2 Members",
  date: "15th September 2026",

  description:
    "Debugging Competition is a coding challenge where participants identify and fix bugs in programs. Test your skills in finding syntax, logical, and runtime errors through quiz-based and real-life coding problems. With 3 exciting rounds, participants will compete against the clock and solve increasingly challenging debugging tasks.",

  teamComposition: "Each team must consist of 2 members.",

  judgingCriteria: [
    {
      title: "Bug Identification",
      description:
        "Evaluation based on the participant's ability to identify syntax, logical, and runtime errors accurately."
    },
    {
      title: "Problem Solving",
      description:
        "Evaluation based on the participant's ability to analyze problems and apply appropriate debugging techniques."
    },
    {
      title: "Accuracy",
      description:
        "Evaluation based on the correctness of the fixes implemented in the given programs."
    },
    {
      title: "Time Management",
      description:
        "Evaluation based on the ability to identify and fix bugs efficiently within the given time limit."
    }
  ],

  rules: [
    "Each team must consist of 2 members.",
    "Registration fee is ₹50 per person.",
    "The competition will consist of three rounds.",
    "Participants will be required to identify and fix bugs in the given programs.",
    "The competition will include quiz-based and real-life coding problems.",
    "Participants must complete the debugging tasks within the given time limit.",
    "The judges' decision will be final and binding."
  ],

  venue: "To be announced",

  coordinators: [
    {
      name: "Sayali Sasane",
      phone: "9689548889"
    }
  ]
},
{
  id: "webverse",
  name: "WEBVERSE",
  type: "competition",
  tagline: "Design. Develop. Dominate.",
  fee: "₹50 per person",
  teamSize: "2 Members",
  date: "15th September 2026",

  description:
    "The Web Design Competition will start at 10:30 AM. After the development phase ends, the judges will evaluate the performance of each team. Based on the scores given by the judges, the winner will be finalized.",

  teamComposition: "Each team must consist of 1 or 2 members.",

  judgingCriteria: [
    {
      title: "Design & Creativity",
      description:
        "Evaluation based on the creativity, visual appeal, and originality of the website design."
    },
    {
      title: "Functionality",
      description:
        "Evaluation based on the functionality, usability, and proper working of the website."
    },
    {
      title: "Technical Implementation",
      description:
        "Evaluation based on the effective use of web technologies and quality of implementation."
    },
    {
      title: "Overall Presentation",
      description:
        "Evaluation based on how effectively the team presents and demonstrates their website."
    }
  ],

  rules: [
    "Each team must consist of 1 or 2 members.",
    "Registration fee is ₹50 per person.",
    "The competition will start at 10:30 AM.",
    "Participants must complete the website within the given development phase.",
    "After the development phase, judges will evaluate each team's performance.",
    "The winner will be finalized based on the scores given by the judges.",
    "The judges' decision will be final and binding."
  ],

  venue: "To be announced",

  coordinators: [
    {
      name: "Ajay Desale",
      phone: "-"
    }
  ]
},
  
  {
  id: "pitch-tank",
  name: "THE PITCH TANK",
  type: "competition",
  tagline: "Idea Pitching Competition",
  fee: "₹50 per person",
  teamSize: "3 Members",
  date: "15th september 2026",
  description:
    "The Pitch Tank is an Idea Pitching Competition where participants will present innovative technical and startup-based ideas before a panel of judges. The competition will begin at 10:30 AM, and one winner will be selected based on the judges' evaluation.",
  teamComposition: "Each team must consist of 3 members.",
  judgingCriteria: [
    {
      title: "Technical Content",
      description:
        "Evaluation based on the technical quality, feasibility, and relevance of the proposed idea."
    },
    {
      title: "Innovation",
      description:
        "Evaluation based on the originality and innovative potential of the idea."
    },
    {
      title: "Presentation",
      description:
        "Evaluation based on clarity, confidence, structure, and effectiveness of the pitch."
    },
    {
      title: "Question & Answer",
      description:
        "Evaluation based on the team's understanding of the idea and their responses to questions from the judges."
    }
  ],
  rules: [
    "Each team must consist of 3 members.",
    "Registration fee is ₹50 per person.",
    "The competition will begin at 10:30 AM.",
    "Each team must carry their presentation in a PenDrive.",
    "The judges' decision will be final and binding.",
    "Use the PPT template provided by the organizers."

  ],
  venue: "To be announced",
  coordinators: [
    { name: "Rajshri Wagh", phone: "8483093967" }
  ]
},
{
    id: "poster-battle",
    name: "POSTER BATTLE",
    type: "competition",
    tagline: "Technical Poster Presentation",
    fee: "₹50 per person",
    teamSize: "3 Members",
  date: "15th september 2026",
  description:
    "The Poster Battle is a technical poster presentation competition where participants showcase their ideas and solutions through a digitally designed poster. The competition will start sharply at 10:30 a.m. Each team will get 10 minutes to present their poster, followed by a question and answer session.",
  teamComposition: "Each team must consist of 3 members.",
  judgingCriteria: [
    {
      title: "Technical Content",
      description:
        "Evaluation based on the technical depth, accuracy, relevance, and quality of the content presented."
    },
    {
      title: "Creativity",
      description:
        "Evaluation based on originality, innovation, and creative approach to the selected theme."
    },
    {
      title: "Visual Design",
      description:
        "Evaluation based on the layout, readability, visual appeal, and effective use of digital design elements."
    },
    {
      title: "Presentation & Q&A",
      description:
        "Evaluation based on clarity of presentation, communication skills, confidence, and responses during the question and answer session."
    }
  ],
  rules: [
    "Each team must consist of 3 members.",
    "Registration fee is ₹50 per person.",
    "The poster must be submitted and presented in digital format.",
    "The competition will start sharply at 10:30 a.m.",
    "Each team will get 10 minutes for presentation.",
    "Teams must select one theme from the given themes.",
    "The judges' decision will be final and binding.",
    "participants can bring there own Pendrive /laptop.",
    "The poster must be original and relevant to the selected topic",
    "Plagiarism/copying is strictly prohibited.",
    "Participants can choose one topic from the given themes."
  ],
  themes: [
    "Smart Study Planner for College Students",
    "Online Shopping Platform",
    "Personal Fitness Dashboard",
    "Disaster Management and Emergency Response Platform"
  ],
  venue: "710 and 711",
  coordinators: [
    { name: "Darshana Desale", phone: "-" },
  ]
},
{
  id: "uljhan-mein-suljhan",
  name: "ULJHAN MEIN SULJHAN",
  type: "competition",
  tagline: "Puzzle and Sudoku Challenge",
  fee: "₹50 per person",
  teamSize: "2 Members",
  date: "15th September 2026",

  description:
    "A fun and challenging event featuring puzzles and Sudoku designed to test participants’ logic, concentration, observation, and problem-solving skills. Put your thinking skills to the test, solve the challenges, and compete to be the ultimate mind master!",

  teamComposition: "Each team must consist of 2 members.",

  judgingCriteria: [
    {
      title: "Logical Thinking",
      description:
        "Evaluation based on the participant's ability to apply logic and reasoning to solve the given puzzles and Sudoku."
    },
    {
      title: "Accuracy",
      description:
        "Evaluation based on the correctness of the solutions provided by the participants."
    },
    {
      title: "Problem Solving",
      description:
        "Evaluation based on the participant's ability to analyze and solve challenging puzzles effectively."
    },
    {
      title: "Time Management",
      description:
        "Evaluation based on the ability to solve the given challenges accurately within the allotted time."
    }
  ],

  rules: [
    "Each team must consist of 2 members.",
    "Registration fee is ₹50 per person.",
    "The competition will consist of two rounds.",
    "The event will include puzzles and Sudoku-based challenges.",
    "Participants must solve the given challenges within the allotted time.",
    "The solutions must be accurate and clearly presented.",
    "The judges' decision will be final and binding."
  ],

  venue: "To be announced",

  coordinators: [
    {
      name: "Disha Bachhav",
      phone: "8788161169"
    }
  ]
},
{
  id: "e-yantra",
  name: "e-Yantra",
  type: "workshop",
  tagline: "Workshop on E-Yantra Robotics",
  fee: "₹50",
  teamSize: "1 Member",
  date: "15th September 2026",

  description:
    "Workshop on E-Yantra Robotics.",

  teamComposition: "Individual participation.",

  rules: [
    "Registration fee is ₹50 per person.",
    "Each participant can register individually."
  ],

  venue: "To be announced",

  coordinators: [
    {
      name: "Payal Patil",
      phone: "8799900150"
    }
  ]
},
  {
  id: "canvas-carnival",
  name: "CANVAS CARNIVAL",
  type: "workshop",
  tagline: "Canva Design Workshop",
  fee: "₹50 per person",
  teamSize: "Individual",
  date: "15th September 2026",

  description:
    "A hands-on Canva workshop covering design basics, templates, typography, layouts, and practical techniques.",

  extraSections: [
    {
      title: "Activities",
      content:
        "Canva Quiz • Design Challenge • Prizes & Recognition"
    }
  ],

  rules: [
    "Registration fee is ₹50 per person.",
    "Participation is individual.",
    "The workshop will consist of four rounds."
  ],

  venue: "To be announced",

  coordinators: [
    {
      name: "Chaitali Jadhav",
      phone: "9284655623"
    }
  ]
},

{
  id: "prompt-engineering",

  name: "PROMPT & PIVOT",

  type: "workshop",

  tagline: "Prompt Engineering Workshop",

  fee: "₹50 per person",

  teamSize: "Individual",

  date: "15th September 2026",

  description:
    "Prompt & Pivot is a Prompt Engineering Workshop designed to help participants understand the fundamentals of prompt engineering and learn how to create effective prompts for AI tools.",

  teamComposition:
    "Individual participation.",

  rules: [
    "The workshop will be conducted in 1 round.",
    "Each participant must register individually.",
    "Participants are expected to follow the instructions provided by the organizers."
  ],

  venue: "To be announced",

  coordinators: [
    {
      name: "Anushka Dhawale (TY Comp A)",
      phone: "9766013705"
    }
  ]

},
{
  id: "technical-paper-writing",
  name: "THE ACADEMIC EDGE",
  type: "workshop",
  tagline: "Technical Paper Writing",
  fee: "₹50",
  teamSize: "Individual",
  date: "15th September 2026",

  description:
    "A workshop on Technical Paper Writing designed to introduce participants to the fundamentals of writing and presenting technical papers.",

  teamComposition:
    "Individual participation.",

  rules: [
    "Registration fee is ₹50.",
    "Participation is individual.",
    "Workshop details will be shared by the organizers."
  ],

  venue: "To be announced",

  coordinators: [
    {
      name: "Vaibhavi Borse (T.Y.COMP)",
      phone: "7558733634"
    }
  ]
},
{
  id: "engineers-showdown",

  name: "THE ENGINEERS SHOWDOWN",

  type: "competition",

  tagline: "Engineering Challenge",

  fee: "₹50 per person",

  teamSize: "Team of 4",

  date: "15th September 2026",

  description:
    "Each team randomly receives an engineering-related topic and a surprise Chaos Card with a fun challenge or restriction. Teams get 5 minutes to prepare and 3 minutes to perform using any creative format such as skit, comedy, rap, advertisement, stand-up, dance, drama, or news report. The performance must be connected to the given topic.",

  rules: [
    "Each team will randomly receive an engineering-related topic.",
    "Each team will also receive a surprise Chaos Card with a fun challenge or restriction.",
    "Teams will get 5 minutes to prepare.",
    "Each team will get 3 minutes to perform.",
    "Participants can use any creative format such as skit, comedy, rap, advertisement, stand-up, dance, drama, or news report.",
    "The performance must be connected to the given engineering-related topic."
  ],

  venue: "To be announced",

  coordinators: [
    {
      name: "Nandini Gattani (TY Com-A)",
      phone: "9479539065"
    }
  ]

},
];
