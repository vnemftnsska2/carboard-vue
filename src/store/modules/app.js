// Pathify
import { make } from 'vuex-pathify'

// Data
const state = {
  drawer: null,
  drawerImage: true,
  mini: false,
  items: [
    {
      title: 'DASHBOARD',
      icon: 'mdi-view-dashboard',
      to: '/',
    },
    {
      title: '공지사항',
      icon: 'mdi-bullhorn',
      to: '/',
    },
    {
      title: '작업지시서',
      icon: 'mdi-inbox-full-outline',
      to: '/components/task/',
    },
    {
      title: '재고관리',
      icon: 'mdi-cart-plus',
      to: '/',
    },
    {
      title: '거래처',
      icon: 'mdi-lan',
      to: '/',
    },
    {
      title: '사원관리',
      icon: 'mdi-badge-account-horizontal-outline',
      to: '/',
    },
    {
      title: '고객관리',
      icon: 'mdi-account-multiple-plus-outline',
      to: '/',
    },
    {
      title: '환경설정',
      icon: 'mdi-cog-outline',
      to: '/',
    },
    {
      title: 'User Profile',
      icon: 'mdi-account',
      to: '/components/profile/',
    },
    {
      title: 'Regular Tables',
      icon: 'mdi-clipboard-outline',
      to: '/tables/regular/',
    },
    {
      title: 'Typography',
      icon: 'mdi-format-font',
      to: '/components/typography/',
    },
    {
      title: 'Icons',
      icon: 'mdi-chart-bubble',
      to: '/components/icons/',
    },
    {
      title: 'Google Maps',
      icon: 'mdi-map-marker',
      to: '/maps/google/',
    },
    {
      title: 'Notifications',
      icon: 'mdi-bell',
      to: '/components/notifications/',
    },
  ],
}

const mutations = make.mutations(state)

const actions = {
  ...make.actions(state),
  init: async ({ dispatch }) => {
  },
}

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
