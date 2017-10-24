<template>
	<div>
		<ul class="tj" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="5">
			<router-link v-for="(n,index) in $store.state.course" :to="'/Course/'+index">
				<li>
					<div class="tj-title">
						<img :src="n.pic" />
						<p>{{n.tj}}</p>
					</div>
					<div class="tj-mian">
						<h3>{{n.title}}</h3>
						<img :src="n.img">
						<p>{{n.text}}</p>
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
				/*course: [{
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
							last = this.$store.state.course[this.$store.state.course.length - i];
						}
						this.$store.state.course.push(last);
					}
					this.loading = false;
				}, 2500);
			}
		}
	}
</script>
<style>
	body {
		background: #f2f2f2;
	}
	
	img {
		display: block;
	}
	
	.tj li {
		border-bottom: 1px solid #d6d6d6;
		margin-bottom: 9px;
		background: #fff;
	}
	
	.tj .tj-title {
		overflow: hidden;
		margin: 0 15px;
		padding-top: 15px;
	}
	
	.tj .tj-title p {
		color: #a0a0a0;
		font-size: 14px;
		line-height: 28px;
	}
	
	.tj-title img {
		width: 28px;
		height: 28px;
		float: left;
		margin-right: 8px;
	}
	
	.tj-mian h3 {
		color: #4a4a4a;
		font-size: 16px;
		margin: 15px 0 15px 15px;
	}
	
	.tj-mian p {
		color: #737373;
		font-size: 14px;
		line-height: 28px;
		margin: 15px 0 15px 15px;
	}
	
	.tj-mian img {
		width: 100%;
	}
	/*.tj a{color: #666666;}
  .tj li{margin: 10px 0;overflow: hidden;}
  .tj li img{width: 100%;height: 207px; float: left;}
  .tj li .text{ font-size: 12px; line-height: 20px}
  .tj li h3{ margin-bottom: 8px; font-size: 16px; margin-top: 6px}
  .tj li p{
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;}*/
</style>