import dva from 'dva';
import createLoading from 'dva-loading';
import models from './models'
import './index.less';
// 1. Initialize
const app = dva();
window.apps = app;
// 2. Plugins
app.use(createLoading());
console.log('models', models);
// 3. Model
// app.model(require('./models/example').default);
Object.keys(models).forEach(k => app.model(models[k]));
// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
