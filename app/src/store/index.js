import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex)

export default new vuex.Store({
	state: {
		tails: '游戏推荐',
		course: [{
				title: '秘境对决',
				tj: '来自编辑推荐',
				img: require('../assets/image/game1.png'),
				pic: require('../assets/image/game1-logo.png'),
				text: '独特的延迟盖牌玩法，让你的每张牌都有无限可能！'
			},
			{
				title: '双子',
				tj: '来自编辑推荐',
				img: require('../assets/image/game2.png'),
				pic: require('../assets/image/game2-logo.png'),
				text: '双星奇缘：数亿年的缠绵与碰撞，响彻宇宙的引力之歌。'
			},
			{
				title: '真人汽车驾驶：德国',
				tj: '来自编辑推荐',
				img: require('../assets/image/game3.png'),
				pic: require('../assets/image/game3-logo.png'),
				text: '驰骋在德国小镇街头，体验真实的拟真赛车。'
			},
			{
				title: '放置奇兵',
				tj: '来自编辑推荐',
				img: require('../assets/image/game4.png'),
				pic: require('../assets/image/game4-logo.png'),
				text: '一款护肝的策略手游，给你不可思议的英雄对决！'
			},
			{
				title: '超进化物语',
				tj: '来自编辑推荐',
				img: require('../assets/image/game5.png'),
				pic: require('../assets/image/game5-logo.png'),
				text: '自由进化，将乐趣加倍！激情碰撞，就等你了！'
			},
		],
		gz: [{
				title: '每日新发现',
				game: [{
						name: '复古足球',
						pic: require('../assets/image/found-game1.png')
					},
					{
						name: '玩具大乱斗',
						pic: require('../assets/image/found-game2.png')
					},
					{
						name: '超速暗影忍者复仇',
						pic: require('../assets/image/found-game3.png')
					},
					{
						name: 'The Tiger',
						pic: require('../assets/image/found-game4.png')
					}
				]
			},
			{
				title: '新游预约',
				game: [{
						name: '恶魔学院',
						pic: require('../assets/image/x1.png')
					},
					{
						name: '天下第一剑客传',
						pic: require('../assets/image/x2.png')
					},
					{
						name: '小兵大乱斗-大逃杀',
						pic: require('../assets/image/x3.png')
					},
					{
						name: '惊爆大逃杀',
						pic: require('../assets/image/x4.png')
					}
				]
			},
			{
				title: '游戏测试',
				game: [{
						name: '龙珠觉醒（测试服）',
						pic: require('../assets/image/cs1.png')
					},
					{
						name: '尬飞噗噗小队',
						pic: require('../assets/image/cs2.png')
					},
					{
						name: '琅琊榜：风起长林',
						pic: require('../assets/image/cs3.png')
					},
					{
						name: '古剑奇谭二（测试服）',
						pic: require('../assets/image/cs4.png')
					}
				]
			},
			{
				title: '近期最热',
				game: [{
						name: '放逐游戏—大逃杀（测试服）',
						pic: require('../assets/image/one.png')
					},
					{
						name: '丛林法则：绝地大逃杀（测试服）',
						pic: require('../assets/image/two.png')
					},
					{
						name: '我的世界',
						pic: require('../assets/image/re3.png')
					},
					{
						name: '我去!还有这种操作?',
						pic: require('../assets/image/re4.png')
					}
				]
			},
			{
				title: '最近更新',
				game: [{
						name: '海岛奇兵（Boom Beach）',
						pic: require('../assets/image/gx1.png')
					},
					{
						name: '克鲁赛德战记（心动版）',
						pic: require('../assets/image/gx2.png')
					},
					{
						name: '命运-冠位指定（Fate/Grand Order）',
						pic: require('../assets/image/gx3.png')
					},
					{
						name: '崩坏3',
						pic: require('../assets/image/gx4.png')
					}
				]
			}
		],
		list: [{
				title: '放逐游戏—大逃杀（测试服）',
				num: '1',
				score: '7.4',
				img: require('../assets/image/one.png'),
				pic: require('../assets/image/game1-logo.png'),
				label: ['吃鸡', '大逃杀', '多人联机'],
				text: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit fugit id recusandae fuga cumque harum soluta voluptas quam hic cum eveniet quaerat nostrum distinctio pariatur expedita minima nesciunt similique in.'
			},
			{
				title: '丛林法则：绝地大逃杀（测试服）',
				num: '2',
				score: '7.5',
				img: require('../assets/image/two.png'),
				pic: require('../assets/image/game2-logo.png'),
				label: ['吃鸡', '大逃杀', '多人联机'],
				text: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit fugit id recusandae fuga cumque harum soluta voluptas quam hic cum eveniet quaerat nostrum distinctio pariatur expedita minima nesciunt similique in.'
			},
			{
				title: '真人汽车驾驶：德国',
				num: '3',
				score: '6.5',
				img: require('../assets/image/three.png'),
				pic: require('../assets/image/game3-logo.png'),
				label: ['模拟', '竞速', '驾驶'],
				text: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit fugit id recusandae fuga cumque harum soluta voluptas quam hic cum eveniet quaerat nostrum distinctio pariatur expedita minima nesciunt similique in.'
			},
			{
				title: '小米枪战',
				num: '4',
				score: '6.7',
				img: require('../assets/image/four.png'),
				pic: require('../assets/image/game4-logo.png'),
				label: ['吃鸡', '第一人称射击', '枪战'],
				text: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit fugit id recusandae fuga cumque harum soluta voluptas quam hic cum eveniet quaerat nostrum distinctio pariatur expedita minima nesciunt similique in.'
			},
			{
				title: '秘境对决',
				num: '5',
				score: '6.3',
				img: require('../assets/image/five.png'),
				pic: require('../assets/image/game4-logo.png'),
				label: ['3D', '集换式', '策略'],
				text: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit fugit id recusandae fuga cumque harum soluta voluptas quam hic cum eveniet quaerat nostrum distinctio pariatur expedita minima nesciunt similique in.'
			},
		]
	}
})