"use strict";
// bubble sort algorithm and application
// double nested 'for' loop
class SortData {
    constructor(data) {
        this.data = data;
    }
    sort() {
        const { length } = this.data;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.data[j] > this.data[j + 1]) {
                    const left = this.data[j];
                    this.data[j] = this.data[j + 1];
                    this.data[j + 1] = left;
                }
            }
        }
    }
}
const dateArray = [
    new Date(2020, 12, 1),
    new Date(2022, 8, 13),
    new Date(2014, 2, 22),
    new Date(2009, 6, 15),
];
const years = dateArray.map((date) => {
    return date.getFullYear();
});
const sortData = new SortData(years);
sortData.sort();
console.log(sortData.data);
