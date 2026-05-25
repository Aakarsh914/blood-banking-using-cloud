import { describe, it, expect } from 'vitest';
import { evaluateEligibility } from './eligibilityValidator';

describe('Donor Eligibility Validator', () => {
  it('should pass for a healthy person aged between 18 and 65 with weight >= 50kg', () => {
    const validDonor = {
      ageValue: 25,
      weightValue: 70,
      recentIllness: false,
      recentSurgeryOrTattoo: false,
      chronicOrInfectiousDiseases: false
    };
    
    const result = evaluateEligibility(validDonor);
    expect(result.isEligible).toBe(true);
    expect(result.errors.length).toBe(0);
  });

  it('should fail if age is below 18', () => {
    const result = evaluateEligibility({
      ageValue: 17,
      weightValue: 60,
      recentIllness: false,
      recentSurgeryOrTattoo: false,
      chronicOrInfectiousDiseases: false
    });
    
    expect(result.isEligible).toBe(false);
    expect(result.errors).toContain("Age must be between 18 and 65 years.");
  });

  it('should fail if age is above 65', () => {
    const result = evaluateEligibility({
      ageValue: 66,
      weightValue: 60,
      recentIllness: false,
      recentSurgeryOrTattoo: false,
      chronicOrInfectiousDiseases: false
    });
    
    expect(result.isEligible).toBe(false);
  });

  it('should fail if weight is below 50kg', () => {
    const result = evaluateEligibility({
      ageValue: 30,
      weightValue: 49,
      recentIllness: false,
      recentSurgeryOrTattoo: false,
      chronicOrInfectiousDiseases: false
    });
    
    expect(result.isEligible).toBe(false);
    expect(result.errors).toContain("Minimum body weight required is 50 kg.");
  });

  it('should fail if donor had recent illness in last 15 days', () => {
    const result = evaluateEligibility({
      ageValue: 30,
      weightValue: 60,
      recentIllness: true,
      recentSurgeryOrTattoo: false,
      chronicOrInfectiousDiseases: false
    });
    
    expect(result.isEligible).toBe(false);
    expect(result.errors).toContain("You cannot donate if you have had a cold, cough, fever, or antibiotics in the last 15 days.");
  });

  it('should fail if donor had recent surgery or tattoo in last 6 months', () => {
    const result = evaluateEligibility({
      ageValue: 30,
      weightValue: 60,
      recentIllness: false,
      recentSurgeryOrTattoo: true,
      chronicOrInfectiousDiseases: false
    });
    
    expect(result.isEligible).toBe(false);
  });

  it('should fail if donor has chronic or infectious diseases', () => {
    const result = evaluateEligibility({
      ageValue: 30,
      weightValue: 60,
      recentIllness: false,
      recentSurgeryOrTattoo: false,
      chronicOrInfectiousDiseases: true
    });
    
    expect(result.isEligible).toBe(false);
  });

  it('should accumulate multiple errors if multiple conditions are met', () => {
    const result = evaluateEligibility({
      ageValue: 16,
      weightValue: 40,
      recentIllness: true,
      recentSurgeryOrTattoo: false,
      chronicOrInfectiousDiseases: false
    });
    
    expect(result.isEligible).toBe(false);
    expect(result.errors.length).toBe(3);
  });
});
