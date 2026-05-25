export function evaluateEligibility(answers) {
  // answers object expects:
  // {
  //   ageValue: Number,
  //   weightValue: Number,
  //   recentIllness: Boolean, // cold, cough, fever, antibiotics in last 15 days
  //   recentSurgeryOrTattoo: Boolean, // last 6 months
  //   chronicOrInfectiousDiseases: Boolean // cancer, HIV, Hep B/C, heart disease
  // }

  const errors = [];

  if (answers.ageValue < 18 || answers.ageValue > 65) {
    errors.push("Age must be between 18 and 65 years.");
  }

  if (answers.weightValue < 50) {
    errors.push("Minimum body weight required is 50 kg.");
  }

  if (answers.recentIllness) {
    errors.push("You cannot donate if you have had a cold, cough, fever, or antibiotics in the last 15 days.");
  }

  if (answers.recentSurgeryOrTattoo) {
    errors.push("You cannot donate if you had a surgery, tattoo, or body piercing in the last 6 months.");
  }

  if (answers.chronicOrInfectiousDiseases) {
    errors.push("You are permanently deferred from donating due to the specified chronic or infectious diseases.");
  }

  return {
    isEligible: errors.length === 0,
    errors
  };
}
