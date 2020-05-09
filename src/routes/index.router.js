import indexRouter from './index/index.route';
import homeRouter from './home/home.route';
export const routes = [
    ...indexRouter,
    ...homeRouter
]