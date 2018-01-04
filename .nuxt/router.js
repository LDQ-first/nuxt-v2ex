import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _78f0827c = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
const _fc5e9f6a = () => import('../pages/all.vue' /* webpackChunkName: "pages/all" */).then(m => m.default || m)
const _c6344c3e = () => import('../pages/tab/nodes.vue' /* webpackChunkName: "pages/tab/nodes" */).then(m => m.default || m)
const _1ab1c66b = () => import('../pages/tab/city.vue' /* webpackChunkName: "pages/tab/city" */).then(m => m.default || m)
const _0f1ae216 = () => import('../pages/tab/tech.vue' /* webpackChunkName: "pages/tab/tech" */).then(m => m.default || m)
const _36e5dcd8 = () => import('../pages/tab/qna.vue' /* webpackChunkName: "pages/tab/qna" */).then(m => m.default || m)
const _30acfdb7 = () => import('../pages/tab/deals.vue' /* webpackChunkName: "pages/tab/deals" */).then(m => m.default || m)
const _4130a898 = () => import('../pages/tab/play.vue' /* webpackChunkName: "pages/tab/play" */).then(m => m.default || m)
const _0344ce0a = () => import('../pages/tab/apple.vue' /* webpackChunkName: "pages/tab/apple" */).then(m => m.default || m)
const _0541a6af = () => import('../pages/tab/creative.vue' /* webpackChunkName: "pages/tab/creative" */).then(m => m.default || m)
const _10339bd6 = () => import('../pages/tab/jobs.vue' /* webpackChunkName: "pages/tab/jobs" */).then(m => m.default || m)
const _2c072984 = () => import('../pages/topic/_id.vue' /* webpackChunkName: "pages/topic/_id" */).then(m => m.default || m)
const _08f05463 = () => import('../pages/node/_name.vue' /* webpackChunkName: "pages/node/_name" */).then(m => m.default || m)
const _9847810a = () => import('../pages/member/_name.vue' /* webpackChunkName: "pages/member/_name" */).then(m => m.default || m)



const scrollBehavior = (to, from, savedPosition) => {
  // SavedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // If no children detected
    if (to.matched.length < 2) {
      // Scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // If one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // If link has anchor, scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/",
			component: _78f0827c,
			name: "index"
		},
		{
			path: "/all",
			component: _fc5e9f6a,
			name: "all"
		},
		{
			path: "/tab/nodes",
			component: _c6344c3e,
			name: "tab-nodes"
		},
		{
			path: "/tab/city",
			component: _1ab1c66b,
			name: "tab-city"
		},
		{
			path: "/tab/tech",
			component: _0f1ae216,
			name: "tab-tech"
		},
		{
			path: "/tab/qna",
			component: _36e5dcd8,
			name: "tab-qna"
		},
		{
			path: "/tab/deals",
			component: _30acfdb7,
			name: "tab-deals"
		},
		{
			path: "/tab/play",
			component: _4130a898,
			name: "tab-play"
		},
		{
			path: "/tab/apple",
			component: _0344ce0a,
			name: "tab-apple"
		},
		{
			path: "/tab/creative",
			component: _0541a6af,
			name: "tab-creative"
		},
		{
			path: "/tab/jobs",
			component: _10339bd6,
			name: "tab-jobs"
		},
		{
			path: "/topic/:id?",
			component: _2c072984,
			name: "topic-id"
		},
		{
			path: "/node/:name?",
			component: _08f05463,
			name: "node-name"
		},
		{
			path: "/member/:name?",
			component: _9847810a,
			name: "member-name"
		}
    ],
    fallback: false
  })
}
