﻿(function(playease) {
	var utils = playease.utils,
		events = playease.events,
		embed = playease.embed,
		io = playease.io,
		iomodes = io.modes,
		credentials = io.credentials,
		caches = io.caches,
		redirects = io.redirects,
		core = playease.core,
		alphas = core.components.bulletscreen.alphas,
		positions = core.components.bulletscreen.positions,
		rendermodes = core.renders.modes,
		rendertypes = core.renders.types,
		skintypes = core.skins.types;
	
	embed.config = function(config) {
		var _defaults = {
			width: 640,
			height: 400,
			aspectratio: '16:9',
			file: '',
			sources: [],
			mode: rendermodes.VOD,
			bufferTime: .1,
			maxretries: 0,
			retrydelay: 3000,
			controls: true,
			autoplay: true,
			airplay: 'allow',
			playsinline: true,
			poster: '',
			report: true,
			debug: false,
			loader: {
				mode: iomodes.CORS
			},
			logo: {
				visible: true
			},
			bulletscreen: {
				enable: true,
				visible: true
			},
			render: {
				name: rendertypes.DEFAULT,
				swf: 'swf/playease.swf'
			},
			skin: {
				name: skintypes.DEFAULT
			},
			events: {
				
			}
		},
		
		_config = utils.extend({}, _defaults, config);
		
		return _config;
	};
	
	embed.config.addConfig = function(oldConfig, newConfig) {
		return utils.extend(oldConfig, newConfig);
	};
})(playease);
