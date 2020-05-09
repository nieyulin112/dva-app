
export default {
    namespace: 'indexPage',
    state: {
        list: {
            a: 100
        }
    },
  
    subscriptions: {
		setup({ dispatch, history }) {  // eslint-disable-line
		},
    },
  
    effects: {
		*fetch({ payload }, { call, put }) {  // eslint-disable-line
			console.log('test', payload);
			yield put({ type: 'save', payload: { list: {a: 100} }});
		},
    },
  
    reducers: {
		save(state, action) {
			return { ...state, ...action.payload };
		}
    },
  
};
  