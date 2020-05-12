// typescript学习笔记

let flag : boolean = false;

let num : number = 12;

let str : string = '222';

let arr : number[] = [1, 2, 3]

let list: Array<number> = [1,2,3,4] // 使用范型调用

let x : [string, number] = ['', 12] // 元组的定义


enum Color { Red, Green, Blue}

let color : Color = Color.Red;


let s : any = 222; // 任何类型

// Void

function warning() : void {
    console.log('this', this);
}

declare function create(o: object | null): void;

create({ x: 1});

create(null);

// 泛型

function add<T>(args: T) : T {
    return args
}