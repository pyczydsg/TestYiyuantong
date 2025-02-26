
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

//全局引入element+
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

//创建应用实例并保存到变量
const app = createApp(App)

//在挂载前安装ElementPlus
app.use(ElementPlus)

//最后挂载到DOM
app.mount('#app')

