define({ "api": [
  {
    "type": "post",
    "url": "v1/settings/customize/appearance",
    "title": "Edit Customize Appearance",
    "version": "1.0.0",
    "name": "PostCustomizePage",
    "group": "Appearance",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>nested data object.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data[action]",
            "description": "<p>editCustomizeAppearance.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data[name]",
            "description": "<p>Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data[value]",
            "description": "<p>Value.</p>"
          }
        ]
      }
    },
    "filename": "./index.php",
    "groupTitle": "Appearance",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "data",
            "description": "<p>Output Boolean.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"success\",\n    \"statusText\": \"success\",\n    \"data\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotAuthorized",
            "description": "<p>The user is not authorized or Token not valid</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Authorized\n{\n    \"status\": \"error\",\n    \"statusText\": \"API/Token invalid or not set\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./docs/main.js",
    "group": "C:\\Projects\\Organizr-V2\\api\\docs\\main.js",
    "groupTitle": "C:\\Projects\\Organizr-V2\\api\\docs\\main.js",
    "name": ""
  },
  {
    "type": "post",
    "url": "v1/update/config",
    "title": "Update Config Item",
    "version": "1.0.0",
    "name": "PostUpdateConfig",
    "group": "Config",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>nested data object.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data[type]",
            "description": "<p>input|select|switch|password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data[name]",
            "description": "<p>Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data[value]",
            "description": "<p>Value.</p>"
          }
        ]
      }
    },
    "filename": "./index.php",
    "groupTitle": "Config",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "data",
            "description": "<p>Output Boolean.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"success\",\n    \"statusText\": \"success\",\n    \"data\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotAuthorized",
            "description": "<p>The user is not authorized or Token not valid</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Authorized\n{\n    \"status\": \"error\",\n    \"statusText\": \"API/Token invalid or not set\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "v1/update/config/multiple",
    "title": "Update Multiple Config Items",
    "version": "1.0.0",
    "name": "PostUpdateConfigMultiple",
    "group": "Config",
    "permission": [
      {
        "name": "admin",
        "title": "Admin or API Key Access Only",
        "description": "<p>Only the Admin/Co-Admin and API Key have access to this endpoint</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "data[payload]",
            "description": "<p>nested payload object.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data.:keyName",
            "description": "<p>Value of Name defined from key.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": " {\n     \"data\": {\n         \"payload\": {\n             \"title\": \"Organizr V2\",\n             \"logo\": \"plugins/images/organizr/logo-wide.png\"\n         }\n     }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./index.php",
    "groupTitle": "Config",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "data",
            "description": "<p>Output Boolean.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"success\",\n    \"statusText\": \"success\",\n    \"data\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotAuthorized",
            "description": "<p>The user is not authorized or Token not valid</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Authorized\n{\n    \"status\": \"error\",\n    \"statusText\": \"API/Token invalid or not set\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "v1/update/config/multiple/form",
    "title": "Update Multiple Config Items Form",
    "version": "1.0.0",
    "name": "PostUpdateConfigMultipleForm",
    "group": "Config",
    "permission": [
      {
        "name": "admin",
        "title": "Admin or API Key Access Only",
        "description": "<p>Only the Admin/Co-Admin and API Key have access to this endpoint</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "data[payload]",
            "description": "<p>nested payload object.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "data.:keyName",
            "description": "<p>Config ID/Key.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data.:keyName.name",
            "description": "<p>Config ID/Key.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data.:keyName.value",
            "description": "<p>Config Value.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data.:keyName.type",
            "description": "<p>Config Type input|select|switch|password.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": " {\n     \"data\": {\n         \"payload\": {\n             \"title\": {\n                 \"name\": \"title\",\n                 \"value\": \"Organizr V2\",\n                 \"type\": \"input\"\n             },\n             \"logo\": {\n                 \"name\": \"logo\",\n                 \"value\": \"plugins/images/organizr/logo-wide.png\",\n                 \"type\": \"input\"\n             }\n         }\n     }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./index.php",
    "groupTitle": "Config",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "data",
            "description": "<p>Output Boolean.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"success\",\n    \"statusText\": \"success\",\n    \"data\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotAuthorized",
            "description": "<p>The user is not authorized or Token not valid</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Authorized\n{\n    \"status\": \"error\",\n    \"statusText\": \"API/Token invalid or not set\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "v1/remove/file",
    "title": "Remove File",
    "version": "1.0.0",
    "name": "PostRemoveFile",
    "group": "Files",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>nested data object.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data[path]",
            "description": "<p>File Path.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data[name]",
            "description": "<p>File Name.</p>"
          }
        ]
      }
    },
    "filename": "./index.php",
    "groupTitle": "Files",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "data",
            "description": "<p>Output Boolean.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"success\",\n    \"statusText\": \"success\",\n    \"data\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotAuthorized",
            "description": "<p>The user is not authorized or Token not valid</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Authorized\n{\n    \"status\": \"error\",\n    \"statusText\": \"API/Token invalid or not set\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "v1/settings/homepage/list",
    "title": "Get Homepage Settings",
    "version": "1.0.0",
    "name": "GetHomepageSettigns",
    "group": "Homepage",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Output of all Homepage Settings.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"success\",\n    \"statusText\": \"success\",\n    \"data\": [{\n        \"name\": \"HealthChecks\",\n        \"enabled\": true,\n        \"image\": \"plugins\\/images\\/tabs\\/healthchecks.png\",\n        \"category\": \"Monitor\",\n        \"settings\": {\n            \"Enable\": [\n                {\n                    \"type\": \"switch\",\n                    \"name\": \"homepageHealthChecksEnabled\",\n                    \"label\": \"Enable\",\n                    \"value\": true\n                }, {\n                    \"type\": \"select\",\n                    \"name\": \"homepageHealthChecksAuth\",\n                    \"label\": \"Minimum Authentication\",\n                    \"value\": \"1\",\n                    \"options\": [\n                        {\n                            \"name\": \"Admin\",\n                            \"value\": 0\n                        }, {\n                            \"name\": \"Co-Admin\",\n                            \"value\": 1\n                        }, {\n                            \"name\": \"Super User\",\n                            \"value\": 2\n                        }, {\n                            \"name\": \"Power User\",\n                            \"value\": 3\n                        }, {\n                            \"name\": \"User\",\n                            \"value\": 4\n                        }, {\n                            \"name\": \"temp again\",\n                            \"value\": 5\n                        }, {\n                            \"name\": \"GuestAccts\",\n                            \"value\": 999\n                        }\n                    ]\n                }\n            ],\n        \"Connection\": [\n            {\n                \"type\": \"input\",\n                \"name\": \"healthChecksURL\",\n                 \"label\": \"URL\",\n                \"value\": \"https://healthchecks.io/api/v1/checks/\",\n                \"help\": \"URL for HealthChecks API\",\n                \"placeholder\": \"HealthChecks API URL\"\n            }, {\n                \"type\": \"password-alt\",\n                \"name\": \"healthChecksToken\",\n                \"label\": \"Token\",\n                \"value\": \"TOKENHERE\"\n            }\n        ],\n        \"Misc Options\": [\n            {\n                \"type\": \"input\",\n                \"name\": \"healthChecksTags\",\n                \"label\": \"Tags\",\n                \"value\": \"\",\n                \"help\": \"Pull only checks with this tag - Blank for all\",\n                \"placeholder\": \"Multiple tags using CSV - tag1,tag2\"\n            }, {\n                \"type\": \"select\",\n                \"name\": \"homepageHealthChecksRefresh\",\n                \"label\": \"Refresh Seconds\",\n                \"value\": \"3600000\",\n                \"options\": [\n                    {\n                        \"name\": \"5\",\n                        \"value\": \"5000\"\n                    }, {\n                        \"name\": \"10\",\n                        \"value\": \"10000\"\n                    }, {\n                        \"name\": \"15\",\n                        \"value\": \"15000\"\n                    }, {\n                        \"name\": \"30\",\n                        \"value\": \"30000\"\n                    }, {\n                        \"name\": \"60 [1 Minute]\",\n                        \"value\": \"60000\"\n                    }, {\n                        \"name\": \"300 [5 Minutes]\",\n                        \"value\": \"300000\"\n                    }, {\n                        \"name\": \"600 [10 Minutes]\",\n                        \"value\": \"600000\"\n                    }, {\n                        \"name\": \"900 [15 Minutes]\",\n                        \"value\": \"900000\"\n                    }, {\n                        \"name\": \"1800 [30 Minutes]\",\n                        \"value\": \"1800000\"\n                    }, {\n                        \"name\": \"3600 [1 Hour]\",\n                        \"value\": \"3600000\"\n                    }\n                ]\n            }\n        ]\n    }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./index.php",
    "groupTitle": "Homepage",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotAuthorized",
            "description": "<p>The user is not authorized or Token not valid</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Authorized\n{\n    \"status\": \"error\",\n    \"statusText\": \"API/Token invalid or not set\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "v1/homepage/connect",
    "title": "Homepage Item Connect",
    "version": "1.0.0",
    "name": "PostHomepageItemConnect",
    "group": "Homepage",
    "permission": [
      {
        "name": "admin",
        "title": "Admin or API Key Access Only",
        "description": "<p>Only the Admin/Co-Admin and API Key have access to this endpoint</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>payload object.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "data[action]",
            "description": "<p>Homepage Item i.e. getPlexStreams|getPlexRecent.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": " {\n     \"data\": {\n         \"action\": \"getPlexStreams\"\n     }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./index.php",
    "groupTitle": "Homepage",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "data",
            "description": "<p>Output JSON.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"success\",\n    \"statusText\": \"success\",\n    \"data\": { **JSON** }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotAuthorized",
            "description": "<p>The user is not authorized or Token not valid</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Authorized\n{\n    \"status\": \"error\",\n    \"statusText\": \"API/Token invalid or not set\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "v1/settings/customize/appearance",
    "title": "Get Customize Appearance",
    "version": "1.0.0",
    "name": "GetCustomizePage",
    "group": "Pages",
    "filename": "./index.php",
    "groupTitle": "Pages",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Output of Page.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"statusText\": \"success\",\n  \"data\": \"<html>html encoded elements</html>\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotAuthorized",
            "description": "<p>The user is not authorized or Token not valid</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Authorized\n{\n    \"status\": \"error\",\n    \"statusText\": \"API/Token invalid or not set\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "v1/homepage/page",
    "title": "Get Homepage",
    "version": "1.0.0",
    "name": "GetHomepagePage",
    "group": "Pages",
    "filename": "./index.php",
    "groupTitle": "Pages",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Output of Page.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"statusText\": \"success\",\n  \"data\": \"<html>html encoded elements</html>\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotAuthorized",
            "description": "<p>The user is not authorized or Token not valid</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Authorized\n{\n    \"status\": \"error\",\n    \"statusText\": \"API/Token invalid or not set\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "v1/settings/settings/logs",
    "title": "Get Logs",
    "version": "1.0.0",
    "name": "GetLogsPage",
    "group": "Pages",
    "filename": "./index.php",
    "groupTitle": "Pages",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Output of Page.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"statusText\": \"success\",\n  \"data\": \"<html>html encoded elements</html>\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotAuthorized",
            "description": "<p>The user is not authorized or Token not valid</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Authorized\n{\n    \"status\": \"error\",\n    \"statusText\": \"API/Token invalid or not set\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "v1/settings/user/manage/users",
    "title": "Get Manage Users",
    "version": "1.0.0",
    "name": "GetManageUsersPage",
    "group": "Pages",
    "filename": "./index.php",
    "groupTitle": "Pages",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Output of Page.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"statusText\": \"success\",\n  \"data\": \"<html>html encoded elements</html>\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotAuthorized",
            "description": "<p>The user is not authorized or Token not valid</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Authorized\n{\n    \"status\": \"error\",\n    \"statusText\": \"API/Token invalid or not set\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "v1/settings/plugins",
    "title": "Get Plugins",
    "version": "1.0.0",
    "name": "GetPluginsPage",
    "group": "Pages",
    "filename": "./index.php",
    "groupTitle": "Pages",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Output of Page.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"statusText\": \"success\",\n  \"data\": \"<html>html encoded elements</html>\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotAuthorized",
            "description": "<p>The user is not authorized or Token not valid</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Authorized\n{\n    \"status\": \"error\",\n    \"statusText\": \"API/Token invalid or not set\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "v1/settings/settings/sso",
    "title": "Get SSO",
    "version": "1.0.0",
    "name": "GetSSOPage",
    "group": "Pages",
    "filename": "./index.php",
    "groupTitle": "Pages",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Output of Page.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"statusText\": \"success\",\n  \"data\": \"<html>html encoded elements</html>\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotAuthorized",
            "description": "<p>The user is not authorized or Token not valid</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Authorized\n{\n    \"status\": \"error\",\n    \"statusText\": \"API/Token invalid or not set\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "v1/settings/settings/main",
    "title": "Get Settings Main",
    "version": "1.0.0",
    "name": "GetSettingsMainPage",
    "group": "Pages",
    "filename": "./index.php",
    "groupTitle": "Pages",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Output of Page.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"statusText\": \"success\",\n  \"data\": \"<html>html encoded elements</html>\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotAuthorized",
            "description": "<p>The user is not authorized or Token not valid</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Authorized\n{\n    \"status\": \"error\",\n    \"statusText\": \"API/Token invalid or not set\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "v1/settings/page",
    "title": "Get Admin Settings",
    "version": "1.0.0",
    "name": "GetSettingsPage",
    "group": "Pages",
    "filename": "./index.php",
    "groupTitle": "Pages",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "data",
            "description": "<p>Output Boolean.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"success\",\n    \"statusText\": \"success\",\n    \"data\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotAuthorized",
            "description": "<p>The user is not authorized or Token not valid</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Authorized\n{\n    \"status\": \"error\",\n    \"statusText\": \"API/Token invalid or not set\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "v1/settings/tab/editor/homepage",
    "title": "Get Homepage Order",
    "version": "1.0.0",
    "name": "GetSettingsTabEditorHomepageOrderPage",
    "group": "Pages",
    "filename": "./index.php",
    "groupTitle": "Pages",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Output of Page.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"statusText\": \"success\",\n  \"data\": \"<html>html encoded elements</html>\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotAuthorized",
            "description": "<p>The user is not authorized or Token not valid</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Authorized\n{\n    \"status\": \"error\",\n    \"statusText\": \"API/Token invalid or not set\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "v1/settings/tab/editor/homepage",
    "title": "Get Homepage Settings",
    "version": "1.0.0",
    "name": "GetSettingsTabEditorHomepagePage",
    "group": "Pages",
    "filename": "./index.php",
    "groupTitle": "Pages",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Output of Page.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"statusText\": \"success\",\n  \"data\": \"<html>html encoded elements</html>\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotAuthorized",
            "description": "<p>The user is not authorized or Token not valid</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Authorized\n{\n    \"status\": \"error\",\n    \"statusText\": \"API/Token invalid or not set\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "v1/settings/tab/editor/categories",
    "title": "Get Tab Editor Categories",
    "version": "1.0.0",
    "name": "GetTabEditorCategoriesPage",
    "group": "Pages",
    "filename": "./index.php",
    "groupTitle": "Pages",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Output of Page.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"statusText\": \"success\",\n  \"data\": \"<html>html encoded elements</html>\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotAuthorized",
            "description": "<p>The user is not authorized or Token not valid</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Authorized\n{\n    \"status\": \"error\",\n    \"statusText\": \"API/Token invalid or not set\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "v1/settings/tab/editor/tabs",
    "title": "Get Tab Editor Tabs",
    "version": "1.0.0",
    "name": "GetTabEditorTabsPage",
    "group": "Pages",
    "filename": "./index.php",
    "groupTitle": "Pages",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Output of Page.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"statusText\": \"success\",\n  \"data\": \"<html>html encoded elements</html>\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotAuthorized",
            "description": "<p>The user is not authorized or Token not valid</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Authorized\n{\n    \"status\": \"error\",\n    \"statusText\": \"API/Token invalid or not set\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "v1/ping/list",
    "title": "Homepage Item Connect",
    "version": "1.0.0",
    "name": "PostPingList",
    "group": "Ping",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>payload object.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "data[pingList]",
            "description": "<p>List of ip/hostname and ports [Optional String of hostname:port]</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Object",
          "content": " {\n     \"data\": {\n         \"pingList\": [\"docker.home.lab:3579\", \"docker.home.lab:8181\"]\n     }\n}",
          "type": "json"
        },
        {
          "title": "String",
          "content": " {\n     \"data\": {\n         \"pingList\": [\"docker.home.lab:3579\", \"docker.home.lab:8181\"]\n     }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Output ping results and response times.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n     \"status\": \"success\",\n     \"statusText\": \"success\",\n     \"data\":{\n         \"docker.home.lab:3579\":10.77,\n         \"docker.home.lab:8181\":0.66\n     }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./index.php",
    "groupTitle": "Ping",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotAuthorized",
            "description": "<p>The user is not authorized or Token not valid</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Authorized\n{\n    \"status\": \"error\",\n    \"statusText\": \"API/Token invalid or not set\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "v1/settings/plugins/list",
    "title": "Get List of Plugins",
    "version": "1.0.0",
    "name": "GetPlugins",
    "group": "Plugins",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Output plugins list.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"statusText\": \"success\",\n  \"data\": {\n    \"chat\": {\n      \"name\": \"Chat\",\n      \"author\": \"CauseFX\",\n      \"category\": \"Utilities\",\n      \"link\": \"\",\n      \"license\": \"personal,business\",\n      \"idPrefix\": \"CHAT\",\n      \"configPrefix\": \"CHAT\",\n      \"version\": \"1.0.0\",\n      \"image\": \"plugins/images/chat.png\",\n      \"settings\": true,\n      \"homepage\": false,\n      \"enabled\": true\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./index.php",
    "groupTitle": "Plugins",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotAuthorized",
            "description": "<p>The user is not authorized or Token not valid</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Authorized\n{\n    \"status\": \"error\",\n    \"statusText\": \"API/Token invalid or not set\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "v1/settings/plugins/list",
    "title": "Toggle Plugin",
    "version": "1.0.0",
    "name": "TogglePlugin",
    "group": "Plugins",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>nested data object.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data[action]",
            "description": "<p>enable/disable.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data[name]",
            "description": "<p>Name of Plugin.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data[configName]",
            "description": "<p>configName i.e. CHAT-enabled.</p>"
          }
        ]
      }
    },
    "filename": "./index.php",
    "groupTitle": "Plugins",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "data",
            "description": "<p>Output Boolean.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"success\",\n    \"statusText\": \"success\",\n    \"data\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotAuthorized",
            "description": "<p>The user is not authorized or Token not valid</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Authorized\n{\n    \"status\": \"error\",\n    \"statusText\": \"API/Token invalid or not set\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  }
] });
