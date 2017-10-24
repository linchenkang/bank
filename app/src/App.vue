<template>
	<div id="app">
		<HeadTop></HeadTop>
		<transition name="animate">
			<router-view class="coutent" keep-alive></router-view>
		</transition>
		<FootEnd></FootEnd>
	</div>
</template>

<script>
	import HeadTop from './components/HeadTop'
	import FootEnd from './components/FootEnd'
	export default {
		components: {
			HeadTop,
			FootEnd
		},
		name: 'app'
	}
</script>

<style>
	#app {
		width: 100%;
	}
	
	.animate-enter {
		transform: translate(100%, 0);
		opacity: 0;
	}
	
	.animate-leave {
		transform: translate(-100%, 0);
		opacity: 0;
	}
	
	.coutent {
		transition: 0.3s;
		position: absolute;
		width: 100%;
		top: 44px;
		bottom: 50px;
		overflow-y: auto;
	}
	
	@import "./assets/rest.css";
</style>