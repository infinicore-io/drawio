(function()
{
	Sidebar.prototype.addInfinicorePalette = function()
	{
		
		var compArr = [];
		var configArr = window.infinicore_config_editor.funcgroups.components.func;
		for (var key in configArr) {
			var element = configArr[key];
			if(!element.name){
				continue;
			}
			var imgUrl =  STENCIL_PATH + '/clipart/' + element.icon;
			var newVTE = this.createVertexTemplateEntry(
				'shape=image;infinicorecomponent='+element.name+';html=1;verticalLabelPosition=bottom;verticalAlign=top;imageAspect=1;aspect=fixed;image=' + imgUrl, 
				64, 
				64, 
				'', 
				element.show_name, 
				false, 
				null, 
				'infinicore ' + element.name + " " + element.show_name
			);
			compArr.push(newVTE);
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
	

	window.infinicore_config_editor = {
		"name": "FlowMagic",
		"description": "FlowMagic Flow Graph Editor Description",
		"flow_direction": "left_right",
		"type": "FLOWDIRECTOR",
		"inputs": {
			"in": {
				"name": "in",
				"show_name": "",
				"style": "solid_in_arrow"
			},
			"in1": {
				"name": "in1",
				"show_name": "",
				"style": "solid_in_arrow"
			},
			"in2": {
				"name": "in2",
				"show_name": "",
				"style": "solid_in_arrow"
			}
		},
		"outputs": {
			"out": {
				"name": "out",
				"show_name": "",
				"style": "solid_out_arrow"
			},
			"out1": {
				"name": "out1",
				"show_name": "",
				"style": "solid_out_arrow"
			},
			"out2": {
				"name": "out2",
				"show_name": "",
				"style": "solid_out_arrow"
			}
		},
		"execUnits": {
			"type": "cpu",
			"base_type": "enum",
			"params": {
			},
			"enum": {
				"0": "Auto",
				"1": "ExecUnit.1 S0.C4.0",
				"2": "ExecUnit.2 S0.C5.0",
				"3": "ExecUnit.3 S0.C6.0",
				"4": "ExecUnit.4 S0.C7.0",
				"5": "ExecUnit.5 S0.C8.0",
				"6": "ExecUnit.6 S0.C9.0",
				"7": "ExecUnit.7 S0.C10.0",
				"8": "ExecUnit.8 S0.C11.0",
				"9": "ExecUnit.9 S0.C12.0",
				"10": "ExecUnit.10 S0.C13.0",
				"11": "ExecUnit.11 S0.C14.0",
				"12": "ExecUnit.12 S0.C15.0",
				"13": "ExecUnit.13 S0.C16.0",
				"14": "ExecUnit.14 S0.C17.0",
				"15": "ExecUnit.15 S0.C18.0",
				"16": "ExecUnit.16 S0.C19.0",
				"17": "ExecUnit.17 S0.C20.0",
				"18": "ExecUnit.18 S0.C21.0",
				"19": "ExecUnit.19 S0.C22.0",
				"20": "ExecUnit.20 S0.C23.0",
				"21": "ExecUnit.21 S0.C4.1",
				"22": "ExecUnit.22 S0.C5.1",
				"23": "ExecUnit.23 S0.C6.1",
				"24": "ExecUnit.24 S0.C7.1",
				"25": "ExecUnit.25 S0.C8.1",
				"26": "ExecUnit.26 S0.C9.1",
				"27": "ExecUnit.27 S0.C10.1",
				"28": "ExecUnit.28 S0.C11.1",
				"29": "ExecUnit.29 S0.C12.1",
				"30": "ExecUnit.30 S0.C13.1",
				"31": "ExecUnit.31 S0.C14.1",
				"32": "ExecUnit.32 S0.C15.1",
				"33": "ExecUnit.33 S0.C16.1",
				"34": "ExecUnit.34 S0.C17.1",
				"35": "ExecUnit.35 S0.C18.1",
				"36": "ExecUnit.36 S0.C19.1",
				"37": "ExecUnit.37 S0.C20.1",
				"38": "ExecUnit.38 S0.C21.1",
				"39": "ExecUnit.39 S0.C22.1",
				"40": "ExecUnit.40 S0.C23.1"
			},
			"short_enum": {
				"0": "Auto",
				"1": "ExecUnit.1",
				"2": "ExecUnit.2",
				"3": "ExecUnit.3",
				"4": "ExecUnit.4",
				"5": "ExecUnit.5",
				"6": "ExecUnit.6",
				"7": "ExecUnit.7",
				"8": "ExecUnit.8",
				"9": "ExecUnit.9",
				"10": "ExecUnit.10",
				"11": "ExecUnit.11",
				"12": "ExecUnit.12",
				"13": "ExecUnit.13",
				"14": "ExecUnit.14",
				"15": "ExecUnit.15",
				"16": "ExecUnit.16",
				"17": "ExecUnit.17",
				"18": "ExecUnit.18",
				"19": "ExecUnit.19",
				"20": "ExecUnit.20",
				"21": "ExecUnit.21",
				"22": "ExecUnit.22",
				"23": "ExecUnit.23",
				"24": "ExecUnit.24",
				"25": "ExecUnit.25",
				"26": "ExecUnit.26",
				"27": "ExecUnit.27",
				"28": "ExecUnit.28",
				"29": "ExecUnit.29",
				"30": "ExecUnit.30",
				"31": "ExecUnit.31",
				"32": "ExecUnit.32",
				"33": "ExecUnit.33",
				"34": "ExecUnit.34",
				"35": "ExecUnit.35",
				"36": "ExecUnit.36",
				"37": "ExecUnit.37",
				"38": "ExecUnit.38",
				"39": "ExecUnit.39",
				"40": "ExecUnit.40"
			}
		},
		"funcgroups": {
			"components": {
				"name": "components",
				"show_name": "Components",
				"desc": "Domain Data Path Builder Components",
				"func": {
					"ingressport": {
						"name": "ingressport",
						"show_name": "Ingress Port",
						"test_application": false,
						"desc": "Interface Configuration",
						"icon": "components.ingressport.png",
						"flow_direction": "left_right",
						"inputs": {
							"in": {
								"name": "in",
								"show_name": "",
								"style": "solid_in_arrow"
							},
							"in1": {
								"name": "in1",
								"show_name": "",
								"style": "solid_in_arrow"
							},
							"in2": {
								"name": "in2",
								"show_name": "",
								"style": "solid_in_arrow"
							}
						},
						"outputs": {
							"out": {
								"name": "out",
								"show_name": "",
								"style": "solid_out_arrow"
							},
							"out1": {
								"name": "out1",
								"show_name": "",
								"style": "solid_out_arrow"
							},
							"out2": {
								"name": "out2",
								"show_name": "",
								"style": "solid_out_arrow"
							}
						},
						"show_load_definition": false,
						"show_msgseq": false,
						"params": {
							"comp_name": {
								"name": "comp_name",
								"show_name": "Name",
								"desc": "Component Name",
								"required": true,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "id",
									"base_type": "string",
									"params": {
									}
								},
								"direct_view": true
							},
							"notes": {
								"name": "notes",
								"show_name": "Notes",
								"desc": "Description and comment about this component",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "note",
									"base_type": "string",
									"params": {
									}
								},
								"direct_view": false
							},
							"port": {
								"name": "port",
								"show_name": "Port",
								"desc": "Port",
								"required": true,
								"has_default": false,
								"default_value": "",
								"type": {
									"type": "test_port",
									"base_type": "port_id",
									"params": {
									}
								},
								"direct_view": true
							},
							"port_speed": {
								"name": "port_speed",
								"show_name": "Speed",
								"desc": "Port Speed",
								"required": true,
								"has_default": true,
								"default_value": 1,
								"type": {
									"type": "port_speed",
									"base_type": "enum",
									"params": {
									},
									"enum": {
										"0": "SFP/SFP+: Auto Select",
										"1": "SFP+: 10Gb Full Duplex",
										"2": "SFP: 1Gb SERDES AN",
										"3": "SFP: 1Gb SERDES Full Duplex",
										"4": "SFP: SGMII AN",
										"5": "SFP: SGMII No AN",
										"6": "QSFP+: 40Gb Full Duplex",
										"7": "SFP+: OC-192/STM-64 9.95Gb WAN",
										"8": "QSFP+: 40Gb XLAUI",
										"9": "QSFP+: 40Gb AutoNeg (KR4,CR4)",
										"10": "RJ-45 10M/100M/1Gb, FD AN",
										"11": "RJ-45 1Gb, FD",
										"12": "QSFP28: 100Gb Full Duplex FEC CL91",
										"13": "SFP28: 25Gb Full Duplex",
										"14": "QSFP+: 40Gb Full Duplex AN",
										"15": "QSFP28: 100Gb Full Duplex AN",
										"16": "QSFP28: 40/100Gb Full Duplex AN",
										"17": "QSFP28: 100Gb Full Duplex FEC CL91",
										"18": "RJ-45 100M/1G/10Gb AN"
									},
									"short_enum": {
										"0": "10G",
										"1": "10G",
										"2": "1G",
										"3": "1G",
										"4": "1G",
										"5": "1G",
										"6": "40G",
										"7": "10G",
										"8": "40G",
										"9": "40G",
										"10": "1G",
										"11": "1G",
										"12": "100G",
										"13": "25G",
										"14": "40A",
										"15": "100A",
										"16": "40/100A",
										"17": "100",
										"18": "1/10G"
									}
								},
								"direct_view": true
							},
							"tag_enable": {
								"name": "tag_enable",
								"show_name": "Attach Ingress Tag",
								"desc": "Attach an ingress tag to packet",
								"required": false,
								"has_default": true,
								"default_value": false,
								"type": {
									"type": "bool",
									"base_type": "bool",
									"params": {
									}
								},
								"direct_view": false
							},
							"tag": {
								"name": "tag",
								"show_name": "Tag Value",
								"desc": "The value of ingress tag",
								"required": false,
								"has_default": true,
								"default_value": 2,
								"type": {
									"type": "vlan_id",
									"base_type": "integer",
									"params": {
									},
									"range": {
										"min": 1,
										"max": 4095,
										"inclusive": true
									}
								},
								"direct_view": true
							},
							"ingress_slice_group": {
								"name": "ingress_slice_group",
								"show_name": "Ingress Slicer Settings",
								"desc": "Ingress slicer settings",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "group_settings",
									"base_type": "integer",
									"params": {
									}
								},
								"direct_view": false
							},
							"ingress_slice_enable": {
								"name": "ingress_slice_enable",
								"show_name": "Ingress Slicer",
								"desc": "Enable packet slicer",
								"required": false,
								"has_default": true,
								"default_value": false,
								"type": {
									"type": "bool",
									"base_type": "bool",
									"params": {
									}
								},
								"direct_view": true
							},
							"slice_size": {
								"name": "slice_size",
								"show_name": "Size",
								"desc": "Size limit",
								"required": false,
								"has_default": true,
								"default_value": 96,
								"type": {
									"type": "integer_range",
									"base_type": "integer",
									"params": {
									},
									"range": {
										"min": 40,
										"max": 1500,
										"inclusive": true
									},
									"fmt": null
								},
								"direct_view": false
							},
							"strip_fabricpath_header": {
								"name": "strip_fabricpath_header",
								"show_name": "Strip Cisco FP Header",
								"desc": "Strip Cisco Fabric Path header",
								"required": false,
								"has_default": true,
								"default_value": false,
								"type": {
									"type": "bool",
									"base_type": "bool",
									"params": {
									}
								},
								"direct_view": true
							},
							"eb_ts_format": {
								"name": "eb_ts_format",
								"show_name": "TS in Packet",
								"desc": "Whether or not there is embedded timestamp in packet",
								"required": false,
								"has_default": true,
								"default_value": 0,
								"type": {
									"type": "output_timestamp",
									"base_type": "enum",
									"params": {
									},
									"enum": {
										"0": "No TS in packet",
										"1": "Pkt+IVOS TS+FCS",
										"3": "Pkt+FD TS+FCS"
									}
								},
								"direct_view": false
							},
							"mtu": {
								"name": "mtu",
								"show_name": "MTU",
								"desc": "Maximum frame size expected on this interface, typical max frame size is 1522",
								"required": false,
								"has_default": true,
								"default_value": 9000,
								"type": {
									"type": "integer_range",
									"base_type": "integer",
									"params": {
									},
									"range": {
										"min": 512,
										"max": 9216,
										"inclusive": true
									},
									"fmt": null
								},
								"direct_view": false
							},
							"linksync": {
								"name": "linksync",
								"show_name": "Link Sync",
								"desc": "Control the enable or disable of a port based on the link status of a different port",
								"required": false,
								"has_default": false,
								"default_value": "",
								"type": {
									"type": "test_port",
									"base_type": "port_id",
									"params": {
									}
								},
								"direct_view": false
							},
							"dataplane_mem_auto_allocate": {
								"name": "dataplane_mem_auto_allocate",
								"show_name": "Port Memory Size",
								"desc": "Automatically manage the packet memory for this port",
								"required": false,
								"has_default": true,
								"default_value": 0,
								"type": {
									"type": "dataplane_memory_alloc_type",
									"base_type": "enum",
									"params": {
									},
									"enum": {
										"0": "Automatic",
										"1": "Use specified value"
									}
								},
								"direct_view": false
							},
							"dataplane_mem": {
								"name": "dataplane_mem",
								"show_name": "Specify Port Memory(MB)",
								"desc": "Packet buffer size allocated to this port when automatic memory management is false",
								"required": false,
								"has_default": true,
								"default_value": 32,
								"type": {
									"type": "integer_range",
									"base_type": "integer",
									"params": {
									},
									"range": {
										"min": 4,
										"max": 129022,
										"inclusive": true
									},
									"fmt": null
								},
								"direct_view": false
							},
							"coreloc": {
								"name": "coreloc",
								"show_name": "Exec Unit",
								"desc": "Use Execution Unit",
								"required": false,
								"has_default": true,
								"default_value": 0,
								"type": {
									"type": "cpu",
									"base_type": "enum",
									"params": {
									},
									"enum": {
										"0": "Auto",
										"1": "ExecUnit.1 S0.C4.0",
										"2": "ExecUnit.2 S0.C5.0",
										"3": "ExecUnit.3 S0.C6.0",
										"4": "ExecUnit.4 S0.C7.0",
										"5": "ExecUnit.5 S0.C8.0",
										"6": "ExecUnit.6 S0.C9.0",
										"7": "ExecUnit.7 S0.C10.0",
										"8": "ExecUnit.8 S0.C11.0",
										"9": "ExecUnit.9 S0.C12.0",
										"10": "ExecUnit.10 S0.C13.0",
										"11": "ExecUnit.11 S0.C14.0",
										"12": "ExecUnit.12 S0.C15.0",
										"13": "ExecUnit.13 S0.C16.0",
										"14": "ExecUnit.14 S0.C17.0",
										"15": "ExecUnit.15 S0.C18.0",
										"16": "ExecUnit.16 S0.C19.0",
										"17": "ExecUnit.17 S0.C20.0",
										"18": "ExecUnit.18 S0.C21.0",
										"19": "ExecUnit.19 S0.C22.0",
										"20": "ExecUnit.20 S0.C23.0",
										"21": "ExecUnit.21 S0.C4.1",
										"22": "ExecUnit.22 S0.C5.1",
										"23": "ExecUnit.23 S0.C6.1",
										"24": "ExecUnit.24 S0.C7.1",
										"25": "ExecUnit.25 S0.C8.1",
										"26": "ExecUnit.26 S0.C9.1",
										"27": "ExecUnit.27 S0.C10.1",
										"28": "ExecUnit.28 S0.C11.1",
										"29": "ExecUnit.29 S0.C12.1",
										"30": "ExecUnit.30 S0.C13.1",
										"31": "ExecUnit.31 S0.C14.1",
										"32": "ExecUnit.32 S0.C15.1",
										"33": "ExecUnit.33 S0.C16.1",
										"34": "ExecUnit.34 S0.C17.1",
										"35": "ExecUnit.35 S0.C18.1",
										"36": "ExecUnit.36 S0.C19.1",
										"37": "ExecUnit.37 S0.C20.1",
										"38": "ExecUnit.38 S0.C21.1",
										"39": "ExecUnit.39 S0.C22.1",
										"40": "ExecUnit.40 S0.C23.1"
									},
									"short_enum": {
										"0": "Auto",
										"1": "ExecUnit.1",
										"2": "ExecUnit.2",
										"3": "ExecUnit.3",
										"4": "ExecUnit.4",
										"5": "ExecUnit.5",
										"6": "ExecUnit.6",
										"7": "ExecUnit.7",
										"8": "ExecUnit.8",
										"9": "ExecUnit.9",
										"10": "ExecUnit.10",
										"11": "ExecUnit.11",
										"12": "ExecUnit.12",
										"13": "ExecUnit.13",
										"14": "ExecUnit.14",
										"15": "ExecUnit.15",
										"16": "ExecUnit.16",
										"17": "ExecUnit.17",
										"18": "ExecUnit.18",
										"19": "ExecUnit.19",
										"20": "ExecUnit.20",
										"21": "ExecUnit.21",
										"22": "ExecUnit.22",
										"23": "ExecUnit.23",
										"24": "ExecUnit.24",
										"25": "ExecUnit.25",
										"26": "ExecUnit.26",
										"27": "ExecUnit.27",
										"28": "ExecUnit.28",
										"29": "ExecUnit.29",
										"30": "ExecUnit.30",
										"31": "ExecUnit.31",
										"32": "ExecUnit.32",
										"33": "ExecUnit.33",
										"34": "ExecUnit.34",
										"35": "ExecUnit.35",
										"36": "ExecUnit.36",
										"37": "ExecUnit.37",
										"38": "ExecUnit.38",
										"39": "ExecUnit.39",
										"40": "ExecUnit.40"
									}
								},
								"direct_view": false
							}
						},
						"connections": {
							"components.filter": {
								"id": "components.filter",
								"count": "m"
							},
							"components.aggregator": {
								"id": "components.aggregator"
							},
							"components.replicator": {
								"id": "components.replicator"
							},
							"components.flowexport": {
								"id": "components.flowexport"
							},
							"components.capture": {
								"id": "components.capture"
							},
							"components.capturev4": {
								"id": "components.capturev4"
							},
							"components.egressport": {
								"id": "components.egressport"
							},
							"components.linkprotector": {
								"id": "components.linkprotector"
							},
							"components.ipmask": {
								"id": "components.ipmask"
							},
							"components.mbkiller": {
								"id": "components.mbkiller"
							},
							"components.mux": {
								"id": "components.mux",
								"count": "n"
							},
							"components.loadbalancer": {
								"id": "components.loadbalancer"
							},
							"components.trafficanalyzer": {
								"id": "components.trafficanalyzer",
								"count": "1"
							},
							"components.displayfilter": {
								"id": "components.displayfilter",
								"count": "1"
							},
							"components.deduplication": {
								"id": "components.deduplication",
								"count": "1"
							},
							"components.appgateway": {
								"id": "components.appgateway",
								"count": "1"
							},
							"components.detunnel": {
								"id": "components.detunnel"
							},
							"components.ethswitch": {
								"id": "components.ethswitch"
							},
							"components.matchaction": {
								"id": "components.matchaction"
							},
							"components.patternmatcher": {
								"id": "components.patternmatcher"
							}
						}
					},
					"filter": {
						"name": "filter",
						"show_name": "Filter",
						"test_application": false,
						"desc": "Filter Configuration",
						"icon": "components.filter.png",
						"flow_direction": "left_right",
						"inputs": {
							"in": {
								"name": "in",
								"show_name": "",
								"style": "solid_in_arrow"
							},
							"in1": {
								"name": "in1",
								"show_name": "",
								"style": "solid_in_arrow"
							},
							"in2": {
								"name": "in2",
								"show_name": "",
								"style": "solid_in_arrow"
							}
						},
						"outputs": {
							"out": {
								"name": "out",
								"show_name": "",
								"style": "solid_out_arrow"
							},
							"out1": {
								"name": "out1",
								"show_name": "",
								"style": "solid_out_arrow"
							},
							"out2": {
								"name": "out2",
								"show_name": "",
								"style": "solid_out_arrow"
							}
						},
						"show_load_definition": false,
						"show_msgseq": false,
						"params": {
							"comp_name": {
								"name": "comp_name",
								"show_name": "Name",
								"desc": "Component Name",
								"required": true,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "id",
									"base_type": "string",
									"params": {
									}
								},
								"direct_view": true
							},
							"notes": {
								"name": "notes",
								"show_name": "Notes",
								"desc": "Description and comment about this component",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "note",
									"base_type": "string",
									"params": {
									}
								},
								"direct_view": false
							},
							"filter": {
								"name": "filter",
								"show_name": "Filter",
								"desc": "Filter",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "Filter",
									"base_type": "compound",
									"params": {
									}
								},
								"direct_view": true
							},
							"out_pad_count": {
								"name": "out_pad_count",
								"show_name": "Output Pad Count",
								"desc": "Output Pad Count",
								"required": false,
								"has_default": true,
								"default_value": 2,
								"type": {
									"type": "integer_range",
									"base_type": "integer",
									"params": {
									},
									"range": {
										"min": 1,
										"max": 64,
										"inclusive": true
									},
									"fmt": null
								},
								"direct_view": false
							},
							"coreloc": {
								"name": "coreloc",
								"show_name": "Exec Unit",
								"desc": "Use Execution Unit",
								"required": false,
								"has_default": true,
								"default_value": 0,
								"type": {
									"type": "cpu",
									"base_type": "enum",
									"params": {
									},
									"enum": {
										"0": "Auto",
										"1": "ExecUnit.1 S0.C4.0",
										"2": "ExecUnit.2 S0.C5.0",
										"3": "ExecUnit.3 S0.C6.0",
										"4": "ExecUnit.4 S0.C7.0",
										"5": "ExecUnit.5 S0.C8.0",
										"6": "ExecUnit.6 S0.C9.0",
										"7": "ExecUnit.7 S0.C10.0",
										"8": "ExecUnit.8 S0.C11.0",
										"9": "ExecUnit.9 S0.C12.0",
										"10": "ExecUnit.10 S0.C13.0",
										"11": "ExecUnit.11 S0.C14.0",
										"12": "ExecUnit.12 S0.C15.0",
										"13": "ExecUnit.13 S0.C16.0",
										"14": "ExecUnit.14 S0.C17.0",
										"15": "ExecUnit.15 S0.C18.0",
										"16": "ExecUnit.16 S0.C19.0",
										"17": "ExecUnit.17 S0.C20.0",
										"18": "ExecUnit.18 S0.C21.0",
										"19": "ExecUnit.19 S0.C22.0",
										"20": "ExecUnit.20 S0.C23.0",
										"21": "ExecUnit.21 S0.C4.1",
										"22": "ExecUnit.22 S0.C5.1",
										"23": "ExecUnit.23 S0.C6.1",
										"24": "ExecUnit.24 S0.C7.1",
										"25": "ExecUnit.25 S0.C8.1",
										"26": "ExecUnit.26 S0.C9.1",
										"27": "ExecUnit.27 S0.C10.1",
										"28": "ExecUnit.28 S0.C11.1",
										"29": "ExecUnit.29 S0.C12.1",
										"30": "ExecUnit.30 S0.C13.1",
										"31": "ExecUnit.31 S0.C14.1",
										"32": "ExecUnit.32 S0.C15.1",
										"33": "ExecUnit.33 S0.C16.1",
										"34": "ExecUnit.34 S0.C17.1",
										"35": "ExecUnit.35 S0.C18.1",
										"36": "ExecUnit.36 S0.C19.1",
										"37": "ExecUnit.37 S0.C20.1",
										"38": "ExecUnit.38 S0.C21.1",
										"39": "ExecUnit.39 S0.C22.1",
										"40": "ExecUnit.40 S0.C23.1"
									},
									"short_enum": {
										"0": "Auto",
										"1": "ExecUnit.1",
										"2": "ExecUnit.2",
										"3": "ExecUnit.3",
										"4": "ExecUnit.4",
										"5": "ExecUnit.5",
										"6": "ExecUnit.6",
										"7": "ExecUnit.7",
										"8": "ExecUnit.8",
										"9": "ExecUnit.9",
										"10": "ExecUnit.10",
										"11": "ExecUnit.11",
										"12": "ExecUnit.12",
										"13": "ExecUnit.13",
										"14": "ExecUnit.14",
										"15": "ExecUnit.15",
										"16": "ExecUnit.16",
										"17": "ExecUnit.17",
										"18": "ExecUnit.18",
										"19": "ExecUnit.19",
										"20": "ExecUnit.20",
										"21": "ExecUnit.21",
										"22": "ExecUnit.22",
										"23": "ExecUnit.23",
										"24": "ExecUnit.24",
										"25": "ExecUnit.25",
										"26": "ExecUnit.26",
										"27": "ExecUnit.27",
										"28": "ExecUnit.28",
										"29": "ExecUnit.29",
										"30": "ExecUnit.30",
										"31": "ExecUnit.31",
										"32": "ExecUnit.32",
										"33": "ExecUnit.33",
										"34": "ExecUnit.34",
										"35": "ExecUnit.35",
										"36": "ExecUnit.36",
										"37": "ExecUnit.37",
										"38": "ExecUnit.38",
										"39": "ExecUnit.39",
										"40": "ExecUnit.40"
									}
								},
								"direct_view": false
							}
						},
						"connections": {
							"components.aggregator": {
								"id": "components.aggregator",
								"count": "n"
							},
							"components.replicator": {
								"id": "components.replicator",
								"count": "n"
							},
							"components.flowexport": {
								"id": "components.flowexport",
								"count": "n"
							},
							"components.capture": {
								"id": "components.capture",
								"count": "n"
							},
							"components.capturev4": {
								"id": "components.capturev4",
								"count": "n"
							},
							"components.ipmask": {
								"id": "components.ipmask",
								"count": "n"
							},
							"components.egressport": {
								"id": "components.egressport",
								"count": "n"
							},
							"components.mux": {
								"id": "components.mux",
								"count": "n"
							},
							"components.loadbalancer": {
								"id": "components.loadbalancer",
								"count": "n"
							},
							"components.trafficanalyzer": {
								"id": "components.trafficanalyzer",
								"count": "1"
							},
							"components.displayfilter": {
								"id": "components.displayfilter",
								"count": "1"
							},
							"components.deduplication": {
								"id": "components.deduplication",
								"count": "n"
							},
							"components.appgateway": {
								"id": "components.appgateway",
								"count": "1"
							},
							"components.detunnel": {
								"id": "components.detunnel"
							},
							"components.ethswitch": {
								"id": "components.ethswitch"
							},
							"components.mbkiller": {
								"id": "components.mbkiller"
							},
							"components.matchaction": {
								"id": "components.matchaction"
							},
							"components.patternmatcher": {
								"id": "components.patternmatcher"
							}
						}
					},
					"aggregator": {
						"name": "aggregator",
						"show_name": "Aggregator",
						"test_application": false,
						"desc": "Aggregator",
						"icon": "components.aggregator.png",
						"flow_direction": "left_right",
						"inputs": {
							"in": {
								"name": "in",
								"show_name": "",
								"style": "solid_in_arrow"
							},
							"in1": {
								"name": "in1",
								"show_name": "",
								"style": "solid_in_arrow"
							},
							"in2": {
								"name": "in2",
								"show_name": "",
								"style": "solid_in_arrow"
							}
						},
						"outputs": {
							"out": {
								"name": "out",
								"show_name": "",
								"style": "solid_out_arrow"
							},
							"out1": {
								"name": "out1",
								"show_name": "",
								"style": "solid_out_arrow"
							},
							"out2": {
								"name": "out2",
								"show_name": "",
								"style": "solid_out_arrow"
							}
						},
						"show_load_definition": false,
						"show_msgseq": false,
						"params": {
							"comp_name": {
								"name": "comp_name",
								"show_name": "Name",
								"desc": "Component Name",
								"required": true,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "id",
									"base_type": "string",
									"params": {
									}
								},
								"direct_view": true
							},
							"notes": {
								"name": "notes",
								"show_name": "Notes",
								"desc": "Description and comment about this component",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "note",
									"base_type": "string",
									"params": {
									}
								},
								"direct_view": false
							},
							"in_pad_count": {
								"name": "in_pad_count",
								"show_name": "Input Pad Count",
								"desc": "Input Pad Count",
								"required": false,
								"has_default": true,
								"default_value": 4,
								"type": {
									"type": "integer_range",
									"base_type": "integer",
									"params": {
									},
									"range": {
										"min": 1,
										"max": 64,
										"inclusive": true
									},
									"fmt": null
								},
								"direct_view": false
							},
							"coreloc": {
								"name": "coreloc",
								"show_name": "Exec Unit",
								"desc": "Use Execution Unit",
								"required": false,
								"has_default": true,
								"default_value": 0,
								"type": {
									"type": "cpu",
									"base_type": "enum",
									"params": {
									},
									"enum": {
										"0": "Auto",
										"1": "ExecUnit.1 S0.C4.0",
										"2": "ExecUnit.2 S0.C5.0",
										"3": "ExecUnit.3 S0.C6.0",
										"4": "ExecUnit.4 S0.C7.0",
										"5": "ExecUnit.5 S0.C8.0",
										"6": "ExecUnit.6 S0.C9.0",
										"7": "ExecUnit.7 S0.C10.0",
										"8": "ExecUnit.8 S0.C11.0",
										"9": "ExecUnit.9 S0.C12.0",
										"10": "ExecUnit.10 S0.C13.0",
										"11": "ExecUnit.11 S0.C14.0",
										"12": "ExecUnit.12 S0.C15.0",
										"13": "ExecUnit.13 S0.C16.0",
										"14": "ExecUnit.14 S0.C17.0",
										"15": "ExecUnit.15 S0.C18.0",
										"16": "ExecUnit.16 S0.C19.0",
										"17": "ExecUnit.17 S0.C20.0",
										"18": "ExecUnit.18 S0.C21.0",
										"19": "ExecUnit.19 S0.C22.0",
										"20": "ExecUnit.20 S0.C23.0",
										"21": "ExecUnit.21 S0.C4.1",
										"22": "ExecUnit.22 S0.C5.1",
										"23": "ExecUnit.23 S0.C6.1",
										"24": "ExecUnit.24 S0.C7.1",
										"25": "ExecUnit.25 S0.C8.1",
										"26": "ExecUnit.26 S0.C9.1",
										"27": "ExecUnit.27 S0.C10.1",
										"28": "ExecUnit.28 S0.C11.1",
										"29": "ExecUnit.29 S0.C12.1",
										"30": "ExecUnit.30 S0.C13.1",
										"31": "ExecUnit.31 S0.C14.1",
										"32": "ExecUnit.32 S0.C15.1",
										"33": "ExecUnit.33 S0.C16.1",
										"34": "ExecUnit.34 S0.C17.1",
										"35": "ExecUnit.35 S0.C18.1",
										"36": "ExecUnit.36 S0.C19.1",
										"37": "ExecUnit.37 S0.C20.1",
										"38": "ExecUnit.38 S0.C21.1",
										"39": "ExecUnit.39 S0.C22.1",
										"40": "ExecUnit.40 S0.C23.1"
									},
									"short_enum": {
										"0": "Auto",
										"1": "ExecUnit.1",
										"2": "ExecUnit.2",
										"3": "ExecUnit.3",
										"4": "ExecUnit.4",
										"5": "ExecUnit.5",
										"6": "ExecUnit.6",
										"7": "ExecUnit.7",
										"8": "ExecUnit.8",
										"9": "ExecUnit.9",
										"10": "ExecUnit.10",
										"11": "ExecUnit.11",
										"12": "ExecUnit.12",
										"13": "ExecUnit.13",
										"14": "ExecUnit.14",
										"15": "ExecUnit.15",
										"16": "ExecUnit.16",
										"17": "ExecUnit.17",
										"18": "ExecUnit.18",
										"19": "ExecUnit.19",
										"20": "ExecUnit.20",
										"21": "ExecUnit.21",
										"22": "ExecUnit.22",
										"23": "ExecUnit.23",
										"24": "ExecUnit.24",
										"25": "ExecUnit.25",
										"26": "ExecUnit.26",
										"27": "ExecUnit.27",
										"28": "ExecUnit.28",
										"29": "ExecUnit.29",
										"30": "ExecUnit.30",
										"31": "ExecUnit.31",
										"32": "ExecUnit.32",
										"33": "ExecUnit.33",
										"34": "ExecUnit.34",
										"35": "ExecUnit.35",
										"36": "ExecUnit.36",
										"37": "ExecUnit.37",
										"38": "ExecUnit.38",
										"39": "ExecUnit.39",
										"40": "ExecUnit.40"
									}
								},
								"direct_view": false
							}
						},
						"connections": {
							"components.filter": {
								"id": "components.filter"
							},
							"components.replicator": {
								"id": "components.replicator"
							},
							"components.aggregator": {
								"id": "components.aggregator"
							},
							"components.flowexport": {
								"id": "components.flowexport"
							},
							"components.capture": {
								"id": "components.capture"
							},
							"components.capturev4": {
								"id": "components.capturev4"
							},
							"components.egressport": {
								"id": "components.egressport"
							},
							"components.ipmask": {
								"id": "components.ipmask"
							},
							"components.mux": {
								"id": "components.mux",
								"count": "n"
							},
							"components.loadbalancer": {
								"id": "components.loadbalancer"
							},
							"components.trafficanalyzer": {
								"id": "components.trafficanalyzer",
								"count": "1"
							},
							"components.displayfilter": {
								"id": "components.displayfilter",
								"count": "1"
							},
							"components.deduplication": {
								"id": "components.deduplication",
								"count": "1"
							},
							"components.appgateway": {
								"id": "components.appgateway",
								"count": "1"
							},
							"components.detunnel": {
								"id": "components.detunnel"
							},
							"components.ethswitch": {
								"id": "components.ethswitch"
							},
							"components.mbkiller": {
								"id": "components.mbkiller"
							},
							"components.matchaction": {
								"id": "components.matchaction"
							},
							"components.patternmatcher": {
								"id": "components.patternmatcher"
							}
						}
					},
					"replicator": {
						"name": "replicator",
						"show_name": "Replicator",
						"test_application": false,
						"desc": "Replicator",
						"icon": "components.replicator.png",
						"flow_direction": "left_right",
						"inputs": {
							"in": {
								"name": "in",
								"show_name": "",
								"style": "solid_in_arrow"
							},
							"in1": {
								"name": "in1",
								"show_name": "",
								"style": "solid_in_arrow"
							},
							"in2": {
								"name": "in2",
								"show_name": "",
								"style": "solid_in_arrow"
							}
						},
						"outputs": {
							"out": {
								"name": "out",
								"show_name": "",
								"style": "solid_out_arrow"
							},
							"out1": {
								"name": "out1",
								"show_name": "",
								"style": "solid_out_arrow"
							},
							"out2": {
								"name": "out2",
								"show_name": "",
								"style": "solid_out_arrow"
							}
						},
						"show_load_definition": false,
						"show_msgseq": false,
						"params": {
							"comp_name": {
								"name": "comp_name",
								"show_name": "Name",
								"desc": "Component Name",
								"required": true,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "id",
									"base_type": "string",
									"params": {
									}
								},
								"direct_view": true
							},
							"notes": {
								"name": "notes",
								"show_name": "Notes",
								"desc": "Description and comment about this component",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "note",
									"base_type": "string",
									"params": {
									}
								},
								"direct_view": false
							},
							"multiplication": {
								"name": "multiplication",
								"show_name": "Multiply Factor",
								"desc": "Multiply Factor per each output pad",
								"required": false,
								"has_default": true,
								"default_value": 1,
								"type": {
									"type": "integer_range",
									"base_type": "integer",
									"params": {
									},
									"range": {
										"min": 1,
										"max": 64,
										"inclusive": true
									},
									"fmt": null
								},
								"direct_view": false
							},
							"out_pad_count": {
								"name": "out_pad_count",
								"show_name": "Output Pad Count",
								"desc": "Output Pad Count",
								"required": false,
								"has_default": true,
								"default_value": 4,
								"type": {
									"type": "integer_range",
									"base_type": "integer",
									"params": {
									},
									"range": {
										"min": 1,
										"max": 64,
										"inclusive": true
									},
									"fmt": null
								},
								"direct_view": false
							},
							"coreloc": {
								"name": "coreloc",
								"show_name": "Exec Unit",
								"desc": "Use Execution Unit",
								"required": false,
								"has_default": true,
								"default_value": 0,
								"type": {
									"type": "cpu",
									"base_type": "enum",
									"params": {
									},
									"enum": {
										"0": "Auto",
										"1": "ExecUnit.1 S0.C4.0",
										"2": "ExecUnit.2 S0.C5.0",
										"3": "ExecUnit.3 S0.C6.0",
										"4": "ExecUnit.4 S0.C7.0",
										"5": "ExecUnit.5 S0.C8.0",
										"6": "ExecUnit.6 S0.C9.0",
										"7": "ExecUnit.7 S0.C10.0",
										"8": "ExecUnit.8 S0.C11.0",
										"9": "ExecUnit.9 S0.C12.0",
										"10": "ExecUnit.10 S0.C13.0",
										"11": "ExecUnit.11 S0.C14.0",
										"12": "ExecUnit.12 S0.C15.0",
										"13": "ExecUnit.13 S0.C16.0",
										"14": "ExecUnit.14 S0.C17.0",
										"15": "ExecUnit.15 S0.C18.0",
										"16": "ExecUnit.16 S0.C19.0",
										"17": "ExecUnit.17 S0.C20.0",
										"18": "ExecUnit.18 S0.C21.0",
										"19": "ExecUnit.19 S0.C22.0",
										"20": "ExecUnit.20 S0.C23.0",
										"21": "ExecUnit.21 S0.C4.1",
										"22": "ExecUnit.22 S0.C5.1",
										"23": "ExecUnit.23 S0.C6.1",
										"24": "ExecUnit.24 S0.C7.1",
										"25": "ExecUnit.25 S0.C8.1",
										"26": "ExecUnit.26 S0.C9.1",
										"27": "ExecUnit.27 S0.C10.1",
										"28": "ExecUnit.28 S0.C11.1",
										"29": "ExecUnit.29 S0.C12.1",
										"30": "ExecUnit.30 S0.C13.1",
										"31": "ExecUnit.31 S0.C14.1",
										"32": "ExecUnit.32 S0.C15.1",
										"33": "ExecUnit.33 S0.C16.1",
										"34": "ExecUnit.34 S0.C17.1",
										"35": "ExecUnit.35 S0.C18.1",
										"36": "ExecUnit.36 S0.C19.1",
										"37": "ExecUnit.37 S0.C20.1",
										"38": "ExecUnit.38 S0.C21.1",
										"39": "ExecUnit.39 S0.C22.1",
										"40": "ExecUnit.40 S0.C23.1"
									},
									"short_enum": {
										"0": "Auto",
										"1": "ExecUnit.1",
										"2": "ExecUnit.2",
										"3": "ExecUnit.3",
										"4": "ExecUnit.4",
										"5": "ExecUnit.5",
										"6": "ExecUnit.6",
										"7": "ExecUnit.7",
										"8": "ExecUnit.8",
										"9": "ExecUnit.9",
										"10": "ExecUnit.10",
										"11": "ExecUnit.11",
										"12": "ExecUnit.12",
										"13": "ExecUnit.13",
										"14": "ExecUnit.14",
										"15": "ExecUnit.15",
										"16": "ExecUnit.16",
										"17": "ExecUnit.17",
										"18": "ExecUnit.18",
										"19": "ExecUnit.19",
										"20": "ExecUnit.20",
										"21": "ExecUnit.21",
										"22": "ExecUnit.22",
										"23": "ExecUnit.23",
										"24": "ExecUnit.24",
										"25": "ExecUnit.25",
										"26": "ExecUnit.26",
										"27": "ExecUnit.27",
										"28": "ExecUnit.28",
										"29": "ExecUnit.29",
										"30": "ExecUnit.30",
										"31": "ExecUnit.31",
										"32": "ExecUnit.32",
										"33": "ExecUnit.33",
										"34": "ExecUnit.34",
										"35": "ExecUnit.35",
										"36": "ExecUnit.36",
										"37": "ExecUnit.37",
										"38": "ExecUnit.38",
										"39": "ExecUnit.39",
										"40": "ExecUnit.40"
									}
								},
								"direct_view": false
							}
						},
						"connections": {
							"components.filter": {
								"id": "components.filter"
							},
							"components.aggregator": {
								"id": "components.aggregator"
							},
							"components.replicator": {
								"id": "components.replicator",
								"count": "n"
							},
							"components.flowexport": {
								"id": "components.flowexport"
							},
							"components.capture": {
								"id": "components.capture"
							},
							"components.capturev4": {
								"id": "components.capturev4"
							},
							"components.egressport": {
								"id": "components.egressport"
							},
							"components.ipmask": {
								"id": "components.ipmask"
							},
							"components.mux": {
								"id": "components.mux",
								"count": "n"
							},
							"components.loadbalancer": {
								"id": "components.loadbalancer"
							},
							"components.trafficanalyzer": {
								"id": "components.trafficanalyzer",
								"count": "1"
							},
							"components.displayfilter": {
								"id": "components.displayfilter",
								"count": "1"
							},
							"components.deduplication": {
								"id": "components.deduplication",
								"count": "n"
							},
							"components.appgateway": {
								"id": "components.appgateway",
								"count": "1"
							},
							"components.detunnel": {
								"id": "components.detunnel"
							},
							"components.ethswitch": {
								"id": "components.ethswitch"
							},
							"components.mbkiller": {
								"id": "components.mbkiller"
							},
							"components.matchaction": {
								"id": "components.matchaction"
							},
							"components.patternmatcher": {
								"id": "components.patternmatcher"
							}
						}
					},
					"mux": {
						"name": "mux",
						"show_name": "Mux",
						"test_application": false,
						"desc": "Multiplexer",
						"icon": "components.mux.png",
						"flow_direction": "left_right",
						"inputs": {
							"in": {
								"name": "in",
								"show_name": "",
								"style": "solid_in_arrow"
							},
							"in1": {
								"name": "in1",
								"show_name": "",
								"style": "solid_in_arrow"
							},
							"in2": {
								"name": "in2",
								"show_name": "",
								"style": "solid_in_arrow"
							}
						},
						"outputs": {
							"out": {
								"name": "out",
								"show_name": "",
								"style": "solid_out_arrow"
							},
							"out1": {
								"name": "out1",
								"show_name": "",
								"style": "solid_out_arrow"
							},
							"out2": {
								"name": "out2",
								"show_name": "",
								"style": "solid_out_arrow"
							}
						},
						"show_load_definition": false,
						"show_msgseq": false,
						"params": {
							"comp_name": {
								"name": "comp_name",
								"show_name": "Name",
								"desc": "Component Name",
								"required": true,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "id",
									"base_type": "string",
									"params": {
									}
								},
								"direct_view": true
							},
							"notes": {
								"name": "notes",
								"show_name": "Notes",
								"desc": "Description and comment about this component",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "note",
									"base_type": "string",
									"params": {
									}
								},
								"direct_view": false
							},
							"in_pad_count": {
								"name": "in_pad_count",
								"show_name": "Input Pad Count",
								"desc": "Input Pad Count",
								"required": false,
								"has_default": true,
								"default_value": 2,
								"type": {
									"type": "integer_range",
									"base_type": "integer",
									"params": {
									},
									"range": {
										"min": 1,
										"max": 16,
										"inclusive": true
									},
									"fmt": null
								},
								"direct_view": false
							},
							"mux_settings": {
								"name": "mux_settings",
								"show_name": "Mux Settings",
								"desc": "Mux settings such as names and states",
								"required": false,
								"has_default": false,
								"default_value": "",
								"type": {
									"type": "mux_settings",
									"base_type": "string",
									"params": {
									}
								},
								"direct_view": false
							},
							"coreloc": {
								"name": "coreloc",
								"show_name": "Exec Unit",
								"desc": "Use Execution Unit",
								"required": false,
								"has_default": true,
								"default_value": 0,
								"type": {
									"type": "cpu",
									"base_type": "enum",
									"params": {
									},
									"enum": {
										"0": "Auto",
										"1": "ExecUnit.1 S0.C4.0",
										"2": "ExecUnit.2 S0.C5.0",
										"3": "ExecUnit.3 S0.C6.0",
										"4": "ExecUnit.4 S0.C7.0",
										"5": "ExecUnit.5 S0.C8.0",
										"6": "ExecUnit.6 S0.C9.0",
										"7": "ExecUnit.7 S0.C10.0",
										"8": "ExecUnit.8 S0.C11.0",
										"9": "ExecUnit.9 S0.C12.0",
										"10": "ExecUnit.10 S0.C13.0",
										"11": "ExecUnit.11 S0.C14.0",
										"12": "ExecUnit.12 S0.C15.0",
										"13": "ExecUnit.13 S0.C16.0",
										"14": "ExecUnit.14 S0.C17.0",
										"15": "ExecUnit.15 S0.C18.0",
										"16": "ExecUnit.16 S0.C19.0",
										"17": "ExecUnit.17 S0.C20.0",
										"18": "ExecUnit.18 S0.C21.0",
										"19": "ExecUnit.19 S0.C22.0",
										"20": "ExecUnit.20 S0.C23.0",
										"21": "ExecUnit.21 S0.C4.1",
										"22": "ExecUnit.22 S0.C5.1",
										"23": "ExecUnit.23 S0.C6.1",
										"24": "ExecUnit.24 S0.C7.1",
										"25": "ExecUnit.25 S0.C8.1",
										"26": "ExecUnit.26 S0.C9.1",
										"27": "ExecUnit.27 S0.C10.1",
										"28": "ExecUnit.28 S0.C11.1",
										"29": "ExecUnit.29 S0.C12.1",
										"30": "ExecUnit.30 S0.C13.1",
										"31": "ExecUnit.31 S0.C14.1",
										"32": "ExecUnit.32 S0.C15.1",
										"33": "ExecUnit.33 S0.C16.1",
										"34": "ExecUnit.34 S0.C17.1",
										"35": "ExecUnit.35 S0.C18.1",
										"36": "ExecUnit.36 S0.C19.1",
										"37": "ExecUnit.37 S0.C20.1",
										"38": "ExecUnit.38 S0.C21.1",
										"39": "ExecUnit.39 S0.C22.1",
										"40": "ExecUnit.40 S0.C23.1"
									},
									"short_enum": {
										"0": "Auto",
										"1": "ExecUnit.1",
										"2": "ExecUnit.2",
										"3": "ExecUnit.3",
										"4": "ExecUnit.4",
										"5": "ExecUnit.5",
										"6": "ExecUnit.6",
										"7": "ExecUnit.7",
										"8": "ExecUnit.8",
										"9": "ExecUnit.9",
										"10": "ExecUnit.10",
										"11": "ExecUnit.11",
										"12": "ExecUnit.12",
										"13": "ExecUnit.13",
										"14": "ExecUnit.14",
										"15": "ExecUnit.15",
										"16": "ExecUnit.16",
										"17": "ExecUnit.17",
										"18": "ExecUnit.18",
										"19": "ExecUnit.19",
										"20": "ExecUnit.20",
										"21": "ExecUnit.21",
										"22": "ExecUnit.22",
										"23": "ExecUnit.23",
										"24": "ExecUnit.24",
										"25": "ExecUnit.25",
										"26": "ExecUnit.26",
										"27": "ExecUnit.27",
										"28": "ExecUnit.28",
										"29": "ExecUnit.29",
										"30": "ExecUnit.30",
										"31": "ExecUnit.31",
										"32": "ExecUnit.32",
										"33": "ExecUnit.33",
										"34": "ExecUnit.34",
										"35": "ExecUnit.35",
										"36": "ExecUnit.36",
										"37": "ExecUnit.37",
										"38": "ExecUnit.38",
										"39": "ExecUnit.39",
										"40": "ExecUnit.40"
									}
								},
								"direct_view": false
							}
						},
						"connections": {
							"components.filter": {
								"id": "components.filter"
							},
							"components.replicator": {
								"id": "components.replicator"
							},
							"components.aggregator": {
								"id": "components.aggregator"
							},
							"components.flowexport": {
								"id": "components.flowexport"
							},
							"components.capture": {
								"id": "components.capture"
							},
							"components.capturev4": {
								"id": "components.capturev4"
							},
							"components.egressport": {
								"id": "components.egressport"
							},
							"components.ipmask": {
								"id": "components.ipmask"
							},
							"components.mux": {
								"id": "components.mux",
								"count": "n"
							},
							"components.detunnel": {
								"id": "components.detunnel"
							},
							"components.ethswitch": {
								"id": "components.ethswitch"
							},
							"components.mbkiller": {
								"id": "components.mbkiller"
							},
							"components.matchaction": {
								"id": "components.matchaction"
							},
							"components.patternmatcher": {
								"id": "components.patternmatcher"
							}
						}
					},
					"linkprotector": {
						"name": "linkprotector",
						"show_name": "Link Protector",
						"test_application": false,
						"desc": "Link Protector",
						"icon": "components.linkselector.png",
						"flow_direction": "left_right",
						"inputs": {
							"in": {
								"name": "in",
								"show_name": "",
								"style": "solid_in_arrow"
							},
							"in1": {
								"name": "in1",
								"show_name": "",
								"style": "solid_in_arrow"
							},
							"in2": {
								"name": "in2",
								"show_name": "",
								"style": "solid_in_arrow"
							}
						},
						"outputs": {
							"out": {
								"name": "out",
								"show_name": "",
								"style": "solid_out_arrow"
							},
							"out1": {
								"name": "out1",
								"show_name": "",
								"style": "solid_out_arrow"
							},
							"out2": {
								"name": "out2",
								"show_name": "",
								"style": "solid_out_arrow"
							}
						},
						"show_load_definition": false,
						"show_msgseq": false,
						"params": {
							"comp_name": {
								"name": "comp_name",
								"show_name": "Name",
								"desc": "Component Name",
								"required": true,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "id",
									"base_type": "string",
									"params": {
									}
								},
								"direct_view": true
							},
							"notes": {
								"name": "notes",
								"show_name": "Notes",
								"desc": "Description and comment about this component",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "note",
									"base_type": "string",
									"params": {
									}
								},
								"direct_view": false
							},
							"in_pad_count": {
								"name": "in_pad_count",
								"show_name": "Input Pad Count",
								"desc": "Input Pad Count",
								"required": false,
								"has_default": true,
								"default_value": 2,
								"type": {
									"type": "integer_range",
									"base_type": "integer",
									"params": {
									},
									"range": {
										"min": 2,
										"max": 2,
										"inclusive": true
									},
									"fmt": null
								},
								"direct_view": false
							},
							"coreloc": {
								"name": "coreloc",
								"show_name": "Exec Unit",
								"desc": "Use Execution Unit",
								"required": false,
								"has_default": true,
								"default_value": 0,
								"type": {
									"type": "cpu",
									"base_type": "enum",
									"params": {
									},
									"enum": {
										"0": "Auto",
										"1": "ExecUnit.1 S0.C4.0",
										"2": "ExecUnit.2 S0.C5.0",
										"3": "ExecUnit.3 S0.C6.0",
										"4": "ExecUnit.4 S0.C7.0",
										"5": "ExecUnit.5 S0.C8.0",
										"6": "ExecUnit.6 S0.C9.0",
										"7": "ExecUnit.7 S0.C10.0",
										"8": "ExecUnit.8 S0.C11.0",
										"9": "ExecUnit.9 S0.C12.0",
										"10": "ExecUnit.10 S0.C13.0",
										"11": "ExecUnit.11 S0.C14.0",
										"12": "ExecUnit.12 S0.C15.0",
										"13": "ExecUnit.13 S0.C16.0",
										"14": "ExecUnit.14 S0.C17.0",
										"15": "ExecUnit.15 S0.C18.0",
										"16": "ExecUnit.16 S0.C19.0",
										"17": "ExecUnit.17 S0.C20.0",
										"18": "ExecUnit.18 S0.C21.0",
										"19": "ExecUnit.19 S0.C22.0",
										"20": "ExecUnit.20 S0.C23.0",
										"21": "ExecUnit.21 S0.C4.1",
										"22": "ExecUnit.22 S0.C5.1",
										"23": "ExecUnit.23 S0.C6.1",
										"24": "ExecUnit.24 S0.C7.1",
										"25": "ExecUnit.25 S0.C8.1",
										"26": "ExecUnit.26 S0.C9.1",
										"27": "ExecUnit.27 S0.C10.1",
										"28": "ExecUnit.28 S0.C11.1",
										"29": "ExecUnit.29 S0.C12.1",
										"30": "ExecUnit.30 S0.C13.1",
										"31": "ExecUnit.31 S0.C14.1",
										"32": "ExecUnit.32 S0.C15.1",
										"33": "ExecUnit.33 S0.C16.1",
										"34": "ExecUnit.34 S0.C17.1",
										"35": "ExecUnit.35 S0.C18.1",
										"36": "ExecUnit.36 S0.C19.1",
										"37": "ExecUnit.37 S0.C20.1",
										"38": "ExecUnit.38 S0.C21.1",
										"39": "ExecUnit.39 S0.C22.1",
										"40": "ExecUnit.40 S0.C23.1"
									},
									"short_enum": {
										"0": "Auto",
										"1": "ExecUnit.1",
										"2": "ExecUnit.2",
										"3": "ExecUnit.3",
										"4": "ExecUnit.4",
										"5": "ExecUnit.5",
										"6": "ExecUnit.6",
										"7": "ExecUnit.7",
										"8": "ExecUnit.8",
										"9": "ExecUnit.9",
										"10": "ExecUnit.10",
										"11": "ExecUnit.11",
										"12": "ExecUnit.12",
										"13": "ExecUnit.13",
										"14": "ExecUnit.14",
										"15": "ExecUnit.15",
										"16": "ExecUnit.16",
										"17": "ExecUnit.17",
										"18": "ExecUnit.18",
										"19": "ExecUnit.19",
										"20": "ExecUnit.20",
										"21": "ExecUnit.21",
										"22": "ExecUnit.22",
										"23": "ExecUnit.23",
										"24": "ExecUnit.24",
										"25": "ExecUnit.25",
										"26": "ExecUnit.26",
										"27": "ExecUnit.27",
										"28": "ExecUnit.28",
										"29": "ExecUnit.29",
										"30": "ExecUnit.30",
										"31": "ExecUnit.31",
										"32": "ExecUnit.32",
										"33": "ExecUnit.33",
										"34": "ExecUnit.34",
										"35": "ExecUnit.35",
										"36": "ExecUnit.36",
										"37": "ExecUnit.37",
										"38": "ExecUnit.38",
										"39": "ExecUnit.39",
										"40": "ExecUnit.40"
									}
								},
								"direct_view": false
							}
						},
						"connections": {
							"components.filter": {
								"id": "components.filter"
							},
							"components.aggregator": {
								"id": "components.aggregator"
							},
							"components.replicator": {
								"id": "components.replicator"
							},
							"components.loadbalancer": {
								"id": "components.loadbalancer"
							},
							"components.flowexport": {
								"id": "components.flowexport"
							},
							"components.capture": {
								"id": "components.capture"
							},
							"components.capturev4": {
								"id": "components.capturev4"
							},
							"components.egressport": {
								"id": "components.egressport"
							},
							"components.ipmask": {
								"id": "components.ipmask"
							},
							"components.mux": {
								"id": "components.mux",
								"count": "n"
							},
							"components.detunnel": {
								"id": "components.detunnel"
							},
							"components.ethswitch": {
								"id": "components.ethswitch"
							},
							"components.mbkiller": {
								"id": "components.mbkiller"
							},
							"components.matchaction": {
								"id": "components.matchaction"
							},
							"components.patternmatcher": {
								"id": "components.patternmatcher"
							}
						}
					},
					"loadbalancer": {
						"name": "loadbalancer",
						"show_name": "Load balancer",
						"test_application": false,
						"desc": "Load balancer",
						"icon": "components.loadbalance.png",
						"flow_direction": "left_right",
						"inputs": {
							"in": {
								"name": "in",
								"show_name": "",
								"style": "solid_in_arrow"
							},
							"in1": {
								"name": "in1",
								"show_name": "",
								"style": "solid_in_arrow"
							},
							"in2": {
								"name": "in2",
								"show_name": "",
								"style": "solid_in_arrow"
							}
						},
						"outputs": {
							"out": {
								"name": "out",
								"show_name": "",
								"style": "solid_out_arrow"
							},
							"out1": {
								"name": "out1",
								"show_name": "",
								"style": "solid_out_arrow"
							},
							"out2": {
								"name": "out2",
								"show_name": "",
								"style": "solid_out_arrow"
							}
						},
						"show_load_definition": false,
						"show_msgseq": false,
						"params": {
							"comp_name": {
								"name": "comp_name",
								"show_name": "Name",
								"desc": "Component Name",
								"required": true,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "id",
									"base_type": "string",
									"params": {
									}
								},
								"direct_view": true
							},
							"notes": {
								"name": "notes",
								"show_name": "Notes",
								"desc": "Description and comment about this component",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "note",
									"base_type": "string",
									"params": {
									}
								},
								"direct_view": false
							},
							"loadbalancemethod": {
								"name": "loadbalancemethod",
								"show_name": "Method",
								"desc": "Select a load balance method to use",
								"required": true,
								"has_default": true,
								"default_value": 2,
								"type": {
									"type": "loadbalance_method",
									"base_type": "enum",
									"params": {
									},
									"enum": {
										"0": "S/DMAC+VLAN+EtherType",
										"1": "SIP+DIP",
										"2": "SIP+DIP+PROTO",
										"3": "S/DIP+TCP/UDP.S/DPORT",
										"4": "S/DIP+PROTO+TCP/UDP.S/DPORT",
										"5": "Inner SIP+DIP",
										"6": "Inner SIP+DIP+PROTO",
										"7": "Inner S/DIP+TCP/UDP.S/DPORT",
										"8": "Inner S/DIP+PROTO+TCP/UDP.S/DPORT",
										"9": "Use User Defined Fields",
										"10": "Inner SIP",
										"11": "Inner DIP",
										"12": "SIP",
										"13": "DIP",
										"14": "Round robin"
									}
								},
								"direct_view": true
							},
							"symmetrical": {
								"name": "symmetrical",
								"show_name": "Symmetrical LB",
								"desc": "Use symmetrical hash to select outgoing channel",
								"required": true,
								"has_default": true,
								"default_value": true,
								"type": {
									"type": "bool",
									"base_type": "bool",
									"params": {
									}
								},
								"direct_view": true
							},
							"pktstructure": {
								"name": "pktstructure",
								"show_name": "Pkt Structure",
								"desc": "Packet framing format",
								"required": true,
								"has_default": true,
								"default_value": 0,
								"type": {
									"type": "loadbalance_pktframe",
									"base_type": "enum",
									"params": {
									},
									"enum": {
										"0": "No Tunnel",
										"1": "IP/UDP/GTP+InnerIP",
										"2": "IP/UDP/VxLAN/Eth/IP/UDP/GTP+InnerIP",
										"3": "IP/UDP/VxLAN/Eth/InnerIP"
									}
								},
								"direct_view": true
							},
							"out_pad_count": {
								"name": "out_pad_count",
								"show_name": "Output Pad Count",
								"desc": "Output Pad Count",
								"required": false,
								"has_default": true,
								"default_value": 2,
								"type": {
									"type": "integer_range",
									"base_type": "integer",
									"params": {
									},
									"range": {
										"min": 1,
										"max": 64,
										"inclusive": true
									},
									"fmt": null
								},
								"direct_view": false
							},
							"frame_attribute_group": {
								"name": "frame_attribute_group",
								"show_name": "Tunnel Protocols",
								"desc": "Definition for tunnel protocols",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "group_settings",
									"base_type": "integer",
									"params": {
									}
								},
								"direct_view": false
							},
							"vxlanport": {
								"name": "vxlanport",
								"show_name": "VxLAN Port",
								"desc": "VxLAN Port Number",
								"required": true,
								"has_default": true,
								"default_value": 4789,
								"type": {
									"type": "integer_range",
									"base_type": "integer",
									"params": {
									},
									"range": {
										"min": 1,
										"max": 65535,
										"inclusive": true
									},
									"fmt": null
								},
								"direct_view": true
							},
							"gtpport": {
								"name": "gtpport",
								"show_name": "GTP Port",
								"desc": "GTP Port Number",
								"required": true,
								"has_default": true,
								"default_value": 2152,
								"type": {
									"type": "integer_range",
									"base_type": "integer",
									"params": {
									},
									"range": {
										"min": 1,
										"max": 65535,
										"inclusive": true
									},
									"fmt": null
								},
								"direct_view": true
							},
							"udf_attribute_group": {
								"name": "udf_attribute_group",
								"show_name": "User Defined Fields",
								"desc": "Definition for User Defined Fields",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "group_settings",
									"base_type": "integer",
									"params": {
									}
								},
								"direct_view": false
							},
							"udf1_enable": {
								"name": "udf1_enable",
								"show_name": "Use UDF1",
								"desc": "Use User Defined Field 1",
								"required": true,
								"has_default": true,
								"default_value": false,
								"type": {
									"type": "bool",
									"base_type": "bool",
									"params": {
									}
								},
								"direct_view": false
							},
							"udf1_offset": {
								"name": "udf1_offset",
								"show_name": "UDF1 Offset",
								"desc": "UDF1 Offset",
								"required": true,
								"has_default": true,
								"default_value": 48,
								"type": {
									"type": "integer_range",
									"base_type": "integer",
									"params": {
									},
									"range": {
										"min": 1,
										"max": 10000,
										"inclusive": true
									},
									"fmt": null
								},
								"direct_view": false
							},
							"udf1_length": {
								"name": "udf1_length",
								"show_name": "UDF1 Length",
								"desc": "UDF1 Length",
								"required": true,
								"has_default": true,
								"default_value": 4,
								"type": {
									"type": "integer_range",
									"base_type": "integer",
									"params": {
									},
									"range": {
										"min": 1,
										"max": 8,
										"inclusive": true
									},
									"fmt": null
								},
								"direct_view": false
							},
							"udf1_mask": {
								"name": "udf1_mask",
								"show_name": "UDF1 Mask",
								"desc": "UDF1 Mask",
								"required": true,
								"has_default": true,
								"default_value": "0xFFFFFFFF",
								"type": {
									"type": "udf1_mask",
									"base_type": "string",
									"params": {
									}
								},
								"direct_view": false
							},
							"udf2_enable": {
								"name": "udf2_enable",
								"show_name": "Use UDF2",
								"desc": "Use User Defined Field 2",
								"required": true,
								"has_default": true,
								"default_value": false,
								"type": {
									"type": "bool",
									"base_type": "bool",
									"params": {
									}
								},
								"direct_view": false
							},
							"udf2_offset": {
								"name": "udf2_offset",
								"show_name": "UDF2 Offset",
								"desc": "UDF2 Offset",
								"required": true,
								"has_default": true,
								"default_value": 52,
								"type": {
									"type": "integer_range",
									"base_type": "integer",
									"params": {
									},
									"range": {
										"min": 1,
										"max": 10000,
										"inclusive": true
									},
									"fmt": null
								},
								"direct_view": false
							},
							"udf2_length": {
								"name": "udf2_length",
								"show_name": "UDF2 Length",
								"desc": "UDF2 Length",
								"required": true,
								"has_default": true,
								"default_value": 4,
								"type": {
									"type": "integer_range",
									"base_type": "integer",
									"params": {
									},
									"range": {
										"min": 1,
										"max": 8,
										"inclusive": true
									},
									"fmt": null
								},
								"direct_view": false
							},
							"udf2_mask": {
								"name": "udf2_mask",
								"show_name": "UDF2 Mask",
								"desc": "UDF2 Mask",
								"required": true,
								"has_default": true,
								"default_value": "0xFFFFFFFF",
								"type": {
									"type": "udf1_mask",
									"base_type": "string",
									"params": {
									}
								},
								"direct_view": false
							},
							"linkmon_group_0": {
								"name": "linkmon_group_0",
								"show_name": "Pad.1 Link Monitor Group",
								"desc": "Link Monitors",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "group_settings",
									"base_type": "integer",
									"params": {
									}
								},
								"direct_view": false
							},
							"pad_linkmon0": {
								"name": "pad_linkmon0",
								"show_name": "Pad.0 Link",
								"desc": "Port",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "select_port",
									"base_type": "port_id",
									"params": {
									}
								},
								"direct_view": false
							},
							"pad_linkmon_ip0": {
								"name": "pad_linkmon_ip0",
								"show_name": "Pad.0 Peer IP",
								"desc": "IP Address",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "ip_address",
									"base_type": "string",
									"params": {
									}
								},
								"direct_view": false
							},
							"pad_linkmon_hb_0": {
								"name": "pad_linkmon_hb_0",
								"show_name": "Use Heartbeat Monitor",
								"desc": "Eable packet based heartbeat link monitoring",
								"required": false,
								"has_default": true,
								"default_value": false,
								"type": {
									"type": "bool",
									"base_type": "bool",
									"params": {
									}
								},
								"direct_view": false
							},
							"pad_linkmon_hb_pkt_recv_port_0": {
								"name": "pad_linkmon_hb_pkt_recv_port_0",
								"show_name": "HB Recv Port",
								"desc": "Heartbeat recv port",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "select_port",
									"base_type": "port_id",
									"params": {
									}
								},
								"direct_view": false
							},
							"pad_linkmon_hb_pkt_content_0": {
								"name": "pad_linkmon_hb_pkt_content_0",
								"show_name": "Heartbeat Pkt",
								"desc": "Heartbeat Packet Content",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "hexpkt",
									"base_type": "port_id",
									"params": {
									}
								},
								"direct_view": false
							},
							"pad_linkmon_hb_rate_0": {
								"name": "pad_linkmon_hb_rate_0",
								"show_name": "Send rate",
								"desc": "Send rate",
								"required": true,
								"has_default": true,
								"default_value": 10,
								"type": {
									"type": "hb_xmit_rate",
									"base_type": "enum",
									"params": {
									},
									"enum": {
										"1": 1,
										"2": 2,
										"4": 4,
										"5": 5,
										"10": 10,
										"20": 20,
										"25": 25,
										"50": 50,
										"100": 100
									}
								},
								"direct_view": false
							},
							"linkmon_group_1": {
								"name": "linkmon_group_1",
								"show_name": "Pad.2 Link Monitor Group",
								"desc": "Link Monitors",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "group_settings",
									"base_type": "integer",
									"params": {
									}
								},
								"direct_view": false
							},
							"pad_linkmon1": {
								"name": "pad_linkmon1",
								"show_name": "Pad.1 Link",
								"desc": "Port",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "select_port",
									"base_type": "port_id",
									"params": {
									}
								},
								"direct_view": false
							},
							"pad_linkmon_ip1": {
								"name": "pad_linkmon_ip1",
								"show_name": "Pad.1 Peer IP",
								"desc": "IP Address",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "ip_address",
									"base_type": "string",
									"params": {
									}
								},
								"direct_view": false
							},
							"pad_linkmon_hb_1": {
								"name": "pad_linkmon_hb_1",
								"show_name": "Use Heartbeat Monitor",
								"desc": "Eable packet based heartbeat link monitoring",
								"required": false,
								"has_default": true,
								"default_value": false,
								"type": {
									"type": "bool",
									"base_type": "bool",
									"params": {
									}
								},
								"direct_view": false
							},
							"pad_linkmon_hb_pkt_recv_port_1": {
								"name": "pad_linkmon_hb_pkt_recv_port_1",
								"show_name": "HB Recv Port",
								"desc": "Heartbeat recv port",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "select_port",
									"base_type": "port_id",
									"params": {
									}
								},
								"direct_view": false
							},
							"pad_linkmon_hb_pkt_content_1": {
								"name": "pad_linkmon_hb_pkt_content_1",
								"show_name": "Heartbeat Pkt",
								"desc": "Heartbeat Packet Content",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "hexpkt",
									"base_type": "port_id",
									"params": {
									}
								},
								"direct_view": false
							},
							"pad_linkmon_hb_rate_1": {
								"name": "pad_linkmon_hb_rate_1",
								"show_name": "Send rate",
								"desc": "Send rate",
								"required": true,
								"has_default": true,
								"default_value": 10,
								"type": {
									"type": "hb_xmit_rate",
									"base_type": "enum",
									"params": {
									},
									"enum": {
										"1": 1,
										"2": 2,
										"4": 4,
										"5": 5,
										"10": 10,
										"20": 20,
										"25": 25,
										"50": 50,
										"100": 100
									}
								},
								"direct_view": false
							},
							"linkmon_group_2": {
								"name": "linkmon_group_2",
								"show_name": "Pad.3 Link Monitor Group",
								"desc": "Link Monitors",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "group_settings",
									"base_type": "integer",
									"params": {
									}
								},
								"direct_view": false
							},
							"pad_linkmon2": {
								"name": "pad_linkmon2",
								"show_name": "Pad.2 Link",
								"desc": "Port",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "select_port",
									"base_type": "port_id",
									"params": {
									}
								},
								"direct_view": false
							},
							"pad_linkmon_ip2": {
								"name": "pad_linkmon_ip2",
								"show_name": "Pad.2 Peer IP",
								"desc": "IP Address",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "ip_address",
									"base_type": "string",
									"params": {
									}
								},
								"direct_view": false
							},
							"pad_linkmon_hb_2": {
								"name": "pad_linkmon_hb_2",
								"show_name": "Use Heartbeat Monitor",
								"desc": "Eable packet based heartbeat link monitoring",
								"required": false,
								"has_default": true,
								"default_value": false,
								"type": {
									"type": "bool",
									"base_type": "bool",
									"params": {
									}
								},
								"direct_view": false
							},
							"pad_linkmon_hb_pkt_recv_port_2": {
								"name": "pad_linkmon_hb_pkt_recv_port_2",
								"show_name": "HB Recv Port",
								"desc": "Heartbeat recv port",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "select_port",
									"base_type": "port_id",
									"params": {
									}
								},
								"direct_view": false
							},
							"pad_linkmon_hb_pkt_content_2": {
								"name": "pad_linkmon_hb_pkt_content_2",
								"show_name": "Heartbeat Pkt",
								"desc": "Heartbeat Packet Content",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "hexpkt",
									"base_type": "port_id",
									"params": {
									}
								},
								"direct_view": false
							},
							"pad_linkmon_hb_rate_2": {
								"name": "pad_linkmon_hb_rate_2",
								"show_name": "Send rate",
								"desc": "Send rate",
								"required": true,
								"has_default": true,
								"default_value": 10,
								"type": {
									"type": "hb_xmit_rate",
									"base_type": "enum",
									"params": {
									},
									"enum": {
										"1": 1,
										"2": 2,
										"4": 4,
										"5": 5,
										"10": 10,
										"20": 20,
										"25": 25,
										"50": 50,
										"100": 100
									}
								},
								"direct_view": false
							},
							"linkmon_group_3": {
								"name": "linkmon_group_3",
								"show_name": "Pad.4 Link Monitor Group",
								"desc": "Link Monitors",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "group_settings",
									"base_type": "integer",
									"params": {
									}
								},
								"direct_view": false
							},
							"pad_linkmon3": {
								"name": "pad_linkmon3",
								"show_name": "Pad.3 Link",
								"desc": "Port",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "select_port",
									"base_type": "port_id",
									"params": {
									}
								},
								"direct_view": false
							},
							"pad_linkmon_ip3": {
								"name": "pad_linkmon_ip3",
								"show_name": "Pad.3 Peer IP",
								"desc": "IP Address",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "ip_address",
									"base_type": "string",
									"params": {
									}
								},
								"direct_view": false
							},
							"pad_linkmon_hb_3": {
								"name": "pad_linkmon_hb_3",
								"show_name": "Use Heartbeat Monitor",
								"desc": "Eable packet based heartbeat link monitoring",
								"required": false,
								"has_default": true,
								"default_value": false,
								"type": {
									"type": "bool",
									"base_type": "bool",
									"params": {
									}
								},
								"direct_view": false
							},
							"pad_linkmon_hb_pkt_recv_port_3": {
								"name": "pad_linkmon_hb_pkt_recv_port_3",
								"show_name": "HB Recv Port",
								"desc": "Heartbeat recv port",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "select_port",
									"base_type": "port_id",
									"params": {
									}
								},
								"direct_view": false
							},
							"pad_linkmon_hb_pkt_content_3": {
								"name": "pad_linkmon_hb_pkt_content_3",
								"show_name": "Heartbeat Pkt",
								"desc": "Heartbeat Packet Content",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "hexpkt",
									"base_type": "port_id",
									"params": {
									}
								},
								"direct_view": false
							},
							"pad_linkmon_hb_rate_3": {
								"name": "pad_linkmon_hb_rate_3",
								"show_name": "Send rate",
								"desc": "Send rate",
								"required": true,
								"has_default": true,
								"default_value": 10,
								"type": {
									"type": "hb_xmit_rate",
									"base_type": "enum",
									"params": {
									},
									"enum": {
										"1": 1,
										"2": 2,
										"4": 4,
										"5": 5,
										"10": 10,
										"20": 20,
										"25": 25,
										"50": 50,
										"100": 100
									}
								},
								"direct_view": false
							},
							"linkmon_group_4": {
								"name": "linkmon_group_4",
								"show_name": "Pad.5 Link Monitor Group",
								"desc": "Link Monitors",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "group_settings",
									"base_type": "integer",
									"params": {
									}
								},
								"direct_view": false
							},
							"pad_linkmon4": {
								"name": "pad_linkmon4",
								"show_name": "Pad.4 Link",
								"desc": "Port",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "select_port",
									"base_type": "port_id",
									"params": {
									}
								},
								"direct_view": false
							},
							"pad_linkmon_ip4": {
								"name": "pad_linkmon_ip4",
								"show_name": "Pad.4 Peer IP",
								"desc": "IP Address",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "ip_address",
									"base_type": "string",
									"params": {
									}
								},
								"direct_view": false
							},
							"pad_linkmon_hb_4": {
								"name": "pad_linkmon_hb_4",
								"show_name": "Use Heartbeat Monitor",
								"desc": "Eable packet based heartbeat link monitoring",
								"required": false,
								"has_default": true,
								"default_value": false,
								"type": {
									"type": "bool",
									"base_type": "bool",
									"params": {
									}
								},
								"direct_view": false
							},
							"pad_linkmon_hb_pkt_recv_port_4": {
								"name": "pad_linkmon_hb_pkt_recv_port_4",
								"show_name": "HB Recv Port",
								"desc": "Heartbeat recv port",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "select_port",
									"base_type": "port_id",
									"params": {
									}
								},
								"direct_view": false
							},
							"pad_linkmon_hb_pkt_content_4": {
								"name": "pad_linkmon_hb_pkt_content_4",
								"show_name": "Heartbeat Pkt",
								"desc": "Heartbeat Packet Content",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "hexpkt",
									"base_type": "port_id",
									"params": {
									}
								},
								"direct_view": false
							},
							"pad_linkmon_hb_rate_4": {
								"name": "pad_linkmon_hb_rate_4",
								"show_name": "Send rate",
								"desc": "Send rate",
								"required": true,
								"has_default": true,
								"default_value": 10,
								"type": {
									"type": "hb_xmit_rate",
									"base_type": "enum",
									"params": {
									},
									"enum": {
										"1": 1,
										"2": 2,
										"4": 4,
										"5": 5,
										"10": 10,
										"20": 20,
										"25": 25,
										"50": 50,
										"100": 100
									}
								},
								"direct_view": false
							},
							"linkmon_group_5": {
								"name": "linkmon_group_5",
								"show_name": "Pad.6 Link Monitor Group",
								"desc": "Link Monitors",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "group_settings",
									"base_type": "integer",
									"params": {
									}
								},
								"direct_view": false
							},
							"pad_linkmon5": {
								"name": "pad_linkmon5",
								"show_name": "Pad.5 Link",
								"desc": "Port",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "select_port",
									"base_type": "port_id",
									"params": {
									}
								},
								"direct_view": false
							},
							"pad_linkmon_ip5": {
								"name": "pad_linkmon_ip5",
								"show_name": "Pad.5 Peer IP",
								"desc": "IP Address",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "ip_address",
									"base_type": "string",
									"params": {
									}
								},
								"direct_view": false
							},
							"pad_linkmon_hb_5": {
								"name": "pad_linkmon_hb_5",
								"show_name": "Use Heartbeat Monitor",
								"desc": "Eable packet based heartbeat link monitoring",
								"required": false,
								"has_default": true,
								"default_value": false,
								"type": {
									"type": "bool",
									"base_type": "bool",
									"params": {
									}
								},
								"direct_view": false
							},
							"pad_linkmon_hb_pkt_recv_port_5": {
								"name": "pad_linkmon_hb_pkt_recv_port_5",
								"show_name": "HB Recv Port",
								"desc": "Heartbeat recv port",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "select_port",
									"base_type": "port_id",
									"params": {
									}
								},
								"direct_view": false
							},
							"pad_linkmon_hb_pkt_content_5": {
								"name": "pad_linkmon_hb_pkt_content_5",
								"show_name": "Heartbeat Pkt",
								"desc": "Heartbeat Packet Content",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "hexpkt",
									"base_type": "port_id",
									"params": {
									}
								},
								"direct_view": false
							},
							"pad_linkmon_hb_rate_5": {
								"name": "pad_linkmon_hb_rate_5",
								"show_name": "Send rate",
								"desc": "Send rate",
								"required": true,
								"has_default": true,
								"default_value": 10,
								"type": {
									"type": "hb_xmit_rate",
									"base_type": "enum",
									"params": {
									},
									"enum": {
										"1": 1,
										"2": 2,
										"4": 4,
										"5": 5,
										"10": 10,
										"20": 20,
										"25": 25,
										"50": 50,
										"100": 100
									}
								},
								"direct_view": false
							},
							"linkmon_group_6": {
								"name": "linkmon_group_6",
								"show_name": "Pad.7 Link Monitor Group",
								"desc": "Link Monitors",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "group_settings",
									"base_type": "integer",
									"params": {
									}
								},
								"direct_view": false
							},
							"pad_linkmon6": {
								"name": "pad_linkmon6",
								"show_name": "Pad.6 Link",
								"desc": "Port",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "select_port",
									"base_type": "port_id",
									"params": {
									}
								},
								"direct_view": false
							},
							"pad_linkmon_ip6": {
								"name": "pad_linkmon_ip6",
								"show_name": "Pad.6 Peer IP",
								"desc": "IP Address",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "ip_address",
									"base_type": "string",
									"params": {
									}
								},
								"direct_view": false
							},
							"pad_linkmon_hb_6": {
								"name": "pad_linkmon_hb_6",
								"show_name": "Use Heartbeat Monitor",
								"desc": "Eable packet based heartbeat link monitoring",
								"required": false,
								"has_default": true,
								"default_value": false,
								"type": {
									"type": "bool",
									"base_type": "bool",
									"params": {
									}
								},
								"direct_view": false
							},
							"pad_linkmon_hb_pkt_recv_port_6": {
								"name": "pad_linkmon_hb_pkt_recv_port_6",
								"show_name": "HB Recv Port",
								"desc": "Heartbeat recv port",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "select_port",
									"base_type": "port_id",
									"params": {
									}
								},
								"direct_view": false
							},
							"pad_linkmon_hb_pkt_content_6": {
								"name": "pad_linkmon_hb_pkt_content_6",
								"show_name": "Heartbeat Pkt",
								"desc": "Heartbeat Packet Content",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "hexpkt",
									"base_type": "port_id",
									"params": {
									}
								},
								"direct_view": false
							},
							"pad_linkmon_hb_rate_6": {
								"name": "pad_linkmon_hb_rate_6",
								"show_name": "Send rate",
								"desc": "Send rate",
								"required": true,
								"has_default": true,
								"default_value": 10,
								"type": {
									"type": "hb_xmit_rate",
									"base_type": "enum",
									"params": {
									},
									"enum": {
										"1": 1,
										"2": 2,
										"4": 4,
										"5": 5,
										"10": 10,
										"20": 20,
										"25": 25,
										"50": 50,
										"100": 100
									}
								},
								"direct_view": false
							},
							"linkmon_group_7": {
								"name": "linkmon_group_7",
								"show_name": "Pad.8 Link Monitor Group",
								"desc": "Link Monitors",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "group_settings",
									"base_type": "integer",
									"params": {
									}
								},
								"direct_view": false
							},
							"pad_linkmon7": {
								"name": "pad_linkmon7",
								"show_name": "Pad.7 Link",
								"desc": "Port",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "select_port",
									"base_type": "port_id",
									"params": {
									}
								},
								"direct_view": false
							},
							"pad_linkmon_ip7": {
								"name": "pad_linkmon_ip7",
								"show_name": "Pad.7 Peer IP",
								"desc": "IP Address",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "ip_address",
									"base_type": "string",
									"params": {
									}
								},
								"direct_view": false
							},
							"pad_linkmon_hb_7": {
								"name": "pad_linkmon_hb_7",
								"show_name": "Use Heartbeat Monitor",
								"desc": "Eable packet based heartbeat link monitoring",
								"required": false,
								"has_default": true,
								"default_value": false,
								"type": {
									"type": "bool",
									"base_type": "bool",
									"params": {
									}
								},
								"direct_view": false
							},
							"pad_linkmon_hb_pkt_recv_port_7": {
								"name": "pad_linkmon_hb_pkt_recv_port_7",
								"show_name": "HB Recv Port",
								"desc": "Heartbeat recv port",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "select_port",
									"base_type": "port_id",
									"params": {
									}
								},
								"direct_view": false
							},
							"pad_linkmon_hb_pkt_content_7": {
								"name": "pad_linkmon_hb_pkt_content_7",
								"show_name": "Heartbeat Pkt",
								"desc": "Heartbeat Packet Content",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "hexpkt",
									"base_type": "port_id",
									"params": {
									}
								},
								"direct_view": false
							},
							"pad_linkmon_hb_rate_7": {
								"name": "pad_linkmon_hb_rate_7",
								"show_name": "Send rate",
								"desc": "Send rate",
								"required": true,
								"has_default": true,
								"default_value": 10,
								"type": {
									"type": "hb_xmit_rate",
									"base_type": "enum",
									"params": {
									},
									"enum": {
										"1": 1,
										"2": 2,
										"4": 4,
										"5": 5,
										"10": 10,
										"20": 20,
										"25": 25,
										"50": 50,
										"100": 100
									}
								},
								"direct_view": false
							},
							"coreloc": {
								"name": "coreloc",
								"show_name": "Exec Unit",
								"desc": "Use Execution Unit",
								"required": false,
								"has_default": true,
								"default_value": 0,
								"type": {
									"type": "cpu",
									"base_type": "enum",
									"params": {
									},
									"enum": {
										"0": "Auto",
										"1": "ExecUnit.1 S0.C4.0",
										"2": "ExecUnit.2 S0.C5.0",
										"3": "ExecUnit.3 S0.C6.0",
										"4": "ExecUnit.4 S0.C7.0",
										"5": "ExecUnit.5 S0.C8.0",
										"6": "ExecUnit.6 S0.C9.0",
										"7": "ExecUnit.7 S0.C10.0",
										"8": "ExecUnit.8 S0.C11.0",
										"9": "ExecUnit.9 S0.C12.0",
										"10": "ExecUnit.10 S0.C13.0",
										"11": "ExecUnit.11 S0.C14.0",
										"12": "ExecUnit.12 S0.C15.0",
										"13": "ExecUnit.13 S0.C16.0",
										"14": "ExecUnit.14 S0.C17.0",
										"15": "ExecUnit.15 S0.C18.0",
										"16": "ExecUnit.16 S0.C19.0",
										"17": "ExecUnit.17 S0.C20.0",
										"18": "ExecUnit.18 S0.C21.0",
										"19": "ExecUnit.19 S0.C22.0",
										"20": "ExecUnit.20 S0.C23.0",
										"21": "ExecUnit.21 S0.C4.1",
										"22": "ExecUnit.22 S0.C5.1",
										"23": "ExecUnit.23 S0.C6.1",
										"24": "ExecUnit.24 S0.C7.1",
										"25": "ExecUnit.25 S0.C8.1",
										"26": "ExecUnit.26 S0.C9.1",
										"27": "ExecUnit.27 S0.C10.1",
										"28": "ExecUnit.28 S0.C11.1",
										"29": "ExecUnit.29 S0.C12.1",
										"30": "ExecUnit.30 S0.C13.1",
										"31": "ExecUnit.31 S0.C14.1",
										"32": "ExecUnit.32 S0.C15.1",
										"33": "ExecUnit.33 S0.C16.1",
										"34": "ExecUnit.34 S0.C17.1",
										"35": "ExecUnit.35 S0.C18.1",
										"36": "ExecUnit.36 S0.C19.1",
										"37": "ExecUnit.37 S0.C20.1",
										"38": "ExecUnit.38 S0.C21.1",
										"39": "ExecUnit.39 S0.C22.1",
										"40": "ExecUnit.40 S0.C23.1"
									},
									"short_enum": {
										"0": "Auto",
										"1": "ExecUnit.1",
										"2": "ExecUnit.2",
										"3": "ExecUnit.3",
										"4": "ExecUnit.4",
										"5": "ExecUnit.5",
										"6": "ExecUnit.6",
										"7": "ExecUnit.7",
										"8": "ExecUnit.8",
										"9": "ExecUnit.9",
										"10": "ExecUnit.10",
										"11": "ExecUnit.11",
										"12": "ExecUnit.12",
										"13": "ExecUnit.13",
										"14": "ExecUnit.14",
										"15": "ExecUnit.15",
										"16": "ExecUnit.16",
										"17": "ExecUnit.17",
										"18": "ExecUnit.18",
										"19": "ExecUnit.19",
										"20": "ExecUnit.20",
										"21": "ExecUnit.21",
										"22": "ExecUnit.22",
										"23": "ExecUnit.23",
										"24": "ExecUnit.24",
										"25": "ExecUnit.25",
										"26": "ExecUnit.26",
										"27": "ExecUnit.27",
										"28": "ExecUnit.28",
										"29": "ExecUnit.29",
										"30": "ExecUnit.30",
										"31": "ExecUnit.31",
										"32": "ExecUnit.32",
										"33": "ExecUnit.33",
										"34": "ExecUnit.34",
										"35": "ExecUnit.35",
										"36": "ExecUnit.36",
										"37": "ExecUnit.37",
										"38": "ExecUnit.38",
										"39": "ExecUnit.39",
										"40": "ExecUnit.40"
									}
								},
								"direct_view": false
							}
						},
						"connections": {
							"components.egressport": {
								"id": "components.egressport"
							},
							"components.capture": {
								"id": "components.capture"
							},
							"components.aggregator": {
								"id": "components.aggregator"
							},
							"components.replicator": {
								"id": "components.replicator"
							},
							"components.capturev4": {
								"id": "components.capturev4"
							},
							"components.flowexport": {
								"id": "components.flowexport"
							},
							"components.ssltlsdecryptor": {
								"id": "components.ssltlsdecryptor"
							},
							"components.trafficanalyzer": {
								"id": "components.trafficanalyzer"
							},
							"components.mux": {
								"id": "components.mux",
								"count": "n"
							},
							"components.appgateway": {
								"id": "components.appgateway",
								"count": "1"
							},
							"components.detunnel": {
								"id": "components.detunnel"
							},
							"components.ethswitch": {
								"id": "components.ethswitch"
							},
							"components.mbkiller": {
								"id": "components.mbkiller"
							},
							"components.matchaction": {
								"id": "components.matchaction"
							},
							"components.patternmatcher": {
								"id": "components.patternmatcher"
							}
						}
					},
					"egressport": {
						"name": "egressport",
						"show_name": "Egress Port",
						"test_application": false,
						"desc": "Interface Configuration",
						"icon": "components.egressport.png",
						"flow_direction": "left_right",
						"inputs": {
							"in": {
								"name": "in",
								"show_name": "",
								"style": "solid_in_arrow"
							},
							"in1": {
								"name": "in1",
								"show_name": "",
								"style": "solid_in_arrow"
							},
							"in2": {
								"name": "in2",
								"show_name": "",
								"style": "solid_in_arrow"
							}
						},
						"outputs": {
							"out": {
								"name": "out",
								"show_name": "",
								"style": "solid_out_arrow"
							},
							"out1": {
								"name": "out1",
								"show_name": "",
								"style": "solid_out_arrow"
							},
							"out2": {
								"name": "out2",
								"show_name": "",
								"style": "solid_out_arrow"
							}
						},
						"show_load_definition": false,
						"show_msgseq": false,
						"params": {
							"comp_name": {
								"name": "comp_name",
								"show_name": "Name",
								"desc": "Component Name",
								"required": true,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "id",
									"base_type": "string",
									"params": {
									}
								},
								"direct_view": true
							},
							"notes": {
								"name": "notes",
								"show_name": "Notes",
								"desc": "Description and comment about this component",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "note",
									"base_type": "string",
									"params": {
									}
								},
								"direct_view": false
							},
							"port": {
								"name": "port",
								"show_name": "Port",
								"desc": "Port",
								"required": true,
								"has_default": false,
								"default_value": "",
								"type": {
									"type": "test_port",
									"base_type": "port_id",
									"params": {
									}
								},
								"direct_view": true
							},
							"port_speed": {
								"name": "port_speed",
								"show_name": "Speed",
								"desc": "Port Speed",
								"required": true,
								"has_default": true,
								"default_value": 1,
								"type": {
									"type": "port_speed",
									"base_type": "enum",
									"params": {
									},
									"enum": {
										"0": "SFP/SFP+: Auto Select",
										"1": "SFP+: 10Gb Full Duplex",
										"2": "SFP: 1Gb SERDES AN",
										"3": "SFP: 1Gb SERDES Full Duplex",
										"4": "SFP: SGMII AN",
										"5": "SFP: SGMII No AN",
										"6": "QSFP+: 40Gb Full Duplex",
										"7": "SFP+: OC-192/STM-64 9.95Gb WAN",
										"8": "QSFP+: 40Gb XLAUI",
										"9": "QSFP+: 40Gb AutoNeg (KR4,CR4)",
										"10": "RJ-45 10M/100M/1Gb, FD AN",
										"11": "RJ-45 1Gb, FD",
										"12": "QSFP28: 100Gb Full Duplex FEC CL91",
										"13": "SFP28: 25Gb Full Duplex",
										"14": "QSFP+: 40Gb Full Duplex AN",
										"15": "QSFP28: 100Gb Full Duplex AN",
										"16": "QSFP28: 40/100Gb Full Duplex AN",
										"17": "QSFP28: 100Gb Full Duplex FEC CL91",
										"18": "RJ-45 100M/1G/10Gb AN"
									},
									"short_enum": {
										"0": "10G",
										"1": "10G",
										"2": "1G",
										"3": "1G",
										"4": "1G",
										"5": "1G",
										"6": "40G",
										"7": "10G",
										"8": "40G",
										"9": "40G",
										"10": "1G",
										"11": "1G",
										"12": "100G",
										"13": "25G",
										"14": "40A",
										"15": "100A",
										"16": "40/100A",
										"17": "100",
										"18": "1/10G"
									}
								},
								"direct_view": true
							},
							"ip_config_group": {
								"name": "ip_config_group",
								"show_name": "IP Configuration",
								"desc": "IP Configuration",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "group_settings",
									"base_type": "integer",
									"params": {
									}
								},
								"direct_view": false
							},
							"ip_config_enable": {
								"name": "ip_config_enable",
								"show_name": "Attach IP",
								"desc": "Enable the IP Configuration on Port",
								"required": true,
								"has_default": true,
								"default_value": false,
								"type": {
									"type": "bool",
									"base_type": "bool",
									"params": {
									}
								},
								"direct_view": true
							},
							"ip": {
								"name": "ip",
								"show_name": "IP Address",
								"desc": "IP Address",
								"required": true,
								"has_default": true,
								"default_value": "10.0.0.1",
								"type": {
									"type": "ip_address",
									"base_type": "string",
									"params": {
									}
								},
								"direct_view": true
							},
							"netmask": {
								"name": "netmask",
								"show_name": "Netmask",
								"desc": "Network Mask",
								"required": true,
								"has_default": true,
								"default_value": "255.255.255.0",
								"type": {
									"type": "ip_netmask",
									"base_type": "string",
									"params": {
									}
								},
								"direct_view": true
							},
							"gateway": {
								"name": "gateway",
								"show_name": "Gateway",
								"desc": "Gateway",
								"required": false,
								"has_default": false,
								"default_value": "",
								"type": {
									"type": "ip_address",
									"base_type": "string",
									"params": {
									}
								},
								"direct_view": false
							},
							"force_egress_to_ip_set": {
								"name": "force_egress_to_ip_set",
								"show_name": "Force Route to IPs",
								"desc": "Use the egress interface to reach IPs",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "singleline_text",
									"base_type": "string",
									"params": {
									}
								},
								"direct_view": false
							},
							"egress_tagging_group": {
								"name": "egress_tagging_group",
								"show_name": "Tag Configuration",
								"desc": "Tagging Configuration",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "group_settings",
									"base_type": "integer",
									"params": {
									}
								},
								"direct_view": false
							},
							"add_ingress_tag": {
								"name": "add_ingress_tag",
								"show_name": "Use Ingress Tag",
								"desc": "Use the ingress tag assigned to packet at ingress port",
								"required": true,
								"has_default": true,
								"default_value": false,
								"type": {
									"type": "bool",
									"base_type": "bool",
									"params": {
									}
								},
								"direct_view": false
							},
							"tag_enable": {
								"name": "tag_enable",
								"show_name": "Add Tag",
								"desc": "Enable the packets to carry VLAN tag when sent",
								"required": false,
								"has_default": true,
								"default_value": false,
								"type": {
									"type": "bool",
									"base_type": "bool",
									"params": {
									}
								},
								"direct_view": false
							},
							"vlan_id": {
								"name": "vlan_id",
								"show_name": "Tag Value",
								"desc": "Egress VLAN ID that will be inserted into the packet",
								"required": true,
								"has_default": true,
								"default_value": 256,
								"type": {
									"type": "vlan_id",
									"base_type": "integer",
									"params": {
									},
									"range": {
										"min": 2,
										"max": 4095,
										"inclusive": true
									}
								},
								"direct_view": true
							},
							"egress_slice_group": {
								"name": "egress_slice_group",
								"show_name": "Egress Slicer Settings",
								"desc": "Egress slicer settings",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "group_settings",
									"base_type": "integer",
									"params": {
									}
								},
								"direct_view": false
							},
							"egress_slice_enable": {
								"name": "egress_slice_enable",
								"show_name": "Egress Slicer",
								"desc": "Enable packet slicer",
								"required": false,
								"has_default": true,
								"default_value": false,
								"type": {
									"type": "bool",
									"base_type": "bool",
									"params": {
									}
								},
								"direct_view": true
							},
							"slice_size": {
								"name": "slice_size",
								"show_name": "Size",
								"desc": "Size limit",
								"required": false,
								"has_default": true,
								"default_value": 96,
								"type": {
									"type": "integer_range",
									"base_type": "integer",
									"params": {
									},
									"range": {
										"min": 40,
										"max": 1500,
										"inclusive": true
									},
									"fmt": null
								},
								"direct_view": false
							},
							"coreloc": {
								"name": "coreloc",
								"show_name": "Exec Unit",
								"desc": "Use Execution Unit",
								"required": false,
								"has_default": true,
								"default_value": 0,
								"type": {
									"type": "cpu",
									"base_type": "enum",
									"params": {
									},
									"enum": {
										"0": "Auto",
										"1": "ExecUnit.1 S0.C4.0",
										"2": "ExecUnit.2 S0.C5.0",
										"3": "ExecUnit.3 S0.C6.0",
										"4": "ExecUnit.4 S0.C7.0",
										"5": "ExecUnit.5 S0.C8.0",
										"6": "ExecUnit.6 S0.C9.0",
										"7": "ExecUnit.7 S0.C10.0",
										"8": "ExecUnit.8 S0.C11.0",
										"9": "ExecUnit.9 S0.C12.0",
										"10": "ExecUnit.10 S0.C13.0",
										"11": "ExecUnit.11 S0.C14.0",
										"12": "ExecUnit.12 S0.C15.0",
										"13": "ExecUnit.13 S0.C16.0",
										"14": "ExecUnit.14 S0.C17.0",
										"15": "ExecUnit.15 S0.C18.0",
										"16": "ExecUnit.16 S0.C19.0",
										"17": "ExecUnit.17 S0.C20.0",
										"18": "ExecUnit.18 S0.C21.0",
										"19": "ExecUnit.19 S0.C22.0",
										"20": "ExecUnit.20 S0.C23.0",
										"21": "ExecUnit.21 S0.C4.1",
										"22": "ExecUnit.22 S0.C5.1",
										"23": "ExecUnit.23 S0.C6.1",
										"24": "ExecUnit.24 S0.C7.1",
										"25": "ExecUnit.25 S0.C8.1",
										"26": "ExecUnit.26 S0.C9.1",
										"27": "ExecUnit.27 S0.C10.1",
										"28": "ExecUnit.28 S0.C11.1",
										"29": "ExecUnit.29 S0.C12.1",
										"30": "ExecUnit.30 S0.C13.1",
										"31": "ExecUnit.31 S0.C14.1",
										"32": "ExecUnit.32 S0.C15.1",
										"33": "ExecUnit.33 S0.C16.1",
										"34": "ExecUnit.34 S0.C17.1",
										"35": "ExecUnit.35 S0.C18.1",
										"36": "ExecUnit.36 S0.C19.1",
										"37": "ExecUnit.37 S0.C20.1",
										"38": "ExecUnit.38 S0.C21.1",
										"39": "ExecUnit.39 S0.C22.1",
										"40": "ExecUnit.40 S0.C23.1"
									},
									"short_enum": {
										"0": "Auto",
										"1": "ExecUnit.1",
										"2": "ExecUnit.2",
										"3": "ExecUnit.3",
										"4": "ExecUnit.4",
										"5": "ExecUnit.5",
										"6": "ExecUnit.6",
										"7": "ExecUnit.7",
										"8": "ExecUnit.8",
										"9": "ExecUnit.9",
										"10": "ExecUnit.10",
										"11": "ExecUnit.11",
										"12": "ExecUnit.12",
										"13": "ExecUnit.13",
										"14": "ExecUnit.14",
										"15": "ExecUnit.15",
										"16": "ExecUnit.16",
										"17": "ExecUnit.17",
										"18": "ExecUnit.18",
										"19": "ExecUnit.19",
										"20": "ExecUnit.20",
										"21": "ExecUnit.21",
										"22": "ExecUnit.22",
										"23": "ExecUnit.23",
										"24": "ExecUnit.24",
										"25": "ExecUnit.25",
										"26": "ExecUnit.26",
										"27": "ExecUnit.27",
										"28": "ExecUnit.28",
										"29": "ExecUnit.29",
										"30": "ExecUnit.30",
										"31": "ExecUnit.31",
										"32": "ExecUnit.32",
										"33": "ExecUnit.33",
										"34": "ExecUnit.34",
										"35": "ExecUnit.35",
										"36": "ExecUnit.36",
										"37": "ExecUnit.37",
										"38": "ExecUnit.38",
										"39": "ExecUnit.39",
										"40": "ExecUnit.40"
									}
								},
								"direct_view": false
							}
						},
						"connections": {
							"devices.FlowDirector-240": {
								"id": "devices.FlowDirector-240"
							},
							"devices.FlowDirector-640": {
								"id": "devices.FlowDirector-640"
							},
							"devices.FlowMagic-204P": {
								"id": "devices.FlowMagic-204P"
							},
							"devices.FlowMagic-400": {
								"id": "devices.FlowMagic-400"
							},
							"devices.FlowMagic-3200": {
								"id": "devices.FlowMagic-3200"
							},
							"devices.FlowMagic-3240": {
								"id": "devices.FlowMagic-3240"
							},
							"devices.Forensic": {
								"id": "devices.Forensic"
							},
							"devices.Switch": {
								"id": "devices.Switch"
							},
							"devices.Generic Access Point": {
								"id": "devices.Generic Access Point"
							},
							"devices.Controller": {
								"id": "devices.Controller"
							},
							"devices.Broadband Router": {
								"id": "devices.Broadband Router"
							},
							"devices.Router": {
								"id": "devices.Router"
							},
							"devices.Generic Controller": {
								"id": "devices.Generic Controller"
							},
							"devices.Firewall": {
								"id": "devices.Firewall"
							},
							"devices.IPS": {
								"id": "devices.IPS"
							},
							"devices.Call Manager": {
								"id": "devices.Call Manager"
							},
							"devices.Gateway": {
								"id": "devices.Gateway"
							},
							"devices.DSLAM": {
								"id": "devices.DSLAM"
							},
							"devices.Unified Access": {
								"id": "devices.Unified Access"
							}
						}
					},
					"capture": {
						"name": "capture",
						"show_name": "Packet Capture V3",
						"test_application": false,
						"desc": "Network traffic capture and store version 3",
						"icon": "components.capture.png",
						"flow_direction": "left_right",
						"inputs": {
							"in": {
								"name": "in",
								"show_name": "",
								"style": "solid_in_arrow"
							},
							"in1": {
								"name": "in1",
								"show_name": "",
								"style": "solid_in_arrow"
							},
							"in2": {
								"name": "in2",
								"show_name": "",
								"style": "solid_in_arrow"
							}
						},
						"outputs": {
							"out": {
								"name": "out",
								"show_name": "",
								"style": "solid_out_arrow"
							},
							"out1": {
								"name": "out1",
								"show_name": "",
								"style": "solid_out_arrow"
							},
							"out2": {
								"name": "out2",
								"show_name": "",
								"style": "solid_out_arrow"
							}
						},
						"show_load_definition": false,
						"show_msgseq": false,
						"params": {
							"comp_name": {
								"name": "comp_name",
								"show_name": "Name",
								"desc": "Component Name",
								"required": true,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "id",
									"base_type": "string",
									"params": {
									}
								},
								"direct_view": true
							},
							"notes": {
								"name": "notes",
								"show_name": "Notes",
								"desc": "Description and comment about this component",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "note",
									"base_type": "string",
									"params": {
									}
								},
								"direct_view": false
							},
							"storage": {
								"name": "storage",
								"show_name": "Drives",
								"desc": "Disk drives used to store captured traffic",
								"required": true,
								"has_default": true,
								"default_value": [

								],
								"type": {
									"type": "data_storage",
									"base_type": "port_id",
									"params": {
									}
								},
								"direct_view": true
							},
							"rotation_percent": {
								"name": "rotation_percent",
								"show_name": "Rotation Threshold(%)",
								"desc": "Start to rotate the storage when used space is above the percentage",
								"required": false,
								"has_default": true,
								"default_value": 90,
								"type": {
									"type": "integer_range",
									"base_type": "integer",
									"params": {
									},
									"range": {
										"min": 10,
										"max": 100,
										"inclusive": true
									},
									"fmt": null
								},
								"direct_view": false
							},
							"truncation": {
								"name": "truncation",
								"show_name": "Slice Packet",
								"desc": "Slice packet down to the specified size",
								"required": true,
								"has_default": true,
								"default_value": 0,
								"type": {
									"type": "slice",
									"base_type": "enum",
									"params": {
									},
									"enum": {
										"0": "Disable",
										"64": "64 Bytes",
										"80": "80 Bytes",
										"96": "96 Bytes",
										"128": "128 Bytes",
										"192": "192 Bytes",
										"256": "256 Bytes",
										"384": "384 Bytes",
										"512": "512 Bytes",
										"768": "768 Bytes",
										"1024": "1024 Bytes",
										"1280": "1280 Bytes",
										"1336": "1336 Bytes",
										"1440": "1440 Bytes"
									}
								},
								"direct_view": true
							},
							"continuousCapture": {
								"name": "continuousCapture",
								"show_name": "Continuous Capture",
								"desc": "Continuous capture",
								"required": true,
								"has_default": true,
								"default_value": true,
								"type": {
									"type": "bool",
									"base_type": "bool",
									"params": {
									}
								},
								"direct_view": true
							},
							"out_pad_count": {
								"name": "out_pad_count",
								"show_name": "Output Pad Count",
								"desc": "Output Pad Count",
								"required": false,
								"has_default": true,
								"default_value": 1,
								"type": {
									"type": "integer_range",
									"base_type": "integer",
									"params": {
									},
									"range": {
										"min": 1,
										"max": 64,
										"inclusive": true
									},
									"fmt": null
								},
								"direct_view": false
							},
							"coreloc": {
								"name": "coreloc",
								"show_name": "Exec Unit",
								"desc": "Use Execution Unit",
								"required": false,
								"has_default": true,
								"default_value": 0,
								"type": {
									"type": "cpu",
									"base_type": "enum",
									"params": {
									},
									"enum": {
										"0": "Auto",
										"1": "ExecUnit.1 S0.C4.0",
										"2": "ExecUnit.2 S0.C5.0",
										"3": "ExecUnit.3 S0.C6.0",
										"4": "ExecUnit.4 S0.C7.0",
										"5": "ExecUnit.5 S0.C8.0",
										"6": "ExecUnit.6 S0.C9.0",
										"7": "ExecUnit.7 S0.C10.0",
										"8": "ExecUnit.8 S0.C11.0",
										"9": "ExecUnit.9 S0.C12.0",
										"10": "ExecUnit.10 S0.C13.0",
										"11": "ExecUnit.11 S0.C14.0",
										"12": "ExecUnit.12 S0.C15.0",
										"13": "ExecUnit.13 S0.C16.0",
										"14": "ExecUnit.14 S0.C17.0",
										"15": "ExecUnit.15 S0.C18.0",
										"16": "ExecUnit.16 S0.C19.0",
										"17": "ExecUnit.17 S0.C20.0",
										"18": "ExecUnit.18 S0.C21.0",
										"19": "ExecUnit.19 S0.C22.0",
										"20": "ExecUnit.20 S0.C23.0",
										"21": "ExecUnit.21 S0.C4.1",
										"22": "ExecUnit.22 S0.C5.1",
										"23": "ExecUnit.23 S0.C6.1",
										"24": "ExecUnit.24 S0.C7.1",
										"25": "ExecUnit.25 S0.C8.1",
										"26": "ExecUnit.26 S0.C9.1",
										"27": "ExecUnit.27 S0.C10.1",
										"28": "ExecUnit.28 S0.C11.1",
										"29": "ExecUnit.29 S0.C12.1",
										"30": "ExecUnit.30 S0.C13.1",
										"31": "ExecUnit.31 S0.C14.1",
										"32": "ExecUnit.32 S0.C15.1",
										"33": "ExecUnit.33 S0.C16.1",
										"34": "ExecUnit.34 S0.C17.1",
										"35": "ExecUnit.35 S0.C18.1",
										"36": "ExecUnit.36 S0.C19.1",
										"37": "ExecUnit.37 S0.C20.1",
										"38": "ExecUnit.38 S0.C21.1",
										"39": "ExecUnit.39 S0.C22.1",
										"40": "ExecUnit.40 S0.C23.1"
									},
									"short_enum": {
										"0": "Auto",
										"1": "ExecUnit.1",
										"2": "ExecUnit.2",
										"3": "ExecUnit.3",
										"4": "ExecUnit.4",
										"5": "ExecUnit.5",
										"6": "ExecUnit.6",
										"7": "ExecUnit.7",
										"8": "ExecUnit.8",
										"9": "ExecUnit.9",
										"10": "ExecUnit.10",
										"11": "ExecUnit.11",
										"12": "ExecUnit.12",
										"13": "ExecUnit.13",
										"14": "ExecUnit.14",
										"15": "ExecUnit.15",
										"16": "ExecUnit.16",
										"17": "ExecUnit.17",
										"18": "ExecUnit.18",
										"19": "ExecUnit.19",
										"20": "ExecUnit.20",
										"21": "ExecUnit.21",
										"22": "ExecUnit.22",
										"23": "ExecUnit.23",
										"24": "ExecUnit.24",
										"25": "ExecUnit.25",
										"26": "ExecUnit.26",
										"27": "ExecUnit.27",
										"28": "ExecUnit.28",
										"29": "ExecUnit.29",
										"30": "ExecUnit.30",
										"31": "ExecUnit.31",
										"32": "ExecUnit.32",
										"33": "ExecUnit.33",
										"34": "ExecUnit.34",
										"35": "ExecUnit.35",
										"36": "ExecUnit.36",
										"37": "ExecUnit.37",
										"38": "ExecUnit.38",
										"39": "ExecUnit.39",
										"40": "ExecUnit.40"
									}
								},
								"direct_view": false
							}
						},
						"connections": {
							"components.postcaptureanalyzer": {
								"id": "components.postcaptureanalyzer",
								"count": "1"
							}
						}
					},
					"pcapuploader": {
						"name": "pcapuploader",
						"show_name": "PCAP Uploader",
						"test_application": false,
						"desc": "Provide packet injection by uploading PCAP file",
						"icon": "components.pcapimportor.png",
						"flow_direction": "left_right",
						"inputs": {
							"in": {
								"name": "in",
								"show_name": "",
								"style": "solid_in_arrow"
							},
							"in1": {
								"name": "in1",
								"show_name": "",
								"style": "solid_in_arrow"
							},
							"in2": {
								"name": "in2",
								"show_name": "",
								"style": "solid_in_arrow"
							}
						},
						"outputs": {
							"out": {
								"name": "out",
								"show_name": "",
								"style": "solid_out_arrow"
							},
							"out1": {
								"name": "out1",
								"show_name": "",
								"style": "solid_out_arrow"
							},
							"out2": {
								"name": "out2",
								"show_name": "",
								"style": "solid_out_arrow"
							}
						},
						"show_load_definition": false,
						"show_msgseq": false,
						"params": {
							"comp_name": {
								"name": "comp_name",
								"show_name": "Name",
								"desc": "Component Name",
								"required": true,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "id",
									"base_type": "string",
									"params": {
									}
								},
								"direct_view": true
							},
							"notes": {
								"name": "notes",
								"show_name": "Notes",
								"desc": "Description and comment about this component",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "note",
									"base_type": "string",
									"params": {
									}
								},
								"direct_view": false
							},
							"coreloc": {
								"name": "coreloc",
								"show_name": "Exec Unit",
								"desc": "Use Execution Unit",
								"required": false,
								"has_default": true,
								"default_value": 0,
								"type": {
									"type": "cpu",
									"base_type": "enum",
									"params": {
									},
									"enum": {
										"0": "Auto",
										"1": "ExecUnit.1 S0.C4.0",
										"2": "ExecUnit.2 S0.C5.0",
										"3": "ExecUnit.3 S0.C6.0",
										"4": "ExecUnit.4 S0.C7.0",
										"5": "ExecUnit.5 S0.C8.0",
										"6": "ExecUnit.6 S0.C9.0",
										"7": "ExecUnit.7 S0.C10.0",
										"8": "ExecUnit.8 S0.C11.0",
										"9": "ExecUnit.9 S0.C12.0",
										"10": "ExecUnit.10 S0.C13.0",
										"11": "ExecUnit.11 S0.C14.0",
										"12": "ExecUnit.12 S0.C15.0",
										"13": "ExecUnit.13 S0.C16.0",
										"14": "ExecUnit.14 S0.C17.0",
										"15": "ExecUnit.15 S0.C18.0",
										"16": "ExecUnit.16 S0.C19.0",
										"17": "ExecUnit.17 S0.C20.0",
										"18": "ExecUnit.18 S0.C21.0",
										"19": "ExecUnit.19 S0.C22.0",
										"20": "ExecUnit.20 S0.C23.0",
										"21": "ExecUnit.21 S0.C4.1",
										"22": "ExecUnit.22 S0.C5.1",
										"23": "ExecUnit.23 S0.C6.1",
										"24": "ExecUnit.24 S0.C7.1",
										"25": "ExecUnit.25 S0.C8.1",
										"26": "ExecUnit.26 S0.C9.1",
										"27": "ExecUnit.27 S0.C10.1",
										"28": "ExecUnit.28 S0.C11.1",
										"29": "ExecUnit.29 S0.C12.1",
										"30": "ExecUnit.30 S0.C13.1",
										"31": "ExecUnit.31 S0.C14.1",
										"32": "ExecUnit.32 S0.C15.1",
										"33": "ExecUnit.33 S0.C16.1",
										"34": "ExecUnit.34 S0.C17.1",
										"35": "ExecUnit.35 S0.C18.1",
										"36": "ExecUnit.36 S0.C19.1",
										"37": "ExecUnit.37 S0.C20.1",
										"38": "ExecUnit.38 S0.C21.1",
										"39": "ExecUnit.39 S0.C22.1",
										"40": "ExecUnit.40 S0.C23.1"
									},
									"short_enum": {
										"0": "Auto",
										"1": "ExecUnit.1",
										"2": "ExecUnit.2",
										"3": "ExecUnit.3",
										"4": "ExecUnit.4",
										"5": "ExecUnit.5",
										"6": "ExecUnit.6",
										"7": "ExecUnit.7",
										"8": "ExecUnit.8",
										"9": "ExecUnit.9",
										"10": "ExecUnit.10",
										"11": "ExecUnit.11",
										"12": "ExecUnit.12",
										"13": "ExecUnit.13",
										"14": "ExecUnit.14",
										"15": "ExecUnit.15",
										"16": "ExecUnit.16",
										"17": "ExecUnit.17",
										"18": "ExecUnit.18",
										"19": "ExecUnit.19",
										"20": "ExecUnit.20",
										"21": "ExecUnit.21",
										"22": "ExecUnit.22",
										"23": "ExecUnit.23",
										"24": "ExecUnit.24",
										"25": "ExecUnit.25",
										"26": "ExecUnit.26",
										"27": "ExecUnit.27",
										"28": "ExecUnit.28",
										"29": "ExecUnit.29",
										"30": "ExecUnit.30",
										"31": "ExecUnit.31",
										"32": "ExecUnit.32",
										"33": "ExecUnit.33",
										"34": "ExecUnit.34",
										"35": "ExecUnit.35",
										"36": "ExecUnit.36",
										"37": "ExecUnit.37",
										"38": "ExecUnit.38",
										"39": "ExecUnit.39",
										"40": "ExecUnit.40"
									}
								},
								"direct_view": false
							}
						},
						"connections": {
							"components.aggregator": {
								"id": "components.aggregator"
							},
							"components.replicator": {
								"id": "components.replicator"
							},
							"components.flowexport": {
								"id": "components.flowexport"
							},
							"components.capture": {
								"id": "components.capture"
							},
							"components.egressport": {
								"id": "components.egressport"
							},
							"components.filter": {
								"id": "components.filter"
							},
							"components.mux": {
								"id": "components.mux",
								"count": "n"
							},
							"components.mbkiller": {
								"id": "components.mbkiller"
							}
						}
					},
					"flowexport": {
						"name": "flowexport",
						"show_name": "NetFlow Exporter",
						"test_application": false,
						"desc": "NetFlow V5, V9, IPFIX Exporter Module",
						"icon": "components.flowexport.png",
						"flow_direction": "left_right",
						"inputs": {
							"in": {
								"name": "in",
								"show_name": "",
								"style": "solid_in_arrow"
							},
							"in1": {
								"name": "in1",
								"show_name": "",
								"style": "solid_in_arrow"
							},
							"in2": {
								"name": "in2",
								"show_name": "",
								"style": "solid_in_arrow"
							}
						},
						"outputs": {
							"out": {
								"name": "out",
								"show_name": "",
								"style": "solid_out_arrow"
							},
							"out1": {
								"name": "out1",
								"show_name": "",
								"style": "solid_out_arrow"
							},
							"out2": {
								"name": "out2",
								"show_name": "",
								"style": "solid_out_arrow"
							}
						},
						"show_load_definition": false,
						"show_msgseq": false,
						"params": {
							"comp_name": {
								"name": "comp_name",
								"show_name": "Name",
								"desc": "Component Name",
								"required": true,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "id",
									"base_type": "string",
									"params": {
									}
								},
								"direct_view": true
							},
							"notes": {
								"name": "notes",
								"show_name": "Notes",
								"desc": "Description and comment about this component",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "note",
									"base_type": "string",
									"params": {
									}
								},
								"direct_view": false
							},
							"flow_collector_version": {
								"name": "flow_collector_version",
								"show_name": "Flow Collector Version",
								"desc": "Flow Collector Version",
								"required": true,
								"has_default": true,
								"default_value": 1,
								"type": {
									"type": "flowexport_version",
									"base_type": "enum",
									"params": {
									},
									"enum": {
										"0": "NetFlow V5",
										"1": "NetFlow V9",
										"2": "IPFIX/NetFlow V10"
									}
								},
								"direct_view": true
							},
							"flow_collector_ip": {
								"name": "flow_collector_ip",
								"show_name": "Flow Collector IP",
								"desc": "Flow Collector destination IPv4 address",
								"required": true,
								"has_default": true,
								"default_value": "1.0.0.200",
								"type": {
									"type": "ip_address",
									"base_type": "string",
									"params": {
									}
								},
								"direct_view": true
							},
							"flow_collector_port": {
								"name": "flow_collector_port",
								"show_name": "Flow Collector Port",
								"desc": "Flow Collector destination Port address",
								"required": true,
								"has_default": true,
								"default_value": 2055,
								"type": {
									"type": "integer_range",
									"base_type": "integer",
									"params": {
									},
									"range": {
										"min": 1,
										"max": 65535,
										"inclusive": true
									},
									"fmt": null
								},
								"direct_view": true
							},
							"flow_update_interval": {
								"name": "flow_update_interval",
								"show_name": "Report Interval (Sec)",
								"desc": "Flow Update Interval (5-300) seconds",
								"required": true,
								"has_default": true,
								"default_value": 30,
								"type": {
									"type": "integer_range",
									"base_type": "integer",
									"params": {
									},
									"range": {
										"min": 1,
										"max": 3000,
										"inclusive": true
									},
									"fmt": null
								},
								"direct_view": true
							},
							"flow_input_ifid": {
								"name": "flow_input_ifid",
								"show_name": "Input IfIndex ",
								"desc": "Input Interface ID",
								"required": false,
								"has_default": true,
								"default_value": 0,
								"type": {
									"type": "integer_range",
									"base_type": "integer",
									"params": {
									},
									"range": {
										"min": 0,
										"max": 65535,
										"inclusive": true
									},
									"fmt": null
								},
								"direct_view": false
							},
							"flow_output_ifid": {
								"name": "flow_output_ifid",
								"show_name": "Output IfIndex ",
								"desc": "Output Interface ID",
								"required": false,
								"has_default": true,
								"default_value": 0,
								"type": {
									"type": "integer_range",
									"base_type": "integer",
									"params": {
									},
									"range": {
										"min": 0,
										"max": 65535,
										"inclusive": true
									},
									"fmt": null
								},
								"direct_view": false
							},
							"flow_bidir_export_policy": {
								"name": "flow_bidir_export_policy",
								"show_name": "Export Flows",
								"desc": "Export flows that meet conditions",
								"required": true,
								"has_default": true,
								"default_value": 0,
								"type": {
									"type": "port_loopback",
									"base_type": "enum",
									"params": {
									},
									"enum": {
										"0": "All",
										"1": "Bidirectional flows",
										"2": "Unidirectional flows"
									}
								},
								"direct_view": false
							},
							"coreloc": {
								"name": "coreloc",
								"show_name": "Exec Unit",
								"desc": "Use Execution Unit",
								"required": false,
								"has_default": true,
								"default_value": 0,
								"type": {
									"type": "cpu",
									"base_type": "enum",
									"params": {
									},
									"enum": {
										"0": "Auto",
										"1": "ExecUnit.1 S0.C4.0",
										"2": "ExecUnit.2 S0.C5.0",
										"3": "ExecUnit.3 S0.C6.0",
										"4": "ExecUnit.4 S0.C7.0",
										"5": "ExecUnit.5 S0.C8.0",
										"6": "ExecUnit.6 S0.C9.0",
										"7": "ExecUnit.7 S0.C10.0",
										"8": "ExecUnit.8 S0.C11.0",
										"9": "ExecUnit.9 S0.C12.0",
										"10": "ExecUnit.10 S0.C13.0",
										"11": "ExecUnit.11 S0.C14.0",
										"12": "ExecUnit.12 S0.C15.0",
										"13": "ExecUnit.13 S0.C16.0",
										"14": "ExecUnit.14 S0.C17.0",
										"15": "ExecUnit.15 S0.C18.0",
										"16": "ExecUnit.16 S0.C19.0",
										"17": "ExecUnit.17 S0.C20.0",
										"18": "ExecUnit.18 S0.C21.0",
										"19": "ExecUnit.19 S0.C22.0",
										"20": "ExecUnit.20 S0.C23.0",
										"21": "ExecUnit.21 S0.C4.1",
										"22": "ExecUnit.22 S0.C5.1",
										"23": "ExecUnit.23 S0.C6.1",
										"24": "ExecUnit.24 S0.C7.1",
										"25": "ExecUnit.25 S0.C8.1",
										"26": "ExecUnit.26 S0.C9.1",
										"27": "ExecUnit.27 S0.C10.1",
										"28": "ExecUnit.28 S0.C11.1",
										"29": "ExecUnit.29 S0.C12.1",
										"30": "ExecUnit.30 S0.C13.1",
										"31": "ExecUnit.31 S0.C14.1",
										"32": "ExecUnit.32 S0.C15.1",
										"33": "ExecUnit.33 S0.C16.1",
										"34": "ExecUnit.34 S0.C17.1",
										"35": "ExecUnit.35 S0.C18.1",
										"36": "ExecUnit.36 S0.C19.1",
										"37": "ExecUnit.37 S0.C20.1",
										"38": "ExecUnit.38 S0.C21.1",
										"39": "ExecUnit.39 S0.C22.1",
										"40": "ExecUnit.40 S0.C23.1"
									},
									"short_enum": {
										"0": "Auto",
										"1": "ExecUnit.1",
										"2": "ExecUnit.2",
										"3": "ExecUnit.3",
										"4": "ExecUnit.4",
										"5": "ExecUnit.5",
										"6": "ExecUnit.6",
										"7": "ExecUnit.7",
										"8": "ExecUnit.8",
										"9": "ExecUnit.9",
										"10": "ExecUnit.10",
										"11": "ExecUnit.11",
										"12": "ExecUnit.12",
										"13": "ExecUnit.13",
										"14": "ExecUnit.14",
										"15": "ExecUnit.15",
										"16": "ExecUnit.16",
										"17": "ExecUnit.17",
										"18": "ExecUnit.18",
										"19": "ExecUnit.19",
										"20": "ExecUnit.20",
										"21": "ExecUnit.21",
										"22": "ExecUnit.22",
										"23": "ExecUnit.23",
										"24": "ExecUnit.24",
										"25": "ExecUnit.25",
										"26": "ExecUnit.26",
										"27": "ExecUnit.27",
										"28": "ExecUnit.28",
										"29": "ExecUnit.29",
										"30": "ExecUnit.30",
										"31": "ExecUnit.31",
										"32": "ExecUnit.32",
										"33": "ExecUnit.33",
										"34": "ExecUnit.34",
										"35": "ExecUnit.35",
										"36": "ExecUnit.36",
										"37": "ExecUnit.37",
										"38": "ExecUnit.38",
										"39": "ExecUnit.39",
										"40": "ExecUnit.40"
									}
								},
								"direct_view": false
							}
						},
						"connections": {
							"components.egressport": {
								"id": "components.egressport",
								"count": "1"
							}
						}
					},
					"ipmask": {
						"name": "ipmask",
						"show_name": "Field Operator",
						"test_application": false,
						"desc": "Operate the packet fields",
						"icon": "components.ipmasking.png",
						"flow_direction": "left_right",
						"inputs": {
							"in": {
								"name": "in",
								"show_name": "",
								"style": "solid_in_arrow"
							},
							"in1": {
								"name": "in1",
								"show_name": "",
								"style": "solid_in_arrow"
							},
							"in2": {
								"name": "in2",
								"show_name": "",
								"style": "solid_in_arrow"
							}
						},
						"outputs": {
							"out": {
								"name": "out",
								"show_name": "",
								"style": "solid_out_arrow"
							},
							"out1": {
								"name": "out1",
								"show_name": "",
								"style": "solid_out_arrow"
							},
							"out2": {
								"name": "out2",
								"show_name": "",
								"style": "solid_out_arrow"
							}
						},
						"show_load_definition": false,
						"show_msgseq": false,
						"params": {
							"comp_name": {
								"name": "comp_name",
								"show_name": "Name",
								"desc": "Component Name",
								"required": true,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "id",
									"base_type": "string",
									"params": {
									}
								},
								"direct_view": true
							},
							"notes": {
								"name": "notes",
								"show_name": "Notes",
								"desc": "Description and comment about this component",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "note",
									"base_type": "string",
									"params": {
									}
								},
								"direct_view": false
							},
							"srcipMaskEn": {
								"name": "srcipMaskEn",
								"show_name": "Operate SIP",
								"desc": "Change the source IP",
								"required": true,
								"has_default": true,
								"default_value": true,
								"type": {
									"type": "bool",
									"base_type": "bool",
									"params": {
									}
								},
								"direct_view": true
							},
							"dstipMaskEn": {
								"name": "dstipMaskEn",
								"show_name": "Operate DIP",
								"desc": "Change the destination IP",
								"required": true,
								"has_default": true,
								"default_value": true,
								"type": {
									"type": "bool",
									"base_type": "bool",
									"params": {
									}
								},
								"direct_view": true
							},
							"sportMaskEn": {
								"name": "sportMaskEn",
								"show_name": "Operate SPort",
								"desc": "Change the source port",
								"required": true,
								"has_default": true,
								"default_value": false,
								"type": {
									"type": "bool",
									"base_type": "bool",
									"params": {
									}
								},
								"direct_view": true
							},
							"dportMaskEn": {
								"name": "dportMaskEn",
								"show_name": "Operate DPort",
								"desc": "Change the destination port",
								"required": true,
								"has_default": true,
								"default_value": false,
								"type": {
									"type": "bool",
									"base_type": "bool",
									"params": {
									}
								},
								"direct_view": true
							},
							"mapMethod": {
								"name": "mapMethod",
								"show_name": "Map Method",
								"desc": "Method to map the fields",
								"required": true,
								"has_default": true,
								"default_value": 0,
								"type": {
									"type": "ip_map_methods",
									"base_type": "enum",
									"params": {
									},
									"enum": {
										"0": "Seeded random",
										"1": "Inc by value"
									}
								},
								"direct_view": true
							},
							"seededRandomGroup": {
								"name": "seededRandomGroup",
								"show_name": "Seeded Random Sequence Settings",
								"desc": "Use seeded random sequence to update IP",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "group_settings",
									"base_type": "integer",
									"params": {
									}
								},
								"direct_view": false
							},
							"clonePacket": {
								"name": "clonePacket",
								"show_name": "Copy Packet",
								"desc": "Copy the original packet before mapping",
								"required": true,
								"has_default": true,
								"default_value": false,
								"type": {
									"type": "bool",
									"base_type": "bool",
									"params": {
									}
								},
								"direct_view": false
							},
							"seed": {
								"name": "seed",
								"show_name": "Seed",
								"desc": "Mask generator seed, 32bit integer",
								"required": true,
								"has_default": true,
								"default_value": 1612918382,
								"type": {
									"type": "integer_range",
									"base_type": "integer",
									"params": {
									},
									"range": {
										"min": 0,
										"max": 4294967295,
										"inclusive": true
									},
									"fmt": null
								},
								"direct_view": false
							},
							"storeIPMap": {
								"name": "storeIPMap",
								"show_name": "Keep in CSV",
								"desc": "Stores IP address into CSV file",
								"required": true,
								"has_default": true,
								"default_value": false,
								"type": {
									"type": "bool",
									"base_type": "bool",
									"params": {
									}
								},
								"direct_view": false
							},
							"maxMemEntries": {
								"name": "maxMemEntries",
								"show_name": "Max CSV IP Entries",
								"desc": "Maximum number of IP entries in CSV",
								"required": true,
								"has_default": true,
								"default_value": 1000000,
								"type": {
									"type": "integer_range",
									"base_type": "integer",
									"params": {
									},
									"range": {
										"min": 1000000,
										"max": 100000000,
										"inclusive": true
									},
									"fmt": null
								},
								"direct_view": false
							},
							"valueGroup": {
								"name": "valueGroup",
								"show_name": "Inc by Value Settings",
								"desc": "Update address by value",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "group_settings",
									"base_type": "integer",
									"params": {
									}
								},
								"direct_view": false
							},
							"pktRepCount": {
								"name": "pktRepCount",
								"show_name": "New Pkt. Count",
								"desc": "Number of packets to generate",
								"required": true,
								"has_default": true,
								"default_value": 0,
								"type": {
									"type": "integer_range",
									"base_type": "integer",
									"params": {
									},
									"range": {
										"min": 0,
										"max": 4294967295,
										"inclusive": true
									},
									"fmt": null
								},
								"direct_view": false
							},
							"sipValueStarts": {
								"name": "sipValueStarts",
								"show_name": "SIP Value Base",
								"desc": "New Value=Base+Inc",
								"required": true,
								"has_default": true,
								"default_value": 1,
								"type": {
									"type": "integer_range",
									"base_type": "integer",
									"params": {
									},
									"range": {
										"min": 0,
										"max": 4294967295,
										"inclusive": true
									},
									"fmt": null
								},
								"direct_view": false
							},
							"sipValueCount": {
								"name": "sipValueCount",
								"show_name": "Count",
								"desc": "Total count",
								"required": true,
								"has_default": true,
								"default_value": 1,
								"type": {
									"type": "integer_range",
									"base_type": "integer",
									"params": {
									},
									"range": {
										"min": 0,
										"max": 4294967295,
										"inclusive": true
									},
									"fmt": null
								},
								"direct_view": false
							},
							"dipValueStarts": {
								"name": "dipValueStarts",
								"show_name": "DIP Value Base",
								"desc": "New Value=Base+Inc",
								"required": true,
								"has_default": true,
								"default_value": 1,
								"type": {
									"type": "integer_range",
									"base_type": "integer",
									"params": {
									},
									"range": {
										"min": 0,
										"max": 4294967295,
										"inclusive": true
									},
									"fmt": null
								},
								"direct_view": false
							},
							"dipValueCount": {
								"name": "dipValueCount",
								"show_name": "Count",
								"desc": "Total count",
								"required": true,
								"has_default": true,
								"default_value": 1,
								"type": {
									"type": "integer_range",
									"base_type": "integer",
									"params": {
									},
									"range": {
										"min": 0,
										"max": 4294967295,
										"inclusive": true
									},
									"fmt": null
								},
								"direct_view": false
							},
							"sportValueStarts": {
								"name": "sportValueStarts",
								"show_name": "SPort Value Base",
								"desc": "New Value=Base+Inc",
								"required": true,
								"has_default": true,
								"default_value": 1,
								"type": {
									"type": "integer_range",
									"base_type": "integer",
									"params": {
									},
									"range": {
										"min": 0,
										"max": 4294967295,
										"inclusive": true
									},
									"fmt": null
								},
								"direct_view": false
							},
							"sportValueCount": {
								"name": "sportValueCount",
								"show_name": "Count",
								"desc": "Total count",
								"required": true,
								"has_default": true,
								"default_value": 1,
								"type": {
									"type": "integer_range",
									"base_type": "integer",
									"params": {
									},
									"range": {
										"min": 0,
										"max": 4294967295,
										"inclusive": true
									},
									"fmt": null
								},
								"direct_view": false
							},
							"dportValueStarts": {
								"name": "dportValueStarts",
								"show_name": "DPort Value Base",
								"desc": "New Value=Base+Inc",
								"required": true,
								"has_default": true,
								"default_value": 1,
								"type": {
									"type": "integer_range",
									"base_type": "integer",
									"params": {
									},
									"range": {
										"min": 0,
										"max": 4294967295,
										"inclusive": true
									},
									"fmt": null
								},
								"direct_view": false
							},
							"dportValueCount": {
								"name": "dportValueCount",
								"show_name": "Count",
								"desc": "Total count",
								"required": true,
								"has_default": true,
								"default_value": 1,
								"type": {
									"type": "integer_range",
									"base_type": "integer",
									"params": {
									},
									"range": {
										"min": 0,
										"max": 4294967295,
										"inclusive": true
									},
									"fmt": null
								},
								"direct_view": false
							},
							"coreloc": {
								"name": "coreloc",
								"show_name": "Exec Unit",
								"desc": "Use Execution Unit",
								"required": false,
								"has_default": true,
								"default_value": 0,
								"type": {
									"type": "cpu",
									"base_type": "enum",
									"params": {
									},
									"enum": {
										"0": "Auto",
										"1": "ExecUnit.1 S0.C4.0",
										"2": "ExecUnit.2 S0.C5.0",
										"3": "ExecUnit.3 S0.C6.0",
										"4": "ExecUnit.4 S0.C7.0",
										"5": "ExecUnit.5 S0.C8.0",
										"6": "ExecUnit.6 S0.C9.0",
										"7": "ExecUnit.7 S0.C10.0",
										"8": "ExecUnit.8 S0.C11.0",
										"9": "ExecUnit.9 S0.C12.0",
										"10": "ExecUnit.10 S0.C13.0",
										"11": "ExecUnit.11 S0.C14.0",
										"12": "ExecUnit.12 S0.C15.0",
										"13": "ExecUnit.13 S0.C16.0",
										"14": "ExecUnit.14 S0.C17.0",
										"15": "ExecUnit.15 S0.C18.0",
										"16": "ExecUnit.16 S0.C19.0",
										"17": "ExecUnit.17 S0.C20.0",
										"18": "ExecUnit.18 S0.C21.0",
										"19": "ExecUnit.19 S0.C22.0",
										"20": "ExecUnit.20 S0.C23.0",
										"21": "ExecUnit.21 S0.C4.1",
										"22": "ExecUnit.22 S0.C5.1",
										"23": "ExecUnit.23 S0.C6.1",
										"24": "ExecUnit.24 S0.C7.1",
										"25": "ExecUnit.25 S0.C8.1",
										"26": "ExecUnit.26 S0.C9.1",
										"27": "ExecUnit.27 S0.C10.1",
										"28": "ExecUnit.28 S0.C11.1",
										"29": "ExecUnit.29 S0.C12.1",
										"30": "ExecUnit.30 S0.C13.1",
										"31": "ExecUnit.31 S0.C14.1",
										"32": "ExecUnit.32 S0.C15.1",
										"33": "ExecUnit.33 S0.C16.1",
										"34": "ExecUnit.34 S0.C17.1",
										"35": "ExecUnit.35 S0.C18.1",
										"36": "ExecUnit.36 S0.C19.1",
										"37": "ExecUnit.37 S0.C20.1",
										"38": "ExecUnit.38 S0.C21.1",
										"39": "ExecUnit.39 S0.C22.1",
										"40": "ExecUnit.40 S0.C23.1"
									},
									"short_enum": {
										"0": "Auto",
										"1": "ExecUnit.1",
										"2": "ExecUnit.2",
										"3": "ExecUnit.3",
										"4": "ExecUnit.4",
										"5": "ExecUnit.5",
										"6": "ExecUnit.6",
										"7": "ExecUnit.7",
										"8": "ExecUnit.8",
										"9": "ExecUnit.9",
										"10": "ExecUnit.10",
										"11": "ExecUnit.11",
										"12": "ExecUnit.12",
										"13": "ExecUnit.13",
										"14": "ExecUnit.14",
										"15": "ExecUnit.15",
										"16": "ExecUnit.16",
										"17": "ExecUnit.17",
										"18": "ExecUnit.18",
										"19": "ExecUnit.19",
										"20": "ExecUnit.20",
										"21": "ExecUnit.21",
										"22": "ExecUnit.22",
										"23": "ExecUnit.23",
										"24": "ExecUnit.24",
										"25": "ExecUnit.25",
										"26": "ExecUnit.26",
										"27": "ExecUnit.27",
										"28": "ExecUnit.28",
										"29": "ExecUnit.29",
										"30": "ExecUnit.30",
										"31": "ExecUnit.31",
										"32": "ExecUnit.32",
										"33": "ExecUnit.33",
										"34": "ExecUnit.34",
										"35": "ExecUnit.35",
										"36": "ExecUnit.36",
										"37": "ExecUnit.37",
										"38": "ExecUnit.38",
										"39": "ExecUnit.39",
										"40": "ExecUnit.40"
									}
								},
								"direct_view": false
							}
						},
						"connections": {
							"components.aggregator": {
								"id": "components.aggregator"
							},
							"components.replicator": {
								"id": "components.replicator"
							},
							"components.flowexport": {
								"id": "components.flowexport"
							},
							"components.capture": {
								"id": "components.capture"
							},
							"components.capturev4": {
								"id": "components.capturev4"
							},
							"components.egressport": {
								"id": "components.egressport"
							},
							"components.filter": {
								"id": "components.filter"
							},
							"components.mux": {
								"id": "components.mux",
								"count": "n"
							},
							"components.mbkiller": {
								"id": "components.mbkiller"
							}
						}
					},
					"trafficanalyzer": {
						"name": "trafficanalyzer",
						"show_name": "Realtime Traffic Analyzer",
						"test_application": false,
						"desc": "Realtime Network Performance Monitor and Traffic Analyzer",
						"icon": "components.rtpstreamanalysis.png",
						"flow_direction": "left_right",
						"inputs": {
							"in": {
								"name": "in",
								"show_name": "",
								"style": "solid_in_arrow"
							},
							"in1": {
								"name": "in1",
								"show_name": "",
								"style": "solid_in_arrow"
							},
							"in2": {
								"name": "in2",
								"show_name": "",
								"style": "solid_in_arrow"
							}
						},
						"outputs": {
							"out": {
								"name": "out",
								"show_name": "",
								"style": "solid_out_arrow"
							},
							"out1": {
								"name": "out1",
								"show_name": "",
								"style": "solid_out_arrow"
							},
							"out2": {
								"name": "out2",
								"show_name": "",
								"style": "solid_out_arrow"
							}
						},
						"show_load_definition": false,
						"show_msgseq": false,
						"params": {
							"comp_name": {
								"name": "comp_name",
								"show_name": "Name",
								"desc": "Component Name",
								"required": true,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "id",
									"base_type": "string",
									"params": {
									}
								},
								"direct_view": true
							},
							"notes": {
								"name": "notes",
								"show_name": "Notes",
								"desc": "Description and comment about this component",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "note",
									"base_type": "string",
									"params": {
									}
								},
								"direct_view": false
							},
							"general_attribute_group": {
								"name": "general_attribute_group",
								"show_name": "General Settings",
								"desc": "General Settings",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "group_settings",
									"base_type": "integer",
									"params": {
									}
								},
								"direct_view": false
							},
							"keep_performance_database": {
								"name": "keep_performance_database",
								"show_name": "Keep Records",
								"desc": "Store the performance records, otherwise will discard records older than 1 hour",
								"required": true,
								"has_default": true,
								"default_value": true,
								"type": {
									"type": "bool",
									"base_type": "bool",
									"params": {
									}
								},
								"direct_view": true
							},
							"traffic_breakdown_enable": {
								"name": "traffic_breakdown_enable",
								"show_name": "Traffic Breakdown",
								"desc": "Enable traffic breakdown analysis",
								"required": true,
								"has_default": true,
								"default_value": true,
								"type": {
									"type": "bool",
									"base_type": "bool",
									"params": {
									}
								},
								"direct_view": true
							},
							"events_log_enable": {
								"name": "events_log_enable",
								"show_name": "Events Collection",
								"desc": "Enable event collection for realtime analysis",
								"required": true,
								"has_default": true,
								"default_value": false,
								"type": {
									"type": "bool",
									"base_type": "bool",
									"params": {
									}
								},
								"direct_view": true
							},
							"rtp_ana_enable": {
								"name": "rtp_ana_enable",
								"show_name": "RTP Analyzer",
								"desc": "Enable RTP traffic analysis",
								"required": true,
								"has_default": true,
								"default_value": false,
								"type": {
									"type": "bool",
									"base_type": "bool",
									"params": {
									}
								},
								"direct_view": true
							},
							"topn_enable": {
								"name": "topn_enable",
								"show_name": "TopN Analyzer",
								"desc": "Enable TopN traffic analysis",
								"required": true,
								"has_default": true,
								"default_value": false,
								"type": {
									"type": "bool",
									"base_type": "bool",
									"params": {
									}
								},
								"direct_view": true
							},
							"recycle_attribute_group": {
								"name": "recycle_attribute_group",
								"show_name": "Storage Recycle Settings",
								"desc": "Recycle settings to reclaim the disk space by delete out dated data",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "group_settings",
									"base_type": "integer",
									"params": {
									}
								},
								"direct_view": false
							},
							"recycle_unit": {
								"name": "recycle_unit",
								"show_name": "Recycle Data Size",
								"desc": "Discard the collected statistics in the unit of selected duration",
								"required": true,
								"has_default": true,
								"default_value": 0,
								"type": {
									"type": "timespan",
									"base_type": "enum",
									"params": {
									},
									"enum": {
										"0": "24 Hours",
										"1": "12 Hours",
										"2": "8 Hours",
										"3": "4 Hours",
										"4": "2 Hours",
										"5": "1 Hour"
									}
								},
								"direct_view": false
							},
							"recycle_trigger": {
								"name": "recycle_trigger",
								"show_name": "Recycle Qualification",
								"desc": "Trigger the recycle if the condition is met",
								"required": true,
								"has_default": true,
								"default_value": 0,
								"type": {
									"type": "realtime_analyzer_recycle_trigger",
									"base_type": "enum",
									"params": {
									},
									"enum": {
										"0": "By time",
										"1": "By storage size",
										"2": "By either time or size"
									}
								},
								"direct_view": false
							},
							"trigger_recycle_by_time": {
								"name": "trigger_recycle_by_time",
								"show_name": "Older than (Days)",
								"desc": "Keep records for maximum amount of days",
								"required": true,
								"has_default": true,
								"default_value": 30,
								"type": {
									"type": "integer_range",
									"base_type": "integer",
									"params": {
									},
									"range": {
										"min": 1,
										"max": 365,
										"inclusive": true
									},
									"fmt": null
								},
								"direct_view": false
							},
							"trigger_recycle_by_storage": {
								"name": "trigger_recycle_by_storage",
								"show_name": "Exceeds (GB)",
								"desc": "Keep records when storage size is under specified size (GB)",
								"required": true,
								"has_default": true,
								"default_value": 64,
								"type": {
									"type": "integer_range",
									"base_type": "integer",
									"params": {
									},
									"range": {
										"min": 1,
										"max": 256,
										"inclusive": true
									},
									"fmt": null
								},
								"direct_view": false
							},
							"statistic_sampling_group": {
								"name": "statistic_sampling_group",
								"show_name": "General Statistic Engine Settings",
								"desc": "Statistics sampling settings",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "group_settings",
									"base_type": "integer",
									"params": {
									}
								},
								"direct_view": false
							},
							"statistic_interval": {
								"name": "statistic_interval",
								"show_name": "Min. Statistic Interval",
								"desc": "Minimum sample and output interval",
								"required": true,
								"has_default": true,
								"default_value": 0,
								"type": {
									"type": "statistics_sample_interval",
									"base_type": "enum",
									"params": {
									},
									"enum": {
										"0": "1 second",
										"1": "10 millisecond"
									}
								},
								"direct_view": false
							},
							"session_analyzer_group": {
								"name": "session_analyzer_group",
								"show_name": "Session Settings",
								"desc": "Session attributes group",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "group_settings",
									"base_type": "integer",
									"params": {
									}
								},
								"direct_view": false
							},
							"tcp_session_timeout": {
								"name": "tcp_session_timeout",
								"show_name": "TCP Session Timeout",
								"desc": "TCP session timeout value",
								"required": true,
								"has_default": true,
								"default_value": 60,
								"type": {
									"type": "integer_range",
									"base_type": "integer",
									"params": {
									},
									"range": {
										"min": 15,
										"max": 1000000000,
										"inclusive": true
									},
									"fmt": null
								},
								"direct_view": false
							},
							"udp_session_timeout": {
								"name": "udp_session_timeout",
								"show_name": "UDP Session Timeout",
								"desc": "UDP session timeout value",
								"required": true,
								"has_default": true,
								"default_value": 30,
								"type": {
									"type": "integer_range",
									"base_type": "integer",
									"params": {
									},
									"range": {
										"min": 15,
										"max": 1000000000,
										"inclusive": true
									},
									"fmt": null
								},
								"direct_view": false
							},
							"rtp_analyzer_group": {
								"name": "rtp_analyzer_group",
								"show_name": "RTP & Streaming Analyzer",
								"desc": "RTP & Streaming analyzer attributes group",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "group_settings",
									"base_type": "integer",
									"params": {
									}
								},
								"direct_view": false
							},
							"stream_mb_monitor_interval": {
								"name": "stream_mb_monitor_interval",
								"show_name": "MBurst Interval",
								"desc": "Enable sub second micro burst interval monitor at smaller timescale",
								"required": true,
								"has_default": true,
								"default_value": 1,
								"type": {
									"type": "subinterval",
									"base_type": "enum",
									"params": {
									},
									"enum": {
										"0": "1 second",
										"1": "100 milliseconds",
										"2": "10 milliseconds"
									}
								},
								"direct_view": false
							},
							"mb_interval_record": {
								"name": "mb_interval_record",
								"show_name": "Record MB Stats",
								"desc": "Record Microburst statistics into the database",
								"required": true,
								"has_default": true,
								"default_value": false,
								"type": {
									"type": "bool",
									"base_type": "bool",
									"params": {
									}
								},
								"direct_view": false
							},
							"rtp_use_ports_to_identify_traffic": {
								"name": "rtp_use_ports_to_identify_traffic",
								"show_name": "RTP by UDP ports",
								"desc": "Use UDP ports to identify RTP traffic",
								"required": true,
								"has_default": true,
								"default_value": true,
								"type": {
									"type": "bool",
									"base_type": "bool",
									"params": {
									}
								},
								"direct_view": false
							},
							"rtp_udp_ports": {
								"name": "rtp_udp_ports",
								"show_name": "RTP UDP ports",
								"desc": "UDP Ports that should be identified as RTP, examples: 5004 or 5010,5012,5018",
								"required": true,
								"has_default": true,
								"default_value": "5004",
								"type": {
									"type": "string",
									"base_type": "string",
									"params": {
									}
								},
								"direct_view": false
							},
							"rtp_pt_mp2ts": {
								"name": "rtp_pt_mp2ts",
								"show_name": "MP2TS Payload Type",
								"desc": "Payload Type to be identified as MP2TS, comma sperated 33 or 33,90",
								"required": true,
								"has_default": true,
								"default_value": "33",
								"type": {
									"type": "singleline_text",
									"base_type": "string",
									"params": {
									}
								},
								"direct_view": false
							},
							"mp2ts_byte_stream": {
								"name": "mp2ts_byte_stream",
								"show_name": "MP2TS Byte Stream",
								"desc": "Enable MP2TS byte stream detection",
								"required": true,
								"has_default": true,
								"default_value": true,
								"type": {
									"type": "bool",
									"base_type": "bool",
									"params": {
									}
								},
								"direct_view": false
							},
							"rtp_pt_h264": {
								"name": "rtp_pt_h264",
								"show_name": "H.264 Payload Type",
								"desc": "Payload Type to be identified as H.264, comma sperated 33 or 39,90",
								"required": true,
								"has_default": true,
								"default_value": "39",
								"type": {
									"type": "singleline_text",
									"base_type": "string",
									"params": {
									}
								},
								"direct_view": false
							},
							"h264_byte_stream": {
								"name": "h264_byte_stream",
								"show_name": "H.264 Byte Stream",
								"desc": "Enable H.264 byte stream detection",
								"required": true,
								"has_default": true,
								"default_value": true,
								"type": {
									"type": "bool",
									"base_type": "bool",
									"params": {
									}
								},
								"direct_view": false
							},
							"rtp_src_clock": {
								"name": "rtp_src_clock",
								"show_name": "RTP Timestamp Clock(Hz)",
								"desc": "RTP Timestamp Source Clock Rate",
								"required": true,
								"has_default": true,
								"default_value": 8000,
								"type": {
									"type": "integer_range",
									"base_type": "integer",
									"params": {
									},
									"range": {
										"min": 1,
										"max": 1000000000,
										"inclusive": true
									},
									"fmt": null
								},
								"direct_view": false
							},
							"coreloc": {
								"name": "coreloc",
								"show_name": "Exec Unit",
								"desc": "Use Execution Unit",
								"required": false,
								"has_default": true,
								"default_value": 0,
								"type": {
									"type": "cpu",
									"base_type": "enum",
									"params": {
									},
									"enum": {
										"0": "Auto",
										"1": "ExecUnit.1 S0.C4.0",
										"2": "ExecUnit.2 S0.C5.0",
										"3": "ExecUnit.3 S0.C6.0",
										"4": "ExecUnit.4 S0.C7.0",
										"5": "ExecUnit.5 S0.C8.0",
										"6": "ExecUnit.6 S0.C9.0",
										"7": "ExecUnit.7 S0.C10.0",
										"8": "ExecUnit.8 S0.C11.0",
										"9": "ExecUnit.9 S0.C12.0",
										"10": "ExecUnit.10 S0.C13.0",
										"11": "ExecUnit.11 S0.C14.0",
										"12": "ExecUnit.12 S0.C15.0",
										"13": "ExecUnit.13 S0.C16.0",
										"14": "ExecUnit.14 S0.C17.0",
										"15": "ExecUnit.15 S0.C18.0",
										"16": "ExecUnit.16 S0.C19.0",
										"17": "ExecUnit.17 S0.C20.0",
										"18": "ExecUnit.18 S0.C21.0",
										"19": "ExecUnit.19 S0.C22.0",
										"20": "ExecUnit.20 S0.C23.0",
										"21": "ExecUnit.21 S0.C4.1",
										"22": "ExecUnit.22 S0.C5.1",
										"23": "ExecUnit.23 S0.C6.1",
										"24": "ExecUnit.24 S0.C7.1",
										"25": "ExecUnit.25 S0.C8.1",
										"26": "ExecUnit.26 S0.C9.1",
										"27": "ExecUnit.27 S0.C10.1",
										"28": "ExecUnit.28 S0.C11.1",
										"29": "ExecUnit.29 S0.C12.1",
										"30": "ExecUnit.30 S0.C13.1",
										"31": "ExecUnit.31 S0.C14.1",
										"32": "ExecUnit.32 S0.C15.1",
										"33": "ExecUnit.33 S0.C16.1",
										"34": "ExecUnit.34 S0.C17.1",
										"35": "ExecUnit.35 S0.C18.1",
										"36": "ExecUnit.36 S0.C19.1",
										"37": "ExecUnit.37 S0.C20.1",
										"38": "ExecUnit.38 S0.C21.1",
										"39": "ExecUnit.39 S0.C22.1",
										"40": "ExecUnit.40 S0.C23.1"
									},
									"short_enum": {
										"0": "Auto",
										"1": "ExecUnit.1",
										"2": "ExecUnit.2",
										"3": "ExecUnit.3",
										"4": "ExecUnit.4",
										"5": "ExecUnit.5",
										"6": "ExecUnit.6",
										"7": "ExecUnit.7",
										"8": "ExecUnit.8",
										"9": "ExecUnit.9",
										"10": "ExecUnit.10",
										"11": "ExecUnit.11",
										"12": "ExecUnit.12",
										"13": "ExecUnit.13",
										"14": "ExecUnit.14",
										"15": "ExecUnit.15",
										"16": "ExecUnit.16",
										"17": "ExecUnit.17",
										"18": "ExecUnit.18",
										"19": "ExecUnit.19",
										"20": "ExecUnit.20",
										"21": "ExecUnit.21",
										"22": "ExecUnit.22",
										"23": "ExecUnit.23",
										"24": "ExecUnit.24",
										"25": "ExecUnit.25",
										"26": "ExecUnit.26",
										"27": "ExecUnit.27",
										"28": "ExecUnit.28",
										"29": "ExecUnit.29",
										"30": "ExecUnit.30",
										"31": "ExecUnit.31",
										"32": "ExecUnit.32",
										"33": "ExecUnit.33",
										"34": "ExecUnit.34",
										"35": "ExecUnit.35",
										"36": "ExecUnit.36",
										"37": "ExecUnit.37",
										"38": "ExecUnit.38",
										"39": "ExecUnit.39",
										"40": "ExecUnit.40"
									}
								},
								"direct_view": false
							}
						},
						"connections": {
							"components.aggregator": {
								"id": "components.aggregator"
							},
							"components.replicator": {
								"id": "components.replicator"
							},
							"components.flowexport": {
								"id": "components.flowexport"
							},
							"components.capture": {
								"id": "components.capture"
							},
							"components.capturev4": {
								"id": "components.capturev4",
								"count": "n"
							},
							"components.egressport": {
								"id": "components.egressport"
							},
							"components.mbkiller": {
								"id": "components.mbkiller"
							},
							"components.mux": {
								"id": "components.mux",
								"count": "n"
							}
						}
					},
					"displayfilter": {
						"name": "displayfilter",
						"show_name": "Display Filter",
						"test_application": false,
						"desc": "Wireshark compatible display filter",
						"icon": "components.displayfilter.png",
						"flow_direction": "left_right",
						"inputs": {
							"in": {
								"name": "in",
								"show_name": "",
								"style": "solid_in_arrow"
							},
							"in1": {
								"name": "in1",
								"show_name": "",
								"style": "solid_in_arrow"
							},
							"in2": {
								"name": "in2",
								"show_name": "",
								"style": "solid_in_arrow"
							}
						},
						"outputs": {
							"out": {
								"name": "out",
								"show_name": "",
								"style": "solid_out_arrow"
							},
							"out1": {
								"name": "out1",
								"show_name": "",
								"style": "solid_out_arrow"
							},
							"out2": {
								"name": "out2",
								"show_name": "",
								"style": "solid_out_arrow"
							}
						},
						"show_load_definition": false,
						"show_msgseq": false,
						"params": {
							"comp_name": {
								"name": "comp_name",
								"show_name": "Name",
								"desc": "Component Name",
								"required": true,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "id",
									"base_type": "string",
									"params": {
									}
								},
								"direct_view": true
							},
							"notes": {
								"name": "notes",
								"show_name": "Notes",
								"desc": "Description and comment about this component",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "note",
									"base_type": "string",
									"params": {
									}
								},
								"direct_view": false
							},
							"instance_count": {
								"name": "instance_count",
								"show_name": "Instance",
								"desc": "Load balance the traffic to multiple instances",
								"required": false,
								"has_default": true,
								"default_value": 1,
								"type": {
									"type": "integer_range",
									"base_type": "integer",
									"params": {
									},
									"range": {
										"min": 1,
										"max": 8,
										"inclusive": true
									},
									"fmt": null
								},
								"direct_view": false
							},
							"matchAction": {
								"name": "matchAction",
								"show_name": "Match Action",
								"desc": "Default action when there is not any filter configured",
								"required": false,
								"has_default": true,
								"default_value": 0,
								"type": {
									"type": "df_default_action",
									"base_type": "enum",
									"params": {
									},
									"enum": {
										"0": "Pass when Match, drop mismatched",
										"1": "Drop when Match, pass mismatched"
									}
								},
								"direct_view": false
							},
							"emptyFilter": {
								"name": "emptyFilter",
								"show_name": "Empty Filter Behavior",
								"desc": "",
								"required": false,
								"has_default": true,
								"default_value": 0,
								"type": {
									"type": "df_empty_filter_result",
									"base_type": "enum",
									"params": {
									},
									"enum": {
										"0": "Matched",
										"1": "Mismatched"
									}
								},
								"direct_view": false
							},
							"displayfilter": {
								"name": "displayfilter",
								"show_name": "Display Filter",
								"desc": "",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": "string",
								"direct_view": false
							},
							"coreloc": {
								"name": "coreloc",
								"show_name": "Exec Unit",
								"desc": "Use Execution Unit",
								"required": false,
								"has_default": true,
								"default_value": 0,
								"type": {
									"type": "cpu",
									"base_type": "enum",
									"params": {
									},
									"enum": {
										"0": "Auto",
										"1": "ExecUnit.1 S0.C4.0",
										"2": "ExecUnit.2 S0.C5.0",
										"3": "ExecUnit.3 S0.C6.0",
										"4": "ExecUnit.4 S0.C7.0",
										"5": "ExecUnit.5 S0.C8.0",
										"6": "ExecUnit.6 S0.C9.0",
										"7": "ExecUnit.7 S0.C10.0",
										"8": "ExecUnit.8 S0.C11.0",
										"9": "ExecUnit.9 S0.C12.0",
										"10": "ExecUnit.10 S0.C13.0",
										"11": "ExecUnit.11 S0.C14.0",
										"12": "ExecUnit.12 S0.C15.0",
										"13": "ExecUnit.13 S0.C16.0",
										"14": "ExecUnit.14 S0.C17.0",
										"15": "ExecUnit.15 S0.C18.0",
										"16": "ExecUnit.16 S0.C19.0",
										"17": "ExecUnit.17 S0.C20.0",
										"18": "ExecUnit.18 S0.C21.0",
										"19": "ExecUnit.19 S0.C22.0",
										"20": "ExecUnit.20 S0.C23.0",
										"21": "ExecUnit.21 S0.C4.1",
										"22": "ExecUnit.22 S0.C5.1",
										"23": "ExecUnit.23 S0.C6.1",
										"24": "ExecUnit.24 S0.C7.1",
										"25": "ExecUnit.25 S0.C8.1",
										"26": "ExecUnit.26 S0.C9.1",
										"27": "ExecUnit.27 S0.C10.1",
										"28": "ExecUnit.28 S0.C11.1",
										"29": "ExecUnit.29 S0.C12.1",
										"30": "ExecUnit.30 S0.C13.1",
										"31": "ExecUnit.31 S0.C14.1",
										"32": "ExecUnit.32 S0.C15.1",
										"33": "ExecUnit.33 S0.C16.1",
										"34": "ExecUnit.34 S0.C17.1",
										"35": "ExecUnit.35 S0.C18.1",
										"36": "ExecUnit.36 S0.C19.1",
										"37": "ExecUnit.37 S0.C20.1",
										"38": "ExecUnit.38 S0.C21.1",
										"39": "ExecUnit.39 S0.C22.1",
										"40": "ExecUnit.40 S0.C23.1"
									},
									"short_enum": {
										"0": "Auto",
										"1": "ExecUnit.1",
										"2": "ExecUnit.2",
										"3": "ExecUnit.3",
										"4": "ExecUnit.4",
										"5": "ExecUnit.5",
										"6": "ExecUnit.6",
										"7": "ExecUnit.7",
										"8": "ExecUnit.8",
										"9": "ExecUnit.9",
										"10": "ExecUnit.10",
										"11": "ExecUnit.11",
										"12": "ExecUnit.12",
										"13": "ExecUnit.13",
										"14": "ExecUnit.14",
										"15": "ExecUnit.15",
										"16": "ExecUnit.16",
										"17": "ExecUnit.17",
										"18": "ExecUnit.18",
										"19": "ExecUnit.19",
										"20": "ExecUnit.20",
										"21": "ExecUnit.21",
										"22": "ExecUnit.22",
										"23": "ExecUnit.23",
										"24": "ExecUnit.24",
										"25": "ExecUnit.25",
										"26": "ExecUnit.26",
										"27": "ExecUnit.27",
										"28": "ExecUnit.28",
										"29": "ExecUnit.29",
										"30": "ExecUnit.30",
										"31": "ExecUnit.31",
										"32": "ExecUnit.32",
										"33": "ExecUnit.33",
										"34": "ExecUnit.34",
										"35": "ExecUnit.35",
										"36": "ExecUnit.36",
										"37": "ExecUnit.37",
										"38": "ExecUnit.38",
										"39": "ExecUnit.39",
										"40": "ExecUnit.40"
									}
								},
								"direct_view": false
							}
						},
						"connections": {
							"components.aggregator": {
								"id": "components.aggregator"
							},
							"components.replicator": {
								"id": "components.replicator"
							},
							"components.flowexport": {
								"id": "components.flowexport"
							},
							"components.capture": {
								"id": "components.capture"
							},
							"components.capturev4": {
								"id": "components.capturev4",
								"count": "n"
							},
							"components.egressport": {
								"id": "components.egressport"
							},
							"components.mbkiller": {
								"id": "components.mbkiller"
							},
							"components.mux": {
								"id": "components.mux",
								"count": "n"
							}
						}
					},
					"deduplication": {
						"name": "deduplication",
						"show_name": "Deduplication",
						"test_application": false,
						"desc": "Deduplication",
						"icon": "components.deduplication.png",
						"flow_direction": "left_right",
						"inputs": {
							"in": {
								"name": "in",
								"show_name": "",
								"style": "solid_in_arrow"
							},
							"in1": {
								"name": "in1",
								"show_name": "",
								"style": "solid_in_arrow"
							},
							"in2": {
								"name": "in2",
								"show_name": "",
								"style": "solid_in_arrow"
							}
						},
						"outputs": {
							"out": {
								"name": "out",
								"show_name": "",
								"style": "solid_out_arrow"
							},
							"out1": {
								"name": "out1",
								"show_name": "",
								"style": "solid_out_arrow"
							},
							"out2": {
								"name": "out2",
								"show_name": "",
								"style": "solid_out_arrow"
							}
						},
						"show_load_definition": false,
						"show_msgseq": false,
						"params": {
							"comp_name": {
								"name": "comp_name",
								"show_name": "Name",
								"desc": "Component Name",
								"required": true,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "id",
									"base_type": "string",
									"params": {
									}
								},
								"direct_view": true
							},
							"notes": {
								"name": "notes",
								"show_name": "Notes",
								"desc": "Description and comment about this component",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "note",
									"base_type": "string",
									"params": {
									}
								},
								"direct_view": false
							},
							"in_pad_count": {
								"name": "in_pad_count",
								"show_name": "Input Pad Count",
								"desc": "Input Pad Count",
								"required": false,
								"has_default": true,
								"default_value": 3,
								"type": {
									"type": "integer_range",
									"base_type": "integer",
									"params": {
									},
									"range": {
										"min": 1,
										"max": 64,
										"inclusive": true
									},
									"fmt": null
								},
								"direct_view": false
							},
							"timewindow": {
								"name": "timewindow",
								"show_name": "Dup Time Window (Microsec)",
								"desc": "Dup Detection Window (100-500,000 Microsecond)",
								"required": true,
								"has_default": true,
								"default_value": 100000,
								"type": {
									"type": "integer_range",
									"base_type": "integer",
									"params": {
									},
									"range": {
										"min": 100,
										"max": 500000,
										"inclusive": true
									},
									"fmt": null
								},
								"direct_view": true
							},
							"dup_action": {
								"name": "dup_action",
								"show_name": "Detection Action",
								"desc": "Detection action",
								"required": true,
								"has_default": true,
								"default_value": 1,
								"type": {
									"type": "slice",
									"base_type": "enum",
									"params": {
									},
									"enum": {
										"0": "Count only",
										"1": "Pass unique only",
										"2": "Pass duplicated only"
									}
								},
								"direct_view": true
							},
							"fingerprint_method": {
								"name": "fingerprint_method",
								"show_name": "Fingerprint method",
								"desc": "Method to generate fingerprint",
								"required": true,
								"has_default": true,
								"default_value": 1,
								"type": {
									"type": "fingerprint_types",
									"base_type": "enum",
									"params": {
									},
									"enum": {
										"0": "L2-L4 Headers + 16 min. bytes",
										"1": "L2-L4 Headers + 64 min. bytes",
										"2": "Full packet"
									}
								},
								"direct_view": true
							},
							"ignore_l2_len": {
								"name": "ignore_l2_len",
								"show_name": "Ignore L2 Frame Len",
								"desc": "Ignore L2 total frame length, use length in L3 when available",
								"required": false,
								"has_default": true,
								"default_value": false,
								"type": {
									"type": "bool",
									"base_type": "bool",
									"params": {
									}
								},
								"direct_view": false
							},
							"ignore_header_len": {
								"name": "ignore_header_len",
								"show_name": "Skip Tunnel Header Len",
								"desc": "Skip packet tunnel header length such as VxLAN or Cisco Fabric Path",
								"required": false,
								"has_default": true,
								"default_value": 0,
								"type": {
									"type": "integer_range",
									"base_type": "integer",
									"params": {
									},
									"range": {
										"min": 0,
										"max": 127,
										"inclusive": true
									},
									"fmt": null
								},
								"direct_view": false
							},
							"ignore_trailer_len": {
								"name": "ignore_trailer_len",
								"show_name": "Skip Trailer Len",
								"desc": "Skip fixed packet trailer length such as Fabric trailer or timestamp trailer",
								"required": false,
								"has_default": true,
								"default_value": 0,
								"type": {
									"type": "integer_range",
									"base_type": "integer",
									"params": {
									},
									"range": {
										"min": 0,
										"max": 127,
										"inclusive": true
									},
									"fmt": null
								},
								"direct_view": false
							},
							"ethernet_dedup_policy_group": {
								"name": "ethernet_dedup_policy_group",
								"show_name": "Ethernet(L2) Header Fields",
								"desc": "Ethernet layer comparison rules",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "group_settings",
									"base_type": "integer",
									"params": {
									}
								},
								"direct_view": false
							},
							"ignore_l2": {
								"name": "ignore_l2",
								"show_name": "Ignore L2 Header",
								"desc": "Ignore Link layer entirely",
								"required": false,
								"has_default": true,
								"default_value": false,
								"type": {
									"type": "bool",
									"base_type": "bool",
									"params": {
									}
								},
								"direct_view": false
							},
							"ignore_dmac": {
								"name": "ignore_dmac",
								"show_name": "Ignore L2 DMAC",
								"desc": "Ignore L2 Destination MAC",
								"required": false,
								"has_default": true,
								"default_value": false,
								"type": {
									"type": "bool",
									"base_type": "bool",
									"params": {
									}
								},
								"direct_view": false
							},
							"ignore_smac": {
								"name": "ignore_smac",
								"show_name": "Ignore L2 SMAC",
								"desc": "Ignore L2 Source MAC",
								"required": false,
								"has_default": true,
								"default_value": false,
								"type": {
									"type": "bool",
									"base_type": "bool",
									"params": {
									}
								},
								"direct_view": false
							},
							"ignore_vlan": {
								"name": "ignore_vlan",
								"show_name": "Ignore L2 VLAN",
								"desc": "Ignore VLAN including double VLANs",
								"required": false,
								"has_default": true,
								"default_value": false,
								"type": {
									"type": "bool",
									"base_type": "bool",
									"params": {
									}
								},
								"direct_view": false
							},
							"mpls_header_count": {
								"name": "mpls_header_count",
								"show_name": "MPLS Tag Count",
								"desc": "Number of MPLS tags in the packet",
								"required": false,
								"has_default": true,
								"default_value": 0,
								"type": {
									"type": "integer_range",
									"base_type": "integer",
									"params": {
									},
									"range": {
										"min": 0,
										"max": 7,
										"inclusive": true
									},
									"fmt": null
								},
								"direct_view": false
							},
							"ip_dedup_policy_group": {
								"name": "ip_dedup_policy_group",
								"show_name": "IP Fields",
								"desc": "IP layer comparison rules",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "group_settings",
									"base_type": "integer",
									"params": {
									}
								},
								"direct_view": false
							},
							"ignore_ttl": {
								"name": "ignore_ttl",
								"show_name": "Ignore IP TTL",
								"desc": "Ignore IP Time to Live",
								"required": false,
								"has_default": true,
								"default_value": false,
								"type": {
									"type": "bool",
									"base_type": "bool",
									"params": {
									}
								},
								"direct_view": false
							},
							"ignore_tos": {
								"name": "ignore_tos",
								"show_name": "Ignore IPv4 ToS",
								"desc": "Ignore IPv4 Type of Service",
								"required": false,
								"has_default": true,
								"default_value": false,
								"type": {
									"type": "bool",
									"base_type": "bool",
									"params": {
									}
								},
								"direct_view": false
							},
							"ignore_tc": {
								"name": "ignore_tc",
								"show_name": "Ignore IPv6 TC",
								"desc": "Ignore IPv6 Traffic Class",
								"required": false,
								"has_default": true,
								"default_value": false,
								"type": {
									"type": "bool",
									"base_type": "bool",
									"params": {
									}
								},
								"direct_view": false
							},
							"coreloc": {
								"name": "coreloc",
								"show_name": "Exec Unit",
								"desc": "Use Execution Unit",
								"required": false,
								"has_default": true,
								"default_value": 0,
								"type": {
									"type": "cpu",
									"base_type": "enum",
									"params": {
									},
									"enum": {
										"0": "Auto",
										"1": "ExecUnit.1 S0.C4.0",
										"2": "ExecUnit.2 S0.C5.0",
										"3": "ExecUnit.3 S0.C6.0",
										"4": "ExecUnit.4 S0.C7.0",
										"5": "ExecUnit.5 S0.C8.0",
										"6": "ExecUnit.6 S0.C9.0",
										"7": "ExecUnit.7 S0.C10.0",
										"8": "ExecUnit.8 S0.C11.0",
										"9": "ExecUnit.9 S0.C12.0",
										"10": "ExecUnit.10 S0.C13.0",
										"11": "ExecUnit.11 S0.C14.0",
										"12": "ExecUnit.12 S0.C15.0",
										"13": "ExecUnit.13 S0.C16.0",
										"14": "ExecUnit.14 S0.C17.0",
										"15": "ExecUnit.15 S0.C18.0",
										"16": "ExecUnit.16 S0.C19.0",
										"17": "ExecUnit.17 S0.C20.0",
										"18": "ExecUnit.18 S0.C21.0",
										"19": "ExecUnit.19 S0.C22.0",
										"20": "ExecUnit.20 S0.C23.0",
										"21": "ExecUnit.21 S0.C4.1",
										"22": "ExecUnit.22 S0.C5.1",
										"23": "ExecUnit.23 S0.C6.1",
										"24": "ExecUnit.24 S0.C7.1",
										"25": "ExecUnit.25 S0.C8.1",
										"26": "ExecUnit.26 S0.C9.1",
										"27": "ExecUnit.27 S0.C10.1",
										"28": "ExecUnit.28 S0.C11.1",
										"29": "ExecUnit.29 S0.C12.1",
										"30": "ExecUnit.30 S0.C13.1",
										"31": "ExecUnit.31 S0.C14.1",
										"32": "ExecUnit.32 S0.C15.1",
										"33": "ExecUnit.33 S0.C16.1",
										"34": "ExecUnit.34 S0.C17.1",
										"35": "ExecUnit.35 S0.C18.1",
										"36": "ExecUnit.36 S0.C19.1",
										"37": "ExecUnit.37 S0.C20.1",
										"38": "ExecUnit.38 S0.C21.1",
										"39": "ExecUnit.39 S0.C22.1",
										"40": "ExecUnit.40 S0.C23.1"
									},
									"short_enum": {
										"0": "Auto",
										"1": "ExecUnit.1",
										"2": "ExecUnit.2",
										"3": "ExecUnit.3",
										"4": "ExecUnit.4",
										"5": "ExecUnit.5",
										"6": "ExecUnit.6",
										"7": "ExecUnit.7",
										"8": "ExecUnit.8",
										"9": "ExecUnit.9",
										"10": "ExecUnit.10",
										"11": "ExecUnit.11",
										"12": "ExecUnit.12",
										"13": "ExecUnit.13",
										"14": "ExecUnit.14",
										"15": "ExecUnit.15",
										"16": "ExecUnit.16",
										"17": "ExecUnit.17",
										"18": "ExecUnit.18",
										"19": "ExecUnit.19",
										"20": "ExecUnit.20",
										"21": "ExecUnit.21",
										"22": "ExecUnit.22",
										"23": "ExecUnit.23",
										"24": "ExecUnit.24",
										"25": "ExecUnit.25",
										"26": "ExecUnit.26",
										"27": "ExecUnit.27",
										"28": "ExecUnit.28",
										"29": "ExecUnit.29",
										"30": "ExecUnit.30",
										"31": "ExecUnit.31",
										"32": "ExecUnit.32",
										"33": "ExecUnit.33",
										"34": "ExecUnit.34",
										"35": "ExecUnit.35",
										"36": "ExecUnit.36",
										"37": "ExecUnit.37",
										"38": "ExecUnit.38",
										"39": "ExecUnit.39",
										"40": "ExecUnit.40"
									}
								},
								"direct_view": false
							}
						},
						"connections": {
							"components.egressport": {
								"id": "components.egressport",
								"count": "1"
							},
							"components.capture": {
								"id": "components.capture"
							},
							"components.capturev4": {
								"id": "components.capturev4"
							},
							"components.aggregator": {
								"id": "components.aggregator"
							},
							"components.replicator": {
								"id": "components.replicator"
							},
							"components.flowexport": {
								"id": "components.flowexport"
							},
							"components.filter": {
								"id": "components.filter"
							},
							"components.ssltlsdecryptor": {
								"id": "components.ssltlsdecryptor",
								"count": "1"
							},
							"components.ipmask": {
								"id": "components.ipmask"
							},
							"components.mbkiller": {
								"id": "components.mbkiller"
							},
							"components.mux": {
								"id": "components.mux",
								"count": "n"
							},
							"components.appgateway": {
								"id": "components.appgateway",
								"count": "1"
							},
							"components.detunnel": {
								"id": "components.detunnel"
							},
							"components.ethswitch": {
								"id": "components.ethswitch"
							},
							"components.matchaction": {
								"id": "components.matchaction"
							},
							"components.patternmatcher": {
								"id": "components.patternmatcher"
							}
						}
					},
					"appgateway": {
						"name": "appgateway",
						"show_name": "App. Gateway",
						"test_application": false,
						"desc": "Applications' gateway that allows connect standard application to dataplane",
						"icon": "components.appgateway.png",
						"flow_direction": "left_right",
						"inputs": {
							"in": {
								"name": "in",
								"show_name": "",
								"style": "solid_in_arrow"
							},
							"in1": {
								"name": "in1",
								"show_name": "",
								"style": "solid_in_arrow"
							},
							"in2": {
								"name": "in2",
								"show_name": "",
								"style": "solid_in_arrow"
							}
						},
						"outputs": {
							"out": {
								"name": "out",
								"show_name": "",
								"style": "solid_out_arrow"
							},
							"out1": {
								"name": "out1",
								"show_name": "",
								"style": "solid_out_arrow"
							},
							"out2": {
								"name": "out2",
								"show_name": "",
								"style": "solid_out_arrow"
							}
						},
						"show_load_definition": false,
						"show_msgseq": false,
						"params": {
							"comp_name": {
								"name": "comp_name",
								"show_name": "Name",
								"desc": "Component Name",
								"required": true,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "id",
									"base_type": "string",
									"params": {
									}
								},
								"direct_view": true
							},
							"notes": {
								"name": "notes",
								"show_name": "Notes",
								"desc": "Description and comment about this component",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "note",
									"base_type": "string",
									"params": {
									}
								},
								"direct_view": false
							},
							"ip_config_group": {
								"name": "ip_config_group",
								"show_name": "IP Configuration",
								"desc": "IP Configuration",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "group_settings",
									"base_type": "integer",
									"params": {
									}
								},
								"direct_view": false
							},
							"ip_config_enable": {
								"name": "ip_config_enable",
								"show_name": "Attach IP",
								"desc": "Enable the IP Configuration on Port",
								"required": true,
								"has_default": true,
								"default_value": false,
								"type": {
									"type": "bool",
									"base_type": "bool",
									"params": {
									}
								},
								"direct_view": true
							},
							"ip": {
								"name": "ip",
								"show_name": "IP Address",
								"desc": "IP Address",
								"required": true,
								"has_default": true,
								"default_value": "10.0.0.1",
								"type": {
									"type": "ip_address",
									"base_type": "string",
									"params": {
									}
								},
								"direct_view": true
							},
							"netmask": {
								"name": "netmask",
								"show_name": "Netmask",
								"desc": "Network Mask",
								"required": true,
								"has_default": true,
								"default_value": "255.255.255.0",
								"type": {
									"type": "ip_netmask",
									"base_type": "string",
									"params": {
									}
								},
								"direct_view": true
							},
							"gateway": {
								"name": "gateway",
								"show_name": "Gateway",
								"desc": "Gateway",
								"required": false,
								"has_default": false,
								"default_value": "",
								"type": {
									"type": "ip_address",
									"base_type": "string",
									"params": {
									}
								},
								"direct_view": false
							},
							"force_egress_to_ip_set": {
								"name": "force_egress_to_ip_set",
								"show_name": "Force Route to IPs",
								"desc": "Use the egress interface to reach IPs",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "singleline_text",
									"base_type": "string",
									"params": {
									}
								},
								"direct_view": false
							},
							"coreloc": {
								"name": "coreloc",
								"show_name": "Exec Unit",
								"desc": "Use Execution Unit",
								"required": false,
								"has_default": true,
								"default_value": 0,
								"type": {
									"type": "cpu",
									"base_type": "enum",
									"params": {
									},
									"enum": {
										"0": "Auto",
										"1": "ExecUnit.1 S0.C4.0",
										"2": "ExecUnit.2 S0.C5.0",
										"3": "ExecUnit.3 S0.C6.0",
										"4": "ExecUnit.4 S0.C7.0",
										"5": "ExecUnit.5 S0.C8.0",
										"6": "ExecUnit.6 S0.C9.0",
										"7": "ExecUnit.7 S0.C10.0",
										"8": "ExecUnit.8 S0.C11.0",
										"9": "ExecUnit.9 S0.C12.0",
										"10": "ExecUnit.10 S0.C13.0",
										"11": "ExecUnit.11 S0.C14.0",
										"12": "ExecUnit.12 S0.C15.0",
										"13": "ExecUnit.13 S0.C16.0",
										"14": "ExecUnit.14 S0.C17.0",
										"15": "ExecUnit.15 S0.C18.0",
										"16": "ExecUnit.16 S0.C19.0",
										"17": "ExecUnit.17 S0.C20.0",
										"18": "ExecUnit.18 S0.C21.0",
										"19": "ExecUnit.19 S0.C22.0",
										"20": "ExecUnit.20 S0.C23.0",
										"21": "ExecUnit.21 S0.C4.1",
										"22": "ExecUnit.22 S0.C5.1",
										"23": "ExecUnit.23 S0.C6.1",
										"24": "ExecUnit.24 S0.C7.1",
										"25": "ExecUnit.25 S0.C8.1",
										"26": "ExecUnit.26 S0.C9.1",
										"27": "ExecUnit.27 S0.C10.1",
										"28": "ExecUnit.28 S0.C11.1",
										"29": "ExecUnit.29 S0.C12.1",
										"30": "ExecUnit.30 S0.C13.1",
										"31": "ExecUnit.31 S0.C14.1",
										"32": "ExecUnit.32 S0.C15.1",
										"33": "ExecUnit.33 S0.C16.1",
										"34": "ExecUnit.34 S0.C17.1",
										"35": "ExecUnit.35 S0.C18.1",
										"36": "ExecUnit.36 S0.C19.1",
										"37": "ExecUnit.37 S0.C20.1",
										"38": "ExecUnit.38 S0.C21.1",
										"39": "ExecUnit.39 S0.C22.1",
										"40": "ExecUnit.40 S0.C23.1"
									},
									"short_enum": {
										"0": "Auto",
										"1": "ExecUnit.1",
										"2": "ExecUnit.2",
										"3": "ExecUnit.3",
										"4": "ExecUnit.4",
										"5": "ExecUnit.5",
										"6": "ExecUnit.6",
										"7": "ExecUnit.7",
										"8": "ExecUnit.8",
										"9": "ExecUnit.9",
										"10": "ExecUnit.10",
										"11": "ExecUnit.11",
										"12": "ExecUnit.12",
										"13": "ExecUnit.13",
										"14": "ExecUnit.14",
										"15": "ExecUnit.15",
										"16": "ExecUnit.16",
										"17": "ExecUnit.17",
										"18": "ExecUnit.18",
										"19": "ExecUnit.19",
										"20": "ExecUnit.20",
										"21": "ExecUnit.21",
										"22": "ExecUnit.22",
										"23": "ExecUnit.23",
										"24": "ExecUnit.24",
										"25": "ExecUnit.25",
										"26": "ExecUnit.26",
										"27": "ExecUnit.27",
										"28": "ExecUnit.28",
										"29": "ExecUnit.29",
										"30": "ExecUnit.30",
										"31": "ExecUnit.31",
										"32": "ExecUnit.32",
										"33": "ExecUnit.33",
										"34": "ExecUnit.34",
										"35": "ExecUnit.35",
										"36": "ExecUnit.36",
										"37": "ExecUnit.37",
										"38": "ExecUnit.38",
										"39": "ExecUnit.39",
										"40": "ExecUnit.40"
									}
								},
								"direct_view": false
							}
						},
						"connections": {
							"components.aggregator": {
								"id": "components.aggregator"
							},
							"components.replicator": {
								"id": "components.replicator"
							},
							"components.egressport": {
								"id": "components.egressport"
							},
							"components.filter": {
								"id": "components.filter"
							},
							"components.mux": {
								"id": "components.mux",
								"count": "n"
							}
						}
					},
					"detunnel": {
						"name": "detunnel",
						"show_name": "Tunnel Striper",
						"test_application": false,
						"desc": "Strip outter tunnel",
						"icon": "components.detunnel.png",
						"flow_direction": "left_right",
						"inputs": {
							"in": {
								"name": "in",
								"show_name": "",
								"style": "solid_in_arrow"
							},
							"in1": {
								"name": "in1",
								"show_name": "",
								"style": "solid_in_arrow"
							},
							"in2": {
								"name": "in2",
								"show_name": "",
								"style": "solid_in_arrow"
							}
						},
						"outputs": {
							"out": {
								"name": "out",
								"show_name": "",
								"style": "solid_out_arrow"
							},
							"out1": {
								"name": "out1",
								"show_name": "",
								"style": "solid_out_arrow"
							},
							"out2": {
								"name": "out2",
								"show_name": "",
								"style": "solid_out_arrow"
							}
						},
						"show_load_definition": false,
						"show_msgseq": false,
						"params": {
							"comp_name": {
								"name": "comp_name",
								"show_name": "Name",
								"desc": "Component Name",
								"required": true,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "id",
									"base_type": "string",
									"params": {
									}
								},
								"direct_view": true
							},
							"notes": {
								"name": "notes",
								"show_name": "Notes",
								"desc": "Description and comment about this component",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "note",
									"base_type": "string",
									"params": {
									}
								},
								"direct_view": false
							},
							"detunnelop": {
								"name": "detunnelop",
								"show_name": "Detunnel Operation",
								"desc": "Detunnel Operation Step",
								"required": false,
								"has_default": true,
								"default_value": 0,
								"type": {
									"type": "detunnel_ops",
									"base_type": "enum",
									"params": {
									},
									"enum": {
										"0": "Pass through",
										"3": "Outer Eth-IP",
										"4": "Outer Eth-IP-UDP",
										"5": "Outer Eth-IP-UDP-VxLAN",
										"6": "Outer IP-UDP-VxLAN-Eth-IP-UDP-GTP",
										"7": "Outer IP-UDP-GTP",
										"8": "Outer (Eth)-IP-GRE",
										"9": "Outer Fixed Eth-IP-UDP-VxLAN",
										"10": "Remove Header By Length"
									}
								},
								"direct_view": false
							},
							"vxlanport": {
								"name": "vxlanport",
								"show_name": "VxLAN Port",
								"desc": "VxLAN Port Number",
								"required": true,
								"has_default": true,
								"default_value": 4789,
								"type": {
									"type": "integer_range",
									"base_type": "integer",
									"params": {
									},
									"range": {
										"min": 1,
										"max": 65535,
										"inclusive": true
									},
									"fmt": null
								},
								"direct_view": true
							},
							"gtpport": {
								"name": "gtpport",
								"show_name": "GTP Port",
								"desc": "GTP Port Number",
								"required": true,
								"has_default": true,
								"default_value": 2152,
								"type": {
									"type": "integer_range",
									"base_type": "integer",
									"params": {
									},
									"range": {
										"min": 1,
										"max": 65535,
										"inclusive": true
									},
									"fmt": null
								},
								"direct_view": true
							},
							"headerlen_to_remove": {
								"name": "headerlen_to_remove",
								"show_name": "Header Length to Remove",
								"desc": "Header length to remove",
								"required": true,
								"has_default": true,
								"default_value": 0,
								"type": {
									"type": "integer_range",
									"base_type": "integer",
									"params": {
									},
									"range": {
										"min": 0,
										"max": 512,
										"inclusive": true
									},
									"fmt": null
								},
								"direct_view": false
							},
							"coreloc": {
								"name": "coreloc",
								"show_name": "Exec Unit",
								"desc": "Use Execution Unit",
								"required": false,
								"has_default": true,
								"default_value": 0,
								"type": {
									"type": "cpu",
									"base_type": "enum",
									"params": {
									},
									"enum": {
										"0": "Auto",
										"1": "ExecUnit.1 S0.C4.0",
										"2": "ExecUnit.2 S0.C5.0",
										"3": "ExecUnit.3 S0.C6.0",
										"4": "ExecUnit.4 S0.C7.0",
										"5": "ExecUnit.5 S0.C8.0",
										"6": "ExecUnit.6 S0.C9.0",
										"7": "ExecUnit.7 S0.C10.0",
										"8": "ExecUnit.8 S0.C11.0",
										"9": "ExecUnit.9 S0.C12.0",
										"10": "ExecUnit.10 S0.C13.0",
										"11": "ExecUnit.11 S0.C14.0",
										"12": "ExecUnit.12 S0.C15.0",
										"13": "ExecUnit.13 S0.C16.0",
										"14": "ExecUnit.14 S0.C17.0",
										"15": "ExecUnit.15 S0.C18.0",
										"16": "ExecUnit.16 S0.C19.0",
										"17": "ExecUnit.17 S0.C20.0",
										"18": "ExecUnit.18 S0.C21.0",
										"19": "ExecUnit.19 S0.C22.0",
										"20": "ExecUnit.20 S0.C23.0",
										"21": "ExecUnit.21 S0.C4.1",
										"22": "ExecUnit.22 S0.C5.1",
										"23": "ExecUnit.23 S0.C6.1",
										"24": "ExecUnit.24 S0.C7.1",
										"25": "ExecUnit.25 S0.C8.1",
										"26": "ExecUnit.26 S0.C9.1",
										"27": "ExecUnit.27 S0.C10.1",
										"28": "ExecUnit.28 S0.C11.1",
										"29": "ExecUnit.29 S0.C12.1",
										"30": "ExecUnit.30 S0.C13.1",
										"31": "ExecUnit.31 S0.C14.1",
										"32": "ExecUnit.32 S0.C15.1",
										"33": "ExecUnit.33 S0.C16.1",
										"34": "ExecUnit.34 S0.C17.1",
										"35": "ExecUnit.35 S0.C18.1",
										"36": "ExecUnit.36 S0.C19.1",
										"37": "ExecUnit.37 S0.C20.1",
										"38": "ExecUnit.38 S0.C21.1",
										"39": "ExecUnit.39 S0.C22.1",
										"40": "ExecUnit.40 S0.C23.1"
									},
									"short_enum": {
										"0": "Auto",
										"1": "ExecUnit.1",
										"2": "ExecUnit.2",
										"3": "ExecUnit.3",
										"4": "ExecUnit.4",
										"5": "ExecUnit.5",
										"6": "ExecUnit.6",
										"7": "ExecUnit.7",
										"8": "ExecUnit.8",
										"9": "ExecUnit.9",
										"10": "ExecUnit.10",
										"11": "ExecUnit.11",
										"12": "ExecUnit.12",
										"13": "ExecUnit.13",
										"14": "ExecUnit.14",
										"15": "ExecUnit.15",
										"16": "ExecUnit.16",
										"17": "ExecUnit.17",
										"18": "ExecUnit.18",
										"19": "ExecUnit.19",
										"20": "ExecUnit.20",
										"21": "ExecUnit.21",
										"22": "ExecUnit.22",
										"23": "ExecUnit.23",
										"24": "ExecUnit.24",
										"25": "ExecUnit.25",
										"26": "ExecUnit.26",
										"27": "ExecUnit.27",
										"28": "ExecUnit.28",
										"29": "ExecUnit.29",
										"30": "ExecUnit.30",
										"31": "ExecUnit.31",
										"32": "ExecUnit.32",
										"33": "ExecUnit.33",
										"34": "ExecUnit.34",
										"35": "ExecUnit.35",
										"36": "ExecUnit.36",
										"37": "ExecUnit.37",
										"38": "ExecUnit.38",
										"39": "ExecUnit.39",
										"40": "ExecUnit.40"
									}
								},
								"direct_view": false
							}
						},
						"connections": {
							"components.filter": {
								"id": "components.filter",
								"count": "n"
							},
							"components.aggregator": {
								"id": "components.aggregator",
								"count": "n"
							},
							"components.replicator": {
								"id": "components.replicator",
								"count": "n"
							},
							"components.flowexport": {
								"id": "components.flowexport",
								"count": "n"
							},
							"components.capture": {
								"id": "components.capture",
								"count": "n"
							},
							"components.capturev4": {
								"id": "components.capturev4",
								"count": "n"
							},
							"components.egressport": {
								"id": "components.egressport",
								"count": "n"
							},
							"components.loadbalancer": {
								"id": "components.loadbalancer",
								"count": "n"
							},
							"components.ipmask": {
								"id": "components.ipmask"
							}
						}
					},
					"ethswitch": {
						"name": "ethswitch",
						"show_name": "Ethernet Switch",
						"test_application": false,
						"desc": "Ethernet Network Switch Component",
						"icon": "components.switch.png",
						"flow_direction": "left_right",
						"inputs": {
							"in": {
								"name": "in",
								"show_name": "",
								"style": "solid_in_arrow"
							},
							"in1": {
								"name": "in1",
								"show_name": "",
								"style": "solid_in_arrow"
							},
							"in2": {
								"name": "in2",
								"show_name": "",
								"style": "solid_in_arrow"
							}
						},
						"outputs": {
							"out": {
								"name": "out",
								"show_name": "",
								"style": "solid_out_arrow"
							},
							"out1": {
								"name": "out1",
								"show_name": "",
								"style": "solid_out_arrow"
							},
							"out2": {
								"name": "out2",
								"show_name": "",
								"style": "solid_out_arrow"
							}
						},
						"show_load_definition": false,
						"show_msgseq": false,
						"params": {
							"comp_name": {
								"name": "comp_name",
								"show_name": "Name",
								"desc": "Component Name",
								"required": true,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "id",
									"base_type": "string",
									"params": {
									}
								},
								"direct_view": true
							},
							"notes": {
								"name": "notes",
								"show_name": "Notes",
								"desc": "Description and comment about this component",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "note",
									"base_type": "string",
									"params": {
									}
								},
								"direct_view": false
							},
							"in_pad_count": {
								"name": "in_pad_count",
								"show_name": "Input Pad Count",
								"desc": "Input Pad Count",
								"required": false,
								"has_default": true,
								"default_value": 4,
								"type": {
									"type": "integer_range",
									"base_type": "integer",
									"params": {
									},
									"range": {
										"min": 1,
										"max": 64,
										"inclusive": true
									},
									"fmt": null
								},
								"direct_view": false
							},
							"out_pad_count": {
								"name": "out_pad_count",
								"show_name": "Output Pad Count",
								"desc": "Output Pad Count",
								"required": false,
								"has_default": true,
								"default_value": 4,
								"type": {
									"type": "integer_range",
									"base_type": "integer",
									"params": {
									},
									"range": {
										"min": 1,
										"max": 64,
										"inclusive": true
									},
									"fmt": null
								},
								"direct_view": false
							},
							"mac_cap": {
								"name": "mac_cap",
								"show_name": "MAC Learning Capacities",
								"desc": "MAC Learning capacities",
								"required": true,
								"has_default": true,
								"default_value": 10000,
								"type": {
									"type": "integer_range",
									"base_type": "integer",
									"params": {
									},
									"range": {
										"min": 1000,
										"max": 1000000,
										"inclusive": true
									},
									"fmt": null
								},
								"direct_view": true
							},
							"aging": {
								"name": "aging",
								"show_name": "MAC Timeout",
								"desc": "Seconds to retire a learned MAC, 0 to disable",
								"required": true,
								"has_default": true,
								"default_value": 300,
								"type": {
									"type": "integer_range",
									"base_type": "integer",
									"params": {
									},
									"range": {
										"min": 0,
										"max": 1000000,
										"inclusive": true
									},
									"fmt": null
								},
								"direct_view": true
							},
							"vlan": {
								"name": "vlan",
								"show_name": "VLAN",
								"desc": "Use VLAN based learning algorithm",
								"required": true,
								"has_default": true,
								"default_value": false,
								"type": {
									"type": "bool",
									"base_type": "bool",
									"params": {
									}
								},
								"direct_view": true
							},
							"ipv4": {
								"name": "ipv4",
								"show_name": "Learn IPv4 Binding",
								"desc": "Learn IPv4 MAC binding if possible",
								"required": true,
								"has_default": true,
								"default_value": false,
								"type": {
									"type": "bool",
									"base_type": "bool",
									"params": {
									}
								},
								"direct_view": true
							},
							"coreloc": {
								"name": "coreloc",
								"show_name": "Exec Unit",
								"desc": "Use Execution Unit",
								"required": false,
								"has_default": true,
								"default_value": 0,
								"type": {
									"type": "cpu",
									"base_type": "enum",
									"params": {
									},
									"enum": {
										"0": "Auto",
										"1": "ExecUnit.1 S0.C4.0",
										"2": "ExecUnit.2 S0.C5.0",
										"3": "ExecUnit.3 S0.C6.0",
										"4": "ExecUnit.4 S0.C7.0",
										"5": "ExecUnit.5 S0.C8.0",
										"6": "ExecUnit.6 S0.C9.0",
										"7": "ExecUnit.7 S0.C10.0",
										"8": "ExecUnit.8 S0.C11.0",
										"9": "ExecUnit.9 S0.C12.0",
										"10": "ExecUnit.10 S0.C13.0",
										"11": "ExecUnit.11 S0.C14.0",
										"12": "ExecUnit.12 S0.C15.0",
										"13": "ExecUnit.13 S0.C16.0",
										"14": "ExecUnit.14 S0.C17.0",
										"15": "ExecUnit.15 S0.C18.0",
										"16": "ExecUnit.16 S0.C19.0",
										"17": "ExecUnit.17 S0.C20.0",
										"18": "ExecUnit.18 S0.C21.0",
										"19": "ExecUnit.19 S0.C22.0",
										"20": "ExecUnit.20 S0.C23.0",
										"21": "ExecUnit.21 S0.C4.1",
										"22": "ExecUnit.22 S0.C5.1",
										"23": "ExecUnit.23 S0.C6.1",
										"24": "ExecUnit.24 S0.C7.1",
										"25": "ExecUnit.25 S0.C8.1",
										"26": "ExecUnit.26 S0.C9.1",
										"27": "ExecUnit.27 S0.C10.1",
										"28": "ExecUnit.28 S0.C11.1",
										"29": "ExecUnit.29 S0.C12.1",
										"30": "ExecUnit.30 S0.C13.1",
										"31": "ExecUnit.31 S0.C14.1",
										"32": "ExecUnit.32 S0.C15.1",
										"33": "ExecUnit.33 S0.C16.1",
										"34": "ExecUnit.34 S0.C17.1",
										"35": "ExecUnit.35 S0.C18.1",
										"36": "ExecUnit.36 S0.C19.1",
										"37": "ExecUnit.37 S0.C20.1",
										"38": "ExecUnit.38 S0.C21.1",
										"39": "ExecUnit.39 S0.C22.1",
										"40": "ExecUnit.40 S0.C23.1"
									},
									"short_enum": {
										"0": "Auto",
										"1": "ExecUnit.1",
										"2": "ExecUnit.2",
										"3": "ExecUnit.3",
										"4": "ExecUnit.4",
										"5": "ExecUnit.5",
										"6": "ExecUnit.6",
										"7": "ExecUnit.7",
										"8": "ExecUnit.8",
										"9": "ExecUnit.9",
										"10": "ExecUnit.10",
										"11": "ExecUnit.11",
										"12": "ExecUnit.12",
										"13": "ExecUnit.13",
										"14": "ExecUnit.14",
										"15": "ExecUnit.15",
										"16": "ExecUnit.16",
										"17": "ExecUnit.17",
										"18": "ExecUnit.18",
										"19": "ExecUnit.19",
										"20": "ExecUnit.20",
										"21": "ExecUnit.21",
										"22": "ExecUnit.22",
										"23": "ExecUnit.23",
										"24": "ExecUnit.24",
										"25": "ExecUnit.25",
										"26": "ExecUnit.26",
										"27": "ExecUnit.27",
										"28": "ExecUnit.28",
										"29": "ExecUnit.29",
										"30": "ExecUnit.30",
										"31": "ExecUnit.31",
										"32": "ExecUnit.32",
										"33": "ExecUnit.33",
										"34": "ExecUnit.34",
										"35": "ExecUnit.35",
										"36": "ExecUnit.36",
										"37": "ExecUnit.37",
										"38": "ExecUnit.38",
										"39": "ExecUnit.39",
										"40": "ExecUnit.40"
									}
								},
								"direct_view": false
							}
						},
						"connections": {
							"components.filter": {
								"id": "components.filter",
								"count": "n"
							},
							"components.aggregator": {
								"id": "components.aggregator",
								"count": "n"
							},
							"components.replicator": {
								"id": "components.replicator",
								"count": "n"
							},
							"components.flowexport": {
								"id": "components.flowexport",
								"count": "n"
							},
							"components.capture": {
								"id": "components.capture",
								"count": "n"
							},
							"components.capturev4": {
								"id": "components.capturev4",
								"count": "n"
							},
							"components.egressport": {
								"id": "components.egressport",
								"count": "n"
							},
							"components.loadbalancer": {
								"id": "components.loadbalancer",
								"count": "n"
							},
							"components.ipmask": {
								"id": "components.ipmask"
							}
						}
					},
					"mbkiller": {
						"name": "mbkiller",
						"show_name": "Microburst Controller",
						"test_application": false,
						"desc": "Microburst Controller Component",
						"icon": "components.mburstkiller.png",
						"flow_direction": "left_right",
						"inputs": {
							"in": {
								"name": "in",
								"show_name": "",
								"style": "solid_in_arrow"
							},
							"in1": {
								"name": "in1",
								"show_name": "",
								"style": "solid_in_arrow"
							},
							"in2": {
								"name": "in2",
								"show_name": "",
								"style": "solid_in_arrow"
							}
						},
						"outputs": {
							"out": {
								"name": "out",
								"show_name": "",
								"style": "solid_out_arrow"
							},
							"out1": {
								"name": "out1",
								"show_name": "",
								"style": "solid_out_arrow"
							},
							"out2": {
								"name": "out2",
								"show_name": "",
								"style": "solid_out_arrow"
							}
						},
						"show_load_definition": false,
						"show_msgseq": false,
						"params": {
							"comp_name": {
								"name": "comp_name",
								"show_name": "Name",
								"desc": "Component Name",
								"required": true,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "id",
									"base_type": "string",
									"params": {
									}
								},
								"direct_view": true
							},
							"notes": {
								"name": "notes",
								"show_name": "Notes",
								"desc": "Description and comment about this component",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "note",
									"base_type": "string",
									"params": {
									}
								},
								"direct_view": false
							},
							"maxPktMemSizeMB": {
								"name": "maxPktMemSizeMB",
								"show_name": "Buffer Size (MB)",
								"desc": "Packet buffer size in the unit of MB",
								"required": false,
								"has_default": true,
								"default_value": 256,
								"type": {
									"type": "integer_range",
									"base_type": "integer",
									"params": {
									},
									"range": {
										"min": 1,
										"max": 100000,
										"inclusive": true
									},
									"fmt": null
								},
								"direct_view": true
							},
							"egressBandwidth": {
								"name": "egressBandwidth",
								"show_name": "Max Xmit Mbit/s",
								"desc": "Max egress bandwidth Mbit/s",
								"required": false,
								"has_default": true,
								"default_value": 5000,
								"type": {
									"type": "integer_range",
									"base_type": "integer",
									"params": {
									},
									"range": {
										"min": 0,
										"max": 100000,
										"inclusive": true
									},
									"fmt": null
								},
								"direct_view": true
							},
							"egressPktrate": {
								"name": "egressPktrate",
								"show_name": "Max Xmit Pkt/s",
								"desc": "Max egress packet rate measured in pkt/s",
								"required": false,
								"has_default": true,
								"default_value": 1000000,
								"type": {
									"type": "integer_range",
									"base_type": "integer",
									"params": {
									},
									"range": {
										"min": 0,
										"max": 200000000,
										"inclusive": true
									},
									"fmt": null
								},
								"direct_view": true
							},
							"bundleSize": {
								"name": "bundleSize",
								"show_name": "Max Pkts/Transmit",
								"desc": "Max number of packets sent in a bundle",
								"required": false,
								"has_default": true,
								"default_value": 16,
								"type": {
									"type": "port_xmit_pkt_bundle",
									"base_type": "enum",
									"params": {
									},
									"enum": {
										"1": "1 pkt/bundle",
										"4": "4 Pkts/bundle",
										"16": "16 Pkts/bundle",
										"32": "32 Pkts/bundle",
										"64": "64 Pkts/bundle"
									}
								},
								"direct_view": false
							},
							"coreloc": {
								"name": "coreloc",
								"show_name": "Exec Unit",
								"desc": "Use Execution Unit",
								"required": false,
								"has_default": true,
								"default_value": 0,
								"type": {
									"type": "cpu",
									"base_type": "enum",
									"params": {
									},
									"enum": {
										"0": "Auto",
										"1": "ExecUnit.1 S0.C4.0",
										"2": "ExecUnit.2 S0.C5.0",
										"3": "ExecUnit.3 S0.C6.0",
										"4": "ExecUnit.4 S0.C7.0",
										"5": "ExecUnit.5 S0.C8.0",
										"6": "ExecUnit.6 S0.C9.0",
										"7": "ExecUnit.7 S0.C10.0",
										"8": "ExecUnit.8 S0.C11.0",
										"9": "ExecUnit.9 S0.C12.0",
										"10": "ExecUnit.10 S0.C13.0",
										"11": "ExecUnit.11 S0.C14.0",
										"12": "ExecUnit.12 S0.C15.0",
										"13": "ExecUnit.13 S0.C16.0",
										"14": "ExecUnit.14 S0.C17.0",
										"15": "ExecUnit.15 S0.C18.0",
										"16": "ExecUnit.16 S0.C19.0",
										"17": "ExecUnit.17 S0.C20.0",
										"18": "ExecUnit.18 S0.C21.0",
										"19": "ExecUnit.19 S0.C22.0",
										"20": "ExecUnit.20 S0.C23.0",
										"21": "ExecUnit.21 S0.C4.1",
										"22": "ExecUnit.22 S0.C5.1",
										"23": "ExecUnit.23 S0.C6.1",
										"24": "ExecUnit.24 S0.C7.1",
										"25": "ExecUnit.25 S0.C8.1",
										"26": "ExecUnit.26 S0.C9.1",
										"27": "ExecUnit.27 S0.C10.1",
										"28": "ExecUnit.28 S0.C11.1",
										"29": "ExecUnit.29 S0.C12.1",
										"30": "ExecUnit.30 S0.C13.1",
										"31": "ExecUnit.31 S0.C14.1",
										"32": "ExecUnit.32 S0.C15.1",
										"33": "ExecUnit.33 S0.C16.1",
										"34": "ExecUnit.34 S0.C17.1",
										"35": "ExecUnit.35 S0.C18.1",
										"36": "ExecUnit.36 S0.C19.1",
										"37": "ExecUnit.37 S0.C20.1",
										"38": "ExecUnit.38 S0.C21.1",
										"39": "ExecUnit.39 S0.C22.1",
										"40": "ExecUnit.40 S0.C23.1"
									},
									"short_enum": {
										"0": "Auto",
										"1": "ExecUnit.1",
										"2": "ExecUnit.2",
										"3": "ExecUnit.3",
										"4": "ExecUnit.4",
										"5": "ExecUnit.5",
										"6": "ExecUnit.6",
										"7": "ExecUnit.7",
										"8": "ExecUnit.8",
										"9": "ExecUnit.9",
										"10": "ExecUnit.10",
										"11": "ExecUnit.11",
										"12": "ExecUnit.12",
										"13": "ExecUnit.13",
										"14": "ExecUnit.14",
										"15": "ExecUnit.15",
										"16": "ExecUnit.16",
										"17": "ExecUnit.17",
										"18": "ExecUnit.18",
										"19": "ExecUnit.19",
										"20": "ExecUnit.20",
										"21": "ExecUnit.21",
										"22": "ExecUnit.22",
										"23": "ExecUnit.23",
										"24": "ExecUnit.24",
										"25": "ExecUnit.25",
										"26": "ExecUnit.26",
										"27": "ExecUnit.27",
										"28": "ExecUnit.28",
										"29": "ExecUnit.29",
										"30": "ExecUnit.30",
										"31": "ExecUnit.31",
										"32": "ExecUnit.32",
										"33": "ExecUnit.33",
										"34": "ExecUnit.34",
										"35": "ExecUnit.35",
										"36": "ExecUnit.36",
										"37": "ExecUnit.37",
										"38": "ExecUnit.38",
										"39": "ExecUnit.39",
										"40": "ExecUnit.40"
									}
								},
								"direct_view": false
							}
						},
						"connections": {
							"components.filter": {
								"id": "components.filter",
								"count": "n"
							},
							"components.aggregator": {
								"id": "components.aggregator",
								"count": "n"
							},
							"components.replicator": {
								"id": "components.replicator",
								"count": "n"
							},
							"components.flowexport": {
								"id": "components.flowexport",
								"count": "n"
							},
							"components.capture": {
								"id": "components.capture",
								"count": "n"
							},
							"components.capturev4": {
								"id": "components.capturev4",
								"count": "n"
							},
							"components.egressport": {
								"id": "components.egressport",
								"count": "n"
							},
							"components.loadbalancer": {
								"id": "components.loadbalancer",
								"count": "n"
							},
							"components.ipmask": {
								"id": "components.ipmask"
							}
						}
					},
					"matchaction": {
						"name": "matchaction",
						"show_name": "Match Action",
						"test_application": false,
						"desc": "Match Action Component",
						"icon": "components.matchaction.png",
						"flow_direction": "left_right",
						"inputs": {
							"in": {
								"name": "in",
								"show_name": "",
								"style": "solid_in_arrow"
							},
							"in1": {
								"name": "in1",
								"show_name": "",
								"style": "solid_in_arrow"
							},
							"in2": {
								"name": "in2",
								"show_name": "",
								"style": "solid_in_arrow"
							}
						},
						"outputs": {
							"out": {
								"name": "out",
								"show_name": "",
								"style": "solid_out_arrow"
							},
							"out1": {
								"name": "out1",
								"show_name": "",
								"style": "solid_out_arrow"
							},
							"out2": {
								"name": "out2",
								"show_name": "",
								"style": "solid_out_arrow"
							}
						},
						"show_load_definition": false,
						"show_msgseq": false,
						"params": {
							"comp_name": {
								"name": "comp_name",
								"show_name": "Name",
								"desc": "Component Name",
								"required": true,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "id",
									"base_type": "string",
									"params": {
									}
								},
								"direct_view": true
							},
							"in_pad_count": {
								"name": "in_pad_count",
								"show_name": "Input Pad Count",
								"desc": "Input Pad Count",
								"required": false,
								"has_default": true,
								"default_value": 2,
								"type": {
									"type": "integer_range",
									"base_type": "integer",
									"params": {
									},
									"range": {
										"min": 2,
										"max": 8,
										"inclusive": true
									},
									"fmt": null
								},
								"direct_view": false
							},
							"out_pad_count": {
								"name": "out_pad_count",
								"show_name": "Output Pad Count",
								"desc": "Output Pad Count",
								"required": false,
								"has_default": true,
								"default_value": 2,
								"type": {
									"type": "integer_range",
									"base_type": "integer",
									"params": {
									},
									"range": {
										"min": 2,
										"max": 8,
										"inclusive": true
									},
									"fmt": null
								},
								"direct_view": false
							},
							"egressmode": {
								"name": "egressmode",
								"show_name": "Egress Mode",
								"desc": "Egress Mode",
								"required": false,
								"has_default": true,
								"default_value": 1,
								"type": {
									"type": "patmatch_egressmode",
									"base_type": "enum",
									"params": {
									},
									"enum": {
										"0": "Drop All",
										"1": "Use Rule",
										"2": "Pass All"
									}
								},
								"direct_view": false
							},
							"rule_attribute_group": {
								"name": "rule_attribute_group",
								"show_name": "Rule Database Controls",
								"desc": "Rule Database Controls",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "group_settings",
									"base_type": "integer",
									"params": {
									}
								},
								"direct_view": false
							},
							"rules_db_selector": {
								"name": "rules_db_selector",
								"show_name": "Match Action Rules",
								"desc": "Specify the default match action rules from library",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "content_object_selector",
									"base_type": "string",
									"params": {
										"catgory": "Match-Action-Rules"
									}
								},
								"direct_view": false
							},
							"log_server": {
								"name": "log_server",
								"show_name": "Log Servers",
								"desc": "Specify the log server list from library",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "content_object_selector",
									"base_type": "string",
									"params": {
										"catgory": "LogServerDefinitions"
									}
								},
								"direct_view": false
							},
							"rulenotmatchedaction": {
								"name": "rulenotmatchedaction",
								"show_name": "No Match Action",
								"desc": "Specify the default action when no match found",
								"required": true,
								"has_default": true,
								"default_value": 0,
								"type": {
									"type": "defaultmatchaction",
									"base_type": "enum",
									"params": {
									},
									"enum": {
										"0": "Pass",
										"1": "Drop"
									}
								},
								"direct_view": false
							},
							"nonipv46action": {
								"name": "nonipv46action",
								"show_name": "Non IP Packet",
								"desc": "Specify the action when packet is not IPv4 and IPv6",
								"required": true,
								"has_default": true,
								"default_value": 0,
								"type": {
									"type": "defaultmatchaction",
									"base_type": "enum",
									"params": {
									},
									"enum": {
										"0": "Pass",
										"1": "Drop"
									}
								},
								"direct_view": false
							},
							"reuse_lastupload_batch": {
								"name": "reuse_lastupload_batch",
								"show_name": "Reuse Last Upload Batch",
								"desc": "Reuse the last uploaded batch of rules",
								"required": true,
								"has_default": true,
								"default_value": false,
								"type": {
									"type": "bool",
									"base_type": "bool",
									"params": {
									}
								},
								"direct_view": false
							},
							"dns_attribute_group": {
								"name": "dns_attribute_group",
								"show_name": "DNS Match Controls",
								"desc": "DNS Match Controls",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "group_settings",
									"base_type": "integer",
									"params": {
									}
								},
								"direct_view": false
							},
							"dns_check_request": {
								"name": "dns_check_request",
								"show_name": "Check DNS Request",
								"desc": "Check DNS Query",
								"required": true,
								"has_default": true,
								"default_value": true,
								"type": {
									"type": "bool",
									"base_type": "bool",
									"params": {
									}
								},
								"direct_view": false
							},
							"dns_check_response": {
								"name": "dns_check_response",
								"show_name": "Check DNS Response",
								"desc": "Check DNS Answer",
								"required": true,
								"has_default": true,
								"default_value": false,
								"type": {
									"type": "bool",
									"base_type": "bool",
									"params": {
									}
								},
								"direct_view": false
							},
							"dns_learn_ip_in_answer": {
								"name": "dns_learn_ip_in_answer",
								"show_name": "Learn IP from DNS Response",
								"desc": "Learn IP carried in the DNS Answer",
								"required": true,
								"has_default": true,
								"default_value": false,
								"type": {
									"type": "bool",
									"base_type": "bool",
									"params": {
									}
								},
								"direct_view": false
							},
							"coreloc": {
								"name": "coreloc",
								"show_name": "Exec Unit",
								"desc": "Use Execution Unit",
								"required": false,
								"has_default": true,
								"default_value": 0,
								"type": {
									"type": "cpu",
									"base_type": "enum",
									"params": {
									},
									"enum": {
										"0": "Auto",
										"1": "ExecUnit.1 S0.C4.0",
										"2": "ExecUnit.2 S0.C5.0",
										"3": "ExecUnit.3 S0.C6.0",
										"4": "ExecUnit.4 S0.C7.0",
										"5": "ExecUnit.5 S0.C8.0",
										"6": "ExecUnit.6 S0.C9.0",
										"7": "ExecUnit.7 S0.C10.0",
										"8": "ExecUnit.8 S0.C11.0",
										"9": "ExecUnit.9 S0.C12.0",
										"10": "ExecUnit.10 S0.C13.0",
										"11": "ExecUnit.11 S0.C14.0",
										"12": "ExecUnit.12 S0.C15.0",
										"13": "ExecUnit.13 S0.C16.0",
										"14": "ExecUnit.14 S0.C17.0",
										"15": "ExecUnit.15 S0.C18.0",
										"16": "ExecUnit.16 S0.C19.0",
										"17": "ExecUnit.17 S0.C20.0",
										"18": "ExecUnit.18 S0.C21.0",
										"19": "ExecUnit.19 S0.C22.0",
										"20": "ExecUnit.20 S0.C23.0",
										"21": "ExecUnit.21 S0.C4.1",
										"22": "ExecUnit.22 S0.C5.1",
										"23": "ExecUnit.23 S0.C6.1",
										"24": "ExecUnit.24 S0.C7.1",
										"25": "ExecUnit.25 S0.C8.1",
										"26": "ExecUnit.26 S0.C9.1",
										"27": "ExecUnit.27 S0.C10.1",
										"28": "ExecUnit.28 S0.C11.1",
										"29": "ExecUnit.29 S0.C12.1",
										"30": "ExecUnit.30 S0.C13.1",
										"31": "ExecUnit.31 S0.C14.1",
										"32": "ExecUnit.32 S0.C15.1",
										"33": "ExecUnit.33 S0.C16.1",
										"34": "ExecUnit.34 S0.C17.1",
										"35": "ExecUnit.35 S0.C18.1",
										"36": "ExecUnit.36 S0.C19.1",
										"37": "ExecUnit.37 S0.C20.1",
										"38": "ExecUnit.38 S0.C21.1",
										"39": "ExecUnit.39 S0.C22.1",
										"40": "ExecUnit.40 S0.C23.1"
									},
									"short_enum": {
										"0": "Auto",
										"1": "ExecUnit.1",
										"2": "ExecUnit.2",
										"3": "ExecUnit.3",
										"4": "ExecUnit.4",
										"5": "ExecUnit.5",
										"6": "ExecUnit.6",
										"7": "ExecUnit.7",
										"8": "ExecUnit.8",
										"9": "ExecUnit.9",
										"10": "ExecUnit.10",
										"11": "ExecUnit.11",
										"12": "ExecUnit.12",
										"13": "ExecUnit.13",
										"14": "ExecUnit.14",
										"15": "ExecUnit.15",
										"16": "ExecUnit.16",
										"17": "ExecUnit.17",
										"18": "ExecUnit.18",
										"19": "ExecUnit.19",
										"20": "ExecUnit.20",
										"21": "ExecUnit.21",
										"22": "ExecUnit.22",
										"23": "ExecUnit.23",
										"24": "ExecUnit.24",
										"25": "ExecUnit.25",
										"26": "ExecUnit.26",
										"27": "ExecUnit.27",
										"28": "ExecUnit.28",
										"29": "ExecUnit.29",
										"30": "ExecUnit.30",
										"31": "ExecUnit.31",
										"32": "ExecUnit.32",
										"33": "ExecUnit.33",
										"34": "ExecUnit.34",
										"35": "ExecUnit.35",
										"36": "ExecUnit.36",
										"37": "ExecUnit.37",
										"38": "ExecUnit.38",
										"39": "ExecUnit.39",
										"40": "ExecUnit.40"
									}
								},
								"direct_view": false
							}
						},
						"connections": {
							"components.filter": {
								"id": "components.filter",
								"count": "n"
							},
							"components.aggregator": {
								"id": "components.aggregator",
								"count": "n"
							},
							"components.replicator": {
								"id": "components.replicator",
								"count": "n"
							},
							"components.flowexport": {
								"id": "components.flowexport",
								"count": "n"
							},
							"components.capture": {
								"id": "components.capture",
								"count": "n"
							},
							"components.capturev4": {
								"id": "components.capturev4",
								"count": "n"
							},
							"components.egressport": {
								"id": "components.egressport",
								"count": "n"
							},
							"components.loadbalancer": {
								"id": "components.loadbalancer",
								"count": "n"
							},
							"components.ipmask": {
								"id": "components.ipmask"
							},
							"components.mux": {
								"id": "components.mux",
								"count": "n"
							}
						}
					},
					"patternmatcher": {
						"name": "patternmatcher",
						"show_name": "Pattern Matcher",
						"test_application": false,
						"desc": "Pattern Match Component",
						"icon": "components.patternmatch.png",
						"flow_direction": "left_right",
						"inputs": {
							"in": {
								"name": "in",
								"show_name": "",
								"style": "solid_in_arrow"
							},
							"in1": {
								"name": "in1",
								"show_name": "",
								"style": "solid_in_arrow"
							},
							"in2": {
								"name": "in2",
								"show_name": "",
								"style": "solid_in_arrow"
							}
						},
						"outputs": {
							"out": {
								"name": "out",
								"show_name": "",
								"style": "solid_out_arrow"
							},
							"out1": {
								"name": "out1",
								"show_name": "",
								"style": "solid_out_arrow"
							},
							"out2": {
								"name": "out2",
								"show_name": "",
								"style": "solid_out_arrow"
							}
						},
						"show_load_definition": false,
						"show_msgseq": false,
						"params": {
							"comp_name": {
								"name": "comp_name",
								"show_name": "Name",
								"desc": "Component Name",
								"required": true,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "id",
									"base_type": "string",
									"params": {
									}
								},
								"direct_view": true
							},
							"out_pad_count": {
								"name": "out_pad_count",
								"show_name": "Output Pad Count",
								"desc": "Output Pad Count",
								"required": false,
								"has_default": true,
								"default_value": 2,
								"type": {
									"type": "integer_range",
									"base_type": "integer",
									"params": {
									},
									"range": {
										"min": 2,
										"max": 2,
										"inclusive": true
									},
									"fmt": null
								},
								"direct_view": false
							},
							"egressmode": {
								"name": "egressmode",
								"show_name": "Egress Mode",
								"desc": "Egress Mode",
								"required": false,
								"has_default": true,
								"default_value": 0,
								"type": {
									"type": "patmatch_egressmode",
									"base_type": "enum",
									"params": {
									},
									"enum": {
										"0": "Drop",
										"1": "Matched Pkts: Pad.1",
										"2": "Unmatched Pkts: Pad.2",
										"3": "All Pkts: Pad.1",
										"4": "Matched Pkts Pad1, other Pad2",
										"5": "Matched Session: Pad1, other Pad2"
									}
								},
								"direct_view": false
							},
							"pattern_db_selector": {
								"name": "pattern_db_selector",
								"show_name": "Patterns",
								"desc": "Specify the pattern file name",
								"required": true,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "pattern_db_selector",
									"base_type": "string",
									"params": {
									}
								},
								"direct_view": false
							},
							"udppktqueuedepth": {
								"name": "udppktqueuedepth",
								"show_name": "UDP Pkt Queue Depth",
								"desc": "Max number of UDP packets that can be queued",
								"required": false,
								"has_default": true,
								"default_value": 256,
								"type": {
									"type": "integer_range",
									"base_type": "integer",
									"params": {
									},
									"range": {
										"min": 0,
										"max": 4096,
										"inclusive": true
									},
									"fmt": null
								},
								"direct_view": false
							},
							"tcppktqueuedepth": {
								"name": "tcppktqueuedepth",
								"show_name": "TCP Pkt Queue Depth",
								"desc": "Max number of TCP packets that can be queued",
								"required": false,
								"has_default": true,
								"default_value": 1024,
								"type": {
									"type": "integer_range",
									"base_type": "integer",
									"params": {
									},
									"range": {
										"min": 0,
										"max": 8192,
										"inclusive": true
									},
									"fmt": null
								},
								"direct_view": false
							},
							"coreloc": {
								"name": "coreloc",
								"show_name": "Exec Unit",
								"desc": "Use Execution Unit",
								"required": false,
								"has_default": true,
								"default_value": 0,
								"type": {
									"type": "cpu",
									"base_type": "enum",
									"params": {
									},
									"enum": {
										"0": "Auto",
										"1": "ExecUnit.1 S0.C4.0",
										"2": "ExecUnit.2 S0.C5.0",
										"3": "ExecUnit.3 S0.C6.0",
										"4": "ExecUnit.4 S0.C7.0",
										"5": "ExecUnit.5 S0.C8.0",
										"6": "ExecUnit.6 S0.C9.0",
										"7": "ExecUnit.7 S0.C10.0",
										"8": "ExecUnit.8 S0.C11.0",
										"9": "ExecUnit.9 S0.C12.0",
										"10": "ExecUnit.10 S0.C13.0",
										"11": "ExecUnit.11 S0.C14.0",
										"12": "ExecUnit.12 S0.C15.0",
										"13": "ExecUnit.13 S0.C16.0",
										"14": "ExecUnit.14 S0.C17.0",
										"15": "ExecUnit.15 S0.C18.0",
										"16": "ExecUnit.16 S0.C19.0",
										"17": "ExecUnit.17 S0.C20.0",
										"18": "ExecUnit.18 S0.C21.0",
										"19": "ExecUnit.19 S0.C22.0",
										"20": "ExecUnit.20 S0.C23.0",
										"21": "ExecUnit.21 S0.C4.1",
										"22": "ExecUnit.22 S0.C5.1",
										"23": "ExecUnit.23 S0.C6.1",
										"24": "ExecUnit.24 S0.C7.1",
										"25": "ExecUnit.25 S0.C8.1",
										"26": "ExecUnit.26 S0.C9.1",
										"27": "ExecUnit.27 S0.C10.1",
										"28": "ExecUnit.28 S0.C11.1",
										"29": "ExecUnit.29 S0.C12.1",
										"30": "ExecUnit.30 S0.C13.1",
										"31": "ExecUnit.31 S0.C14.1",
										"32": "ExecUnit.32 S0.C15.1",
										"33": "ExecUnit.33 S0.C16.1",
										"34": "ExecUnit.34 S0.C17.1",
										"35": "ExecUnit.35 S0.C18.1",
										"36": "ExecUnit.36 S0.C19.1",
										"37": "ExecUnit.37 S0.C20.1",
										"38": "ExecUnit.38 S0.C21.1",
										"39": "ExecUnit.39 S0.C22.1",
										"40": "ExecUnit.40 S0.C23.1"
									},
									"short_enum": {
										"0": "Auto",
										"1": "ExecUnit.1",
										"2": "ExecUnit.2",
										"3": "ExecUnit.3",
										"4": "ExecUnit.4",
										"5": "ExecUnit.5",
										"6": "ExecUnit.6",
										"7": "ExecUnit.7",
										"8": "ExecUnit.8",
										"9": "ExecUnit.9",
										"10": "ExecUnit.10",
										"11": "ExecUnit.11",
										"12": "ExecUnit.12",
										"13": "ExecUnit.13",
										"14": "ExecUnit.14",
										"15": "ExecUnit.15",
										"16": "ExecUnit.16",
										"17": "ExecUnit.17",
										"18": "ExecUnit.18",
										"19": "ExecUnit.19",
										"20": "ExecUnit.20",
										"21": "ExecUnit.21",
										"22": "ExecUnit.22",
										"23": "ExecUnit.23",
										"24": "ExecUnit.24",
										"25": "ExecUnit.25",
										"26": "ExecUnit.26",
										"27": "ExecUnit.27",
										"28": "ExecUnit.28",
										"29": "ExecUnit.29",
										"30": "ExecUnit.30",
										"31": "ExecUnit.31",
										"32": "ExecUnit.32",
										"33": "ExecUnit.33",
										"34": "ExecUnit.34",
										"35": "ExecUnit.35",
										"36": "ExecUnit.36",
										"37": "ExecUnit.37",
										"38": "ExecUnit.38",
										"39": "ExecUnit.39",
										"40": "ExecUnit.40"
									}
								},
								"direct_view": false
							}
						},
						"connections": {
							"components.filter": {
								"id": "components.filter",
								"count": "n"
							},
							"components.aggregator": {
								"id": "components.aggregator",
								"count": "n"
							},
							"components.replicator": {
								"id": "components.replicator",
								"count": "n"
							},
							"components.flowexport": {
								"id": "components.flowexport",
								"count": "n"
							},
							"components.capture": {
								"id": "components.capture",
								"count": "n"
							},
							"components.capturev4": {
								"id": "components.capturev4",
								"count": "n"
							},
							"components.egressport": {
								"id": "components.egressport",
								"count": "n"
							},
							"components.loadbalancer": {
								"id": "components.loadbalancer",
								"count": "n"
							},
							"components.ipmask": {
								"id": "components.ipmask"
							},
							"components.mux": {
								"id": "components.mux",
								"count": "n"
							}
						}
					}
				},
				"top_ui": true
			},
			"hwaccel": {
				"name": "hwaccel",
				"show_name": "Hardware&Xcellator",
				"desc": "Special hardware or hardware resources that could accelerate the processing",
				"func": {
					"powerlossbypass": {
						"name": "powerlossbypass",
						"show_name": "Powerloss Bypass",
						"test_application": false,
						"desc": "Powerloss bypass relay controls",
						"icon": "hwaccel.bypassrelay.png",
						"flow_direction": "left_right",
						"inputs": null,
						"outputs": null,
						"show_load_definition": false,
						"show_msgseq": false,
						"params": {
							"comp_name": {
								"name": "comp_name",
								"show_name": "Name",
								"desc": "Component Name",
								"required": true,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "id",
									"base_type": "string",
									"params": {
									}
								},
								"direct_view": true
							},
							"notes": {
								"name": "notes",
								"show_name": "Notes",
								"desc": "Description and comment about this component",
								"required": false,
								"has_default": true,
								"default_value": "",
								"type": {
									"type": "note",
									"base_type": "string",
									"params": {
									}
								},
								"direct_view": false
							},
							"coreloc": {
								"name": "coreloc",
								"show_name": "Exec Unit",
								"desc": "Use Execution Unit",
								"required": false,
								"has_default": true,
								"default_value": 0,
								"type": {
									"type": "cpu",
									"base_type": "enum",
									"params": {
									},
									"enum": {
										"0": "Auto",
										"1": "ExecUnit.1 S0.C4.0",
										"2": "ExecUnit.2 S0.C5.0",
										"3": "ExecUnit.3 S0.C6.0",
										"4": "ExecUnit.4 S0.C7.0",
										"5": "ExecUnit.5 S0.C8.0",
										"6": "ExecUnit.6 S0.C9.0",
										"7": "ExecUnit.7 S0.C10.0",
										"8": "ExecUnit.8 S0.C11.0",
										"9": "ExecUnit.9 S0.C12.0",
										"10": "ExecUnit.10 S0.C13.0",
										"11": "ExecUnit.11 S0.C14.0",
										"12": "ExecUnit.12 S0.C15.0",
										"13": "ExecUnit.13 S0.C16.0",
										"14": "ExecUnit.14 S0.C17.0",
										"15": "ExecUnit.15 S0.C18.0",
										"16": "ExecUnit.16 S0.C19.0",
										"17": "ExecUnit.17 S0.C20.0",
										"18": "ExecUnit.18 S0.C21.0",
										"19": "ExecUnit.19 S0.C22.0",
										"20": "ExecUnit.20 S0.C23.0",
										"21": "ExecUnit.21 S0.C4.1",
										"22": "ExecUnit.22 S0.C5.1",
										"23": "ExecUnit.23 S0.C6.1",
										"24": "ExecUnit.24 S0.C7.1",
										"25": "ExecUnit.25 S0.C8.1",
										"26": "ExecUnit.26 S0.C9.1",
										"27": "ExecUnit.27 S0.C10.1",
										"28": "ExecUnit.28 S0.C11.1",
										"29": "ExecUnit.29 S0.C12.1",
										"30": "ExecUnit.30 S0.C13.1",
										"31": "ExecUnit.31 S0.C14.1",
										"32": "ExecUnit.32 S0.C15.1",
										"33": "ExecUnit.33 S0.C16.1",
										"34": "ExecUnit.34 S0.C17.1",
										"35": "ExecUnit.35 S0.C18.1",
										"36": "ExecUnit.36 S0.C19.1",
										"37": "ExecUnit.37 S0.C20.1",
										"38": "ExecUnit.38 S0.C21.1",
										"39": "ExecUnit.39 S0.C22.1",
										"40": "ExecUnit.40 S0.C23.1"
									},
									"short_enum": {
										"0": "Auto",
										"1": "ExecUnit.1",
										"2": "ExecUnit.2",
										"3": "ExecUnit.3",
										"4": "ExecUnit.4",
										"5": "ExecUnit.5",
										"6": "ExecUnit.6",
										"7": "ExecUnit.7",
										"8": "ExecUnit.8",
										"9": "ExecUnit.9",
										"10": "ExecUnit.10",
										"11": "ExecUnit.11",
										"12": "ExecUnit.12",
										"13": "ExecUnit.13",
										"14": "ExecUnit.14",
										"15": "ExecUnit.15",
										"16": "ExecUnit.16",
										"17": "ExecUnit.17",
										"18": "ExecUnit.18",
										"19": "ExecUnit.19",
										"20": "ExecUnit.20",
										"21": "ExecUnit.21",
										"22": "ExecUnit.22",
										"23": "ExecUnit.23",
										"24": "ExecUnit.24",
										"25": "ExecUnit.25",
										"26": "ExecUnit.26",
										"27": "ExecUnit.27",
										"28": "ExecUnit.28",
										"29": "ExecUnit.29",
										"30": "ExecUnit.30",
										"31": "ExecUnit.31",
										"32": "ExecUnit.32",
										"33": "ExecUnit.33",
										"34": "ExecUnit.34",
										"35": "ExecUnit.35",
										"36": "ExecUnit.36",
										"37": "ExecUnit.37",
										"38": "ExecUnit.38",
										"39": "ExecUnit.39",
										"40": "ExecUnit.40"
									}
								},
								"direct_view": false
							}
						},
						"connections": {
						}
					}
				},
				"top_ui": true
			}
		}
	}
	  
})();
