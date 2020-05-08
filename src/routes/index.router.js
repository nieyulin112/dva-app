import indexRouter from './index/index.route';
import homeRouter from './home/home.route';
console.log('indexRouter', indexRouter);
export const routes = [
    ...indexRouter,
    ...homeRouter
]