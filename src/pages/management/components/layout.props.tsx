import {
  GiftTwoTone,
  ProfileTwoTone,
  MoneyCollectTwoTone,
  IdcardTwoTone,
  CrownTwoTone,
} from '@ant-design/icons';
import freshFoodIcon from '@/assets/fresh_food_icon.png';

export default {
  route: {
    path: '/management',
    name: '管理',
    routes: [
      {
        path: '/management/products',
        name: '商品管理',
        access: 'canAdmin',
        icon: <GiftTwoTone twoToneColor="#eb2f96" />,
        component: './Welcome',
      },
      {
        path: '/management/categories',
        name: '类目管理',
        access: 'canAdmin',
        icon: <ProfileTwoTone twoToneColor="#000099" />,
        component: './Welcome',
      },
      {
        path: '/management/orders',
        name: '订单管理',
        access: 'canAdmin',
        icon: <MoneyCollectTwoTone twoToneColor="#52c41a" />,
        component: './Admin',
      },
      {
        path: '/management/users',
        name: '用户管理',
        access: 'canAdmin',
        icon: <IdcardTwoTone twoToneColor="#1a1aff" />,
        component: './ListTableList',
      },
      {
        path: '/management/admins',
        name: '管理员权限',
        access: 'canAdmin',
        icon: <CrownTwoTone twoToneColor="#e6e600" />,
        component: './Welcome',
      }
    ],
  },
  location: {
    pathname: '/management',
  },
  appList: [
    {
      icon: freshFoodIcon,
      title: '商城首页',
      desc: '浏览蔬必鲜商城首页',
      url: '/',
    }
  ],
};