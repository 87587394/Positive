import Vue from 'vue'
import store from './store';
import App from './App.vue';
// import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import {
  Button,
  TimeSelect,
  Divider,
  Tag,
  Table,
  TableColumn,
  Dialog,
  Input,
  DatePicker,
  Form,
  FormItem,
  Loading,
  MessageBox,
  Notification,
  Message
} from 'element-ui';
Vue.config.productionTip = false;
// 当在生产环境下运行时，在控制台不会有提示信息

// Vue.use(ElementUI);
// 把当前element-ui中的方法存储到Vue类的原型上，这样以后每一个Vue类的实例都可以去调取使用了
Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;
Vue.use(Button);
Vue.use(TimeSelect);
Vue.use(Divider);
Vue.use(Tag);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Dialog);
Vue.use(Input);
Vue.use(DatePicker);
Vue.use(Form);
Vue.use(FormItem);
new Vue({ // 创建vue根实例
  store,
  render: h => h(App)
}).$mount('#app');
