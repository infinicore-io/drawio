(function()
{
	Sidebar.prototype.addInfinicorePalette = function()
	{

		var compArr = [];
		// var configArr = window.infinicore_config_editor.funcgroups.components.func;
		var configArr = window.InfiniCOREComponentsDesc;
		for (var key in configArr) {
			var element = configArr[key];
			if(!element.name){
				continue;
			}
			if(element.name == 'service_global'){

			}
			else{
				var imgUrl =  STENCIL_PATH + '/../images/infinicore/' + element.icon;
				var newVTE = this.createVertexTemplateEntry(
					'shape=image;infinicorecomponent='+element.name+';html=1;verticalLabelPosition=bottom;verticalAlign=top;imageAspect=1;aspect=fixed;image=' + imgUrl,
					64,
					64,
					'',
					element.short_name,
					false,
					null,
					'infinicore ' + element.name + " " + element.short_name
				);
				compArr.push(newVTE);
			}
		}

		var s = 'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;' + mxConstants.STYLE_SHAPE + "=mxgraph.infinicore.flowdirector.";
		var gn = 'mxgraph.infinicore.flowdirector';
		var dt = 'infinicore component';
		var w = 0.2;
		var h = 0.2;
		this.setCurrentSearchEntryLibrary('infinicore', 'infinicore');
		this.addPaletteFunctions('infinicore', 'Infinicore Components', false, compArr);
		this.setCurrentSearchEntryLibrary();
	};




})();
