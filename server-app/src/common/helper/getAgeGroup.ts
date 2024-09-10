function getAgeGroup(age: number): string[] {
    const ageGroups: string[] = [];
  
    if (age < 15) {
      ageGroups.push("<15");
    } 
    if (age >= 15 && age <= 25) {
      ageGroups.push("15-25");
    } 
    if (age >= 25 && age <= 60) {
      ageGroups.push("25-60");
    } 
    if (age > 60) {
      ageGroups.push(">60");
    }
  
    return ageGroups;
  }

  export default getAgeGroup