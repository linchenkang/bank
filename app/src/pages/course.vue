<template>
	<div>
	<div class="course_top">
			<div class="left">
				<img :src="$store.state.course[$route.params.index].pic" />
			</div>
			<div class="mian">
				<h2>{{$store.state.course[$route.params.index].title}}</h2>
				<p>厂商:<b>AveCreation</b></p>
				<div class="mian_bot">
					<div class="mian_bot_left">
						<p>编辑推荐</p>
						<span>285563人安装</span>
					</div>
					<div @click="like" id="like" class="mian_bot_right">
						
					</div>
				</div>
			</div>
			<div class="right">
				<div class="score">
					<span>7.5</span>
				</div>
				<p @click="download">下载</p>
			</div>
		</div>
		<div class="course_banner">
			<mt-swipe :show-indicators="false">
				<mt-swipe-item><img src="../assets/image/41009e19635545ddad807dae9bc16cbd.jpg" /></mt-swipe-item>
				<mt-swipe-item><img src="../assets/image/41009e19635545ddad807dae9bc16cbd.jpg" /></mt-swipe-item>
				<mt-swipe-item><img src="../assets/image/8e9bc178a63308ec3b77096c032c7ea6.jpg" /></mt-swipe-item>
			</mt-swipe>
		</div>

		<ul class="main">
			<li>
				<div class="head"><span></span>简介</div>
				<p>{{$store.state.course[$route.params.index].text}}</p>
			</li>
			<li>
				<div class="head"><span></span>简介</div>
				<p>真人汽车驾驶- 在德国生产的汽车街头赛车模拟器。 在这个游戏中呈现的德国制造商汽车：从经典城市汽车强大的现代跑车和豪华轿车。在游戏中每节车厢都有自己的技术规格和发动机的声音。以及详细的身体和仪表板创建完整的存在和现实主义的影响。</p>
			</li>
			<li>
				<div class="head"><span></span>简介</div>
				<p>真人汽车驾驶- 在德国生产的汽车街头赛车模拟器。 在这个游戏中呈现的德国制造商汽车：从经典城市汽车强大的现代跑车和豪华轿车。在游戏中每节车厢都有自己的技术规格和发动机的声音。以及详细的身体和仪表板创建完整的存在和现实主义的影响。</p>
			</li>
		</ul>
		

	</div>
</template>

<script>
	export default {
		data() {
			return {
				off:true
			}
		},
		methods: {
			download() {
				alert("暂时不行")
			},
			like(){
				var oLike = document.getElementById('like')
				this.off=!this.off
				this.off ? oLike.className='mian_bot_right': oLike.className='mian_bot_right1';
			}
		}
	}
</script>

<style>
	
	img {
		display: block
	}
	
	.course_top {
		display: flex;
		justify-content: space-between;
		padding: 30px 25px 0 25px;
		background: #fff;
		border-bottom: 1px solid #d9d9d9;
		padding-bottom: 15px;
	}
	
	.course_top .left {
		width: 100px;
		height: 100px;
		margin-right: 12px;
	}
	
	.course_top .left img {
		width: 100%;
	}
	
	.course_top .mian {
		width: 190px;
	}
	
	.course_top .mian h2 {
		font-size: 20px;
		font-weight: normal;
		line-height: 25px;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	
	.course_top .mian p {
		color: #a0a0a0;
		font-size: 14px;
		margin-top: 5px;
	}
	
	.course_top .mian p b {
		font-weight: normal;
		color: #14B9C8;
	}
	
	.course_top .mian .mian_bot {
		display: flex;
		justify-content: space-between;
	}
	
	.course_top .mian .mian_bot .mian_bot_left p {
		background: #b4ebfa;
		width: 70px;
		height: 25px;
		border-radius: 50px;
		text-align: center;
		font-size: 12px;
		color: #12a7b4;
		line-height: 25px;
	}
	
	.course_top .mian .mian_bot .mian_bot_left {
		float: left;
	}
	
	.course_top .mian .mian_bot .mian_bot_left span {
		font-size: 12px;
		color: #2C3E50;
	}
	
	.course_top .mian .mian_bot .mian_bot_right {
		width: 30px;
		height: 30px;
		background: url(../assets/image/collect@2x.png) no-repeat;
		background-size: 30px;
		margin-right: 10px;
	}
	
	.course_top .mian .mian_bot .mian_bot_right1 {
		width: 30px;
		height: 30px;
		background: url(../assets/image/collect@2x.png) no-repeat 0 -33px;
		background-size: 30px;
		margin-right: 10px;
	}
	.course_top .right .score {
		width: 65px;
		height: 65px;
		background: url(../assets/image/rating@2x.png) no-repeat 0 -80px;
		background-size: 70px;
		text-align: center;
	}
	
	.course_top .right .score span {
		display: inline-block;
		color: #fff;
		margin-top: 22px;
		font-weight: bold;
		font-size: 22px;
	}
	
	.course_top .right p {
		width: 60px;
		height: 30px;
		background: #14B9C8;
		border-radius: 5px;
		text-align: center;
		line-height: 30px;
		color: #FFF;
		margin-top: 15px;
	}
	
	.course_banner {
		margin: 22px 0 0 0;
	}
	
	.course_banner .mint-swipe {
		width: 100%;
		height: 240px;
	}
	
	.course_banner .mint-swipe img {
		width: 400px;
	}
	.main {
		background: #fff;
	}
	
	.main .head {
		overflow: hidden;
		line-height: 30px;
		font-size: 20px;
		padding-top: 10px;
	}
	
	.main .head span {
		width: 7px;
		height: 30px;
		display: block;
		background: #14B9C8;
		float: left;
		border-radius: 4px;
		margin: 0 10px 0 15px;
	}
	.main p{
		font-size: 14px;
		margin: 10px 0 0 15px;
		color: #8C8C8C;
		line-height: 1.5em;
	}
</style>