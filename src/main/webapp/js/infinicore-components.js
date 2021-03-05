
/*
 * InfiniCORE Networks Configuration Object Spec.
 * Machine Generated, do not modify
**/
    window.InfiniCOREComponentsDesc = 
        {
  "service_global": {
    "name": "service_global",
    "short_name": "Service Configuration",
    "desc": "Service Global Configuration",
    "icon": "service_global.svg",
    "params": {
      "automation": {
        "key": "automation",
        "show_name": "Automation",
        "desc": "Automation Behavior",
        "type": {
          "type_name": "enum",
          "desc": {
            "multiple": false,
            "values": [
              {
                "id": 0,
                "name": "Start when system boots up",
                "long_name": "",
                "help": "",
                "display": {
                }
              },
              {
                "id": 1,
                "name": "Start manually",
                "long_name": "",
                "help": "",
                "display": {
                }
              }
            ]
          }
        },
        "required": false,
        "default_value": 1,
        "depends": [

        ]
      },
      "optimization": {
        "key": "optimization",
        "show_name": "Optimization",
        "desc": "Optimization goal",
        "type": {
          "type_name": "enum",
          "desc": {
            "multiple": false,
            "values": [
              {
                "id": 0,
                "name": "Maximize Throughput",
                "long_name": "",
                "help": "",
                "display": {
                }
              },
              {
                "id": 1,
                "name": "Minimize Latency",
                "long_name": "",
                "help": "",
                "display": {
                }
              }
            ]
          }
        },
        "required": false,
        "default_value": 1,
        "depends": [

        ]
      },
      "cpufloorplan": {
        "key": "cpufloorplan",
        "show_name": "Processors",
        "desc": "Processors allocation",
        "type": {
          "type_name": "api",
          "desc": {
            "api": "get_type_instance",
            "owner": {
              "object": "service_global",
              "property": "corefloorplan"
            },
            "user_inputs": null
          }
        },
        "required": false,
        "default_value": 0,
        "depends": [

        ]
      }
    }
  },
  "ingressport": {
    "name": "ingressport",
    "short_name": "Ingress Port",
    "desc": "Interface Configuration",
    "icon": "ingress_port.svg",
    "params": {
      "port": {
        "key": "port",
        "show_name": "Port",
        "desc": "Ingress port selection",
        "type": {
          "type_name": "api",
          "desc": {
            "api": "get_type_instance",
            "owner": {
              "object": "ingressport",
              "property": "port"
            },
            "user_inputs": null
          }
        },
        "required": true,
        "default_value": null,
        "depends": [

        ]
      },
      "speed": {
        "key": "speed",
        "show_name": "Speed",
        "desc": "Port speed selection",
        "type": {
          "type_name": "api",
          "desc": {
            "api": "get_type_instance",
            "owner": {
              "object": "ingressport",
              "property": "port_speed"
            },
            "user_inputs": null
          }
        },
        "required": true,
        "default_value": null,
        "depends": [
          {
            "name": "port",
            "op": "!=",
            "value": null
          }
        ]
      },
      "ingress_tagg_group": {
        "key": "ingress_tagg_group",
        "show_name": "802.1Q Tag",
        "desc": "Add 802.1Q tag when ingress",
        "type": {
          "type_name": "splitter",
          "desc": {
            "color": "blue"
          }
        },
        "required": false,
        "default_value": null,
        "depends": [

        ]
      },
      "tag_enable": {
        "key": "tag_enable",
        "show_name": "Attach Ingress Tag",
        "desc": "Attach an ingress tag to packet",
        "type": {
          "type_name": "bool",
          "desc": {
          }
        },
        "required": false,
        "default_value": false,
        "depends": [

        ]
      },
      "tag": {
        "key": "tag",
        "show_name": "Tag Value",
        "desc": "The value of ingress tag",
        "type": {
          "type_name": "integer",
          "desc": {
            "min": 0,
            "max": 4095,
            "inclusive": true
          }
        },
        "required": false,
        "default_value": 100,
        "depends": [
          {
            "name": "tag_enable",
            "op": "==",
            "value": true
          }
        ]
      },
      "ingress_slice_group": {
        "key": "ingress_slice_group",
        "show_name": "Ingress Slicer",
        "desc": "Ingress slicer settings",
        "type": {
          "type_name": "splitter",
          "desc": {
            "color": "blue"
          }
        },
        "required": false,
        "default_value": null,
        "depends": [

        ]
      },
      "ingress_slice_enable": {
        "key": "ingress_slice_enable",
        "show_name": "Ingress Slicer",
        "desc": "Enable packet slicer",
        "type": {
          "type_name": "bool",
          "desc": {
          }
        },
        "required": false,
        "default_value": false,
        "depends": [

        ]
      },
      "slice_size": {
        "key": "slice_size",
        "show_name": "Size",
        "desc": "Size limit",
        "type": {
          "type_name": "integer",
          "desc": {
            "min": 40,
            "max": 1500,
            "inclusive": true
          }
        },
        "required": false,
        "default_value": 96,
        "depends": [
          {
            "name": "ingress_slice_enable",
            "op": "==",
            "value": true
          }
        ]
      },
      "strip_fabricpath_header": {
        "key": "strip_fabricpath_header",
        "show_name": "Strip Cisco FP Header",
        "desc": "Strip Cisco Fabric Path header",
        "type": {
          "type_name": "bool",
          "desc": {
          }
        },
        "required": false,
        "default_value": false,
        "depends": [

        ]
      },
      "eb_ts_format": {
        "key": "eb_ts_format",
        "show_name": "TS in Packet",
        "desc": "Whether or not there is embedded timestamp in packet",
        "type": {
          "type_name": "enum",
          "desc": {
            "multiple": false,
            "values": [
              {
                "id": 0,
                "name": "No TS in packet",
                "long_name": "",
                "help": "",
                "display": {
                }
              },
              {
                "id": 1,
                "name": "Pkt+IVOS TS+FCS",
                "long_name": "",
                "help": "",
                "display": {
                }
              },
              {
                "id": 3,
                "name": "Pkt+IVOS TS+FCS",
                "long_name": "",
                "help": "",
                "display": {
                }
              }
            ]
          }
        },
        "required": false,
        "default_value": 0,
        "depends": [

        ]
      },
      "mtu": {
        "key": "mtu",
        "show_name": "MTU",
        "desc": "Maximum frame size expected on this interface, typical max frame size is 1522",
        "type": {
          "type_name": "integer",
          "desc": {
            "min": 512,
            "max": 9216,
            "inclusive": true
          }
        },
        "required": false,
        "default_value": 9000,
        "depends": [

        ]
      },
      "linksync": {
        "key": "linksync",
        "show_name": "Link Sync",
        "desc": "Control the enable or disable of a port based on the link status of a different port",
        "type": {
          "type_name": "api",
          "desc": {
            "api": "get_type_instance",
            "owner": {
              "object": "ingressport",
              "property": "port"
            },
            "user_inputs": null
          }
        },
        "required": false,
        "default_value": null,
        "depends": [

        ]
      },
      "dataplane_mem_auto_allocate": {
        "key": "dataplane_mem_auto_allocate",
        "show_name": "Port Memory Size",
        "desc": "Automatically manage the packet memory for this port",
        "type": {
          "type_name": "enum",
          "desc": {
            "multiple": false,
            "values": [
              {
                "id": 0,
                "name": "Automatic",
                "long_name": "",
                "help": "",
                "display": {
                }
              },
              {
                "id": 1,
                "name": "Use specified value",
                "long_name": "",
                "help": "",
                "display": {
                }
              }
            ]
          }
        },
        "required": false,
        "default_value": 0,
        "depends": [

        ]
      },
      "dataplane_mem": {
        "key": "dataplane_mem",
        "show_name": "Specify Port Memory(MB)",
        "desc": "Packet buffer size allocated to this port when automatic memory management is false",
        "type": {
          "type_name": "integer",
          "desc": {
            "min": 4,
            "max": -2,
            "inclusive": true
          }
        },
        "required": false,
        "default_value": 1,
        "depends": [
          {
            "name": "dataplane_mem_auto_allocate",
            "op": "==",
            "value": 1
          }
        ]
      }
    }
  },
  "egressport": {
    "name": "egressport",
    "short_name": "Egress Port",
    "desc": "Egress port selection and configuration",
    "icon": "egress_port.svg",
    "params": {
      "port": {
        "key": "port",
        "show_name": "Port",
        "desc": "Egress port selection",
        "type": {
          "type_name": "api",
          "desc": {
            "api": "get_type_instance",
            "owner": {
              "object": "egressport",
              "property": "port"
            },
            "user_inputs": null
          }
        },
        "required": true,
        "default_value": null,
        "depends": [

        ]
      },
      "speed": {
        "key": "speed",
        "show_name": "Speed",
        "desc": "Port speed selection",
        "type": {
          "type_name": "api",
          "desc": {
            "api": "get_type_instance",
            "owner": {
              "object": "egressport",
              "property": "port_speed"
            },
            "user_inputs": null
          }
        },
        "required": true,
        "default_value": null,
        "depends": [
          {
            "name": "port",
            "op": "!=",
            "value": null
          }
        ]
      },
      "ip_config_group": {
        "key": "ip_config_group",
        "show_name": "IP Configuration",
        "desc": "IP Configuration",
        "type": {
          "type_name": "splitter",
          "desc": {
            "color": "blue"
          }
        },
        "required": false,
        "default_value": null,
        "depends": [

        ]
      },
      "ip_config_enable": {
        "key": "ip_config_enable",
        "show_name": "Attach IP Address",
        "desc": "Enable the IP Configuration on Port",
        "type": {
          "type_name": "bool",
          "desc": {
          }
        },
        "required": false,
        "default_value": false,
        "depends": [

        ]
      },
      "ip": {
        "key": "ip",
        "show_name": "IP Address",
        "desc": "IP Address",
        "type": {
          "type_name": "string",
          "desc": {
            "syntax": [
              "ip",
              "ipv6"
            ],
            "max_length": 64
          }
        },
        "required": true,
        "default_value": "10.0.0.10",
        "depends": [
          {
            "name": "ip_config_enable",
            "op": "==",
            "value": true
          }
        ]
      },
      "netmask": {
        "key": "netmask",
        "show_name": "Netmask",
        "desc": "Network Mask",
        "type": {
          "type_name": "string",
          "desc": {
            "syntax": [
              "ipmask",
              "ipmaskv6"
            ],
            "max_length": 64
          }
        },
        "required": true,
        "default_value": "255.255.255.0",
        "depends": [
          {
            "name": "ip_config_enable",
            "op": "==",
            "value": true
          }
        ]
      },
      "gateway": {
        "key": "gateway",
        "show_name": "Gateway",
        "desc": "Gateway",
        "type": {
          "type_name": "string",
          "desc": {
            "syntax": [
              "ip",
              "ipv6"
            ],
            "max_length": 64
          }
        },
        "required": false,
        "default_value": "10.0.0.1",
        "depends": [
          {
            "name": "ip_config_enable",
            "op": "==",
            "value": true
          }
        ]
      },
      "force_egress_to_ip_set": {
        "key": "force_egress_to_ip_set",
        "show_name": "Host Route",
        "desc": "Use this egress interface to reach IPs",
        "type": {
          "type_name": "string",
          "desc": {
            "max_length": 128
          }
        },
        "required": false,
        "default_value": "",
        "depends": [
          {
            "name": "ip_config_enable",
            "op": "==",
            "value": true
          }
        ]
      },
      "egress_tagging_group": {
        "key": "egress_tagging_group",
        "show_name": "Egress 802.1Q Tag",
        "desc": "Add 802.1Q tag when egress",
        "type": {
          "type_name": "splitter",
          "desc": {
            "color": "blue"
          }
        },
        "required": false,
        "default_value": null,
        "depends": [

        ]
      },
      "add_ingress_tag": {
        "key": "add_ingress_tag",
        "show_name": "Use Ingress Tag",
        "desc": "Use the ingress tag assigned to packet if there is",
        "type": {
          "type_name": "bool",
          "desc": {
          }
        },
        "required": false,
        "default_value": false,
        "depends": [

        ]
      },
      "tag_enable": {
        "key": "tag_enable",
        "show_name": "Add Tag",
        "desc": "Enable the packets to carry VLAN tag when sent",
        "type": {
          "type_name": "bool",
          "desc": {
          }
        },
        "required": false,
        "default_value": false,
        "depends": [

        ]
      },
      "vlan_id": {
        "key": "vlan_id",
        "show_name": "Tag Value",
        "desc": "Egress VLAN ID that will be inserted into the packet",
        "type": {
          "type_name": "integer",
          "desc": {
            "min": 0,
            "max": 4095,
            "inclusive": true
          }
        },
        "required": false,
        "default_value": 100,
        "depends": [
          {
            "name": "tag_enable",
            "op": "==",
            "value": true
          }
        ]
      },
      "egress_slice_group": {
        "key": "egress_slice_group",
        "show_name": "Egress Slicer Settings",
        "desc": "Egress slicer settings",
        "type": {
          "type_name": "splitter",
          "desc": {
            "color": "blue"
          }
        },
        "required": false,
        "default_value": null,
        "depends": [

        ]
      },
      "egress_slice_enable": {
        "key": "egress_slice_enable",
        "show_name": "Egress Slicer",
        "desc": "Enable egress packet slicer",
        "type": {
          "type_name": "bool",
          "desc": {
          }
        },
        "required": false,
        "default_value": false,
        "depends": [

        ]
      },
      "slice_size": {
        "key": "slice_size",
        "show_name": "Size",
        "desc": "Size limit",
        "type": {
          "type_name": "integer",
          "desc": {
            "min": 40,
            "max": 1500,
            "inclusive": true
          }
        },
        "required": false,
        "default_value": 96,
        "depends": [
          {
            "name": "slice_size",
            "op": "==",
            "value": true
          }
        ]
      },
      "dataplane_mem_auto_allocate": {
        "key": "dataplane_mem_auto_allocate",
        "show_name": "Port Memory Size",
        "desc": "Automatically manage the packet memory for this port",
        "type": {
          "type_name": "enum",
          "desc": {
            "multiple": false,
            "values": [
              {
                "id": 0,
                "name": "Automatic",
                "long_name": "",
                "help": "",
                "display": {
                }
              },
              {
                "id": 1,
                "name": "Use specified value",
                "long_name": "",
                "help": "",
                "display": {
                }
              }
            ]
          }
        },
        "required": false,
        "default_value": 0,
        "depends": [

        ]
      },
      "dataplane_mem": {
        "key": "dataplane_mem",
        "show_name": "Specify Port Memory(MB)",
        "desc": "Packet buffer size allocated to this port when automatic memory management is false",
        "type": {
          "type_name": "integer",
          "desc": {
            "min": 4,
            "max": -2,
            "inclusive": true
          }
        },
        "required": false,
        "default_value": 1,
        "depends": [
          {
            "name": "dataplane_mem_auto_allocate",
            "op": "==",
            "value": 1
          }
        ]
      }
    }
  }
};
