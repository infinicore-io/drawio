
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
    "icon": "components.service.png",
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
    "icon": "components.ingressport.png",
    "params": {
      "port": {
        "key": "port",
        "show_name": "Port",
        "desc": "Port",
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
      "ingress_tag": {
        "key": "ingress_tag",
        "show_name": "Ingress Tagging",
        "desc": "Add ingress tag",
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
            "name": "tag_enable",
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
  }
};
