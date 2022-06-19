export const diseases = [
  {
    name: "Allergies",
    description:
      "Allergies are an immune response triggered by allergens, an ordinarily harmful substance.",
    allergens: [
      "foods (nuts, eggs, milk, soy, shellfish, wheat)",
      "pollen",
      "mold",
      "latex",
      "pet dander",
    ],
    symptoms: [
      "Eye Irritation",
      "Runny Nose",
      "Stuffy Nose",
      "Puffy, Watery Eyes",
      "Sneezing",
      "Inflamed, itchy nose and throat",
    ],
    treatment: [
      "Antihistamines",
      "Decongestants",
      "Anti-inflammatory agents",
      "Allergy shots",
    ],
  },
  {
    name: "Cold and Flu",
    description:
      "Colds and influenza (flu) are the most common illnesses among college students.",
    symptoms: [
      "Fever",
      "Headache",
      "Intense pain and fatigue",
      "Dry Cough",
      "Runny Nose",
      "Sneezing",
    ],
    treatment: [
      "Rest more than usual and avoid exercise",
      "Drink lots of clear fluids",
      "Stay away from cigarette smokes",
      "Do not take antibiotics unless prescribed",
      "Avoid drinking alcohol",
      "Avoid caffeine",
      "Eat a well-balanced diet",
    ],
  },
  {
    name: "Conjunctivis (Pink Eye)",
    description:
      "Conjunctivitis, an inflammation of the transparent membrane that lines your eyelids and part of your eyeballs",
    symptoms: [
      "Redness",
      "Itching",
      "Tearing",
      "Burning Sensation",
      "Crusty Eyelids",
    ],
    treatment: [
      "Wash your hands",
      "Don't rub eyes",
      "Cool wet washcloth to soak off any crusting",
      "Use warm or cool compress to reduce discomfort",
      "Discard eye make-up",
      "Wash contaminated clothing",
      "Avoid wearing contact lenses",
      "Make an appointment with a doctor if condition does not improve in 2-3 days",
    ],
  },
  {
    name: "Diarrhea",
    description:
      "Diarrhea, resulting in loose, watery and possibly more-frequent bowel movements",
    symptoms: [
      "Watery, loose stools",
      "Frequent bowel movements",
      "Cramping or pain in the abdomen, nausea, bloating",
      "Possibly fever or bloody stools",
    ],
    treatment: [
      "Avoid foods that are milk based, greasy, or high fibers",
      "Avoid caffeine and alcohol",
      "Do not eat solid food if you have signs of dehydration",
      "Do not drink clear liquids excessively for more than 24 hours",
      "Begin eating normal foods within 12 hours, but stick to bland food",
      "Use over-the-counter lactobacillus acidophilus capsules or tablets",
      "Decrease level of exercise until symptoms are gone",
      "Over-the-counter drugs, such as Imodium A-D",
    ],
  },
  {
    name: "Headaches",
    description: "Headaches is a condition which results in throbbing",
    symptoms: [
      "Pulsing or throbbing quality",
      "Begins with intense pain that spreads throughout your head",
      "Felt on one or both sides of the head",
      "Lasts several hours",
      "May be accompanies with nausea or vomitting",
      "Sometimes preceded by visual changes",
      "Light and noise can make headache worse",
    ],
    treatment: [
      "Ice Pack held over eyes or forehead",
      "Heating pad set on low or hot showers to relax",
      "Sleep, or at least resting in a dark room",
      "Taking breaks from stressful situations",
      "Prescription drugs for severe headaches",
    ],
  }
];

const handler = async (req, res) => {
  res.json(diseases);
};

export default handler;
