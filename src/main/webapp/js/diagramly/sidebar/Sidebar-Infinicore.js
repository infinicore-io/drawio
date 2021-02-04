(function()
{
	Sidebar.prototype.addInfinicorePalette = function()
	{
		var s = 'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;' + mxConstants.STYLE_SHAPE + "=mxgraph.infinicore.flowdirector.";
		var gn = 'mxgraph.infinicore.flowdirector';
		var dt = 'infinicore component';
		var w = 0.2;
		var h = 0.2;
		this.setCurrentSearchEntryLibrary('infinicore', 'infinicore');
		this.addPaletteFunctions('infinicore', 'infinicore', false,
			[
				this.createVertexTemplateEntry(
					s + 'access;fillColor=#66E8F3;gradientColor=#1C7CBA', 
					w * 512, 
					h * 512, 
					'', 
					'access', 
					null, 
					null, 
					this.getTagsForStencil(gn, 'access', dt).join(' ')
				),
				this.createVertexTemplateEntry(
					s + 'filter;fillColor=#66E8F3;gradientColor=#1C7CBA', 
					w * 512, 
					h * 512, 
					'', 
					'filter', 
					null, 
					null, 
					this.getTagsForStencil(gn, 'filter', dt).join(' ')
				)
			]
		);

		this.setCurrentSearchEntryLibrary();

		// for (var i = 0; i < infinicoreCompArr.length; i++)
		// {
		// 	this.setCurrentSearchEntryLibrary('infinicore', 'infinicore' + infinicoreCompArr[i]);
		// 	this.addStencilPalette('infinicore' + infinicoreCompArr[i], 'Infinicore / ' + infinicoreCompArr[i],
		// 		dir + '/infinicore/' + infinicoreCompArr[i].toLowerCase().replace(/ /g, '_') + '.xml',
		// 		';html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
		// 		null, null, 1.6, null, null, 'infinicore');
		// }
		
		// this.setCurrentSearchEntryLibrary();
	};
	
})();
