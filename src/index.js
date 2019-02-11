/* ДЗ 2 - работа с массивами и объеектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */
function forEach(array, fn) {
    let newArr = [];

    for (let i = 0; i < array.length; i++) {
        newArr.push(fn(array[i], i, array));
    }
}

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
 */
function map(array, fn) {
    let newArr = [];

    for (let i = 0; i < array.length; i++) {
        newArr.push(fn(array[i], i, array));
    }

    return newArr;
}

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
 */
function reduce(array, fn, initial) {
    var prev = initial || array[0];
    let i = initial ? 0 : 1;

    for (; i < array.length; i++) {
        prev = fn(prev, array[i], i, array);
    }

    return prev;
}

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {
    const upcaseArr = [];

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            upcaseArr.push(key.toUpperCase());
        }
    }

    return upcaseArr;
}

/*
 Задание 5 *:

 Напишите аналог встроенного метода slice для работы с массивами
 Посмотрите как работает slice и повторите это поведение для массива, который будет передан в параметре array
 */
function slice(array, from, to) {
    const newArr = [];
    let begin;
    let end;

    if (from === undefined) {
        begin = 0;
    } else {
        if (from >= 0) {
            if (from >= array.length) {
                begin = array.length;
            } else {
                begin = from;
            }
        } else if (from < 0) {
            if (from * -1 > array.length) {
                begin = 0;
            } else {
                begin = array.length - (from * -1);
            }
        }
    }

    if (to === undefined) {
        end = array.length;
    } else {
        if (to > 0) {
            if (to >= array.length) {
                end = array.length;
            } else {
                end = to;
            }
        } else if (to < 0) {
            if (to * -1 > array.length) {
                end = 0;
            } else {
                end = array.length - (to * -1);
            }
        }
    }

    if (begin < end) {
        for (; begin < end; begin++) {
            newArr.push(array[begin]);
        }
    } else {
        return [];
    }

    return newArr;
}

/*
 Задание 6 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {
    let proxy = new Proxy(obj, {
        set(trapTarget, key, value, receiver) {
            return Reflect.set(trapTarget, key, value ** 2, receiver)
        }
    })

    return proxy;
}

export {
    forEach,
    map,
    reduce,
    upperProps,
    slice,
    createProxy
};
