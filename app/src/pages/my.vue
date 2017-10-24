<template>
	<div>
		<div class="my_top">
			<h1>我玩过的游戏</h1>
		</div>
		<ul class="my_part">
			<router-link v-for="(n,index) in $store.state.list" :to="'/Course1/'+index">
				<li>
					<img :src="n.img">
					<div class="text">
						<h3>{{n.title}}</h3>
						<span>{{n.time}}</span>
					</div>
					<p>查看</p>
				</li>
			</router-link>
		</ul>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				/*course: [{
						title: '放逐游戏—大逃杀（测试服）',
						img: require('../assets/image/one.png'),
						pic: require('../assets/image/game1-logo.png'),
						time: '游戏时间10小时'
					},
					{
						title: '丛林法则：绝地大逃杀（测试服）',
						img: require('../assets/image/two.png'),
						pic: require('../assets/image/game2-logo.png'),
						time: '游戏时间10小时'
					},
					{
						title: '真人汽车驾驶：德国',
						img: require('../assets/image/three.png'),
						pic: require('../assets/image/game3-logo.png'),
						time: '游戏时间10小时'
					},
					{
						title: '小米枪战',
						img: require('../assets/image/four.png'),
						pic: require('../assets/image/game4-logo.png'),
						time: '游戏时间10小时'
					},
					{
						title: '秘境对决',
						img: require('../assets/image/five.png'),
						pic: require('../assets/image/game4-logo.png'),
						time: '游戏时间10小时'
					},
				]*/
			}
		}
	}
</script>
<style>
	.my_top h1{
		text-align: center;
		color: #14B9C8;
		font-weight: normal;
		font-size: 24px;
	}
	.my_part h1 {
		line-height: 70px;
		color: #f5a623;
		font-size: 16px;
		margin-right: 10px;
	}
	
	.my_part a {
		color: #666666;
	}
	
	.my_part li {
		display: flex;
		padding: 12px;
		margin: 10px 0;
		justify-content:space-between;
		background: #fff;
	}
	
	.my_part li img {
		width: 70px;
		height: 70px;
		margin-right: 14px;
	}
	
	.my_part li .text {
		text-align: left;
		font-size: 12px;
		line-height: 20px;
		width: 200px;
	}
	
	.my_part li h3 {
		margin-bottom: 3px;
		font-size: 16px;
		margin-top: 6px;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	
	.my_part  p {
		width: 40px;
		height: 24px;
		line-height: 24px;
		color: #14B9C8;
		text-align: center;
		border: 1px solid #14b9c8;
		border-radius: 5px;
		margin: 0 5px 0 5px;
		font-size: 12px;
		padding: 0 9px 0 9px;
		margin-top: 45px;
	}
</style>