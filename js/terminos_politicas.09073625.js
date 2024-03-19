armName",
          "EvaluationPeriods",
          "ComparisonOperator"
        ],
        "members": {
          "AlarmName": {},
          "AlarmDescription": {},
          "ActionsEnabled": {
            "type": "boolean"
          },
          "OKActions": {
            "shape": "S1t"
          },
          "AlarmActions": {
            "shape": "S1t"
          },
          "InsufficientDataActions": {
            "shape": "S1t"
          },
          "MetricName": {},
          "Namespace": {},
          "Statistic": {},
          "ExtendedStatistic": {},
          "Dimensions": {
            "shape": "S7"
          },
          "Period": {
            "type": "integer"
          },
          "Unit": {},
          "EvaluationPeriods": {
            "type": "integer"
          },
          "DatapointsToAlarm": {
            "type": "integer"
          },
          "Threshold": {
            "type": "double"
          },
          "ComparisonOperator": {},
          "TreatMissingData": {},
          "EvaluateLowSampleCountPercentile": {},
          "Metrics": {
            "shape": "Se"
          },
          "Tags": {
            "shape": "S5r"
          },
          "ThresholdMetricId": {}
        }
      }
    },
    "PutMetricData": {
      "input": {
        "type": "structure",
        "required": [
          "Namespace",
          "MetricData"
        ],
        "members": {
          "Namespace": {},
          "MetricData": {
            "type": "list",
            "member": {
              "type": "structure",
              "required": [
                "MetricName"
              ],
              "members": {
                "MetricName": {},
                "Dimensions": {
                  "shape": "S7"
                },
                "Timestamp": {
                  "type": "timestamp"
                },
                "Value": {
                  "type": "double"
                },
                "StatisticValues": {
                  "type": "structure",
                  "required": [
                    "SampleCount",
                    "Sum",
                    "Minimum",
                    "Maximum"
                  ],
                  "members": {
                    "SampleCount": {
                      "type": "double"
                    },
                    "Sum": {
                      "type": "double"
                    },
                    "Minimum": {
                      "type": "double"
                    },
                    "Maximum": {
                      "type": "double"
                    }
                  }
                },
                "Values": {
                  "type": "list",
                  "member": {
                    "type": "double"
                  }
                },
                "Counts": {
                  "type": "list",
                  "member": {
                    "type": "double"
                  }
                },
                "Unit": {},
                "StorageResolution": {
                  "type": "integer"
                }
              }
            }
          }
        }
      }
    },
    "PutMetricStream": {
      "input": {
        "type": "structure",
        "required": [
          "Name",
          "FirehoseArn",
          "RoleArn",
          "OutputFormat"
        ],
        "members": {
          "Name": {},
          "IncludeFilters": {
            "shape": "S4j"
          },
          "ExcludeFilters": {
            "shape": "S4j"
          },
          "FirehoseArn": {},
          "RoleArn": {},
          "OutputFormat": {},
          "Tags": {
            "shape": "S5r"
          },
          "StatisticsConfigurations": {
            "shape": "S4n"
          },
          "IncludeLinkedAccountsMetrics": {
            "type": "boolean"
          }
        }
      },
      "output": {
        "resultWrapper": "PutMetricStreamResult",
        "type": "structure",
        "members": {
          "Arn": {}
        }
      }
    },
    "SetAlarmState": {
      "input": {
        "type": "structure",
        "required": [
          "AlarmName",
          "StateValue",
          "StateReason"
        ],
        "members": {
          "AlarmName": {},
          "StateValue": {},
          "StateReason": {},
          "StateReasonData": {}
        }
      }
    },
    "StartMetricStreams": {
      "input": {
        "type": "structure",
        "required": [
          "Names"
        ],
        "members": {
          "Names": {
            "shape": "S6m"
          }
        }
      },
      "output": {
        "resultWrapper": "StartMetricStreamsResult",
        "type": "structure",
        "members": {}
      }
    },
    "StopMetricStreams": {
      "input": {
        "type": "structure",
        "required": [
          "Names"
        ],
        "members": {
          "Names": {
            "shape": "S6m"
          }
        }
      },
      "output": {
        "resultWrapper": "StopMetricStreamsResult",
        "type": "structure",
        "members": {}
      }
    },
    "TagResource": {
      "input": {
        "type": "structure",
        "required": [
          "ResourceARN",
          "Tags"
        ],
        "members": {
          "ResourceARN": {},
          "Tags": {
            "shape": "S5r"
          }
        }
      },
      "output": {
        "resultWrapper": "TagResourceResult",
        "type": "structure",
        "members": {}
      }
    },
    "UntagResource": {
      "input": {
        "type": "structure",
        "required": [
          "ResourceARN",
          "TagKeys"
        ],
        "members": {
          "ResourceARN": {},
          "TagKeys": {
            "type": "list",
            "member": {}
          }
        }
      },
      "output": {
        "resultWrapper": "UntagResourceResult",
        "type": "structure",
        "members": {}
      }
    }
  },
  "shapes": {
    "S2": {
      "type": "list",
      "member": {}
    },
    "S7": {
      "type": "list",
      "member": {
        "type": "structure",
        "required": [
          "Name",
          "Value"
        ],
        "members": {
          "Name": {},
          "Value": {}
        },
        "xmlOrder": [
          "Name",
          "Value"
        ]
      }
    },
    "Sc": {
      "type": "structure",
      "members": {
        "Namespace": {},
        "MetricName": {},
        "Dimensions": {
          "shape": "S7"
        },
        "Stat": {}
      }
    },
    "Sd": {
      "type": "structure",
      "members": {
        "MetricDataQueries": {
          "shape": "Se"
        }
      }
    },
    "Se": {
      "type": "list",
      "member": {
        "type": "structure",
        "required": [
          "Id"
        ],
        "members": {
          "Id": {},
          "MetricStat": {
            "type": "structure",
            "required": [
              "Metric",
              "Period",
              "Stat"
            ],
            "members": {
              "Metric": {
                "shape": "Si"
              },
              "Period": {
                "type": "integer"
              },
              "Stat": {},
              "Unit": {}
            }
          },
          "Expression": {},
          "Label": {},
          "ReturnData": {
            "type": "boolean"
          },
          "Period": {
            "type": "integer"
          },
          "AccountId": {}
        }
      }
    },
    "Si": {
      "type": "structure",
      "members": {
        "Namespace": {},
        "MetricName": {},
        "Dimensions": {
          "shape": "S7"
        }
      },
      "xmlOrder": [
        "Namespace",
        "MetricName",
        "Dimensions"
      ]
    },
    "Sw": {
      "type": "list",
      "member": {}
    },
    "Sz": {
      "type": "list",
      "member": {
        "type": "structure",
        "members": {
          "FailureResource": {},
          "ExceptionType": {},
          "FailureCode": {},
          "FailureDescription": {}
        }
      }
    },
    "S19": {
      "type": "list",
      "member": {}
    },
    "S1t": {
      "type": "list",
      "member": {}
    },
    "S23": {
      "type": "list",
      "member": {
        "type": "structure",
        "members": {
          "AlarmName": {},
          "AlarmArn": {},
          "AlarmDescription": {},
          "AlarmConfigurationUpdatedTimestamp": {
            "type": "timestamp"
          },
          "ActionsEnabled": {
            "type": "boolean"
          },
          "OKActions": {
            "shape": "S1t"
          },
          "AlarmActions": {
            "shape": "S1t"
          },
          "InsufficientDataActions": {
            "shape": "S1t"
          },
          "StateValue": {},
          "StateReason": {},
          "StateReasonData": {},
          "StateUpdatedTimestamp": {
            "type": "timestamp"
          },
          "MetricName": {},
          "Namespace": {},
          "Statistic": {},
          "ExtendedStatistic": {},
          "Dimensions": {
            "shape": "S7"
          },
          "Period": {
            "type": "integer"
          },
          "Unit": {},
          "EvaluationPeriods": {
            "type": "integer"
          },
          "DatapointsToAlarm": {
            "type": "integer"
          },
          "Threshold": {
            "type": "double"
          },
          "ComparisonOperator": {},
          "TreatMissingData": {},
          "EvaluateLowSampleCountPercentile": {},
          "Metrics": {
            "shape": "Se"
          },
          "ThresholdMetricId": {},
          "EvaluationState": {},
          "StateTransitionedTimestamp": {
            "type": "timestamp"
          }
        },
        "xmlOrder": [
          "AlarmName",
          "AlarmArn",
          "AlarmDescription",
          "AlarmConfigurationUpdatedTimestamp",
          "ActionsEnabled",
          "OKActions",
          "AlarmActions",
          "InsufficientDataActions",
          "StateValue",
          "StateReason",
          "StateReasonData",
          "StateUpdatedTimestamp",
          "MetricName",
          "Namespace",
          "Statistic",
          "Dimensions",
          "Period",
          "Unit",
          "EvaluationPeriods",
          "Threshold",
          "ComparisonOperator",
          "ExtendedStatistic",
          "TreatMissingData",
          "EvaluateLowSampleCountPercentile",
          "DatapointsToAlarm",
          "Metrics",
          "ThresholdMetricId",
          "EvaluationState",
          "StateTransitionedTimestamp"
        ]
      }
    },
    "S2n": {
      "type": "structure",
      "members": {
        "ExcludedTimeRanges": {
          "type": "list",
          "member": {
            "type": "structure",
            "required": [
              "StartTime",
              "EndTime"
            ],
            "members": {
              "StartTime": {
                "type": "timestamp"
              },
              "EndTime": {
                "type": "timestamp"
              }
            },
            "xmlOrder": [
              "StartTime",
              "EndTime"
            ]
          }
        },
        "MetricTimezone": {}
      }
    },
    "S45": {
      "type": "list",
      "member": {
        "type": "structure",
        "members": {
          "Code": {},
          "Value": {}
        }
      }
    },
    "S4j": {
      "type": "list",
      "member": {
        "type": "structure",
        "members": {
          "Namespace": {}
        }
      }
    },
    "S4n": {
      "type": "list",
      "member": {
        "type": "structure",
        "required": [
          "IncludeMetrics",
          "AdditionalStatistics"
        ],
        "members": {
          "IncludeMetrics": {
            "type": "list",
            "member": {
              "type": "structure",
              "required": [
                "Namespace",
                "MetricName"
              ],
              "members": {
                "Namespace": {},
                "MetricName": {}
              }
            }
          },
          "AdditionalStatistics": {
            "type": "list",
            "member": {}
          }
        }
      }
    },
    "S5r": {
      "type": "list",
      "member": {
        "type": "structure",
        "required": [
          "Key",
          "Value"
        ],
        "members": {
          "Key": {},
          "Value": {}
        }
      }
    },
    "S6m": {
      "type": "list",
      "member": {}
    }
  }
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      /// <reference types="fastify" />

import {
  FastifyPluginCallback,
  FastifyPluginAsync,
} from 'fastify'

/**
 * This function does three things for you:
 *   1. Add the `skip-override` hidden property
 *   2. Check bare-minimum version of Fastify
 *   3. Pass some custom metadata of the plugin to Fastify
 * @param fn Fastify plugin function
 * @param options Optional plugin options
 */
export default function fp<Options>(fn: FastifyPluginAsync<Options>, options?: PluginMetadata): FastifyPluginAsync<Options>;
export default function fp<Options>(fn: FastifyPluginAsync<Options>, options?: string): FastifyPluginAsync<Options>;
export default function fp<Options>(fn: FastifyPluginCallback<Options>, options?: PluginMetadata): FastifyPluginCallback<Options>;
export default function fp<Options>(fn: FastifyPluginCallback<Options>, options?: string): FastifyPluginCallback<Options>;

export interface PluginMetadata {
  /** Bare-minimum version of Fastify for your plugin, just add the semver range that you need. */
  fastify?: string,
  name?: string,
  /** Decorator dependencies for this plugin */
  decorators?: {
    fastify?: (string | symbol)[],
    reply?: (string | symbol)[],
    request?: (string | symbol)[]
  },
  /** The plugin dependencies */
  dependencies?: string[]
}

// Exporting PluginOptions for backward compatibility after renaming it to PluginMetadata
export interface PluginOptions extends PluginMetadata {}
                                                                                                                                                                                                                                                             