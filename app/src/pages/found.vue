<template>
	<div>
		<div class="banner">
			<mt-swipe :auto="2000">
				<mt-swipe-item><img src="../assets/image/banner1.jpg"></mt-swipe-item>
				<mt-swipe-item><img src="../assets/image/banner2.jpg"></mt-swipe-item>
				<mt-swipe-item><img src="../assets/image/banner3.jpg"></mt-swipe-item>
			</mt-swipe>
		</div>

		<ul class="found_part" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="5">
			<li v-for="(aa,index) in $store.state.gz">
				<div class="found_title">
					<div class="left">{{aa.title}}</div>
					<div class="right">查看更多</div>
				</div>
				<ul class="text">
					<li v-for="item in $store.state.gz[index].game">
						<img :src="item.pic">
						<p>{{item.name}}</p>
					</li>
				</ul>
			</li>
		</ul>

	</div>
</template>
<script>
	export default {
		data() {
			return {
				/*gz: [{
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
				]*/

			}
		},
		methods: {
			loadMore() {
				this.loading = true;
				setTimeout(() => {
					/*var number = 0
					number = Math.round(Math.random()*(5-1)+1)*/
					let last

					for(let i = 1; i <= 5; i++) {
						for(let i = 1; i <= 5; i++) {
							last = this.$store.state.gz[this.$store.state.gz.length - i];
						}
						this.$store.state.gz.push(last);
					}
					this.loading = false;
				}, 2500);
			}
		}
	}
</script>
<style>
	.found_part li{
		border-bottom: 1px solid #dcdcdc;
	}
	.banner {
		width: 100%;
		height: 140px;
	}
	
	.banner img {
		width: 100%;
	}
	
	.mint-swipe-indicator {
		background: #888;
		opacity: 1;
	}
	
	.is-active {
		background: #fff;
	}
	
	.found_title {
		overflow: hidden;
		margin: 15px 22px;
	}
	
	.found_title .left {
		float: left;
		color: #646464;
		font-weight: bold;
		
		font-size: 16px;
	}
	
	.found_title .right {
		float: right;
		color: #14B9C8;
		font-size: 14px;
		
	}
	
	.found_part {
		overflow: hidden;
	}
	
	.found_part .text {
		display: flex;
		justify-content: space-between;
		margin: 0 22px 25px;
	}
	.found_part .text li{
		border: 0;
	}
	.found_part .text img {
		width: 70px;
		height: 70px;
	}
	
	.found_part .text p {
		width: 70px;
		font-size: 12px;
		margin-top: 10px;
		
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>