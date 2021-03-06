import VueRouter from 'vue-router';
import Vue from 'vue';
import HeroesList from '../views/heroes/List.vue';
import EquipsList from '../views/equips/List.vue';
import WeaponsList from '../views/weapons/List.vue';
//导入添加英雄的组件
import HeroesAdd from '../views/heroes/Add.vue';
import HeroesEdit from '../views/heroes/Edit.vue';

//注册VueRouter插件 this.$router this.$toute
Vue.use(VueRouter);

//创建路由对象
var router = new VueRouter({
  //配置激活的类样式
  linkExactActiveClass: 'active',
//路由规则
  routes: [
    { path: '/', redirect: '/heroes'},
    {name: 'heroes', path: '/heroes', component: HeroesList},
    {name: 'heroadd', path: '/heroes/add', component: HeroesAdd},
    {name: 'heroesit', path: '/heroes/:id', component: HeroesEdit, props: true },
    {name: 'equips', path: '/equips', component: EquipsList},
    {name: 'weapons', path: '/weapons', component: WeaponsList}
  ]
})
//模块中导出路由对象
export default router;