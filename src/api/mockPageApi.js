import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
let counter = 0;
let rowsPerPage = 5;

export const createData = (name, calories, fat, carbs, protein) => {
    counter += 1;
    return { id: counter, name, calories, fat, carbs, protein };
};

const pageData = [
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Donut', 452, 25.0, 51, 4.9),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Honeycomb', 408, 3.2, 87, 6.5),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Jelly Bean', 375, 0.0, 94, 0.0),
    createData('KitKat', 518, 26.0, 65, 7.0),
    createData('Lollipop', 392, 0.2, 98, 0.0),
    createData('Marshmallow', 318, 0, 81, 2.0),
    createData('Nougat', 360, 19.0, 9, 37.0),
    createData('Oreo', 437, 18.0, 63, 4.0),
    createData('Peanut Butter And Jelly Chia Pudding ', 211, 27, 68, 6),
    createData('Chocolate Banana Mug Cake ', 210, 36, 73, 23),
    createData('Cashew And Dark Chocolate Truffles', 148, 22, 55, 7),
    createData('Vanilla Bean Yogurt Panna Cotta', 141, 16, 44, 9),
    createData('Flourless Peanut Butter Cookies', 230, 44, 23, 11),
    createData('Peanut Butter Banana Smoothie', 200, 41, 21, 9),
    createData('Taco-Style Banana Pancakes', 212, 55, 13, 11),
    createData('Belgian Chocolate, Haagen-Dazs', 318, 20.7, 28.4, 4.6),
    createData('Popcorn, Butter Toffee, Tesco', 405, 7.7, 81.7, 2.2)
];

class PageApi {
    static getDataSize() {
        return pageData.length;
    }

    static getPageData(page) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], pageData.slice(page*rowsPerPage, (page+1)*rowsPerPage)));
            }, delay);
        });
    }
}

export default PageApi;

