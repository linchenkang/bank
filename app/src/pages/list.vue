<template>
	<div>
		<div class="list_top">
			<h1>Top 150</h1>
			<h3>排行榜</h3>
		</div>
		<ul class="list_part"  v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="5">
			<router-link v-for="(nn,index) in $store.state.list" :to="'/Course1/'+index">
				<li>
					<h1>{{nn.num}}</h1>
					<img :src="nn.img">
					<div class="text">
						<h3>{{nn.title}}</h3>
						<div>評分：{{nn.score}}</div>
						<p v-for="item in $store.state.list[index].label">{{item}}</p>
					</div>
				</li>
			</router-link>
		</ul>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				/*list: [{
						title: '放逐游戏—大逃杀（测试服）',
						num: '1',
						score: '7.4',
						img: require('../assets/image/one.png'),
						pic: require('../assets/image/game1-logo.png'),
						label: ['吃鸡', '大逃杀', '多人联机']
					},
					{
						title: '丛林法则：绝地大逃杀（测试服）',
						num: '2',
						score: '7.5',
						img: require('../assets/image/two.png'),
						pic: require('../assets/image/game2-logo.png'),
						label: ['吃鸡', '大逃杀', '多人联机']
					},
					{
						title: '真人汽车驾驶：德国',
						num: '3',
						score: '6.5',
						img: require('../assets/image/three.png'),
						pic: require('../assets/image/game3-logo.png'),
						label: ['模拟', '竞速', '驾驶']
					},
					{
						title: '小米枪战',
						num: '4',
						score: '6.7',
						img: require('../assets/image/four.png'),
						pic: require('../assets/image/game4-logo.png'),
						label: ['吃鸡', '第一人称射击', '枪战']
					},
					{
						title: '秘境对决',
						num: '5',
						score: '6.3',
						img: require('../assets/image/five.png'),
						pic: require('../assets/image/game4-logo.png'),
						label: ['3D', '集换式', '策略']
					},
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
							last = this.$store.state.list[this.$store.state.list.length - i];
						}
						this.$store.state.list.push(last);
					}
					this.loading = false;
				}, 2500);
			}
		}
	}
</script>
<style>
	.list_top{
		margin: 10px auto 0;
		padding: 20px 0 0;
		width: 185px;
		height: 100px;
		background-size:cover ;
		background: url(../assets/image/phb-top.png) no-repeat;
	}
	.list_top h1{
		font-size: 32px;
		margin: 0;
		font-weight: 700;
		color: #45576b;
		text-align: center;
		text-shadow: 0 1px 0 #fff;
	}
	.list_top h3{
		margin: 0;
		line-height: 42px;
		text-align: center;
		font-size: 18px;
		color: #fff;
	}
	.list_part h1 {
		line-height: 70px;
		color: #f5a623;
		font-size: 16px;
		margin-right: 10px;
	}
	
	.list_part a {
		color: #666666;
	}
	
	.list_part li {
		display: flex;
		padding: 12px;
		margin: 10px 0;
		background: #fff;
	}
	
	.list_part li img {
		width: 70px;
		height: 70px;
		margin-right: 14px;
	}
	
	.list_part li .text {
		text-align: left;
		font-size: 12px;
		line-height: 20px
	}
	
	.list_part li h3 {
		margin-bottom: 3px;
		font-size: 16px;
		margin-top: 6px;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	
	.list_part li p {
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
		float: left;
		height: 24px;
		line-height: 24px;
		color: #14B9C8;
		text-align: center;
		border: 1px solid #14b9c8;
		border-radius: 5px;
		margin: 0 5px 0 5px;
		font-size: 12px;
		padding: 0 9px 0 9px;
		margin-top: 3px;
	}
</style>