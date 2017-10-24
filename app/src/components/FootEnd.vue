<template>
	<div>
		<ul class="footer">
			<li @click="aa">
				<router-link :to="{path:'/home'}"><img src="../assets/image/tj.png" >
					<p>游戏推荐</p>
				</router-link>
			</li>
			<li @click="bb">
				<router-link :to="{path:'/list'}"><img src="../assets/image/phb.png" >
					<p>排行榜</p>
				</router-link>
			</li>
			<li @click="cc">
				<router-link :to="{path:'/found'}"><img src="../assets/image/fx.png">
					<p>发现</p>
				</router-link>
			</li>
			<li @click="dd">
				<router-link :to="{path:'/my'}"><img src="../assets/image/wo.png">
					<p>我的游戏</p>
				</router-link>
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			aa(){
				this.$store.state.tails='游戏推荐'
			},
			bb(){
				this.$store.state.tails='排行榜'
			},
			cc(){
				this.$store.state.tails='发现'
			},
			dd(){
				this.$store.state.tails='我的游戏'
			}
		}
	}
</script>

<style>
	.footer {
		display: flex;
		justify-content: space-around;
		height: 49px;
		border-bottom: 1px solid #ccc;
		align-items: center;
		position: fixed;
		bottom: 0px;
		width: 100%;
		background: #14b9c8;
		color: #ffffff;
		font-size: 10px;
	}
	
	.footer img {
		height: 20px;
		margin: 0 auto;
		margin-bottom: 6px;
	}
	
	.footer a {
		color: #fff;
		text-decoration: none;
	}
</style>