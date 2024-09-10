"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getAgeGroup(age) {
    const ageGroups = [];
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
exports.default = getAgeGroup;
