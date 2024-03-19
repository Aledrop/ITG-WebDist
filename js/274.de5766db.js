  export interface DescribeReplicationConfigurationTemplatesResponse {
    /**
     * An array of Replication Configuration Templates.
     */
    items?: ReplicationConfigurationTemplates;
    /**
     * The token of the next Replication Configuration Template to retrieve.
     */
    nextToken?: PaginationToken;
  }
  export interface DescribeSourceServersRequest {
    /**
     * A set of filters by which to return Source Servers.
     */
    filters: DescribeSourceServersRequestFilters;
    /**
     * Maximum number of Source Servers to retrieve.
     */
    maxResults?: StrictlyPositiveInteger;
    /**
     * The token of the next Source Server to retrieve.
     */
    nextToken?: PaginationToken;
  }
  export interface DescribeSourceServersRequestFilters {
    /**
     * An ID that describes the hardware of the Source Server. This is either an EC2 instance id, a VMware uuid or a mac address.
     */
    hardwareId?: BoundedString;
    /**
     * An array of Source Servers IDs that should be returned. An empty array means all Source Servers.
     */
    sourceServerIDs?: DescribeSourceServersRequestFiltersIDs;
  }
  export type DescribeSourceServersRequestFiltersIDs = SourceServerID[];
  export interface DescribeSourceServersResponse {
    /**
     * An array of Source Servers.
     */
    items?: SourceServersList;
    /**
     * The token of the next Source Server to retrieve.
     */
    nextToken?: PaginationToken;
  }
  export interface DisconnectRecoveryInstanceRequest {
    /**
     * The ID of the Recovery Instance to disconnect.
     */
    recoveryInstanceID: RecoveryInstanceID;
  }
  export interface DisconnectSourceServerRequest {
    /**
     * The ID of the Source Server to disconnect.
     */
    sourceServerID: SourceServerID;
  }
  export interface Disk {
    /**
     * The amount of storage on the disk in bytes.
     */
    bytes?: PositiveInteger;
    /**
     * The disk or device name.
     */
    deviceName?: BoundedString;
  }
  export type Disks = Disk[];
  export type EC2InstanceID = string;
  export type EC2InstanceState = "PENDING"|"RUNNING"|"STOPPING"|"STOPPED"|"SHUTTING-DOWN"|"TERMINATED"|"NOT_FOUND"|string;
  export type EC2InstanceType = string;
  export type EbsSnapshotsList = ebsSnapshot[];
  export type EbsVolumeID = string;
  export type FailbackReplicationError = "AGENT_NOT_SEEN"|"FAILBACK_CLIENT_NOT_SEEN"|"NOT_CONVERGING"|"UNSTABLE_NETWORK"|"FAILED_TO_ESTABLISH_RECOVERY_INSTANCE_COMMUNICATION"|"FAILED_TO_DOWNLOAD_REPLICATION_SOFTWARE_TO_FAILBACK_CLIENT"|"FAILED_TO_CONFIGURE_REPLICATION_SOFTWARE"|"FAILED_TO_PAIR_AGENT_WITH_REPLICATION_SOFTWARE"|"FAILED_TO_ESTABLISH_AGENT_REPLICATOR_SOFTWARE_COMMUNICATION"|string;
  export type FailbackState = "FAILBACK_NOT_STARTED"|"FAILBACK_IN_PROGRESS"|"FAILBACK_READY_FOR_LAUNCH"|"FAILBACK_COMPLETED"|"FAILBACK_ERROR"|string;
  export interface GetFailbackReplicationConfigurationRequest {
    /**
     * The ID of the Recovery Instance whose failback replication configuration should be returned.
     */
    recoveryInstanceID: RecoveryInstanceID;
  }
  export interface GetFailbackReplicationConfigurationResponse {
    /**
     * Configure bandwidth throttling for the outbound data transfer rate of the Recovery Instance in Mbps.
     */
    bandwidthThrottling?: PositiveInteger;
    /**
     * The name of the Failback Replication Configuration.
     */
    name?: BoundedString;
    /**
     * The ID of the Recovery Instance.
     */
    recoveryInstanceID: RecoveryInstanceID;
    /**
     * Whether to use Private IP for the failback replication of the Recovery Instance.
     */
    usePrivateIP?: Boolean;
  }
  export interface GetLaunchConfigurationRequest {
    /**
     * The ID of the Source Server that we want to retrieve a Launch Configuration for.
     */
    sourceServerID: SourceServerID;
  }
  export interface GetReplicationConfigurationRequest {
    /**
     * The ID of the Source Serve for this Replication Configuration.r
     */
    sourceServerID: SourceServerID;
  }
  export type IPsList = BoundedString[];
  export type ISO8601DatetimeString = string;
  export interface IdentificationHints {
    /**
     * AWS Instance ID identification hint.
     */
    awsInstanceID?: EC2InstanceID;
    /**
     * Fully Qualified Domain Name identification hint.
     */
    fqdn?: BoundedString;
    /**
     * Hostname identification hint.
     */
    hostname?: BoundedString;
    /**
     * vCenter VM path identification hint.
     */
    vmWareUuid?: BoundedString;
  }
  export interface InitializeServiceRequest {
  }
  export interface InitializeServiceResponse {
  }
  export type InitiatedBy = "START_RECOVERY"|"START_DRILL"|"FAILBACK"|"DIAGNOSTIC"|"TERMINATE_RECOVERY_INSTANCES"|string;
  export interface Job {
    /**
     * The ARN of a Job.
     */
    arn?: ARN;
    /**
     * The date and time of when the Job was created.
     */
    creationDateTime?: ISO8601DatetimeString;
    /**
     * The date and time of when the Job ended.
     */
    endDateTime?: ISO8601DatetimeString;
    /**
     * A string representing who initiated the Job.
     */
    initiatedBy?: InitiatedBy;
    /**
     * The ID of the Job.
     */
    jobID: JobID;
    /**
     * A list of servers that the Job is acting upon.
     */
    participatingServers?: ParticipatingServers;
    /**
     * The status of the Job.
     */
    status?: JobStatus;
    /**
     * A list of tags associated with the Job.
     */
    tags?: TagsMap;
    /**
     * The type of the Job.
     */
    type?: JobType;
  }
  export type JobID = string;
  export interface JobLog {
    /**
     * The event represents the type of a log.
     */
    event?: JobLogEvent;
    /**
     * Metadata associated with a Job log.
     */
    eventData?: JobLogEventData;
    /**
     * The date and time the log was taken.
     */
    logDateTime?: ISO8601DatetimeString;
  }
  export type JobLogEvent = "JOB_START"|"SERVER_SKIPPED"|"CLEANUP_START"|"CLEANUP_END"|"CLEANUP_FAIL"|"SNAPSHOT_START"|"SNAPSHOT_END"|"SNAPSHOT_FAIL"|"USING_PREVIOUS_SNAPSHOT"|"USING_PREVIOUS_SNAPSHOT_FAILED"|"CONVERSION_START"|"CONVERSION_END"|"CONVERSION_FAIL"|"LAUNCH_START"|"LAUNCH_FAILED"|"JOB_CANCEL"|"JOB_END"|string;
  export interface JobLogEventData {
    /**
     * The ID of a conversion server.
     */
    conversionServerID?: EC2InstanceID;
    /**
     * A string representing a job error.
     */
    rawError?: LargeBoundedString;
    /**
     * The ID of a Source Server.
     */
    sourceServerID?: SourceServerID;
    /**
     * The ID of a Recovery Instance.
     */
    targetInstanceID?: EC2InstanceID;
  }
  export type JobLogs = JobLog[];
  export type JobStatus = "PENDING"|"STARTED"|"COMPLETED"|string;
  export type JobType = "LAUNCH"|"TERMINATE"|string;
  export type JobsList = Job[];
  export type LargeBoundedString = string;
  export type LastLaunchResult = "NOT_STARTED"|"PENDING"|"SUCCEEDED"|"FAILED"|string;
  export type LastLaunchType = "RECOVERY"|"DRILL"|string;
  export interface LaunchConfiguration {
    /**
     * Whether we should copy the Private IP of the Source Server to the Recovery Instance.
     */
    copyPrivateIp?: Boolean;
    /**
     * Whether we want to copy the tags of the Source Server to the EC2 machine of the Recovery Instance.
     */
    copyTags?: Boolean;
    /**
     * The EC2 launch template ID of this launch configuration.
     */
    ec2LaunchTemplateID?: BoundedString;
    /**
     * The state of the Recovery Instance in EC2 after the recovery operation.
     */
    launchDisposition?: LaunchDisposition;
    /**
     * The licensing configuration to be used for this launch configuration.
     */
    licensing?: Licensing;
    /**
     * The name of the launch configuration.
     */
    name?: SmallBoundedString;
    /**
     * The ID of the Source Server for this launch configuration.
     */
    sourceServerID?: SourceServerID;
    /**
     * Whether Elastic Disaster Recovery should try to automatically choose the instance type that best matches the OS, CPU, and RAM of your Source Server.
     */
    targetInstanceTypeRightSizingMethod?: TargetInstanceTypeRightSizingMethod;
  }
  export type LaunchDisposition = "STOPPED"|"STARTED"|string;
  export type LaunchStatus = "PENDING"|"IN_PROGRESS"|"LAUNCHED"|"FAILED"|"TERMINATED"|string;
  export interface Licensing {
    /**
     * Whether to enable "Bring your own license" or not.
     */
    osByol?: Boolean;
  }
  export interface LifeCycle {
    /**
     * The date and time of when the Source Server was added to the service.
     */
    addedToServiceDateTime?: ISO8601DatetimeString;
    /**
     * The amount of time that the Source Server has been replicating for.
     */
    elapsedReplicationDuration?: ISO8601DatetimeString;
    /**
     * The date and time of the first byte that was replicated from the Source Server.
     */
    firstByteDateTime?: ISO8601DatetimeString;
    /**
     * An object containing information regarding the last launch of the Source Server.
     */
    lastLaunch?: LifeCycleLastLaunch;
    /**
     * The date and time this Source Server was last seen by the service.
     */
    lastSeenByServiceDateTime?: ISO8601DatetimeString;
  }
  export interface LifeCycleLastLaunch {
    /**
     * An object containing information regarding the initiation of the last launch of a Source Server.
     */
    initiated?: LifeCycleLastLaunchInitiated;
  }
  export interface LifeCycleLastLaunchInitiated {
    /**
     * The date and time the last Source Server launch was initiated.
     */
    apiCallDateTime?: ISO8601DatetimeString;
    /**
     * The ID of the Job that was used to last launch the Source Server.
     */
    jobID?: JobID;
    /**
     * The Job type that was used to last launch the Source Server.
     */
    type?: LastLaunchType;
  }
  export interface ListTagsForResourceRequest {
    /**
     * The ARN of the resource whose tags should be returned.
     */
    resourceArn: ARN;
  }
  export interface ListTagsForResourceResponse {
    /**
     * The tags of the requested resource.
     */
    tags?: TagsMap;
  }
  export interface NetworkInterface {
    /**
     * Network interface IPs.
     */
    ips?: IPsList;
    /**
     * Whether this is the primary network interface.
     */
    isPrimary?: Boolean;
    /**
     * The MAC address of the network interface.
     */
    macAddress?: BoundedString;
  }
  export type NetworkInterfaces = NetworkInterface[];
  export interface OS {
    /**
     * The long name of the Operating System.
     */
    fullString?: BoundedString;
  }
  export type PITPolicy = PITPolicyRule[];
  export interface PITPolicyRule {
    /**
     * Whether this rule is enabled or not.
     */
    enabled?: Boolean;
    /**
     * How often, in the chosen units, a snapshot should be taken.
     */
    interval: StrictlyPositiveInteger;
    /**
     * The duration to retain a snapshot for, in the chosen units.
     */
    retentionDuration: StrictlyPositiveInteger;
    /**
     * The ID of the rule.
     */
    ruleID?: PositiveInteger;
    /**
     * The units used to measure the interval and retentionDuration.
     */
    units: PITPolicyRuleUnits;
  }
  export type PITPolicyRuleUnits = "MINUTE"|"HOUR"|"DAY"|string;
  export type PaginationToken = string;
  export interface ParticipatingServer {
    /**
     * The launch status of a participating server.
     */
    launchStatus?: LaunchStatus;
    /**
     * The Recovery Instance ID of a participating server.
     */
    recoveryInstanceID?: RecoveryInstanceID;
    /**
     * The Source Server ID of a participating server.
     */
    sourceServerID?: SourceServerID;
  }
  export type ParticipatingServers = ParticipatingServer[];
  export type PositiveInteger = number;
  export interface RecoveryInstance {
    /**
     * The ARN of the Recovery Instance.
     */
    arn?: ARN;
    /**
     * The Data Replication Info of the Recovery Instance.
     */
    dataReplicationInfo?: RecoveryInstanceDataReplicationInfo;
    /**
     * The EC2 instance ID of the Recovery Instance.
     */
    ec2InstanceID?: EC2InstanceID;
    /**
     * The state of the EC2 instance for this Recovery Instance.
     */
    ec2InstanceState?: EC2InstanceState;
    /**
     * An object representing failback related information of the Recovery Instance.
     */
    failback?: RecoveryInstanceFailback;
    /**
     * Whether this Recovery Instance was created for a drill or for an actual Recovery event.
     */
    isDrill?: Boolean;
    /**
     * The ID of the Job that created the Recovery Instance.
     */
    jobID?: JobID;
    /**
     * The date and time of the Point in Time (PIT) snapshot that this Recovery Instance was launched from.
     */
    pointInTimeSnapshotDateTime?: ISO8601DatetimeString;
    /**
     * The ID of the Recovery Instance.
     */
    recoveryInstanceID?: RecoveryInstanceID;
    /**
     * Properties of the Recovery Instance machine.
     */
    recoveryInstanceProperties?: RecoveryInstanceProperties;
    /**
     * The Source Server ID that this Recovery Instance is associated with.
     */
    sourceServerID?: SourceServerID;
    /**
     * An array of tags that are associated with the Recovery Instance.
     */
    tags?: TagsMap;
  }
  export interface RecoveryInstanceDataReplicationError {
    /**
     * Error in data replication.
     */
    error?: FailbackReplicationError;
    /**
     * Error in data replication.
     */
    rawError?: LargeBoundedString;
  }
  export interface RecoveryInstanceDataReplicationInfo {
    /**
     * Information about Data Replication
     */
    dataReplicationError?: RecoveryInstanceDataReplicationError;
    /**
     * Information about whether the data replication has been initiated.
     */
    dataReplicationInitiation?: RecoveryInstanceDataReplicationInitiation;
    /**
     * The state of the data replication.
     */
    dataReplicationState?: RecoveryInstanceDataReplicationState;
    /**
     * An estimate of when the data replication will be completed.
     */
    etaDateTime?: ISO8601DatetimeString;
    /**
     * Data replication lag duration.
     */
    lagDuration?: ISO8601DatetimeString;
    /**
     * The disks that should be replicated.
     */
    replicatedDisks?: RecoveryInstanceDataReplicationInfoReplicatedDisks;
  }
  export interface RecoveryInstanceDataReplicationInfoReplicatedDisk {
    /**
     * The size of the replication backlog in bytes.
     */
    backloggedStorageBytes?: PositiveInteger;
    /**
     * The name of the device.
     */
    deviceName?: BoundedString;
    /**
     * The amount of data replicated so far in bytes.
     */
    replicatedStorageBytes?: PositiveInteger;
    /**
     * The amount of data to be rescanned in bytes.
     */
    rescannedStorageBytes?: PositiveInteger;
    /**
     * The total amount of data to be replicated in bytes.
     */
    totalStorageBytes?: PositiveInteger;
  }
  export type RecoveryInstanceDataReplicationInfoReplicatedDisks = RecoveryInstanceDataReplicationInfoReplicatedDisk[];
  export interface RecoveryInstanceDataReplicationInitiation {
    /**
     * The date and time of the current attempt to initiate data replication.
     */
    startDateTime?: ISO8601DatetimeString;
    /**
     * The steps of the current attempt to initiate data replication.
     */
    steps?: RecoveryInstanceDataReplicationInitiationSteps;
  }
  export interface RecoveryInstanceDataReplicationInitiationStep {
    /**
     * The name of the step.
     */
    name?: RecoveryInstanceDataReplicationInitiationStepName;
    /**
     * The status of the step.
     */
    status?: RecoveryInstanceDataReplicationInitiationStepStatus;
  }
  export type RecoveryInstanceDataReplicationInitiationStepName = "LINK_FAILBACK_CLIENT_WITH_RECOVERY_INSTANCE"|"COMPLETE_VOLUME_MAPPING"|"ESTABLISH_RECOVERY_INSTANCE_COMMUNICATION"|"DOWNLOAD_REPLICATION_SOFTWARE_TO_FAILBACK_CLIENT"|"CONFIGURE_REPLICATION_SOFTWARE"|"PAIR_AGENT_WITH_REPLICATION_SOFTWARE"|"ESTABLISH_AGENT_REPLICATOR_SOFTWARE_COMMUNICATION"|string;
  export type RecoveryInstanceDataReplicationInitiationStepStatus = "NOT_STARTED"|"IN_PROGRESS"|"SUCCEEDED"|"FAILED"|"SKIPPED"|string;
  export type RecoveryInstanceDataReplicationInitiationSteps = RecoveryInstanceDataReplicationInitiationStep[];
  export type RecoveryInstanceDataReplicationState = "STOPPED"|"INITIATING"|"INITIAL_SYNC"|"BACKLOG"|"CREATING_SNAPSHOT"|"CONTINUOUS"|"PAUSED"|"RESCAN"|"STALLED"|"DISCONNECTED"|string;
  export interface RecoveryInstanceDisk {
    /**
     * The amount of storage on the disk in bytes.
     */
    bytes?: PositiveInteger;
    /**
     * The EBS Volume ID of this disk.
     */
    ebsVolumeID?: EbsVolumeID;
    /**
     * The internal device name of this disk. This is the name that is visible on the machine itself and not from the EC2 console.
     */
    internalDeviceName?: BoundedString;
  }
  export type RecoveryInstanceDisks = RecoveryInstanceDisk[];
  export interface RecoveryInstanceFailback {
    /**
     * The date and time the agent on the Recovery Instance was last seen by the service.
     */
    agentLastSeenByServiceDateTime?: ISO8601DatetimeString;
    /**
     * The amount of time that the Recovery Instance has been replicating for.
     */
    elapsedReplicationDuration?: ISO8601DatetimeString;
    /**
     * The ID of the failback client that this Recovery Instance is associated with.
     */
    failbackClientID?: BoundedString;
    /**
     * The date and time that the failback client was last seen by the service.
     */
    failbackClientLastSeenByServiceDateTime?: ISO8601DatetimeString;
    /**
     * The date and time that the failback initiation started.
     */
    failbackInitiationTime?: ISO8601DatetimeString;
    /**
     * The Job ID of the last failback log for this Recovery Instance.
     */
    failbackJobID?: JobID;
    /**
     * Whether we are failing back to the original Source Server for this Recovery Instance.
     */
    failbackToOriginalServer?: Boolean;
    /**
     * The date and time of the first byte that was replicated from the Recovery Instance.
     */
    firstByteDateTime?: ISO8601DatetimeString;
    /**
     * The state of the failback process that this Recovery Instance is in.
     */
    state?: FailbackState;
  }
  export type RecoveryInstanceID = string;
  export type RecoveryInstanceIDs = RecoveryInstanceID[];
  export interface RecoveryInstanceProperties {
    /**
     * An array of CPUs.
     */
    cpus?: Cpus;
    /**
     * An array of disks.
     */
    disks?: RecoveryInstanceDisks;
    /**
     * Hints used to uniquely identify a machine.
     */
    identificationHints?: IdentificationHints;
    /**
     * The date and time the Recovery Instance properties were last updated on.
     */
    lastUpdatedDateTime?: ISO8601DatetimeString;
    /**
     * An array of network interfaces.
     */
    networkInterfaces?: NetworkInterfaces;
    /**
     * Operating system.
     */
    os?: OS;
    /**
     * The amount of RAM in bytes.
     */
    ramBytes?: PositiveInteger;
  }
  export type RecoveryInstancesForTerminationRequest = RecoveryInstanceID[];
  export interface RecoverySnapshot {
    /**
     * A list of EBS snapshots.
     */
    ebsSnapshots?: EbsSnapshotsList;
    /**
     * The timestamp of when we expect the snapshot to be taken.
     */
    expectedTimestamp: ISO8601DatetimeString;
    /**
     * The ID of the Recovery Snapshot.
     */
    snapshotID: RecoverySnapshotID;
    /**
     * The ID of the Source Server that the snapshot was taken for.
     */
    sourceServerID: SourceServerID;
    /**
     * The actual timestamp that the snapshot was taken.
     */
    timestamp?: ISO8601DatetimeString;
  }
  export type RecoverySnapshotID = string;
  export type RecoverySnapshotsList = RecoverySnapshot[];
  export type RecoverySnapshotsOrder = "ASC"|"DESC"|string;
  export interface ReplicationConfiguration {
    /**
     * Whether to associate the default Elastic Disaster Recovery Security group with the Replication Configuration.
     */
    associateDefaultSecurityGroup?: Boolean;
    /**
     * Configure bandwidth throttling for the outbound data transfer rate of the Source Server in Mbps.
     */
    bandwidthThrottling?: PositiveInteger;
    /**
     * Whether to create a Public IP for the Recovery Instance by default.
     */
    createPublicIP?: Boolean;
    /**
     * The data plane routing mechanism that will be used for replication.
     */
    dataPlaneRouting?: ReplicationConfigurationDataPlaneRouting;
    /**
     * The Staging Disk EBS volume type to be used during replication.
     */
    defaultLargeStagingDiskType?: ReplicationConfigurationDefaultLargeStagingDiskType;
    /**
     * The type of EBS encryption to be used during replication.
     */
    ebsEncryption?: ReplicationConfigurationEbsEncryption;
    /**
     * The ARN of the EBS encryption key to be used during replication.
     */
    ebsEncryptionKeyArn?: ARN;
    /**
     * The name of the Replication Configuration.
     */
    name?: SmallBoundedString;
    /**
     * The Point in time (PIT) policy to manage snapshots taken during replication.
     */
    pitPolicy?: PITPolicy;
    /**
     * The configuration of the disks of the Source Server to be replicated.
     */
    replicatedDisks?: ReplicationConfigurationReplicatedDisks;
    /**
     * The instance type to be used for the replication server.
     */
    replicationServerInstanceType?: EC2InstanceType;
    /**
     * The security group IDs that will be used by the replication server.
     */
    replicationServersSecurityGroupsIDs?: ReplicationServersSecurityGroupsIDs;
    /**
     * The ID of the Source Server for this Replication Configuration.
     */
    sourceServerID?: SourceServerID;
    /**
     * The subnet to be used by the replication staging area.
     */
    stagingAreaSubnetId?: SubnetID;
    /**
     * A set of tags to be associated with all resources created in the replication staging area: EC2 replication server, EBS volumes, EBS snapshots, etc.
     */
    stagingAreaTags?: TagsMap;
    /**
     * Whether to use a dedicated Replication Server in the replication staging area.
     */
    useDedicatedReplicationServer?: Boolean;
  }
  export type ReplicationConfigurationDataPlaneRouting = "PRIVATE_IP"|"PUBLIC_IP"|string;
  export type ReplicationConfigurationDefaultLargeStagingDiskType = "GP2"|"GP3"|"ST1"|string;
  export type ReplicationConfigurationEbsEncryption = "DEFAULT"|"CUSTOM"|string;
  export interface ReplicationConfigurationReplicatedDisk {
    /**
     * The name of the device.
     */
    deviceName?: BoundedString;
    /**
     * The requested number of I/O operations per second (IOPS).
     */
    iops?: PositiveInteger;
    /**
     * Whether to boot from this disk or not.
     */
    isBootDisk?: Boolean;
    /**
     * The Staging Disk EBS volume type to be used during replication.
     */
    stagingDiskType?: ReplicationConfigurationReplicatedDiskStagingDiskType;
    /**
     * The throughput to use for the EBS volume in MiB/s. This parameter is valid only for gp3 volumes.
     */
    throughput?: PositiveInteger;
  }
  export type ReplicationConfigurationReplicatedDiskStagingDiskType = "AUTO"|"GP2"|"GP3"|"IO1"|"SC1"|"ST1"|"STANDARD"|string;
  export type ReplicationConfigurationReplicatedDisks = ReplicationConfigurationReplicatedDisk[];
  export interface ReplicationConfigurationTemplate {
    /**
     * The Replication Configuration Template ARN.
     */
    arn?: ARN;
    /**
     * Whether to associate the default Elastic Disaster Recovery Security group with the Replication Configuration Template.
     */
    associateDefaultSecurityGroup?: Boolean;
    /**
     * Configure bandwidth throttling for the outbound data transfer rate of the Source Server in Mbps.
     */
    bandwidthThrottling?: PositiveInteger;
    /**
     * Whether to create a Public IP for the Recovery Instance by default.
     */
    createPublicIP?: Boolean;
    /**
     * The data plane routing mechanism that will be used for replication.
     */
    dataPlaneRouting?: ReplicationConfigurationDataPlaneRouting;
    /**
     * The Staging Disk EBS volume type to be used during replication.
     */
    defaultLargeStagingDiskType?: ReplicationConfigurationDefaultLargeStagingDiskType;
    /**
     * The type of EBS encryption to be used during replication.
     */
    ebsEncryption?: ReplicationConfigurationEbsEncryption;
    /**
     * The ARN of the EBS encryption key to be used dur'use strict';

const inherits = require('inherits');
const Reporter = require('../base/reporter').Reporter;
const Buffer = require('safer-buffer').Buffer;

function DecoderBuffer(base, options) {
  Reporter.call(this, options);
  if (!Buffer.isBuffer(base)) {
    this.error('Input not Buffer');
    return;
  }

  this.base = base;
  this.offset = 0;
  this.length = base.length;
}
inherits(DecoderBuffer, Reporter);
exports.DecoderBuffer = DecoderBuffer;

DecoderBuffer.isDecoderBuffer = function isDecoderBuffer(data) {
  if (data instanceof DecoderBuffer) {
    return true;
  }

  // Or accept compatible API
  const isCompatible = typeof data === 'object' &&
    Buffer.isBuffer(data.base) &&
    data.constructor.name === 'DecoderBuffer' &&
    typeof data.offset === 'number' &&
    typeof data.length === 'number' &&
    typeof data.save === 'function' &&
    typeof data.restore === 'function' &&
    typeof data.isEmpty === 'function' &&
    typeof data.readUInt8 === 'function' &&
    typeof data.skip === 'function' &&
    typeof data.raw === 'function';

  return isCompatible;
};

DecoderBuffer.prototype.save = function save() {
  return { offset: this.offset, reporter: Reporter.prototype.save.call(this) };
};

DecoderBuffer.prototype.restore = function restore(save) {
  // Return skipped data
  const res = new DecoderBuffer(this.base);
  res.offset = save.offset;
  res.length = this.offset;

  this.offset = save.offset;
  Reporter.prototype.restore.call(this, save.reporter);

  return res;
};

DecoderBuffer.prototype.isEmpty = function isEmpty() {
  return this.offset === this.length;
};

DecoderBuffer.prototype.readUInt8 = function readUInt8(fail) {
  if (this.offset + 1 <= this.length)
    return this.base.readUInt8(this.offset++, true);
  else
    return this.error(fail || 'DecoderBuffer overrun');
};

DecoderBuffer.prototype.skip = function skip(bytes, fail) {
  if (!(this.offset + bytes <= this.length))
    return this.error(fail || 'DecoderBuffer overrun');

  const res = new DecoderBuffer(this.base);

  // Share reporter state
  res._reporterState = this._reporterState;

  res.offset = this.offset;
  res.length = this.offset + bytes;
  this.offset += bytes;
  return res;
};

DecoderBuffer.prototype.raw = function raw(save) {
  return this.base.slice(save ? save.offset : this.offset, this.length);
};

function EncoderBuffer(value, reporter) {
  if (Array.isArray(value)) {
    this.length = 0;
    this.value = value.map(function(item) {
      if (!EncoderBuffer.isEncoderBuffer(item))
        item = new EncoderBuffer(item, reporter);
      this.length += item.length;
      return item;
    }, this);
  } else if (typeof value === 'number') {
    if (!(0 <= value && value <= 0xff))
      return reporter.error('non-byte EncoderBuffer value');
    this.value = value;
    this.length = 1;
  } else if (typeof value === 'string') {
    this.value = value;
    this.length = Buffer.byteLength(value);
  } else if (Buffer.isBuffer(value)) {
    this.value = value;
    this.length = value.length;
  } else {
    return reporter.error('Unsupported type: ' + typeof value);
  }
}
exports.EncoderBuffer = EncoderBuffer;

EncoderBuffer.isEncoderBuffer = function isEncoderBuffer(data) {
  if (data instanceof EncoderBuffer) {
    return true;
  }

  // Or accept compatible API
  const isCompatible = typeof data === 'object' &&
    data.constructor.name === 'EncoderBuffer' &&
    typeof data.length === 'number' &&
    typeof data.join === 'function';

  return isCompatible;
};

EncoderBuffer.prototype.join = function join(out, offset) {
  if (!out)
    out = Buffer.alloc(this.length);
  if (!offset)
    offset = 0;

  if (this.length === 0)
    return out;

  if (Array.isArray(this.value)) {
    this.value.forEach(function(item) {
      item.join(out, offset);
      offset += item.length;
    });
  } else {
    if (typeof this.value === 'number')
      out[offset] = this.value;
    else if (typeof this.value === 'string')
      out.write(this.value, offset);
    else if (Buffer.isBuffer(this.value))
      this.value.copy(out, offset);
    offset += this.length;
  }

  return out;
};
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   var RGX = /^(-?(?:\d+)?\.?\d+) *(m(?:illiseconds?|s(?:ecs?)?))?(s(?:ec(?:onds?|s)?)?)?(m(?:in(?:utes?|s)?)?)?(h(?:ours?|rs?)?)?(d(?:ays?)?)?(w(?:eeks?|ks?)?)?(y(?:ears?|rs?)?)?$/,
	SEC = 1e3,
	MIN = SEC * 60,
	HOUR = MIN * 60,
	DAY = HOUR * 24,
	YEAR = DAY * 365.25;

export function parse(val) {
	var num, arr = val.toLowerCase().match(RGX);
	if (arr != null && (num = parseFloat(arr[1]))) {
		if (arr[3] != null) return num * SEC;
		if (arr[4] != null) return num * MIN;
		if (arr[5] != null) return num * HOUR;
		if (arr[6] != null) return num * DAY;
		if (arr[7] != null) return num * DAY * 7;
		if (arr[8] != null) return num * YEAR;
		return num;
	}
}

function fmt(val, pfx, str, long) {
	var num = (val | 0) === val ? val : ~~(val + 0.5);
	return pfx + num + (long ? (' ' + str + (num != 1 ? 's' : '')) : str[0]);
}

export function format(num, long) {
	var pfx = num < 0  ? '-' : '', abs = num < 0 ? -num : num;
	if (abs < SEC) return num + (long ? ' ms' : 'ms');
	if (abs < MIN) return fmt(abs / SEC, pfx, 'second', long);
	if (abs < HOUR) return fmt(abs / MIN, pfx, 'minute', long);
	if (abs < DAY) return fmt(abs / HOUR, pfx, 'hour', long);
	if (abs < YEAR) return fmt(abs / DAY, pfx, 'day', long);
	return fmt(abs / YEAR, pfx, 'year', long);
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       jan Atlantic/St_Helena",
			"SI|Europe/Belgrade Europe/Ljubljana",
			"SJ|Europe/Berlin Arctic/Longyearbyen",
			"SK|Europe/Prague Europe/Bratislava",
			"SL|Africa/Abidjan Africa/Freetown",
			"SM|Europe/Rome Europe/San_Marino",
			"SN|Africa/Abidjan Africa/Dakar",
			"SO|Africa/Nairobi Africa/Mogadishu",
			"SR|America/Paramaribo",
			"SS|Africa/Juba",
			"ST|Africa/Sao_Tome",
			"SV|America/El_Salvador",
			"SX|America/Puerto_Rico America/Lower_Princes",
			"SY|Asia/Damascus",
			"SZ|Africa/Johannesburg Africa/Mbabane",
			"TC|America/Grand_Turk",
			"TD|Africa/Ndjamena",
			"TF|Asia/Dubai Indian/Maldives Indian/Kerguelen",
			"TG|Africa/Abidjan Africa/Lome",
			"TH|Asia/Bangkok",
			"TJ|Asia/Dushanbe",
			"TK|Pacific/Fakaofo",
			"TL|Asia/Dili",
			"TM|Asia/Ashgabat",
			"TN|Africa/Tunis",
			"TO|Pacific/Tongatapu",
			"TR|Europe/Istanbul",
			"TT|America/Puerto_Rico America/Port_of_Spain",
			"TV|Pacific/Tarawa Pacific/Funafuti",
			"TW|Asia/Taipei",
			"TZ|Africa/Nairobi Africa/Dar_es_Salaam",
			"UA|Europe/Simferopol Europe/Kyiv",
			"UG|Africa/Nairobi Africa/Kampala",
			"UM|Pacific/Pago_Pago Pacific/Tarawa Pacific/Midway Pacific/Wake",
			"US|America/New_York America/Detroit America/Kentucky/Louisville America/Kentucky/Monticello America/Indiana/Indianapolis America/Indiana/Vincennes America/Indiana/Winamac America/Indiana/Marengo America/Indiana/Petersburg America/Indiana/Vevay America/Chicago America/Indiana/Tell_City America/Indiana/Knox America/Menominee America/North_Dakota/Center America/North_Dakota/New_Salem America/North_Dakota/Beulah America/Denver America/Boise America/Phoenix America/Los_Angeles America/Anchorage America/Juneau America/Sitka America/Metlakatla America/Yakutat America/Nome America/Adak Pacific/Honolulu",
			"UY|America/Montevideo",
			"UZ|Asia/Samarkand Asia/Tashkent",
			"VA|Europe/Rome Europe/Vatican",
			"VC|America/Puerto_Rico America/St_Vincent",
			"VE|America/Caracas",
			"VG|America/Puerto_Rico America/Tortola",
			"VI|America/Puerto_Rico America/St_Thomas",
			"VN|Asia/Bangkok Asia/Ho_Chi_Minh",
			"VU|Pacific/Efate",
			"WF|Pacific/Tarawa Pacific/Wallis",
			"WS|Pacific/Apia",
			"YE|Asia/Riyadh Asia/Aden",
			"YT|Africa/Nairobi Indian/Mayotte",
			"ZA|Africa/Johannesburg",
			"ZM|Africa/Maputo Africa/Lusaka",
			"ZW|Africa/Maputo Africa/Harare"
		]
	});


	return moment;
}));
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   odel');
    }
  }

  if (typeof schema === 'string') {
    collection = schema;
    schema = false;
  }

  if (utils.isObject(schema) && !(schema instanceof Schema)) {
    schema = new Schema(schema);
  }
  if (schema && !(schema instanceof Schema)) {
    throw new Error('The 2nd parameter to `mongoose.model()` should be a ' +
      'schema or a POJO');
  }

  if (typeof collection === 'boolean') {
    skipInit = collection;
    collection = null;
  }

  // handle internal options from connection.model()
  let options;
  if (skipInit && utils.isObject(skipInit)) {
    options = skipInit;
    skipInit = true;
  } else {
    options = {};
  }

  // look up schema for the collection.
  if (!_mongoose.modelSchemas[name]) {
    if (schema) {
      // cache it so we only apply plugins once
      _mongoose.modelSchemas[name] = schema;
    } else {
      throw new mongoose.Error.MissingSchemaError(name);
    }
  }

  const originalSchema = schema;
  if (schema) {
    if (_mongoose.get('cloneSchemas')) {
      schema = schema.clone();
    }
    _mongoose._applyPlugins(schema);
  }

  let sub;

  // connection.model() may be passing a different schema for
  // an existing model name. in this case don't read from cache.
  const overwriteModels = _mongoose.options.hasOwnProperty('overwriteModels') ?
    _mongoose.options.overwriteModels :
    options.overwriteModels;
  if (_mongoose.models[name] && options.cache !== false && overwriteModels !== true) {
    if (originalSchema &&
        originalSchema.instanceOfSchema &&
        originalSchema !== _mongoose.models[name].schema) {
      throw new _mongoose.Error.OverwriteModelError(name);
    }

    if (collection && collection !== _mongoose.models[name].collection.name) {
      // subclass current model with alternate collection
      model = _mongoose.models[name];
      schema = model.prototype.schema;
      sub = model.__subclass(_mongoose.connection, schema, collection);
      // do not cache the sub model
      return sub;
    }

    return _mongoose.models[name];
  }

  // ensure a schema exists
  if (!schema) {
    schema = this.modelSchemas[name];
    if (!schema) {
      throw new mongoose.Error.MissingSchemaError(name);
    }
  }

  // Apply relevant "global" options to the schema
  if (!('pluralization' in schema.options)) {
    schema.options.pluralization = _mongoose.options.pluralization;
  }

  if (!collection) {
    collection = schema.get('collection') ||
      utils.toCollectionName(name, _mongoose.pluralize());
  }

  const connection = options.connection || _mongoose.connection;
  model = _mongoose.Model.compile(model || name, schema, collection, connection, _mongoose);

  if (!skipInit) {
    // Errors handled internally, so safe to ignore error
    model.init(function $modelInitNoop() {});
  }

  connection.emit('model', model);

  if (options.cache === false) {
    return model;
  }

  _mongoose.models[name] = model;
  return _mongoose.models[name];
};

/**
 * Removes the model named `name` from the default connection, if it exists.
 * You can use this function to clean up any models you created in your tests to
 * prevent OverwriteModelErrors.
 *
 * Equivalent to `mongoose.connection.deleteModel(name)`.
 *
 * ####Example:
 *
 *     mongoose.model('User', new Schema({ name: String }));
 *     console.log(mongoose.model('User')); // Model object
 *     mongoose.deleteModel('User');
 *     console.log(mongoose.model('User')); // undefined
 *
 *     // Usually useful in a Mocha `afterEach()` hook
 *     afterEach(function() {
 *       mongoose.deleteModel(/.+/); // Delete every model
 *     });
 *
 * @api public
 * @param {String|RegExp} name if string, the name of the model to remove. If regexp, removes all models whose name matches the regexp.
 * @return {Mongoose} this
 */

Mongoose.prototype.deleteModel = function(name) {
  const _mongoose = this instanceof Mongoose ? this : mongoose;

  _mongoose.connection.deleteModel(name);
  return _mongoose;
};

/**
 * Returns an array of model names created on this instance of Mongoose.
 *
 * ####Note:
 *
 * _Does not include names of models created using `connection.model()`._
 *
 * @api public
 * @return {Array}
 */

Mongoose.prototype.modelNames = function() {
  const _mongoose = this instanceof Mongoose ? this : mongoose;

  const names = Object.keys(_mongoose.models);
  return names;
};

/**
 * Applies global plugins to `schema`.
 *
 * @param {Schema} schema
 * @api private
 */

Mongoose.prototype._applyPlugins = function(schema, options) {
  const _mongoose = this instanceof Mongoose ? this : mongoose;

  options = options || {};
  options.applyPluginsToDiscriminators = get(_mongoose,
    'options.applyPluginsToDiscriminators', false);
  options.applyPluginsToChildSchemas = get(_mongoose,
    'options.applyPluginsToChildSchemas', true);
  applyPlugins(schema, _mongoose.plugins, options, '$globalPluginsApplied');
};

/**
 * Declares a global plugin executed on all Schemas.
 *
 * Equivalent to calling `.plugin(fn)` on each Schema you create.
 *
 * @param {Function} fn plugin callback
 * @param {Object} [opts] optional options
 * @return {Mongoose} this
 * @see plugins ./plugins.html
 * @api public
 */

Mongoose.prototype.plugin = function(fn, opts) {
  const _mongoose = this instanceof Mongoose ? this : mongoose;

  _mongoose.plugins.push([fn, opts]);
  return _mongoose;
};

/**
 * The Mongoose module's default connection. Equivalent to `mongoose.connections[0]`, see [`connections`](#mongoose_Mongoose-connections).
 *
 * ####Example:
 *
 *     const mongoose = require('mongoose');
 *     mongoose.connect(...);
 *     mongoose.connection.on('error', cb);
 *
 * This is the connection used by default for every model created using [mongoose.model](#index_Mongoose-model).
 *
 * To create a new connection, use [`createConnection()`](#mongoose_Mongoose-createConnection).
 *
 * @memberOf Mongoose
 * @instance
 * @property {Connection} connection
 * @api public
 */

Mongoose.prototype.__defineGetter__('connection', function() {
  return this.connections[0];
});

Mongoose.prototype.__defineSetter__('connection', function(v) {
  if (v instanceof Connection) {
    this.connections[0] = v;
    this.models = v.models;
  }
});

/**
 * An array containing all [connections](connections.html) associated with this
 * Mongoose instance. By default, there is 1 connection. Calling
 * [`createConnection()`](#mongoose_Mongoose-createConnection) adds a connection
 * to this array.
 *
 * ####Example:
 *
 *     const mongoose = require('mongoose');
 *     mongoose.connections.length; // 1, just the default connection
 *     mongoose.connections[0] === mongoose.connection; // true
 *
 *     mongoose.createConnection('mongodb://localhost:27017/test');
 *     mongoose.connections.length; // 2
 *
 * @memberOf Mongoose
 * @instance
 * @property {Array} connections
 * @api public
 */

Mongoose.prototype.connections;

/*!
 * Connection
 */

const Connection = driver.get().getConnection();

/*!
 * Collection
 */

const Collection = driver.get().Collection;

/**
 * The Mongoose Aggregate constructor
 *
 * @method Aggregate
 * @api public
 */

Mongoose.prototype.Aggregate = Aggregate;

/**
 * The Mongoose Collection constructor
 *
 * @method Collection
 * @api public
 */

Mongoose.prototype.Collection = Collection;

/**
 * The Mongoose [Connection](#connection_Connection) constructor
 *
 * @memberOf Mongoose
 * @instance
 * @method Connection
 * @api public
 */

Mongoose.prototype.Connection = Connection;

/**
 * The Mongoose version
 *
 * #### Example
 *
 *     console.log(mongoose.version); // '5.x.x'
 *
 * @property version
 * @api public
 */

Mongoose.prototype.version = pkg.version;

/**
 * The Mongoose constructor
 *
 * The exports of the mongoose module is an instance of this class.
 *
 * ####Example:
 *
 *     const mongoose = require('mongoose');
 *     const mongoose2 = new mongoose.Mongoose();
 *
 * @method Mongoose
 * @api public
 */

Mongoose.prototype.Mongoose = Mongoose;

/**
 * The Mongoose [Schema](#schema_Schema) constructor
 *
 * ####Example:
 *
 *     const mongoose = require('mongoose');
 *     const Schema = mongoose.Schema;
 *     const CatSchema = new Schema(..);
 *
 * @method Schema
 * @api public
 */

Mongoose.prototype.Schema = Schema;

/**
 * The Mongoose [SchemaType](#schematype_SchemaType) constructor
 *
 * @method SchemaType
 * @api public
 */

Mongoose.prototype.SchemaType = SchemaType;

/**
 * The various Mongoose SchemaTypes.
 *
 * ####Note:
 *
 * _Alias of mongoose.Schema.Types for backwards compatibility._
 *
 * @property SchemaTypes
 * @see Schema.SchemaTypes #schema_Schema.Types
 * @api public
 */

Mongoose.prototype.SchemaTypes = Schema.Types;

/**
 * The Mongoose [VirtualType](#virtualtype_VirtualType) constructor
 *
 * @method VirtualType
 * @api public
 */

Mongoose.prototype.VirtualType = VirtualType;

/**
 * The various Mongoose Types.
 *
 * ####Example:
 *
 *     const mongoose = require('mongoose');
 *     const array = mongoose.Types.Array;
 *
 * ####Types:
 *
 * - [Array](/docs/schematypes.html#arrays)
 * - [Buffer](/docs/schematypes.html#buffers)
 * - [Embedded](/docs/schematypes.html#schemas)
 * - [DocumentArray](/docs/api/documentarraypath.html)
 * - [Decimal128](/docs/api.html#mongoose_Mongoose-Decimal128)
 * - [ObjectId](/docs/schematypes.html#objectids)
 * - [Map](/docs/schematypes.html#maps)
 * - [Subdocument](/docs/schematypes.html#schemas)
 *
 * Using this exposed access to the `ObjectId` type, we can construct ids on demand.
 *
 *     const ObjectId = mongoose.Types.ObjectId;
 *     const id1 = new ObjectId;
 *
 * @property Types
 * @api public
 */

Mongoose.prototype.Types = Types;

/**
 * The Mongoose [Query](#query_Query) constructor.
 *
 * @method Query
 * @api public
 */

Mongoose.prototype.Query = Query;

/**
 * The Mongoose [Promise](#promise_Promise) constructor.
 *
 * @memberOf Mongoose
 * @instance
 * @property Promise
 * @api public
 */

Object.defineProperty(Mongoose.prototype, 'Promise', {
  get: function() {
    return PromiseProvider.get();
  },
  set: function(lib) {
    PromiseProvider.set(lib);
  }
});

/**
 * Storage layer for mongoose promises
 *
 * @method PromiseProvider
 * @api public
 */

Mongoose.prototype.PromiseProvider = PromiseProvider;

/**
 * The Mongoose [Model](#model_Model) constructor.
 *
 * @method Model
 * @api public
 */

Mongoose.prototype.Model = Model;

/**
 * The Mongoose [Document](/api/document.html) constructor.
 *
 * @method Document
 * @api public
 */

Mongoose.prototype.Document = Document;

/**
 * The Mongoose DocumentProvider constructor. Mongoose users should not have to
 * use this directly
 *
 * @method DocumentProvider
 * @api public
 */

Mongoose.prototype.DocumentProvider = require('./document_provider');

/**
 * The Mongoose ObjectId [SchemaType](/docs/schematypes.html). Used for
 * declaring paths in your schema that should be
 * [MongoDB ObjectIds](https://docs.mongodb.com/manual/reference/method/ObjectId/).
 * Do not use this to create a new ObjectId instance, use `mongoose.Types.ObjectId`
 * instead.
 *
 * ####Example:
 *
 *     const childSchema = new Schema({ parentId: mongoose.ObjectId });
 *
 * @property ObjectId
 * @api public
 */

Mongoose.prototype.ObjectId = SchemaTypes.ObjectId;

/**
 * Returns true if Mongoose can cast the given value to an ObjectId, or
 * false otherwise.
 *
 * ####Example:
 *
 *     mongoose.isValidObjectId(new mongoose.Types.ObjectId()); // true
 *     mongoose.isValidObjectId('0123456789ab'); // true
 *     mongoose.isValidObjectId(6); // false
 *
 * @method isValidObjectId
 * @api public
 */

Mongoose.prototype.isValidObjectId = function(v) {
  if (v == null) {
    return true;
  }
  const base = this || mongoose;
  const ObjectId = base.driver.get().ObjectId;
  if (v instanceof ObjectId) {
    return true;
  }

  if (v._id != null) {
    if (v._id instanceof ObjectId) {
      return true;
    }
    if (v._id.toString instanceof Function) {
      v = v._id.toString();
      if (typeof v === 'string' && v.length === 12) {
        return true;
      }
      if (typeof v === 'string' && v.length === 24 && /^[a-f0-9]*$/.test(v)) {
        return true;
      }
      return false;
    }
  }

  if (v.toString instanceof Function) {
    v = v.toString();
  }

  if (typeof v === 'string' && v.length === 12) {
    return true;
  }
  if (typeof v === 'string' && v.length === 24 && /^[a-f0-9]*$/.test(v)) {
    return true;
  }

  return false;
};

/**
 * The Mongoose Decimal128 [SchemaType](/docs/schematypes.html). Used for
 * declaring paths in your schema that should be
 * [128-bit decimal floating points](http://thecodebarbarian.com/a-nodejs-perspective-on-mongodb-34-decimal.html).
 * Do not use this to create a new Decimal128 instance, use `mongoose.Types.Decimal128`
 * instead.
 *
 * ####Example:
 *
 *     const vehicleSchema = new Schema({ fuelLevel: mongoose.Decimal128 });
 *
 * @property Decimal128
 * @api public
 */

Mongoose.prototype.Decimal128 = SchemaTypes.Decimal128;

/**
 * The Mongoose Mixed [SchemaType](/docs/schematypes.html). Used for
 * declaring paths in your schema that Mongoose's change tracking, casting,
 * and validation should ignore.
 *
 * ####Example:
 *
 *     const schema = new Schema({ arbitrary: mongoose.Mixed });
 *
 * @property Mixed
 * @api public
 */

Mongoose.prototype.Mixed = SchemaTypes.Mixed;

/**
 * The Mongoose Date [SchemaType](/docs/schematypes.html).
 *
 * ####Example:
 *
 *     const schema = new Schema({ test: Date });
 *     schema.path('test') instanceof mongoose.Date; // true
 *
 * @property Date
 * @api public
 */

Mongoose.prototype.Date = SchemaTypes.Date;

/**
 * The Mongoose Number [SchemaType](/docs/schematypes.html). Used for
 * declaring paths in your schema that Mongoose should cast to numbers.
 *
 * ####Example:
 *
 *     const schema = new Schema({ num: mongoose.Number });
 *     // Equivalent to:
 *     const schema = new Schema({ num: 'number' });
 *
 * @property Number
 * @api public
 */

Mongoose.prototype.Number = SchemaTypes.Number;

/**
 * The [MongooseError](#error_MongooseError) constructor.
 *
 * @method Error
 * @api public
 */

Mongoose.prototype.Error = require('./error/index');

/**
 * Mongoose uses this function to get the current time when setting
 * [timestamps](/docs/guide.html#timestamps). You may stub out this function
 * using a tool like [Sinon](https://www.npmjs.com/package/sinon) for testing.
 *
 * @method now
 * @returns Date the current time
 * @api public
 */

Mongoose.prototype.now = function now() { return new Date(); };

/**
 * The Mongoose CastError constructor
 *
 * @method CastError
 * @param {String} type The name of the type
 * @param {Any} value The value that failed to cast
 * @param {String} path The path `a.b.c` in the doc where this cast error occurred
 * @param {Error} [reason] The original error that was thrown
 * @api public
 */

Mongoose.prototype.CastError = require('./error/cast');

/**
 * The constructor used for schematype options
 *
 * @method SchemaTypeOptions
 * @api public
 */

Mongoose.prototype.SchemaTypeOptions = require('./options/SchemaTypeOptions');

/**
 * The [node-mongodb-native](https://github.com/mongodb/node-mongodb-native) driver Mongoose uses.
 *
 * @property mongo
 * @api public
 */

Mongoose.prototype.mongo = require('mongodb');

/**
 * The [mquery](https://github.com/aheckmann/mquery) query builder Mongoose uses.
 *
 * @property mquery
 * @api public
 */

Mongoose.prototype.mquery = require('mquery');

/*!
 * ignore
 */

Mongoose.prototype._promiseOrCallback = function(callback, fn, ee) {
  return promiseOrCallback(callback, fn, ee, this.Promise);
};

/*!
 * The exports object is an instance of Mongoose.
 *
 * @api public
 */

const mongoose = module.exports = exports = new Mongoose({
  [defaultMongooseSymbol]: true
});
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              // File ignored in coverage tests via setting in .istanbul.yml
/* Jison generated parser */
"use strict";

exports.__esModule = true;
var handlebars = (function () {
    var parser = { trace: function trace() {},
        yy: {},
        symbols_: { "error": 2, "root": 3, "program": 4, "EOF": 5, "program_repetition0": 6, "statement": 7, "mustache": 8, "block": 9, "rawBlock": 10, "partial": 11, "partialBlock": 12, "content": 13, "COMMENT": 14, "CONTENT": 15, "openRawBlock": 16, "rawBlock_repetition0": 17, "END_RAW_BLOCK": 18, "OPEN_RAW_BLOCK": 19, "helperName": 20, "openRawBlock_repetition0": 21, "openRawBlock_option0": 22, "CLOSE_RAW_BLOCK": 23, "openBlock": 24, "block_option0": 25, "closeBlock": 26, "openInverse": 27, "block_option1": 28, "OPEN_BLOCK": 29, "openBlock_repetition0": 30, "openBlock_option0": 31, "openBlock_option1": 32, "CLOSE": 33, "OPEN_INVERSE": 34, "openInverse_repetition0": 35, "openInverse_option0": 36, "openInverse_option1": 37, "openInverseChain": 38, "OPEN_INVERSE_CHAIN": 39, "openInverseChain_repetition0": 40, "openInverseChain_option0": 41, "openInverseChain_option1": 42, "inverseAndProgram": 43, "INVERSE": 44, "inverseChain": 45, "inverseChain_option0": 46, "OPEN_ENDBLOCK": 47, "OPEN": 48, "mustache_repetition0": 49, "mustache_option0": 50, "OPEN_UNESCAPED": 51, "mustache_repetition1": 52, "mustache_option1": 53, "CLOSE_UNESCAPED": 54, "OPEN_PARTIAL": 55, "partialName": 56, "partial_repetition0": 57, "partial_option0": 58, "openPartialBlock": 59, "OPEN_PARTIAL_BLOCK": 60, "openPartialBlock_repetition0": 61, "openPartialBlock_option0": 62, "param": 63, "sexpr": 64, "OPEN_SEXPR": 65, "sexpr_repetition0": 66, "sexpr_option0": 67, "CLOSE_SEXPR": 68, "hash": 69, "hash_repetition_plus0": 70, "hashSegment": 71, "ID": 72, "EQUALS": 73, "blockParams": 74, "OPEN_BLOCK_PARAMS": 75, "blockParams_repetition_plus0": 76, "CLOSE_BLOCK_PARAMS": 77, "path": 78, "dataName": 79, "STRING": 80, "NUMBER": 81, "BOOLEAN": 82, "UNDEFINED": 83, "NULL": 84, "DATA": 85, "pathSegments": 86, "SEP": 87, "$accept": 0, "$end": 1 },
        terminals_: { 2: "error", 5: "EOF", 14: "COMMENT", 15: "CONTENT", 18: "END_RAW_BLOCK", 19: "OPEN_RAW_BLOCK", 23: "CLOSE_RAW_BLOCK", 29: "OPEN_BLOCK", 33: "CLOSE", 34: "OPEN_INVERSE", 39: "OPEN_INVERSE_CHAIN", 44: "INVERSE", 47: "OPEN_ENDBLOCK", 48: "OPEN", 51: "OPEN_UNESCAPED", 54: "CLOSE_UNESCAPED", 55: "OPEN_PARTIAL", 60: "OPEN_PARTIAL_BLOCK", 65: "OPEN_SEXPR", 68: "CLOSE_SEXPR", 72: "ID", 73: "EQUALS", 75: "OPEN_BLOCK_PARAMS", 77: "CLOSE_BLOCK_PARAMS", 80: "STRING", 81: "NUMBER", 82: "BOOLEAN", 83: "UNDEFINED", 84: "NULL", 85: "DATA", 87: "SEP" },
        productions_: [0, [3, 2], [4, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [13, 1], [10, 3], [16, 5], [9, 4], [9, 4], [24, 6], [27, 6], [38, 6], [43, 2], [45, 3], [45, 1], [26, 3], [8, 5], [8, 5], [11, 5], [12, 3], [59, 5], [63, 1], [63, 1], [64, 5], [69, 1], [71, 3], [74, 3], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [56, 1], [56, 1], [79, 2], [78, 1], [86, 3], [86, 1], [6, 0], [6, 2], [17, 0], [17, 2], [21, 0], [21, 2], [22, 0], [22, 1], [25, 0], [25, 1], [28, 0], [28, 1], [30, 0], [30, 2], [31, 0], [31, 1], [32, 0], [32, 1], [35, 0], [35, 2], [36, 0], [36, 1], [37, 0], [37, 1], [40, 0], [40, 2], [41, 0], [41, 1], [42, 0], [42, 1], [46, 0], [46, 1], [49, 0], [49, 2], [50, 0], [50, 1], [52, 0], [52, 2], [53, 0], [53, 1], [57, 0], [57, 2], [58, 0], [58, 1], [61, 0], [61, 2], [62, 0], [62, 1], [66, 0], [66, 2], [67, 0], [67, 1], [70, 1], [70, 2], [76, 1], [76, 2]],
        performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$) {

            var $0 = $$.length - 1;
            switch (yystate) {
                case 1:
                    return $$[$0 - 1];
                    break;
                case 2:
                    this.$ = yy.prepareProgram($$[$0]);
                    break;
                case 3:
                    this.$ = $$[$0];
                    break;
                case 4:
                    this.$ = $$[$0];
                    break;
                caINDX( 	 ì*Q          (   P  Ë       ⁄⁄⁄                Æ    h X     √´    *†PØef⁄#`Øef⁄#`Øef⁄¥UØef⁄ `      vZ              D I A G N O ~ 1 . T S ≥    X H     √´    Çï∂ef⁄hªñ∂ef⁄hªñ∂ef⁄O,ã'nf⁄                       d n s /Æ    h R     √´    ;JgØef⁄ØI≤ef⁄ØI≤ef⁄UÜ≤ef⁄ Ä      	z              d n s . d . t s       /Æ    h T     √´    ;JgØef⁄ØI≤ef⁄ØI≤ef⁄UÜ≤ef⁄ Ä      	z              	D N S D ~ 1 . T S     ZÆ    p `     √´    |O≤ef⁄≠jV≤ef⁄≠jV≤ef ÕmP≤ef⁄        m              d o m - e v e n t s . d . t s ZÆ    h X     √´    |O≤ef⁄≠jV≤ef⁄≠jV≤ef⁄ÕmP≤ef⁄        m              D O M - E V ~ 1 . T S vÆ    h X     √´    ∑vi≤ef⁄ÿfÉ≤ef⁄ÿfÉ≤ef⁄¬…y≤ef⁄        å              d o m a i n . d . t s vÆ    h X     √´    ∑vi≤ef⁄ÿfÉ≤ef⁄ÿfÉ≤ef⁄¬…y≤ef⁄        å              D O M A I N ~ 1 . T S õÆ    h X     √´    ü4î≤ef⁄
±ø≤ef⁄
±ø≤ef⁄‹bø≤ef⁄ †      ü              e v e n t s . d . t s õÆ    h X     √´    ü4î≤ef 
±ø≤ef⁄
±ø≤ef⁄‹bø≤ef⁄ †      ü              E V E N T S ~ 1 . T S 9≥    X F     √´    Éô∂ef⁄„€ö∂ef⁄„€ö∂ef⁄O,ã'nf⁄                       f s . øÆ    ` P     √´    √»¬≤ef⁄E≥ef⁄E≥ef⁄F›≥ef⁄ ‡     	€             f s . d . t s øÆ    h R     √´    √»¬≤ef⁄E≥ef⁄E≥ef⁄F›≥ef⁄ ‡     	€             F S D ~ 1 . T S       4Ø    p Z     √´     
≥ef⁄Ú˚≥ef⁄Ú˚≥ef⁄’≠≥ef⁄ @      ‹7              g l o b a l s . d . t s       PØ    x h     √´    ‡6≥ef⁄¨≥ef ¨≥ef⁄¨≥ef⁄(       '               g l o b a l s . g l o b a l . d . t s 4Ø    h X     √´     
≥ef⁄Ú˚≥ef⁄Ú˚≥ef⁄’≠≥ef⁄ @      ‹7              G L O B A L ~ 1 . T S PØ    h X     √´    ‡6≥ef⁄¨≥ef⁄¨≥ef⁄¨≥ef⁄(       '               G L O B A L ~ 2 . T S `Ø    h T     √´    ò|≥ef⁄≈Ï≥ef⁄≈Ï≥ef⁄Œ˛≥ef⁄ P     ,I             	h t t p . d . t s     îØ    h V     √´    Â≥ef⁄Òô>≥ef⁄Òô>≥ef⁄Òô>≥ef⁄ –     l»             
h t t p 2 . d . t s   îØ    h X    √´    Â≥ef⁄Òô>≥ef⁄Òô>≥ef⁄Òô>≥ef⁄ –     l»             H T T P 2 D ~ 1 . T S               p s . d . t s   ﬁØ    h X     √´    }“?≥ef⁄3ŒA≥ef⁄3ŒA≥ef⁄YÅA≥ef⁄ p      ;a              H T T P S D ~ 1 . T S  ∞   	 h V     √´    2|C≥ef⁄6D≥ef⁄6D≥ef⁄I C≥ef⁄       ß              
i n d e x . d . t s    ∞   	 h X     √´    2|C≥ef⁄6D≥ef⁄6D≥ef⁄I C≥ef⁄       ß              I N D E X D ~ 1 . T S ∞   	 p ^     √´    ©PE≥ef⁄iìŸµef⁄iìŸµef⁄elŸµef⁄      ≤È            i n s p e c t o r . d . t s   ∞   	 h X     √´    ©PE≥ef⁄iìŸµef⁄iìŸµef⁄elŸµef⁄      ≤È             I N S P E C ~ 1 . T S h∞    h X     √´    ‡§⁄µef⁄]›€µef⁄]›€µef⁄Kè€µef⁄ @      ◊5              m o d u l e . d . t s h∞    h X     √´    ‡§⁄µef⁄]›€µef⁄]›€µef⁄Kè€µef⁄ @      ◊5              M O D U L E ~ 1 . T S Ä∞    h R     √´    π†‹µef⁄U'ﬁµef⁄U'ﬁµef⁄U'ﬁµef⁄ ∞      ©              n e t . d . t s       Ä∞    h T     √´    π†‹µef⁄U'ﬁµef⁄U'ﬁµef⁄U'ﬁµef⁄ ∞     ©              	N E T D ~ 1 . T S     §∞   	 ` P     √´    π8ﬂµef⁄"¸ﬂµef⁄"¸ﬂµef⁄’ﬂµef⁄ P      ôF              o s . d . t s §∞   	 h R     √´    π8ﬂµef⁄"¸ﬂµef⁄"¸ﬂµef⁄’ﬂµef⁄ P      ôF              O S D ~ 1 . T S       æ∞    h T     √´    î4·µef⁄ªÇ·µef⁄ªÇ·µef⁄®[·µef⁄        G              	p a t h . d . t s     æ∞    h V     √´    î4·µef⁄ªÇ·µef⁄ªÇ·µef⁄®[·µef⁄        G              
P A T H D ~ 1 . T S   —∞   	 p `     √´    A‚‚µef⁄Ôh‰µef⁄Ôh‰µef⁄‡A‰µef⁄ `     º_              p e r f _ h o o k s . d . t s —∞   	 h X     √´    A‚‚µef⁄Ôh‰µef⁄Ôh‰µef⁄‡A‰µef⁄ `      º_              P E R F _ H ~ 1 . T S Ú∞    p Z     √´    r°Âµef⁄ÚSÓµef⁄ÚSÓµef⁄È,Óµef⁄ 0     µ)             p r o c e s s . d . t s       Ú∞    h X     √´    r°Âµef⁄ÚSÓµef⁄ÚSÓµef⁄È,Óµef⁄ 0     µ)             P R O C E S ~ 1 . T S ±    p \     √´    =Ôµef⁄=Ôµef⁄=Ôµef⁄=Ôµef⁄                        p u n y c o d e . d . t s                                  'use strict';

module.exports = function ctype_punct(text) {
  // eslint-disable-line camelcase
  //  discuss at: https://locutus.io/php/ctype_punct/
  // original by: Brett Zamir (https://brett-zamir.me)
  //   example 1: ctype_punct('!?')
  //   returns 1: true

  var setlocale = require('../strings/setlocale');
  if (typeof text !== 'string') {
    return false;
  }
  // ensure setup of localization variables takes place
  setlocale('LC_ALL', 0);

  var $global = typeof window !== 'undefined' ? window : global;
  $global.$locutus = $global.$locutus || {};
  var $locutus = $global.$locutus;
  var p = $locutus.php;

  return text.search(p.locales[p.localeCategories.LC_CTYPE].LC_CTYPE.pu) !== -1;
};
//# sourceMappingURL=ctype_punct.js.map                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    tionId","ConnectorDefinitionVersionId"]},"output":{"type":"structure","members":{"Arn":{},"CreationTimestamp":{},"Definition":{"shape":"S7"},"Id":{},"NextToken":{},"Version":{}}}},"GetCoreDefinition":{"http":{"method":"GET","requestUri":"/greengrass/definition/cores/{CoreDefinitionId}","responseCode":200},"input":{"type":"structure","members":{"CoreDefinitionId":{"location":"uri","locationName":"CoreDefinitionId"}},"required":["CoreDefinitionId"]},"output":{"type":"structure","members":{"Arn":{},"CreationTimestamp":{},"Id":{},"LastUpdatedTimestamp":{},"LatestVersion":{},"LatestVersionArn":{},"Name":{},"tags":{"shape":"Sb"}}}},"GetCoreDefinitionVersion":{"http":{"method":"GET","requestUri":"/greengrass/definition/cores/{CoreDefinitionId}/versions/{CoreDefinitionVersionId}","responseCode":200},"input":{"type":"structure","members":{"CoreDefinitionId":{"location":"uri","locationName":"CoreDefinitionId"},"CoreDefinitionVersionId":{"location":"uri","locationName":"CoreDefinitionVersionId"}},"required":["CoreDefinitionId","CoreDefinitionVersionId"]},"output":{"type":"structure","members":{"Arn":{},"CreationTimestamp":{},"Definition":{"shape":"Sg"},"Id":{},"NextToken":{},"Version":{}}}},"GetDeploymentStatus":{"http":{"method":"GET","requestUri":"/greengrass/groups/{GroupId}/deployments/{DeploymentId}/status","responseCode":200},"input":{"type":"structure","members":{"DeploymentId":{"location":"uri","locationName":"DeploymentId"},"GroupId":{"location":"uri","locationName":"GroupId"}},"required":["GroupId","DeploymentId"]},"output":{"type":"structure","members":{"DeploymentStatus":{},"DeploymentType":{},"ErrorDetails":{"shape":"S3i"},"ErrorMessage":{},"UpdatedAt":{}}}},"GetDeviceDefinition":{"http":{"method":"GET","requestUri":"/greengrass/definition/devices/{DeviceDefinitionId}","responseCode":200},"input":{"type":"structure","members":{"DeviceDefinitionId":{"location":"uri","locationName":"DeviceDefinitionId"}},"required":["DeviceDefinitionId"]},"output":{"type":"structure","members":{"Arn":{},"CreationTimestamp":{},"Id":{},"LastUpdatedTimestamp":{},"LatestVersion":{},"LatestVersionArn":{},"Name":{},"tags":{"shape":"Sb"}}}},"GetDeviceDefinitionVersion":{"http":{"method":"GET","requestUri":"/greengrass/definition/devices/{DeviceDefinitionId}/versions/{DeviceDefinitionVersionId}","responseCode":200},"input":{"type":"structure","members":{"DeviceDefinitionId":{"location":"uri","locationName":"DeviceDefinitionId"},"DeviceDefinitionVersionId":{"location":"uri","locationName":"DeviceDefinitionVersionId"},"NextToken":{"location":"querystring","locationName":"NextToken"}},"required":["DeviceDefinitionVersionId","DeviceDefinitionId"]},"output":{"type":"structure","members":{"Arn":{},"CreationTimestamp":{},"Definition":{"shape":"Sr"},"Id":{},"NextToken":{},"Version":{}}}},"GetFunctionDefinition":{"http":{"method":"GET","requestUri":"/greengrass/definition/functions/{FunctionDefinitionId}","responseCode":200},"input":{"type":"structure","members":{"FunctionDefinitionId":{"location":"uri","locationName":"FunctionDefinitionId"}},"required":["FunctionDefinitionId"]},"output":{"type":"structure","members":{"Arn":{},"CreationTimestamp":{},"Id":{},"LastUpdatedTimestamp":{},"LatestVersion":{},"LatestVersionArn":{},"Name":{},"tags":{"shape":"Sb"}}}},"GetFunctionDefinitionVersion":{"http":{"method":"GET","requestUri":"/greengrass/definition/functions/{FunctionDefinitionId}/versions/{FunctionDefinitionVersionId}","responseCode":200},"input":{"type":"structure","members":{"FunctionDefinitionId":{"location":"uri","locationName":"FunctionDefinitionId"},"FunctionDefinitionVersionId":{"location":"uri","locationName":"FunctionDefinitionVersionId"},"NextToken":{"location":"querystring","locationName":"NextToken"}},"required":["FunctionDefinitionId","FunctionDefinitionVersionId"]},"output":{"type":"structure","members":{"Arn":{},"CreationTimestamp":{},"Definition":{"shape":"Sy"},"Id":{},"NextToken":{},"Version":{}}}},"GetGroup":{"http":{"method":"GET","requestUri":"/greengrass/groups/{GroupId}","responseCode":200},"input":{"type":"structure","members":{"GroupId":{"location":"uri","locationName":"GroupId"}},"required":["GroupId"]},"output":{"type":"structure","members":{"Arn":{},"CreationTimestamp":{},"Id":{},"LastUpdatedTimestamp":{},"LatestVersion":{},"LatestVersionArn":{},"Name":{},"tags":{"shape":"Sb"}}}},"GetGroupCertificateAuthority":{"http":{"method":"GET","requestUri":"/greengrass/groups/{GroupId}/certificateauthorities/{CertificateAuthorityId}","responseCode":200},"input":{"type":"structure","members":{"CertificateAuthorityId":{"location":"uri","locationName":"CertificateAuthorityId"},"GroupId":{"location":"uri","locationName":"GroupId"}},"required":["CertificateAuthorityId","GroupId"]},"output":{"type":"structure","members":{"GroupCertificateAuthorityArn":{},"GroupCertificateAuthorityId":{},"PemEncodedCertificate":{}}}},"GetGroupCertificateConfiguration":{"http":{"method":"GET","requestUri":"/greengrass/groups/{GroupId}/certificateauthorities/configuration/expiry","responseCode":200},"input":{"type":"structure","members":{"GroupId":{"location":"uri","locationName":"GroupId"}},"required":["GroupId"]},"output":{"type":"structure","members":{"CertificateAuthorityExpiryInMilliseconds":{},"CertificateExpiryInMilliseconds":{},"GroupId":{}}}},"GetGroupVersion":{"http":{"method":"GET","requestUri":"/greengrass/groups/{GroupId}/versions/{GroupVersionId}","responseCode":200},"input":{"type":"structure","members":{"GroupId":{"location":"uri","locationName":"GroupId"},"GroupVersionId":{"location":"uri","locationName":"GroupVersionId"}},"required":["GroupVersionId","GroupId"]},"output":{"type":"structure","members":{"Arn":{},"CreationTimestamp":{},"Definition":{"shape":"S1h"},"Id":{},"Version":{}}}},"GetLoggerDefinition":{"http":{"method":"GET","requestUri":"/greengrass/definition/loggers/{LoggerDefinitionId}","responseCode":200},"input":{"type":"structure","members":{"LoggerDefinitionId":{"location":"uri","locationName":"LoggerDefinitionId"}},"required":["LoggerDefinitionId"]},"output":{"type":"structure","members":{"Arn":{},"CreationTimestamp":{},"Id":{},"LastUpdatedTimestamp":{},"LatestVersion":{},"LatestVersionArn":{},"Name":{},"tags":{"shape":"Sb"}}}},"GetLoggerDefinitionVersion":{"http":{"method":"GET","requestUri":"/greengrass/definition/loggers/{LoggerDefinitionId}/versions/{LoggerDefinitionVersionId}","responseCode":200},"input":{"type":"structure","members":{"LoggerDefinitionId":{"location":"uri","locationName":"LoggerDefinitionId"},"LoggerDefinitionVersionId":{"location":"uri","locationName":"LoggerDefinitionVersionId"},"NextToken":{"location":"querystring","locationName":"NextToken"}},"required":["LoggerDefinitionVersionId","LoggerDefinitionId"]},"output":{"type":"structure","members":{"Arn":{},"CreationTimestamp":{},"Definition":{"shape":"S1o"},"Id":{},"Version":{}}}},"GetResourceDefinition":{"http":{"method":"GET","requestUri":"/greengrass/definition/resources/{ResourceDefinitionId}","responseCode":200},"input":{"type":"structure","members":{"ResourceDefinitionId":{"location":"uri","locationName":"ResourceDefinitionId"}},"required":["ResourceDefinitionId"]},"output":{"type":"structure","members":{"Arn":{},"CreationTimestamp":{},"Id":{},"LastUpdatedTimestamp":{},"LatestVersion":{},"LatestVersionArn":{},"Name":{},"tags":{"shape":"Sb"}}}},"GetResourceDefinitionVersion":{"http":{"method":"GET","requestUri":"/greengrass/definition/resources/{ResourceDefinitionId}/versions/{ResourceDefinitionVersionId}","responseCode":200},"input":{"type":"structure","members":{"ResourceDefinitionId":{"location":"uri","locationName":"ResourceDefinitionId"},"ResourceDefinitionVersionId":{"location":"uri","locationName":"ResourceDefinitionVersionId"}},"required":["ResourceDefinitionVersionId","ResourceDefinitionId"]},"output":{"type":"structure","members":{"Arn":{},"CreationTimestamp":{},"Definition":{"shape":"S1y"},"Id":{},"Version":{}}}},"GetServiceRoleForAccount":{"http":{"method":"GET","requestUri":"/greengrass/servicerole","responseCode":200},"input":{"type":"structure","members":{}},"output":{"type":"structure","members":{"AssociatedAt":{},"RoleArn":{}}}},"GetSubscriptionDefinition":{"http":{"method":"GET","requestUri":"/greengrass/definition/subscriptions/{SubscriptionDefinitionId}","responseCode":200},"input":{"type":"structure","members":{"SubscriptionDefinitionId":{"location":"uri","locationName":"SubscriptionDefinitionId"}},"required":["SubscriptionDefinitionId"]},"output":{"type":"structure","members":{"Arn":{},"CreationTimestamp":{},"Id":{},"LastUpdatedTimestamp":{},"LatestVersion":{},"LatestVersionArn":{},"Name":{},"tags":{"shape":"Sb"}}}},"GetSubscriptionDefinitionVersion":{"http":{"method":"GET","requestUri":"/greengrass/definition/subscriptions/{SubscriptionDefinitionId}/versions/{SubscriptionDefinitionVersionId}","responseCode":200},"input":{"type":"structure","members":{"NextToken":{"location":"querystring","locationName":"NextToken"},"SubscriptionDefinitionId":{"location":"uri","locationName":"SubscriptionDefinitionId"},"SubscriptionDefinitionVersionId":{"location":"uri","locationName":"SubscriptionDefinitionVersionId"}},"required":["SubscriptionDefinitionId","SubscriptionDefinitionVersionId"]},"output":{"type":"structure","members":{"Arn":{},"CreationTimestamp":{},"Definition":{"shape":"S2m"},"Id":{},"NextToken":{},"Version":{}}}},"GetThingRuntimeConfiguration":{"http":{"method":"GET","requestUri":"/greengrass/things/{ThingName}/runtimeconfig","responseCode":200},"input":{"type":"structure","members":{"ThingName":{"location":"uri","locationName":"ThingName"}},"required":["ThingName"]},"output":{"type":"structure","members":{"RuntimeConfiguration":{"type":"structure","members":{"TelemetryConfiguration":{"type":"structure","members":{"ConfigurationSyncStatus":{},"Telemetry":{}},"required":["Telemetry"]}}}}}},"ListBulkDeploymentDetailedReports":{"http":{"method":"GET","requestUri":"/greengrass/bulk/deployments/{BulkDeploymentId}/detailed-reports","responseCode":200},"input":{"type":"structure","members":{"BulkDeploymentId":{"location":"uri","locationName":"BulkDeploymentId"},"MaxResults":{"location":"querystring","locationName":"MaxResults"},"NextToken":{"location":"querystring","locationName":"NextToken"}},"required":["BulkDeploymentId"]},"output":{"type":"structure","members":{"Deployments":{"type":"list","member":{"type":"structure","members":{"CreatedAt":{},"DeploymentArn":{},"DeploymentId":{},"DeploymentStatus":{},"DeploymentType":{},"ErrorDetails":{"shape":"S3i"},"ErrorMessage":{},"GroupArn":{}}}},"NextToken":{}}}},"ListBulkDeployments":{"http":{"method":"GET","requestUri":"/greengrass/bulk/deployments","responseCode":200},"input":{"type":"structure","members":{"MaxResults":{"location":"querystring","locationName":"MaxResults"},"NextToken":{"location":"querystring","locationName":"NextToken"}}},"output":{"type":"structure","members":{"BulkDeployments":{"type":"list","member":{"type":"structure","members":{"BulkDeploymentArn":{},"BulkDeploymentId":{},"CreatedAt":{}}}},"NextToken":{}}}},"ListConnectorDefinitionVersions":{"http":{"method":"GET","requestUri":"/greengrass/definition/connectors/{ConnectorDefinitionId}/versions","responseCode":200},"input":{"type":"structure","members":{"ConnectorDefinitionId":{"location":"uri","locationName":"ConnectorDefinitionId"},"MaxResults":{"location":"querystring","locationName":"MaxResults"},"NextToken":{"location":"querystring","locationName":"NextToken"}},"required":["ConnectorDefinitionId"]},"output":{"type":"structure","members":{"NextToken":{},"Versions":{"shape":"S58"}}}},"ListConnectorDefinitions":{"http":{"method":"GET","requestUri":"/greengrass/definition/connectors","responseCode":200},"input":{"type":"structure","members":{"MaxResults":{"location":"querystring","locationName":"MaxResults"},"NextToken":{"location":"querystring","locationName":"NextToken"}}},"output":{"type":"structure","members":{"Definitions":{"shape":"S5c"},"NextToken":{}}}},"ListCoreDefinitionVersions":{"http":{"method":"GET","requestUri":"/greengrass/definition/cores/{CoreDefinitionId}/versions","responseCode":200},"input":{"type":"structure","members":{"CoreDefinitionId":{"location":"uri","locationName":"CoreDefinitionId"},"MaxResults":{"location":"querystring","locationName":"MaxResults"},"NextToken":{"location":"querystring","locationName":"NextToken"}},"required":["CoreDefinitionId"]},"output":{"type":"structure","members":{"NextToken":{},"Versions":{"shape":"S58"}}}},"ListCoreDefinitions":{"http":{"method":"GET","requestUri":"/greengrass/definition/cores","responseCode":200},"input":{"type":"structure","members":{"MaxResults":{"location":"querystring","locationName":"MaxResults"},"NextToken":{"location":"querystring","locationName":"NextToken"}}},"output":{"type":"structure","members":{"Definitions":{"shape":"S5c"},"NextToken":{}}}},"ListDeployments":{"http":{"method":"GET","requestUri":"/greengrass/groups/{GroupId}/deployments","responseCode":200},"input":{"type":"structure","members":{"GroupId":{"location":"uri","locationName":"GroupId"},"MaxResults":{"location":"querystring","locationName":"MaxResults"},"NextToken":{"location":"querystring","locationName":"NextToken"}},"required":["GroupId"]},"output":{"type":"structure","members":{"Deployments":{"type":"list","member":{"type":"structure","members":{"CreatedAt":{},"DeploymentArn":{},"DeploymentId":{},"DeploymentType":{},"GroupArn":{}}}},"NextToken":{}}}},"ListDeviceDefinitionVersions":{"http":{"method":"GET","requestUri":"/greengrass/definition/devices/{DeviceDefinitionId}/versions","responseCode":200},"input":{"type":"structure","members":{"DeviceDefinitionId":{"location":"uri","locationName":"DeviceDefinitionId"},"MaxResults":{"location":"querystring","locationName":"MaxResults"},"NextToken":{"location":"querystring","locationName":"NextToken"}},"required":["DeviceDefinitionId"]},"output":{"type":"structure","members":{"NextToken":{},"Versions":{"shape":"S58"}}}},"ListDeviceDefinitions":{"http":{"method":"GET","requestUri":"/greengrass/definition/devices","responseCode":200},"input":{"type":"structure","members":{"MaxResults":{"location":"querystring","locationName":"MaxResults"},"NextToken":{"location":"querystring","locationName":"NextToken"}}},"output":{"type":"structure","members":{"Definitions":{"shape":"S5c"},"NextToken":{}}}},"ListFunctionDefinitionVersions":{"http":{"method":"GET","requestUri":"/greengrass/definition/functions/{FunctionDefinitionId}/versions","responseCode":200},"input":{"type":"structure","members":{"FunctionDefinitionId":{"location":"uri","locationName":"FunctionDefinitionId"},"MaxResults":{"location":"querystring","locationName":"MaxResults"},"NextToken":{"location":"querystring","locationName":"NextToken"}},"required":["FunctionDefinitionId"]},"output":{"type":"structure","members":{"NextToken":{},"Versions":{"shape":"S58"}}}},"ListFunctionDefinitions":{"http":{"method":"GET","requestUri":"/greengrass/definition/functions","responseCode":200},"input":{"type":"structure","members":{"MaxResults":{"location":"querystring","locationName":"MaxResults"},"NextToken":{"location":"querystring","locationName":"NextToken"}}},"output":{"type":"structure","members":{"Definitions":{"shape":"S5c"},"NextToken":{}}}},"ListGroupCertificateAuthorities":{"http":{"method":"GET","requestUri":"/greengrass/groups/{GroupId}/certificateauthorities","responseCode":200},"input":{"type":"structure","members":{"GroupId":{"location":"uri","locationName":"GroupId"}},"required":["GroupId"]},"output":{"type":"structure","members":{"GroupCertificateAuthorities":{"type":"list","member":{"type":"structure","members":{"GroupCertificateAuthorityArn":{},"GroupCertificateAuthorityId":{}}}}}}},"ListGroupVersions":{"http":{"method":"GET","requestUri":"/greengrass/groups/{GroupId}/versions","responseCode":200},"input":{"type":"structure","members":{"GroupId":{"location":"uri","locationName":"GroupId"},"MaxResults":{"location":"querystring","locationName":"MaxResults"},"NextToken":{"location":"querystring","locationName":"NextToken"}},"required":["GroupId"]},"output":{"type":"structure","members":{"NextToken":{},"Versions":{"shape":"S58"}}}},"ListGroups":{"http":{"method":"GET","requestUri":"/greengrass/groups","responseCode":200},"input":{"type":"structure","members":{"MaxResults":{"location":"querystring","locationName":"MaxResults"},"NextToken":{"location":"querystring","locationName":"NextToken"}}},"output":{"type":"structure","members":{"Groups":{"type":"list","member":{"type":"structure","members":{"Arn":{},"CreationTimestamp":{},"Id":{},"LastUpdatedTimestamp":{},"LatestVersion":{},"LatestVersionArn":{},"Name":{}}}},"NextToken":{}}}},"ListLoggerDefinitionVersions":{"http":{"method":"GET","requestUri":"/greengrass/definition/loggers/{LoggerDefinitionId}/versions","responseCode":200},"input":{"type":"structure","members":{"LoggerDefinitionId":{"location":"uri","locationName":"LoggerDefinitionId"},"MaxResults":{"location":"querystring","locationName":"MaxResults"},"NextToken":{"location":"querystring","locationName":"NextToken"}},"required":["LoggerDefinitionId"]},"output":{"type":"structure","members":{"NextToken":{},"Versions":{"shape":"S58"}}}},"ListLoggerDefinitions":{"http":{"method":"GET","requestUri":"/greengrass/definition/loggers","responseCode":200},"input":{"type":"structure","members":{"MaxResults":{"location":"querystring","locationName":"MaxResults"},"NextToken":{"location":"querystring","locationName":"NextToken"}}},"output":{"type":"structure","members":{"Definitions":{"shape":"S5c"},"NextToken":{}}}},"ListResourceDefinitionVersions":{"http":{"method":"GET","requestUri":"/greengrass/definition/resources/{ResourceDefinitionId}/versions","responseCode":200},"input":{"type":"structure","members":{"MaxResults":{"location":"querystring","locationName":"MaxResults"},"NextToken":{"location":"querystring","locationName":"NextToken"},"ResourceDefinitionId":{"location":"uri","locationName":"ResourceDefinitionId"}},"required":["ResourceDefinitionId"]},"output":{"type":"structure","members":{"NextToken":{},"Versions":{"shape":"S58"}}}},"ListResourceDefinitions":{"http":{"method":"GET","requestUri":"/greengrass/definition/resources","responseCode":200},"input":{"type":"structure","members":{"MaxResults":{"location":"querystring","locationName":"MaxResults"},"NextToken":{"location":"querystring","locationName":"NextToken"}}},"output":{"type":"structure","members":{"Definitions":{"shape":"S5c"},"NextToken":{}}}},"ListSubscriptionDefinitionVersions":{"http":{"method":"GET","requestUri":"/greengrass/definition/subscriptions/{SubscriptionDefinitionId}/versions","responseCode":200},"input":{"type":"structure","members":{"MaxResults":{"location":"querystring","locationName":"MaxResults"},"NextToken":{"location":"querystring","locationName":"NextToken"},"SubscriptionDefinitionId":{"location":"uri","locationName":"SubscriptionDefinitionId"}},"required":["SubscriptionDefinitionId"]},"output":{"type":"structure","members":{"NextToken":{},"Versions":{"shape":"S58"}}}},"ListSubscriptionDefinitions":{"http":{"method":"GET","requestUri":"/greengrass/definition/subscriptions","responseCode":200},"input":{"type":"structure","members":{"MaxResults":{"location":"querystring","locationName":"MaxResults"},"NextToken":{"location":"querystring","locationName":"NextToken"}}},"output":{"type":"structure","members":{"Definitions":{"shape":"S5c"},"NextToken":{}}}},"ListTagsForResource":{"http":{"method":"GET","requestUri":"/tags/{resource-arn}","responseCode":200},"input":{"type":"structure","members":{"ResourceArn":{"location":"uri","locationName":"resource-arn"}},"required":["ResourceArn"]},"output":{"type":"structure","members":{"tags":{"shape":"Sb"}}}},"ResetDeployments":{"http":{"requestUri":"/greengrass/groups/{GroupId}/deployments/$reset","responseCode":200},"input":{"type":"structure","members":{"AmznClientToken":{"location":"header","locationName":"X-Amzn-Client-Token"},"Force":{"type":"boolean"},"GroupId":{"location":"uri","locationName":"GroupId"}},"required":["GroupId"]},"output":{"type":"structure","members":{"DeploymentArn":{},"DeploymentId":{}}}},"StartBulkDeployment":{"http":{"requestUri":"/greengrass/bulk/deployments","responseCode":200},"input":{"type":"structure","members":{"AmznClientToken":{"location":"header","locationName":"X-Amzn-Client-Token"},"ExecutionRoleArn":{},"InputFileUri":{},"tags":{"shape":"Sb"}},"required":["ExecutionRoleArn","InputFileUri"]},"output":{"type":"structure","members":{"BulkDeploymentArn":{},"BulkDeploymentId":{}}}},"StopBulkDeployment":{"http":{"method":"PUT","requestUri":"/greengrass/bulk/deployments/{BulkDeploymentId}/$stop","responseCode":200},"input":{"type":"structure","members":{"BulkDeploymentId":{"location":"uri","locationName":"BulkDeploymentId"}},"required":["BulkDeploymentId"]},"output":{"type":"structure","members":{}}},"TagResource":{"http":{"requestUri":"/tags/{resource-arn}","responseCode":204},"input":{"type":"structure","members":{"ResourceArn":{"location":"uri","locationName":"resource-arn"},"tags":{"shape":"Sb"}},"required":["ResourceArn"]}},"UntagResource":{"http":{"method":"DELETE","requestUri":"/tags/{resource-arn}","responseCode":204},"input":{"type":"structure","members":{"ResourceArn":{"location":"uri","locationName":"resource-arn"},"TagKeys":{"shape":"S29","location":"querystring","locationName":"tagKeys"}},"required":["TagKeys","ResourceArn"]}},"UpdateConnectivityInfo":{"http":{"method":"PUT","requestUri":"/greengrass/things/{ThingName}/connectivityInfo","responseCode":200},"input":{"type":"structure","members":{"ConnectivityInfo":{"shape":"S3m"},"ThingName":{"location":"uri","locationName":"ThingName"}},"required":["ThingName"]},"output":{"type":"structure","members":{"Message":{"locationName":"message"},"Version":{}}}},"UpdateConnectorDefinition":{"http":{"method":"PUT","requestUri":"/greengrass/definition/connectors/{ConnectorDefinitionId}","responseCode":200},"input":{"type":"structure","members":{"ConnectorDefinitionId":{"location":"uri","locationName":"ConnectorDefinitionId"},"Name":{}},"required":["ConnectorDefinitionId"]},"output":{"type":"structure","members":{}}},"UpdateCoreDefinition":{"http":{"method":"PUT","requestUri":"/greengrass/definition/cores/{CoreDefinitionId}","responseCode":200},"input":{"type":"structure","members":{"CoreDefinitionId":{"location":"uri","locationName":"CoreDefinitionId"},"Name":{}},"required":["CoreDefinitionId"]},"output":{"type":"structure","members":{}}},"UpdateDeviceDefinition":{"http":{"method":"PUT","requestUri":"/greengrass/definition/devices/{DeviceDefinitionId}","responseCode":200},"input":{"type":"structure","members":{"DeviceDefinitionId":{"location":"uri","locationName":"DeviceDefinitionId"},"Name":{}},"required":["DeviceDefinitionId"]},"output":{"type":"structure","members":{}}},"UpdateFunctionDefinition":{"http":{"method":"PUT","requestUri":"/greengrass/definition/functions/{FunctionDefinitionId}","responseCode":200},"input":{"type":"structure","members":{"FunctionDefinitionId":{"location":"uri","locationName":"FunctionDefinitionId"},"Name":{}},"required":["FunctionDefinitionId"]},"output":{"type":"structure","members":{}}},"UpdateGroup":{"http":{"method":"PUT","requestUri":"/greengrass/groups/{GroupId}","responseCode":200},"input":{"type":"structure","members":{"GroupId":{"location":"uri","locationName":"GroupId"},"Name":{}},"required":["GroupId"]},"output":{"type":"structure","members":{}}},"UpdateGroupCertificateConfiguration":{"http":{"method":"PUT","requestUri":"/greengrass/groups/{GroupId}/certificateauthorities/configuration/expiry","responseCode":200},"input":{"type":"structure","members":{"CertificateExpiryInMilliseconds":{},"GroupId":{"location":"uri","locationName":"GroupId"}},"required":["GroupId"]},"output":{"type":"structure","members":{"CertificateAuthorityExpiryInMilliseconds":{},"CertificateExpiryInMilliseconds":{},"GroupId":{}}}},"UpdateLoggerDefinition":{"http":{"method":"PUT","requestUri":"/greengrass/definition/loggers/{LoggerDefinitionId}","responseCode":200},"input":{"type":"structure","members":{"LoggerDefinitionId":{"location":"uri","locationName":"LoggerDefinitionId"},"Name":{}},"required":["LoggerDefinitionId"]},"output":{"type":"structure","members":{}}},"UpdateResourceDefinition":{"http":{"method":"PUT","requestUri":"/greengrass/definition/resources/{ResourceDefinitionId}","responseCode":200},"input":{"type":"structure","members":{"Name":{},"ResourceDefinitionId":{"location":"uri","locationName":"ResourceDefinitionId"}},"required":["ResourceDefinitionId"]},"output":{"type":"structure","members":{}}},"UpdateSubscriptionDefinition":{"http":{"method":"PUT","requestUri":"/greengrass/definition/subscriptions/{SubscriptionDefinitionId}","responseCode":200},"input":{"type":"structure","members":{"Name":{},"SubscriptionDefinitionId":{"location":"uri","locationName":"SubscriptionDefinitionId"}},"required":["SubscriptionDefinitionId"]},"output":{"type":"structure","members":{}}},"UpdateThingRuntimeConfiguration":{"http":{"method":"PUT","requestUri":"/greengrass/things/{ThingName}/runtimeconfig","responseCode":200},"input":{"type":"structure","members":{"TelemetryConfiguration":{"type":"structure","members":{"Telemetry":{}},"required":["Telemetry"]},"ThingName":{"location":"uri","locationName":"ThingName"}},"required":["ThingName"]},"output":{"type":"structure","members":{}}}},"shapes":{"S7":{"type":"structure","members":{"Connectors":{"shape":"S8"}}},"S8":{"type":"list","member":{"type":"structure","members":{"ConnectorArn":{},"Id":{},"Parameters":{"shape":"Sa"}},"required":["ConnectorArn","Id"]}},"Sa":{"type":"map","key":{},"value":{}},"Sb":{"type":"map","key":{},"value":{}},"Sg":{"type":"structure","members":{"Cores":{"shape":"Sh"}}},"Sh":{"type":"list","member":{"type":"structure","members":{"CertificateArn":{},"Id":{},"SyncShadow":{"type":"boolean"},"ThingArn":{}},"required":["ThingArn","Id","CertificateArn"]}},"Sr":{"type":"structure","members":{"Devices":{"shape":"Ss"}}},"Ss":{"type":"list","member":{"type":"structure","members":{"CertificateArn":{},"Id":{},"SyncShadow":{"type":"boolean"},"ThingArn":{}},"required":["ThingArn","Id","CertificateArn"]}},"Sy":{"type":"structure","members":{"DefaultConfig":{"shape":"Sz"},"Functions":{"shape":"S14"}}},"Sz":{"type":"structure","members":{"Execution":{"type":"structure","members":{"IsolationMode":{},"RunAs":{"shape":"S12"}}}}},"S12":{"type":"structure","members":{"Gid":{"type":"integer"},"Uid":{"type":"integer"}}},"S14":{"type":"list","member":{"type":"structure","members":{"FunctionArn":{},"FunctionConfiguration":{"type":"structure","members":{"EncodingType":{},"Environment":{"type":"structure","members":{"AccessSysfs":{"type":"boolean"},"Execution":{"type":"structure","members":{"IsolationMode":{},"RunAs":{"shape":"S12"}}},"ResourceAccessPolicies":{"type":"list","member":{"type":"structure","members":{"Permission":{},"ResourceId":{}},"required":["ResourceId"]}},"Variables":{"shape":"Sa"}}},"ExecArgs":{},"Executable":{},"MemorySize":{"type":"integer"},"Pinned":{"type":"boolean"},"Timeout":{"type":"integer"},"FunctionRuntimeOverride":{}}},"Id":{}},"required":["Id"]}},"S1h":{"type":"structure","members":{"ConnectorDefinitionVersionArn":{},"CoreDefinitionVersionArn":{},"DeviceDefinitionVersionArn":{},"FunctionDefinitionVersionArn":{},"LoggerDefinitionVersionArn":{},"ResourceDefinitionVersionArn":{},"SubscriptionDefinitionVersionArn":{}}},"S1o":{"type":"structure","members":{"Loggers":{"shape":"S1p"}}},"S1p":{"type":"list","member":{"type":"structure","members":{"Component":{},"Id":{},"Level":{},"Space":{"type":"integer"},"Type":{}},"required":["Type","Level","Id","Component"]}},"S1y":{"type":"structure","members":{"Resources":{"shape":"S1z"}}},"S1z":{"type":"list","member":{"type":"structure","members":{"Id":{},"Name":{},"ResourceDataContainer":{"type":"structure","members":{"LocalDeviceResourceData":{"type":"structure","members":{"GroupOwnerSetting":{"shape":"S23"},"SourcePath":{}}},"LocalVolumeResourceData":{"type":"structure","members":{"DestinationPath":{},"GroupOwnerSetting":{"shape":"S23"},"SourcePath":{}}},"S3MachineLearningModelResourceData":{"type":"structure","members":{"DestinationPath":{},"OwnerSetting":{"shape":"S26"},"S3Uri":{}}},"SageMakerMachineLearningModelResourceData":{"type":"structure","members":{"DestinationPath":{},"OwnerSetting":{"shape":"S26"},"SageMakerJobArn":{}}},"SecretsManagerSecretResourceData":{"type":"structure","members":{"ARN":{},"AdditionalStagingLabelsToDownload":{"shape":"S29"}}}}}},"required":["ResourceDataContainer","Id","Name"]}},"S23":{"type":"structure","members":{"AutoAddGroupOwner":{"type":"boolean"},"GroupOwner":{}}},"S26":{"type":"structure","members":{"GroupOwner":{},"GroupPermission":{}},"required":["GroupOwner","GroupPermission"]},"S29":{"type":"list","member":{}},"S2m":{"type":"structure","members":{"Subscriptions":{"shape":"S2n"}}},"S2n":{"type":"list","member":{"type":"structure","members":{"Id":{},"Source":{},"Subject":{},"Target":{}},"required":["Target","Id","Subject","Source"]}},"S3i":{"type":"list","member":{"type":"structure","members":{"DetailedErrorCode":{},"DetailedErrorMessage":{}}}},"S3m":{"type":"list","member":{"type":"structure","members":{"HostAddress":{},"Id":{},"Metadata":{},"PortNumber":{"type":"integer"}}}},"S58":{"type":"list","member":{"type":"structure","members":{"Arn":{},"CreationTimestamp":{},"Id":{},"Version":{}}}},"S5c":{"type":"list","member":{"type":"structure","members":{"Arn":{},"CreationTimestamp":{},"Id":{},"LastUpdatedTimestamp":{},"LatestVersion":{},"LatestVersionArn":{},"Name":{},"Tags":{"shape":"Sb","locationName":"tags"}}}}}}

/***/ }),
/* 543 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(2);
	var AWS = __webpack_require__(4);
	var Service = AWS.Service;
	var apiLoader = AWS.apiLoader;

	apiLoader.services['dax'] = {};
	AWS.DAX = Service.defineService('dax', ['2017-04-19']);
	Object.defineProperty(apiLoader.services['dax'], '2017-04-19', {
	  get: function get() {
	    var model = __webpack_require__(544);
	    model.paginators = __webpack_require__(545).pagination;
	    return model;
	  },
	  enumerable: true,
	  configurable: true
	});

	module.exports = AWS.DAX;


/***/ }),
/* 544 */
/***/ (function(module, exports) {

	module.exports = {"version":"2.0","metadata":{"apiVersion":"2017-04-19","endpointPrefix":"dax","jsonVersion":"1.1","protocol":"json","serviceAbbreviation":"Amazon DAX","serviceFullName":"Amazon DynamoDB Accelerator (DAX)","serviceId":"DAX","signatureVersion":"v4","targetPrefix":"AmazonDAXV3","uid":"dax-2017-04-19"},"operations":{"CreateCluster":{"input":{"type":"structure","required":["ClusterName","NodeType","ReplicationFactor","IamRoleArn"],"members":{"ClusterName":{},"NodeType":{},"Description":{},"ReplicationFactor":{"type":"integer"},"AvailabilityZones":{"shape":"S4"},"SubnetGroupName":{},"SecurityGroupIds":{"shape":"S5"},"PreferredMaintenanceWindow":{},"NotificationTopicArn":{},"IamRoleArn":{},"ParameterGroupName":{},"Tags":{"shape":"S6"},"SSESpecification":{"type":"structure","required":["Enabled"],"members":{"Enabled":{"type":"boolean"}}},"ClusterEndpointEncryptionType":{}}},"output":{"type":"structure","members":{"Cluster":{"shape":"Sc"}}}},"CreateParameterGroup":{"input":{"type":"structure","required":["ParameterGroupName"],"members":{"ParameterGroupName":{},"Description":{}}},"output":{"type":"structure","members":{"ParameterGroup":{"shape":"Sr"}}}},"CreateSubnetGroup":{"input":{"type":"structure","required":["SubnetGroupName","SubnetIds"],"members":{"SubnetGroupName":{},"Description":{},"SubnetIds":{"shape":"St"}}},"output":{"type":"structure","members":{"SubnetGroup":{"shape":"Sv"}}}},"DecreaseReplicationFactor":{"input":{"type":"structure","required":["ClusterName","NewReplicationFactor"],"members":{"ClusterName":{},"NewReplicationFactor":{"type":"integer"},"AvailabilityZones":{"shape":"S4"},"NodeIdsToRemove":{"shape":"Sf"}}},"output":{"type":"structure","members":{"Cluster":{"shape":"Sc"}}}},"DeleteCluster":{"input":{"type":"structure","required":["ClusterName"],"members":{"ClusterName":{}}},"output":{"type":"structure","members":{"Cluster":{"shape":"Sc"}}}},"DeleteParameterGroup":{"input":{"type":"structure","required":["ParameterGroupName"],"members":{"ParameterGroupName":{}}},"output":{"type":"structure","members":{"DeletionMessage":{}}}},"DeleteSubnetGroup":{"input":{"type":"structure","required":["SubnetGroupName"],"members":{"SubnetGroupName":{}}},"output":{"type":"structure","members":{"DeletionMessage":{}}}},"DescribeClusters":{"input":{"type":"structure","members":{"ClusterNames":{"type":"list","member":{}},"MaxResults":{"type":"integer"},"NextToken":{}}},"output":{"type":"structure","members":{"NextToken":{},"Clusters":{"type":"list","member":{"shape":"Sc"}}}}},"DescribeDefaultParameters":{"input":{"type":"structure","members":{"MaxResults":{"type":"integer"},"NextToken":{}}},"output":{"type":"structure","members":{"NextToken":{},"Parameters":{"shape":"S1c"}}}},"DescribeEvents":{"input":{"type":"structure","members":{"SourceName":{},"SourceType":{},"StartTime":{"type":"timestamp"},"EndTime":{"type":"timestamp"},"Duration":{"type":"integer"},"MaxResults":{"type":"integer"},"NextToken":{}}},"output":{"type":"structure","members":{"NextToken":{},"Events":{"type":"list","member":{"type":"structure","members":{"SourceName":{},"SourceType":{},"Message":{},"Date":{"type":"timestamp"}}}}}}},"DescribeParameterGroups":{"input":{"type":"structure","members":{"ParameterGroupNames":{"type":"list","member":{}},"MaxResults":{"type":"integer"},"NextToken":{}}},"output":{"type":"structure","members":{"NextToken":{},"ParameterGroups":{"type":"list","member":{"shape":"Sr"}}}}},"DescribeParameters":{"input":{"type":"structure","required":["ParameterGroupName"],"members":{"ParameterGroupName":{},"Source":{},"MaxResults":{"type":"integer"},"NextToken":{}}},"output":{"type":"structure","members":{"NextToken":{},"Parameters":{"shape":"S1c"}}}},"DescribeSubnetGroups":{"input":{"type":"structure","members":{"SubnetGroupNames":{"type":"list","member":{}},"MaxResults":{"type":"integer"},"NextToken":{}}},"output":{"type":"structure","members":{"NextToken":{},"SubnetGroups":{"type":"list","member":{"shape":"Sv"}}}}},"IncreaseReplicationFactor":{"input":{"type":"structure","required":["ClusterName","NewReplicationFactor"],"members":{"ClusterName":{},"NewReplicationFactor":{"type":"integer"},"AvailabilityZones":{"shape":"S4"}}},"output":{"type":"structure","members":{"Cluster":{"shape":"Sc"}}}},"ListTags":{"input":{"type":"structure","required":["ResourceName"],"members":{"ResourceName":{},"NextToken":{}}},"output":{"type":"structure","members":{"Tags":{"shape":"S6"},"NextToken":{}}}},"RebootNode":{"input":{"type":"structure","required":["ClusterName","NodeId"],"members":{"ClusterName":{},"NodeId":{}}},"output":{"type":"structure","members":{"Cluster":{"shape":"Sc"}}}},"TagResource":{"input":{"type":"structure","required":["ResourceName","Tags"],"members":{"ResourceName":{},"Tags":{"shape":"S6"}}},"output":{"type":"structure","members":{"Tags":{"shape":"S6"}}}},"UntagResource":{"input":{"type":"structure","required":["ResourceName","TagKeys"],"members":{"ResourceName":{},"TagKeys":{"type":"list","member":{}}}},"output":{"type":"structure","members":{"Tags":{"shape":"S6"}}}},"UpdateCluster":{"input":{"type":"structure","required":["ClusterName"],"members":{"ClusterName":{},"Description":{},"PreferredMaintenanceWindow":{},"NotificationTopicArn":{},"NotificationTopicStatus":{},"ParameterGroupName":{},"SecurityGroupIds":{"shape":"S5"}}},"output":{"type":"structure","members":{"Cluster":{"shape":"Sc"}}}},"UpdateParameterGroup":{"input":{"type":"structure","required":["ParameterGroupName","ParameterNameValues"],"members":{"ParameterGroupName":{},"ParameterNameValues":{"type":"list","member":{"type":"structure","members":{"ParameterName":{},"ParameterValue":{}}}}}},"output":{"type":"structure","members":{"ParameterGroup":{"shape":"Sr"}}}},"UpdateSubnetGroup":{"input":{"type":"structure","required":["SubnetGroupName"],"members":{"SubnetGroupName":{},"Description":{},"SubnetIds":{"shape":"St"}}},"output":{"type":"structure","members":{"SubnetGroup":{"shape":"Sv"}}}}},"shapes":{"S4":{"type":"list","member":{}},"S5":{"type":"list","member":{}},"S6":{"type":"list","member":{"type":"structure","members":{"Key":{},"Value":{}}}},"Sc":{"type":"structure","members":{"ClusterName":{},"Description":{},"ClusterArn":{},"TotalNodes":{"type":"integer"},"ActiveNodes":{"type":"integer"},"NodeType":{},"Status":{},"ClusterDiscoveryEndpoint":{"shape":"Se"},"NodeIdsToRemove":{"shape":"Sf"},"Nodes":{"type":"list","member":{"type":"structure","members":{"NodeId":{},"Endpoint":{"shape":"Se"},"NodeCreateTime":{"type":"timestamp"},"AvailabilityZone":{},"NodeStatus":{},"ParameterGroupStatus":{}}}},"PreferredMaintenanceWindow":{},"NotificationConfiguration":{"type":"structure","members":{"TopicArn":{},"TopicStatus":{}}},"SubnetGroup":{},"SecurityGroups":{"type":"list","member":{"type":"structure","members":{"SecurityGroupIdentifier":{},"Status":{}}}},"IamRoleArn":{},"ParameterGroup":{"type":"structure","members":{"ParameterGroupName":{},"ParameterApplyStatus":{},"NodeIdsToReboot":{"shape":"Sf"}}},"SSEDescription":{"type":"structure","members":{"Status":{}}},"ClusterEndpointEncryptionType":{}}},"Se":{"type":"structure","members":{"Address":{},"Port":{"type":"integer"},"URL":{}}},"Sf":{"type":"list","member":{}},"Sr":{"type":"structure","members":{"ParameterGroupName":{},"Description":{}}},"St":{"type":"list","member":{}},"Sv":{"type":"structure","members":{"SubnetGroupName":{},"Description":{},"VpcId":{},"Subnets":{"type":"list","member":{"type":"structure","members":{"SubnetIdentifier":{},"SubnetAvailabilityZone":{}}}}}},"S1c":{"type":"list","member":{"type":"structure","members":{"ParameterName":{},"ParameterType":{},"ParameterValue":{},"NodeTypeSpecificValues":{"type":"list","member":{"type":"structure","members":{"NodeType":{},"Value":{}}}},"Description":{},"Source":{},"DataType":{},"AllowedValues":{},"IsModifiable":{},"ChangeType":{}}}}}}

/***/ }),
/* 545 */
/***/ (function(module, exports) {

	module.exports = {"pagination":{}}

/***/ }),
/* 546 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(2);
	var AWS = __webpack_require__(4);
	var Service = AWS.Service;
	var apiLoader = AWS.apiLoader;

	apiLoader.services['migrationhub'] = {};
	AWS.MigrationHub = Service.defineService('migrationhub', ['2017-05-31']);
	Object.defineProperty(apiLoader.services['migrationhub'], '2017-05-31', {
	  get: function get() {
	    var model = __webpack_require__(547);
	    model.paginators = __webpack_require__(548).pagination;
	    return model;
	  },
	  enumerable: true,
	  configurable: true
	});

	module.exports = AWS.MigrationHub;


/***/ }),
/* 547 */
/***/ (function(module, exports) {

	module.exports = {"version":"2.0","metadata":{"apiVersion":"2017-05-31","endpointPrefix":"mgh","jsonVersion":"1.1","protocol":"json","serviceFullName":"AWS Migration Hub","serviceId":"Migration Hub","signatureVersion":"v4","targetPrefix":"AWSMigrationHub","uid":"AWSMigrationHub-2017-05-31"},"operations":{"AssociateCreatedArtifact":{"input":{"type":"structure","required":["ProgressUpdateStream","MigrationTaskName","CreatedArtifact"],"members":{"ProgressUpdateStream":{},"MigrationTaskName":{},"CreatedArtifact":{"shape":"S4"},"DryRun":{"type":"boolean"}}},"output":{"type":"structure","members":{}}},"AssociateDiscoveredResource":{"input":{"type":"structure","required":["ProgressUpdateStream","MigrationTaskName","DiscoveredResource"],"members":{"ProgressUpdateStream":{},"MigrationTaskName":{},"DiscoveredResource":{"shape":"Sa"},"DryRun":{"type":"boolean"}}},"output":{"type":"structure","members":{}}},"CreateProgressUpdateStream":{"input":{"type":"structure","required":["ProgressUpdateStreamName"],"members":{"ProgressUpdateStreamName":{},"DryRun":{"type":"boolean"}}},"output":{"type":"structure","members":{}}},"DeleteProgressUpdateStream":{"input":{"type":"structure","required":["ProgressUpdateStreamName"],"members":{"ProgressUpdateStreamName":{},"DryRun":{"type":"boolean"}}},"output":{"type":"structure","members":{}}},"DescribeApplicationState":{"input":{"type":"structure","required":["ApplicationId"],"members":{"ApplicationId":{}}},"output":{"type":"structure","members":{"ApplicationStatus":{},"LastUpdatedTime":{"type":"timestamp"}}}},"DescribeMigrationTask":{"input":{"type":"structure","required":["ProgressUpdateStream","MigrationTaskName"],"members":{"ProgressUpdateStream":{},"MigrationTaskName":{}}},"output":{"type":"structure","members":{"MigrationTask":{"type":"structure","members":{"ProgressUpdateStream":{},"MigrationTaskName":{},"Task":{"shape":"Sq"},"UpdateDateTime":{"type":"timestamp"},"ResourceAttributeList":{"type":"list","member":{"shape":"Sv"}}}}}}},"DisassociateCreatedArtifact":{"input":{"type":"structure","required":["ProgressUpdateStream","MigrationTaskName","CreatedArtifactName"],"members":{"ProgressUpdateStream":{},"MigrationTaskName":{},"CreatedArtifactName":{},"DryRun":{"type":"boolean"}}},"output":{"type":"structure","members":{}}},"DisassociateDiscoveredResource":{"input":{"type":"structure","required":["ProgressUpdateStream","MigrationTaskName","ConfigurationId"],"members":{"ProgressUpdateStream":{},"MigrationTaskName":{},"ConfigurationId":{},"DryRun":{"type":"boolean"}}},"output":{"type":"structure","members":{}}},"ImportMigrationTask":{"input":{"type":"structure","required":["ProgressUpdateStream","MigrationTaskName"],"members":{"ProgressUpdateStream":{},"MigrationTaskName":{},"DryRun":{"type":"boolean"}}},"output":{"type":"structure","members":{}}},"ListApplicationStates":{"input":{"type":"structure","members":{"ApplicationIds":{"type":"list","member":{}},"NextToken":{},"MaxResults":{"type":"integer"}}},"output":{"type":"structure","members":{"ApplicationStateList":{"type":"list","member":{"type":"structure","members":{"ApplicationId":{},"ApplicationStatus":{},"LastUpdatedTime":{"type":"timestamp"}}}},"NextToken":{}}}},"ListCreatedArtifacts":{"input":{"type":"structure","required":["ProgressUpdateStream","MigrationTaskName"],"members":{"ProgressUpdateStream":{},"MigrationTaskName":{},"NextToken":{},"MaxResults":{"type":"integer"}}},"output":{"type":"structure","members":{"NextToken":{},"CreatedArtifactList":{"type":"list","member":{"shape":"S4"}}}}},"ListDiscoveredResources":{"input":{"type":"structure","required":["ProgressUpdateStream","MigrationTaskName"],"members":{"ProgressUpdateStream":{},"MigrationTaskName":{},"NextToken":{},"MaxResults":{"type":"integer"}}},"output":{"type":"structure","members":{"NextToken":{},"DiscoveredResourceList":{"type":"list","member":{"shape":"Sa"}}}}},"ListMigrationTasks":{"input":{"type":"structure","members":{"NextToken":{},"MaxResults":{"type":"integer"},"ResourceName":{}}},"output":{"type":"structure","members":{"NextToken":{},"MigrationTaskSummaryList":{"type":"list","member":{"type":"structure","members":{"ProgressUpdateStream":{},"MigrationTaskName":{},"Status":{},"ProgressPercent":{"type":"integer"},"StatusDetail":{},"UpdateDateTime":{"type":"timestamp"}}}}}}},"ListProgressUpdateStreams":{"input":{"type":"structure","members":{"NextToken":{},"MaxResults":{"type":"integer"}}},"output":{"type":"structure","members":{"ProgressUpdateStreamSummaryList":{"type":"list","member":{"type":"structure","members":{"ProgressUpdateStreamName":{}}}},"NextToken":{}}}},"NotifyApplicationState":{"input":{"type":"structure","required":["ApplicationId","Status"],"members":{"ApplicationId":{},"Status":{},"UpdateDateTime":{"type":"timestamp"},"DryRun":{"type":"boolean"}}},"output":{"type":"structure","members":{}}},"NotifyMigrationTaskState":{"input":{"type":"structure","required":["ProgressUpdateStream","MigrationTaskName","Task","UpdateDateTime","NextUpdateSeconds"],"members":{"ProgressUpdateStream":{},"MigrationTaskName":{},"Task":{"shape":"Sq"},"UpdateDateTime":{"type":"timestamp"},"NextUpdateSeconds":{"type":"integer"},"DryRun":{"type":"boolean"}}},"output":{"type":"structure","members":{}}},"PutResourceAttributes":{"input":{"type":"structure","required":["ProgressUpdateStream","MigrationTaskName","ResourceAttributeList"],"members":{"ProgressUpdateStream":{},"MigrationTaskName":{},"ResourceAttributeList":{"type":"list","member":{"shape":"Sv"}},"DryRun":{"type":"boolean"}}},"output":{"type":"structure","members":{}}}},"shapes":{"S4":{"type":"structure","required":["Name"],"members":{"Name":{},"Description":{}}},"Sa":{"type":"structure","required":["ConfigurationId"],"members":{"ConfigurationId":{},"Description":{}}},"Sq":{"type":"structure","required":["Status"],"members":{"Status":{},"StatusDetail":{},"ProgressPercent":{"type":"integer"}}},"Sv":{"type":"structure","required":["Type","Value"],"members":{"Type":{},"Value":{}}}}}

/***/ }),
/* 548 */
/***/ (function(module, exports) {

	module.exports = {"pagination":{"ListApplicationStates":{"input_token":"NextToken","limit_key":"MaxResults","output_token":"NextToken","result_key":"ApplicationStateList"},"ListCreatedArtifacts":{"input_token":"NextToken","limit_key":"MaxResults","output_token":"NextToken","result_key":"CreatedArtifactList"},"ListDiscoveredResources":{"input_token":"NextToken","limit_key":"MaxResults","output_token":"NextToken","result_key":"DiscoveredResourceList"},"ListMigrationTasks":{"input_token":"NextToken","limit_key":"MaxResults","output_token":"NextToken","result_key":"MigrationTaskSummaryList"},"ListProgressUpdateStreams":{"input_token":"NextToken","limit_key":"MaxResults","output_token":"NextToken","result_key":"ProgressUpdateStreamSummaryList"}}}

/***/ }),
/* 549 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(2);
	var AWS = __webpack_require__(4);
	var Service = AWS.Service;
	var apiLoader = AWS.apiLoader;

	apiLoader.services['cloudhsmv2'] = {};
	AWS.CloudHSMV2 = Service.defineService('cloudhsmv2', ['2017-04-28']);
	Object.defineProperty(apiLoader.services['cloudhsmv2'], '2017-04-28', {
	  get: function get() {
	    var model = __webpack_require__(550);
	    model.paginators = __webpack_require__(551).pagination;
	    return model;
	  },
	  enumerable: true,
	  configurable: true
	});

	module.exports = AWS.CloudHSMV2;


/***/ }),
/* 550 */
/***/ (function(module, exports) {

	module.exports = {"version":"2.0","metadata":{"apiVersion":"2017-04-28","endpointPrefix":"cloudhsmv2","jsonVersion":"1.1","protocol":"json","serviceAbbreviation":"CloudHSM V2","serviceFullName":"AWS CloudHSM V2","serviceId":"CloudHSM V2","signatureVersion":"v4","signingName":"cloudhsm","targetPrefix":"BaldrApiService","uid":"cloudhsmv2-2017-04-28"},"operations":{"CopyBackupToRegion":{"input":{"type":"structure","required":["DestinationRegion","BackupId"],"members":{"DestinationRegion":{},"BackupId":{},"TagList":{"shape":"S4"}}},"output":{"type":"structure","members":{"DestinationBackup":{"type":"structure","members":{"CreateTimestamp":{"type":"timestamp"},"SourceRegion":{},"SourceBackup":{},"SourceCluster":{}}}}}},"CreateCluster":{"input":{"type":"structure","required":["HsmType","SubnetIds"],"members":{"BackupRetentionPolicy":{"shape":"Sd"},"HsmType":{},"SourceBackupId":{},"SubnetIds":{"type":"list","member":{}},"TagList":{"shape":"S4"}}},"output":{"type":"structure","members":{"Cluster":{"shape":"Sk"}}}},"CreateHsm":{"input":{"type":"structure","required":["ClusterId","AvailabilityZone"],"members":{"ClusterId":{},"AvailabilityZone":{},"IpAddress":{}}},"output":{"type":"structure","members":{"Hsm":{"shape":"Sn"}}}},"DeleteBackup":{"input":{"type":"structure","required":["BackupId"],"members":{"BackupId":{}}},"output":{"type":"structure","members":{"Backup":{"shape":"S16"}}}},"DeleteCluster":{"input":{"type":"structure","required":["ClusterId"],"members":{"ClusterId":{}}},"output":{"type":"structure","members":{"Cluster":{"shape":"Sk"}}}},"DeleteHsm":{"input":{"type":"structure","required":["ClusterId"],"members":{"ClusterId":{},"HsmId":{},"EniId":{},"EniIp":{}}},"output":{"type":"structure","members":{"HsmId":{}}}},"DescribeBackups":{"input":{"type":"structure","members":{"NextToken":{},"MaxResults":{"type":"integer"},"Filters":{"shape":"S1g"},"SortAscending":{"type":"boolean"}}},"output":{"type":"structure","members":{"Backups":{"type":"list","member":{"shape":"S16"}},"NextToken":{}}}},"DescribeClusters":{"input":{"type":"structure","members":{"Filters":{"shape":"S1g"},"NextToken":{},"MaxResults":{"type":"integer"}}},"output":{"type":"structure","members":{"Clusters":{"type":"list","member":{"shape":"Sk"}},"NextToken":{}}}},"InitializeCluster":{"input":{"type":"structure","required":["ClusterId","SignedCert","TrustAnchor"],"members":{"ClusterId":{},"SignedCert":{},"TrustAnchor":{}}},"output":{"type":"structure","members":{"State":{},"StateMessage":{}}}},"ListTags":{"input":{"type":"structure","required":["ResourceId"],"members":{"ResourceId":{},"NextToken":{},"MaxResults":{"type":"integer"}}},"output":{"type":"structure","required":["TagList"],"members":{"TagList":{"shape":"S4"},"NextToken":{}}}},"ModifyBackupAttributes":{"input":{"type":"structure","required":["BackupId","NeverExpires"],"members":{"BackupId":{},"NeverExpires":{"type":"boolean"}}},"output":{"type":"structure","members":{"Backup":{"shape":"S16"}}}},"ModifyCluster":{"input":{"type":"structure","required":["BackupRetentionPolicy","ClusterId"],"members":{"BackupRetentionPolicy":{"shape":"Sd"},"ClusterId":{}}},"output":{"type":"structure","members":{"Cluster":{"shape":"Sk"}}}},"RestoreBackup":{"input":{"type":"structure","required":["BackupId"],"members":{"BackupId":{}}},"output":{"type":"structure","members":{"Backup":{"shape":"S16"}}}},"TagResource":{"input":{"type":"structure","required":["ResourceId","TagList"],"members":{"ResourceId":{},"TagList":{"shape":"S4"}}},"output":{"type":"structure","members":{}}},"UntagResource":{"input":{"type":"structure","required":["ResourceId","TagKeyList"],"members":{"ResourceId":{},"TagKeyList":{"type":"list","member":{}}}},"output":{"type":"structure","members":{}}}},"shapes":{"S4":{"type":"list","member":{"type":"structure","required":["Key","Value"],"members":{"Key":{},"Value":{}}}},"Sd":{"type":"structure","members":{"Type":{},"Value":{}}},"Sk":{"type":"structure","members":{"BackupPolicy":{},"BackupRetentionPolicy":{"shape":"Sd"},"ClusterId":{},"CreateTimestamp":{"type":"timestamp"},"Hsms":{"type":"list","member":{"shape":"Sn"}},"HsmType":{},"PreCoPassword":{},"SecurityGroup":{},"SourceBackupId":{},"State":{},"StateMessage":{},"SubnetMapping":{"type":"map","key":{},"value":{}},"VpcId":{},"Certificates":{"type":"structure","members":{"ClusterCsr":{},"HsmCertificate":{},"AwsHardwareCertificate":{},"ManufacturerHardwareCertificate":{},"ClusterCertificate":{}}},"TagList":{"shape":"S4"}}},"Sn":{"type":"structure","required":["HsmId"],"members":{"AvailabilityZone":{},"ClusterId":{},"SubnetId":{},"EniId":{},"EniIp":{},"HsmId":{},"State":{},"StateMessage":{}}},"S16":{"type":"structure","required":["BackupId"],"members":{"BackupId":{},"BackupState":{},"ClusterId":{},"CreateTimestamp":{"type":"timestamp"},"CopyTimestamp":{"type":"timestamp"},"NeverExpires":{"type":"boolean"},"SourceRegion":{},"SourceBackup":{},"SourceCluster":{},"DeleteTimestamp":{"type":"timestamp"},"TagList":{"shape":"S4"}}},"S1g":{"type":"map","key":{},"value":{"type":"list","member":{}}}}}

/***/ }),
/* 551 */
/***/ (function(module, exports) {

	module.exports = {"pagination":{"DescribeBackups":{"input_token":"NextToken","output_token":"NextToken","limit_key":"MaxResults"},"DescribeClusters":{"input_token":"NextToken","output_token":"NextToken","limit_key":"MaxResults"},"ListTags":{"input_token":"NextToken","output_token":"NextToken","limit_key":"MaxResults"}}}

/***/ }),
/* 552 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(2);
	var AWS = __webpack_require__(4);
	var Service = AWS.Service;
	var apiLoader = AWS.apiLoader;

	apiLoader.services['glue'] = {};
	AWS.Glue = Service.defineService('glue', ['2017-03-31']);
	Object.defineProperty(apiLoader.services['glue'], '2017-03-31', {
	  get: function get() {
	    var model = __webpack_require__(553);
	    model.paginators = __webpack_require__(554).pagination;
	    return model;
	  },
	  enumerable: true,
	  configurable: true
	});

	module.exports = AWS.Glue;


/***/ }),
/* 553 */
/***/ (function(module, exports) {

	module.exports = {"version":"2.0","metadata":{"apiVersion":"2017-03-31","endpointPrefix":"glue","jsonVersion":"1.1","protocol":"json","serviceFullName":"AWS Glue","serviceId":"Glue","signatureVersion":"v4","targetPrefix":"AWSGlue","uid":"glue-2017-03-31"},"operations":{"BatchCreatePartition":{"input":{"type":"structure","required":["DatabaseName","TableName","PartitionInputList"],"members":{"CatalogId":{},"DatabaseName":{},"TableName":{},"PartitionInputList":{"type":"list","member":{"shape":"S5"}}}},"output":{"type":"structure","members":{"Errors":{"shape":"S12"}}}},"BatchDeleteConnection":{"input":{"type":"structure","required":["ConnectionNameList"],"members":{"CatalogId":{},"ConnectionNameList":{"type":"list","member":{}}}},"output":{"type":"structure","members":{"Succeeded":{"shape":"Sn"},"Errors":{"type":"map","key":{},"value":{"shape":"S14"}}}}},"BatchDeletePartition":{"input":{"type":"structure","required":["DatabaseName","TableName","PartitionsToDelete"],"members":{"CatalogId":{},"DatabaseName":{},"TableName":{},"PartitionsToDelete":{"type":"list","member":{"shape":"S1c"}}}},"output":{"type":"structure","members":{"Errors":{"shape":"S12"}}}},"BatchDeleteTable":{"input":{"type":"structure","required":["DatabaseName","TablesToDelete"],"members":{"CatalogId":{},"DatabaseName":{},"TablesToDelete":{"type":"list","member":{}},"TransactionId":{}}},"output":{"type":"structure","members":{"Errors":{"type":"list","member":{"type":"structure","members":{"TableName":{},"ErrorDetail":{"shape":"S14"}}}}}}},"BatchDeleteTableVersion":{"input":{"type":"structure","required":["DatabaseName","TableName","VersionIds"],"members":{"CatalogId":{},"DatabaseName":{},"TableName":{},"VersionIds":{"type":"list","member":{}}}},"output":{"type":"structure","members":{"Errors":{"type":"list","member":{"type":"structure","members":{"TableName":{},"VersionId":{},"ErrorDetail":{"shape":"S14"}}}}}}},"BatchGetBlueprints":{"input":{"type":"structure","required":["Names"],"members":{"Names":{"type":"list","member":{}},"IncludeBlueprint":{"type":"boolean"},"IncludeParameterSpec":{"type":"boolean"}}},"output":{"type":"structure","members":{"Blueprints":{"type":"list","member":{"shape":"S1w"}},"MissingBlueprints":{"shape":"S24"}}}},"BatchGetCrawlers":{"input":{"type":"structure","required":["CrawlerNames"],"members":{"CrawlerNames":{"shape":"S26"}}},"output":{"type":"structure","members":{"Crawlers":{"shape":"S28"},"CrawlersNotFound":{"shape":"S26"}}}},"BatchGetCustomEntityTypes":{"input":{"type":"structure","required":["Names"],"members":{"Names":{"shape":"S3r"}}},"output":{"type":"structure","members":{"CustomEntityTypes":{"shape":"S3t"},"CustomEntityTypesNotFound":{"shape":"S3r"}}}},"BatchGetDataQualityResult":{"input":{"type":"structure","required":["ResultIds"],"members":{"ResultIds":{"shape":"S3x"}}},"output":{"type":"structure","required":["Results"],"members":{"Results":{"type":"list","member":{"type":"structure","members":{"ResultId":{},"Score":{"type":"double"},"DataSource":{"shape":"S43"},"RulesetName":{},"EvaluationContext":{},"StartedOn":{"type":"timestamp"},"CompletedOn":{"type":"timestamp"},"JobName":{},"JobRunId":{},"RulesetEvaluationRunId":{},"RuleResults":{"shape":"S46"},"AnalyzerResults":{"shape":"S4b"},"Observations":{"shape":"S4d"}}}},"ResultsNotFound":{"shape":"S3x"}}}},"BatchGetDevEndpoints":{"input":{"type":"structure","required":["DevEndpointNames"],"members":{"DevEndpointNames":{"shape":"S4k"}}},"output":{"type":"structure","members":{"DevEndpoints":{"shape":"S4m"},"DevEndpointsNotFound":{"shape":"S4k"}}}},"BatchGetJobs":{"input":{"type":"structure","required":["JobNames"],"members":{"JobNames":{"shape":"S4w"}}},"output":{"type":"structure","members":{"Jobs":{"shape":"S4y"},"JobsNotFound":{"shape":"S4w"}}}},"BatchGetPartition":{"input":{"type":"structure","required":["DatabaseName","TableName","PartitionsToGet"],"members":{"CatalogId":{},"DatabaseName":{},"TableName":{},"PartitionsToGet":{"shape":"Sad"}}},"output":{"type":"structure","members":{"Partitions":{"shape":"Saf"},"UnprocessedKeys":{"shape":"Sad"}}}},"BatchGetTableOptimizer":{"input":{"type":"structure","required":["Entries"],"members":{"Entries":{"type":"list","member":{"type":"structure","members":{"catalogId":{},"databaseName":{},"tableName":{},"type":{}}}}}},"output":{"type":"structure","members":{"TableOptimizers":{"type":"list","member":{"type":"structure","members":{"catalogId":{},"databaseName":{},"tableName":{},"tableOptimizer":{"shape":"Saq"}}}},"Failures":{"type":"list","member":{"type":"structure","members":{"error":{"shape":"S14"},"catalogId":{},"databaseName":{},"tableName":{},"type":{}}}}}}},"BatchGetTriggers":{"input":{"type":"structure","required":["TriggerNames"],"members":{"TriggerNames":{"shape":"Sb1"}}},"output":{"type":"structure","members":{"Triggers":{"shape":"Sb3"},"TriggersNotFound":{"shape":"Sb1"}}}},"BatchGetWorkflows":{"input":{"type":"structure","required":["Names"],"members":{"Names":{"shape":"Sbl"},"IncludeGraph":{"type":"boolean"}}},"output":{"type":"structure","members":{"Workflows":{"type":"list","member":{"shape":"Sbo"}},"MissingWorkflows":{"shape":"Sbl"}}}},"BatchStopJobRun":{"input":{"type":"structure","required":["JobName","JobRunIds"],"members":{"JobName":{},"JobRunIds":{"type":"list","member":{}}}},"output":{"type":"structure","members":{"SuccessfulSubmissions":{"type":"list","member":{"type":"structure","members":{"JobName":{},"JobRunId":{}}}},"Errors":{"type":"list","member":{"type":"structure","members":{"JobName":{},"JobRunId":{},"ErrorDetail":{"shape":"S14"}}}}}}},"BatchUpdatePartition":{"input":{"type":"structure","required":["DatabaseName","TableName","Entries"],"members":{"CatalogId":{},"DatabaseName":{},"TableName":{},"Entries":{"type":"list","member":{"type":"structure","required":["PartitionValueList","PartitionInput"],"members":{"PartitionValueList":{"shape":"Scm"},"PartitionInput":{"shape":"S5"}}}}}},"output":{"type":"structure","members":{"Errors":{"type":"list","member":{"type":"structure","members":{"PartitionValueList":{"shape":"Scm"},"ErrorDetail":{"shape":"S14"}}}}}}},"CancelDataQualityRuleRecommendationRun":{"input":{"type":"structure","required":["RunId"],"members":{"RunId":{}}},"output":{"type":"structure","members":{}}},"CancelDataQualityRulesetEvaluationRun":{"input":{"type":"structure","required":["RunId"],"members":{"RunId":{}}},"output":{"type":"structure","members":{}}},"CancelMLTaskRun":{"input":{"type":"structure","required":["TransformId","TaskRunId"],"members":{"TransformId":{},"TaskRunId":{}}},"output":{"type":"structure","members":{"TransformId":{},"TaskRunId":{},"Status":{}}}},"CancelStatement":{"input":{"type":"structure","required":["SessionId","Id"],"members":{"SessionId":{},"Id":{"type":"integer"},"RequestOrigin":{}}},"output":{"type":"structure","members":{}}},"CheckSchemaVersionValidity":{"input":{"type":"structure","required":["DataFormat","SchemaDefinition"],"members":{"DataFormat":{},"SchemaDefinition":{}}},"output":{"type":"structure","members":{"Valid":{"type":"boolean"},"Error":{}}}},"CreateBlueprint":{"input":{"type":"structure","required":["Name","BlueprintLocation"],"members":{"Name":{},"Description":{},"BlueprintLocation":{},"Tags":{"shape":"Sd7"}}},"output":{"type":"structure","members":{"Name":{}}}},"CreateClassifier":{"input":{"type":"structure","members":{"GrokClassifier":{"type":"structure","required":["Classification","Name","GrokPattern"],"members":{"Classification":{},"Name":{},"GrokPattern":{},"CustomPatterns":{}}},"XMLClassifier":{"type":"structure","required":["Classification","Name"],"members":{"Classification":{},"Name":{},"RowTag":{}}},"JsonClassifier":{"type":"structure","required":["Name","JsonPath"],"members":{"Name":{},"JsonPath":{}}},"CsvClassifier":{"type":"structure","required":["Name"],"members":{"Name":{},"Delimiter":{},"QuoteSymbol":{},"ContainsHeader":{},"Header":{"shape":"Sdo"},"DisableValueTrimming":{"type":"boolean"},"AllowSingleColumn":{"type":"boolean"},"CustomDatatypeConfigured":{"type":"boolean"},"CustomDatatypes":{"shape":"Sdp"},"Serde":{}}}}},"output":{"type":"structure","members":{}}},"CreateConnection":{"input":{"type":"structure","required":["ConnectionInput"],"members":{"CatalogId":{},"ConnectionInput":{"shape":"Sdt"},"Tags":{"shape":"Sd7"}}},"output":{"type":"structure","members":{}}},"CreateCrawler":{"input":{"type":"structure","required":["Name","Role","Targets"],"members":{"Name":{},"Role":{},"DatabaseName":{},"Description":{},"Targets":{"shape":"S2b"},"Schedule":{},"Classifiers":{"shape":"S32"},"TablePrefix":{},"SchemaChangePolicy":{"shape":"S35"},"RecrawlPolicy":{"shape":"S33"},"LineageConfiguration":{"shape":"S38"},"LakeFormationConfiguration":{"shape":"S3o"},"Configuration":{},"CrawlerSecurityConfiguration":{},"Tags":{"shape":"Sd7"}}},"output":{"type":"structure","members":{}}},"CreateCustomEntityType":{"input":{"type":"structure","required":["Name","RegexString"],"members":{"Name":{},"RegexString":{},"ContextWords":{"shape":"S3v"},"Tags":{"shape":"Sd7"}}},"output":{"type":"structure","members":{"Name":{}}}},"CreateDataQualityRuleset":{"input":{"type":"structure","required":["Name","Ruleset"],"members":{"Name":{},"Description":{},"Ruleset":{},"Tags":{"shape":"Sd7"},"TargetTable":{"shape":"Se7"},"ClientToken":{}}},"output":{"type":"structure","members":{"Name":{}}},"idempotent":true},"CreateDatabase":{"input":{"type":"structure","required":["DatabaseInput"],"members":{"CatalogId":{},"DatabaseInput":{"shape":"Sea"},"Tags":{"shape":"Sd7"}}},"output":{"type":"structure","members":{}}},"CreateDevEndpoint":{"input":{"type":"structure","required":["EndpointName","RoleArn"],"members":{"EndpointName":{},"RoleArn":{},"SecurityGroupIds":{"shape":"S4p"},"SubnetId":{},"PublicKey":{},"PublicKeys":{"shape":"S4t"},"NumberOfNodes":{"type":"integer"},"WorkerType":{},"GlueVersion":{},"NumberOfWorkers":{"type":"integer"},"ExtraPythonLibsS3Path":{},"ExtraJarsS3Path":{},"SecurityConfiguration":{},"Tags":{"shape":"Sd7"},"Arguments":{"shape":"S4u"}}},"output":{"type":"structure","members":{"EndpointName":{},"Status":{},"SecurityGroupIds":{"shape":"S4p"},"SubnetId":{},"RoleArn":{},"YarnEndpointAddress":{},"ZeppelinRemoteSparkInterpreterPort":{"type":"integer"},"NumberOfNodes":{"type":"integer"},"WorkerType":{},"GlueVersion":{},"NumberOfWorkers":{"type":"integer"},"AvailabilityZone":{},"VpcId":{},"ExtraPythonLibsS3Path":{},"ExtraJarsS3Path":{},"FailureReason":{},"SecurityConfiguration":{},"CreatedTimestamp":{"type":"timestamp"},"Arguments":{"shape":"S4u"}}}},"CreateJob":{"input":{"type":"structure","required":["Name","Role","Command"],"members":{"Name":{},"Description":{},"LogUri":{},"Role":{},"ExecutionProperty":{"shape":"S52"},"Command":{"shape":"S54"},"DefaultArguments":{"shape":"S58"},"NonOverridableArguments":{"shape":"S58"},"Connections":{"shape":"S59"},"MaxRetries":{"type":"integer"},"AllocatedCapacity":{"deprecated":true,"deprecatedMessage":"This property is deprecated, use MaxCapacity instead.","type":"integer"},"Timeout":{"type":"integer"},"MaxCapacity":{"type":"double"},"SecurityConfiguration":{},"Tags":{"shape":"Sd7"},"NotificationProperty":{"shape":"S5d"},"GlueVersion":{},"NumberOfWorkers":{"type":"integer"},"WorkerType":{},"CodeGenConfigurationNodes":{"shape":"S5f"},"ExecutionClass":{},"SourceControlDetails":{"shape":"Sa9"}}},"output":{"type":"structure","members":{"Name":{}}}},"CreateMLTransform":{"input":{"type":"structure","required":["Name","InputRecordTables","Parameters","Role"],"members":{"Name":{},"Description":{},"InputRecordTables":{"shape":"Ser"},"Parameters":{"shape":"Ses"},"Role":{},"GlueVersion":{},"MaxCapacity":{"type":"double"},"WorkerType":{},"NumberOfWorkers":{"type":"integer"},"Timeout":{"type":"integer"},"MaxRetries":{"type":"integer"},"Tags":{"shape":"Sd7"},"TransformEncryption":{"shape":"Sew"}}},"output":{"type":"structure","members":{"TransformId":{}}}},"CreatePartition":{"input":{"type":"structure","required":["DatabaseName","TableName","PartitionInput"],"members":{"CatalogId":{},"DatabaseName":{},"TableName":{},"PartitionInput":{"shape":"S5"}}},"output":{"type":"structure","members":{}}},"CreatePartitionIndex":{"input":{"type":"structure","required":["DatabaseName","TableName","PartitionIndex"],"members":{"CatalogId":{},"DatabaseName":{},"TableName":{},"PartitionIndex":{"shape":"Sf3"}}},"output":{"type":"structure","members":{}}},"CreateRegistry":{"input":{"type":"structure","required":["RegistryName"],"members":{"RegistryName":{},"Description":{},"Tags":{"shape":"Sd7"}}},"output":{"type":"structure","members":{"RegistryArn":{},"RegistryName":{},"Description":{},"Tags":{"shape":"Sd7"}}}},"CreateSchema":{"input":{"type":"structure","required":["SchemaName","DataFormat"],"members":{"RegistryId":{"shape":"Sf9"},"SchemaName":{},"DataFormat":{},"Compatibility":{},"Description":{},"Tags":{"shape":"Sd7"},"SchemaDefinition":{}}},"output":{"type":"structure","members":{"RegistryName":{},"RegistryArn":{},"SchemaName":{},"SchemaArn":{},"Description":{},"DataFormat":{},"Compatibility":{},"SchemaCheckpoint":{"type":"long"},"LatestSchemaVersion":{"type":"long"},"NextSchemaVersion":{"type":"long"},"SchemaStatus":{},"Tags":{"shape":"Sd7"},"SchemaVersionId":{},"SchemaVersionStatus":{}}}},"CreateScript":{"input":{"type":"structure","members":{"DagNodes":{"shape":"Sfg"},"DagEdges":{"shape":"Sfo"},"Language":{}}},"output":{"type":"structure","members":{"PythonScript":{},"ScalaCode":{}}}},"CreateSecurityConfiguration":{"input":{"type":"structure","required":["Name","EncryptionConfiguration"],"members":{"Name":{},"EncryptionConfiguration":{"shape":"Sfv"}}},"output":{"type":"structure","members":{"Name":{},"CreatedTimestamp":{"type":"timestamp"}}}},"CreateSession":{"input":{"type":"structure","required":["Id","Role","Command"],"members":{"Id":{},"Description":{},"Role":{},"Command":{"shape":"Sg7"},"Timeout":{"type":"integer"},"IdleTimeout":{"type":"integer"},"DefaultArguments":{"shape":"Sg8"},"Connections":{"shape":"S59"},"MaxCapacity":{"type":"double"},"NumberOfWorkers":{"type":"integer"},"WorkerType":{},"SecurityConfiguration":{},"GlueVersion":{},"Tags":{"shape":"Sd7"},"RequestOrigin":{}}},"output":{"type":"structure","members":{"Session":{"shape":"Sgb"}}}},"CreateTable":{"input":{"type":"structure","required":["DatabaseName","TableInput"],"members":{"CatalogId":{},"DatabaseName":{},"TableInput":{"shape":"Sgg"},"PartitionIndexes":{"type":"list","member":{"shape":"Sf3"}},"TransactionId":{},"OpenTableFormatInput":{"type":"structure","members":{"IcebergInput":{"type":"structure","required":["MetadataOperation"],"members":{"MetadataOperation":{},"Version":{}}}}}}},"output":{"type":"structure","members":{}}},"CreateTableOptimizer":{"input":{"type":"structure","required":["CatalogId","DatabaseName","TableName","Type","TableOptimizerConfiguration"],"members":{"CatalogId":{},"DatabaseName":{},"TableName":{},"Type":{},"TableOptimizerConfiguration":{"shape":"Sar"}}},"output":{"type":"structure","members":{}}},"CreateTrigger":{"input":{"type":"structure","required":["Name","Type","Actions"],"members":{"Name":{},"WorkflowName":{},"Type":{},"Schedule":{},"Predicate":{"shape":"Sba"},"Actions":{"shape":"Sb8"},"Description":{},"StartOnCreation":{"type":"boolean"},"Tags":{"shape":"Sd7"},"EventBatchingCondition":{"shape":"Sbh"}}},"output":{"type":"structure","members":{"Name":{}}}},"CreateUserDefinedFunction":{"input":{"type":"structure","required":["DatabaseName","FunctionInput"],"members":{"CatalogId":{},"DatabaseName":{},"FunctionInput":{"shape":"Sgv"}}},"output":{"type":"structure","members":{}}},"CreateWorkflow":{"input":{"type":"structure","required":["Name"],"members":{"Name":{},"Description":{},"DefaultRunProperties":{"shape":"Sbp"},"Tags":{"shape":"Sd7"},"MaxConcurrentRuns":{"type":"integer"}}},"output":{"type":"structure","members":{"Name":{}}}},"DeleteBlueprint":{"input":{"type":"structure","required":["Name"],"members":{"Name":{}}},"output":{"type":"structure","members":{"Name":{}}}},"DeleteClassifier":{"input":{"type":"structure","required":["Name"],"members":{"Name":{}}},"output":{"type":"structure","members":{}}},"DeleteColumnStatisticsForPartition":{"input":{"type":"structure","required":["DatabaseName","TableName","PartitionValues","ColumnName"],"members":{"CatalogId":{},"DatabaseName":{},"TableName":{},"PartitionValues":{"shape":"S6"},"ColumnName":{}}},"output":{"type":"structure","members":{}}},"DeleteColumnStatisticsForTable":{"input":{"type":"structure","required":["DatabaseName","TableName","ColumnName"],"members":{"CatalogId":{},"DatabaseName":{},"TableName":{},"ColumnName":{}}},"output":{"type":"structure","members":{}}},"DeleteConnection":{"input":{"type":"structure","required":["ConnectionName"],"members":{"CatalogId":{},"ConnectionName":{}}},"output":{"type":"structure","members":{}}},"DeleteCrawler":{"input":{"type":"structure","required":["Name"],"members":{"Name":{}}},"output":{"type":"structure","members":{}}},"DeleteCustomEntityType":{"input":{"type":"structure","required":["Name"],"members":{"Name":{}}},"output":{"type":"structure","members":{"Name":{}}}},"DeleteDataQualityRuleset":{"input":{"type":"structure","required":["Name"],"members":{"Name":{}}},"output":{"type":"structure","members":{}}},"DeleteDatabase":{"input":{"type":"structure","required":["Name"],"members":{"CatalogId":{},"Name":{}}},"output":{"type":"structure","members":{}}},"DeleteDevEndpoint":{"input":{"type":"structure","required":["EndpointName"],"members":{"EndpointName":{}}},"output":{"type":"structure","members":{}}},"DeleteJob":{"input":{"type":"structure","required":["JobName"],"members":{"JobName":{}}},"output":{"type":"structure","members":{"JobName":{}}}},"DeleteMLTransform":{"input":{"type":"structure","required":["TransformId"],"members":{"TransformId":{}}},"output":{"type":"structure","members":{"TransformId":{}}}},"DeletePartition":{"input":{"type":"structure","required":["DatabaseName","TableName","PartitionValues"],"members":{"CatalogId":{},"DatabaseName":{},"TableName":{},"PartitionValues":{"shape":"S6"}}},"output":{"type":"structure","members":{}}},"DeletePartitionIndex":{"input":{"type":"structure","required":["DatabaseName","TableName","IndexName"],"members":{"CatalogId":{},"DatabaseName":{},"TableName":{},"IndexName":{}}},"output":{"type":"structure","members":{}}},"DeleteRegistry":{"input":{"type":"structure","required":["RegistryId"],"members":{"RegistryId":{"shape":"Sf9"}}},"output":{"type":"structure","members":{"RegistryName":{},"RegistryArn":{},"Status":{}}}},"DeleteResourcePolicy":{"input":{"type":"structure","members":{"PolicyHashCondition":{},"ResourceArn":{}}},"output":{"type":"structure","members":{}}},"DeleteSchema":{"input":{"type":"structure","required":["SchemaId"],"members":{"SchemaId":{"shape":"Sw"}}},"output":{"type":"structure","members":{"SchemaArn":{},"SchemaName":{},"Status":{}}}},"DeleteSchemaVersions":{"input":{"type":"structure","required":["SchemaId","Versions"],"members":{"SchemaId":{"shape":"Sw"},"Versions":{}}},"output":{"type":"structure","members":{"SchemaVersionErrors":{"type":"list","member":{"type":"structure","members":{"VersionNumber":{"type":"long"},"ErrorDetails":{"type":"structure","members":{"ErrorCode":{},"ErrorMessage":{}}}}}}}}},"DeleteSecurityConfiguration":{"input":{"type":"structure","required":["Name"],"members":{"Name":{}}},"output":{"type":"structure","members":{}}},"DeleteSession":{"input":{"type":"structure","required":["Id"],"members":{"Id":{},"RequestOrigin":{}}},"output":{"type":"structure","members":{"Id":{}}}},"DeleteTable":{"input":{"type":"structure","required":["DatabaseName","Name"],"members":{"CatalogId":{},"DatabaseName":{},"Name":{},"TransactionId":{}}},"output":{"type":"structure","members":{}}},"DeleteTableOptimizer":{"input":{"type":"structure","required":["CatalogId","DatabaseName","TableName","Type"],"members":{"CatalogId":{},"DatabaseName":{},"TableName":{},"Type":{}}},"output":{"type":"structure","members":{}}},"DeleteTableVersion":{"input":{"type":"structure","required":["DatabaseName","TableName","VersionId"],"members":{"CatalogId":{},"DatabaseName":{},"TableName":{},"VersionId":{}}},"output":{"type":"structure","members":{}}},"DeleteTrigger":{"input":{"type":"structure","required":["Name"],"members":{"Name":{}}},"output":{"type":"structure","members":{"Name":{}}}},"DeleteUserDefinedFunction":{"input":{"type":"structure","required":["DatabaseName","FunctionName"],"members":{"CatalogId":{},"DatabaseName":{},"FunctionName":{}}},"output":{"type":"structure","members":{}}},"DeleteWorkflow":{"input":{"type":"structure","required":["Name"],"members":{"Name":{}}},"output":{"type":"structure","members":{"Name":{}}}},"GetBlueprint":{"input":{"type":"structure","required":["Name"],"members":{"Name":{},"IncludeBlueprint":{"type":"boolean"},"IncludeParameterSpec":{"type":"boolean"}}},"output":{"type":"structure","members":{"Blueprint":{"shape":"S1w"}}}},"GetBlueprintRun":{"input":{"type":"structure","required":["BlueprintName","RunId"],"members":{"BlueprintName":{},"RunId":{}}},"output":{"type":"structure","members":{"BlueprintRun":{"shape":"Siu"}}}},"GetBlueprintRuns":{"input":{"type":"structure","required":["BlueprintName"],"members":{"BlueprintName":{},"NextToken":{},"MaxResults":{"type":"integer"}}},"output":{"type":"structure","members":{"BlueprintRuns":{"type":"list","member":{"shape":"Siu"}},"NextToken":{}}}},"GetCatalogImportStatus":{"input":{"type":"structure","members":{"CatalogId":{}}},"output":{"type":"structure","members":{"ImportStatus":{"type":"structure","members":{"ImportCompleted":{"type":"boolean"},"ImportTime":{"type":"timestamp"},"ImportedBy":{}}}}}},"GetClassifier":{"input":{"type":"structure","required":["Name"],"members":{"Name":{}}},"output":{"type":"structure","members":{"Classifier":{"shape":"Sj7"}}}},"GetClassifiers":{"input":{"type":"structure","members":{"MaxResults":{"type":"integer"},"NextToken":{}}},"output":{"type":"structure","members":{"Classifiers":{"type":"list","member":{"shape":"Sj7"}},"NextToken":{}}}},"GetColumnStatisticsForPartition":{"input":{"type":"structure","required":["DatabaseName","TableName","PartitionValues","ColumnNames"],"members":{"CatalogId":{},"DatabaseName":{},"TableName":{},"PartitionValues":{"shape":"S6"},"ColumnNames":{"shape":"Sjh"}}},"output":{"type":"structure","members":{"ColumnStatisticsList":{"shape":"Sjj"},"Errors":{"shape":"Sk1"}}}},"GetColumnStatisticsForTable":{"input":{"type":"structure","required":["DatabaseName","TableName","ColumnNames"],"members":{"CatalogId":{},"DatabaseName":{},"TableName":{},"ColumnNames":{"shape":"Sjh"}}},"output":{"type":"structure","members":{"ColumnStatisticsList":{"shape":"Sjj"},"Errors":{"shape":"Sk1"}}}},"GetColumnStatisticsTaskRun":{"input":{"type":"structure","required":["ColumnStatisticsTaskRunId"],"members":{"ColumnStatisticsTaskRunId":{}}},"output":{"type":"structure","members":{"ColumnStatisticsTaskRun":{"shape":"Sk7"}}}},"GetColumnStatisticsTaskRuns":{"input":{"type":"structure","required":["DatabaseName","TableName"],"members":{"DatabaseName":{},"TableName":{},"MaxResults":{"type":"integer"},"NextToken":{}}},"output":{"type":"structure","members":{"ColumnStatisticsTaskRuns":{"type":"list","member":{"shape":"Sk7"}},"NextToken":{}}}},"GetConnection":{"input":{"type":"structure","required":["Name"],"members":{"CatalogId":{},"Name":{},"HidePassword":{"type":"boolean"}}},"output":{"type":"structure","members":{"Connection":{"shape":"Ski"}}}},"GetConnections":{"input":{"type":"structure","members":{"CatalogId":{},"Filter":{"type":"structure","members":{"MatchCriteria":{"shape":"Sdv"},"ConnectionType":{}}},"HidePassword":{"type":"boolean"},"NextToken":{},"MaxResults":{"type":"integer"}}},"output":{"type":"structure","members":{"ConnectionList":{"type":"list","member":{"shape":"Ski"}},"NextToken":{}}}},"GetCrawler":{"input":{"type":"structure","required":["Name"],"members":{"Name":{}}},"output":{"type":"structure","members":{"Crawler":{"shape":"S29"}}}},"GetCrawlerMetrics":{"input":{"type":"structure","members":{"CrawlerNameList":{"shape":"S26"},"MaxResults":{"type":"integer"},"NextToken":{}}},"output":{"type":"structure","members":{"CrawlerMetricsList":{"type":"list","member":{"type":"structure","members":{"CrawlerName":{},"TimeLeftSeconds":{"type":"double"},"StillEstimating":{"type":"boolean"},"LastRuntimeSeconds":{"type":"double"},"MedianRuntimeSeconds":{"type":"double"},"TablesCreated":{"type":"integer"},"TablesUpdated":{"type":"integer"},"TablesDeleted":{"type":"integer"}}}},"NextToken":{}}}},"GetCrawlers":{"input":{"type":"structure","members":{"MaxResults":{"type":"integer"},"NextToken":{}}},"output":{"type":"structure","members":{"Crawlers":{"shape":"S28"},"NextToken":{}}}},"GetCustomEntityType":{"input":{"type":"structure","required":["Name"],"members":{"Name":{}}},"output":{"type":"structure","members":{"Name":{},"RegexString":{},"ContextWords":{"shape":"S3v"}}}},"GetDataCatalogEncryptionSettings":{"input":{"type":"structure","members":{"CatalogId":{}}},"output":{"type":"structure","members":{"DataCatalogEncryptionSettings":{"shape":"Skz"}}}},"GetDataQualityResult":{"input":{"type":"structure","required":["ResultId"],"members":{"ResultId":{}}},"output":{"type":"structure","members":{"ResultId":{},"Score":{"type":"double"},"DataSource":{"shape":"S43"},"RulesetName":{},"EvaluationContext":{},"StartedOn":{"type":"timestamp"},"CompletedOn":{"type":"timestamp"},"JobName":{},"JobRunId":{},"RulesetEvaluationRunId":{},"RuleResults":{"shape":"S46"},"AnalyzerResults":{"shape":"S4b"},"Observations":{"shape":"S4d"}}}},"GetDataQualityRuleRecommendationRun":{"input":{"type":"structure","required":["RunId"],"members":{"RunId":{}}},"output":{"type":"structure","members":{"RunId":{},"DataSource":{"shape":"S43"},"Role":{},"NumberOfWorkers":{"type":"integer"},"Timeout":{"type":"integer"},"Status":{},"ErrorString":{},"StartedOn":{"type":"timestamp"},"LastModifiedOn":{"type":"timestamp"},"CompletedOn":{"type":"timestamp"},"ExecutionTime":{"type":"integer"},"RecommendedRuleset":{},"CreatedRulesetName":{}}}},"GetDataQualityRuleset":{"input":{"type":"structure","required":["Name"],"members":{"Name":{}}},"output":{"type":"structure","members":{"Name":{},"Description":{},"Ruleset":{},"TargetTable":{"shape":"Se7"},"CreatedOn":{"type":"timestamp"},"LastModifiedOn":{"type":"timestamp"},"RecommendationRunId":{}}}},"GetDataQualityRulesetEvaluationRun":{"input":{"type":"structure","required":["RunId"],"members":{"RunId":{}}},"output":{"type":"structure","members":{"RunId":{},"DataSource":{"shape":"S43"},"Role":{},"NumberOfWorkers":{"type":"integer"},"Timeout":{"type":"integer"},"AdditionalRunOptions":{"shape":"Slc"},"Status":{},"ErrorString":{},"StartedOn":{"type":"timestamp"},"LastModifiedOn":{"type":"timestamp"},"CompletedOn":{"type":"timestamp"},"ExecutionTime":{"type":"integer"},"RulesetNames":{"shape":"Sld"},"ResultIds":{"type":"list","member":{}},"AdditionalDataSources":{"shape":"Slf"}}}},"GetDatabase":{"input":{"type":"structure","required":["Name"],"members":{"CatalogId":{},"Name":{}}},"output":{"type":"structure","members":{"Database":{"shape":"Sli"}}}},"GetDatabases":{"input":{"type":"structure","members":{"CatalogId":{},"NextToken":{},"MaxResults":{"type":"integer"},"ResourceShareType":{}}},"output":{"type":"structure","required":["DatabaseList"],"members":{"DatabaseList":{"type":"list","member":{"shape":"Sli"}},"NextToken":{}}}},"GetDataflowGraph":{"input":{"type":"structure","members":{"PythonScript":{}}},"output":{"type":"structure","members":{"DagNodes":{"shape":"Sfg"},"DagEdges":{"shape":"Sfo"}}}},"GetDevEndpoint":{"input":{"type":"structure","required":["EndpointName"],"members":{"EndpointName":{}}},"output":{"type":"structure","members":{"DevEndpoint":{"shape":"S4n"}}}},"GetDevEndpoints":{"input":{"type":"structure","members":{"MaxResults":{"type":"integer"},"NextToken":{}}},"output":{"type":"structure","members":{"DevEndpoints":{"shape":"S4m"},"NextToken":{}}}},"GetJob":{"input":{"type":"structure","required":["JobName"],"members":{"JobName":{}}},"output":{"type":"structure","members":{"Job":{"shape":"S4z"}}}},"GetJobBookmark":{"input":{"type":"structure","required":["JobName"],"members":{"JobName":{},"RunId":{}}},"output":{"type":"structure","members":{"JobBookmarkEntry":{"shape":"Sm0"}}}},"GetJobRun":{"input":{"type":"structure","required":["JobName","RunId"],"members":{"JobName":{},"RunId":{},"PredecessorsIncluded":{"type":"boolean"}}},"output":{"type":"structure","members":{"JobRun":{"shape":"Sc0"}}}},"GetJobRuns":{"input":{"type":"structure","required":["JobName"],"members":{"JobName":{},"NextToken":{},"MaxResults":{"type":"integer"}}},"output":{"type":"structure","members":{"JobRuns":{"shape":"Sbz"},"NextToken":{}}}},"GetJobs":{"input":{"type":"structure","members":{"NextToken":{},"MaxResults":{"type":"integer"}}},"output":{"type":"structure","members":{"Jobs":{"shape":"S4y"},"NextToken":{}}}},"GetMLTaskRun":{"input":{"type":"structure","required":["TransformId","TaskRunId"],"members":{"TransformId":{},"TaskRunId":{}}},"output":{"type":"structure","members":{"TransformId":{},"TaskRunId":{},"Status":{},"LogGroupName":{},"Properties":{"shape":"Smb"},"ErrorString":{},"StartedOn":{"type":"timestamp"},"LastModifiedOn":{"type":"timestamp"},"CompletedOn":{"type":"timestamp"},"ExecutionTime":{"type":"integer"}}}},"GetMLTaskRuns":{"input":{"type":"structure","required":["TransformId"],"members":{"TransformId":{},"NextToken":{},"MaxResults":{"type":"integer"},"Filter":{"type":"structure","members":{"TaskRunType":{},"Status":{},"StartedBefore":{"type":"timestamp"},"StartedAfter":{"type":"timestamp"}}},"Sort":{"type":"structure","required":["Column","SortDirection"],"members":{"Column":{},"SortDirection":{}}}}},"output":{"type":"structure","members":{"TaskRuns":{"type":"list","member":{"type":"structure","members":{"TransformId":{},"TaskRunId":{},"Status":{},"LogGroupName":{},"Properties":{"shape":"Smb"},"ErrorString":{},"StartedOn":{"type":"timestamp"},"LastModifiedOn":{"type":"timestamp"},"CompletedOn":{"type":"timestamp"},"ExecutionTime":{"type":"integer"}}}},"NextToken":{}}}},"GetMLTransform":{"input":{"type":"structure","required":["TransformId"],"members":{"TransformId":{}}},"output":{"type":"structure","members":{"TransformId":{},"Name":{},"Description":{},"Status":{},"CreatedOn":{"type":"timestamp"},"LastModifiedOn":{"type":"timestamp"},"InputRecordTables":{"shape":"Ser"},"Parameters":{"shape":"Ses"},"EvaluationMetrics":{"shape":"Smu"},"LabelCount":{"type":"integer"},"Schema":{"shape":"Sn1"},"Role":{},"GlueVersion":{},"MaxCapacity":{"type":"double"},"WorkerType":{},"NumberOfWorkers":{"type":"integer"},"Timeout":{"type":"integer"},"MaxRetries":{"type":"integer"},"TransformEncryption":{"shape":"Sew"}}}},"GetMLTransforms":{"input":{"type":"structure","members":{"NextToken":{},"MaxResults":{"type":"integer"},"Filter":{"shape":"Sn4"},"Sort":{"shape":"Sn5"}}},"output":{"type":"structure","required":["Transforms"],"members":{"Transforms":{"type":"list","member":{"type":"structure","members":{"TransformId":{},"Name":{},"Description":{},"Status":{},"CreatedOn":{"type":"timestamp"},"LastModifiedOn":{"type":"timestamp"},"InputRecordTables":{"shape":"Ser"},"Parameters":{"shape":"Ses"},"EvaluationMetrics":{"shape":"Smu"},"LabelCount":{"type":"integer"},"Schema":{"shape":"Sn1"},"Role":{},"GlueVersion":{},"MaxCapacity":{"type":"double"},"WorkerType":{},"NumberOfWorkers":{"type":"integer"},"Timeout":{"type":"integer"},"MaxRetries":{"type":"integer"},"TransformEncryption":{"shape":"Sew"}}}},"NextToken":{}}}},"GetMapping":{"input":{"type":"structure","required":["Source"],"members":{"Source":{"shape":"Snb"},"Sinks":{"shape":"Snc"},"Location":{"shape":"Snd"}}},"output":{"type":"structure","required":["Mapping"],"members":{"Mapping":{"shape":"Snf"}}}},"GetPartition":{"input":{"type":"structure","required":["DatabaseName","TableName","PartitionValues"],"members":{"CatalogId":{},"DatabaseName":{},"TableName":{},"PartitionValues":{"shape":"S6"}}},"output":{"type":"structure","members":{"Partition":{"shape":"Sag"}}}},"GetPartitionIndexes":{"input":{"type":"structure","required":["DatabaseName","TableName"],"members":{"CatalogId":{},"DatabaseName":{},"TableName":{},"NextToken":{}}},"output":{"type":"structure","members":{"PartitionIndexDescriptorList":{"type":"list","member":{"type":"structure","required":["IndexName","Keys","IndexStatus"],"members":{"IndexName":{},"Keys":{"type":"list","member":{"type":"structure","required":["Name","Type"],"members":{"Name":{},"Type":{}}}},"IndexStatus":{},"BackfillErrors":{"type":"list","member":{"type":"structure","members":{"Code":{},"Partitions":{"type":"list","member":{"shape":"S1c"}}}}}}}},"NextToken":{}}}},"GetPartitions":{"input":{"type":"structure","required":["DatabaseName","TableName"],"members":{"CatalogId":{},"DatabaseName":{},"TableName":{},"Expression":{},"NextToken":{},"Segment":{"shape":"Sny"},"MaxResults":{"type":"integer"},"ExcludeColumnSchema":{"type":"boolean"},"TransactionId":{},"QueryAsOfTime":{"type":"timestamp"}}},"output":{"type":"structure","members":{"Partitions":{"shape":"Saf"},"NextToken":{}}}},"GetPlan":{"input":{"type":"structure","required":["Mapping","Source"],"members":{"Mapping":{"shape":"Snf"},"Source":{"shape":"Snb"},"Sinks":{"shape":"Snc"},"Location":{"shape":"Snd"},"Language":{},"AdditionalPlanOptionsMap":{"type":"map","key":{},"value":{}}}},"output":{"type":"structure","members":{"PythonScript":{},"ScalaCode":{}}}},"GetRegistry":{"input":{"type":"structure","required":["RegistryId"],"members":{"RegistryId":{"shape":"Sf9"}}},"output":{"type":"structure","members":{"RegistryName":{},"RegistryArn":{},"Description":{},"Status":{},"CreatedTime":{},"UpdatedTime":{}}}},"GetResourcePolicies":{"input":{"type":"structure","members":{"NextToken":{},"MaxResults":{"type":"integer"}}},"output":{"type":"structure","members":{"GetResourcePoliciesResponseList":{"type":"list","member":{"type":"structure","members":{"PolicyInJson":{},"PolicyHash":{},"CreateTime":{"type":"timestamp"},"UpdateTime":{"type":"timestamp"}}}},"NextToken":{}}}},"GetResourcePolicy":{"input":{"type":"structure","members":{"ResourceArn":{}}},"output":{"type":"structure","members":{"PolicyInJson":{},"PolicyHash":{},"CreateTime":{"type":"timestamp"},"UpdateTime":{"type":"timestamp"}}}},"GetSchema":{"input":{"type":"structure","required":["SchemaId"],"members":{"SchemaId":{"shape":"Sw"}}},"output":{"type":"structure","members":{"RegistryName":{},"RegistryArn":{},"SchemaName":{},"SchemaArn":{},"Description":{},"DataFormat":{},"Compatibility":{},"SchemaCheckpoint":{"type":"long"},"LatestSchemaVersion":{"type":"long"},"NextSchemaVersion":{"type":"long"},"SchemaStatus":{},"CreatedTime":{},"UpdatedTime":{}}}},"GetSchemaByDefinition":{"input":{"type":"structure","required":["SchemaId","SchemaDefinition"],"members":{"SchemaId":{"shape":"Sw"},"SchemaDefinition":{}}},"output":{"type":"structure","members":{"SchemaVersionId":{},"SchemaArn":{},"DataFormat":{},"Status":{},"CreatedTime":{}}}},"GetSchemaVersion":{"input":{"type":"structure","members":{"SchemaId":{"shape":"Sw"},"SchemaVersionId":{},"SchemaVersionNumber":{"shape":"Sol"}}},"output":{"type":"structure","members":{"SchemaVersionId":{},"SchemaDefinition":{},"DataFormat":{},"SchemaArn":{},"VersionNumber":{"type":"long"},"Status":{},"CreatedTime":{}}}},"GetSchemaVersionsDiff":{"input":{"type":"structure","required":["SchemaId","FirstSchemaVersionNumber","SecondSchemaVersionNumber","SchemaDiffType"],"members":{"SchemaId":{"shape":"Sw"},"FirstSchemaVersionNumber":{"shape":"Sol"},"SecondSchemaVersionNumber":{"shape":"Sol"},"SchemaDiffType":{}}},"output":{"type":"structure","members":{"Diff":{}}}},"GetSecurityConfiguration":{"input":{"type":"structure","required":["Name"],"members":{"Name":{}}},"output":{"type":"structure","members":{"SecurityConfiguration":{"shape":"Sou"}}}},"GetSecurityConfigurations":{"input":{"type":"structure","members":{"MaxResults":{"type":"integer"},"NextToken":{}}},"output":{"type":"structure","members":{"SecurityConfigurations":{"type":"list","member":{"shape":"Sou"}},"NextToken":{}}}},"GetSession":{"input":{"type":"structure","required":["Id"],"members":{"Id":{},"RequestOrigin":{}}},"output":{"type":"structure","members":{"Session":{"shape":"Sgb"}}}},"GetStatement":{"input":{"type":"structure","required":["SessionId","Id"],"members":{"SessionId":{},"Id":{"type":"integer"},"RequestOrigin":{}}},"output":{"type":"structure","members":{"Statement":{"shape":"Sp2"}}}},"GetTable":{"input":{"type":"structure","required":["DatabaseName","Name"],"members":{"CatalogId":{},"DatabaseName":{},"Name":{},"TransactionId":{},"QueryAsOfTime":{"type":"timestamp"}}},"output":{"type":"structure","members":{"Table":{"shape":"Sp9"}}}},"GetTableOptimizer":{"input":{"type":"structure","required":["CatalogId","DatabaseName","TableName","Type"],"members":{"CatalogId":{},"DatabaseName":{},"TableName":{},"Type":{}}},"output":{"type":"structure","members":{"CatalogId":{},"DatabaseName":{},"TableName":{},"TableOptimizer":{"shape":"Saq"}}}},"GetTableVersion":{"input":{"type":"structure","required":["DatabaseName","TableName"],"members":{"CatalogId":{},"DatabaseName":{},"TableName":{},"VersionId":{}}},"output":{"type":"structure","members":{"TableVersion":{"shape":"Spf"}}}},"GetTableVersions":{"input":{"type":"structure","required":["DatabaseName","TableName"],"members":{"CatalogId":{},"DatabaseName":{},"TableName":{},"NextToken":{},"MaxResults":{"type":"integer"}}},"output":{"type":"structure","members":{"TableVersions":{"type":"list","member":{"shape":"Spf"}},"NextToken":{}}}},"GetTables":{"input":{"type":"structure","required":["DatabaseName"],"members":{"CatalogId":{},"DatabaseName":{},"Expression":{},"NextToken":{},"MaxResults":{"type":"integer"},"TransactionId":{},"QueryAsOfTime":{"type":"timestamp"}}},"output":{"type":"structure","members":{"TableList":{"shape":"Spm"},"NextToken":{}}}},"GetTags":{"input":{"type":"structure","required":["ResourceArn"],"members":{"ResourceArn":{}}},"output":{"type":"structure","members":{"Tags":{"shape":"Sd7"}}}},"GetTrigger":{"input":{"type":"structure","required":["Name"],"members":{"Name":{}}},"output":{"type":"structure","members":{"Trigger":{"shape":"Sb4"}}}},"GetTriggers":{"input":{"type":"structure","members":{"NextToken":{},"DependentJobName":{},"MaxResults":{"type":"integer"}}},"output":{"type":"structure","members":{"Triggers":{"shape":"Sb3"},"NextToken":{}}}},"GetUnfilteredPartitionMetadata":{"input":{"type":"structure","required":["CatalogId","DatabaseName","TableName","PartitionValues","SupportedPermissionTypes"],"members":{"Region":{},"CatalogId":{},"DatabaseName":{},"TableName":{},"PartitionValues":{"shape":"S6"},"AuditContext":{"shape":"Spu"},"SupportedPermissionTypes":{"shape":"Spx"},"QuerySessionContext":{"shape":"Spz"}}},"output":{"type":"structure","members":{"Partition":{"shape":"Sag"},"AuthorizedColumns":{"shape":"Sn"},"IsRegisteredWithLakeFormation":{"type":"boolean"}}}},"GetUnfilteredPartitionsMetadata":{"input":{"type":"structure","required":["CatalogId","DatabaseName","TableName","SupportedPermissionTypes"],"members":{"Region":{},"CatalogId":{},"DatabaseName":{},"TableName":{},"Expression":{},"AuditContext":{"shape":"Spu"},"SupportedPermissionTypes":{"shape":"Spx"},"NextToken":{},"Segment":{"shape":"Sny"},"MaxResults":{"type":"integer"},"QuerySessionContext":{"shape":"Spz"}}},"output":{"type":"structure","members":{"UnfilteredPartitions":{"type":"list","member":{"type":"structure","members":{"Partition":{"shape":"Sag"},"AuthorizedColumns":{"shape":"Sn"},"IsRegisteredWithLakeFormation":{"type":"boolean"}}}},"NextToken":{}}}},"GetUnfilteredTableMetadata":{"input":{"type":"structure","required":["CatalogId","DatabaseName","Name","SupportedPermissionTypes"],"members":{"Region":{},"CatalogId":{},"DatabaseName":{},"Name":{},"AuditContext":{"shape":"Spu"},"SupportedPermissionTypes":{"shape":"Spx"},"SupportedDialect":{"type":"structure","members":{"Dialect":{},"DialectVersion":{}}},"Permissions":{"shape":"Seg"},"QuerySessionContext":{"shape":"Spz"}}},"output":{"type":"structure","members":{"Table":{"shape":"Sp9"},"AuthorizedColumns":{"shape":"Sn"},"IsRegisteredWithLakeFormation":{"type":"boolean"},"CellFilters":{"type":"list","member":{"type":"structure","members":{"ColumnName":{},"RowFilterExpression":{}}}},"QueryAuthorizationId":{},"ResourceArn":{},"Permissions":{"shape":"Seg"}}}},"GetUserDefinedFunction":{"input":{"type":"structure","required":["DatabaseName","FunctionName"],"members":{"CatalogId":{},"DatabaseName":{},"FunctionName":{}}},"output":{"type":"structure","members":{"UserDefinedFunction":{"shape":"Sqi"}}}},"GetUserDefinedFunctions":{"input":{"type":"structure","required":["Pattern"],"members":{"CatalogId":{},"DatabaseName":{},"Pattern":{},"NextToken":{},"MaxResults":{"type":"integer"}}},"output":{"type":"structure","members":{"UserDefinedFunctions":{"type":"list","member":{"shape":"Sqi"}},"NextToken":{}}}},"GetWorkflow":{"input":{"type":"structure","required":["Name"],"members":{"Name":{},"IncludeGraph":{"type":"boolean"}}},"output":{"type":"structure","members":{"Workflow":{"shape":"Sbo"}}}},"GetWorkflowRun":{"input":{"type":"structure","required":["Name","RunId"],"members":{"Name":{},"RunId":{},"IncludeGraph":{"type":"boolean"}}},"output":{"type":"structure","members":{"Run":{"shape":"Sbq"}}}},"GetWorkflowRunProperties":{"input":{"type":"structure","required":["Name","RunId"],"members":{"Name":{},"RunId":{}}},"output":{"type":"structure","members":{"RunProperties":{"shape":"Sbp"}}}},"GetWorkflowRuns":{"input":{"type":"structure","required":["Name"],"members":{"Name":{},"IncludeGraph":{"type":"boolean"},"NextToken":{},"MaxResults":{"type":"integer"}}},"output":{"type":"structure","members":{"Runs":{"type":"list","member":{"shape":"Sbq"}},"NextToken":{}}}},"ImportCatalogToGlue":{"input":{"type":"structure","members":{"CatalogId":{}}},"output":{"type":"structure","members":{}}},"ListBlueprints":{"input":{"type":"structure","members":{"NextToken":{},"MaxResults":{"type":"integer"},"Tags":{"shape":"Sd7"}}},"output":{"type":"structure","members":{"Blueprints":{"shape":"S24"},"NextToken":{}}}},"ListColumnStatisticsTaskRuns":{"input":{"type":"structure","members":{"MaxResults":{"type":"integer"},"NextToken":{}}},"output":{"type":"structure","members":{"ColumnStatisticsTaskRunIds":{"type":"list","member":{}},"NextToken":{}}}},"ListCrawlers":{"input":{"type":"structure","members":{"MaxResults":{"type":"integer"},"NextToken":{},"Tags":{"shape":"Sd7"}}},"output":{"type":"structure","members":{"CrawlerNames":{"shape":"S26"},"NextToken":{}}}},"ListCrawls":{"input":{"type":"structure","required":["CrawlerName"],"members":{"CrawlerName":{},"MaxResults":{"type":"integer"},"Filters":{"type":"list","member":{"type":"structure","members":{"FieldName":{},"FilterOperator":{},"FieldValue":{}}}},"NextToken":{}}},"output":{"type":"structure","members":{"Crawls":{"type":"list","member":{"type":"structure","members":{"CrawlId":{},"State":{},"StartTime":{"type":"timestamp"},"EndTime":{"type":"timestamp"},"Summary":{},"ErrorMessage":{},"LogGroup":{},"LogStream":{},"MessagePrefix":{},"DPUHour":{"type":"double"}}}},"NextToken":{}}}},"ListCustomEntityTypes":{"input":{"type":"structure","members":{"NextToken":{},"MaxResults":{"type":"integer"},"Tags":{"shape":"Sd7"}}},"output":{"type":"structure","members":{"CustomEntityTypes":{"shape":"S3t"},"NextToken":{}}}},"ListDataQualityResults":{"input":{"type":"structure","members":{"Filter":{"type":"structure","members":{"DataSource":{"shape":"S43"},"JobName":{},"JobRunId":{},"StartedAfter":{"type":"timestamp"},"StartedBefore":{"type":"timestamp"}}},"NextToken":{},"MaxResults":{"type":"integer"}}},"output":{"type":"structure","required":["Results"],"members":{"Results":{"type":"list","member":{"type":"structure","members":{"ResultId":{},"DataSource":{"shape":"S43"},"JobName":{},"JobRunId":{},"StartedOn":{"type":"timestamp"}}}},"NextToken":{}}}},"ListDataQualityRuleRecommendationRuns":{"input":{"type":"structure","members":{"Filter":{"type":"structure","required":["DataSource"],"members":{"DataSource":{"shape":"S43"},"StartedBefore":{"type":"timestamp"},"StartedAfter":{"type":"timestamp"}}},"NextToken":{},"MaxResults":{"type":"integer"}}},"output":{"type":"structure","members":{"Runs":{"type":"list","member":{"type":"structure","members":{"RunId":{},"Status":{},"StartedOn":{"type":"timestamp"},"DataSource":{"shape":"S43"}}}},"NextToken":{}}}},"ListDataQualityRulesetEvaluationRuns":{"input":{"type":"structure","members":{"Filter":{"type":"structure","required":["DataSource"],"members":{"DataSource":{"shape":"S43"},"StartedBefore":{"type":"timestamp"},"StartedAfter":{"type":"timestamp"}}},"NextToken":{},"MaxResults":{"type":"integer"}}},"output":{"type":"structure","members":{"Runs":{"type":"list","member":{"type":"structure","members":{"RunId":{},"Status":{},"StartedOn":{"type":"timestamp"},"DataSource":{"shape":"S43"}}}},"NextToken":{}}}},"ListDataQualityRulesets":{"input":{"type":"structure","members":{"NextToken":{},"MaxResults":{"type":"integer"},"Filter":{"type":"structure","members":{"Name":{},"Description":{},"CreatedBefore":{"type":"timestamp"},"CreatedAfter":{"type":"timestamp"},"LastModifiedBefore":{"type":"timestamp"},"LastModifiedAfter":{"type":"timestamp"},"TargetTable":{"shape":"Se7"}}},"Tags":{"shape":"Sd7"}}},"output":{"type":"structure","members":{"Rulesets":{"type":"list","member":{"type":"structure","members":{"Name":{},"Description":{},"CreatedOn":{"type":"timestamp"},"LastModifiedOn":{"type":"timestamp"},"TargetTable":{"shape":"Se7"},"RecommendationRunId":{},"RuleCount":{"type":"integer"}}}},"NextToken":{}}}},"ListDevEndpoints":{"input":{"type":"structure","members":{"NextToken":{},"MaxResults":{"type":"integer"},"Tags":{"shape":"Sd7"}}},"output":{"type":"structure","members":{"DevEndpointNames":{"type":"list","member":{}},"NextToken":{}}}},"ListJobs":{"input":{"type":"structure","members":{"NextToken":{},"MaxResults":{"type":"integer"},"Tags":{"shape":"Sd7"}}},"output":{"type":"structure","members":{"JobNames":{"shape":"S4w"},"NextToken":{}}}},"ListMLTransforms":{"input":{"type":"structure","members":{"NextToken":{},"MaxResults":{"type":"integer"},"Filter":{"shape":"Sn4"},"Sort":{"shape":"Sn5"},"Tags":{"shape":"Sd7"}}},"output":{"type":"structure","required":["TransformIds"],"members":{"TransformIds":{"type":"list","member":{}},"NextToken":{}}}},"ListRegistries":{"input":{"type":"structure","members":{"MaxResults":{"type":"integer"},"NextToken":{}}},"output":{"type":"structure","members":{"Registries":{"type":"list","member":{"type":"structure","members":{"RegistryName":{},"RegistryArn":{},"Description":{},"Status":{},"CreatedTime":{},"UpdatedTime":{}}}},"NextToken":{}}}},"ListSchemaVersions":{"input":{"type":"structure","required":["SchemaId"],"members":{"SchemaId":{"shape":"Sw"},"MaxResults":{"type":"integer"},"NextToken":{}}},"output":{"type":"structure","members":{"Schemas":{"type":"list","member":{"type":"structure","members":{"SchemaArn":{},"SchemaVersionId":{},"VersionNumber":{"type":"long"},"Status":{},"CreatedTime":{}}}},"NextToken":{}}}},"ListSchemas":{"input":{"type":"structure","members":{"RegistryId":{"shape":"Sf9"},"MaxResults":{"type":"integer"},"NextToken":{}}},"output":{"type":"structure","members":{"Schemas":{"type":"list","member":{"type":"structure","members":{"RegistryName":{},"SchemaName":{},"SchemaArn":{},"Description":{},"SchemaStatus":{},"CreatedTime":{},"UpdatedTime":{}}}},"NextToken":{}}}},"ListSessions":{"input":{"type":"structure","members":{"NextToken":{},"MaxResults":{"type":"integer"},"Tags":{"shape":"Sd7"},"RequestOrigin":{}}},"output":{"type":"structure","members":{"Ids":{"type":"list","member":{}},"Sessions":{"type":"list","member":{"shape":"Sgb"}},"NextToken":{}}}},"ListStatements":{"input":{"type":"structure","required":["SessionId"],"members":{"SessionId":{},"RequestOrigin":{},"NextToken":{}}},"output":{"type":"structure","members":{"Statements":{"type":"list","member":{"shape":"Sp2"}},"NextToken":{}}}},"ListTableOptimizerRuns":{"input":{"type":"structure","required":["CatalogId","DatabaseName","TableName","Type"],"members":{"CatalogId":{},"DatabaseName":{},"TableName":{},"Type":{},"MaxResults":{"type":"integer"},"NextToken":{}}},"output":{"type":"structure","members":{"CatalogId":{},"DatabaseName":{},"TableName":{},"NextToken":{},"TableOptimizerRuns":{"type":"list","member":{"shape":"Sat"}}}}},"ListTriggers":{"input":{"type":"structure","members":{"NextToken":{},"DependentJobName":{},"MaxResults":{"type":"integer"},"Tags":{"shape":"Sd7"}}},"output":{"type":"structure","members":{"TriggerNames":{"shape":"Sb1"},"NextToken":{}}}},"ListWorkflows":{"input":{"type":"structure","members":{"NextToken":{},"MaxResults":{"type":"integer"}}},"output":{"type":"structure","members":{"Workflows":{"shape":"Sbl"},"NextToken":{}}}},"PutDataCatalogEncryptionSettings":{"input":{"type":"structure","required":["DataCatalogEncryptionSettings"],"members":{"CatalogId":{},"DataCatalogEncryptionSettings":{"shape":"Skz"}}},"output":{"type":"structure","members":{}}},"PutResourcePolicy":{"input":{"type":"structure","required":["PolicyInJson"],"members":{"PolicyInJson":{},"ResourceArn":{},"PolicyHashCondition":{},"PolicyExistsCondition":{},"EnableHybrid":{}}},"output":{"type":"structure","members":{"PolicyHash":{}}}},"PutSchemaVersionMetadata":{"input":{"type":"structure","required":["MetadataKeyValue"],"members":{"SchemaId":{"shape":"Sw"},"SchemaVersionNumber":{"shape":"Sol"},"SchemaVersionId":{},"MetadataKeyValue":{"shape":"Stb"}}},"output":{"type":"structure","members":{"SchemaArn":{},"SchemaName":{},"RegistryName":{},"LatestVersion":{"type":"boolean"},"VersionNumber":{"type":"long"},"SchemaVersionId":{},"MetadataKey":{},"MetadataValue":{}}}},"PutWorkflowRunProperties":{"input":{"type":"structure","required":["Name","RunId","RunProperties"],"members":{"Name":{},"RunId":{},"RunProperties":{"shape":"Sbp"}}},"output":{"type":"structure","members":{}}},"QuerySchemaVersionMetadata":{"input":{"type":"structure","members":{"SchemaId":{"shape":"Sw"},"SchemaVersionNumber":{"shape":"Sol"},"SchemaVersionId":{},"MetadataList":{"type":"list","member":{"shape":"Stb"}},"MaxResults":{"type":"integer"},"NextToken":{}}},"output":{"type":"structure","members":{"MetadataInfoMap":{"type":"map","key":{},"value":{"type":"structure","members":{"MetadataValue":{},"CreatedTime":{},"OtherMetadataValueList":{"type":"list","member":{"type":"structure","members":{"MetadataValue":{},"CreatedTime":{}}}}}}},"SchemaVersionId":{},"NextToken":{}}}},"RegisterSchemaVersion":{"input":{"type":"structure","required":["SchemaId","SchemaDefinition"],"members":{"SchemaId":{"shape":"Sw"},"SchemaDefinition":{}}},"output":{"type":"structure","members":{"SchemaVersionId":{},"VersionNumber":{"type":"long"},"Status":{}}}},"RemoveSchemaVersionMetadata":{"input":{"type":"structure","required":["MetadataKeyValue"],"members":{"SchemaId":{"shape":"Sw"},"SchemaVersionNumber":{"shape":"Sol"},"SchemaVersionId":{},"MetadataKeyValue":{"shape":"Stb"}}},"output":{"type":"structure","members":{"SchemaArn":{},"SchemaName":{},"RegistryName":{},"LatestVersion":{"type":"boolean"},"VersionNumber":{"type":"long"},"SchemaVersionId":{},"MetadataKey":{},"MetadataValue":{}}}},"ResetJobBookmark":{"input":{"type":"structure","required":["JobName"],"members":{"JobName":{},"RunId":{}}},"output":{"type":"structure","members":{"JobBookmarkEntry":{"shape":"Sm0"}}}},"ResumeWorkflowRun":{"input":{"type":"structure","required":["Name","RunId","NodeIds"],"members":{"Name":{},"RunId":{},"NodeIds":{"shape":"Stw"}}},"output":{"type":"structure","members":{"RunId":{},"NodeIds":{"shape":"Stw"}}}},"RunStatement":{"input":{"type":"structure","required":["SessionId","Code"],"members":{"SessionId":{},"Code":{},"RequestOrigin":{}}},"output":{"type":"structure","members":{"Id":{"type":"integer"}}}},"SearchTables":{"input":{"type":"structure","members":{"CatalogId":{},"NextToken":{},"Filters":{"type":"list","member":{"type":"structure","members":{"Key":{},"Value":{},"Comparator":{}}}},"SearchText":{},"SortCriteria":{"type":"list","member":{"type":"structure","members":{"FieldName":{},"Sort":{}}}},"MaxResults":{"type":"integer"},"ResourceShareType":{}}},"output":{"type":"structure","members":{"NextToken":{},"TableList":{"shape":"Spm"}}}},"StartBlueprintRun":{"input":{"type":"structure","required":["BlueprintName","RoleArn"],"members":{"BlueprintName":{},"Parameters":{},"RoleArn":{}}},"output":{"type":"structure","members":{"RunId":{}}}},"StartColumnStatisticsTaskRun":{"input":{"type":"structure","required":["DatabaseName","TableName","Role"],"members":{"DatabaseName":{},"TableName":{},"ColumnNameList":{"shape":"Sk9"},"Role":{},"SampleSize":{"type":"double"},"CatalogID":{},"SecurityConfiguration":{}}},"output":{"type":"structure","members":{"ColumnStatisticsTaskRunId":{}}}},"StartCrawler":{"input":{"type":"structure","required":["Name"],"members":{"Name":{}}},"output":{"type":"structure","members":{}}},"StartCrawlerSchedule":{"input":{"type":"structure","required":["CrawlerName"],"members":{"CrawlerName":{}}},"output":{"type":"structure","members":{}}},"StartDataQualityRuleRecommendationRun":{"input":{"type":"structure","required":["DataSource","Role"],"members":{"DataSource":{"shape":"S43"},"Role":{},"NumberOfWorkers":{"type":"integer"},"Timeout":{"type":"integer"},"CreatedRulesetName":{},"ClientToken":{}}},"output":{"type":"structure","members":{"RunId":{}}},"idempotent":true},"StartDataQualityRulesetEvaluationRun":{"input":{"type":"structure","required":["DataSource","Role","RulesetNames"],"members":{"DataSource":{"shape":"S43"},"Role":{},"NumberOfWorkers":{"type":"integer"},"Timeout":{"type":"integer"},"ClientToken":{},"AdditionalRunOptions":{"shape":"Slc"},"RulesetNames":{"shape":"Sld"},"AdditionalDataSources":{"shape":"Slf"}}},"output":{"type":"structure","members":{"RunId":{}}},"idempotent":true},"StartExportLabelsTaskRun":{"input":{"type":"structure","required":["TransformId","OutputS3Path"],"members":{"TransformId":{},"OutputS3Path":{}}},"output":{"type":"structure","members":{"TaskRunId":{}}}},"StartImportLabelsTaskRun":{"input":{"type":"structure","required":["TransformId","InputS3Path"],"members":{"TransformId":{},"InputS3Path":{},"ReplaceAllLabels":{"type":"boolean"}}},"output":{"type":"structure","members":{"TaskRunId":{}}}},"StartJobRun":{"input":{"type":"structure","required":["JobName"],"members":{"JobName":{},"JobRunId":{},"Arguments":{"shape":"S58"},"AllocatedCapacity":{"deprecated":true,"deprecatedMessage":"This property is deprecated, use MaxCapacity instead.","type":"integer"},"Timeout":{"type":"integer"},"MaxCapacity":{"type":"double"},"SecurityConfiguration":{},"NotificationProperty":{"shape":"S5d"},"WorkerType":{},"NumberOfWorkers":{"type":"integer"},"ExecutionClass":{}}},"output":{"type":"structure","members":{"JobRunId":{}}}},"StartMLEvaluationTaskRun":{"input":{"type":"structure","required":["TransformId"],"members":{"TransformId":{}}},"output":{"type":"structure","members":{"TaskRunId":{}}}},"StartMLLabelingSetGenerationTaskRun":{"input":{"type":"structure","required":["TransformId","OutputS3Path"],"members":{"TransformId":{},"OutputS3Path":{}}},"output":{"type":"structure","members":{"TaskRunId":{}}}},"StartTrigger":{"input":{"type":"structure","required":["Name"],"members":{"Name":{}}},"output":{"type":"structure","members":{"Name":{}}}},"StartWorkflowRun":{"input":{"type":"structure","required":["Name"],"members":{"Name":{},"RunProperties":{"shape":"Sbp"}}},"output":{"type":"structure","members":{"RunId":{}}}},"StopColumnStatisticsTaskRun":{"input":{"type":"structure","required":["DatabaseName","TableName"],"members":{"DatabaseName":{},"TableName":{}}},"output":{"type":"structure","members":{}}},"StopCrawler":{"input":{"type":"structure","required":["Name"],"members":{"Name":{}}},"output":{"type":"structure","members":{}}},"StopCrawlerSchedule":{"input":{"type":"structure","required":["CrawlerName"],"members":{"CrawlerName":{}}},"output":{"type":"structure","members":{}}},"StopSession":{"input":{"type":"structure","required":["Id"],"members":{"Id":{},"RequestOrigin":{}}},"output":{"type":"structure","members":{"Id":{}}}},"StopTrigger":{"input":{"type":"structure","required":["Name"],"members":{"Name":{}}},"output":{"type":"structure","members":{"Name":{}}}},"StopWorkflowRun":{"input":{"type":"structure","required":["Name","RunId"],"members":{"Name":{},"RunId":{}}},"output":{"type":"structure","members":{}}},"TagResource":{"input":{"type":"structure","required":["ResourceArn","TagsToAdd"],"members":{"ResourceArn":{},"TagsToAdd":{"shape":"Sd7"}}},"output":{"type":"structure","members":{}}},"UntagResource":{"input":{"type":"structure","required":["ResourceArn","TagsToRemove"],"members":{"ResourceArn":{},"TagsToRemove":{"type":"list","member":{}}}},"output":{"type":"structure","members":{}}},"UpdateBlueprint":{"input":{"type":"structure","required":["Name","BlueprintLocation"],"members":{"Name":{},"Description":{},"BlueprintLocation":{}}},"output":{"type":"structure","members":{"Name":{}}}},"UpdateClassifier":{"input":{"type":"structure","members":{"GrokClassifier":{"type":"structure","required":["Name"],"members":{"Name":{},"Classification":{},"GrokPattern":{},"CustomPatterns":{}}},"XMLClassifier":{"type":"structure","required":["Name"],"members":{"Name":{},"Classification":{},"RowTag":{}}},"JsonClassifier":{"type":"structure","required":["Name"],"members":{"Name":{},"JsonPath":{}}},"CsvClassifier":{"type":"structure","required":["Name"],"members":{"Name":{},"Delimiter":{},"QuoteSymbol":{},"ContainsHeader":{},"Header":{"shape":"Sdo"},"DisableValueTrimming":{"type":"boolean"},"AllowSingleColumn":{"type":"boolean"},"CustomDatatypeConfigured":{"type":"boolean"},"CustomDatatypes":{"shape":"Sdp"},"Serde":{}}}}},"output":{"type":"structure","members":{}}},"UpdateColumnStatisticsForPartition":{"input":{"type":"structure","required":["DatabaseName","TableName","PartitionValues","ColumnStatisticsList"],"members":{"CatalogId":{},"DatabaseName":{},"TableName":{},"PartitionValues":{"shape":"S6"},"ColumnStatisticsList":{"shape":"Svp"}}},"output":{"type":"structure","members":{"Errors":{"shape":"Svr"}}}},"UpdateColumnStatisticsForTable":{"input":{"type":"structure","required":["DatabaseName","TableName","ColumnStatisticsList"],"members":{"CatalogId":{},"DatabaseName":{},"TableName":{},"ColumnStatisticsList":{"shape":"Svp"}}},"output":{"type":"structure","members":{"Errors":{"shape":"Svr"}}}},"UpdateConnection":{"input":{"type":"structure","required":["Name","ConnectionInput"],"members":{"CatalogId":{},"Name":{},"ConnectionInput":{"shape":"Sdt"}}},"output":{"type":"structure","members":{}}},"UpdateCrawler":{"input":{"type":"structure","required":["Name"],"members":{"Name":{},"Role":{},"DatabaseName":{},"Description":{},"Targets":{"shape":"S2b"},"Schedule":{},"Classifiers":{"shape":"S32"},"TablePrefix":{},"SchemaChangePolicy":{"shape":"S35"},"RecrawlPolicy":{"shape":"S33"},"LineageConfiguration":{"shape":"S38"},"LakeFormationConfiguration":{"shape":"S3o"},"Configuration":{},"CrawlerSecurityConfiguration":{}}},"output":{"type":"structure","members":{}}},"UpdateCrawlerSchedule":{"input":{"type":"structure","required":["CrawlerName"],"members":{"CrawlerName":{},"Schedule":{}}},"output":{"type":"structure","members":{}}},"UpdateDataQualityRuleset":{"input":{"type":"structure","required":["Name"],"members":{"Name":{},"Description":{},"Ruleset":{}}},"output":{"type":"structure","members":{"Name":{},"Description":{},"Ruleset":{}}}},"UpdateDatabase":{"input":{"type":"structure","required":["Name","DatabaseInput"],"members":{"CatalogId":{},"Name":{},"DatabaseInput":{"shape":"Sea"}}},"output":{"type":"structure","members":{}}},"UpdateDevEndpoint":{"input":{"type":"structure","required":["EndpointName"],"members":{"EndpointName":{},"PublicKey":{},"AddPublicKeys":{"shape":"S4t"},"DeletePublicKeys":{"shape":"S4t"},"CustomLibraries":{"type":"structure","members":{"ExtraPythonLibsS3Path":{},"ExtraJarsS3Path":{}}},"UpdateEtlLibraries":{"type":"boolean"},"DeleteArguments":{"shape":"S4p"},"AddArguments":{"shape":"S4u"}}},"output":{"type":"structure","members":{}}},"UpdateJob":{"input":{"type":"structure","required":["JobName","JobUpdate"],"members":{"JobName":{},"JobUpdate":{"type":"structure","members":{"Description":{},"LogUri":{},"Role":{},"ExecutionProperty":{"shape":"S52"},"Command":{"shape":"S54"},"DefaultArguments":{"shape":"S58"},"NonOverridableArguments":{"shape":"S58"},"Connections":{"shape":"S59"},"MaxRetries":{"type":"integer"},"AllocatedCapacity":{"deprecated":true,"deprecatedMessage":"This property is deprecated, use MaxCapacity instead.","type":"integer"},"Timeout":{"type":"integer"},"MaxCapacity":{"type":"double"},"WorkerType":{},"NumberOfWorkers":{"type":"integer"},"SecurityConfiguration":{},"NotificationProperty":{"shape":"S5d"},"GlueVersion":{},"CodeGenConfigurationNodes":{"shape":"S5f"},"ExecutionClass":{},"SourceControlDetails":{"shape":"Sa9"}}}}},"output":{"type":"structure","members":{"JobName":{}}}},"UpdateJobFromSourceControl":{"input":{"type":"structure","members":{"JobName":{},"Provider":{},"RepositoryName":{},"RepositoryOwner":{},"BranchName":{},"Folder":{},"CommitId":{},"AuthStrategy":{},"AuthToken":{}}},"output":{"type":"structure","members":{"JobName":{}}}},"UpdateMLTransform":{"input":{"type":"structure","required":["TransformId"],"members":{"TransformId":{},"Name":{},"Description":{},"Parameters":{"shape":"Ses"},"Role":{},"GlueVersion":{},"MaxCapacity":{"type":"double"},"WorkerType":{},"NumberOfWorkers":{"type":"integer"},"Timeout":{"type":"integer"},"MaxRetries":{"type":"integer"}}},"output":{"type":"structure","members":{"TransformId":{}}}},"UpdatePartition":{"input":{"type":"structure","required":["DatabaseName","TableName","PartitionValueList","PartitionInput"],"members":{"CatalogId":{},"DatabaseName":{},"TableName":{},"PartitionValueList":{"shape":"Scm"},"PartitionInput":{"shape":"S5"}}},"output":{"type":"structure","members":{}}},"UpdateRegistry":{"input":{"type":"structure","required":["RegistryId","Description"],"members":{"RegistryId":{"shape":"Sf9"},"Description":{}}},"output":{"type":"structure","members":{"RegistryName":{},"RegistryArn":{}}}},"UpdateSchema":{"input":{"type":"structure","required":["SchemaId"],"members":{"SchemaId":{"shape":"Sw"},"SchemaVersionNumber":{"shape":"Sol"},"Compatibility":{},"Description":{}}},"output":{"type":"structure","members":{"SchemaArn":{},"SchemaName":{},"RegistryName":{}}}},"UpdateSourceControlFromJob":{"input":{"type":"structure","members":{"JobName":{},"Provider":{},"RepositoryName":{},"RepositoryOwner":{},"BranchName":{},"Folder":{},"CommitId":{},"AuthStrategy":{},"AuthToken":{}}},"output":{"type":"structure","members":{"JobName":{}}}},"UpdateTable":{"input":{"type":"structure","required":["DatabaseName","TableInput"],"members":{"CatalogId":{},"DatabaseName":{},"TableInput":{"shape":"Sgg"},"SkipArchive":{"type":"boolean"},"TransactionId":{},"VersionId":{}}},"output":{"type":"structure","members":{}}},"UpdateTableOptimizer":{"input":{"type":"structure","required":["CatalogId","DatabaseName","TableName","Type","TableOptimizerConfiguration"],"members":{"CatalogId":{},"DatabaseName":{},"TableName":{},"Type":{},"TableOptimizerConfiguration":{"shape":"Sar"}}},"output":{"type":"structure","members":{}}},"UpdateTrigger":{"input":{"type":"structure","required":["Name","TriggerUpdate"],"members":{"Name":{},"TriggerUpdate":{"type":"structure","members":{"Name":{},"Description":{},"Schedule":{},"Actions":{"shape":"Sb8"},"Predicate":{"shape":"Sba"},"EventBatchingCondition":{"shape":"Sbh"}}}}},"output":{"type":"structure","members":{"Trigger":{"shape":"Sb4"}}}},"UpdateUserDefinedFunction":{"input":{"type":"structure","required":["DatabaseName","FunctionName","FunctionInput"],"members":{"CatalogId":{},"DatabaseName":{},"FunctionName":{},"FunctionInput":{"shape":"Sgv"}}},"output":{"type":"structure","members":{}}},"UpdateWorkflow":{"input":{"type":"structure","required":["Name"],"members":{"Name":{},"Description":{},"DefaultRunProperties":{"shape":"Sbp"},"MaxConcurrentRuns":{"type":"integer"}}},"output":{"type":"structure","members":{"Name":{}}}}},"shapes":{"S5":{"type":"structure","members":{"Values":{"shape":"S6"},"LastAccessTime":{"type":"timestamp"},"StorageDescriptor":{"shape":"S9"},"Parameters":{"shape":"Se"},"LastAnalyzedTime":{"type":"timestamp"}}},"S6":{"type":"list","member":{}},"S9":{"type":"structure","members":{"Columns":{"shape":"Sa"},"Location":{},"AdditionalLocations":{"type":"list","member":{}},"InputFormat":{},"OutputFormat":{},"Compressed":{"type":"boolean"},"NumberOfBuckets":{"type":"integer"},"SerdeInfo":{"type":"structure","members":{"Name":{},"SerializationLibrary":{},"Parameters":{"shape":"Se"}}},"BucketColumns":{"shape":"Sn"},"SortColumns":{"type":"list","member":{"type":"structure","required":["Column","SortOrder"],"members":{"Column":{},"SortOrder":{"type":"integer"}}}},"Parameters":{"shape":"Se"},"SkewedInfo":{"type":"structure","members":{"SkewedColumnNames":{"shape":"Sn"},"SkewedColumnValues":{"type":"list","member":{}},"SkewedColumnValueLocationMaps":{"type":"map","key":{},"value":{}}}},"StoredAsSubDirectories":{"type":"boolean"},"SchemaReference":{"type":"structure","members":{"SchemaId":{"shape":"Sw"},"SchemaVersionId":{},"SchemaVersionNumber":{"type":"long"}}}}},"Sa":{"type":"list","member":{"type":"structure","required":["Name"],"members":{"Name":{},"Type":{},"Comment":{},"Parameters":{"shape":"Se"}}}},"Se":{"type":"map","key":{},"value":{}},"Sn":{"type":"list","member":{}},"Sw":{"type":"structure","members":{"SchemaArn":{},"SchemaName":{},"RegistryName":{}}},"S12":{"type":"list","member":{"type":"structure","members":{"PartitionValues":{"shape":"S6"},"ErrorDetail":{"shape":"S14"}}}},"S14":{"type":"structure","members":{"ErrorCode":{},"ErrorMessage":{}}},"S1c":{"type":"structure","required":["Values"],"members":{"Values":{"shape":"S6"}}},"S1w":{"type":"structure","members":{"Name":{},"Description":{},"CreatedOn":{"type":"timestamp"},"LastModifiedOn":{"type":"timestamp"},"ParameterSpec":{},"BlueprintLocation":{},"BlueprintServiceLocation":{},"Status":{},"ErrorMessage":{},"LastActiveDefinition":{"type":"structure","members":{"Description":{},"LastModifiedOn":{"type":"timestamp"},"ParameterSpec":{},"BlueprintLocation":{},"BlueprintServiceLocation":{}}}}},"S24":{"type":"list","member":{}},"S26":{"type":"list","member":{}},"S28":{"type":"list","member":{"shape":"S29"}},"S29":{"type":"structure","members":{"Name":{},"Role":{},"Targets":{"shape":"S2b"},"DatabaseName":{},"Description":{},"Classifiers":{"shape":"S32"},"RecrawlPolicy":{"shape":"S33"},"SchemaChangePolicy":{"shape":"S35"},"LineageConfiguration":{"shape":"S38"},"State":{},"TablePrefix":{},"Schedule":{"type":"structure","members":{"ScheduleExpression":{},"State":{}}},"CrawlElapsedTime":{"type":"long"},"CreationTime":{"type":"timestamp"},"LastUpdated":{"type":"timestamp"},"LastCrawl":{"type":"structure","members":{"Status":{},"ErrorMessage":{},"LogGroup":{},"LogStream":{},"MessagePrefix":{},"StartTime":{"type":"timestamp"}}},"Version":{"type":"long"},"Configuration":{},"CrawlerSecurityConfiguration":{},"LakeFormationConfiguration":{"shape":"S3o"}}},"S2b":{"type":"structure","members":{"S3Targets":{"type":"list","member":{"type":"structure","members":{"Path":{},"Exclusions":{"shape":"S2f"},"ConnectionName":{},"SampleSize":{"type":"integer"},"EventQueueArn":{},"DlqEventQueueArn":{}}}},"JdbcTargets":{"type":"list","member":{"type":"structure","members":{"ConnectionName":{},"Path":{},"Exclusions":{"shape":"S2f"},"EnableAdditionalMetadata":{"type":"list","member":{}}}}},"MongoDBTargets":{"type":"list","member":{"type":"structure","members":{"ConnectionName":{},"Path":{},"ScanAll":{"type":"boolean"}}}},"DynamoDBTargets":{"type":"list","member":{"type":"structure","members":{"Path":{},"scanAll":{"type":"boolean"},"scanRate":{"type":"double"}}}},"CatalogTargets":{"type":"list","member":{"type":"structure","required":["DatabaseName","Tables"],"members":{"DatabaseName":{},"Tables":{"type":"list","member":{}},"ConnectionName":{},"EventQueueArn":{},"DlqEventQueueArn":{}}}},"DeltaTargets":{"type":"list","member":{"type":"structure","members":{"DeltaTables":{"shape":"S2f"},"ConnectionName":{},"WriteManifest":{"type":"boolean"},"CreateNativeDeltaTable":{"type":"boolean"}}}},"IcebergTargets":{"type":"list","member":{"type":"structure","members":{"Paths":{"shape":"S2f"},"ConnectionName":{},"Exclusions":{"shape":"S2f"},"MaximumTraversalDepth":{"type":"integer"}}}},"HudiTargets":{"type":"list","member":{"type":"structure","members":{"Paths":{"shape":"S2f"},"ConnectionName":{},"Exclusions":{"shape":"S2f"},"MaximumTraversalDepth":{"type":"integer"}}}}}},"S2f":{"type":"list","member":{}},"S32":{"type":"list","member":{}},"S33":{"type":"structure","members":{"RecrawlBehavior":{}}},"S35":{"type":"structure","members":{"UpdateBehavior":{},"DeleteBehavior":{}}},"S38":{"type":"structure","members":{"CrawlerLineageSettings":{}}},"S3o":{"type":"structure","members":{"UseLakeFormationCredentials":{"type":"boolean"},"AccountId":{}}},"S3r":{"type":"list","member":{}},"S3t":{"type":"list","member":{"type":"structure","required":["Name","RegexString"],"members":{"Name":{},"RegexString":{},"ContextWords":{"shape":"S3v"}}}},"S3v":{"type":"list","member":{}},"S3x":{"type":"list","member":{}},"S43":{"type":"structure","required":["GlueTable"],"members":{"GlueTable":{"shape":"S44"}}},"S44":{"type":"structure","required":["DatabaseName","TableName"],"members":{"DatabaseName":{},"TableName":{},"CatalogId":{},"ConnectionName":{},"AdditionalOptions":{"type":"map","key":{},"value":{}}}},"S46":{"type":"list","member":{"type":"structure","members":{"Name":{},"Description":{},"EvaluationMessage":{},"Result":{},"EvaluatedMetrics":{"shape":"S4a"}}}},"S4a":{"type":"map","key":{},"value":{"type":"double"}},"S4b":{"type":"list","member":{"type":"structure","members":{"Name":{},"Description":{},"EvaluationMessage":{},"EvaluatedMetrics":{"shape":"S4a"}}}},"S4d":{"type":"list","member":{"type":"structure","members":{"Description":{},"MetricBasedObservation":{"type":"structure","members":{"MetricName":{},"MetricValues":{"type":"structure","members":{"ActualValue":{"type":"double"},"ExpectedValue":{"type":"double"},"LowerLimit":{"type":"double"},"UpperLimit":{"type":"double"}}},"NewRules":{"type":"list","member":{}}}}}}},"S4k":{"type":"list","member":{}},"S4m":{"type":"list","member":{"shape":"S4n"}},"S4n":{"type":"structure","members":{"EndpointName":{},"RoleArn":{},"SecurityGroupIds":{"shape":"S4p"},"SubnetId":{},"YarnEndpointAddress":{},"PrivateAddress":{},"ZeppelinRemoteSparkInterpreterPort":{"type":"integer"},"PublicAddress":{},"Status":{},"WorkerType":{},"GlueVersion":{},"NumberOfWorkers":{"type":"integer"},"NumberOfNodes":{"type":"integer"},"AvailabilityZone":{},"VpcId":{},"ExtraPythonLibsS3Path":{},"ExtraJarsS3Path":{},"FailureReason":{},"LastUpdateStatus":{},"CreatedTimestamp":{"type":"timestamp"},"LastModifiedTimestamp":{"type":"timestamp"},"PublicKey":{},"PublicKeys":{"shape":"S4t"},"SecurityConfiguration":{},"Arguments":{"shape":"S4u"}}},"S4p":{"type":"list","member":{}},"S4t":{"type":"list","member":{}},"S4u":{"type":"map","key":{},"value":{}},"S4w":{"type":"list","member":{}},"S4y":{"type":"list","member":{"shape":"S4z"}},"S4z":{"type":"structure","members":{"Name":{},"Description":{},"LogUri":{},"Role":{},"CreatedOn":{"type":"timestamp"},"LastModifiedOn":{"type":"timestamp"},"ExecutionProperty":{"shape":"S52"},"Command":{"shape":"S54"},"DefaultArguments":{"shape":"S58"},"NonOverridableArguments":{"shape":"S58"},"Connections":{"shape":"S59"},"MaxRetries":{"type":"integer"},"AllocatedCapacity":{"deprecated":true,"deprecatedMessage":"This property is deprecated, use MaxCapacity instead.","type":"integer"},"Timeout":{"type":"integer"},"MaxCapacity":{"type":"double"},"WorkerType":{},"NumberOfWorkers":{"type":"integer"},"SecurityConfiguration":{},"NotificationProperty":{"shape":"S5d"},"GlueVersion":{},"CodeGenConfigurationNodes":{"shape":"S5f"},"ExecutionClass":{},"SourceControlDetails":{"shape":"Sa9"}}},"S52":{"type":"structure","members":{"MaxConcurrentRuns":{"type":"integer"}}},"S54":{"type":"structure","members":{"Name":{},"ScriptLocation":{},"PythonVersion":{},"Runtime":{}}},"S58":{"type":"map","key":{},"value":{}},"S59":{"type":"structure","members":{"Connections":{"shape":"S5a"}}},"S5a":{"type":"list","member":{}},"S5d":{"type":"structure","members":{"NotifyDelayAfter":{"type":"integer"}}},"S5f":{"type":"map","key":{},"value":{"type":"structure","members":{"AthenaConnectorSource":{"type":"structure","required":["Name","ConnectionName","ConnectorName","ConnectionType","SchemaName"],"members":{"Name":{},"ConnectionName":{},"ConnectorName":{},"ConnectionType":{},"ConnectionTable":{},"SchemaName":{},"OutputSchemas":{"shape":"S5m"}}},"JDBCConnectorSource":{"type":"structure","required":["Name","ConnectionName","ConnectorName","ConnectionType"],"members":{"Name":{},"ConnectionName":{},"ConnectorName":{},"ConnectionType":{},"AdditionalOptions":{"type":"structure","members":{"FilterPredicate":{},"PartitionColumn":{},"LowerBound":{"type":"long"},"UpperBound":{"type":"long"},"NumPartitions":{"type":"long"},"JobBookmarkKeys":{"shape":"S5u"},"JobBookmarkKeysSortOrder":{},"DataTypeMapping":{"type":"map","key":{},"value":{}}}},"ConnectionTable":{},"Query":{},"OutputSchemas":{"shape":"S5m"}}},"SparkConnectorSource":{"type":"structure","required":["Name","ConnectionName","ConnectorName","ConnectionType"],"members":{"Name":{},"ConnectionName":{},"ConnectorName":{},"ConnectionType":{},"AdditionalOptions":{"shape":"S60"},"OutputSchemas":{"shape":"S5m"}}},"CatalogSource":{"type":"structure","required":["Name","Database","Table"],"members":{"Name":{},"Database":{},"Table":{}}},"RedshiftSource":{"type":"structure","required":["Name","Database","Table"],"members":{"Name":{},"Database":{},"Table":{},"RedshiftTmpDir":{},"TmpDirIAMRole":{}}},"S3CatalogSource":{"type":"structure","required":["Name","Database","Table"],"members":{"Name":{},"Database":{},"Table":{},"PartitionPredicate":{},"AdditionalOptions":{"shape":"S64"}}},"S3CsvSource":{"type":"structure","required":["Name","Paths","Separator","QuoteChar"],"members":{"Name":{},"Paths":{"shape":"S5u"},"CompressionType":{},"Exclusions":{"shape":"S5u"},"GroupSize":{},"GroupFiles":{},"Recurse":{"type":"boolean"},"MaxBand":{"type":"integer"},"MaxFilesInBand":{"type":"integer"},"AdditionalOptions":{"shape":"S6a"},"Separator":{},"Escaper":{},"QuoteChar":{},"Multiline":{"type":"boolean"},"WithHeader":{"type":"boolean"},"WriteHeader":{"type":"boolean"},"SkipFirst":{"type":"boolean"},"OptimizePerformance":{"type":"boolean"},"OutputSchemas":{"shape":"S5m"}}},"S3JsonSource":{"type":"structure","required":["Name","Paths"],"members":{"Name":{},"Paths":{"shape":"S5u"},"CompressionType":{},"Exclusions":{"shape":"S5u"},"GroupSize":{},"GroupFiles":{},"Recurse":{"type":"boolean"},"MaxBand":{"type":"integer"},"MaxFilesInBand":{"type":"integer"},"AdditionalOptions":{"shape":"S6a"},"JsonPath":{},"Multiline":{"type":"boolean"},"OutputSchemas":{"shape":"S5m"}}},"S3ParquetSource":{"type":"structure","required":["Name","Paths"],"members":{"Name":{},"Paths":{"shape":"S5u"},"CompressionType":{},"Exclusions":{"shape":"S5u"},"GroupSize":{},"GroupFiles":{},"Recurse":{"type":"boolean"},"MaxBand":{"type":"integer"},"MaxFilesInBand":{"type":"integer"},"AdditionalOptions":{"shape":"S6a"},"OutputSchemas":{"shape":"S5m"}}},"RelationalCatalogSource":{"type":"structure","required":["Name","Database","Table"],"members":{"Name":{},"Database":{},"Table":{}}},"DynamoDBCatalogSource":{"type":"structure","required":["Name","Database","Table"],"members":{"Name":{},"Database":{},"Table":{}}},"JDBCConnectorTarget":{"type":"structure","required":["Name","Inputs","ConnectionName","ConnectionTable","ConnectorName","ConnectionType"],"members":{"Name":{},"Inputs":{"shape":"S6k"},"ConnectionName":{},"ConnectionTable":{},"ConnectorName":{},"ConnectionType":{},"AdditionalOptions":{"shape":"S60"},"OutputSchemas":{"shape":"S5m"}}},"SparkConnectorTarget":{"type":"structure","required":["Name","Inputs","ConnectionName","ConnectorName","ConnectionType"],"members":{"Name":{},"Inputs":{"shape":"S6k"},"ConnectionName":{},"ConnectorName":{},"ConnectionType":{},"AdditionalOptions":{"shape":"S60"},"OutputSchemas":{"shape":"S5m"}}},"CatalogTarget":{"type":"structure","required":["Name","Inputs","Database","Table"],"members":{"Name":{},"Inputs":{"shape":"S6k"},"Database":{},"Table":{}}},"RedshiftTarget":{"type":"structure","required":["Name","Inputs","Database","Table"],"members":{"Name":{},"Inputs":{"shape":"S6k"},"Database":{},"Table":{},"RedshiftTmpDir":{},"TmpDirIAMRole":{},"UpsertRedshiftOptions":{"type":"structure","members":{"TableLocation":{},"ConnectionName":{},"UpsertKeys":{"type":"list","member":{}}}}}},"S3CatalogTarget":{"type":"structure","required":["Name","Inputs","Table","Database"],"members":{"Name":{},"Inputs":{"shape":"S6k"},"PartitionKeys":{"shape":"S6r"},"Table":{},"Database":{},"SchemaChangePolicy":{"shape":"S6s"}}},"S3GlueParquetTarget":{"type":"structure","required":["Name","Inputs","Path"],"members":{"Name":{},"Inputs":{"shape":"S6k"},"PartitionKeys":{"shape":"S6r"},"Path":{},"Compression":{},"SchemaChangePolicy":{"shape":"S6v"}}},"S3DirectTarget":{"type":"structure","required":["Name","Inputs","Path","Format"],"members":{"Name":{},"Inputs":{"shape":"S6k"},"PartitionKeys":{"shape":"S6r"},"Path":{},"Compression":{},"Format":{},"SchemaChangePolicy":{"shape":"S6v"}}},"ApplyMapping":{"type":"structure","required":["Name","Inputs","Mapping"],"members":{"Name":{},"Inputs":{"shape":"S6k"},"Mapping":{"shape":"S6z"}}},"SelectFields":{"type":"structure","required":["Name","Inputs","Paths"],"members":{"Name":{},"Inputs":{"shape":"S6k"},"Paths":{"shape":"S6r"}}},"DropFields":{"type":"structure","required":["Name","Inputs","Paths"],"members":{"Name":{},"Inputs":{"shape":"S6k"},"Paths":{"shape":"S6r"}}},"RenameField":{"type":"structure","required":["Name","Inputs","SourcePath","TargetPath"],"members":{"Name":{},"Inputs":{"shape":"S6k"},"SourcePath":{"shape":"S5u"},"TargetPath":{"shape":"S5u"}}},"Spigot":{"type":"structure","required":["Name","Inputs","Path"],"members":{"Name":{},"Inputs":{"shape":"S6k"},"Path":{},"Topk":{"type":"integer"},"Prob":{"type":"double"}}},"Join":{"type":"structure","required":["Name","Inputs","JoinType","Columns"],"members":{"Name":{},"Inputs":{"shape":"S78"},"JoinType":{},"Columns":{"type":"list","member":{"type":"structure","required":["From","Keys"],"members":{"From":{},"Keys":{"shape":"S6r"}}}}}},"SplitFields":{"type":"structure","required":["Name","Inputs","Paths"],"members":{"Name":{},"Inputs":{"shape":"S6k"},"Paths":{"shape":"S6r"}}},"SelectFromCollection":{"type":"structure","required":["Name","Inputs","Index"],"members":{"Name":{},"Inputs":{"shape":"S6k"},"Index":{"type":"integer"}}},"FillMissingValues":{"type":"structure","required":["Name","Inputs","ImputedPath"],"members":{"Name":{},"Inputs":{"shape":"S6k"},"ImputedPath":{},"FilledPath":{}}},"Filter":{"type":"structure","required":["Name","Inputs","LogicalOperator","Filters"],"members":{"Name":{},"Inputs":{"shape":"S6k"},"LogicalOperator":{},"Filters":{"type":"list","member":{"type":"structure","required":["Operation","Values"],"members":{"Operation":{},"Negated":{"type":"boolean"},"Values":{"type":"list","member":{"type":"structure","required":["Type","Value"],"members":{"Type":{},"Value":{"shape":"S5u"}}}}}}}}},"CustomCode":{"type":"structure","required":["Name","Inputs","Code","ClassName"],"members":{"Name":{},"Inputs":{"shape":"S7p"},"Code":{},"ClassName":{},"OutputSchemas":{"shape":"S5m"}}},"SparkSQL":{"type":"structure","required":["Name","Inputs","SqlQuery","SqlAliases"],"members":{"Name":{},"Inputs":{"shape":"S7p"},"SqlQuery":{},"SqlAliases":{"type":"list","member":{"type":"structure","required":["From","Alias"],"members":{"From":{},"Alias":{}}}},"OutputSchemas":{"shape":"S5m"}}},"DirectKinesisSource":{"type":"structure","required":["Name"],"members":{"Name":{},"WindowSize":{"type":"integer"},"DetectSchema":{"type":"boolean"},"StreamingOptions":{"shape":"S7w"},"DataPreviewOptions":{"shape":"S7z"}}},"DirectKafkaSource":{"type":"structure","required":["Name"],"members":{"Name":{},"StreamingOptions":{"shape":"S83"},"WindowSize":{"type":"integer"},"DetectSchema":{"type":"boolean"},"DataPreviewOptions":{"shape":"S7z"}}},"CatalogKinesisSource":{"type":"structure","required":["Name","Table","Database"],"members":{"Name":{},"WindowSize":{"type":"integer"},"DetectSchema":{"type":"boolean"},"Table":{},"Database":{},"StreamingOptions":{"shape":"S7w"},"DataPreviewOptions":{"shape":"S7z"}}},"CatalogKafkaSource":{"type":"structure","required":["Name","Table","Database"],"members":{"Name":{},"WindowSize":{"type":"integer"},"DetectSchema":{"type":"boolean"},"Table":{},"Database":{},"StreamingOptions":{"shape":"S83"},"DataPreviewOptions":{"shape":"S7z"}}},"DropNullFields":{"type":"structure","required":["Name","Inputs"],"members":{"Name":{},"Inputs":{"shape":"S6k"},"NullCheckBoxList":{"type":"structure","members":{"IsEmpty":{"type":"boolean"},"IsNullString":{"type":"boolean"},"IsNegOne":{"type":"boolean"}}},"NullTextList":{"type":"list","member":{"type":"structure","required":["Value","Datatype"],"members":{"Value":{},"Datatype":{"type":"structure","required":["Id","Label"],"members":{"Id":{},"Label":{}}}}}}}},"Merge":{"type":"structure","required":["Name","Inputs","Source","PrimaryKeys"],"members":{"Name":{},"Inputs":{"shape":"S78"},"Source":{},"PrimaryKeys":{"shape":"S6r"}}},"Union":{"type":"structure","required":["Name","Inputs","UnionType"],"members":{"Name":{},"Inputs":{"shape":"S78"},"UnionType":{}}},"PIIDetection":{"type":"structure","required":["Name","Inputs","PiiType","EntityTypesToDetect"],"members":{"Name":{},"Inputs":{"shape":"S6k"},"PiiType":{},"EntityTypesToDetect":{"shape":"S5u"},"OutputColumnName":{},"SampleFraction":{"type":"double"},"ThresholdFraction":{"type":"double"},"MaskValue":{}}},"Aggregate":{"type":"structure","required":["Name","Inputs","Groups","Aggs"],"members":{"Name":{},"Inputs":{"shape":"S6k"},"Groups":{"shape":"S6r"},"Aggs":{"type":"list","member":{"type":"structure","required":["Column","AggFunc"],"members":{"Column":{"shape":"S5u"},"AggFunc":{}}}}}},"DropDuplicates":{"type":"structure","required":["Name","Inputs"],"members":{"Name":{},"Inputs":{"shape":"S6k"},"Columns":{"type":"list","member":{"type":"list","member":{}}}}},"GovernedCatalogTarget":{"type":"structure","required":["Name","Inputs","Table","Database"],"members":{"Name":{},"Inputs":{"shape":"S6k"},"PartitionKeys":{"shape":"S6r"},"Table":{},"Database":{},"SchemaChangePolicy":{"shape":"S6s"}}},"GovernedCatalogSource":{"type":"structure","required":["Name","Database","Table"],"members":{"Name":{},"Database":{},"Table":{},"PartitionPredicate":{},"AdditionalOptions":{"shape":"S64"}}},"MicrosoftSQLServerCatalogSource":{"type":"structure","required":["Name","Database","Table"],"members":{"Name":{},"Database":{},"Table":{}}},"MySQLCatalogSource":{"type":"structure","required":["Name","Database","Table"],"members":{"Name":{},"Database":{},"Table":{}}},"OracleSQLCatalogSource":{"type":"structure","required":["Name","Database","Table"],"members":{"Name":{},"Database":{},"Table":{}}},"PostgreSQLCatalogSource":{"type":"structure","required":["Name","Database","Table"],"members":{"Name":{},"Database":{},"Table":{}}},"MicrosoftSQLServerCatalogTarget":{"type":"structure","required":["Name","Inputs","Database","Table"],"members":{"Name":{},"Inputs":{"shape":"S6k"},"Database":{},"Table":{}}},"MySQLCatalogTarget":{"type":"structure","required":["Name","Inputs","Database","Table"],"members":{"Name":{},"Inputs":{"shape":"S6k"},"Database":{},"Table":{}}},"OracleSQLCatalogTarget":{"type":"structure","required":["Name","Inputs","Database","Table"],"members":{"Name":{},"Inputs":{"shape":"S6k"},"Database":{},"Table":{}}},"PostgreSQLCatalogTarget":{"type":"structure","required":["Name","Inputs","Database","Table"],"members":{"Name":{},"Inputs":{"shape":"S6k"},"Database":{},"Table":{}}},"DynamicTransform":{"type":"structure","required":["Name","TransformName","Inputs","FunctionName","Path"],"members":{"Name":{},"TransformName":{},"Inputs":{"shape":"S6k"},"Parameters":{"type":"list","member":{"type":"structure","required":["Name","Type"],"members":{"Name":{},"Type":{},"ValidationRule":{},"ValidationMessage":{},"Value":{"shape":"S5u"},"ListType":{},"IsOptional":{"type":"boolean"}}}},"FunctionName":{},"Path":{},"Version":{},"OutputSchemas":{"shape":"S5m"}}},"EvaluateDataQuality":{"type":"structure","required":["Name","Inputs","Ruleset"],"members":{"Name":{},"Inputs":{"shape":"S6k"},"Ruleset":{},"Output":{},"PublishingOptions":{"shape":"S97"},"StopJobOnFailureOptions":{"shape":"S98"}}},"S3CatalogHudiSource":{"type":"structure","required":["Name","Database","Table"],"members":{"Name":{},"Database":{},"Table":{},"AdditionalHudiOptions":{"shape":"S60"},"OutputSchemas":{"shape":"S5m"}}},"CatalogHudiSource":{"type":"structure","required":["Name","Database","Table"],"members":{"Name":{},"Database":{},"Table":{},"AdditionalHudiOptions":{"shape":"S60"},"OutputSchemas":{"shape":"S5m"}}},"S3HudiSource":{"type":"structure","required":["Name","Paths"],"members":{"Name":{},"Paths":{"shape":"S5u"},"AdditionalHudiOptions":{"shape":"S60"},"AdditionalOptions":{"shape":"S6a"},"OutputSchemas":{"shape":"S5m"}}},"S3HudiCatalogTarget":{"type":"structure","required":["Name","Inputs","Table","Database","AdditionalOptions"],"members":{"Name":{},"Inputs":{"shape":"S6k"},"PartitionKeys":{"shape":"S6r"},"Table":{},"Database":{},"AdditionalOptions":{"shape":"S60"},"SchemaChangePolicy":{"shape":"S6s"}}},"S3HudiDirectTarget":{"type":"structure","required":["Name","Inputs","Path","Compression","Format","AdditionalOptions"],"members":{"Name":{},"Inputs":{"shape":"S6k"},"Path":{},"Compression":{},"PartitionKeys":{"shape":"S6r"},"Format":{},"AdditionalOptions":{"shape":"S60"},"SchemaChangePolicy":{"shape":"S6v"}}},"DirectJDBCSource":{"type":"structure","required":["Name","Database","Table","ConnectionName","ConnectionType"],"members":{"Name":{},"Database":{},"Table":{},"ConnectionName":{},"ConnectionType":{},"RedshiftTmpDir":{}}},"S3CatalogDeltaSource":{"type":"structure","required":["Name","Database","Table"],"members":{"Name":{},"Database":{},"Table":{},"AdditionalDeltaOptions":{"shape":"S60"},"OutputSchemas":{"shape":"S5m"}}},"CatalogDeltaSource":{"type":"structure","required":["Name","Database","Table"],"members":{"Name":{},"Database":{},"Table":{},"AdditionalDeltaOptions":{"shape":"S60"},"OutputSchemas":{"shape":"S5m"}}},"S3DeltaSource":{"type":"structure","required":["Name","Paths"],"members":{"Name":{},"Paths":{"shape":"S5u"},"AdditionalDeltaOptions":{"shape":"S60"},"AdditionalOptions":{"shape":"S6a"},"OutputSchemas":{"shape":"S5m"}}},"S3DeltaCatalogTarget":{"type":"structure","required":["Name","Inputs","Table","Database"],"members":{"Name":{},"Inputs":{"shape":"S6k"},"PartitionKeys":{"shape":"S6r"},"Table":{},"Database":{},"AdditionalOptions":{"shape":"S60"},"SchemaChangePolicy":{"shape":"S6s"}}},"S3DeltaDirectTarget":{"type":"structure","required":["Name","Inputs","Path","Compression","Format"],"members":{"Name":{},"Inputs":{"shape":"S6k"},"PartitionKeys":{"shape":"S6r"},"Path":{},"Compression":{},"Format":{},"AdditionalOptions":{"shape":"S60"},"SchemaChangePolicy":{"shape":"S6v"}}},"AmazonRedshiftSource":{"type":"structure","members":{"Name":{},"Data":{"shape":"S9p"}}},"AmazonRedshiftTarget":{"type":"structure","members":{"Name":{},"Data":{"shape":"S9p"},"Inputs":{"shape":"S6k"}}},"EvaluateDataQualityMultiFrame":{"type":"structure","required":["Name","Inputs","Ruleset"],"members":{"Name":{},"Inputs":{"shape":"S7p"},"AdditionalDataSources":{"type":"map","key":{},"value":{}},"Ruleset":{},"PublishingOptions":{"shape":"S97"},"AdditionalOptions":{"type":"map","key":{},"value":{}},"StopJobOnFailureOptions":{"shape":"S98"}}},"Recipe":{"type":"structure","required":["Name","Inputs","RecipeReference"],"members":{"Name":{},"Inputs":{"shape":"S6k"},"RecipeReference":{"type":"structure","required":["RecipeArn","RecipeVersion"],"members":{"RecipeArn":{},"RecipeVersion":{}}}}},"SnowflakeSource":{"type":"structure","required":["Name","Data"],"members":{"Name":{},"Data":{"shape":"Sa3"},"OutputSchemas":{"shape":"S5m"}}},"SnowflakeTarget":{"type":"structure","required":["Name","Data"],"members":{"Name":{},"Data":{"shape":"Sa3"},"Inputs":{"shape":"S6k"}}},"ConnectorDataSource":{"type":"structure","required":["Name","ConnectionType","Data"],"members":{"Name":{},"ConnectionType":{},"Data":{"shape":"Sa6"},"OutputSchemas":{"shape":"S5m"}}},"ConnectorDataTarget":{"type":"structure","required":["Name","ConnectionType","Data"],"members":{"Name":{},"ConnectionType":{},"Data":{"shape":"Sa6"},"Inputs":{"shape":"S6k"}}}}},"sensitive":true},"S5m":{"type":"list","member":{"type":"structure","members":{"Columns":{"type":"list","member":{"type":"structure","required":["Name"],"members":{"Name":{},"Type":{}}}}}}},"S5u":{"type":"list","member":{}},"S60":{"type":"map","key":{},"value":{}},"S64":{"type":"structure","members":{"BoundedSize":{"type":"long"},"BoundedFiles":{"type":"long"}}},"S6a":{"type":"structure","members":{"BoundedSize":{"type":"long"},"BoundedFiles":{"type":"long"},"EnableSamplePath":{"type":"boolean"},"SamplePath":{}}},"S6k":{"type":"list","member":{}},"S6r":{"type":"list","member":{"shape":"S5u"}},"S6s":{"type":"structure","members":{"EnableUpdateCatalog":{"type":"boolean"},"UpdateBehavior":{}}},"S6v":{"type":"structure","members":{"EnableUpdateCatalog":{"type":"boolean"},"UpdateBehavior":{},"Table":{},"Database":{}}},"S6z":{"type":"list","member":{"type":"structure","members":{"ToKey":{},"FromPath":{"shape":"S5u"},"FromType":{},"ToType":{},"Dropped":{"type":"boolean"},"Children":{"shape":"S6z"}}}},"S78":{"type":"list","member":{}},"S7p":{"type":"list","member":{}},"S7w":{"type":"structure","members":{"EndpointUrl":{},"StreamName":{},"Classification":{},"Delimiter":{},"StartingPosition":{},"MaxFetchTimeInMs":{"type":"long"},"MaxFetchRecordsPerShard":{"type":"long"},"MaxRecordPerRead":{"type":"long"},"AddIdleTimeBetweenReads":{"type":"boolean"},"IdleTimeBetweenReadsInMs":{"type":"long"},"DescribeShardInterval":{"type":"long"},"NumRetries":{"type":"integer"},"RetryIntervalMs":{"type":"long"},"MaxRetryIntervalMs":{"type":"long"},"AvoidEmptyBatches":{"type":"boolean"},"StreamArn":{},"RoleArn":{},"RoleSessionName":{},"AddRecordTimestamp":{},"EmitConsumerLagMetrics":{},"StartingTimestamp":{"shape":"S7y"}}},"S7y":{"type":"timestamp","timestampFormat":"iso8601"},"S7z":{"type":"structure","members":{"PollingTime":{"type":"long"},"RecordPollingLimit":{"type":"long"}}},"S83":{"type":"structure","members":{"BootstrapServers":{},"SecurityProtocol":{},"ConnectionName":{},"TopicName":{},"Assign":{},"SubscribePattern":{},"Classification":{},"Delimiter":{},"StartingOffsets":{},"EndingOffsets":{},"PollTimeoutMs":{"type":"long"},"NumRetries":{"type":"integer"},"RetryIntervalMs":{"type":"long"},"MaxOffsetsPerTrigger":{"type":"long"},"MinPartitions":{"type":"integer"},"IncludeHeaders":{"type":"boolean"},"AddRecordTimestamp":{},"EmitConsumerLagMetrics":{},"StartingTimestamp":{"shape":"S7y"}}},"S97":{"type":"structure","members":{"EvaluationContext":{},"ResultsS3Prefix":{},"CloudWatchMetricsEnabled":{"type":"boolean"},"ResultsPublishingEnabled":{"type":"boolean"}}},"S98":{"type":"structure","members":{"StopJobOnFailureTiming":{}}},"S9p":{"type":"structure","members":{"AccessType":{},"SourceType":{},"Connection":{"shape":"S9q"},"Schema":{"shape":"S9q"},"Table":{"shape":"S9q"},"CatalogDatabase":{"shape":"S9q"},"CatalogTable":{"shape":"S9q"},"CatalogRedshiftSchema":{},"CatalogRedshiftTable":{},"TempDir":{},"IamRole":{"shape":"S9q"},"AdvancedOptions":{"type":"list","member":{"type":"structure","members":{"Key":{},"Value":{}}}},"SampleQuery":{},"PreAction":{},"PostAction":{},"Action":{},"TablePrefix":{},"Upsert":{"type":"boolean"},"MergeAction":{},"MergeWhenMatched":{},"MergeWhenNotMatched":{},"MergeClause":{},"CrawlerConnection":{},"TableSchema":{"shape":"S9t"},"StagingTable":{},"SelectedColumns":{"shape":"S9t"}}},"S9q":{"type":"structure","members":{"Value":{},"Label":{},"Description":{}}},"S9t":{"type":"list","member":{"shape":"S9q"}},"Sa3":{"type":"structure","members":{"SourceType":{},"Connection":{"shape":"S9q"},"Schema":{},"Table":{},"Database":{},"TempDir":{},"IamRole":{"shape":"S9q"},"AdditionalOptions":{"shape":"S60"},"SampleQuery":{},"PreAction":{},"PostAction":{},"Action":{},"Upsert":{"type":"boolean"},"MergeAction":{},"MergeWhenMatched":{},"MergeWhenNotMatched":{},"MergeClause":{},"StagingTable":{},"SelectedColumns":{"shape":"S9t"},"AutoPushdown":{"type":"boolean"},"TableSchema":{"shape":"S9t"}}},"Sa6":{"type":"map","key":{},"value":{}},"Sa9":{"type":"structure","members":{"Provider":{},"Repository":{},"Owner":{},"Branch":{},"Folder":{},"LastCommitId":{},"AuthStrategy":{},"AuthToken":{}}},"Sad":{"type":"list","member":{"shape":"S1c"}},"Saf":{"type":"list","member":{"shape":"Sag"}},"Sag":{"type":"structure","members":{"Values":{"shape":"S6"},"DatabaseName":{},"TableName":{},"CreationTime":{"type":"timestamp"},"LastAccessTime":{"type":"timestamp"},"StorageDescriptor":{"shape":"S9"},"Parameters":{"shape":"Se"},"LastAnalyzedTime":{"type":"timestamp"},"CatalogId":{}}},"Saq":{"type":"structure","members":{"type":{},"configuration":{"shape":"Sar"},"lastRun":{"shape":"Sat"}}},"Sar":{"type":"structure","members":{"roleArn":{},"enabled":{"type":"boolean"}}},"Sat":{"type":"structure","members":{"eventType":{},"startTimestamp":{"type":"timestamp"},"endTimestamp":{"type":"timestamp"},"metrics":{"type":"structure","members":{"NumberOfBytesCompacted":{},"NumberOfFilesCompacted":{},"NumberOfDpus":{},"JobDurationInHour":{}}},"error":{}}},"Sb1":{"type":"list","member":{}},"Sb3":{"type":"list","member":{"shape":"Sb4"}},"Sb4":{"type":"structure","members":{"Name":{},"WorkflowName":{},"Id":{},"Type":{},"State":{},"Description":{},"Schedule":{},"Actions":{"shape":"Sb8"},"Predicate":{"shape":"Sba"},"EventBatchingCondition":{"shape":"Sbh"}}},"Sb8":{"type":"list","member":{"type":"structure","members":{"JobName":{},"Arguments":{"shape":"S58"},"Timeout":{"type":"integer"},"SecurityConfiguration":{},"NotificationProperty":{"shape":"S5d"},"CrawlerName":{}}}},"Sba":{"type":"structure","members":{"Logical":{},"Conditions":{"type":"list","member":{"type":"structure","members":{"LogicalOperator":{},"JobName":{},"State":{},"CrawlerName":{},"CrawlState":{}}}}}},"Sbh":{"type":"structure","required":["BatchSize"],"members":{"BatchSize":{"type":"integer"},"BatchWindow":{"type":"integer"}}},"Sbl":{"type":"list","member":{}},"Sbo":{"type":"structure","members":{"Name":{},"Description":{},"DefaultRunProperties":{"shape":"Sbp"},"CreatedOn":{"type":"timestamp"},"LastModifiedOn":{"type":"timestamp"},"LastRun":{"shape":"Sbq"},"Graph":{"shape":"Sbt"},"MaxConcurrentRuns":{"type":"integer"},"BlueprintDetails":{"type":"structure","members":{"BlueprintName":{},"RunId":{}}}}},"Sbp":{"type":"map","key":{},"value":{}},"Sbq":{"type":"structure","members":{"Name":{},"WorkflowRunId":{},"PreviousRunId":{},"WorkflowRunProperties":{"shape":"Sbp"},"StartedOn":{"type":"timestamp"},"CompletedOn":{"type":"timestamp"},"Status":{},"ErrorMessage":{},"Statistics":{"type":"structure","members":{"TotalActions":{"type":"integer"},"TimeoutActions":{"type":"integer"},"FailedActions":{"type":"integer"},"StoppedActions":{"type":"integer"},"SucceededActions":{"type":"integer"},"RunningActions":{"type":"integer"},"ErroredActions":{"type":"integer"},"WaitingActions":{"type":"integer"}}},"Graph":{"shape":"Sbt"},"StartingEventBatchCondition":{"type":"structure","members":{"BatchSize":{"type":"integer"},"BatchWindow":{"type":"integer"}}}}},"Sbt":{"type":"structure","members":{"Nodes":{"type":"list","member":{"type":"structure","members":{"Type":{},"Name":{},"UniqueId":{},"TriggerDetails":{"type":"structure","members":{"Trigger":{"shape":"Sb4"}}},"JobDetails":{"type":"structure","members":{"JobRuns":{"shape":"Sbz"}}},"CrawlerDetails":{"type":"structure","members":{"Crawls":{"type":"list","member":{"type":"structure","members":{"State":{},"StartedOn":{"type":"timestamp"},"CompletedOn":{"type":"timestamp"},"ErrorMessage":{},"LogGroup":{},"LogStream":{}}}}}}}}},"Edges":{"type":"list","member":{"type":"structure","members":{"SourceId":{},"DestinationId":{}}}}}},"Sbz":{"type":"list","member":{"shape":"Sc0"}},"Sc0":{"type":"structure","members":{"Id":{},"Attempt":{"type":"integer"},"PreviousRunId":{},"TriggerName":{},"JobName":{},"StartedOn":{"type":"timestamp"},"LastModifiedOn":{"type":"timestamp"},"CompletedOn":{"type":"timestamp"},"JobRunState":{},"Arguments":{"shape":"S58"},"ErrorMessage":{},"PredecessorRuns":{"type":"list","member":{"type":"structure","members":{"JobName":{},"RunId":{}}}},"AllocatedCapacity":{"deprecated":true,"deprecatedMessage":"This property is deprecated, use MaxCapacity instead.","type":"integer"},"ExecutionTime":{"type":"integer"},"Timeout":{"type":"integer"},"MaxCapacity":{"type":"double"},"WorkerType":{},"NumberOfWorkers":{"type":"integer"},"SecurityConfiguration":{},"LogGroupName":{},"NotificationProperty":{"shape":"S5d"},"GlueVersion":{},"DPUSeconds":{"type":"double"},"ExecutionClass":{}}},"Scm":{"type":"list","member":{}},"Sd7":{"type":"map","key":{},"value":{}},"Sdo":{"type":"list","member":{}},"Sdp":{"type":"list","member":{}},"Sdt":{"type":"structure","required":["Name","ConnectionType","ConnectionProperties"],"members":{"Name":{},"Description":{},"ConnectionType":{},"MatchCriteria":{"shape":"Sdv"},"ConnectionProperties":{"shape":"Sdw"},"PhysicalConnectionRequirements":{"shape":"Sdy"}}},"Sdv":{"type":"list","member":{}},"Sdw":{"type":"map","key":{},"value":{}},"Sdy":{"type":"structure","members":{"SubnetId":{},"SecurityGroupIdList":{"type":"list","member":{}},"AvailabilityZone":{}}},"Se7":{"type":"structure","required":["TableName","DatabaseName"],"members":{"TableName":{},"DatabaseName":{},"CatalogId":{}}},"Sea":{"type":"structure","required":["Name"],"members":{"Name":{},"Description":{},"LocationUri":{},"Parameters":{"shape":"Se"},"CreateTableDefaultPermissions":{"shape":"Sec"},"TargetDatabase":{"shape":"Sei"},"FederatedDatabase":{"shape":"Sej"}}},"Sec":{"type":"list","member":{"type":"structure","members":{"Principal":{"type":"structure","members":{"DataLakePrincipalIdentifier":{}}},"Permissions":{"shape":"Seg"}}}},"Seg":{"type":"list","member":{}},"Sei":{"type":"structure","members":{"CatalogId":{},"DatabaseName":{},"Region":{}}},"Sej":{"type":"structure","members":{"Identifier":{},"ConnectionName":{}}},"Ser":{"type":"list","member":{"shape":"S44"}},"Ses":{"type":"structure","required":["TransformType"],"members":{"TransformType":{},"FindMatchesParameters":{"type":"structure","members":{"PrimaryKeyColumnName":{},"PrecisionRecallTradeoff":{"type":"double"},"AccuracyCostTradeoff":{"type":"double"},"EnforceProvidedLabels":{"type":"boolean"}}}}},"Sew":{"type":"structure","members":{"MlUserDataEncryption":{"type":"structure","required":["MlUserDataEncryptionMode"],"members":{"MlUserDataEncryptionMode":{},"KmsKeyId":{}}},"TaskRunSecurityConfigurationName":{}}},"Sf3":{"type":"structure","required":["Keys","IndexName"],"members":{"Keys":{"type":"list","member":{}},"IndexName":{}}},"Sf9":{"type":"structure","members":{"RegistryName":{},"RegistryArn":{}}},"Sfg":{"type":"list","member":{"type":"structure","required":["Id","NodeType","Args"],"members":{"Id":{},"NodeType":{},"Args":{"shape":"Sfk"},"LineNumber":{"type":"integer"}}}},"Sfk":{"type":"list","member":{"type":"structure","required":["Name","Value"],"members":{"Name":{},"Value":{},"Param":{"type":"boolean"}}}},"Sfo":{"type":"list","member":{"type":"structure","required":["Source","Target"],"members":{"Source":{},"Target":{},"TargetParameter":{}}}},"Sfv":{"type":"structure","members":{"S3Encryption":{"type":"list","member":{"type":"structure","members":{"S3EncryptionMode":{},"KmsKeyArn":{}}}},"CloudWatchEncryption":{"type":"structure","members":{"CloudWatchEncryptionMode":{},"KmsKeyArn":{}}},"JobBookmarksEncryption":{"type":"structure","members":{"JobBookmarksEncryptionMode":{},"KmsKeyArn":{}}}}},"Sg7":{"type":"structure","members":{"Name":{},"PythonVersion":{}}},"Sg8":{"type":"map","key":{},"value":{}},"Sgb":{"type":"structure","members":{"Id":{},"CreatedOn":{"type":"timestamp"},"Status":{},"ErrorMessage":{},"Description":{},"Role":{},"Command":{"shape":"Sg7"},"DefaultArguments":{"shape":"Sg8"},"Connections":{"shape":"S59"},"Progress":{"type":"double"},"MaxCapacity":{"type":"double"},"SecurityConfiguration":{},"GlueVersion":{},"NumberOfWorkers":{"type":"integer"},"WorkerType":{},"CompletedOn":{"type":"timestamp"},"ExecutionTime":{"type":"double"},"DPUSeconds":{"type":"double"},"IdleTimeout":{"type":"integer"}}},"Sgg":{"type":"structure","required":["Name"],"members":{"Name":{},"Description":{},"Owner":{},"LastAccessTime":{"type":"timestamp"},"LastAnalyzedTime":{"type":"timestamp"},"Retention":{"type":"integer"},"StorageDescriptor":{"shape":"S9"},"PartitionKeys":{"shape":"Sa"},"ViewOriginalText":{},"ViewExpandedText":{},"TableType":{},"Parameters":{"shape":"Se"},"TargetTable":{"shape":"Sgk"}}},"Sgk":{"type":"structure","members":{"CatalogId":{},"DatabaseName":{},"Name":{},"Region":{}}},"Sgv":{"type":"structure","members":{"FunctionName":{},"ClassName":{},"OwnerName":{},"OwnerType":{},"ResourceUris":{"shape":"Sgx"}}},"Sgx":{"type":"list","member":{"type":"structure","members":{"ResourceType":{},"Uri":{}}}},"Siu":{"type":"structure","members":{"BlueprintName":{},"RunId":{},"WorkflowName":{},"State":{},"StartedOn":{"type":"timestamp"},"CompletedOn":{"type":"timestamp"},"ErrorMessage":{},"RollbackErrorMessage":{},"Parameters":{},"RoleArn":{}}},"Sj7":{"type":"structure","members":{"GrokClassifier":{"type":"structure","required":["Name","Classification","GrokPattern"],"members":{"Name":{},"Classification":{},"CreationTime":{"type":"timestamp"},"LastUpdated":{"type":"timestamp"},"Version":{"type":"long"},"GrokPattern":{},"CustomPatterns":{}}},"XMLClassifier":{"type":"structure","required":["Name","Classification"],"members":{"Name":{},"Classification":{},"CreationTime":{"type":"timestamp"},"LastUpdated":{"type":"timestamp"},"Version":{"type":"long"},"RowTag":{}}},"JsonClassifier":{"type":"structure","required":["Name","JsonPath"],"members":{"Name":{},"CreationTime":{"type":"timestamp"},"LastUpdated":{"type":"timestamp"},"Version":{"type":"long"},"JsonPath":{}}},"CsvClassifier":{"type":"structure","required":["Name"],"members":{"Name":{},"CreationTime":{"type":"timestamp"},"LastUpdated":{"type":"timestamp"},"Version":{"type":"long"},"Delimiter":{},"QuoteSymbol":{},"ContainsHeader":{},"Header":{"shape":"Sdo"},"DisableValueTrimming":{"type":"boolean"},"AllowSingleColumn":{"type":"boolean"},"CustomDatatypeConfigured":{"type":"boolean"},"CustomDatatypes":{"shape":"Sdp"},"Serde":{}}}}},"Sjh":{"type":"list","member":{}},"Sjj":{"type":"list","member":{"shape":"Sjk"}},"Sjk":{"type":"structure","required":["ColumnName","ColumnType","AnalyzedTime","StatisticsData"],"members":{"ColumnName":{},"ColumnType":{},"AnalyzedTime":{"type":"timestamp"},"StatisticsData":{"type":"structure","required":["Type"],"members":{"Type":{},"BooleanColumnStatisticsData":{"type":"structure","required":["NumberOfTrues","NumberOfFalses","NumberOfNulls"],"members":{"NumberOfTrues":{"type":"long"},"NumberOfFalses":{"type":"long"},"NumberOfNulls":{"type":"long"}}},"DateColumnStatisticsData":{"type":"structure","required":["NumberOfNulls","NumberOfDistinctValues"],"members":{"MinimumValue":{"type":"timestamp"},"MaximumValue":{"type":"timestamp"},"NumberOfNulls":{"type":"long"},"NumberOfDistinctValues":{"type":"long"}}},"DecimalColumnStatisticsData":{"type":"structure","required":["NumberOfNulls","NumberOfDistinctValues"],"members":{"MinimumValue":{"shape":"Sjs"},"MaximumValue":{"shape":"Sjs"},"NumberOfNulls":{"type":"long"},"NumberOfDistinctValues":{"type":"long"}}},"DoubleColumnStatisticsData":{"type":"structure","required":["NumberOfNulls","NumberOfDistinctValues"],"members":{"MinimumValue":{"type":"double"},"MaximumValue":{"type":"double"},"NumberOfNulls":{"type":"long"},"NumberOfDistinctValues":{"type":"long"}}},"LongColumnStatisticsData":{"type":"structure","required":["NumberOfNulls","NumberOfDistinctValues"],"members":{"MinimumValue":{"type":"long"},"MaximumValue":{"type":"long"},"NumberOfNulls":{"type":"long"},"NumberOfDistinctValues":{"type":"long"}}},"StringColumnStatisticsData":{"type":"structure","required":["MaximumLength","AverageLength","NumberOfNulls","NumberOfDistinctValues"],"members":{"MaximumLength":{"type":"long"},"AverageLength":{"type":"double"},"NumberOfNulls":{"type":"long"},"NumberOfDistinctValues":{"type":"long"}}},"BinaryColumnStatisticsData":{"type":"structure","required":["MaximumLength","AverageLength","NumberOfNulls"],"members":{"MaximumLength":{"type":"long"},"AverageLength":{"type":"double"},"NumberOfNulls":{"type":"long"}}}}}}},"Sjs":{"type":"structure","required":["UnscaledValue","Scale"],"members":{"UnscaledValue":{"type":"blob"},"Scale":{"type":"integer"}}},"Sk1":{"type":"list","member":{"type":"structure","members":{"ColumnName":{},"Error":{"shape":"S14"}}}},"Sk7":{"type":"structure","members":{"CustomerId":{},"ColumnStatisticsTaskRunId":{},"DatabaseName":{},"TableName":{},"ColumnNameList":{"shape":"Sk9"},"CatalogID":{},"Role":{},"SampleSize":{"type":"double"},"SecurityConfiguration":{},"NumberOfWorkers":{"type":"integer"},"WorkerType":{},"Status":{},"CreationTime":{"type":"timestamp"},"LastUpdated":{"type":"timestamp"},"StartTime":{"type":"timestamp"},"EndTime":{"type":"timestamp"},"ErrorMessage":{},"DPUSeconds":{"type":"double"}}},"Sk9":{"type":"list","member":{}},"Ski":{"type":"structure","members":{"Name":{},"Description":{},"ConnectionType":{},"MatchCriteria":{"shape":"Sdv"},"ConnectionProperties":{"shape":"Sdw"},"PhysicalConnectionRequirements":{"shape":"Sdy"},"CreationTime":{"type":"timestamp"},"LastUpdatedTime":{"type":"timestamp"},"LastUpdatedBy":{}}},"Skz":{"type":"structure","members":{"EncryptionAtRest":{"type":"structure","required":["CatalogEncryptionMode"],"members":{"CatalogEncryptionMode":{},"SseAwsKmsKeyId":{},"CatalogEncryptionServiceRole":{}}},"ConnectionPasswordEncryption":{"type":"structure","required":["ReturnConnectionPasswordEncrypted"],"members":{"ReturnConnectionPasswordEncrypted":{"type":"boolean"},"AwsKmsKeyId":{}}}}},"Slc":{"type":"structure","members":{"CloudWatchMetricsEnabled":{"type":"boolean"},"ResultsS3Prefix":{}}},"Sld":{"type":"list","member":{}},"Slf":{"type":"map","key":{},"value":{"shape":"S43"}},"Sli":{"type":"structure","required":["Name"],"members":{"Name":{},"Description":{},"LocationUri":{},"Parameters":{"shape":"Se"},"CreateTime":{"type":"timestamp"},"CreateTableDefaultPermissions":{"shape":"Sec"},"TargetDatabase":{"shape":"Sei"},"CatalogId":{},"FederatedDatabase":{"shape":"Sej"}}},"Sm0":{"type":"structure","members":{"JobName":{},"Version":{"type":"integer"},"Run":{"type":"integer"},"Attempt":{"type":"integer"},"PreviousRunId":{},"RunId":{},"JobBookmark":{}}},"Smb":{"type":"structure","members":{"TaskType":{},"ImportLabelsTaskRunProperties":{"type":"structure","members":{"InputS3Path":{},"Replace":{"type":"boolean"}}},"ExportLabelsTaskRunProperties":{"type":"structure","members":{"OutputS3Path":{}}},"LabelingSetGenerationTaskRunProperties":{"type":"structure","members":{"OutputS3Path":{}}},"FindMatchesTaskRunProperties":{"type":"structure","members":{"JobId":{},"JobName":{},"JobRunId":{}}}}},"Smu":{"type":"structure","required":["TransformType"],"members":{"TransformType":{},"FindMatchesMetrics":{"type":"structure","members":{"AreaUnderPRCurve":{"type":"double"},"Precision":{"type":"double"},"Recall":{"type":"double"},"F1":{"type":"double"},"ConfusionMatrix":{"type":"structure","members":{"NumTruePositives":{"type":"long"},"NumFalsePositives":{"type":"long"},"NumTrueNegatives":{"type":"long"},"NumFalseNegatives":{"type":"long"}}},"ColumnImportances":{"type":"list","member":{"type":"structure","members":{"ColumnName":{},"Importance":{"type":"double"}}}}}}}},"Sn1":{"type":"list","member":{"type":"structure","members":{"Name":{},"DataType":{}}}},"Sn4":{"type":"structure","members":{"Name":{},"TransformType":{},"Status":{},"GlueVersion":{},"CreatedBefore":{"type":"timestamp"},"CreatedAfter":{"type":"timestamp"},"LastModifiedBefore":{"type":"timestamp"},"LastModifiedAfter":{"type":"timestamp"},"Schema":{"shape":"Sn1"}}},"Sn5":{"type":"structure","required":["Column","SortDirection"],"members":{"Column":{},"SortDirection":{}}},"Snb":{"type":"structure","required":["DatabaseName","TableName"],"members":{"DatabaseName":{},"TableName":{}}},"Snc":{"type":"list","member":{"shape":"Snb"}},"Snd":{"type":"structure","members":{"Jdbc":{"shape":"Sfk"},"S3":{"shape":"Sfk"},"DynamoDB":{"shape":"Sfk"}}},"Snf":{"type":"list","member":{"type":"structure","members":{"SourceTable":{},"SourcePath":{},"SourceType":{},"TargetTable":{},"TargetPath":{},"TargetType":{}}}},"Sny":{"type":"structure","required":["SegmentNumber","TotalSegments"],"members":{"SegmentNumber":{"type":"integer"},"TotalSegments":{"type":"integer"}}},"Sol":{"type":"structure","members":{"LatestVersion":{"type":"boolean"},"VersionNumber":{"type":"long"}}},"Sou":{"type":"structure","members":{"Name":{},"CreatedTimeStamp":{"type":"timestamp"},"EncryptionConfiguration":{"shape":"Sfv"}}},"Sp2":{"type":"structure","members":{"Id":{"type":"integer"},"Code":{},"State":{},"Output":{"type":"structure","members":{"Data":{"type":"structure","members":{"TextPlain":{}}},"ExecutionCount":{"type":"integer"},"Status":{},"ErrorName":{},"ErrorValue":{},"Traceback":{"shape":"S5a"}}},"Progress":{"type":"double"},"StartedOn":{"type":"long"},"CompletedOn":{"type":"long"}}},"Sp9":{"type":"structure","required":["Name"],"members":{"Name":{},"DatabaseName":{},"Description":{},"Owner":{},"CreateTime":{"type":"timestamp"},"UpdateTime":{"type":"timestamp"},"LastAccessTime":{"type":"timestamp"},"LastAnalyzedTime":{"type":"timestamp"},"Retention":{"type":"integer"},"StorageDescriptor":{"shape":"S9"},"PartitionKeys":{"shape":"Sa"},"ViewOriginalText":{},"ViewExpandedText":{},"TableType":{},"Parameters":{"shape":"Se"},"CreatedBy":{},"IsRegisteredWithLakeFormation":{"type":"boolean"},"TargetTable":{"shape":"Sgk"},"CatalogId":{},"VersionId":{},"FederatedTable":{"type":"structure","members":{"Identifier":{},"DatabaseIdentifier":{},"ConnectionName":{}}}}},"Spf":{"type":"structure","members":{"Table":{"shape":"Sp9"},"VersionId":{}}},"Spm":{"type":"list","member":{"shape":"Sp9"}},"Spu":{"type":"structure","members":{"AdditionalAuditContext":{},"RequestedColumns":{"type":"list","member":{}},"AllColumnsRequested":{"type":"boolean"}}},"Spx":{"type":"list","member":{}},"Spz":{"type":"structure","members":{"QueryId":{},"QueryStartTime":{"type":"timestamp"},"ClusterId":{},"QueryAuthorizationId":{},"AdditionalContext":{"type":"map","key":{},"value":{}}}},"Sqi":{"type":"structure","members":{"FunctionName":{},"DatabaseName":{},"ClassName":{},"OwnerName":{},"OwnerType":{},"CreateTime":{"type":"timestamp"},"ResourceUris":{"shape":"Sgx"},"CatalogId":{}}},"Stb":{"type":"structure","members":{"MetadataKey":{},"MetadataValue":{}}},"Stw":{"type":"list","member":{}},"Svp":{"type":"list","member":{"shape":"Sjk"}},"Svr":{"type":"list","member":{"type":"structure","members":{"ColumnStatistics":{"shape":"Sjk"},"Error":{"shape":"S14"}}}}}}

/***/ }),
/* 554 */
/***/ (function(module, exports) {

	module.exports = {"pagination":{"GetBlueprintRuns":{"input_token":"NextToken","limit_key":"MaxResults","output_token":"NextToken"},"GetClassifiers":{"input_token":"NextToken","limit_key":"MaxResults","output_token":"NextToken"},"GetColumnStatisticsTaskRuns":{"input_token":"NextToken","limit_key":"MaxResults","output_token":"NextToken"},"GetConnections":{"input_token":"NextToken","limit_key":"MaxResults","output_token":"NextToken"},"GetCrawlerMetrics":{"input_token":"NextToken","limit_key":"MaxResults","output_token":"NextToken"},"GetCrawlers":{"input_token":"NextToken","limit_key":"MaxResults","output_token":"NextToken"},"GetDatabases":{"input_token":"NextToken","limit_key":"MaxResults","output_token":"NextToken"},"GetDevEndpoints":{"input_token":"NextToken","limit_key":"MaxResults","output_token":"NextToken"},"GetJobRuns":{"input_token":"NextToken","limit_key":"MaxResults","output_token":"NextToken"},"GetJobs":{"input_token":"NextToken","limit_key":"MaxResults","output_token":"NextToken"},"GetMLTaskRuns":{"input_token":"NextToken","limit_key":"MaxResults","output_token":"NextToken"},"GetMLTransforms":{"input_token":"NextToken","limit_key":"MaxResults","output_token":"NextToken"},"GetPartitionIndexes":{"input_token":"NextToken","output_token":"NextToken","result_key":"PartitionIndexDescriptorList"},"GetPartitions":{"input_token":"NextToken","limit_key":"MaxResults","output_token":"NextToken"},"GetResourcePolicies":{"input_token":"NextToken","limit_key":"MaxResults","output_token":"NextToken","result_key":"GetResourcePoliciesResponseList"},"GetSecurityConfigurations":{"input_token":"NextToken","limit_key":"MaxResults","output_token":"NextToken","result_key":"SecurityConfigurations"},"GetTableVersions":{"input_token":"NextToken","limit_key":"MaxResults","output_token":"NextToken"},"GetTables":{"input_token":"NextToken","limit_key":"MaxResults","output_token":"NextToken"},"GetTriggers":{"input_token":"NextToken","limit_key":"MaxResults","output_token":"NextToken"},"GetUnfilteredPartitionsMetadata":{"input_token":"NextToken","limit_key":"MaxResults","output_token":"NextToken"},"GetUserDefinedFunctions":{"input_token":"NextToken","limit_key":"MaxResults","output_token":"NextToken"},"GetWorkflowRuns":{"input_token":"NextToken","limit_key":"MaxResults","output_token":"NextToken"},"ListBlueprints":{"input_token":"NextToken","limit_key":"MaxResults","output_token":"NextToken"},"ListColumnStatisticsTaskRuns":{"input_token":"NextToken","limit_key":"MaxResults","output_token":"NextToken"},"ListCrawlers":{"input_token":"NextToken","limit_key":"MaxResults","output_token":"NextToken"},"ListCustomEntityTypes":{"input_token":"NextToken","limit_key":"MaxResults","output_token":"NextToken"},"ListDataQualityResults":{"input_token":"NextToken","limit_key":"MaxResults","output_token":"NextToken"},"ListDataQualityRuleRecommendationRuns":{"input_token":"NextToken","limit_key":"MaxResults","output_token":"NextToken"},"ListDataQualityRulesetEvaluationRuns":{"input_token":"NextToken","limit_key":"MaxResults","output_token":"NextToken"},"ListDataQualityRulesets":{"input_token":"NextToken","limit_key":"MaxResults","output_token":"NextToken"},"ListDevEndpoints":{"input_token":"NextToken","limit_key":"MaxResults","output_token":"NextToken"},"ListJobs":{"input_token":"NextToken","limit_key":"MaxResults","output_token":"NextToken"},"ListMLTransforms":{"input_token":"NextToken","limit_key":"MaxResults","output_token":"NextToken"},"ListRegistries":{"input_token":"NextToken","limit_key":"MaxResults","output_token":"NextToken","result_key":"Registries"},"ListSchemaVersions":{"input_token":"NextToken","limit_key":"MaxResults","output_token":"NextToken","result_key":"Schemas"},"ListSchemas":{"input_token":"NextToken","limit_key":"MaxResults","output_token":"NextToken","result_key":"Schemas"},"ListSessions":{"input_token":"NextToken","limit_key":"MaxResults","output_token":"NextToken"},"ListTableOptimizerRuns":{"input_token":"NextToken","limit_key":"MaxResults","output_token":"NextToken"},"ListTriggers":{"input_token":"NextToken","limit_key":"MaxResults","output_token":"NextToken"},"ListWorkflows":{"input_token":"NextToken","limit_key":"MaxResults","output_token":"NextToken"},"SearchTables":{"input_token":"NextToken","limit_key":"MaxResults","output_token":"NextToken"}}}

/***/ }),
/* 555 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(2);
	var AWS = __webpack_require__(4);
	var Service = AWS.Service;
	var apiLoader = AWS.apiLoader;

	apiLoader.services['mobile'] = {};
	AWS.Mobile = Service.defineService('mobile', ['2017-07-01']);
	Object.defineProperty(apiLoader.services['mobile'], '2017-07-01', {
	  get: function get() {
	    var model = __webpack_require__(556);
	    model.paginators = __webpack_require__(557).pagination;
	    return model;
	  },
	  enumerable: true,
	  configurable: true
	});

	module.exports = AWS.Mobile;


/***/ }),
/* 556 */
/***/ (function(module, exports) {

	module.exports = {"version":"2.0","metadata":{"apiVersion":"2017-07-01","endpointPrefix":"mobile","jsonVersion":"1.1","protocol":"rest-json","serviceFullName":"AWS Mobile","serviceId":"Mobile","signatureVersion":"v4","signingName":"AWSMobileHubService","uid":"mobile-2017-07-01"},"operations":{"CreateProject":{"http":{"requestUri":"/projects"},"input":{"type":"structure","members":{"name":{"location":"querystring","locationName":"name"},"region":{"location":"querystring","locationName":"region"},"contents":{"type":"blob"},"snapshotId":{"location":"querystring","locationName":"snapshotId"}},"payload":"contents"},"output":{"type":"structure","members":{"details":{"shape":"S7"}}}},"DeleteProject":{"http":{"method":"DELETE","requestUri":"/projects/{projectId}"},"input":{"type":"structure","required":["projectId"],"members":{"projectId":{"location":"uri","locationName":"projectId"}}},"output":{"type":"structure","members":{"deletedResources":{"shape":"Sc"},"orphanedResources":{"shape":"Sc"}}}},"DescribeBundle":{"http":{"method":"GET","requestUri":"/bundles/{bundleId}"},"input":{"type":"structure","required":["bundleId"],"members":{"bundleId":{"location":"uri","locationName":"bundleId"}}},"output":{"type":"structure","members":{"details":{"shape":"Sq"}}}},"DescribeProject":{"http":{"method":"GET","requestUri":"/project"},"input":{"type":"structure","required":["projectId"],"members":{"projectId":{"location":"querystring","locationName":"projectId"},"syncFromResources":{"location":"querystring","locationName":"syncFromResources","type":"boolean"}}},"output":{"type":"structure","members":{"details":{"shape":"S7"}}}},"ExportBundle":{"http":{"requestUri":"/bundles/{bundleId}"},"input":{"type":"structure","required":["bundleId"],"members":{"bundleId":{"location":"uri","locationName":"bundleId"},"projectId":{"location":"querystring","locationName":"projectId"},"platform":{"location":"querystring","locationName":"platform"}}},"output":{"type":"structure","members":{"downloadUrl":{}}}},"ExportProject":{"http":{"requestUri":"/exports/{projectId}"},"input":{"type":"structure","required":["projectId"],"members":{"projectId":{"location":"uri","locationName":"projectId"}}},"output":{"type":"structure","members":{"downloadUrl":{},"shareUrl":{},"snapshotId":{}}}},"ListBundles":{"http":{"method":"GET","requestUri":"/bundles"},"input":{"type":"structure","members":{"maxResults":{"location":"querystring","locationName":"maxResults","type":"integer"},"nextToken":{"location":"querystring","locationName":"nextToken"}}},"output":{"type":"structure","members":{"bundleList":{"type":"list","member":{"shape":"Sq"}},"nextToken":{}}}},"ListProjects":{"http":{"method":"GET","requestUri":"/projects"},"input":{"type":"structure","members":{"maxResults":{"location":"querystring","locationName":"maxResults","type":"integer"},"nextToken":{"location":"querystring","locationName":"nextToken"}}},"output":{"type":"structure","members":{"projects":{"type":"list","member":{"type":"structure","members":{"name":{},"projectId":{}}}},"nextToken":{}}}},"UpdateProject":{"http":{"requestUri":"/update"},"input":{"type":"structure","required":["projectId"],"members":{"contents":{"type":"blob"},"projectId":{"location":"querystring","locationName":"projectId"}},"payload":"contents"},"output":{"type":"structure","members":{"details":{"shape":"S7"}}}}},"shapes":{"S7":{"type":"structure","members":{"name":{},"projectId":{},"region":{},"state":{},"createdDate":{"type":"timestamp"},"lastUpdatedDate":{"type":"timestamp"},"consoleUrl":{},"resources":{"shape":"Sc"}}},"Sc":{"type":"list","member":{"type":"structure","members":{"type":{},"name":{},"arn":{},"feature":{},"attributes":{"type":"map","key":{},"value":{}}}}},"Sq":{"type":"structure","members":{"bundleId":{},"title":{},"version":{},"description":{},"iconUrl":{},"availablePlatforms":{"type":"list","member":{}}}}}}

/***/ }),
/* 557 */
/***/ (function(module, exports) {

	module.exports = {"pagination":{"ListBundles":{"input_token":"nextToken","output_token":"nextToken","limit_key":"maxResults"},"ListProjects":{"input_token":"nextToken","output_token":"nextToken","limit_key":"maxResults"}}}

/***/ }),
/* 558 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(2);
	var AWS = __webpack_require__(4);
	var Service = AWS.Service;
	var apiLoader = AWS.apiLoader;

	apiLoader.services['pricing'] = {};
	AWS.Pricing = Service.defineService('pricing', ['2017-10-15']);
	Object.defineProperty(apiLoader.services['pricing'], '2017-10-15', {
	  get: function get() {
	    var model = __webpack_require__(559);
	    model.paginators = __webpack_require__(560).pagination;
	    model.waiters = __webpack_require__(561).waiters;
	    return model;
	  },
	  enumerable: true,
	  configurable: true
	});

	module.exports = AWS.Pricing;


/***/ }),
/* 559 */
/***/ (function(module, exports) {

	module.exports = {"version":"2.0","metadata":{"apiVersion":"2017-10-15","endpointPrefix":"api.pricing","jsonVersion":"1.1","protocol":"json","serviceAbbreviation":"AWS Pricing","serviceFullName":"AWS Price List Service","serviceId":"Pricing","signatureVersion":"v4","signingName":"pricing","targetPrefix":"AWSPriceListService","uid":"pricing-2017-10-15"},"operations":{"DescribeServices":{"input":{"type":"structure","members":{"ServiceCode":{},"FormatVersion":{},"NextToken":{},"MaxResults":{"type":"integer"}}},"output":{"type":"structure","members":{"Services":{"type":"list","member":{"type":"structure","required":["ServiceCode"],"members":{"ServiceCode":{},"AttributeNames":{"type":"list","member":{}}}}},"FormatVersion":{},"NextToken":{}}}},"GetAttributeValues":{"input":{"type":"structure","required":["ServiceCode","AttributeName"],"members":{"ServiceCode":{},"AttributeName":{},"NextToken":{},"MaxResults":{"type":"integer"}}},"output":{"type":"structure","members":{"AttributeValues":{"type":"list","member":{"type":"structure","members":{"Value":{}}}},"NextToken":{}}}},"GetPriceListFileUrl":{"input":{"type":"structure","required":["PriceListArn","FileFormat"],"members":{"PriceListArn":{},"FileFormat":{}}},"output":{"type":"structure","members":{"Url":{}}}},"GetProducts":{"input":{"type":"structure","required":["ServiceCode"],"members":{"ServiceCode":{},"Filters":{"type":"list","member":{"type":"structure","required":["Type","Field","Value"],"members":{"Type":{},"Field":{},"Value":{}}}},"FormatVersion":{},"NextToken":{},"MaxResults":{"type":"integer"}}},"output":{"type":"structure","members":{"FormatVersion":{},"PriceList":{"type":"list","member":{"jsonvalue":true}},"NextToken":{}}}},"ListPriceLists":{"input":{"type":"structure","required":["ServiceCode","EffectiveDate","CurrencyCode"],"members":{"ServiceCode":{},"EffectiveDate":{"type":"timestamp"},"RegionCode":{},"CurrencyCode":{},"NextToken":{},"MaxResults":{"type":"integer"}}},"output":{"type":"structure","members":{"PriceLists":{"type":"list","member":{"type":"structure","members":{"PriceListArn":{},"RegionCode":{},"CurrencyCode":{},"FileFormats":{"type":"list","member":{}}}}},"NextToken":{}}}}},"shapes":{}}

/***/ }),
/* 560 */
/***/ (function(module, exports) {

	module.exports = {"pagination":{"DescribeServices":{"input_token":"NextToken","output_token":"NextToken","limit_key":"MaxResults","result_key":"Services"},"GetAttributeValues":{"input_token":"NextToken","output_token":"NextToken","limit_key":"MaxResults","result_key":"AttributeValues"},"GetProducts":{"input_token":"NextToken","output_token":"NextToken","limit_key":"MaxResults","result_key":"PriceList"},"ListPriceLists":{"input_token":"NextToken","output_token":"NextToken","limit_key":"MaxResults","result_key":"PriceLists"}}}

/***/ }),
/* 561 */
/***/ (function(module, exports) {

	module.exports = {"version":2,"waiters":{}}

/***/ }),
/* 562 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(2);
	var AWS = __webpack_require__(4);
	var Service = AWS.Service;
	var apiLoader = AWS.apiLoader;

	apiLoader.services['costexplorer'] = {};
	AWS.CostExplorer = Service.defineService('costexplorer', ['2017-10-25']);
	Object.defineProperty(apiLoader.services['costexplorer'], '2017-10-25', {
	  get: function get() {
	    var model = __webpack_require__(563);
	    model.paginators = __webpack_require__(564).pagination;
	    return model;
	  },
	  enumerable: true,
	  configurable: true
	});

	module.exports = AWS.CostExplorer;


/***/ }),
/* 563 */
/***/ (function(module, exports) {

	module.exports = {"version":"2.0","metadata":{"apiVersion":"2017-10-25","endpointPrefix":"ce","jsonVersion":"1.1","protocol":"json","serviceAbbreviation":"AWS Cost Explorer","serviceFullName":"AWS Cost Explorer Service","serviceId":"Cost Explorer","signatureVersion":"v4","signingName":"ce","targetPrefix":"AWSInsightsIndexService","uid":"ce-2017-10-25"},"operations":{"CreateAnomalyMonitor":{"input":{"type":"structure","required":["AnomalyMonitor"],"members":{"AnomalyMonitor":{"shape":"S2"},"ResourceTags":{"shape":"Sk"}}},"output":{"type":"structure","required":["MonitorArn"],"members":{"MonitorArn":{}}}},"CreateAnomalySubscription":{"input":{"type":"structure","required":["AnomalySubscription"],"members":{"AnomalySubscription":{"shape":"Sq"},"ResourceTags":{"shape":"Sk"}}},"output":{"type":"structure","required":["SubscriptionArn"],"members":{"SubscriptionArn":{}}}},"CreateCostCategoryDefinition":{"input":{"type":"structure","required":["Name","RuleVersion","Rules"],"members":{"Name":{},"EffectiveStart":{},"RuleVersion":{},"Rules":{"shape":"S14"},"DefaultValue":{},"SplitChargeRules":{"shape":"S1a"},"ResourceTags":{"shape":"Sk"}}},"output":{"type":"structure","members":{"CostCategoryArn":{},"EffectiveStart":{}}}},"DeleteAnomalyMonitor":{"input":{"type":"structure","required":["MonitorArn"],"members":{"MonitorArn":{}}},"output":{"type":"structure","members":{}}},"DeleteAnomalySubscription":{"input":{"type":"structure","required":["SubscriptionArn"],"members":{"SubscriptionArn":{}}},"output":{"type":"structure","members":{}}},"DeleteCostCategoryDefinition":{"input":{"type":"structure","required":["CostCategoryArn"],"members":{"CostCategoryArn":{}}},"output":{"type":"structure","members":{"CostCategoryArn":{},"EffectiveEnd":{}}}},"DescribeCostCategoryDefinition":{"input":{"type":"structure","required":["CostCategoryArn"],"members":{"CostCategoryArn":{},"EffectiveOn":{}}},"output":{"type":"structure","members":{"CostCategory":{"type":"structure","required":["CostCategoryArn","EffectiveStart","Name","RuleVersion","Rules"],"members":{"CostCategoryArn":{},"EffectiveStart":{},"EffectiveEnd":{},"Name":{},"RuleVersion":{},"Rules":{"shape":"S14"},"SplitChargeRules":{"shape":"S1a"},"ProcessingStatus":{"shape":"S1s"},"DefaultValue":{}}}}}},"GetAnomalies":{"input":{"type":"structure","required":["DateInterval"],"members":{"MonitorArn":{},"DateInterval":{"type":"structure","required":["StartDate"],"members":{"StartDate":{},"EndDate":{}}},"Feedback":{},"TotalImpact":{"type":"structure","required":["NumericOperator","StartValue"],"members":{"NumericOperator":{},"StartValue":{"type":"double"},"EndValue":{"type":"double"}}},"NextPageToken":{},"MaxResults":{"type":"integer"}}},"output":{"type":"structure","required":["Anomalies"],"members":{"Anomalies":{"type":"list","member":{"type":"structure","required":["AnomalyId","AnomalyScore","Impact","MonitorArn"],"members":{"AnomalyId":{},"AnomalyStartDate":{},"AnomalyEndDate":{},"DimensionValue":{},"RootCauses":{"type":"list","member":{"type":"structure","members":{"Service":{},"Region":{},"LinkedAccount":{},"UsageType":{},"LinkedAccountName":{}}}},"AnomalyScore":{"type":"structure","required":["MaxScore","CurrentScore"],"members":{"MaxScore":{"type":"double"},"CurrentScore":{"type":"double"}}},"Impact":{"type":"structure","required":["MaxImpact"],"members":{"MaxImpact":{"type":"double"},"TotalImpact":{"type":"double"},"TotalActualSpend":{"type":"double"},"TotalExpectedSpend":{"type":"double"},"TotalImpactPercentage":{"type":"double"}}},"MonitorArn":{},"Feedback":{}}}},"NextPageToken":{}}}},"GetAnomalyMonitors":{"input":{"type":"structure","members":{"MonitorArnList":{"shape":"Sb"},"NextPageToken":{},"MaxResults":{"type":"integer"}}},"output":{"type":"structure","required":["AnomalyMonitors"],"members":{"AnomalyMonitors":{"type":"list","member":{"shape":"S2"}},"NextPageToken":{}}}},"GetAnomalySubscriptions":{"input":{"type":"structure","members":{"SubscriptionArnList":{"shape":"Sb"},"MonitorArn":{},"NextPageToken":{},"MaxResults":{"type":"integer"}}},"output":{"type":"structure","required":["AnomalySubscriptions"],"members":{"AnomalySubscriptions":{"type":"list","member":{"shape":"Sq"}},"NextPageToken":{}}}},"GetCostAndUsage":{"input":{"type":"structure","required":["TimePeriod","Granularity","Metrics"],"members":{"TimePeriod":{"shape":"S2i"},"Granularity":{},"Filter":{"shape":"S7"},"Metrics":{"shape":"S2k"},"GroupBy":{"shape":"S2m"},"NextPageToken":{}}},"output":{"type":"structure","members":{"NextPageToken":{},"GroupDefinitions":{"shape":"S2m"},"ResultsByTime":{"shape":"S2r"},"DimensionValueAttributes":{"shape":"S32"}}}},"GetCostAndUsageWithResources":{"input":{"type":"structure","required":["TimePeriod","Granularity","Filter"],"members":{"TimePeriod":{"shape":"S2i"},"Granularity":{},"Filter":{"shape":"S7"},"Metrics":{"shape":"S2k"},"GroupBy":{"shape":"S2m"},"NextPageToken":{}}},"output":{"type":"structure","members":{"NextPageToken":{},"GroupDefinitions":{"shape":"S2m"},"ResultsByTime":{"shape":"S2r"},"DimensionValueAttributes":{"shape":"S32"}}}},"GetCostCategories":{"input":{"type":"structure","required":["TimePeriod"],"members":{"SearchString":{},"TimePeriod":{"shape":"S2i"},"CostCategoryName":{},"Filter":{"shape":"S7"},"SortBy":{"shape":"S3b"},"MaxResults":{"type":"integer"},"NextPageToken":{}}},"output":{"type":"structure","required":["ReturnSize","TotalSize"],"members":{"NextPageToken":{},"CostCategoryNames":{"type":"list","member":{}},"CostCategoryValues":{"shape":"S3i"},"ReturnSize":{"type":"integer"},"TotalSize":{"type":"integer"}}}},"GetCostForecast":{"input":{"type":"structure","required":["TimePeriod","Metric","Granularity"],"members":{"TimePeriod":{"shape":"S2i"},"Metric":{},"Granularity":{},"Filter":{"shape":"S7"},"PredictionIntervalLevel":{"type":"integer"}}},"output":{"type":"structure","members":{"Total":{"shape":"S2u"},"ForecastResultsByTime":{"shape":"S3n"}}}},"GetDimensionValues":{"input":{"type":"structure","required":["TimePeriod","Dimension"],"members":{"SearchString":{},"TimePeriod":{"shape":"S2i"},"Dimension":{},"Context":{},"Filter":{"shape":"S7"},"SortBy":{"shape":"S3b"},"MaxResults":{"type":"integer"},"NextPageToken":{}}},"output":{"type":"structure","required":["DimensionValues","ReturnSize","TotalSize"],"members":{"DimensionValues":{"shape":"S32"},"ReturnSize":{"type":"integer"},"TotalSize":{"type":"integer"},"NextPageToken":{}}}},"GetReservationCoverage":{"input":{"type":"structure","required":["TimePeriod"],"members":{"TimePeriod":{"shape":"S2i"},"GroupBy":{"shape":"S2m"},"Granularity":{},"Filter":{"shape":"S7"},"Metrics":{"shape":"S2k"},"NextPageToken":{},"SortBy":{"shape":"S3c"},"MaxResults":{"type":"integer"}}},"output":{"type":"structure","required":["CoveragesByTime"],"members":{"CoveragesByTime":{"type":"list","member":{"type":"structure","members":{"TimePeriod":{"shape":"S2i"},"Groups":{"type":"list","member":{"type":"structure","members":{"Attributes":{"shape":"S34"},"Coverage":{"shape":"S3y"}}}},"Total":{"shape":"S3y"}}}},"Total":{"shape":"S3y"},"NextPageToken":{}}}},"GetReservationPurchaseRecommendation":{"input":{"type":"structure","required":["Service"],"members":{"AccountId":{},"Service":{},"Filter":{"shape":"S7"},"AccountScope":{},"LookbackPeriodInDays":{},"TermInYears":{},"PaymentOption":{},"ServiceSpecification":{"shape":"S4g"},"PageSize":{"type":"integer"},"NextPageToken":{}}},"output":{"type":"structure","members":{"Metadata":{"type":"structure","members":{"RecommendationId":{},"GenerationTimestamp":{}}},"Recommendations":{"type":"list","member":{"type":"structure","members":{"AccountScope":{},"LookbackPeriodInDays":{},"TermInYears":{},"PaymentOption":{},"ServiceSpecification":{"shape":"S4g"},"RecommendationDetails":{"type":"list","member":{"type":"structure","members":{"AccountId":{},"InstanceDetails":{"type":"structure","members":{"EC2InstanceDetails":{"type":"structure","members":{"Family":{},"InstanceType":{},"Region":{},"AvailabilityZone":{},"Platform":{},"Tenancy":{},"CurrentGeneration":{"type":"boolean"},"SizeFlexEligible":{"type":"boolean"}}},"RDSInstanceDetails":{"type":"structure","members":{"Family":{},"InstanceType":{},"Region":{},"DatabaseEngine":{},"DatabaseEdition":{},"DeploymentOption":{},"LicenseModel":{},"CurrentGeneration":{"type":"boolean"},"SizeFlexEligible":{"type":"boolean"}}},"RedshiftInstanceDetails":{"type":"structure","members":{"Family":{},"NodeType":{},"Region":{},"CurrentGeneration":{"type":"boolean"},"SizeFlexEligible":{"type":"boolean"}}},"ElastiCacheInstanceDetails":{"type":"structure","members":{"Family":{},"NodeType":{},"Region":{},"ProductDescription":{},"CurrentGeneration":{"type":"boolean"},"SizeFlexEligible":{"type":"boolean"}}},"ESInstanceDetails":{"type":"structure","members":{"InstanceClass":{},"InstanceSize":{},"Region":{},"CurrentGeneration":{"type":"boolean"},"SizeFlexEligible":{"type":"boolean"}}},"MemoryDBInstanceDetails":{"type":"structure","members":{"Family":{},"NodeType":{},"Region":{},"CurrentGeneration":{"type":"boolean"},"SizeFlexEligible":{"type":"boolean"}}}}},"RecommendedNumberOfInstancesToPurchase":{},"RecommendedNormalizedUnitsToPurchase":{},"MinimumNumberOfInstancesUsedPerHour":{},"MinimumNormalizedUnitsUsedPerHour":{},"MaximumNumberOfInstancesUsedPerHour":{},"MaximumNormalizedUnitsUsedPerHour":{},"AverageNumberOfInstancesUsedPerHour":{},"AverageNormalizedUnitsUsedPerHour":{},"AverageUtilization":{},"EstimatedBreakEvenInMonths":{},"CurrencyCode":{},"EstimatedMonthlySavingsAmount":{},"EstimatedMonthlySavingsPercentage":{},"EstimatedMonthlyOnDemandCost":{},"EstimatedReservationCostForLookbackPeriod":{},"UpfrontCost":{},"RecurringStandardMonthlyCost":{}}}},"RecommendationSummary":{"type":"structure","members":{"TotalEstimatedMonthlySavingsAmount":{},"TotalEstimatedMonthlySavingsPercentage":{},"CurrencyCode":{}}}}}},"NextPageToken":{}}}},"GetReservationUtilization":{"input":{"type":"structure","required":["TimePeriod"],"members":{"TimePeriod":{"shape":"S2i"},"GroupBy":{"shape":"S2m"},"Granularity":{},"Filter":{"shape":"S7"},"SortBy":{"shape":"S3c"},"NextPageToken":{},"MaxResults":{"type":"integer"}}},"output":{"type":"structure","required":["UtilizationsByTime"],"members":{"UtilizationsByTime":{"type":"list","member":{"type":"structure","members":{"TimePeriod":{"shape":"S2i"},"Groups":{"type":"list","member":{"type":"structure","members":{"Key":{},"Value":{},"Attributes":{"shape":"S34"},"Utilization":{"shape":"S56"}}}},"Total":{"shape":"S56"}}}},"Total":{"shape":"S56"},"NextPageToken":{}}}},"GetRightsizingRecommendation":{"input":{"type":"structure","required":["Service"],"members":{"Filter":{"shape":"S7"},"Configuration":{"shape":"S5p"},"Service":{},"PageSize":{"type":"integer"},"NextPageToken":{}}},"output":{"type":"structure","members":{"Metadata":{"type":"structure","members":{"RecommendationId":{},"GenerationTimestamp":{},"LookbackPeriodInDays":{},"AdditionalMetadata":{}}},"Summary":{"type":"structure","members":{"TotalRecommendationCount":{},"EstimatedTotalMonthlySavingsAmount":{},"SavingsCurrencyCode":{},"SavingsPercentage":{}}},"RightsizingRecommendations":{"type":"list","member":{"type":"structure","members":{"AccountId":{},"CurrentInstance":{"type":"structure","members":{"ResourceId":{},"InstanceName":{},"Tags":{"type":"list","member":{"shape":"Sf"}},"ResourceDetails":{"shape":"S5y"},"ResourceUtilization":{"shape":"S60"},"ReservationCoveredHoursInLookbackPeriod":{},"SavingsPlansCoveredHoursInLookbackPeriod":{},"OnDemandHoursInLookbackPeriod":{},"TotalRunningHoursInLookbackPeriod":{},"MonthlyCost":{},"CurrencyCode":{}}},"RightsizingType":{},"ModifyRecommendationDetail":{"type":"structure","members":{"TargetInstances":{"type":"list","member":{"type":"structure","members":{"EstimatedMonthlyCost":{},"EstimatedMonthlySavings":{},"CurrencyCode":{},"DefaultTargetInstance":{"type":"boolean"},"ResourceDetails":{"shape":"S5y"},"ExpectedResourceUtilization":{"shape":"S60"},"PlatformDifferences":{"type":"list","member":{}}}}}}},"TerminateRecommendationDetail":{"type":"structure","members":{"EstimatedMonthlySavings":{},"CurrencyCode":{}}},"FindingReasonCodes":{"type":"list","member":{}}}}},"NextPageToken":{},"Configuration":{"shape":"S5p"}}}},"GetSavingsPlanPurchaseRecommendationDetails":{"input":{"type":"structure","required":["RecommendationDetailId"],"members":{"RecommendationDetailId":{}}},"output":{"type":"structure","members":{"RecommendationDetailId":{},"RecommendationDetailData":{"type":"structure","members":{"AccountScope":{},"LookbackPeriodInDays":{},"SavingsPlansType":{},"TermInYears":{},"PaymentOption":{},"AccountId":{},"CurrencyCode":{},"InstanceFamily":{},"Region":{},"OfferingId":{},"GenerationTimestamp":{},"LatestUsageTimestamp":{},"CurrentAverageHourlyOnDemandSpend":{},"CurrentMaximumHourlyOnDemandSpend":{},"CurrentMinimumHourlyOnDemandSpend":{},"EstimatedAverageUtilization":{},"EstimatedMonthlySavingsAmount":{},"EstimatedOnDemandCost":{},"EstimatedOnDemandCostWithCurrentCommitment":{},"EstimatedROI":{},"EstimatedSPCost":{},"EstimatedSavingsAmount":{},"EstimatedSavingsPercentage":{},"ExistingHourlyCommitment":{},"HourlyCommitmentToPurchase":{},"UpfrontCost":{},"CurrentAverageCoverage":{},"EstimatedAverageCoverage":{},"MetricsOverLookbackPeriod":{"type":"list","member":{"type":"structure","members":{"StartTime":{},"EstimatedOnDemandCost":{},"CurrentCoverage":{},"EstimatedCoverage":{},"EstimatedNewCommitmentUtilization":{}}}}}}}}},"GetSavingsPlansCoverage":{"input":{"type":"structure","required":["TimePeriod"],"members":{"TimePeriod":{"shape":"S2i"},"GroupBy":{"shape":"S2m"},"Granularity":{},"Filter":{"shape":"S7"},"Metrics":{"shape":"S2k"},"NextToken":{},"MaxResults":{"type":"integer"},"SortBy":{"shape":"S3c"}}},"output":{"type":"structure","required":["SavingsPlansCoverages"],"members":{"SavingsPlansCoverages":{"type":"list","member":{"type":"structure","members":{"Attributes":{"shape":"S34"},"Coverage":{"type":"structure","members":{"SpendCoveredBySavingsPlans":{},"OnDemandCost":{},"TotalCost":{},"CoveragePercentage":{}}},"TimePeriod":{"shape":"S2i"}}}},"NextToken":{}}}},"GetSavingsPlansPurchaseRecommendation":{"input":{"type":"structure","required":["SavingsPlansType","TermInYears","PaymentOption","LookbackPeriodInDays"],"members":{"SavingsPlansType":{},"TermInYears":{},"PaymentOption":{},"AccountScope":{},"NextPageToken":{},"PageSize":{"type":"integer"},"LookbackPeriodInDays":{},"Filter":{"shape":"S7"}}},"output":{"type":"structure","members":{"Metadata":{"type":"structure","members":{"RecommendationId":{},"GenerationTimestamp":{},"AdditionalMetadata":{}}},"SavingsPlansPurchaseRecommendation":{"type":"structure","members":{"AccountScope":{},"SavingsPlansType":{},"TermInYears":{},"PaymentOption":{},"LookbackPeriodInDays":{},"SavingsPlansPurchaseRecommendationDetails":{"type":"list","member":{"type":"structure","members":{"SavingsPlansDetails":{"type":"structure","members":{"Region":{},"InstanceFamily":{},"OfferingId":{}}},"AccountId":{},"UpfrontCost":{},"EstimatedROI":{},"CurrencyCode":{},"EstimatedSPCost":{},"EstimatedOnDemandCost":{},"EstimatedOnDemandCostWithCurrentCommitment":{},"EstimatedSavingsAmount":{},"EstimatedSavingsPercentage":{},"HourlyCommitmentToPurchase":{},"EstimatedAverageUtilization":{},"EstimatedMonthlySavingsAmount":{},"CurrentMinimumHourlyOnDemandSpend":{},"CurrentMaximumHourlyOnDemandSpend":{},"CurrentAverageHourlyOnDemandSpend":{},"RecommendationDetailId":{}}}},"SavingsPlansPurchaseRecommendationSummary":{"type":"structure","members":{"EstimatedROI":{},"CurrencyCode":{},"EstimatedTotalCost":{},"CurrentOnDemandSpend":{},"EstimatedSavingsAmount":{},"TotalRecommendationCount":{},"DailyCommitmentToPurchase":{},"HourlyCommitmentToPurchase":{},"EstimatedSavingsPercentage":{},"EstimatedMonthlySavingsAmount":{},"EstimatedOnDemandCostWithCurrentCommitment":{}}}}},"NextPageToken":{}}}},"GetSavingsPlansUtilization":{"input":{"type":"structure","required":["TimePeriod"],"members":{"TimePeriod":{"shape":"S2i"},"Granularity":{},"Filter":{"shape":"S7"},"SortBy":{"shape":"S3c"}}},"output":{"type":"structure","required":["Total"],"members":{"SavingsPlansUtilizationsByTime":{"type":"list","member":{"type":"structure","required":["TimePeriod","Utilization"],"members":{"TimePeriod":{"shape":"S2i"},"Utilization":{"shape":"S72"},"Savings":{"shape":"S73"},"AmortizedCommitment":{"shape":"S74"}}}},"Total":{"shape":"S75"}}}},"GetSavingsPlansUtilizationDetails":{"input":{"type":"structure","required":["TimePeriod"],"members":{"TimePeriod":{"shape":"S2i"},"Filter":{"shape":"S7"},"DataType":{"type":"list","member":{}},"NextToken":{},"MaxResults":{"type":"integer"},"SortBy":{"shape":"S3c"}}},"output":{"type":"structure","required":["SavingsPlansUtilizationDetails","TimePeriod"],"members":{"SavingsPlansUtilizationDetails":{"type":"list","member":{"type":"structure","members":{"SavingsPlanArn":{},"Attributes":{"shape":"S34"},"Utilization":{"shape":"S72"},"Savings":{"shape":"S73"},"AmortizedCommitment":{"shape":"S74"}}}},"Total":{"shape":"S75"},"TimePeriod":{"shape":"S2i"},"NextToken":{}}}},"GetTags":{"input":{"type":"structure","required":["TimePeriod"],"members":{"SearchString":{},"TimePeriod":{"shape":"S2i"},"TagKey":{},"Filter":{"shape":"S7"},"SortBy":{"shape":"S3b"},"MaxResults":{"type":"integer"},"NextPageToken":{}}},"output":{"type":"structure","required":["Tags","ReturnSize","TotalSize"],"members":{"NextPageToken":{},"Tags":{"type":"list","member":{}},"ReturnSize":{"type":"integer"},"TotalSize":{"type":"integer"}}}},"GetUsageForecast":{"input":{"type":"structure","required":["TimePeriod","Metric","Granularity"],"members":{"TimePeriod":{"shape":"S2i"},"Metric":{},"Granularity":{},"Filter":{"shape":"S7"},"PredictionIntervalLevel":{"type":"integer"}}},"output":{"type":"structure","members":{"Total":{"shape":"S2u"},"ForecastResultsByTime":{"shape":"S3n"}}}},"ListCostAllocationTags":{"input":{"type":"structure","members":{"Status":{},"TagKeys":{"type":"list","member":{}},"Type":{},"NextToken":{},"MaxResults":{"type":"integer"}}},"output":{"type":"structure","members":{"CostAllocationTags":{"type":"list","member":{"type":"structure","required":["TagKey","Type","Status"],"members":{"TagKey":{},"Type":{},"Status":{},"LastUpdatedDate":{},"LastUsedDate":{}}}},"NextToken":{}}}},"ListCostCategoryDefinitions":{"input":{"type":"structure","members":{"EffectiveOn":{},"NextToken":{},"MaxResults":{"type":"integer"}}},"output":{"type":"structure","members":{"CostCategoryReferences":{"type":"list","member":{"type":"structure","members":{"CostCategoryArn":{},"Name":{},"EffectiveStart":{},"EffectiveEnd":{},"NumberOfRules":{"type":"integer"},"ProcessingStatus":{"shape":"S1s"},"Values":{"shape":"S3i"},"DefaultValue":{}}}},"NextToken":{}}}},"ListSavingsPlansPurchaseRecommendationGeneration":{"input":{"type":"structure","members":{"GenerationStatus":{},"RecommendationIds":{"type":"list","member":{}},"PageSize":{"type":"integer"},"NextPageToken":{}}},"output":{"type":"structure","members":{"GenerationSummaryList":{"type":"list","member":{"type":"structure","members":{"RecommendationId":{},"GenerationStatus":{},"GenerationStartedTime":{},"GenerationCompletionTime":{},"EstimatedCompletionTime":{}}}},"NextPageToken":{}}}},"ListTagsForResource":{"input":{"type":"structure","required":["ResourceArn"],"members":{"ResourceArn":{}}},"output":{"type":"structure","members":{"ResourceTags":{"shape":"Sk"}}}},"ProvideAnomalyFeedback":{"input":{"type":"structure","required":["AnomalyId","Feedback"],"members":{"AnomalyId":{},"Feedback":{}}},"output":{"type":"structure","required":["AnomalyId"],"members":{"AnomalyId":{}}}},"StartSavingsPlansPurchaseRecommendationGeneration":{"input":{"type":"structure","members":{}},"output":{"type":"structure","members":{"RecommendationId":{},"GenerationStartedTime":{},"EstimatedCompletionTime":{}}}},"TagResource":{"input":{"type":"structure","required":["ResourceArn","ResourceTags"],"members":{"ResourceArn":{},"ResourceTags":{"shape":"Sk"}}},"output":{"type":"structure","members":{}}},"UntagResource":{"input":{"type":"structure","required":["ResourceArn","ResourceTagKeys"],"members":{"ResourceArn":{},"ResourceTagKeys":{"type":"list","member":{}}}},"output":{"type":"structure","members":{}}},"UpdateAnomalyMonitor":{"input":{"type":"structure","required":["MonitorArn"],"members":{"MonitorArn":{},"MonitorName":{}}},"output":{"type":"structure","required":["MonitorArn"],"members":{"MonitorArn":{}}}},"UpdateAnomalySubscription":{"input":{"type":"structure","required":["SubscriptionArn"],"members":{"SubscriptionArn":{},"Threshold":{"deprecated":true,"deprecatedMessage":"Threshold has been deprecated in favor of ThresholdExpression","type":"double"},"Frequency":{},"MonitorArnList":{"shape":"Sr"},"Subscribers":{"shape":"St"},"SubscriptionName":{},"ThresholdExpression":{"shape":"S7"}}},"output":{"type":"structure","required":["SubscriptionArn"],"members":{"SubscriptionArn":{}}}},"UpdateCostAllocationTagsStatus":{"input":{"type":"structure","required":["CostAllocationTagsStatus"],"members":{"CostAllocationTagsStatus":{"type":"list","member":{"type":"structure","required":["TagKey","Status"],"members":{"TagKey":{},"Status":{}}}}}},"output":{"type":"structure","members":{"Errors":{"type":"list","member":{"type":"structure","members":{"TagKey":{},"Code":{},"Message":{}}}}}}},"UpdateCostCategoryDefinition":{"input":{"type":"structure","required":["CostCategoryArn","RuleVersion","Rules"],"members":{"CostCategoryArn":{},"EffectiveStart":{},"RuleVersion":{},"Rules":{"shape":"S14"},"DefaultValue":{},"SplitChargeRules":{"shape":"S1a"}}},"output":{"type":"structure","members":{"CostCategoryArn":{},"EffectiveStart":{}}}}},"shapes":{"S2":{"type":"structure","required":["MonitorName","MonitorType"],"members":{"MonitorArn":{},"MonitorName":{},"CreationDate":{},"LastUpdatedDate":{},"LastEvaluatedDate":{},"MonitorType":{},"MonitorDimension":{},"MonitorSpecification":{"shape":"S7"},"DimensionalValueCount":{"type":"integer"}}},"S7":{"type":"structure","members":{"Or":{"shape":"S8"},"And":{"shape":"S8"},"Not":{"shape":"S7"},"Dimensions":{"type":"structure","members":{"Key":{},"Values":{"shape":"Sb"},"MatchOptions":{"shape":"Sd"}}},"Tags":{"shape":"Sf"},"CostCategories":{"type":"structure","members":{"Key":{},"Values":{"shape":"Sb"},"MatchOptions":{"shape":"Sd"}}}}},"S8":{"type":"list","member":{"shape":"S7"}},"Sb":{"type":"list","member":{}},"Sd":{"type":"list","member":{}},"Sf":{"type":"structure","members":{"Key":{},"Values":{"shape":"Sb"},"MatchOptions":{"shape":"Sd"}}},"Sk":{"type":"list","member":{"type":"structure","required":["Key","Value"],"members":{"Key":{},"Value":{}}}},"Sq":{"type":"structure","required":["MonitorArnList","Subscribers","Frequency","SubscriptionName"],"members":{"SubscriptionArn":{},"AccountId":{},"MonitorArnList":{"shape":"Sr"},"Subscribers":{"shape":"St"},"Threshold":{"deprecated":true,"deprecatedMessage":"Threshold has been deprecated in favor of ThresholdExpression","type":"double"},"Frequency":{},"SubscriptionName":{},"ThresholdExpression":{"shape":"S7"}}},"Sr":{"type":"list","member":{}},"St":{"type":"list","member":{"type":"structure","members":{"Address":{},"Type":{},"Status":{}}}},"S14":{"type":"list","member":{"type":"structure","members":{"Value":{},"Rule":{"shape":"S7"},"InheritedValue":{"type":"structure","members":{"DimensionName":{},"DimensionKey":{}}},"Type":{}}}},"S1a":{"type":"list","member":{"type":"structure","required":["Source","Targets","Method"],"members":{"Source":{},"Targets":{"type":"list","member":{}},"Method":{},"Parameters":{"type":"list","member":{"type":"structure","required":["Type","Values"],"members":{"Type":{},"Values":{"type":"list","member":{}}}}}}}},"S1s":{"type":"list","member":{"type":"structure","members":{"Component":{},"Status":{}}}},"S2i":{"type":"structure","required":["Start","End"],"members":{"Start":{},"End":{}}},"S2k":{"type":"list","member":{}},"S2m":{"type":"list","member":{"type":"structure","members":{"Type":{},"Key":{}}}},"S2r":{"type":"list","member":{"type":"structure","members":{"TimePeriod":{"shape":"S2i"},"Total":{"shape":"S2t"},"Groups":{"type":"list","member":{"type":"structure","members":{"Keys":{"type":"list","member":{}},"Metrics":{"shape":"S2t"}}}},"Estimated":{"type":"boolean"}}}},"S2t":{"type":"map","key":{},"value":{"shape":"S2u"}},"S2u":{"type":"structure","members":{"Amount":{},"Unit":{}}},"S32":{"type":"list","member":{"type":"structure","members":{"Value":{},"Attributes":{"shape":"S34"}}}},"S34":{"type":"map","key":{},"value":{}},"S3b":{"type":"list","member":{"shape":"S3c"}},"S3c":{"type":"structure","required":["Key"],"members":{"Key":{},"SortOrder":{}}},"S3i":{"type":"list","member":{}},"S3n":{"type":"list","member":{"type":"structure","members":{"TimePeriod":{"shape":"S2i"},"MeanValue":{},"PredictionIntervalLowerBound":{},"PredictionIntervalUpperBound":{}}}},"S3y":{"type":"structure","members":{"CoverageHours":{"type":"structure","members":{"OnDemandHours":{},"ReservedHours":{},"TotalRunningHours":{},"CoverageHoursPercentage":{}}},"CoverageNormalizedUnits":{"type":"structure","members":{"OnDemandNormalizedUnits":{},"ReservedNormalizedUnits":{},"TotalRunningNormalizedUnits":{},"CoverageNormalizedUnitsPercentage":{}}},"CoverageCost":{"type":"structure","members":{"OnDemandCost":{}}}}},"S4g":{"type":"structure","members":{"EC2Specification":{"type":"structure","members":{"OfferingClass":{}}}}},"S56":{"type":"structure","members":{"UtilizationPercentage":{},"UtilizationPercentageInUnits":{},"PurchasedHours":{},"PurchasedUnits":{},"TotalActualHours":{},"TotalActualUnits":{},"UnusedHours":{},"UnusedUnits":{},"OnDemandCostOfRIHoursUsed":{},"NetRISavings":{},"TotalPotentialRISavings":{},"AmortizedUpfrontFee":{},"AmortizedRecurringFee":{},"TotalAmortizedFee":{},"RICostForUnusedHours":{},"RealizedSavings":{},"UnrealizedSavings":{}}},"S5p":{"type":"structure","required":["RecommendationTarget","BenefitsConsidered"],"members":{"RecommendationTarget":{},"BenefitsConsidered":{"type":"boolean"}}},"S5y":{"type":"structure","members":{"EC2ResourceDetails":{"type":"structure","members":{"HourlyOnDemandRate":{},"InstanceType":{},"Platform":{},"Region":{},"Sku":{},"Memory":{},"NetworkPerformance":{},"Storage":{},"Vcpu":{}}}}},"S60":{"type":"structure","members":{"EC2ResourceUtilization":{"type":"structure","members":{"MaxCpuUtilizationPercentage":{},"MaxMemoryUtilizationPercentage":{},"MaxStorageUtilizationPercentage":{},"EBSResourceUtilization":{"type":"structure","members":{"EbsReadOpsPerSecond":{},"EbsWriteOpsPerSecond":{},"EbsReadBytesPerSecond":{},"EbsWriteBytesPerSecond":{}}},"DiskResourceUtilization":{"type":"structure","members":{"DiskReadOpsPerSecond":{},"DiskWriteOpsPerSecond":{},"DiskReadBytesPerSecond":{},"DiskWriteBytesPerSecond":{}}},"NetworkResourceUtilization":{"type":"structure","members":{"NetworkInBytesPerSecond":{},"NetworkOutBytesPerSecond":{},"NetworkPacketsInPerSecond":{},"NetworkPacketsOutPerSecond":{}}}}}}},"S72":{"type":"structure","members":{"TotalCommitment":{},"UsedCommitment":{},"UnusedCommitment":{},"UtilizationPercentage":{}}},"S73":{"type":"structure","members":{"NetSavings":{},"OnDemandCostEquivalent":{}}},"S74":{"type":"structure","members":{"AmortizedRecurringCommitment":{},"AmortizedUpfrontCommitment":{},"TotalAmortizedCommitment":{}}},"S75":{"type":"structure","required":["Utilization"],"members":{"Utilization":{"shape":"S72"},"Savings":{"shape":"S73"},"AmortizedCommitment":{"shape":"S74"}}}}}

/***/ }),
/* 564 */
/***/ (function(module, exports) {

	module.exports = {"pagination":{"GetSavingsPlansCoverage":{"input_token":"NextToken","output_token":"NextToken","limit_key":"MaxResults"},"GetSavingsPlansUtilizationDetails":{"input_token":"NextToken","output_token":"NextToken","limit_key":"MaxResults"},"ListCostAllocationTags":{"input_token":"NextToken","output_token":"NextToken","limit_key":"MaxResults"},"ListCostCategoryDefinitions":{"input_token":"NextToken","output_token":"NextToken","limit_key":"MaxResults"}}}

/***/ }),
/* 565 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(2);
	var AWS = __webpack_require__(4);
	var Service = AWS.Service;
	var apiLoader = AWS.apiLoader;

	apiLoader.services['mediaconvert'] = {};
	AWS.MediaConvert = Service.defineService('mediaconvert', ['2017-08-29']);
	Object.defineProperty(apiLoader.services['mediaconvert'], '2017-08-29', {
	  get: function get() {
	    var model = __webpack_require__(566);
	    model.paginators = __webpack_require__(567).pagination;
	    return model;
	  },
	  enumerable: true,
	  configurable: true
	});

	module.exports = AWS.MediaConvert;


/***/ }),
/* 566 */
/***/ (function(module, exports) {

	module.exports = {"metadata":{"apiVersion":"2017-08-29","endpointPrefix":"mediaconvert","signingName":"mediaconvert","serviceFullName":"AWS Elemental MediaConvert","serviceId":"MediaConvert","protocol":"rest-json","jsonVersion":"1.1","uid":"mediaconvert-2017-08-29","signatureVersion":"v4","serviceAbbreviation":"MediaConvert"},"operations":{"AssociateCertificate":{"http":{"requestUri":"/2017-08-29/certificates","responseCode":201},"input":{"type":"structure","members":{"Arn":{"locationName":"arn"}},"required":["Arn"]},"output":{"type":"structure","members":{}}},"CancelJob":{"http":{"method":"DELETE","requestUri":"/2017-08-29/jobs/{id}","responseCode":202},"input":{"type":"structure","members":{"Id":{"locationName":"id","location":"uri"}},"required":["Id"]},"output":{"type":"structure","members":{}}},"CreateJob":{"http":{"requestUri":"/2017-08-29/jobs","responseCode":201},"input":{"type":"structure","members":{"AccelerationSettings":{"shape":"S7","locationName":"accelerationSettings"},"BillingTagsSource":{"locationName":"billingTagsSource"},"ClientRequestToken":{"locationName":"clientRequestToken","idempotencyToken":true},"HopDestinations":{"shape":"Sa","locationName":"hopDestinations"},"JobTemplate":{"locationName":"jobTemplate"},"Priority":{"locationName":"priority","type":"integer"},"Queue":{"locationName":"queue"},"Role":{"locationName":"role"},"Settings":{"shape":"Se","locationName":"settings"},"SimulateReservedQueue":{"locationName":"simulateReservedQueue"},"StatusUpdateInterval":{"locationName":"statusUpdateInterval"},"Tags":{"shape":"Sl9","locationName":"tags"},"UserMetadata":{"shape":"Sl9","locationName":"userMetadata"}},"required":["Role","Settings"]},"output":{"type":"structure","members":{"Job":{"shape":"Slb","locationName":"job"}}}},"CreateJobTemplate":{"http":{"requestUri":"/2017-08-29/jobTemplates","responseCode":201},"input":{"type":"structure","members":{"AccelerationSettings":{"shape":"S7","locationName":"accelerationSettings"},"Category":{"locationName":"category"},"Description":{"locationName":"description"},"HopDestinations":{"shape":"Sa","locationName":"hopDestinations"},"Name":{"locationName":"name"},"Priority":{"locationName":"priority","type":"integer"},"Queue":{"locationName":"queue"},"Settings":{"shape":"Slt","locationName":"settings"},"StatusUpdateInterval":{"locationName":"statusUpdateInterval"},"Tags":{"shape":"Sl9","locationName":"tags"}},"required":["Settings","Name"]},"output":{"type":"structure","members":{"JobTemplate":{"shape":"Slx","locationName":"jobTemplate"}}}},"CreatePreset":{"http":{"requestUri":"/2017-08-29/presets","responseCode":201},"input":{"type":"structure","members":{"Category":{"locationName":"category"},"Description":{"locationName":"description"},"Name":{"locationName":"name"},"Settings":{"shape":"Sm0","locationName":"settings"},"Tags":{"shape":"Sl9","locationName":"tags"}},"required":["Settings","Name"]},"output":{"type":"structure","members":{"Preset":{"shape":"Sm4","locationName":"preset"}}}},"CreateQueue":{"http":{"requestUri":"/2017-08-29/queues","responseCode":201},"input":{"type":"structure","members":{"Description":{"locationName":"description"},"Name":{"locationName":"name"},"PricingPlan":{"locationName":"pricingPlan"},"ReservationPlanSettings":{"shape":"Sm7","locationName":"reservationPlanSettings"},"Status":{"locationName":"status"},"Tags":{"shape":"Sl9","locationName":"tags"}},"required":["Name"]},"output":{"type":"structure","members":{"Queue":{"shape":"Smc","locationName":"queue"}}}},"DeleteJobTemplate":{"http":{"method":"DELETE","requestUri":"/2017-08-29/jobTemplates/{name}","responseCode":202},"input":{"type":"structure","members":{"Name":{"locationName":"name","location":"uri"}},"required":["Name"]},"output":{"type":"structure","members":{}}},"DeletePolicy":{"http":{"method":"DELETE","requestUri":"/2017-08-29/policy","responseCode":200},"input":{"type":"structure","members":{}},"output":{"type":"structure","members":{}}},"DeletePreset":{"http":{"method":"DELETE","requestUri":"/2017-08-29/presets/{name}","responseCode":202},"input":{"type":"structure","members":{"Name":{"locationName":"name","location":"uri"}},"required":["Name"]},"output":{"type":"structure","members":{}}},"DeleteQueue":{"http":{"method":"DELETE","requestUri":"/2017-08-29/queues/{name}","responseCode":202},"input":{"type":"structure","members":{"Name":{"locationName":"name","location":"uri"}},"required":["Name"]},"output":{"type":"structure","members":{}}},"DescribeEndpoints":{"http":{"requestUri":"/2017-08-29/endpoints","responseCode":200},"input":{"type":"structure","members":{"MaxResults":{"locationName":"maxResults","type":"integer"},"Mode":{"locationName":"mode","type":"string","deprecated":true,"deprecatedMessage":"DescribeEndpoints and account specific endpoints are no longer required. We recommend that you send your requests directly to the regional endpoint instead."},"NextToken":{"locationName":"nextToken"}},"deprecated":true,"deprecatedMessage":"DescribeEndpoints and account specific endpoints are no longer required. We recommend that you send your requests directly to the regional endpoint instead."},"output":{"type":"structure","members":{"Endpoints":{"locationName":"endpoints","type":"list","member":{"type":"structure","members":{"Url":{"locationName":"url"}}}},"NextToken":{"locationName":"nextToken"}},"deprecated":true,"deprecatedMessage":"DescribeEndpoints and account specific endpoints are no longer required. We recommend that you send your requests directly to the regional endpoint instead."},"deprecated":true,"deprecatedMessage":"DescribeEndpoints and account specific endpoints are no longer required. We recommend that you send your requests directly to the regional endpoint instead."},"DisassociateCertificate":{"http":{"method":"DELETE","requestUri":"/2017-08-29/certificates/{arn}","responseCode":202},"input":{"type":"structure","members":{"Arn":{"locationName":"arn","location":"uri"}},"required":["Arn"]},"output":{"type":"structure","members":{}}},"GetJob":{"http":{"method":"GET","requestUri":"/2017-08-29/jobs/{id}","responseCode":200},"input":{"type":"structure","members":{"Id":{"locationName":"id","location":"uri"}},"required":["Id"]},"output":{"type":"structure","members":{"Job":{"shape":"Slb","locationName":"job"}}}},"GetJobTemplate":{"http":{"method":"GET","requestUri":"/2017-08-29/jobTemplates/{name}","responseCode":200},"input":{"type":"structure","members":{"Name":{"locationName":"name","location":"uri"}},"required":["Name"]},"output":{"type":"structure","members":{"JobTemplate":{"shape":"Slx","locationName":"jobTemplate"}}}},"GetPolicy":{"http":{"method":"GET","requestUri":"/2017-08-29/policy","responseCode":200},"input":{"type":"structure","members":{}},"output":{"type":"structure","members":{"Policy":{"shape":"Sn0","locationName":"policy"}}}},"GetPreset":{"http":{"method":"GET","requestUri":"/2017-08-29/presets/{name}","responseCode":200},"input":{"type":"structure","members":{"Name":{"locationName":"name","location":"uri"}},"required":["Name"]},"output":{"type":"structure","members":{"Preset":{"shape":"Sm4","locationName":"preset"}}}},"GetQueue":{"http":{"method":"GET","requestUri":"/2017-08-29/queues/{name}","responseCode":200},"input":{"type":"structure","members":{"Name":{"locationName":"name","location":"uri"}},"required":["Name"]},"output":{"type":"structure","members":{"Queue":{"shape":"Smc","locationName":"queue"}}}},"ListJobTemplates":{"http":{"method":"GET","requestUri":"/2017-08-29/jobTemplates","responseCode":200},"input":{"type":"structure","members":{"Category":{"locationName":"category","location":"querystring"},"ListBy":{"locationName":"listBy","location":"querystring"},"MaxResults":{"locationName":"maxResults","location":"querystring","type":"integer"},"NextToken":{"locationName":"nextToken","location":"querystring"},"Order":{"locationName":"order","location":"querystring"}}},"output":{"type":"structure","members":{"JobTemplates":{"locationName":"jobTemplates","type":"list","member":{"shape":"Slx"}},"NextToken":{"locationName":"nextToken"}}}},"ListJobs":{"http":{"method":"GET","requestUri":"/2017-08-29/jobs","responseCode":200},"input":{"type":"structure","members":{"MaxResults":{"locationName":"maxResults","location":"querystring","type":"integer"},"NextToken":{"locationName":"nextToken","location":"querystring"},"Order":{"locationName":"order","location":"querystring"},"Queue":{"locationName":"queue","location":"querystring"},"Status":{"locationName":"status","location":"querystring"}}},"output":{"type":"structure","members":{"Jobs":{"locationName":"jobs","type":"list","member":{"shape":"Slb"}},"NextToken":{"locationName":"nextToken"}}}},"ListPresets":{"http":{"method":"GET","requestUri":"/2017-08-29/presets","responseCode":200},"input":{"type":"structure","members":{"Category":{"locationName":"category","location":"querystring"},"ListBy":{"locationName":"listBy","location":"querystring"},"MaxResults":{"locationName":"maxResults","location":"querystring","type":"integer"},"NextToken":{"locationName":"nextToken","location":"querystring"},"Order":{"locationName":"order","location":"querystring"}}},"output":{"type":"structure","members":{"NextToken":{"locationName":"nextToken"},"Presets":{"locationName":"presets","type":"list","member":{"shape":"Sm4"}}}}},"ListQueues":{"http":{"method":"GET","requestUri":"/2017-08-29/queues","responseCode":200},"input":{"type":"structure","members":{"ListBy":{"locationName":"listBy","location":"querystring"},"MaxResults":{"locationName":"maxResults","location":"querystring","type":"integer"},"NextToken":{"locationName":"nextToken","location":"querystring"},"Order":{"locationName":"order","location":"querystring"}}},"output":{"type":"structure","members":{"NextToken":{"locationName":"nextToken"},"Queues":{"locationName":"queues","type":"list","member":{"shape":"Smc"}}}}},"ListTagsForResource":{"http":{"method":"GET","requestUri":"/2017-08-29/tags/{arn}","responseCode":200},"input":{"type":"structure","members":{"Arn":{"locationName":"arn","location":"uri"}},"required":["Arn"]},"output":{"type":"structure","members":{"ResourceTags":{"locationName":"resourceTags","type":"structure","members":{"Arn":{"locationName":"arn"},"Tags":{"shape":"Sl9","locationName":"tags"}}}}}},"PutPolicy":{"http":{"method":"PUT","requestUri":"/2017-08-29/policy","responseCode":200},"input":{"type":"structure","members":{"Policy":{"shape":"Sn0","locationName":"policy"}},"required":["Policy"]},"output":{"type":"structure","members":{"Policy":{"shape":"Sn0","locationName":"policy"}}}},"TagResource":{"http":{"requestUri":"/2017-08-29/tags","responseCode":200},"input":{"type":"structure","members":{"Arn":{"locationName":"arn"},"Tags":{"shape":"Sl9","locationName":"tags"}},"required":["Arn","Tags"]},"output":{"type":"structure","members":{}}},"UntagResource":{"http":{"method":"PUT","requestUri":"/2017-08-29/tags/{arn}","responseCode":200},"input":{"type":"structure","members":{"Arn":{"locationName":"arn","location":"uri"},"TagKeys":{"shape":"Slg","locationName":"tagKeys"}},"required":["Arn"]},"output":{"type":"structure","members":{}}},"UpdateJobTemplate":{"http":{"method":"PUT","requestUri":"/2017-08-29/jobTemplates/{name}","responseCode":200},"input":{"type":"structure","members":{"AccelerationSettings":{"shape":"S7","locationName":"accelerationSettings"},"Category":{"locationName":"category"},"Description":{"locationName":"description"},"HopDestinations":{"shape":"Sa","locationName":"hopDestinations"},"Name":{"locationName":"name","location":"uri"},"Priority":{"locationName":"priority","type":"integer"},"Queue":{"locationName":"queue"},"Settings":{"shape":"Slt","locationName":"settings"},"StatusUpdateInterval":{"locationName":"statusUpdateInterval"}},"required":["Name"]},"output":{"type":"structure","members":{"JobTemplate":{"shape":"Slx","locationName":"jobTemplate"}}}},"UpdatePreset":{"http":{"method":"PUT","requestUri":"/2017-08-29/presets/{name}","responseCode":200},"input":{"type":"structure","members":{"Category":{"locationName":"category"},"Description":{"locationName":"description"},"Name":{"locationName":"name","location":"uri"},"Settings":{"shape":"Sm0","locationName":"settings"}},"required":["Name"]},"output":{"type":"structure","members":{"Preset":{"shape":"Sm4","locationName":"preset"}}}},"UpdateQueue":{"http":{"method":"PUT","requestUri":"/2017-08-29/queues/{name}","responseCode":200},"input":{"type":"structure","members":{"Description":{"locationName":"description"},"Name":{"locationName":"name","location":"uri"},"ReservationPlanSettings":{"shape":"Sm7","locationName":"reservationPlanSettings"},"Status":{"locationName":"status"}},"required":["Name"]},"output":{"type":"structure","members":{"Queue":{"shape":"Smc","locationName":"queue"}}}}},"shapes":{"S7":{"type":"structure","members":{"Mode":{"locationName":"mode"}},"required":["Mode"]},"Sa":{"type":"list","member":{"type":"structure","members":{"Priority":{"locationName":"priority","type":"integer"},"Queue":{"locationName":"queue"},"WaitMinutes":{"locationName":"waitMinutes","type":"integer"}}}},"Se":{"type":"structure","members":{"AdAvailOffset":{"locationName":"adAvailOffset","type":"integer"},"AvailBlanking":{"shape":"Sg","locationName":"availBlanking"},"ColorConversion3DLUTSettings":{"shape":"Si","locationName":"colorConversion3DLUTSettings"},"Esam":{"shape":"Sn","locationName":"esam"},"ExtendedDataServices":{"shape":"St","locationName":"extendedDataServices"},"FollowSource":{"locationName":"followSource","type":"integer"},"Inputs":{"locationName":"inputs","type":"list","member":{"type":"structure","members":{"AdvancedInputFilter":{"locationName":"advancedInputFilter"},"AdvancedInputFilterSettings":{"shape":"S10","locationName":"advancedInputFilterSettings"},"AudioSelectorGroups":{"shape":"S13","locationName":"audioSelectorGroups"},"AudioSelectors":{"shape":"S17","locationName":"audioSelectors"},"CaptionSelectors":{"shape":"S1t","locationName":"captionSelectors"},"Crop":{"shape":"S2i","locationName":"crop"},"DeblockFilter":{"locationName":"deblockFilter"},"DecryptionSettings":{"locationName":"decryptionSettings","type":"structure","members":{"DecryptionMode":{"locationName":"decryptionMode"},"EncryptedDecryptionKey":{"locationName":"encryptedDecryptionKey"},"InitializationVector":{"locationName":"initializationVector"},"KmsKeyRegion":{"locationName":"kmsKeyRegion"}}},"DenoiseFilter":{"locationName":"denoiseFilter"},"DolbyVisionMetadataXml":{"locationName":"dolbyVisionMetadataXml"},"FileInput":{"locationName":"fileInput"},"FilterEnable":{"locationName":"filterEnable"},"FilterStrength":{"locationName":"filterStrength","type":"integer"},"ImageInserter":{"shape":"S2u","locationName":"imageInserter"},"InputClippings":{"shape":"S32","locationName":"inputClippings"},"InputScanType":{"locationName":"inputScanType"},"Position":{"shape":"S2i","locationName":"position"},"ProgramNumber":{"locationName":"programNumber","type":"integer"},"PsiControl":{"locationName":"psiControl"},"SupplementalImps":{"locationName":"supplementalImps","type":"list","member":{}},"TimecodeSource":{"locationName":"timecodeSource"},"TimecodeStart":{"locationName":"timecodeStart"},"VideoGenerator":{"locationName":"videoGenerator","type":"structure","members":{"Duration":{"locationName":"duration","type":"integer"}}},"VideoOverlays":{"shape":"S3d","locationName":"videoOverlays"},"VideoSelector":{"shape":"S3i","locationName":"videoSelector"}}}},"KantarWatermark":{"shape":"S3s","locationName":"kantarWatermark"},"MotionImageInserter":{"shape":"S40","locationName":"motionImageInserter"},"NielsenConfiguration":{"shape":"S48","locationName":"nielsenConfiguration"},"NielsenNonLinearWatermark":{"shape":"S4a","locationName":"nielsenNonLinearWatermark"},"OutputGroups":{"shape":"S4h","locationName":"outputGroups"},"TimecodeConfig":{"shape":"Sl1","locationName":"timecodeConfig"},"TimedMetadataInsertion":{"shape":"Sl4","locationName":"timedMetadataInsertion"}}},"Sg":{"type":"structure","members":{"AvailBlankingImage":{"locationName":"availBlankingImage"}}},"Si":{"type":"list","member":{"type":"structure","members":{"FileInput":{"locationName":"fileInput"},"InputColorSpace":{"locationName":"inputColorSpace"},"InputMasteringLuminance":{"locationName":"inputMasteringLuminance","type":"integer"},"OutputColorSpace":{"locationName":"outputColorSpace"},"OutputMasteringLuminance":{"locationName":"outputMasteringLuminance","type":"integer"}}}},"Sn":{"type":"structure","members":{"ManifestConfirmConditionNotification":{"locationName":"manifestConfirmConditionNotification","type":"structure","members":{"MccXml":{"locationName":"mccXml"}}},"ResponseSignalPreroll":{"locationName":"responseSignalPreroll","type":"integer"},"SignalProcessingNotification":{"locationName":"signalProcessingNotification","type":"structure","members":{"SccXml":{"locationName":"sccXml"}}}}},"St":{"type":"structure","members":{"CopyProtectionAction":{"locationName":"copyProtectionAction"},"VchipAction":{"locationName":"vchipAction"}}},"S10":{"type":"structure","members":{"AddTexture":{"locationName":"addTexture"},"Sharpening":{"locationName":"sharpening"}}},"S13":{"type":"map","key":{},"value":{"type":"structure","members":{"AudioSelectorNames":{"shape":"S15","locationName":"audioSelectorNames"}}}},"S15":{"type":"list","member":{}},"S17":{"type":"map","key":{},"value":{"type":"structure","members":{"AudioDurationCorrection":{"locationName":"audioDurationCorrection"},"CustomLanguageCode":{"locationName":"customLanguageCode"},"DefaultSelection":{"locationName":"defaultSelection"},"ExternalAudioFileInput":{"locationName":"externalAudioFileInput"},"HlsRenditionGroupSettings":{"locationName":"hlsRenditionGroupSettings","type":"structure","members":{"RenditionGroupId":{"locationName":"renditionGroupId"},"RenditionLanguageCode":{"locationName":"renditionLanguageCode"},"RenditionName":{"locationName":"renditionName"}}},"LanguageCode":{"locationName":"languageCode"},"Offset":{"locationName":"offset","type":"integer"},"Pids":{"shape":"S1g","locationName":"pids"},"ProgramSelection":{"locationName":"programSelection","type":"integer"},"RemixSettings":{"shape":"S1j","locationName":"remixSettings"},"SelectorType":{"locationName":"selectorType"},"Tracks":{"shape":"S1g","locationName":"tracks"}}}},"S1g":{"type":"list","member":{"type":"integer"}},"S1j":{"type":"structure","members":{"AudioDescriptionAudioChannel":{"locationName":"audioDescriptionAudioChannel","type":"integer"},"AudioDescriptionDataChannel":{"locationName":"audioDescriptionDataChannel","type":"integer"},"ChannelMapping":{"locationName":"channelMapping","type":"structure","members":{"OutputChannels":{"locationName":"outputChannels","type":"list","member":{"type":"structure","members":{"InputChannels":{"locationName":"inputChannels","type":"list","member":{"type":"integer"}},"InputChannelsFineTune":{"locationName":"inputChannelsFineTune","type":"list","member":{"type":"double"}}}}}}},"ChannelsIn":{"locationName":"channelsIn","type":"integer"},"ChannelsOut":{"locationName":"channelsOut","type":"integer"}}},"S1t":{"type":"map","key":{},"value":{"type":"structure","members":{"CustomLanguageCode":{"locationName":"customLanguageCode"},"LanguageCode":{"locationName":"languageCode"},"SourceSettings":{"locationName":"sourceSettings","type":"structure","members":{"AncillarySourceSettings":{"locationName":"ancillarySourceSettings","type":"structure","members":{"Convert608To708":{"locationName":"convert608To708"},"SourceAncillaryChannelNumber":{"locationName":"sourceAncillaryChannelNumber","type":"integer"},"TerminateCaptions":{"locationName":"terminateCaptions"}}},"DvbSubSourceSettings":{"locationName":"dvbSubSourceSettings","type":"structure","members":{"Pid":{"locationName":"pid","type":"integer"}}},"EmbeddedSourceSettings":{"locationName":"embeddedSourceSettings","type":"structure","members":{"Convert608To708":{"locationName":"convert608To708"},"Source608ChannelNumber":{"locationName":"source608ChannelNumber","type":"integer"},"Source608TrackNumber":{"locationName":"source608TrackNumber","type":"integer"},"TerminateCaptions":{"locationName":"terminateCaptions"}}},"FileSourceSettings":{"locationName":"fileSourceSettings","type":"structure","members":{"Convert608To708":{"locationName":"convert608To708"},"ConvertPaintToPop":{"locationName":"convertPaintToPop"},"Framerate":{"locationName":"framerate","type":"structure","members":{"FramerateDenominator":{"locationName":"framerateDenominator","type":"integer"},"FramerateNumerator":{"locationName":"framerateNumerator","type":"integer"}}},"SourceFile":{"locationName":"sourceFile"},"TimeDelta":{"locationName":"timeDelta","type":"integer"},"TimeDeltaUnits":{"locationName":"timeDeltaUnits"}}},"SourceType":{"locationName":"sourceType"},"TeletextSourceSettings":{"locationName":"teletextSourceSettings","type":"structure","members":{"PageNumber":{"locationName":"pageNumber"}}},"TrackSourceSettings":{"locationName":"trackSourceSettings","type":"structure","members":{"TrackNumber":{"locationName":"trackNumber","type":"integer"}}},"WebvttHlsSourceSettings":{"locationName":"webvttHlsSourceSettings","type":"structure","members":{"RenditionGroupId":{"locationName":"renditionGroupId"},"RenditionLanguageCode":{"locationName":"renditionLanguageCode"},"RenditionName":{"locationName":"renditionName"}}}}}}}},"S2i":{"type":"structure","members":{"Height":{"locationName":"height","type":"integer"},"Width":{"locationName":"width","type":"integer"},"X":{"locationName":"x","type":"integer"},"Y":{"locationName":"y","type":"integer"}}},"S2u":{"type":"structure","members":{"InsertableImages":{"locationName":"insertableImages","type":"list","member":{"type":"structure","members":{"Duration":{"locationName":"duration","type":"integer"},"FadeIn":{"locationName":"fadeIn","type":"integer"},"FadeOut":{"locationName":"fadeOut","type":"integer"},"Height":{"locationName":"height","type":"integer"},"ImageInserterInput":{"locationName":"imageInserterInput"},"ImageX":{"locationName":"imageX","type":"integer"},"ImageY":{"locationName":"imageY","type":"integer"},"Layer":{"locationName":"layer","type":"integer"},"Opacity":{"locationName":"opacity","type":"integer"},"StartTime":{"locationName":"startTime"},"Width":{"locationName":"width","type":"integer"}}}},"SdrReferenceWhiteLevel":{"locationName":"sdrReferenceWhiteLevel","type":"integer"}}},"S32":{"type":"list","member":{"type":"structure","members":{"EndTimecode":{"locationName":"endTimecode"},"StartTimecode":{"locationName":"startTimecode"}}}},"S3d":{"type":"list","member":{"type":"structure","members":{"EndTimecode":{"locationName":"endTimecode"},"Input":{"locationName":"input","type":"structure","members":{"FileInput":{"locationName":"fileInput"},"InputClippings":{"locationName":"inputClippings","type":"list","member":{"type":"structure","members":{"EndTimecode":{"locationName":"endTimecode"},"StartTimecode":{"locationName":"startTimecode"}}}},"TimecodeSource":{"locationName":"timecodeSource"},"TimecodeStart":{"locationName":"timecodeStart"}}},"StartTimecode":{"locationName":"startTimecode"}}}},"S3i":{"type":"structure","members":{"AlphaBehavior":{"locationName":"alphaBehavior"},"ColorSpace":{"locationName":"colorSpace"},"ColorSpaceUsage":{"locationName":"colorSpaceUsage"},"EmbeddedTimecodeOverride":{"locationName":"embeddedTimecodeOverride"},"Hdr10Metadata":{"shape":"S3m","locationName":"hdr10Metadata"},"MaxLuminance":{"locationName":"maxLuminance","type":"integer"},"PadVideo":{"locationName":"padVideo"},"Pid":{"locationName":"pid","type":"integer"},"ProgramNumber":{"locationName":"programNumber","type":"integer"},"Rotate":{"locationName":"rotate"},"SampleRange":{"locationName":"sampleRange"}}},"S3m":{"type":"structure","members":{"BluePrimaryX":{"locationName":"bluePrimaryX","type":"integer"},"BluePrimaryY":{"locationName":"bluePrimaryY","type":"integer"},"GreenPrimaryX":{"locationName":"greenPrimaryX","type":"integer"},"GreenPrimaryY":{"locationName":"greenPrimaryY","type":"integer"},"MaxContentLightLevel":{"locationName":"maxContentLightLevel","type":"integer"},"MaxFrameAverageLightLevel":{"locationName":"maxFrameAverageLightLevel","type":"integer"},"MaxLuminance":{"locationName":"maxLuminance","type":"integer"},"MinLuminance":{"locationName":"minLuminance","type":"integer"},"RedPrimaryX":{"locationName":"redPrimaryX","type":"integer"},"RedPrimaryY":{"locationName":"redPrimaryY","type":"integer"},"WhitePointX":{"locationName":"whitePointX","type":"integer"},"WhitePointY":{"locationName":"whitePointY","type":"integer"}}},"S3s":{"type":"structure","members":{"ChannelName":{"locationName":"channelName"},"ContentReference":{"locationName":"contentReference"},"CredentialsSecretName":{"locationName":"credentialsSecretName"},"FileOffset":{"locationName":"fileOffset","type":"double"},"KantarLicenseId":{"locationName":"kantarLicenseId","type":"integer"},"KantarServerUrl":{"locationName":"kantarServerUrl"},"LogDestination":{"locationName":"logDestination"},"Metadata3":{"locationName":"metadata3"},"Metadata4":{"locationName":"metadata4"},"Metadata5":{"locationName":"metadata5"},"Metadata6":{"locationName":"metadata6"},"Metadata7":{"locationName":"metadata7"},"Metadata8":{"locationName":"metadata8"}}},"S40":{"type":"structure","members":{"Framerate":{"locationName":"framerate","type":"structure","members":{"FramerateDenominator":{"locationName":"framerateDenominator","type":"integer"},"FramerateNumerator":{"locationName":"framerateNumerator","type":"integer"}}},"Input":{"locationName":"input"},"InsertionMode":{"locationName":"insertionMode"},"Offset":{"locationName":"offset","type":"structure","members":{"ImageX":{"locationName":"imageX","type":"integer"},"ImageY":{"locationName":"imageY","type":"integer"}}},"Playback":{"locationName":"playback"},"StartTime":{"locationName":"startTime"}}},"S48":{"type":"structure","members":{"BreakoutCode":{"locationName":"breakoutCode","type":"integer"},"DistributorId":{"locationName":"distributorId"}}},"S4a":{"type":"structure","members":{"ActiveWatermarkProcess":{"locationName":"activeWatermarkProcess"},"AdiFilename":{"locationName":"adiFilename"},"AssetId":{"locationName":"assetId"},"AssetName":{"locationName":"assetName"},"CbetSourceId":{"locationName":"cbetSourceId"},"EpisodeId":{"locationName":"episodeId"},"MetadataDestination":{"locationName":"metadataDestination"},"SourceId":{"locationName":"sourceId","type":"integer"},"SourceWatermarkStatus":{"locationName":"sourceWatermarkStatus"},"TicServerUrl":{"locationName":"ticServerUrl"},"UniqueTicPerAudioTrack":{"locationName":"uniqueTicPerAudioTrack"}}},"S4h":{"type":"list","member":{"type":"structure","members":{"AutomatedEncodingSettings":{"locationName":"automatedEncodingSettings","type":"structure","members":{"AbrSettings":{"locationName":"abrSettings","type":"structure","members":{"MaxAbrBitrate":{"locationName":"maxAbrBitrate","type":"integer"},"MaxRenditions":{"locationName":"maxRenditions","type":"integer"},"MinAbrBitrate":{"locationName":"minAbrBitrate","type":"integer"},"Rules":{"locationName":"rules","type":"list","member":{"type":"structure","members":{"AllowedRenditions":{"locationName":"allowedRenditions","type":"list","member":{"type":"structure","members":{"Height":{"locationName":"height","type":"integer"},"Required":{"locationName":"required"},"Width":{"locationName":"width","type":"integer"}}}},"ForceIncludeRenditions":{"locationName":"forceIncludeRenditions","type":"list","member":{"type":"structure","members":{"Height":{"locationName":"height","type":"integer"},"Width":{"locationName":"width","type":"integer"}}}},"MinBottomRenditionSize":{"locationName":"minBottomRenditionSize","type":"structure","members":{"Height":{"locationName":"height","type":"integer"},"Width":{"locationName":"width","type":"integer"}}},"MinTopRenditionSize":{"locationName":"minTopRenditionSize","type":"structure","members":{"Height":{"locationName":"height","type":"integer"},"Width":{"locationName":"width","type":"integer"}}},"Type":{"locationName":"type"}}}}}}}},"CustomName":{"locationName":"customName"},"Name":{"locationName":"name"},"OutputGroupSettings":{"locationName":"outputGroupSettings","type":"structure","members":{"CmafGroupSettings":{"locationName":"cmafGroupSettings","type":"structure","members":{"AdditionalManifests":{"locationName":"additionalManifests","type":"list","member":{"type":"structure","members":{"ManifestNameModifier":{"locationName":"manifestNameModifier"},"SelectedOutputs":{"shape":"S15","locationName":"selectedOutputs"}}}},"BaseUrl":{"locationName":"baseUrl"},"ClientCache":{"locationName":"clientCache"},"CodecSpecification":{"locationName":"codecSpecification"},"DashManifestStyle":{"locationName":"dashManifestStyle"},"Destination":{"locationName":"destination"},"DestinationSettings":{"shape":"S55","locationName":"destinationSettings"},"Encryption":{"locationName":"encryption","type":"structure","members":{"ConstantInitializationVector":{"locationName":"constantInitializationVector"},"EncryptionMethod":{"locationName":"encryptionMethod"},"InitializationVectorInManifest":{"locationName":"initializationVectorInManifest"},"SpekeKeyProvider":{"locationName":"spekeKeyProvider","type":"structure","members":{"CertificateArn":{"locationName":"certificateArn"},"DashSignaledSystemIds":{"shape":"S5k","locationName":"dashSignaledSystemIds"},"HlsSignaledSystemIds":{"shape":"S5k","locationName":"hlsSignaledSystemIds"},"ResourceId":{"locationName":"resourceId"},"Url":{"locationName":"url"}}},"StaticKeyProvider":{"shape":"S5o","locationName":"staticKeyProvider"},"Type":{"locationName":"type"}}},"FragmentLength":{"locationName":"fragmentLength","type":"integer"},"ImageBasedTrickPlay":{"locationName":"imageBasedTrickPlay"},"ImageBasedTrickPlaySettings":{"locationName":"imageBasedTrickPlaySettings","type":"structure","members":{"IntervalCadence":{"locationName":"intervalCadence"},"ThumbnailHeight":{"locationName":"thumbnailHeight","type":"integer"},"ThumbnailInterval":{"locationName":"thumbnailInterval","type":"double"},"ThumbnailWidth":{"locationName":"thumbnailWidth","type":"integer"},"TileHeight":{"locationName":"tileHeight","type":"integer"},"TileWidth":{"locationName":"tileWidth","type":"integer"}}},"ManifestCompression":{"locationName":"manifestCompression"},"ManifestDurationFormat":{"locationName":"manifestDurationFormat"},"MinBufferTime":{"locationName":"minBufferTime","type":"integer"},"MinFinalSegmentLength":{"locationName":"minFinalSegmentLength","type":"double"},"MpdManifestBandwidthType":{"locationName":"mpdManifestBandwidthType"},"MpdProfile":{"locationName":"mpdProfile"},"PtsOffsetHandlingForBFrames":{"locationName":"ptsOffsetHandlingForBFrames"},"SegmentControl":{"locationName":"segmentControl"},"SegmentLength":{"locationName":"segmentLength","type":"integer"},"SegmentLengthControl":{"locationName":"segmentLengthControl"},"StreamInfResolution":{"locationName":"streamInfResolution"},"TargetDurationCompatibilityMode":{"locationName":"targetDurationCompatibilityMode"},"VideoCompositionOffsets":{"locationName":"videoCompositionOffsets"},"WriteDashManifest":{"locationName":"writeDashManifest"},"WriteHlsManifest":{"locationName":"writeHlsManifest"},"WriteSegmentTimelineInRepresentation":{"locationName":"writeSegmentTimelineInRepresentation"}}},"DashIsoGroupSettings":{"locationName":"dashIsoGroupSettings","type":"structure","members":{"AdditionalManifests":{"locationName":"additionalManifests","type":"list","member":{"type":"structure","members":{"ManifestNameModifier":{"locationName":"manifestNameModifier"},"SelectedOutputs":{"shape":"S15","locationName":"selectedOutputs"}}}},"AudioChannelConfigSchemeIdUri":{"locationName":"audioChannelConfigSchemeIdUri"},"BaseUrl":{"locationName":"baseUrl"},"DashManifestStyle":{"locationName":"dashManifestStyle"},"Destination":{"locationName":"destination"},"DestinationSettings":{"shape":"S55","locationName":"destinationSettings"},"Encryption":{"locationName":"encryption","type":"structure","members":{"PlaybackDeviceCompatibility":{"locationName":"playbackDeviceCompatibility"},"SpekeKeyProvider":{"shape":"S6k","locationName":"spekeKeyProvider"}}},"FragmentLength":{"locationName":"fragmentLength","type":"integer"},"HbbtvCompliance":{"locationName":"hbbtvCompliance"},"ImageBasedTrickPlay":{"locationName":"imageBasedTrickPlay"},"ImageBasedTrickPlaySettings":{"locationName":"imageBasedTrickPlaySettings","type":"structure","members":{"IntervalCadence":{"locationName":"intervalCadence"},"ThumbnailHeight":{"locationName":"thumbnailHeight","type":"integer"},"ThumbnailInterval":{"locationName":"thumbnailInterval","type":"double"},"ThumbnailWidth":{"locationName":"thumbnailWidth","type":"integer"},"TileHeight":{"locationName":"tileHeight","type":"integer"},"TileWidth":{"locationName":"tileWidth","type":"integer"}}},"MinBufferTime":{"locationName":"minBufferTime","type":"integer"},"MinFinalSegmentLength":{"locationName":"minFinalSegmentLength","type":"double"},"MpdManifestBandwidthType":{"locationName":"mpdManifestBandwidthType"},"MpdProfile":{"locationName":"mpdProfile"},"PtsOffsetHandlingForBFrames":{"locationName":"ptsOffsetHandlingForBFrames"},"SegmentControl":{"locationName":"segmentControl"},"SegmentLength":{"locationName":"segmentLength","type":"integer"},"SegmentLengthControl":{"locationName":"segmentLengthControl"},"VideoCompositionOffsets":{"locationName":"videoCompositionOffsets"},"WriteSegmentTimelineInRepresentation":{"locationName":"writeSegmentTimelineInRepresentation"}}},"FileGroupSettings":{"locationName":"fileGroupSettings","type":"structure","members":{"Destination":{"locationName":"destination"},"DestinationSettings":{"shape":"S55","locationName":"destinationSettings"}}},"HlsGroupSettings":{"locationName":"hlsGroupSettings","type":"structure","members":{"AdMarkers":{"locationName":"adMarkers","type":"list","member":{}},"AdditionalManifests":{"locationName":"additionalManifests","type":"list","member":{"type":"structure","members":{"ManifestNameModifier":{"locationName":"manifestNameModifier"},"SelectedOutputs":{"shape":"S15","locationName":"selectedOutputs"}}}},"AudioOnlyHeader":{"locationName":"audioOnlyHeader"},"BaseUrl":{"locationName":"baseUrl"},"CaptionLanguageMappings":{"locationName":"captionLanguageMappings","type":"list","member":{"type":"structure","members":{"CaptionChannel":{"locationName":"captionChannel","type":"integer"},"CustomLanguageCode":{"locationName":"customLanguageCode"},"LanguageCode":{"locationName":"languageCode"},"LanguageDescription":{"locationName":"languageDescription"}}}},"CaptionLanguageSetting":{"locationName":"captionLanguageSetting"},"CaptionSegmentLengthControl":{"locationName":"captionSegmentLengthControl"},"ClientCache":{"locationName":"clientCache"},"CodecSpecification":{"locationName":"codecSpecification"},"Destination":{"locationName":"destination"},"DestinationSettings":{"shape":"S55","locationName":"destinationSettings"},"DirectoryStructure":{"locationName":"directoryStructure"},"Encryption":{"locationName":"encryption","type":"structure","members":{"ConstantInitializationVector":{"locationName":"constantInitializationVector"},"EncryptionMethod":{"locationName":"encryptionMethod"},"InitializationVectorInManifest":{"locationName":"initializationVectorInManifest"},"OfflineEncrypted":{"locationName":"offlineEncrypted"},"SpekeKeyProvider":{"shape":"S6k","locationName":"spekeKeyProvider"},"StaticKeyProvider":{"shape":"S5o","locationName":"staticKeyProvider"},"Type":{"locationName":"type"}}},"ImageBasedTrickPlay":{"locationName":"imageBasedTrickPlay"},"ImageBasedTrickPlaySettings":{"locationName":"imageBasedTrickPlaySettings","type":"structure","members":{"IntervalCadence":{"locationName":"intervalCadence"},"ThumbnailHeight":{"locationName":"thumbnailHeight","type":"integer"},"ThumbnailInterval":{"locationName":"thumbnailInterval","type":"double"},"ThumbnailWidth":{"locationName":"thumbnailWidth","type":"integer"},"TileHeight":{"locationName":"tileHeight","type":"integer"},"TileWidth":{"locationName":"tileWidth","type":"integer"}}},"ManifestCompression":{"locationName":"manifestCompression"},"ManifestDurationFormat":{"locationName":"manifestDurationFormat"},"MinFinalSegmentLength":{"locationName":"minFinalSegmentLength","type":"double"},"MinSegmentLength":{"locationName":"minSegmentLength","type":"integer"},"OutputSelection":{"locationName":"outputSelection"},"ProgramDateTime":{"locationName":"programDateTime"},"ProgramDateTimePeriod":{"locationName":"programDateTimePeriod","type":"integer"},"ProgressiveWriteHlsManifest":{"locationName":"progressiveWriteHlsManifest"},"SegmentControl":{"locationName":"segmentControl"},"SegmentLength":{"locationName":"segmentLength","type":"integer"},"SegmentLengthControl":{"locationName":"segmentLengthControl"},"SegmentsPerSubdirectory":{"locationName":"segmentsPerSubdirectory","type":"integer"},"StreamInfResolution":{"locationName":"streamInfResolution"},"TargetDurationCompatibilityMode":{"locationName":"targetDurationCompatibilityMode"},"TimedMetadataId3Frame":{"locationName":"timedMetadataId3Frame"},"TimedMetadataId3Period":{"locationName":"timedMetadataId3Period","type":"integer"},"TimestampDeltaMilliseconds":{"locationName":"timestampDeltaMilliseconds","type":"integer"}}},"MsSmoothGroupSettings":{"locationName":"msSmoothGroupSettings","type":"structure","members":{"AdditionalManifests":{"locationName":"additionalManifests","type":"list","member":{"type":"structure","members":{"ManifestNameModifier":{"locationName":"manifestNameModifier"},"SelectedOutputs":{"shape":"S15","locationName":"selectedOutputs"}}}},"AudioDeduplication":{"locationName":"audioDeduplication"},"Destination":{"locationName":"destination"},"DestinationSettings":{"shape":"S55","locationName":"destinationSettings"},"Encryption":{"locationName":"encryption","type":"structure","members":{"SpekeKeyProvider":{"shape":"S6k","locationName":"spekeKeyProvider"}}},"FragmentLength":{"locationName":"fragmentLength","type":"integer"},"FragmentLengthControl":{"locationName":"fragmentLengthControl"},"ManifestEncoding":{"locationName":"manifestEncoding"}}},"Type":{"locationName":"type"}}},"Outputs":{"locationName":"outputs","type":"list","member":{"type":"structure","members":{"AudioDescriptions":{"shape":"S86","locationName":"audioDescriptions"},"CaptionDescriptions":{"locationName":"captionDescriptions","type":"list","member":{"type":"structure","members":{"CaptionSelectorName":{"locationName":"captionSelectorName"},"CustomLanguageCode":{"locationName":"customLanguageCode"},"DestinationSettings":{"shape":"Sau","locationName":"destinationSettings"},"LanguageCode":{"locationName":"languageCode"},"LanguageDescription":{"locationName":"languageDescription"}}}},"ContainerSettings":{"shape":"Sc4","locationName":"containerSettings"},"Extension":{"locationName":"extension"},"NameModifier":{"locationName":"nameModifier"},"OutputSettings":{"locationName":"outputSettings","type":"structure","members":{"HlsSettings":{"locationName":"hlsSettings","type":"structure","members":{"AudioGroupId":{"locationName":"audioGroupId"},"AudioOnlyContainer":{"locationName":"audioOnlyContainer"},"AudioRenditionSets":{"locationName":"audioRenditionSets"},"AudioTrackType":{"locationName":"audioTrackType"},"DescriptiveVideoServiceFlag":{"locationName":"descriptiveVideoServiceFlag"},"IFrameOnlyManifest":{"locationName":"iFrameOnlyManifest"},"SegmentModifier":{"locationName":"segmentModifier"}}}}},"Preset":{"locationName":"preset"},"VideoDescription":{"shape":"Sej","locationName":"videoDescription"}}}}}}},"S55":{"type":"structure","members":{"S3Settings":{"locationName":"s3Settings","type":"structure","members":{"AccessControl":{"locationName":"accessControl","type":"structure","members":{"CannedAcl":{"locationName":"cannedAcl"}}},"Encryption":{"locationName":"encryption","type":"structure","members":{"EncryptionType":{"locationName":"encryptionType"},"KmsEncryptionContext":{"locationName":"kmsEncryptionContext"},"KmsKeyArn":{"locationName":"kmsKeyArn"}}},"StorageClass":{"locationName":"storageClass"}}}}},"S5k":{"type":"list","member":{}},"S5o":{"type":"structure","members":{"KeyFormat":{"locationName":"keyFormat"},"KeyFormatVersions":{"locationName":"keyFormatVersions"},"StaticKeyValue":{"locationName":"staticKeyValue"},"Url":{"locationName":"url"}}},"S6k":{"type":"structure","members":{"CertificateArn":{"locationName":"certificateArn"},"ResourceId":{"locationName":"resourceId"},"SystemIds":{"locationName":"systemIds","type":"list","member":{}},"Url":{"locationName":"url"}}},"S86":{"type":"list","member":{"type":"structure","members":{"AudioChannelTaggingSettings":{"locationName":"audioChannelTaggingSettings","type":"structure","members":{"ChannelTag":{"locationName":"channelTag"},"ChannelTags":{"locationName":"channelTags","type":"list","member":{}}}},"AudioNormalizationSettings":{"locationName":"audioNormalizationSettings","type":"structure","members":{"Algorithm":{"locationName":"algorithm"},"AlgorithmControl":{"locationName":"algorithmControl"},"CorrectionGateLevel":{"locationName":"correctionGateLevel","type":"integer"},"LoudnessLogging":{"locationName":"loudnessLogging"},"PeakCalculation":{"locationName":"peakCalculation"},"TargetLkfs":{"locationName":"targetLkfs","type":"double"},"TruePeakLimiterThreshold":{"locationName":"truePeakLimiterThreshold","type":"double"}}},"AudioSourceName":{"locationName":"audioSourceName"},"AudioType":{"locationName":"audioType","type":"integer"},"AudioTypeControl":{"locationName":"audioTypeControl"},"CodecSettings":{"locationName":"codecSettings","type":"structure","members":{"AacSettings":{"locationName":"aacSettings","type":"structure","members":{"AudioDescriptionBroadcasterMix":{"locationName":"audioDescriptionBroadcasterMix"},"Bitrate":{"locationName":"bitrate","type":"integer"},"CodecProfile":{"locationName":"codecProfile"},"CodingMode":{"locationName":"codingMode"},"RateControlMode":{"locationName":"rateControlMode"},"RawFormat":{"locationName":"rawFormat"},"SampleRate":{"locationName":"sampleRate","type":"integer"},"Specification":{"locationName":"specification"},"VbrQuality":{"locationName":"vbrQuality"}}},"Ac3Settings":{"locationName":"ac3Settings","type":"structure","members":{"Bitrate":{"locationName":"bitrate","type":"integer"},"BitstreamMode":{"locationName":"bitstreamMode"},"CodingMode":{"locationName":"codingMode"},"Dialnorm":{"locationName":"dialnorm","type":"integer"},"DynamicRangeCompressionLine":{"locationName":"dynamicRangeCompressionLine"},"DynamicRangeCompressionProfile":{"locationName":"dynamicRangeCompressionProfile"},"DynamicRangeCompressionRf":{"locationName":"dynamicRangeCompressionRf"},"LfeFilter":{"locationName":"lfeFilter"},"MetadataControl":{"locationName":"metadataControl"},"SampleRate":{"locationName":"sampleRate","type":"integer"}}},"AiffSettings":{"locationName":"aiffSettings","type":"structure","members":{"BitDepth":{"locationName":"bitDepth","type":"integer"},"Channels":{"locationName":"channels","type":"integer"},"SampleRate":{"locationName":"sampleRate","type":"integer"}}},"Codec":{"locationName":"codec"},"Eac3AtmosSettings":{"locationName":"eac3AtmosSettings","type":"structure","members":{"Bitrate":{"locationName":"bitrate","type":"integer"},"BitstreamMode":{"locationName":"bitstreamMode"},"CodingMode":{"locationName":"codingMode"},"DialogueIntelligence":{"locationName":"dialogueIntelligence"},"DownmixControl":{"locationName":"downmixControl"},"DynamicRangeCompressionLine":{"locationName":"dynamicRangeCompressionLine"},"DynamicRangeCompressionRf":{"locationName":"dynamicRangeCompressionRf"},"DynamicRangeControl":{"locationName":"dynamicRangeControl"},"LoRoCenterMixLevel":{"locationName":"loRoCenterMixLevel","type":"double"},"LoRoSurroundMixLevel":{"locationName":"loRoSurroundMixLevel","type":"double"},"LtRtCenterMixLevel":{"locationName":"ltRtCenterMixLevel","type":"double"},"LtRtSurroundMixLevel":{"locationName":"ltRtSurroundMixLevel","type":"double"},"MeteringMode":{"locationName":"meteringMode"},"SampleRate":{"locationName":"sampleRate","type":"integer"},"SpeechThreshold":{"locationName":"speechThreshold","type":"integer"},"StereoDownmix":{"locationName":"stereoDownmix"},"SurroundExMode":{"locationName":"surroundExMode"}}},"Eac3Settings":{"locationName":"eac3Settings","type":"structure","members":{"AttenuationControl":{"locationName":"attenuationControl"},"Bitrate":{"locationName":"bitrate","type":"integer"},"BitstreamMode":{"locationName":"bitstreamMode"},"CodingMode":{"locationName":"codingMode"},"DcFilter":{"locationName":"dcFilter"},"Dialnorm":{"locationName":"dialnorm","type":"integer"},"DynamicRangeCompressionLine":{"locationName":"dynamicRangeCompressionLine"},"DynamicRangeCompressionRf":{"locationName":"dynamicRangeCompressionRf"},"LfeControl":{"locationName":"lfeControl"},"LfeFilter":{"locationName":"lfeFilter"},"LoRoCenterMixLevel":{"locationName":"loRoCenterMixLevel","type":"double"},"LoRoSurroundMixLevel":{"locationName":"loRoSurroundMixLevel","type":"double"},"LtRtCenterMixLevel":{"locationName":"ltRtCenterMixLevel","type":"double"},"LtRtSurroundMixLevel":{"locationName":"ltRtSurroundMixLevel","type":"double"},"MetadataControl":{"locationName":"metadataControl"},"PassthroughControl":{"locationName":"passthroughControl"},"PhaseControl":{"locationName":"phaseControl"},"SampleRate":{"locationName":"sampleRate","type":"integer"},"StereoDownmix":{"locationName":"stereoDownmix"},"SurroundExMode":{"locationName":"surroundExMode"},"SurroundMode":{"locationName":"surroundMode"}}},"FlacSettings":{"locationName":"flacSettings","type":"structure","members":{"BitDepth":{"locationName":"bitDepth","type":"integer"},"Channels":{"locationName":"channels","type":"integer"},"SampleRate":{"locationName":"sampleRate","type":"integer"}}},"Mp2Settings":{"locationName":"mp2Settings","type":"structure","members":{"Bitrate":{"locationName":"bitrate","type":"integer"},"Channels":{"locationName":"channels","type":"integer"},"SampleRate":{"locationName":"sampleRate","type":"integer"}}},"Mp3Settings":{"locationName":"mp3Settings","type":"structure","members":{"Bitrate":{"locationName":"bitrate","type":"integer"},"Channels":{"locationName":"channels","type":"integer"},"RateControlMode":{"locationName":"rateControlMode"},"SampleRate":{"locationName":"sampleRate","type":"integer"},"VbrQuality":{"locationName":"vbrQuality","type":"integer"}}},"OpusSettings":{"locationName":"opusSettings","type":"structure","members":{"Bitrate":{"locationName":"bitrate","type":"integer"},"Channels":{"locationName":"channels","type":"integer"},"SampleRate":{"locationName":"sampleRate","type":"integer"}}},"VorbisSettings":{"locationName":"vorbisSettings","type":"structure","members":{"Channels":{"locationName":"channels","type":"integer"},"SampleRate":{"locationName":"sampleRate","type":"integer"},"VbrQuality":{"locationName":"vbrQuality","type":"integer"}}},"WavSettings":{"locationName":"wavSettings","type":"structure","members":{"BitDepth":{"locationName":"bitDepth","type":"integer"},"Channels":{"locationName":"channels","type":"integer"},"Format":{"locationName":"format"},"SampleRate":{"locationName":"sampleRate","type":"integer"}}}}},"CustomLanguageCode":{"locationName":"customLanguageCode"},"LanguageCode":{"locationName":"languageCode"},"LanguageCodeControl":{"locationName":"languageCodeControl"},"RemixSettings":{"shape":"S1j","locationName":"remixSettings"},"StreamName":{"locationName":"streamName"}}}},"Sau":{"type":"structure","members":{"BurninDestinationSettings":{"locationName":"burninDestinationSettings","type":"structure","members":{"Alignment":{"locationName":"alignment"},"ApplyFontColor":{"locationName":"applyFontColor"},"BackgroundColor":{"locationName":"backgroundColor"},"BackgroundOpacity":{"locationName":"backgroundOpacity","type":"integer"},"FallbackFont":{"locationName":"fallbackFont"},"FontColor":{"locationName":"fontColor"},"FontOpacity":{"locationName":"fontOpacity","type":"integer"},"FontResolution":{"locationName":"fontResolution","type":"integer"},"FontScript":{"locationName":"fontScript"},"FontSize":{"locationName":"fontSize","type":"integer"},"HexFontColor":{"locationName":"hexFontColor"},"OutlineColor":{"locationName":"outlineColor"},"OutlineSize":{"locationName":"outlineSize","type":"integer"},"ShadowColor":{"locationName":"shadowColor"},"ShadowOpacity":{"locationName":"shadowOpacity","type":"integer"},"ShadowXOffset":{"locationName":"shadowXOffset","type":"integer"},"ShadowYOffset":{"locationName":"shadowYOffset","type":"integer"},"StylePassthrough":{"locationName":"stylePassthrough"},"TeletextSpacing":{"locationName":"teletextSpacing"},"XPosition":{"locationName":"xPosition","type":"integer"},"YPosition":{"locationName":"yPosition","type":"integer"}}},"DestinationType":{"locationName":"destinationType"},"DvbSubDestinationSettings":{"locationName":"dvbSubDestinationSettings","type":"structure","members":{"Alignment":{"locationName":"alignment"},"ApplyFontColor":{"locationName":"applyFontColor"},"BackgroundColor":{"locationName":"backgroundColor"},"BackgroundOpacity":{"locationName":"backgroundOpacity","type":"integer"},"DdsHandling":{"locationName":"ddsHandling"},"DdsXCoordinate":{"locationName":"ddsXCoordinate","type":"integer"},"DdsYCoordinate":{"locationName":"ddsYCoordinate","type":"integer"},"FallbackFont":{"locationName":"fallbackFont"},"FontColor":{"locationName":"fontColor"},"FontOpacity":{"locationName":"fontOpacity","type":"integer"},"FontResolution":{"locationName":"fontResolution","type":"integer"},"FontScript":{"locationName":"fontScript"},"FontSize":{"locationName":"fontSize","type":"integer"},"Height":{"locationName":"height","type":"integer"},"HexFontColor":{"locationName":"hexFontColor"},"OutlineColor":{"locationName":"outlineColor"},"OutlineSize":{"locationName":"outlineSize","type":"integer"},"ShadowColor":{"locationName":"shadowColor"},"ShadowOpacity":{"locationName":"shadowOpacity","type":"integer"},"ShadowXOffset":{"locationName":"shadowXOffset","type":"integer"},"ShadowYOffset":{"locationName":"shadowYOffset","type":"integer"},"StylePassthrough":{"locationName":"stylePassthrough"},"SubtitlingType":{"locationName":"subtitlingType"},"TeletextSpacing":{"locationName":"teletextSpacing"},"Width":{"locationName":"width","type":"integer"},"XPosition":{"locationName":"xPosition","type":"integer"},"YPosition":{"locationName":"yPosition","type":"integer"}}},"EmbeddedDestinationSettings":{"locationName":"embeddedDestinationSettings","type":"structure","members":{"Destination608ChannelNumber":{"locationName":"destination608ChannelNumber","type":"integer"},"Destination708ServiceNumber":{"locationName":"destination708ServiceNumber","type":"integer"}}},"ImscDestinationSettings":{"locationName":"imscDestinationSettings","type":"structure","members":{"Accessibility":{"locationName":"accessibility"},"StylePassthrough":{"locationName":"stylePassthrough"}}},"SccDestinationSettings":{"locationName":"sccDestinationSettings","type":"structure","members":{"Framerate":{"locationName":"framerate"}}},"SrtDestinationSettings":{"locationName":"srtDestinationSettings","type":"structure","members":{"StylePassthrough":{"locationName":"stylePassthrough"}}},"TeletextDestinationSettings":{"locationName":"teletextDestinationSettings","type":"structure","members":{"PageNumber":{"locationName":"pageNumber"},"PageTypes":{"locationName":"pageTypes","type":"list","member":{}}}},"TtmlDestinationSettings":{"locationName":"ttmlDestinationSettings","type":"structure","members":{"StylePassthrough":{"locationName":"stylePassthrough"}}},"WebvttDestinationSettings":{"locationName":"webvttDestinationSettings","type":"structure","members":{"Accessibility":{"locationName":"accessibility"},"StylePassthrough":{"locationName":"stylePassthrough"}}}}},"Sc4":{"type":"structure","members":{"CmfcSettings":{"locationName":"cmfcSettings","type":"structure","members":{"AudioDuration":{"locationName":"audioDuration"},"AudioGroupId":{"locationName":"audioGroupId"},"AudioRenditionSets":{"locationName":"audioRenditionSets"},"AudioTrackType":{"locationName":"audioTrackType"},"DescriptiveVideoServiceFlag":{"locationName":"descriptiveVideoServiceFlag"},"IFrameOnlyManifest":{"locationName":"iFrameOnlyManifest"},"KlvMetadata":{"locationName":"klvMetadata"},"ManifestMetadataSignaling":{"locationName":"manifestMetadataSignaling"},"Scte35Esam":{"locationName":"scte35Esam"},"Scte35Source":{"locationName":"scte35Source"},"TimedMetadata":{"locationName":"timedMetadata"},"TimedMetadataBoxVersion":{"locationName":"timedMetadataBoxVersion"},"TimedMetadataSchemeIdUri":{"locationName":"timedMetadataSchemeIdUri"},"TimedMetadataValue":{"locationName":"timedMetadataValue"}}},"Container":{"locationName":"container"},"F4vSettings":{"locationName":"f4vSettings","type":"structure","members":{"MoovPlacement":{"locationName":"moovPlacement"}}},"M2tsSettings":{"locationName":"m2tsSettings","type":"structure","members":{"AudioBufferModel":{"locationName":"audioBufferModel"},"AudioDuration":{"locationName":"audioDuration"},"AudioFramesPerPes":{"locationName":"audioFramesPerPes","type":"integer"},"AudioPids":{"shape":"Scn","locationName":"audioPids"},"Bitrate":{"locationName":"bitrate","type":"integer"},"BufferModel":{"locationName":"bufferModel"},"DataPTSControl":{"locationName":"dataPTSControl"},"DvbNitSettings":{"locationName":"dvbNitSettings","type":"structure","members":{"NetworkId":{"locationName":"networkId","type":"integer"},"NetworkName":{"locationName":"networkName"},"NitInterval":{"locationName":"nitInterval","type":"integer"}}},"DvbSdtSettings":{"locationName":"dvbSdtSettings","type":"structure","members":{"OutputSdt":{"locationName":"outputSdt"},"SdtInterval":{"locationName":"sdtInterval","type":"integer"},"ServiceName":{"locationName":"serviceName"},"ServiceProviderName":{"locationName":"serviceProviderName"}}},"DvbSubPids":{"shape":"Scn","locationName":"dvbSubPids"},"DvbTdtSettings":{"locationName":"dvbTdtSettings","type":"structure","members":{"TdtInterval":{"locationName":"tdtInterval","type":"integer"}}},"DvbTeletextPid":{"locationName":"dvbTeletextPid","type":"integer"},"EbpAudioInterval":{"locationName":"ebpAudioInterval"},"EbpPlacement":{"locationName":"ebpPlacement"},"EsRateInPes":{"locationName":"esRateInPes"},"ForceTsVideoEbpOrder":{"locationName":"forceTsVideoEbpOrder"},"FragmentTime":{"locationName":"fragmentTime","type":"double"},"KlvMetadata":{"locationName":"klvMetadata"},"MaxPcrInterval":{"locationName":"maxPcrInterval","type":"integer"},"MinEbpInterval":{"locationName":"minEbpInterval","type":"integer"},"NielsenId3":{"locationName":"nielsenId3"},"NullPacketBitrate":{"locationName":"nullPacketBitrate","type":"double"},"PatInterval":{"locationName":"patInterval","type":"integer"},"PcrControl":{"locationName":"pcrControl"},"PcrPid":{"locationName":"pcrPid","type":"integer"},"PmtInterval":{"locationName":"pmtInterval","type":"integer"},"PmtPid":{"locationName":"pmtPid","type":"integer"},"PrivateMetadataPid":{"locationName":"privateMetadataPid","type":"integer"},"ProgramNumber":{"locationName":"programNumber","type":"integer"},"PtsOffset":{"locationName":"ptsOffset","type":"integer"},"PtsOffsetMode":{"locationName":"ptsOffsetMode"},"RateMode":{"locationName":"rateMode"},"Scte35Esam":{"locationName":"scte35Esam","type":"structure","members":{"Scte35EsamPid":{"locationName":"scte35EsamPid","type":"integer"}}},"Scte35Pid":{"locationName":"scte35Pid","type":"integer"},"Scte35Source":{"locationName":"scte35Source"},"SegmentationMarkers":{"locationName":"segmentationMarkers"},"SegmentationStyle":{"locationName":"segmentationStyle"},"SegmentationTime":{"locationName":"segmentationTime","type":"double"},"TimedMetadataPid":{"locationName":"timedMetadata127],[77,128],[78,129],[79,130],[80,131],[81,132],[82,133],[83,134],[84,135],[85,136],[86,137],[87,138],[88,139],[89,140],[90,141],[320,142],[321,143],[296,144],[299,144],[318,142],[319,142],[309,142],[308,145],[306,142],[301,142],[314,142],[312,142],[316,142],[300,142],[313,142],[317,142],[302,142],[303,142],[315,142],[297,142],[304,142],[305,142],[307,142],[311,142],[322,146],[310,142],[298,142],[335,147],[329,146],[331,148],[330,146],[323,146],[324,146],[326,146],[328,146],[332,148],[333,148],[325,148],[327,148],[338,149],[340,150],[263,151],[272,152],[262,153],[273,154],[268,155],[269,156],[267,157],[271,158],[265,159],[264,160],[270,161],[266,152],[32,162],[192,1],[221,164],[220,174],[222,166],[191,169],[226,171],[225,172]],"semanticDiagnosticsPerFile":[254,207,211,194,195,193,196,198,197,199,208,210,209,200,201,202,204,203,206,205,158,160,159,161,162,163,156,157,144,145,142,143,141,139,140,148,146,147,212,218,213,214,215,219,216,217,149,150,155,164,165,166,167,168,169,170,175,176,171,173,174,172,177,178,186,179,180,181,182,183,184,185,33,35,46,47,44,45,34,48,95,97,99,98,100,104,102,103,96,106,37,108,109,111,110,112,107,105,113,114,117,118,116,94,40,119,120,121,36,123,122,138,38,43,124,125,41,115,126,127,128,129,130,131,132,101,134,135,93,136,133,39,42,137,151,152,154,153,227,237,231,230,229,228,234,232,233,236,235,239,240,238,241,246,242,245,243,247,248,249,250,251,260,252,255,259,257,258,256,275,276,244,277,279,280,278,281,282,283,284,285,286,287,288,289,290,291,292,49,51,52,53,54,55,56,57,58,59,60,61,62,63,50,91,64,65,66,92,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,293,294,295,320,321,296,299,318,319,309,308,306,301,314,312,316,300,313,317,302,303,315,297,304,305,307,311,322,310,298,335,334,329,331,330,323,324,326,328,332,333,325,327,336,274,337,338,339,340,253,263,272,261,262,273,268,269,267,271,265,264,270,266,6,7,9,8,2,10,11,12,13,14,15,16,17,3,4,21,18,19,20,22,23,24,5,25,26,27,28,29,1,30,31,32,192,221,220,222,187,188,190,191,189,226,223,225,224]},"version":"4.9.5"}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       if (process.env.OBJECT_IMPL) global.TYPED_ARRAY_SUPPORT = false
var B = require('../').Buffer
var test = require('tape')

test('new buffer from array', function (t) {
  t.equal(
    new B([1, 2, 3]).toString(),
    '\u0001\u0002\u0003'
  )
  t.end()
})

test('new buffer from array w/ negatives', function (t) {
  t.equal(
    new B([-1, -2, -3]).toString('hex'),
    'fffefd'
  )
  t.end()
})

test('new buffer from array with mixed signed input', function (t) {
  t.equal(
    new B([-255, 255, -128, 128, 512, -512, 511, -511]).toString('hex'),
    '01ff80800000ff01'
  )
  t.end()
})

test('new buffer from string', function (t) {
  t.equal(
    new B('hey', 'utf8').toString(),
    'hey'
  )
  t.end()
})

test('new buffer from buffer', function (t) {
  var b1 = new B('asdf')
  var b2 = new B(b1)
  t.equal(b1.toString('hex'), b2.toString('hex'))
  t.end()
})

test('new buffer from ArrayBuffer', function (t) {
  if (typeof ArrayBuffer !== 'undefined') {
    var arraybuffer = new Uint8Array([0, 1, 2, 3]).buffer
    var b = new B(arraybuffer)
    t.equal(b.length, 4)
    t.equal(b[0], 0)
    t.equal(b[1], 1)
    t.equal(b[2], 2)
    t.equal(b[3], 3)
    t.equal(b[4], undefined)
  }
  t.end()
})

test('new buffer from ArrayBuffer, shares memory', function (t) {
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    var u = new Uint8Array([0, 1, 2, 3])
    var arraybuffer = u.buffer
    var b = new B(arraybuffer)
    t.equal(b.length, 4)
    t.equal(b[0], 0)
    t.equal(b[1], 1)
    t.equal(b[2], 2)
    t.equal(b[3], 3)
    t.equal(b[4], undefined)

    // changing the Uint8Array (and thus the ArrayBuffer), changes the Buffer
    u[0] = 10
    t.equal(b[0], 10)
    u[1] = 11
    t.equal(b[1], 11)
    u[2] = 12
    t.equal(b[2], 12)
    u[3] = 13
    t.equal(b[3], 13)
  }
  t.end()
})

test('new buffer from Uint8Array', function (t) {
  if (typeof Uint8Array !== 'undefined') {
    var b1 = new Uint8Array([0, 1, 2, 3])
    var b2 = new B(b1)
    t.equal(b1.length, b2.length)
    t.equal(b1[0], 0)
    t.equal(b1[1], 1)
    t.equal(b1[2], 2)
    t.equal(b1[3], 3)
    t.equal(b1[4], undefined)
  }
  t.end()
})

test('new buffer from Uint16Array', function (t) {
  if (typeof Uint16Array !== 'undefined') {
    var b1 = new Uint16Array([0, 1, 2, 3])
    var b2 = new B(b1)
    t.equal(b1.length, b2.length)
    t.equal(b1[0], 0)
    t.equal(b1[1], 1)
    t.equal(b1[2], 2)
    t.equal(b1[3], 3)
    t.equal(b1[4], undefined)
  }
  t.end()
})

test('new buffer from Uint32Array', function (t) {
  if (typeof Uint32Array !== 'undefined') {
    var b1 = new Uint32Array([0, 1, 2, 3])
    var b2 = new B(b1)
    t.equal(b1.length, b2.length)
    t.equal(b1[0], 0)
    t.equal(b1[1], 1)
    t.equal(b1[2], 2)
    t.equal(b1[3], 3)
    t.equal(b1[4], undefined)
  }
  t.end()
})

test('new buffer from Int16Array', function (t) {
  if (typeof Int16Array !== 'undefined') {
    var b1 = new Int16Array([0, 1, 2, 3])
    var b2 = new B(b1)
    t.equal(b1.length, b2.length)
    t.equal(b1[0], 0)
    t.equal(b1[1], 1)
    t.equal(b1[2], 2)
    t.equal(b1[3], 3)
    t.equal(b1[4], undefined)
  }
  t.end()
})

test('new buffer from Int32Array', function (t) {
  if (typeof Int32Array !== 'undefined') {
    var b1 = new Int32Array([0, 1, 2, 3])
    var b2 = new B(b1)
    t.equal(b1.length, b2.length)
    t.equal(b1[0], 0)
    t.equal(b1[1], 1)
    t.equal(b1[2], 2)
    t.equal(b1[3], 3)
    t.equal(b1[4], undefined)
  }
  t.end()
})

test('new buffer from Float32Array', function (t) {
  if (typeof Float32Array !== 'undefined') {
    var b1 = new Float32Array([0, 1, 2, 3])
    var b2 = new B(b1)
    t.equal(b1.length, b2.length)
    t.equal(b1[0], 0)
    t.equal(b1[1], 1)
    t.equal(b1[2], 2)
    t.equal(b1[3], 3)
    t.equal(b1[4], undefined)
  }
  t.end()
})

test('new buffer from Float64Array', function (t) {
  if (typeof Float64Array !== 'undefined') {
    var b1 = new Float64Array([0, 1, 2, 3])
    var b2 = new B(b1)
    t.equal(b1.length, b2.length)
    t.equal(b1[0], 0)
    t.equal(b1[1], 1)
    t.equal(b1[2], 2)
    t.equal(b1[3], 3)
    t.equal(b1[4], undefined)
  }
  t.e{
  "name": "fast-deep-equal",
  "version": "3.1.3",
  "description": "Fast deep equal",
  "main": "index.js",
  "scripts": {
    "eslint": "eslint *.js benchmark/*.js spec/*.js",
    "build": "node build",
    "benchmark": "npm i && npm run build && cd ./benchmark && npm i && node ./",
    "test-spec": "mocha spec/*.spec.js -R spec",
    "test-cov": "nyc npm run test-spec",
    "test-ts": "tsc --target ES5 --noImplicitAny index.d.ts",
    "test": "npm run build && npm run eslint && npm run test-ts && npm run test-cov",
    "prepublish": "npm run build"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/epoberezkin/fast-deep-equal.git"
  },
  "keywords": [
    "fast",
    "equal",
    "deep-equal"
  ],
  "author": "Evgeny Poberezkin",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/epoberezkin/fast-deep-equal/issues"
  },
  "homepage": "https://github.com/epoberezkin/fast-deep-equal#readme",
  "devDependencies": {
    "coveralls": "^3.1.0",
    "dot": "^1.1.2",
    "eslint": "^7.2.0",
    "mocha": "^7.2.0",
    "nyc": "^15.1.0",
    "pre-commit": "^1.2.2",
    "react": "^16.12.0",
    "react-test-renderer": "^16.12.0",
    "sinon": "^9.0.2",
    "typescript": "^3.9.5"
  },
  "nyc": {
    "exclude": [
      "**/spec/**",
      "node_modules"
    ],
    "reporter": [
      "lcov",
      "text-summary"
    ]
  },
  "files": [
    "index.js",
    "index.d.ts",
    "react.js",
    "react.d.ts",
    "es6/"
  ],
  "types": "index.d.ts"
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        "use strict";
// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.uint32ArrayFrom = void 0;
// IE 11 does not support Array.from, so we do it manually
function uint32ArrayFrom(a_lookUpTable) {
    if (!Uint32Array.from) {
        var return_array = new Uint32Array(a_lookUpTable.length);
        var a_index = 0;
        while (a_index < a_lookUpTable.length) {
            return_array[a_index] = a_lookUpTable[a_index];
            a_index += 1;
        }
        return return_array;
    }
    return Uint32Array.from(a_lookUpTable);
}
exports.uint32ArrayFrom = uint32ArrayFrom;
//# sourceMappingURL=uint32ArrayFrom.js.map                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                # Tiny LRU

Least Recently Used cache for Client or Server.

[![build status](https://secure.travis-ci.org/avoidwork/tiny-lru.svg)](http://travis-ci.org/avoidwork/tiny-lru)

```javascript
const cache = lru(max, ttl = 0);
```

Lodash provides a `memoize` function with a cache that can be swapped out as long as it implements the right interface.
See the [lodash docs](https://lodash.com/docs#memoize) for more on `memoize`.

#### Example
```javascript
_.memoize.Cache = lru().constructor;
const memoized = _.memoize(myFunc);
memoized.cache.max = 10;
```

## clear
### Method

Clears the contents of the cache

	return {Object} LRU instance

**Example**

```javascript
cache.clear();
```

## delete
### Method

Removes item from cache

	param  {String} key Item key
	return {Object}     LRU instance

**Example**

```javascript
cache.delete("myKey");
```

## evict
### Method

Evicts the least recently used item from cache

	return {Object} LRU instance

**Example**

```javascript
cache.evict();
```

## first
### Property

Item in "first" or "bottom" position

**Example**

```javascript
const cache = lru();

cache.first; // null - it's a new cache!
```

## get
### Method

Gets cached item and moves it to the front

	param  {String} key Item key
	return {Mixed}      Undefined or Item value

**Example**

```javascript
const item = cache.get("myKey");
```

## keys
### Method

Returns an `Array` of cache item keys.

	return {Array} Array of keys

**Example**

```javascript
console.log(cache.keys());
```

## max
### Property

Max items to hold in cache (1000)

**Example**

```javascript
const cache = lru(500);

cache.max; // 500
```

## last
### Property

Item in "last" or "top" position

**Example**

```javascript
const cache = lru();

cache.last; // null - it's a new cache!
```

## remove
### Method

(Deprecated) Removes item from cache

	param  {String} key Item key
	return {Object}     LRU instance

**Example**

```javascript
cache.remove("myKey");
```

## set
### Method

Sets item in cache as `first`

	param  {String} key   Item key
	param  {Mixed}  value Item value
	return {Object}       LRU instance

**Example**

```javascript
cache.set("myKey", {prop: true});
```

## size
### Property

Number of items in cache

**Example**

```javascript
const cache = lru();

cache.size; // 0 - it's a new cache!
```

## ttl
### Property

Milliseconds an item will remain in cache; lazy expiration upon next `get()` of an item

**Example**

```javascript
const cache = lru();

cache.ttl = 3e4;
```

## License
Copyright (c) 2022 Jason Mulligan
Licensed under the BSD-3 license.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redis_errors_1 = require("redis-errors");
const command_1 = require("../command");
const errors_1 = require("../errors");
const utils_1 = require("../utils");
const DataHandler_1 = require("../DataHandler");
const debug = utils_1.Debug("connection");
function connectHandler(self) {
    return function () {
        self.setStatus("connect");
        self.resetCommandQueue();
        // AUTH command should be processed before any other commands
        let flushed = false;
        const { connectionEpoch } = self;
        if (self.condition.auth) {
            self.auth(self.condition.auth, function (err) {
                if (connectionEpoch !== self.connectionEpoch) {
                    return;
                }
                if (err) {
                    if (err.message.indexOf("no password is set") !== -1) {
                        console.warn("[WARN] Redis server does not require a password, but a password was supplied.");
                    }
                    else if (err.message.indexOf("without any password configured for the default user") !== -1) {
                        console.warn("[WARN] This Redis server's `default` user does not require a password, but a password was supplied");
                    }
                    else if (err.message.indexOf("wrong number of arguments for 'auth' command") !== -1) {
                        console.warn(`[ERROR] The server returned "wrong number of arguments for 'auth' command". You are probably passing both username and password to Redis version 5 or below. You should only pass the 'password' option for Redis version 5 and under.`);
                    }
                    else {
                        flushed = true;
                        self.recoverFromFatalError(err, err);
                    }
                }
            });
        }
        if (self.condition.select) {
            self.select(self.condition.select).catch((err) => {
                // If the node is in cluster mode, select is disallowed.
                // In this case, reconnect won't help.
                self.silentEmit("error", err);
            });
        }
        if (!self.options.enableReadyCheck) {
            exports.readyHandler(self)();
        }
        /*
          No need to keep the reference of DataHandler here
          because we don't need to do the cleanup.
          `Stream#end()` will remove all listeners for us.
        */
        new DataHandler_1.default(self, {
            stringNumbers: self.options.stringNumbers,
            dropBufferSupport: self.options.dropBufferSupport,
        });
        if (self.options.enableReadyCheck) {
            self._readyCheck(function (err, info) {
                if (connectionEpoch !== self.connectionEpoch) {
                    return;
                }
                if (err) {
                    if (!flushed) {
                        self.recoverFromFatalError(new Error("Ready check failed: " + err.message), err);
                    }
                }
                else {
                    self.serverInfo = info;
                    if (self.connector.check(info)) {
                        exports.readyHandler(self)();
                    }
                    else {
                        self.disconnect(true);
                    }
                }
            });
        }
    };
}
exports.connectHandler = connectHandler;
function abortError(command) {
    const err = new redis_errors_1.AbortError("Command aborted due to connection close");
    err.command = {
        name: command.name,
        args: command.args,
    };
    return err;
}
// If a contiguous set of pipeline commands starts from index zero then they
// can be safely reattempted. If however we have a chain of pipelined commands
// starting at index 1 or more it means we received a partial response before
// the connection close and those pipelined commands must be aborted. For
// example, if the queue looks like this: [2, 3, 4, 0, 1, 2] then after
// aborting and purging we'll have a queue that looks like this: [0, 1, 2]
function abortIncompletePipelines(commandQueue) {
    let expectedIndex = 0;
    for (let i = 0; i < commandQueue.length;) {
        const command = commandQueue.peekAt(i).command;
        const pipelineIndex = command.pipelineIndex;
        if (pipelineIndex === undefined || pipelineIndex === 0) {
            expectedIndex = 0;
        }
        if (pipelineIndex !== undefined && pipelineIndex !== expectedIndex++) {
            commandQueue.remove(i, 1);
            command.reject(abortError(command));
            continue;
        }
        i++;
    }
}
// If only a partial transaction result was received before connection close,
// we have to abort any transaction fragments that may have ended up in the
// offline queue
function abortTransactionFragments(commandQueue) {
    for (let i = 0; i < commandQueue.length;) {
        const command = commandQueue.peekAt(i).command;
        if (command.name === "multi") {
            break;
        }
        if (command.name === "exec") {
            commandQueue.remove(i, 1);
            command.reject(abortError(command));
            break;
        }
        if (command.inTransaction) {
            commandQueue.remove(i, 1);
            command.reject(abortError(command));
        }
        else {
            i++;
        }
    }
}
function closeHandler(self) {
    return function () {
        self.setStatus("close");
        if (!self.prevCondition) {
            self.prevCondition = self.condition;
        }
        if (self.commandQueue.length) {
            abortIncompletePipelines(self.commandQueue);
            self.prevCommandQueue = self.commandQueue;
        }
        if (self.offlineQueue.length) {
            abortTransactionFragments(self.offlineQueue);
        }
        if (self.manuallyClosing) {
            self.manuallyClosing = false;
            debug("skip reconnecting since the connection is manually closed.");
            return close();
        }
        if (typeof self.options.retryStrategy !== "function") {
            debug("skip reconnecting because `retryStrategy` is not a function");
            return close();
        }
        const retryDelay = self.options.retryStrategy(++self.retryAttempts);
        if (typeof retryDelay !== "number") {
            debug("skip reconnecting because `retryStrategy` doesn't return a number");
            return close();
        }
        debug("reconnect in %sms", retryDelay);
        self.setStatus("reconnecting", retryDelay);
        self.reconnectTimeout = setTimeout(function () {
            self.reconnectTimeout = null;
            self.connect().catch(utils_1.noop);
        }, retryDelay);
        const { maxRetriesPerRequest } = self.options;
        if (typeof maxRetriesPerRequest === "number") {
            if (maxRetriesPerRequest < 0) {
                debug("maxRetriesPerRequest is negative, ignoring...");
            }
            else {
                const remainder = self.retryAttempts % (maxRetriesPerRequest + 1);
                if (remainder === 0) {
                    debug("reach maxRetriesPerRequest limitation, flushing command queue...");
                    self.flushQueue(new errors_1.MaxRetriesPerRequestError(maxRetriesPerRequest));
                }
            }
        }
    };
    function close() {
        self.setStatus("end");
        self.flushQueue(new Error(utils_1.CONNECTION_CLOSED_ERROR_MSG));
    }
}
exports.closeHandler = closeHandler;
function errorHandler(self) {
    return function (error) {
        debug("error: %s", error);
        self.silentEmit("error", error);
    };
}
exports.errorHandler = errorHandler;
function readyHandler(self) {
    return function () {
        self.setStatus("ready");
        self.retryAttempts = 0;
        if (self.options.monitor) {
            self.call("monitor");
            const { sendCommand } = self;
            self.sendCommand = function (command) {
                if (command_1.default.checkFlag("VALID_IN_MONITOR_MODE", command.name)) {
                    r'use strict'

const test = require('tap').test
const serializer = require('../lib/err')
const wrapErrorSerializer = require('../').wrapErrorSerializer

test('serializes Error objects', function (t) {
  t.plan(3)
  const serialized = serializer(Error('foo'))
  t.is(serialized.type, 'Error')
  t.is(serialized.message, 'foo')
  t.match(serialized.stack, /err\.test\.js:/)
})

test('serializes Error objects with extra properties', function (t) {
  t.plan(5)
  const err = Error('foo')
  err.statusCode = 500
  const serialized = serializer(err)
  t.is(serialized.type, 'Error')
  t.is(serialized.message, 'foo')
  t.ok(serialized.statusCode)
  t.is(serialized.statusCode, 500)
  t.match(serialized.stack, /err\.test\.js:/)
})

test('serializes Error objects with subclass "type"', function (t) {
  t.plan(1)
  class MyError extends Error {}
  const err = new MyError('foo')
  const serialized = serializer(err)
  t.is(serialized.type, 'MyError')
})

test('serializes nested errors', function (t) {
  t.plan(7)
  const err = Error('foo')
  err.inner = Error('bar')
  const serialized = serializer(err)
  t.is(serialized.type, 'Error')
  t.is(serialized.message, 'foo')
  t.match(serialized.stack, /err\.test\.js:/)
  t.is(serialized.inner.type, 'Error')
  t.is(serialized.inner.message, 'bar')
  t.match(serialized.inner.stack, /Error: bar/)
  t.match(serialized.inner.stack, /err\.test\.js:/)
})

test('prevents infinite recursion', function (t) {
  t.plan(4)
  const err = Error('foo')
  err.inner = err
  const serialized = serializer(err)
  t.is(serialized.type, 'Error')
  t.is(serialized.message, 'foo')
  t.match(serialized.stack, /err\.test\.js:/)
  t.notOk(serialized.inner)
})

test('cleans up infinite recursion tracking', function (t) {
  t.plan(8)
  const err = Error('foo')
  const bar = Error('bar')
  err.inner = bar
  bar.inner = err

  serializer(err)
  const serialized = serializer(err)

  t.is(serialized.type, 'Error')
  t.is(serialized.message, 'foo')
  t.match(serialized.stack, /err\.test\.js:/)
  t.ok(serialized.inner)
  t.is(serialized.inner.type, 'Error')
  t.is(serialized.inner.message, 'bar')
  t.match(serialized.inner.stack, /Error: bar/)
  t.notOk(serialized.inner.inner)
})

test('err.raw is available', function (t) {
  t.plan(1)
  const err = Error('foo')
  const serialized = serializer(err)
  t.equal(serialized.raw, err)
})

test('redefined err.constructor doesnt crash serializer', function (t) {
  t.plan(10)

  function check (a, name) {
    t.is(a.type, name)
    t.is(a.message, 'foo')
  }

  const err1 = TypeError('foo')
  err1.constructor = '10'

  const err2 = TypeError('foo')
  err2.constructor = undefined

  const err3 = Error('foo')
  err3.constructor = null

  const err4 = Error('foo')
  err4.constructor = 10

  class MyError extends Error {}
  const err5 = new MyError('foo')
  err5.constructor = undefined

  check(serializer(err1), 'TypeError')
  check(serializer(err2), 'TypeError')
  check(serializer(err3), 'Error')
  check(serializer(err4), 'Error')
  // We do not expect 'MyError' because err5.constructor has been blown away.
  // `err5.name` is 'Error' from the base class prototype.
  check(serializer(err5), 'Error')
})

test('pass through anything that is not an Error', function (t) {
  t.plan(3)

  function check (a) {
    t.is(serializer(a), a)
  }

  check('foo')
  check({ hello: 'world' })
  check([1, 2])
})

test('can wrap err serializers', function (t) {
  t.plan(5)
  const err = Error('foo')
  err.foo = 'foo'
  const serializer = wrapErrorSerializer(function (err) {
    delete err.foo
    err.bar = 'bar'
    return err
  })
  const serialized = serializer(err)
  t.is(serialized.type, 'Error')
  t.is(serialized.message, 'foo')
  t.match(serialized.stack, /err\.test\.js:/)
  t.notOk(serialized.foo)
  t.is(serialized.bar, 'bar')
})
                                                                                                                                                                                                                                                                                       INDX( 	 m‚mR           (     Ë       ⁄                    úÙ    p Z     µs    <ìPunf⁄∆xyunf⁄∆xyunf⁄∆xyunf⁄X       W               c h a n g e l o g . m d Z     úÙ    h X     µs    <ìPunf⁄∆xyunf⁄∆xyunf⁄∆xyunf⁄X       W               C H A N G E ~ 1 . M D Ú     X F     µs    tÄvnf⁄˝•ynf⁄˝•ynf⁄îEnKøh⁄                       j s C ÉÄ    ` P     µs    Njtnf⁄ùÓÖtnf⁄ùÓÖtnf⁄>›Ñtnf⁄       >              L I C E N S E C{    p Z     µs    hñsnf⁄»Æsnf⁄»Æsnf ,Æsnf⁄       Ä              p a c k a g e . j s o n       C{    p Z     µs    hñsnf⁄»Æsnf⁄»Æsnf⁄,Æsnf⁄       Ä              P A C K A G ~ 1 . J S O       ~    h T     µs    πtnf⁄*tnf⁄*tnf⁄„ƒ)tnf⁄       õ
              	R E A D M E . m d                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    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( 	 J~#R   
       (   8   Ë           . ⁄⁄⁄⁄                      ª{    E≥ef⁄•«≥ef⁄•«≥ef⁄Éy≥ef⁄       ¯              F U 3 A 0 A ~ 1 . J S               ª{    ïD¨∏ef⁄¬í¨∏ef⁄¬í¨∏ef⁄ïD¨∏ef⁄       ù              F U N C T I O N _ S T A T S . d . t s                             x h     ª{    ïD¨∏ef⁄¬í¨∏ef⁄¬í¨∏ef⁄ïD¨∏ef⁄       ù              F U N C T I O N _ S T A T S . d . t s               ª{    ïD¨∏ef⁄¬í¨∏ef⁄¬í¨∏ef⁄ïD¨∏ef⁄       ù             F U N C T I O N _ S T A T S . d . t s               ª{    ïD¨∏ef⁄¬í¨∏ef⁄¬í¨∏ef⁄ïD¨∏ef⁄       ù              F U N C T I O N _ S T A T S . d . t s               ïº    x h     ª{    ïD¨∏ef⁄¬í¨∏ef⁄¬í¨∏ef⁄ïD¨∏ef⁄       ù              F U N C T I O N _ S T A T S . d . t s               ïº    x h     ª{    ïD¨∏ef⁄¬í¨∏ef⁄¬í¨∏ef⁄ïD¨∏ef⁄       ù              F U N C T I O N _ S T A T S . d . t s               ª{    ïD¨∏ef⁄¬í¨∏ef⁄¬í¨∏ef⁄ïD¨∏ef⁄       ù             F U N C T I O N _ S T A T S . d . t s               ª{    ïD¨∏ef⁄¬í¨∏ef⁄¬í¨∏ef⁄ïD¨∏ef⁄       ù              F U N C T I O N _ S T A T S . d . t s               ª{    ïD¨∏ef⁄¬í¨∏ef⁄¬í¨∏ef⁄ïD¨∏ef⁄       ù              F U N C T I O N _ S T A T S . d . t s               ª{    ïD¨∏ef⁄¬í¨∏ef⁄¬í¨∏ef⁄ïD¨∏ef⁄       ù              F U N C T I O N _ S T A T S . d . t s               ª{    ïD¨∏ef⁄¬í¨∏ef⁄¬í¨∏ef⁄ïD¨∏ef⁄       ù              F U N C T I O N _ S T A T S  d . t s               ª{    ïD¨∏ef⁄¬í¨∏ef⁄¬í¨∏ef⁄ïD¨∏ef⁄       ù              F U N C T I O N _ S T A T S . d . t s               ª{    E≥ef⁄•«≥ef⁄•«≥ef⁄Éy≥ef⁄       ¯              F U N C T I O N _ S T A T S . j s                   ª{    ≈i≤ef⁄s≤ef⁄s≤ef⁄s≤ef⁄¯       ¯               F U N C T I ~ 1 . J S               ª{    Y©∏ef⁄g7©∏ef⁄g7©∏ef⁄Y©∏ef⁄∞       Ø               F U N C T I ~ 1 . T S               ª{    ‘çÉ≤ef⁄˙πè≤ef⁄˙πè≤ef⁄öíè≤ef Ë       Ê               F U N C T I ~ 2 . J S pº    h X     ª{    q^©∏ef⁄ÇÖ©∏ef⁄ÇÖ©∏ef⁄ÇÖ©∏ef⁄»       ∆               F U N C T I ~ 2 . T S £Æ    h X     ª{    öçΩ≤ef⁄ºæ≤ef⁄ºæ≤ef⁄ºæ≤ef⁄8      1              F U N C T I ~ 3 . J S uº    h X     ª{    ï¨©∏ef⁄ï¨©∏ef⁄ï¨©∏ef⁄ï¨©∏ef⁄∏       ∑               F U N C T I ~ 3 . T S πÆ    h X     ª{    ,å¡≤ef⁄√»¬≤ef⁄√»¬≤ef⁄√»¬≤ef⁄Ë       Ê               F U N C T I ~ 4 . J S zº    h X     ª{    ù”©∏ef⁄Æ˙©∏ef⁄Æ˙©∏ef Æ˙©∏ef⁄†       †               F U N C T I ~ 4 . T S ∞   	 h X     ª{    ⁄ûE≥ef⁄bˇF≥ef⁄bˇF≥ef⁄bF≥ef⁄       K              G E 0 C 4 E ~ 1 . J S ∞   	 h X     ª{    I C≥ef⁄HfD≥ef⁄HfD≥ef⁄HfD≥ef⁄                    G E 2 1 7 0 ~ 1 . J S ‰º    h X     ª{    s∫µ∏ef⁄s∫µ∏ef⁄s∫µ∏ef⁄s∫µ∏ef⁄–      À              G E 4 3 1 8 ~ 1 . T S ’º    h X     ª{    ‹3¥∏ef⁄ÁZ¥∏ef⁄ÁZ¥∏ef⁄ÁZ¥∏ef⁄       ˇ              G E 4 C 7 6 ~ 1 . T S ﬁº    h X     ª{    ^Eµ∏ef⁄llµ∏ef llµ∏ef⁄^Eµ∏ef⁄       ¸              G E 5 F 7 4 ~ 1 . T S L∞    h X     ª{    Ÿÿµef⁄L˜ÿµef⁄L˜ÿµef⁄©ÿµef⁄       =              G E 6 C C E ~ 1 . J S Ëº    h X     ª{    ¨/∂∏ef⁄¨/∂∏ef⁄∏V∂∏ef⁄¨/∂∏ef⁄ÿ      ‘              G E 7 6 E A ~ 1 . T S ÓØ    h X     ª{    YÅA≥ef⁄ÉjB≥ef⁄ÉjB≥ef⁄aB≥ef⁄       `              G E 8 4 E 3 ~ 1 . J S _∞    h X     ª{    õ⁄µef⁄‡§⁄µef⁄‡§⁄µef⁄◊}⁄µef⁄                     G E D 2 F 9 ~ 1 . J S Ÿº    h X     ª{    ˇÅ¥∏ef ©¥∏ef⁄©¥∏ef⁄©¥∏ef⁄–      À              G E D 6 7 8 ~ 1 . T S <∞    h X     ª{    ¨H≥ef⁄2!I≥ef⁄2!I≥ef⁄2!I≥ef⁄                    G E F C 9 B ~ 1 . J S ûº    à t     ª{    ⁄‡¨∏ef⁄!}≠∏ef⁄!}≠∏ef⁄V≠∏ef⁄ 0      •#              g e n e r i c - t r a n s f o r m e r s . d . t s     :Ø    Ä p     ª{    i√
≥ef⁄⁄≈≥ef⁄⁄≈≥ef⁄"≥ef⁄ @      ;              g e n e r i c - t r a n s f o r m e r s . j s               G E O R A D ~ 4 . J S                              INDX( 	 àâ#R          (   8   Ë       ⁄Y O   O I                        ª{    ˇÅ¥∏ef⁄©¥∏ef⁄©¥∏ef⁄©¥∏ef⁄–      À              G E O R A D I U S B Y M E M B E R _ R O . d . t s                  ª{    ˇÅ¥∏ef⁄©¥∏ef⁄©¥∏ef⁄©¥∏ef⁄–      À              G E O R A D I U S B Y M E M B E R _ R O . d . t s                  ª{    ˇÅ¥∏ef⁄©¥∏ef⁄©¥∏ef⁄©¥∏ef⁄–      À              G E O R A D I U S B Y M E M B E R _ R O . d . t s                  ˇÅ¥∏ef⁄©¥∏ef⁄©¥∏ef ©¥∏ef⁄–      À              G E O R A D I U S B Y M E M B E R _ R O . d . t s                  ˇÅ¥∏ef⁄©¥∏ef⁄©¥∏ef⁄©¥∏ef⁄–      À              G E O R A D I U S B Y M E M B E R _ R O . d . t s                  ©¥∏ef⁄©¥∏ef⁄–      À              G E O R A D I U S B Y M E M B E R _ R O . d . t s                  ©¥∏ef⁄©¥∏ef⁄–      À              G E O R A D I U S B Y M E M B E R _ R O . d . t s                  ©¥∏ef⁄–      À              G E O R A D I U S B  M E M B E R _ R O . d . t s                  ©¥∏ef⁄–      À              G E O R A D I U S B Y M E M B E R _ R O . d . t s                  ©¥∏ef⁄–      À              G E O R A D I U S B Y M E M B E R _ R O . d . t s                  ©¥∏ef⁄–      À              G E O R A D I U S B Y M E M B E R _ R O . d . t s                  ©¥∏ef⁄©¥∏ef⁄–      À              G E O R A D I U S B Y M E M B E R _ R O . d . t s                  ©¥∏ef⁄–      À              G E  R A D I U S B Y M E M B E R _ R O . d . t s                  ©¥∏ef⁄–      À              G E O R A D I U S B Y M E M B E R _ R O . d . t s                  ©¥∏ef⁄©¥∏ef⁄–      À              G E O R A D I U S B Y M E M B E R _ R O . d . t s                  ©¥∏ef⁄–      À              G E O R A D I U S B Y M E M B E R _ R O . d . t s                  ©¥∏ef⁄–      À              G E O R A D I U S B Y M E M B E R _ R O . d . t s                  ©¥∏ef⁄–      À             G E O R A D I U S B Y M E M B E R _ R O . d . t s                  ©¥∏ef⁄–      À              G E O R A D I U S B Y M E M B E R _ R O . d . t s                  ©¥∏ef⁄–      À              G E O R A D I U S B Y M E M B E R _ R O . d . t s                  ê z     ª{    YÅA≥ef⁄ÉjB≥ef⁄ÉjB≥ef⁄aB≥ef⁄       `              G E O R A D I U S B Y M E M B E R _ R O _ W I T H . j s ≥ef⁄∞   	 à t     ª{    ⁄ûE≥ef⁄bˇF≥ef⁄bˇF≥ef⁄bF≥ef⁄       K              G E  R A D I U S B Y M E M B E R _ W I T H . j s    _∞    x d     ª{    õ⁄µef⁄‡§⁄µef⁄‡§⁄µef⁄◊}⁄µef⁄                     G E O R A D I U S S T O R E . j s    ƒº    x d     ª{    ÖI≥∏ef⁄ÖI≥∏ef⁄ÖI≥∏ef⁄ÖI≥∏ef⁄Ë      Ë              G E O R A D I U S _ R O . d . t s    ©Ø    p `     ª{    Ô
"≥ef⁄Y"≥ef⁄Y"≥ef⁄Y"≥ef⁄                    G E O R A D I U S _ R O . j s ¿º    Ä n     ª{    8≤∏ef⁄Z‘≤∏ef⁄Z‘≤∏ef⁄Z‘≤∏ef⁄                    G E O R A D I U S _ R O _ W  T H . d . t s   öØ    Ä j     ª{    5˜≥ef⁄yW ≥ef⁄yW ≥ef⁄®π≥ef⁄       2              G E O R A D I U S _ R O _ W I T H . j s       …º    x h     ª{    ôó≥∏ef⁄ôó≥∏ef⁄ôó≥∏ef⁄ôó≥∏ef⁄                    G E O R A D I U S _ W I T H . d . t s ΩØ    x d     ª{    í∫$≥ef⁄8A&≥ef⁄8A&≥ef⁄Ÿ|%≥ef⁄                     G E O R A D I U S _ W I T H . j s     öØ    h X     ª{    5˜≥ef⁄yW ≥ef⁄yW ≥ef⁄®π≥ef⁄       2              G E O R A D ~ 1 . J S ¿º    h X     ª{    8≤∏ef⁄Z‘≤∏ef⁄Z‘≤∏ef⁄Z‘≤∏ef⁄                    G E O R A D ~ 1 . T S ©Ø    h X     ª{    Ô
"≥ef⁄Y"≥ef⁄Y"≥ef⁄Y"≥ef⁄                    G E O R A D ~ 2 . J S ƒº    h X     ª{    ÖI≥∏ef⁄ÖI≥∏ef⁄ÖI≥∏ef⁄ÖI≥∏ef⁄Ë      Ë              G E O R A D ~ 2 . T S ΩØ    h X     ª{    í∫$≥ef⁄8A&≥ef⁄8A&≥ef⁄Ÿ|%≥ef⁄                     G E O R A D ~ 3 . J S …º    h X     ª{    ôó≥∏ef⁄ôó≥∏ef⁄ôó≥∏ef⁄ôó≥∏ef⁄                    G E O R A D ~ 3 . T S              se 5:
                    this.$ = $$[$0];
                    break;
                case 6:
                    this.$ = $$[$0];
                    break;
                case 7:
                    this.$ = $$[$0];
                    break;
                case 8:
                    this.$ = $$[$0];
                    break;
                case 9:
                    this.$ = {
                        type: 'CommentStatement',
                        value: yy.stripComment($$[$0]),
                        strip: yy.stripFlags($$[$0], $$[$0]),
                        loc: yy.locInfo(this._$)
                    };

                    break;
                case 10:
                    this.$ = {
                        type: 'ContentStatement',
                        original: $$[$0],
                        value: $$[$0],
                        loc: yy.locInfo(this._$)
                    };

                    break;
                case 11:
                    this.$ = yy.prepareRawBlock($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
                    break;
                case 12:
                    this.$ = { path: $$[$0 - 3], params: $$[$0 - 2], hash: $$[$0 - 1] };
                    break;
                case 13:
                    this.$ = yy.prepareBlock($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0], false, this._$);
                    break;
                case 14:
                    this.$ = yy.prepareBlock($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0], true, this._$);
                    break;
                case 15:
                    this.$ = { open: $$[$0 - 5], path: $$[$0 - 4], params: $$[$0 - 3], hash: $$[$0 - 2], blockParams: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 5], $$[$0]) };
                    break;
                case 16:
                    this.$ = { path: $$[$0 - 4], params: $$[$0 - 3], hash: $$[$0 - 2], blockParams: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 5], $$[$0]) };
                    break;
                case 17:
                    this.$ = { path: $$[$0 - 4], params: $$[$0 - 3], hash: $$[$0 - 2], blockParams: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 5], $$[$0]) };
                    break;
                case 18:
                    this.$ = { strip: yy.stripFlags($$[$0 - 1], $$[$0 - 1]), program: $$[$0] };
                    break;
                case 19:
                    var inverse = yy.prepareBlock($$[$0 - 2], $$[$0 - 1], $$[$0], $$[$0], false, this._$),
                        program = yy.prepareProgram([inverse], $$[$0 - 1].loc);
                    program.chained = true;

                    this.$ = { strip: $$[$0 - 2].strip, program: program, chain: true };

                    break;
                case 20:
                    this.$ = $$[$0];
                    break;
                case 21:
                    this.$ = { path: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 2], $$[$0]) };
                    break;
                case 22:
                    this.$ = yy.prepareMustache($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0 - 4], yy.stripFlags($$[$0 - 4], $$[$0]), this._$);
                    break;
                case 23:
                    this.$ = yy.prepareMustache($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0 - 4], yy.stripFlags($$[$0 - 4], $$[$0]), this._$);
                    break;
                case 24:
                    this.$ = {
                        type: 'PartialStatement',
                        name: $$[$0 - 3],
                        params: $$[$0 - 2],
                        hash: $$[$0 - 1],
                        indent: '',
                        strip: yy.stripFlags($$[$0 - 4], $$[$0]),
                        loc: yy.locInfo(this._$)
                    };

                    break;
                case 25:
                    this.$ = yy.preparePartialBlock($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
                    break;
                case 26:
                    this.$ = { path: $$[$0 - 3], params: $$[$0 - 2], hash: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 4], $$[$0]) };
                    break;
                case 27:
                    this.$ = $$[$0];
                    break;
                case 28:
                    this.$ = $$[$0];
                    break;
                case 29:
                    this.$ = {
                        type: 'SubExpression',
                        path: $$[$0 - 3],
                        params: $$[$0 - 2],
                        hash: $$[$0 - 1],
                        loc: yy.locInfo(this._$)
                    };

                    break;
                case 30:
                    this.$ = { type: 'Hash', pairs: $$[$0], loc: yy.locInfo(this._$) };
                    break;
                case 31:
                    this.$ = { type: 'HashPair', key: yy.id($$[$0 - 2]), value: $$[$0], loc: yy.locInfo(this._$) };
                    break;
                case 32:
                    this.$ = yy.id($$[$0 - 1]);
                    break;
                case 33:
                    this.$ = $$[$0];
                    break;
                case 34:
                    this.$ = $$[$0];
                    break;
                case 35:
                    this.$ = { type: 'StringLiteral', value: $$[$0], original: $$[$0], loc: yy.locInfo(this._$) };
                    break;
                case 36:
                    this.$ = { type: 'NumberLiteral', value: Number($$[$0]), original: Number($$[$0]), loc: yy.locInfo(this._$) };
                    break;
                case 37:
                    this.$ = { type: 'BooleanLiteral', value: $$[$0] === 'true', original: $$[$0] === 'true', loc: yy.locInfo(this._$) };
                    break;
                case 38:
                    this.$ = { type: 'UndefinedLiteral', original: undefined, value: undefined, loc: yy.locInfo(this._$) };
                    break;
                case 39:
                    this.$ = { type: 'NullLiteral', original: null, value: null, loc: yy.locInfo(this._$) };
                    break;
                case 40:
                    this.$ = $$[$0];
                    break;
                case 41:
                    this.$ = $$[$0];
                    break;
                case 42:
                    this.$ = yy.preparePath(true, $$[$0], this._$);
                    break;
                case 43:
                    this.$ = yy.preparePath(false, $$[$0], this._$);
                    break;
                case 44:
                    $$[$0 - 2].push({ part: yy.id($$[$0]), original: $$[$0], separator: $$[$0 - 1] });this.$ = $$[$0 - 2];
                    break;
                case 45:
                    this.$ = [{ part: yy.id($$[$0]), original: $$[$0] }];
                    break;
                case 46:
                    this.$ = [];
                    break;
                case 47:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 48:
                    this.$ = [];
                    break;
                case 49:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 50:
                    this.$ = [];
                    break;
                case 51:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 58:
                    this.$ = [];
                    break;
                case 59:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 64:
                    this.$ = [];
                    break;
                case 65:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 70:
                    this.$ = [];
                    break;
                case 71:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 78:
                    this.$ = [];
                    break;
                case 79:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 82:
                    this.$ = [];
                    break;
                case 83:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 86:
                    this.$ = [];
                    break;
                case 87:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 90:
                    this.$ = [];
                    break;
                case 91:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 94:
                    this.$ = [];
                    break;
                case 95:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 98:
                    this.$ = [$$[$0]];
                    break;
                case 99:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 100:
                    this.$ = [$$[$0]];
                    break;
                case 101:
                    $$[$0 - 1].push($$[$0]);
                    break;
            }
        },
        table: [{ 3: 1, 4: 2, 5: [2, 46], 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 1: [3] }, { 5: [1, 4] }, { 5: [2, 2], 7: 5, 8: 6, 9: 7, 10: 8, 11: 9, 12: 10, 13: 11, 14: [1, 12], 15: [1, 20], 16: 17, 19: [1, 23], 24: 15, 27: 16, 29: [1, 21], 34: [1, 22], 39: [2, 2], 44: [2, 2], 47: [2, 2], 48: [1, 13], 51: [1, 14], 55: [1, 18], 59: 19, 60: [1, 24] }, { 1: [2, 1] }, { 5: [2, 47], 14: [2, 47], 15: [2, 47], 19: [2, 47], 29: [2, 47], 34: [2, 47], 39: [2, 47], 44: [2, 47], 47: [2, 47], 48: [2, 47], 51: [2, 47], 55: [2, 47], 60: [2, 47] }, { 5: [2, 3], 14: [2, 3], 15: [2, 3], 19: [2, 3], 29: [2, 3], 34: [2, 3], 39: [2, 3], 44: [2, 3], 47: [2, 3], 48: [2, 3], 51: [2, 3], 55: [2, 3], 60: [2, 3] }, { 5: [2, 4], 14: [2, 4], 15: [2, 4], 19: [2, 4], 29: [2, 4], 34: [2, 4], 39: [2, 4], 44: [2, 4], 47: [2, 4], 48: [2, 4], 51: [2, 4], 55: [2, 4], 60: [2, 4] }, { 5: [2, 5], 14: [2, 5], 15: [2, 5], 19: [2, 5], 29: [2, 5], 34: [2, 5], 39: [2, 5], 44: [2, 5], 47: [2, 5], 48: [2, 5], 51: [2, 5], 55: [2, 5], 60: [2, 5] }, { 5: [2, 6], 14: [2, 6], 15: [2, 6], 19: [2, 6], 29: [2, 6], 34: [2, 6], 39: [2, 6], 44: [2, 6], 47: [2, 6], 48: [2, 6], 51: [2, 6], 55: [2, 6], 60: [2, 6] }, { 5: [2, 7], 14: [2, 7], 15: [2, 7], 19: [2, 7], 29: [2, 7], 34: [2, 7], 39: [2, 7], 44: [2, 7], 47: [2, 7], 48: [2, 7], 51: [2, 7], 55: [2, 7], 60: [2, 7] }, { 5: [2, 8], 14: [2, 8], 15: [2, 8], 19: [2, 8], 29: [2, 8], 34: [2, 8], 39: [2, 8], 44: [2, 8], 47: [2, 8], 48: [2, 8], 51: [2, 8], 55: [2, 8], 60: [2, 8] }, { 5: [2, 9], 14: [2, 9], 15: [2, 9], 19: [2, 9], 29: [2, 9], 34: [2, 9], 39: [2, 9], 44: [2, 9], 47: [2, 9], 48: [2, 9], 51: [2, 9], 55: [2, 9], 60: [2, 9] }, { 20: 25, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 36, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 37, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 4: 38, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 15: [2, 48], 17: 39, 18: [2, 48] }, { 20: 41, 56: 40, 64: 42, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 44, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 5: [2, 10], 14: [2, 10], 15: [2, 10], 18: [2, 10], 19: [2, 10], 29: [2, 10], 34: [2, 10], 39: [2, 10], 44: [2, 10], 47: [2, 10], 48: [2, 10], 51: [2, 10], 55: [2, 10], 60: [2, 10] }, { 20: 45, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 46, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 47, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 41, 56: 48, 64: 42, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [2, 78], 49: 49, 65: [2, 78], 72: [2, 78], 80: [2, 78], 81: [2, 78], 82: [2, 78], 83: [2, 78], 84: [2, 78], 85: [2, 78] }, { 23: [2, 33], 33: [2, 33], 54: [2, 33], 65: [2, 33], 68: [2, 33], 72: [2, 33], 75: [2, 33], 80: [2, 33], 81: [2, 33], 82: [2, 33], 83: [2, 33], 84: [2, 33], 85: [2, 33] }, { 23: [2, 34], 33: [2, 34], 54: [2, 34], 65: [2, 34], 68: [2, 34], 72: [2, 34], 75: [2, 34], 80: [2, 34], 81: [2, 34], 82: [2, 34], 83: [2, 34], 84: [2, 34], 85: [2, 34] }, { 23: [2, 35], 33: [2, 35], 54: [2, 35], 65: [2, 35], 68: [2, 35], 72: [2, 35], 75: [2, 35], 80: [2, 35], 81: [2, 35], 82: [2, 35], 83: [2, 35], 84: [2, 35], 85: [2, 35] }, { 23: [2, 36], 33: [2, 36], 54: [2, 36], 65: [2, 36], 68: [2, 36], 72: [2, 36], 75: [2, 36], 80: [2, 36], 81: [2, 36], 82: [2, 36], 83: [2, 36], 84: [2, 36], 85: [2, 36] }, { 23: [2, 37], 33: [2, 37], 54: [2, 37], 65: [2, 37], 68: [2, 37], 72: [2, 37], 75: [2, 37], 80: [2, 37], 81: [2, 37], 82: [2, 37], 83: [2, 37], 84: [2, 37], 85: [2, 37] }, { 23: [2, 38], 33: [2, 38], 54: [2, 38], 65: [2, 38], 68: [2, 38], 72: [2, 38], 75: [2, 38], 80: [2, 38], 81: [2, 38], 82: [2, 38], 83: [2, 38], 84: [2, 38], 85: [2, 38] }, { 23: [2, 39], 33: [2, 39], 54: [2, 39], 65: [2, 39], 68: [2, 39], 72: [2, 39], 75: [2, 39], 80: [2, 39], 81: [2, 39], 82: [2, 39], 83: [2, 39], 84: [2, 39], 85: [2, 39] }, { 23: [2, 43], 33: [2, 43], 54: [2, 43], 65: [2, 43], 68: [2, 43], 72: [2, 43], 75: [2, 43], 80: [2, 43], 81: [2, 43], 82: [2, 43], 83: [2, 43], 84: [2, 43], 85: [2, 43], 87: [1, 50] }, { 72: [1, 35], 86: 51 }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 52: 52, 54: [2, 82], 65: [2, 82], 72: [2, 82], 80: [2, 82], 81: [2, 82], 82: [2, 82], 83: [2, 82], 84: [2, 82], 85: [2, 82] }, { 25: 53, 38: 55, 39: [1, 57], 43: 56, 44: [1, 58], 45: 54, 47: [2, 54] }, { 28: 59, 43: 60, 44: [1, 58], 47: [2, 56] }, { 13: 62, 15: [1, 20], 18: [1, 61] }, { 33: [2, 86], 57: 63, 65: [2, 86], 72: [2, 86], 80: [2, 86], 81: [2, 86], 82: [2, 86], 83: [2, 86], 84: [2, 86], 85: [2, 86] }, { 33: [2, 40], 65: [2, 40], 72: [2, 40], 80: [2, 40], 81: [2, 40], 82: [2, 40], 83: [2, 40], 84: [2, 40], 85: [2, 40] }, { 33: [2, 41], 65: [2, 41], 72: [2, 41], 80: [2, 41], 81: [2, 41], 82: [2, 41], 83: [2, 41], 84: [2, 41], 85: [2, 41] }, { 20: 64, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 65, 47: [1, 66] }, { 30: 67, 33: [2, 58], 65: [2, 58], 72: [2, 58], 75: [2, 58], 80: [2, 58], 81: [2, 58], 82: [2, 58], 83: [2, 58], 84: [2, 58], 85: [2, 58] }, { 33: [2, 64], 35: 68, 65: [2, 64], 72: [2, 64], 75: [2, 64], 80: [2, 64], 81: [2, 64], 82: [2, 64], 83: [2, 64], 84: [2, 64], 85: [2, 64] }, { 21: 69, 23: [2, 50], 65: [2, 50], 72: [2, 50], 80: [2, 50], 81: [2, 50], 82: [2, 50], 83: [2, 50], 84: [2, 50], 85: [2, 50] }, { 33: [2, 90], 61: 70, 65: [2, 90], 72: [2, 90], 80: [2, 90], 81: [2, 90], 82: [2, 90], 83: [2, 90], 84: [2, 90], 85: [2, 90] }, { 20: 74, 33: [2, 80], 50: 71, 63: 72, 64: 75, 65: [1, 43], 69: 73, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 72: [1, 79] }, { 23: [2, 42], 33: [2, 42], 54: [2, 42], 65: [2, 42], 68: [2, 42], 72: [2, 42], 75: [2, 42], 80: [2, 42], 81: [2, 42], 82: [2, 42], 83: [2, 42], 84: [2, 42], 85: [2, 42], 87: [1, 50] }, { 20: 74, 53: 80, 54: [2, 84], 63: 81, 64: 75, 65: [1, 43], 69: 82, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 83, 47: [1, 66] }, { 47: [2, 55] }, { 4: 84, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], /**
 * The `node:http2` module provides an implementation of the [HTTP/2](https://tools.ietf.org/html/rfc7540) protocol.
 * It can be accessed using:
 *
 * ```js
 * const http2 = require('node:http2');
 * ```
 * @since v8.4.0
 * @see [source](https://github.com/nodejs/node/blob/v20.2.0/lib/http2.js)
 */
declare module "http2" {
    import EventEmitter = require("node:events");
    import * as fs from "node:fs";
    import * as net from "node:net";
    import * as stream from "node:stream";
    import * as tls from "node:tls";
    import * as url from "node:url";
    import {
        IncomingHttpHeaders as Http1IncomingHttpHeaders,
        IncomingMessage,
        OutgoingHttpHeaders,
        ServerResponse,
    } from "node:http";
    export { OutgoingHttpHeaders } from "node:http";
    export interface IncomingHttpStatusHeader {
        ":status"?: number | undefined;
    }
    export interface IncomingHttpHeaders extends Http1IncomingHttpHeaders {
        ":path"?: string | undefined;
        ":method"?: string | undefined;
        ":authority"?: string | undefined;
        ":scheme"?: string | undefined;
    }
    // Http2Stream
    export interface StreamPriorityOptions {
        exclusive?: boolean | undefined;
        parent?: number | undefined;
        weight?: number | undefined;
        silent?: boolean | undefined;
    }
    export interface StreamState {
        localWindowSize?: number | undefined;
        state?: number | undefined;
        localClose?: number | undefined;
        remoteClose?: number | undefined;
        sumDependencyWeight?: number | undefined;
        weight?: number | undefined;
    }
    export interface ServerStreamResponseOptions {
        endStream?: boolean | undefined;
        waitForTrailers?: boolean | undefined;
    }
    export interface StatOptions {
        offset: number;
        length: number;
    }
    export interface ServerStreamFileResponseOptions {
        // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
        statCheck?(stats: fs.Stats, headers: OutgoingHttpHeaders, statOptions: StatOptions): void | boolean;
        waitForTrailers?: boolean | undefined;
        offset?: number | undefined;
        length?: number | undefined;
    }
    export interface ServerStreamFileResponseOptionsWithError extends ServerStreamFileResponseOptions {
        onError?(err: NodeJS.ErrnoException): void;
    }
    export interface Http2Stream extends stream.Duplex {
        /**
         * Set to `true` if the `Http2Stream` instance was aborted abnormally. When set,
         * the `'aborted'` event will have been emitted.
         * @since v8.4.0
         */
        readonly aborted: boolean;
        /**
         * This property shows the number of characters currently buffered to be written.
         * See `net.Socket.bufferSize` for details.
         * @since v11.2.0, v10.16.0
         */
        readonly bufferSize: number;
        /**
         * Set to `true` if the `Http2Stream` instance has been closed.
         * @since v9.4.0
         */
        readonly closed: boolean;
        /**
         * Set to `true` if the `Http2Stream` instance has been destroyed and is no longer
         * usable.
         * @since v8.4.0
         */
        readonly destroyed: boolean;
        /**
         * Set to `true` if the `END_STREAM` flag was set in the request or response
         * HEADERS frame received, indicating that no additional data should be received
         * and the readable side of the `Http2Stream` will be closed.
         * @since v10.11.0
         */
        readonly endAfterHeaders: boolean;
        /**
         * The numeric stream identifier of this `Http2Stream` instance. Set to `undefined`if the stream identifier has not yet been assigned.
         * @since v8.4.0
         */
        readonly id?: number | undefined;
        /**
         * Set to `true` if the `Http2Stream` instance has not yet been assigned a
         * numeric stream identifier.
         * @since v9.4.0
         */
        readonly pending: boolean;
        /**
         * Set to the `RST_STREAM` `error code` reported when the `Http2Stream` is
         * destroyed after either receiving an `RST_STREAM` frame from the connected peer,
         * calling `http2stream.close()`, or `http2stream.destroy()`. Will be`undefined` if the `Http2Stream` has not been closed.
         * @since v8.4.0
         */
        readonly rstCode: number;
        /**
         * An object containing the outbound headers sent for this `Http2Stream`.
         * @since v9.5.0
         */
        readonly sentHeaders: OutgoingHttpHeaders;
        /**
         * An array of objects containing the outbound informational (additional) headers
         * sent for this `Http2Stream`.
         * @since v9.5.0
         */
        readonly sentInfoHeaders?: OutgoingHttpHeaders[] | undefined;
        /**
         * An object containing the outbound trailers sent for this `HttpStream`.
         * @since v9.5.0
         */
        readonly sentTrailers?: OutgoingHttpHeaders | undefined;
        /**
         * A reference to the `Http2Session` instance that owns this `Http2Stream`. The
         * value will be `undefined` after the `Http2Stream` instance is destroyed.
         * @since v8.4.0
         */
        readonly session: Http2Session | undefined;
        /**
         * Provides miscellaneous information about the current state of the`Http2Stream`.
         *
         * A current state of this `Http2Stream`.
         * @since v8.4.0
         */
        readonly state: StreamState;
        /**
         * Closes the `Http2Stream` instance by sending an `RST_STREAM` frame to the
         * connected HTTP/2 peer.
         * @since v8.4.0
         * @param [code=http2.constants.NGHTTP2_NO_ERROR] Unsigned 32-bit integer identifying the error code.
         * @param callback An optional function registered to listen for the `'close'` event.
         */
        close(code?: number, callback?: () => void): void;
        /**
         * Updates the priority for this `Http2Stream` instance.
         * @since v8.4.0
         */
        priority(options: StreamPriorityOptions): void;
        /**
         * ```js
         * const http2 = require('node:http2');
         * const client = http2.connect('http://example.org:8000');
         * const { NGHTTP2_CANCEL } = http2.constants;
         * const req = client.request({ ':path': '/' });
         *
         * // Cancel the stream if there's no activity after 5 seconds
         * req.setTimeout(5000, () => req.close(NGHTTP2_CANCEL));
         * ```
         * @since v8.4.0
         */
        setTimeout(msecs: number, callback?: () => void): void;
        /**
         * Sends a trailing `HEADERS` frame to the connected HTTP/2 peer. This method
         * will cause the `Http2Stream` to be immediately closed and must only be
         * called after the `'wantTrailers'` event has been emitted. When sending a
         * request or sending a response, the `options.waitForTrailers` option must be set
         * in order to keep the `Http2Stream` open after the final `DATA` frame so that
         * trailers can be sent.
         *
         * ```js
         * const http2 = require('node:http2');
         * const server = http2.createServer();
         * server.on('stream', (stream) => {
         *   stream.respond(undefined, { waitForTrailers: true });
         *   stream.on('wantTrailers', () => {
         *     stream.sendTrailers({ xyz: 'abc' });
         *   });
         *   stream.end('Hello World');
         * });
         * ```
         *
         * The HTTP/1 specification forbids trailers from containing HTTP/2 pseudo-header
         * fields (e.g. `':method'`, `':path'`, etc).
         * @since v10.0.0
         */
        sendTrailers(headers: OutgoingHttpHeaders): void;
        addListener(event: "aborted", listener: () => void): this;
        addListener(event: "close", listener: () => void): this;
        addListener(event: "data", listener: (chunk: Buffer | string) => void): this;
        addListener(event: "drain", listener: () => void): this;
        addListener(event: "end", listener: () => void): this;
        addListener(event: "error", listener: (err: Error) => void): this;
        addListener(event: "finish", listener: () => void): this;
        addListener(event: "frameError", listener: (frameType: number, errorCode: number) => void): this;
        addListener(event: "pipe", listener: (src: stream.Readable) => void): this;
        addListener(event: "unpipe", listener: (src: stream.Readable) => void): this;
        addListener(event: "streamClosed", listener: (code: number) => void): this;
        addListener(event: "timeout", listener: () => void): this;
        addListener(event: "trailers", listener: (trailers: IncomingHttpHeaders, flags: number) => void): this;
        addListener(event: "wantTrailers", listener: () => void): this;
        addListener(event: string | symbol, listener: (...args: any[]) => void): this;
        emit(event: "aborted"): boolean;
        emit(event: "close"): boolean;
        emit(event: "data", chunk: Buffer | string): boolean;
        emit(event: "drain"): boolean;
        emit(event: "end"): boolean;
        emit(event: "error", err: Error): boolean;
        emit(event: "finish"): boolean;
        emit(event: "frameError", frameType: number, errorCode: number): boolean;
        emit(event: "pipe", src: stream.Readable): boolean;
        emit(event: "unpipe", src: stream.Readable): boolean;
        emit(event: "streamClosed", code: number): boolean;
        emit(event: "timeout"): boolean;
        emit(event: "trailers", trailers: IncomingHttpHeaders, flags: number): boolean;
        emit(event: "wantTrailers"): boolean;
        emit(event: string | symbol, ...args: any[]): boolean;
        on(event: "aborted", listener: () => void): this;
        on(event: "close", listener: () => void): this;
        on(event: "data", listener: (chunk: Buffer | string) => void): this;
        on(event: "drain", listener: () => void): this;
        on(event: "end", listener: () => void): this;
        on(event: "error", listener: (err: Error) => void): this;
        on(event: "finish", listener: () => void): this;
        on(event: "frameError", listener: (frameType: number, errorCode: number) => void): this;
        on(event: "pipe", listener: (src: stream.Readable) => void): this;
        on(event: "unpipe", listener: (src: stream.Readable) => void): this;
        on(event: "streamClosed", listener: (code: number) => void): this;
        on(event: "timeout", listener: () => void): this;
        on(event: "trailers", listener: (trailers: IncomingHttpHeaders, flags: number) => void): this;
        on(event: "wantTrailers", listener: () => void): this;
        on(event: string | symbol, listener: (...args: any[]) => void): this;
        once(event: "aborted", listener: () => void): this;
        once(event: "close", listener: () => void): this;
        once(event: "data", listener: (chunk: Buffer | string) => void): this;
        once(event: "drain", listener: () => void): this;
        once(event: "end", listener: () => void): this;
        once(event: "error", listener: (err: Error) => void): this;
        once(event: "finish", listener: () => void): this;
        once(event: "frameError", listener: (frameType: number, errorCode: number) => void): this;
        once(event: "pipe", listener: (src: stream.Readable) => void): this;
        once(event: "unpipe", listener: (src: stream.Readable) => void): this;
        once(event: "streamClosed", listener: (code: number) => void): this;
        once(event: "timeout", listener: () => void): this;
        once(event: "trailers", listener: (trailers: IncomingHttpHeaders, flags: number) => void): this;
        once(event: "wantTrailers", listener: () => void): this;
        once(event: string | symbol, listener: (...args: any[]) => void): this;
        prependListener(event: "aborted", listener: () => void): this;
        prependListener(event: "close", listener: () => void): this;
        prependListener(event: "data", listener: (chunk: Buffer | string) => void): this;
        prependListener(event: "drain", listener: () => void): this;
  "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isLicensePlate;

var _assertString = _interopRequireDefault(require("./util/assertString"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validators = {
  'cs-CZ': function csCZ(str) {
    return /^(([ABCDEFHIJKLMNPRSTUVXYZ]|[0-9])-?){5,8}$/.test(str);
  },
  'de-DE': function deDE(str) {
    return /^((A|AA|AB|AC|AE|AH|AK|AM|AN|A√ñ|AP|AS|AT|AU|AW|AZ|B|BA|BB|BC|BE|BF|BH|BI|BK|BL|BM|BN|BO|B√ñ|BS|BT|BZ|C|CA|CB|CE|CO|CR|CW|D|DA|DD|DE|DH|DI|DL|DM|DN|DO|DU|DW|DZ|E|EA|EB|ED|EE|EF|EG|EH|EI|EL|EM|EN|ER|ES|EU|EW|F|FB|FD|FF|FG|FI|FL|FN|FO|FR|FS|FT|F√ú|FW|FZ|G|GA|GC|GD|GE|GF|GG|GI|GK|GL|GM|GN|G√ñ|GP|GR|GS|GT|G√ú|GV|GW|GZ|H|HA|HB|HC|HD|HE|HF|HG|HH|HI|HK|HL|HM|HN|HO|HP|HR|HS|HU|HV|HX|HY|HZ|IK|IL|IN|IZ|J|JE|JL|K|KA|KB|KC|KE|KF|KG|KH|KI|KK|KL|KM|KN|KO|KR|KS|KT|KU|KW|KY|L|LA|LB|LC|LD|LF|LG|LH|LI|LL|LM|LN|L√ñ|LP|LR|LU|M|MA|MB|MC|MD|ME|MG|MH|MI|MK|ML|MM|MN|MO|MQ|MR|MS|M√ú|MW|MY|MZ|N|NB|ND|NE|NF|NH|NI|NK|NM|N√ñ|NP|NR|NT|NU|NW|NY|NZ|OA|OB|OC|OD|OE|OF|OG|OH|OK|OL|OP|OS|OZ|P|PA|PB|PE|PF|PI|PL|PM|PN|PR|PS|PW|PZ|R|RA|RC|RD|RE|RG|RH|RI|RL|RM|RN|RO|RP|RS|RT|RU|RV|RW|RZ|S|SB|SC|SE|SG|SI|SK|SL|SM|SN|SO|SP|SR|ST|SU|SW|SY|SZ|TE|TF|TG|TO|TP|TR|TS|TT|T√ú|√úB|UE|UH|UL|UM|UN|V|VB|VG|VK|VR|VS|W|WA|WB|WE|WF|WI|WK|WL|WM|WN|WO|WR|WS|WT|W√ú|WW|WZ|Z|ZE|ZI|ZP|ZR|ZW|ZZ)[- ]?[A-Z]{1,2}[- ]?\d{1,4}|(ABG|ABI|AIB|AIC|ALF|ALZ|ANA|ANG|ANK|APD|ARN|ART|ASL|ASZ|AUR|AZE|BAD|BAR|BBG|BCH|BED|BER|BGD|BGL|BID|BIN|BIR|BIT|BIW|BKS|BLB|BLK|BNA|BOG|BOH|BOR|BOT|BRA|BRB|BRG|BRK|BRL|BRV|BSB|BSK|BTF|B√úD|BUL|B√úR|B√úS|B√úZ|CAS|CHA|CLP|CLZ|COC|COE|CUX|DAH|DAN|DAU|DBR|DEG|DEL|DGF|DIL|DIN|DIZ|DKB|DLG|DON|DUD|D√úW|EBE|EBN|EBS|ECK|EIC|EIL|EIN|EIS|EMD|EMS|ERB|ERH|ERK|ERZ|ESB|ESW|FDB|FDS|FEU|FFB|FKB|FL√ñ|FOR|FRG|FRI|FRW|FTL|F√úS|GAN|GAP|GDB|GEL|GEO|GER|GHA|GHC|GLA|GMN|GNT|GOA|GOH|GRA|GRH|GRI|GRM|GRZ|GTH|GUB|GUN|GVM|HAB|HAL|HAM|HAS|HBN|HBS|HCH|HDH|HDL|HEB|HEF|HEI|HER|HET|HGN|HGW|HHM|HIG|HIP|HM√ú|HOG|HOH|HOL|HOM|HOR|H√ñS|HOT|HRO|HSK|HST|HVL|HWI|IGB|ILL|J√úL|KEH|KEL|KEM|KIB|KLE|KLZ|K√ñN|K√ñT|K√ñZ|KRU|K√úN|KUS|KYF|LAN|LAU|LBS|LBZ|LDK|LDS|LEO|LER|LEV|LIB|LIF|LIP|L√ñB|LOS|LRO|LSZ|L√úN|LUP|LWL|MAB|MAI|MAK|MAL|MED|MEG|MEI|MEK|MEL|MER|MET|MGH|MGN|MHL|MIL|MKK|MOD|MOL|MON|MOS|MSE|MSH|MSP|MST|MTK|MTL|M√úB|M√úR|MYK|MZG|NAB|NAI|NAU|NDH|NEA|NEB|NEC|NEN|NES|NEW|NMB|NMS|NOH|NOL|NOM|NOR|NVP|NWM|OAL|OBB|OBG|OCH|OHA|√ñHR|OHV|OHZ|OPR|OSL|OVI|OVL|OVP|PAF|PAN|PAR|PCH|PEG|PIR|PL√ñ|PR√ú|QFT|QLB|RDG|REG|REH|REI|RID|RIE|ROD|ROF|ROK|ROL|ROS|ROT|ROW|RSL|R√úD|R√úG|SAB|SAD|SAN|SAW|SBG|SBK|SCZ|SDH|SDL|SDT|SEB|SEE|SEF|SEL|SFB|SFT|SGH|SHA|SHG|SHK|SHL|SIG|SIM|SLE|SLF|SLK|SLN|SLS|SL√ú|SLZ|SM√ú|SOB|SOG|SOK|S√ñM|SON|SPB|SPN|SRB|SRO|STA|STB|STD|STE|STL|SUL|S√úW|SWA|SZB|TBB|TDO|TET|TIR|T√ñL|TUT|UEM|UER|UFF|USI|VAI|VEC|VER|VIB|VIE|VIT|VOH|WAF|WAK|WAN|WAR|WAT|WBS|WDA|WEL|WEN|WER|WES|WHV|WIL|WIS|WIT|WIZ|WLG|WMS|WND|WOB|WOH|WOL|WOR|WOS|WRN|WSF|WST|WSW|WTL|WTM|WUG|W√úM|WUN|WUR|WZL|ZEL|ZIG)[- ]?(([A-Z][- ]?\d{1,4})|([A-Z]{2}[- ]?\d{1,3})))[- ]?(E|H)?$/.test(str);
  },
  'de-LI': function deLI(str) {
    return /^FL[- ]?\d{1,5}[UZ]?$/.test(str);
  },
  'en-IN': function enIN(str) {
    return /^[A-Z]{2}[ -]?[0-9]{1,2}(?:[ -]?[A-Z])(?:[ -]?[A-Z]*)?[ -]?[0-9]{4}$/.test(str);
  },
  'es-AR': function esAR(str) {
    return /^(([A-Z]{2} ?[0-9]{3} ?[A-Z]{2})|([A-Z]{3} ?[0-9]{3}))$/.test(str);
  },
  'fi-FI': function fiFI(str) {
    return /^(?=.{4,7})(([A-Z]{1,3}|[0-9]{1,3})[\s-]?([A-Z]{1,3}|[0-9]{1,5}))$/.test(str);
  },
  'hu-HU': function huHU(str) {
    return /^((((?!AAA)(([A-NPRSTVZWXY]{1})([A-PR-Z]{1})([A-HJ-NPR-Z]))|(A[ABC]I)|A[ABC]O|A[A-W]Q|BPI|BPO|UCO|UDO|XAO)-(?!000)\d{3})|(M\d{6})|((CK|DT|CD|HC|H[ABEFIKLMNPRSTVX]|MA|OT|R[A-Z]) \d{2}-\d{2})|(CD \d{3}-\d{3})|(C-(C|X) \d{4})|(X-(A|B|C) \d{4})|(([EPVZ]-\d{5}))|(S A[A-Z]{2} \d{2})|(SP \d{2}-\d{2}))$/.test(str);
  },
  'pt-BR': function ptBR(str) {
    return /^[A-Z]{3}[ -]?[0-9][A-Z][0-9]{2}|[A-Z]{3}[ -]?[0-9]{4}$/.test(str);
  },
  'pt-PT': function ptPT(str) {
    return /^([A-Z]{2}|[0-9]{2})[ -¬∑]?([A-Z]{2}|[0-9]{2})[ -¬∑]?([A-ZINDX( 	 π–hW           (   8   Ë       ⁄                                  ∏y   
 ˇ`Ìwnf⁄î~Cynf⁄î~Cynf⁄è)aQøh⁄                       
d i s t - t y p e s                ∏y   
 ˇ`Ìwnf⁄î~Cynf⁄î~Cynf⁄è)aQøh⁄                       D I S T - T ~ 1                   ˇ`Ìwnf⁄î~Cynf⁄î~Cynf⁄è)aQøh⁄                       D I S T - T ~ 1                   ∏y   
 ˇ`Ìwnf⁄î~Cynf⁄î~Cynf⁄è)aQøh⁄                       D I S T - T ~ 1                   ∏y   
 mûÖwnf⁄õHíwnf õHíwnf⁄Å˙ëwnf⁄       ﬁ              P A C K A G ~ 1 . J S O                     ∏y   
 mûÖwnf⁄õHíwnf⁄õHíwnf⁄Å˙ëwnf⁄       ﬁ              P A C K A G ~ 1 . J S O                     ∏y   
 ]Òƒwnf⁄4u⁄wnf⁄4u⁄wnf⁄4u⁄wnf⁄–      –              	R E A D M E . m d                   ]Òƒwnf⁄4u⁄wnf⁄4u⁄wnf⁄4u⁄wnf⁄–      –              	R E A D M E . m d                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            INDX( 	 Å[YW           (     Ë       ~ ⁄  ⁄              ∫    x f     _}   
 Aebynf⁄zÇåynf⁄zÇåynf⁄∫êdNøh⁄                       i s S t r e a m i n g P a y l o a d   ∫    h R     _}   
 Aebynf⁄zÇåynf⁄zÇåynf⁄∫êdNøh⁄                       I S S T R E ~ 1                     o a d   ∫    h R     _}   
 Aebynf⁄zÇåynf⁄zÇåynf⁄∫êdNøh⁄                       I S S T R E ~ 1                     _}   
 Aebynf⁄zÇåynf⁄zÇåynf⁄∫êdNøh⁄                       I S S T R E  1                     _}   
 …ö^znf⁄Éo`znf⁄Éo`znf⁄wH`znf⁄(       '               u t i l . j s               ` P     _}   
 …ö^znf⁄Éo`znf⁄Éo`znf⁄wH`znf⁄(       '               u t i l . j s               s       ,â    ` P     _}   
 …ö^znf⁄Éo`znf⁄Éo`znf⁄wH`znf⁄(       '               u t i l . j s               ` P     _}   
 …ö^znf⁄Éo`znf⁄Éo`znf⁄wH`znf⁄(       '               u t i l . j s               s       ,â    ` P     _}   
 …ö^znf⁄Éo`znf⁄Éo`znf⁄wH`znf (       '               u t i l . j s               ` P     _}   
 …ö^znf⁄Éo`znf⁄Éo`znf⁄wH`znf⁄(       '               u t i l . j s               t y p e s . j s       ,â    ` P     _}   
 …ö^znf⁄Éo`znf⁄Éo`znf⁄wH`znf⁄(       '               u t i l . j s               ` P     _}   
 …ö^znf⁄Éo`znf⁄Éo`znf⁄wH`znf⁄(       '               u t i l . j s               ,â    ` P     _}   
 …ö^znf⁄Éo`znf⁄Éo`znf⁄wH`znf⁄(       '               u t i l . j s              ` P     _}   
 …ö^znf⁄Éo`znf⁄Éo`znf⁄wH`znf⁄(       '               u t i l . j s                       t y p e s . j s       ,â    ` P     _}   
 …ö^znf⁄Éo`znf⁄Éo`znf⁄wH`znf⁄(       '               u t i l . j s               ` P     _}   
 …ö^znf⁄Éo`znf⁄Éo`znf⁄wH`znf⁄(       '               u t i l . j s               ` P     _}   
 …ö^znf⁄Éo`znf⁄Éo`znf⁄wH`znf⁄(       '               u t i l . j s               ,â    ` P     _}   
 …ö^znf⁄Éo`znf⁄Éo`znf⁄wH`znf (       '               u t i l . j s               ` P     _}   
 …ö^znf⁄Éo`znf⁄Éo`znf⁄wH`znf⁄(       '               u t i l . j s               t y p e s . j s       ,â    ` P     _}   
 …ö^znf⁄Éo`znf⁄Éo`znf⁄wH`znf⁄(       '               u t i l . j s               ` P     _}   
 …ö^znf⁄Éo`znf⁄Éo`znf⁄wH`znf⁄(       '               u t i l . j s                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           INDX( 	 ›◊YW           (   8   Ë         ⁄                                S}    ™vcynf⁄˘fynf⁄˘fynf⁄˘fynf⁄P      O              t o B a s e 6 4 . j s                    h X     S}    ™vcynf⁄˘fynf⁄˘fynf⁄˘fynf⁄P      O              t o B a s e 6 4 . j s               S}    sì9ynf⁄ü√>ynf⁄ü√>ynf⁄zu>ynf⁄       @              T O B A S E ~ 1 . J S               S}    sì9ynf⁄ü√>ynf⁄ü√>ynf⁄zu>ynf⁄       @              T O B A S E ~ 1 . J S              4 . j s o   
 h X     S}    sì9ynf⁄ü√>ynf⁄ü√>ynf⁄zu>ynf⁄       @              T O B A S E ~ 1 . J S               S}    sì9ynf⁄ü√>ynf⁄ü√>ynf⁄zu>ynf⁄       @              T O B A S E ~ 1 . J S               h X     S}    sì9ynf⁄ü√>ynf⁄ü√>ynf⁄zu>ynf⁄       @              T O B A S E ~ 1 . J S               S}    sì9ynf⁄ü√>ynf⁄ü√>ynf⁄zu>ynf⁄       @              T O B A S E ~ 1 . J S               4 . j s o   
 h X     S}    sì9ynf⁄ü√>ynf⁄ü√>ynf⁄zu>ynf        @              T O B A S E ~ 1 . J S               S}    sì9ynf⁄ü√>ynf⁄ü√>ynf⁄zu>ynf⁄       @              T O B A S E ~ 1 . J S                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 'use strict'

const { createHash } = require('crypto')
const algorithmMatcher = /"alg"\s*:\s*"[HERP]S(256|384)"/m
const edAlgorithmMatcher = /"alg"\s*:\s*"EdDSA"/m
const ed448CurveMatcher = /"crv"\s*:\s*"Ed448"/m

function getAsyncKey(handler, header, callback) {
  const result = handler(header, callback)

  if (result && typeof result.then === 'function') {
    result
      .then(key => {
        // This avoids the callback to be thrown twice if callback throws
        process.nextTick(() => callback(null, key))
      })
      .catch(callback)
  }
}

function ensurePromiseCallback(callback) {
  if (typeof callback === 'function') {
    return [callback]
  }

  let promiseResolve, promiseReject

  const promise = new Promise((resolve, reject) => {
    promiseResolve = resolve
    promiseReject = reject
  })

  return [
    function(err, token) {
      if (err) {
        return promiseReject(err)
      }

      return promiseResolve(token)
    },
    promise
  ]
}

function hashToken(token) {
  const rawHeader = token.split('.', 1)[0]
  const header = Buffer.from(rawHeader, 'base64').toString('utf-8')
  let hasher = null

  /* istanbul ignore next */
  if (header.match(edAlgorithmMatcher) && header.match(ed448CurveMatcher)) {
    hasher = createHash('shake256', { outputLength: 114 })
  } else {
    const mo = header.match(algorithmMatcher)
    hasher = createHash(`sha${mo ? mo[1] : '512'}`)
  }

  return hasher.update(token).digest('hex')
}

module.exports = {
  getAsyncKey,
  ensurePromiseCallback,
  hashToken
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 5: '‡•´',
            6: '‡•¨',
            7: '‡•≠',
            8: '‡•Æ',
            9: '‡•Ø',
            0: '‡•¶',
        },
        numberMap$c = {
            '‡•ß': '1',
            '‡•®': '2',
            '‡•©': '3',
            '‡•™': '4',
            '‡•´': '5',
            '‡•¨': '6',
            '‡•≠': '7',
            '‡•Æ': '8',
            '‡•Ø': '9',
            '‡•¶': '0',
        };

    function relativeTimeMr(number, withoutSuffix, string, isFuture) {
        var output = '';
        if (withoutSuffix) {
            switch (string) {
                case 's':
                    output = '‡§ï‡§æ‡§π‡•Ä ‡§∏‡•á‡§ï‡§Ç‡§¶';
                    break;
                case 'ss':
                    output = '%d ‡§∏‡•á‡§ï‡§Ç‡§¶';
                    break;
                case 'm':
                    output = '‡§è‡§ï ‡§Æ‡§ø‡§®‡§ø‡§ü';
                    break;
                case 'mm':
                    output = '%d ‡§Æ‡§ø‡§®‡§ø‡§ü‡•á';
                    break;
                case 'h':
                    output = '‡§è‡§ï ‡§§‡§æ‡§∏';
                    break;
                case 'hh':
                    output = '%d ‡§§‡§æ‡§∏';
                    break;
                case 'd':
                    output = '‡§è‡§ï ‡§¶‡§ø‡§µ‡§∏';
                    break;
                case 'dd':
                    output = '%d ‡§¶‡§ø‡§µ‡§∏';
                    break;
                case 'M':
                    output = '‡§è‡§ï ‡§Æ‡§π‡§ø‡§®‡§æ';
                    break;
                case 'MM':
                    output = '%d ‡§Æ‡§π‡§ø‡§®‡•á';
                    break;
                case 'y':
                    output = '‡§è‡§ï ‡§µ‡§∞‡•ç‡§∑';
                    break;
                case 'yy':
                    output = '%d ‡§µ‡§∞‡•ç‡§∑‡•á';
                    break;
            }
        } else {
            switch (string) {
                case 's':
                    output = '‡§ï‡§æ‡§π‡•Ä ‡§∏‡•á‡§ï‡§Ç‡§¶‡§æ‡§Ç';
                    break;
                case 'ss':
                    output = '%d ‡§∏‡•á‡§ï‡§Ç‡§¶‡§æ‡§Ç';
                    break;
                case 'm':
                    output = '‡§è‡§ï‡§æ ‡§Æ‡§ø‡§®‡§ø‡§ü‡§æ';
                    break;
                case 'mm':
                    output = '%d ‡§Æ‡§ø‡§®‡§ø‡§ü‡§æ‡§Ç';
                    break;
                case 'h':
                    output = '‡§è‡§ï‡§æ ‡§§‡§æ‡§∏‡§æ';
                    break;
                case 'hh':
                    output = '%d ‡§§‡§æ‡§∏‡§æ‡§Ç';
                    break;
                case 'd':
                    output = '‡§è‡§ï‡§æ ‡§¶‡§ø‡§µ‡§∏‡§æ';
                    break;
                case 'dd':
                    output = '%d ‡§¶‡§ø‡§µ‡§∏‡§æ‡§Ç';
                    break;
                case 'M':
                    output = '‡§è‡§ï‡§æ ‡§Æ‡§π‡§ø‡§®‡•ç‡§Ø‡§æ';
                    break;
                case 'MM':
                    output = '%d ‡§Æ‡§π‡§ø‡§®‡•ç‡§Ø‡§æ‡§Ç';
                    break;
                case 'y':
                    output = '‡§è‡§ï‡§æ ‡§µ‡§∞‡•ç‡§∑‡§æ';
                    break;
                case 'yy':
                    output = '%d ‡§µ‡§∞‡•ç‡§∑‡§æ‡§Ç';
                    break;
            }
        }
        return output.replace(/%d/i, number);
    }

    moment.defineLocale('mr', {
        months: '‡§ú‡§æ‡§®‡•á‡§µ‡§æ‡§∞‡•Ä_‡§´‡•á‡§¨‡•ç‡§∞‡•Å‡§µ‡§æ‡§∞‡•Ä_‡§Æ‡§æ‡§∞‡•ç‡§ö_‡§è‡§™‡•ç‡§∞‡§ø‡§≤_‡§Æ‡•á_‡§ú‡•Ç‡§®_‡§ú‡•Å‡§≤‡•à_‡§ë‡§ó‡§∏‡•ç‡§ü_‡§∏‡§™‡•ç‡§ü‡•á‡§Ç‡§¨‡§∞_‡§ë‡§ï‡•ç‡§ü‡•ã‡§¨‡§∞_‡§®‡•ã‡§µ‡•ç‡§π‡•á‡§Ç‡§¨‡§∞_‡§°‡§ø‡§∏‡•á‡§Ç‡§¨‡§∞'.split(
            '_'
        ),
        monthsShort:
            '‡§ú‡§æ‡§®‡•á._‡§´‡•á‡§¨‡•ç‡§∞‡•Å._‡§Æ‡§æ‡§∞‡•ç‡§ö._‡§è‡§™‡•ç‡§∞‡§ø._‡§Æ‡•á._‡§ú‡•Ç‡§®._‡§ú‡•Å‡§≤‡•à._‡§ë‡§ó._‡§∏‡§™‡•ç‡§ü‡•á‡§Ç._‡§ë‡§ï‡•ç‡§ü‡•ã._‡§®‡•ã‡§µ‡•ç‡§π‡•á‡§Ç._‡§°‡§ø‡§∏‡•á‡§Ç.'.split(
                '_'
            ),
        monthsParseExact: true,
        weekdays: '‡§∞‡§µ‡§ø‡§µ‡§æ‡§∞_‡§∏‡•ã‡§Æ‡§µ‡§æ‡§∞_‡§Æ‡§Ç‡§ó‡§≥‡§µ‡§æ‡§∞_‡§¨‡•Å‡§ß‡§µ‡§æ‡§∞_‡§ó‡•Å‡§∞‡•Ç‡§µ‡§æ‡§∞_‡§∂‡•Å‡§ï‡•ç‡§∞‡§µ‡§æ‡§∞_‡§∂‡§®‡§ø‡§µ‡§æ‡§∞'.split('_'),
        weekdaysShort: '‡§∞‡§µ‡§ø_‡§∏‡•ã‡§Æ_‡§Æ‡§Ç‡§ó‡§≥_‡§¨‡•Å‡§ß_‡§ó‡•Å‡§∞‡•Ç_‡§∂‡•Å‡§ï‡•ç‡§∞_‡§∂‡§®‡§ø'.split('_'),
        weekdaysMin: '‡§∞_‡§∏‡•ã_‡§Æ‡§Ç_‡§¨‡•Å_‡§ó‡•Å_‡§∂‡•Å_‡§∂'.split('_'),
        longDateFormat: {
            LT: 'A h:mm ‡§µ‡§æ‡§ú‡§§‡§æ',
            LTS: 'A h:mm:ss ‡§µ‡§æ‡§ú‡§§‡§æ',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY, A h:mm ‡§µ‡§æ‡§ú‡§§‡§æ',
            LLLL: 'dddd, D MMMM YYYY, A h:mm ‡§µ‡§æ‡§ú‡§§‡§æ',
        },
        calendar: {
            sameDay: '[‡§Ü‡§ú] LT',
            nextDay: '[‡§â‡§¶‡•ç‡§Ø‡§æ] LT',
            nextWeek: 'dddd, LT',
            lastDay: '[‡§ï‡§æ‡§≤] LT',
            lastWeek: '[‡§Æ‡§æ‡§ó‡•Ä‡§≤] dddd, LT',
            sameElse: 'L',
        },
        relativeTime: {
            future: '%s‡§Æ‡§ß‡•ç‡§Ø‡•á',
            past: '%s‡§™‡•Ç‡§∞‡•ç‡§µ‡•Ä',
            s: relativeTimeMr,
            ss: relativeTimeMr,
            m: relativeTimeMr,
            mm: relativeTimeMr,
            h: relativeTimeMr,
            hh: relativeTimeMr,
            d: relativeTimeMr,
            dd: relativeTimeMr,
            M: relativeTimeMr,
            MM: relativeTimeMr,
            y: relativeTimeMr,
            yy: relativeTimeMr,
        },
        preparse: function (string) {
            return string.replace(/[‡•ß‡•®‡•©‡•™‡•´‡•¨‡•≠‡•Æ‡•Ø‡•¶]/g, function (match) {
                return numberMap$c[match];
            });
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap$d[match];
            });
        },
        meridiemParse: /‡§™‡§π‡§æ‡§ü‡•á|‡§∏‡§ï‡§æ‡§≥‡•Ä|‡§¶‡•Å‡§™‡§æ‡§∞‡•Ä|‡§∏‡§æ‡§Ø‡§Ç‡§ï‡§æ‡§≥‡•Ä|‡§∞‡§æ‡§§‡•ç‡§∞‡•Ä/,
        meridiemHour: function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === '‡§™‡§π‡§æ‡§ü‡•á' || meridiem === '‡§∏‡§ï‡§æ‡§≥‡•Ä') {
                return hour;
            } else if (
                meridiem === '‡§¶‡•Å‡§™‡§æ‡§∞‡•Ä' ||
                meridiem === '‡§∏‡§æ‡§Ø‡§Ç‡§ï‡§æ‡§≥‡•Ä' ||
                meridiem === '‡§∞‡§æ‡§§‡•ç‡§∞‡•Ä'
            ) {
                return hour >= 12 ? hour : hour + 12;
            }
        },
        meridiem: function (hour, minute, isLower) {
            if (hour >= 0 && hour < 6) {
                return '‡§™‡§π‡§æ‡§ü‡•á';
            } else if (hour < 12) {
                return '‡§∏‡§ï‡§æ‡§≥‡•Ä';
            } else if (hour < 17) {
                return '‡§¶‡•Å‡§™‡§æ‡§∞‡•Ä';
            } else if (hour < 20) {
                return '‡§∏‡§æ‡§Ø‡§Ç‡§ï‡§æ‡§≥‡•Ä';
            } else {
                return '‡§∞‡§æ‡§§‡•ç‡§∞‡•Ä';
            }
        },
        week: {
            dow: 0, // Sunday is the first day of the week.
            doy: 6, // The week that contains Jan 6th is the first week of the year.
        },
    });

    //! moment.js locale configuration

    moment.defineLocale('ms-my', {
        months: 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split(
            '_'
        ),
        monthsShort: 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_'),
        weekdays: 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
        weekdaysShort: 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
        weekdaysMin: 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
        longDateFormat: {
            LT: 'HH.mm',
            LTS: 'HH.mm.ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY [pukul] HH.mm',
            LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm',
        },
        meridiemParse: /pagi|tengahari|petang|malam/,
        meridiemHour: function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'pagi') {
                return hour;
            } else if (meridiem === 'tengahari') {
                return hour >= 11 ? hour : hour + 12;
            } else if (meridiem === 'petang' || meridiem === 'malam') {
                return hour + 12;
            }
        },
        meridiem: function (hours, minutes, isLower) {
            if (hours < 11) {
                return 'pagi';
            } else if (hours < 15) {
                return 'tengahari';
            } else if (hours < 19) {
                return 'petang';
            } else {
                return 'malam';
            }
        },
        calendar: {
            sameDay: '[Hari ini pukul] LT',
            nextDay: '[Esok pukul] LT',
            nextWeek: 'dddd [pukul] LT',
            lastDay: '[Kelmarin pukul] LT',
            lastWeek: 'dddd [lepas pukul] LT',
            sameElse: 'L',
        },
        relativeTime: {
            future: 'dalam %s',
            past: '%s yang lepas',
            s: 'beberapa saat',
            ss: '%d saat',
            m: 'seminit',
            mm: '%d minit',
            h: 'sejam',
            hh: '%d jam',
            d: 'sehari',
            dd: '%d hari',
            M: 'sebulan',
            MM: '%d bulan',
            y: 'setahun',
            yy: '%d tahun',
        },
        week: {
            dow: 1, // Monday is the first day of the week.
            doy: 7, // The week that contains Jan 7th is the first week of the year.
        },
    });

    //! moment.js locale configuration

    moment.defineLocale('ms', {
        months: 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split(
            '_'
        ),
        monthsShort: 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_'),
        weekdays: 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
        weekdaysShort: 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
        weekdaysMin: 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
        longDateFormat: {
            LT: 'HH.mm',
            LTS: 'HH.mm.ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY [pukul] HH.mm',
            LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm',
        },
        meridiemParse: /pagi|tengahari|petang|malam/,
        meridiemHour: function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'pagi') {
                return hour;
            } else if (meridiem === 'tengahari') {
                return hour >= 11 ? hour : hour + 12;
            } else if (meridiem === 'petang' || meridiem === 'malam') {
                return hour + 12;
            }
        },
        meridiem: function (hours, minutes, isLower) {
            if (hours < 11) {
                return 'pagi';
            } else if (hours < 15) {
                return 'tengahari';
            } else if (hours < 19) {
                return 'petang';
            } else {
                return 'malam';
            }
        },
        calendar: {
            sameDay: '[Hari ini pukul] LT',
            nextDay: '[Esok pukul] LT',
            nextWeek: 'dddd [pukul] LT',
            lastDay: '[Kelmarin pukul] LT',
            lastWeek: 'dddd [lepas pukul] LT',
            sameElse: 'L',
        },
        relativeTime: {
            future: 'dalam %s',
            past: '%s yang lepas',
            s: 'beberapa saat',
            ss: '%d saat',
            m: 'seminit',
            mm: '%d minit',
            h: 'sejam',
            hh: '%d jam',
            d: 'sehari',
            dd: '%d hari',
            M: 'sebulan',
            MM: '%d bulan',
            y: 'setahun',
            yy: '%d tahun',
        },
        week: {
            dow: 1, // Monday is the first day of the week.
            doy: 7, // The week that contains Jan 7th is the first week of the year.
        },
    });

    //! moment.js locale configuration

    moment.defineLocale('mt', {
        months: 'Jannar_Frar_Marzu_April_Mejju_ƒ†unju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Diƒãembru'.split(
            '_'
        ),
        monthsShort: 'Jan_Fra_Mar_Apr_Mej_ƒ†un_Lul_Aww_Set_Ott_Nov_Diƒã'.split('_'),
        weekdays:
            'Il-ƒ¶add_It-Tnejn_It-Tlieta_L-Erbgƒßa_Il-ƒ¶amis_Il-ƒ†imgƒßa_Is-Sibt'.split(
                '_'
            ),
        weekdaysShort: 'ƒ¶ad_Tne_Tli_Erb_ƒ¶am_ƒ†im_Sib'.split('_'),
        weekdaysMin: 'ƒ¶a_Tn_Tl_Er_ƒ¶a_ƒ†i_Si'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm',
        },
        calendar: {
            sameDay: '[Illum fil-]LT',
            nextDay: '[Gƒßada fil-]LT',
            nextWeek: 'dddd [fil-]LT',
            lastDay: '[Il-bieraƒß fil-]LT',
            lastWeek: 'dddd [li gƒßadda] [fil-]LT',
            sameElse: 'L',
        },
        relativeTime: {
            future: 'f‚Äô %s',
            past: '%s ilu',
            s: 'ftit sekondi',
            ss: '%d sekondi',
            m: 'minuta',
            mm: '%d minuti',
            h: 'siegƒßa',
            hh: '%d siegƒßat',
            d: 'ƒ°urnata',
            dd: '%d ƒ°ranet',
            M: 'xahar',
            MM: '%d xhur',
            y: 'sena',
            yy: '%d sni',
        },
        dayOfMonthOrdinalParse: /\d{1,2}¬∫/,
        ordinal: '%d¬∫',
        week: {
            dow: 1, // Monday is the first day of the week.
            doy: 4, // The week that contains Jan 4th is the first week of the year.
        },
    });

    //! moment.js locale configuration

    var symbolMap$e = {
            1: '·ÅÅ',
            2: '·ÅÇ',
            3: '·ÅÉ',
            4: '·ÅÑ',
            5: '·ÅÖ',
            6: '·ÅÜ',
            7: '·Åá',
            8: '·Åà',
            9: '·Åâ',
            0: '·ÅÄ',
        },
        numberMap$d = {
            '·ÅÅ': '1',
            '·ÅÇ': '2',
            '·ÅÉ': '3',
            '·ÅÑ': '4',
            '·ÅÖ': '5',
            '·ÅÜ': '6',
            '·Åá': '7',
            '·Åà': '8',
            '·Åâ': '9',
            '·ÅÄ': '0',
        };

    moment.defineLocale('my', {
        months: '·Äá·Äî·Ä∫·Äî·Äù·Ä´·Äõ·ÄÆ_·Äñ·Ä±·Äñ·Ä±·Ä¨·Ä∫·Äù·Ä´·Äõ·ÄÆ_·Äô·Äê·Ä∫_·Äß·Äï·Äº·ÄÆ_·Äô·Ä±_·Äá·ÄΩ·Äî·Ä∫_·Äá·Ä∞·Äú·Ä≠·ÄØ·ÄÑ·Ä∫_·Äû·Äº·ÄÇ·ÄØ·Äê·Ä∫_·ÄÖ·ÄÄ·Ä∫·Äê·ÄÑ·Ä∫·Äò·Ä¨_·Ä°·Ä±·Ä¨·ÄÄ·Ä∫·Äê·Ä≠·ÄØ·Äò·Ä¨_·Äî·Ä≠·ÄØ·Äù·ÄÑ·Ä∫·Äò·Ä¨_·Äí·ÄÆ·Äá·ÄÑ·Ä∫·Äò·Ä¨'.split(
            '_'
        ),
        monthsShort: '·Äá·Äî·Ä∫_·Äñ·Ä±_·Äô·Äê·Ä∫_·Äï·Äº·ÄÆ_·Äô·Ä±_·Äá·ÄΩ·Äî·Ä∫_·Äú·Ä≠·ÄØ·ÄÑ·Ä∫_·Äû·Äº_·ÄÖ·ÄÄ·Ä∫_·Ä°·Ä±·Ä¨·ÄÄ·Ä∫_·Äî·Ä≠·ÄØ_·Äí·ÄÆ'.split('_'),
        weekdays: '·Äê·Äî·ÄÑ·Ä∫·Äπ·ÄÇ·Äî·ÄΩ·Ä±_·Äê·Äî·ÄÑ·Ä∫·Äπ·Äú·Ä¨_·Ä°·ÄÑ·Ä∫·Äπ·ÄÇ·Ä´_·Äó·ÄØ·Äí·Äπ·Äì·Äü·Ä∞·Ä∏_·ÄÄ·Äº·Ä¨·Äû·Äï·Äê·Ä±·Ä∏_·Äû·Ä±·Ä¨·ÄÄ·Äº·Ä¨_·ÄÖ·Äî·Ä±'.split(
            '_'
        ),
        weekdaysShort: '·Äî·ÄΩ·Ä±_·Äú·Ä¨_·ÄÇ·Ä´_·Äü·Ä∞·Ä∏_·ÄÄ·Äº·Ä¨_·Äû·Ä±·Ä¨_·Äî·Ä±'.split('_'),
        weekdaysMin: '·Äî·ÄΩ·Ä±_·Äú·Ä¨_·ÄÇ·Ä´_·Äü·Ä∞·Ä∏_·ÄÄ·Äº·Ä¨_·Äû·Ä±·Ä¨_·Äî·Ä±'.split('_'),

        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm',
        },
        calendar: {
            sameDay: '[·Äö·Äî·Ä±.] LT [·Äô·Äæ·Ä¨]',
            nextDay: '[·Äô·Äî·ÄÄ·Ä∫·Äñ·Äº·Äî·Ä∫] LT [·Äô·Äæ·Ä¨]',
            nextWeek: 'dddd LT [·Äô·Äæ·Ä¨]',
            lastDay: '[·Äô·Äî·Ä±.·ÄÄ] LT [·Äô·Äæ·Ä¨]',
            lastWeek: '[·Äï·Äº·ÄÆ·Ä∏·ÄÅ·Ä≤·Ä∑·Äû·Ä±·Ä¨] dddd LT [·Äô·Äæ·Ä¨]',
            sameElse: 'L',
        },
        relativeTime: {
            future: '·Äú·Ä¨·Äô·Ää·Ä∫·Ä∑ %s ·Äô·Äæ·Ä¨',
            past: '·Äú·ÄΩ·Äî·Ä∫·ÄÅ·Ä≤·Ä∑·Äû·Ä±·Ä¨ %s ·ÄÄ',
            s: '·ÄÖ·ÄÄ·Äπ·ÄÄ·Äî·Ä∫.·Ä°·Äî·Ää·Ä∫·Ä∏·ÄÑ·Äö·Ä∫',
            ss: '%d ·ÄÖ·ÄÄ·Äπ·ÄÄ·Äî·Ä∑·Ä∫',
            m: '·Äê·ÄÖ·Ä∫·Äô·Ä≠·Äî·ÄÖ·Ä∫',
            mm: '%d ·Äô·Ä≠·Äî·ÄÖ·Ä∫',
            h: '·Äê·ÄÖ·Ä∫·Äî·Ä¨·Äõ·ÄÆ',
            hh: '%d ·Äî·Ä¨·Äõ·ÄÆ',
            d: '·Äê·ÄÖ·Ä∫·Äõ·ÄÄ·Ä∫',
            dd: '%d ·Äõ·ÄÄ·Ä∫',
            M: '·Äê·ÄÖ·Ä∫·Äú',
            MM: '%d ·Äú',
            y: '·Äê·ÄÖ·Ä∫·Äî·Äæ·ÄÖ·Ä∫',
            yy: '%d ·Äî·Äæ·ÄÖ·Ä∫',
        },
        preparse: function (string) {
            return string.replace(/[·ÅÅ·ÅÇ·ÅÉ·ÅÑ·ÅÖ·ÅÜ·Åá·Åà·Åâ·ÅÄ]/g, function (match) {
                return numberMap$d[match];
            });
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap$e[match];
            });
        },
        week: {
            dow: 1, // Monday is the first day of the week.
            doy: 4, // The week that contains Jan 4th is the first week of the year.
        },
    });

    //! moment.js locale configuration

    moment.defineLocale('nb', {
        months: 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split(
            '_'
        ),
        monthsShort:
            'jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.'.split('_'),
        monthsParseExact: true,
        weekdays: 's√∏ndag_mandag_tirsdag_onsdag_torsdag_fredag_l√∏rdag'.split('_'),
        weekdaysShort: 's√∏._ma._ti._on._to._fr._l√∏.'.split('_'),
        weekdaysMin: 's√∏_ma_ti_on_to_fr_l√∏'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY [kl.] HH:mm',
            LLLL: 'dddd D. MMMM YYYY [kl.] HH:mm',
        },
        calendar: {
            sameDay: '[i dag kl.] LT',
            nextDay: '[i morgen kl.] LT',
            nextWeek: 'dddd [kl.] LT',
            lastDay: '[i g√•r kl.] LT',
            lastWeek: '[forrige] dddd [kl.] LT',
            sameElse: 'L',
        },
        relativeTime: {
            future: 'om %s',
            past: '%s siden',
            s: 'noen sekunder',
            ss: '%d sekunder',
            m: 'ett minutt',
            mm: '%d minutter',
            h: '√©n time',
            hh: '%d timer',
            d: '√©n dag',
            dd: '%d dager',
            w: '√©n uke',
            ww: '%d uker',
            M: '√©n m√•ned',
            MM: '%d m√•neder',
            y: 'ett √•r',
            yy: '%d √•r',
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
            dow: 1, // Monday is the first day of the week.
            doy: 4, // The week that contains Jan 4th is the first week of the year.
        },
    });

    //! moment.js locale configuration

    var symbolMap$f = {
            1: '‡•ß',
            2: '‡•®',
            3: '‡•©',
            4: '‡•™',
            5: '‡•´',
            6: '‡•¨',
            7: '‡•≠',
            8: '‡•Æ',
            9: '‡•Ø',
            0: '‡•¶',
        },
        numberMap$e = {
            '‡•ß': '1',
            '‡•®': '2',
            '‡•©': '3',
            '‡•™': '4',
            '‡•´': '5',
            '‡•¨': '6',
            '‡•≠': '7',
            '‡•Æ': '8',
            '‡•Ø': '9',
            '‡•¶': '0',
        };

    moment.defineLocale('ne', {
        months: '‡§ú‡§®‡§µ‡§∞‡•Ä_‡§´‡•á‡§¨‡•ç‡§∞‡•Å‡§µ‡§∞‡•Ä_‡§Æ‡§æ‡§∞‡•ç‡§ö_‡§Ö‡§™‡•ç‡§∞‡§ø‡§≤_‡§Æ‡§à_‡§ú‡•Å‡§®_‡§ú‡•Å‡§≤‡§æ‡§à_‡§Ö‡§ó‡§∑‡•ç‡§ü_‡§∏‡•á‡§™‡•ç‡§ü‡•á‡§Æ‡•ç‡§¨‡§∞_‡§Ö‡§ï‡•ç‡§ü‡•ã‡§¨‡§∞_‡§®‡•ã‡§≠‡•á‡§Æ‡•ç‡§¨‡§∞_‡§°‡§ø‡§∏‡•á‡§Æ‡•ç‡§¨‡§∞'.split(
            '_'
        ),
        monthsShort:
            '‡§ú‡§®._‡§´‡•á‡§¨‡•ç‡§∞‡•Å._‡§Æ‡§æ‡§∞‡•ç‡§ö_‡§Ö‡§™‡•ç‡§∞‡§ø._‡§Æ‡§à_‡§ú‡•Å‡§®_‡§ú‡•Å‡§≤‡§æ‡§à._‡§Ö‡§ó._‡§∏‡•á‡§™‡•ç‡§ü._‡§Ö‡§ï‡•ç‡§ü‡•ã._‡§®‡•ã‡§≠‡•á._‡§°‡§ø‡§∏‡•á.'.split(
                '_'
            ),
        monthsParseExact: true,
        weekdays: '‡§Ü‡§á‡§§‡§¨‡§æ‡§∞_‡§∏‡•ã‡§Æ‡§¨‡§æ‡§∞_‡§Æ‡§ô‡•ç‡§ó‡§≤‡§¨‡§æ‡§∞_‡§¨‡•Å‡§ß‡§¨‡§æ‡§∞_‡§¨‡§ø‡§π‡§ø‡§¨‡§æ‡§∞_‡§∂‡•Å‡§ï‡•ç‡§∞‡§¨‡§æ‡§∞_‡§∂‡§®‡§ø‡§¨‡§æ‡§∞'.split(
            '_'
        ),
        weekdaysShort: '‡§Ü‡§á‡§§._‡§∏‡•ã‡§Æ._‡§Æ‡§ô‡•ç‡§ó‡§≤._‡§¨‡•Å‡§ß._‡§¨‡§ø‡§π‡§ø._‡§∂‡•Å‡§ï‡•ç‡§∞._‡§∂‡§®‡§ø.'.split('_'),
        weekdaysMin: '‡§Ü._‡§∏‡•ã._‡§Æ‡§Ç._‡§¨‡•Å._‡§¨‡§ø._‡§∂‡•Å._‡§∂.'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: 'A‡§ï‡•ã h:mm ‡§¨‡§ú‡•á',
            LTS: 'A‡§ï‡•ã h:mm:ss ‡§¨‡§ú‡•á',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY, A‡§ï‡•ã h:mm ‡§¨‡§ú‡•á',
            LLLL: 'dddd, D MMMM YYYY, A‡§ï‡•ã h:mm ‡§¨‡§ú‡•á',
        },
        preparse: function (string) {
            return string.replace(/[‡•ß‡•®‡•©‡•™‡•´‡•¨‡•≠‡•Æ‡•Ø‡•¶]/g, function (match) {
                return numberMap$e[match];
            });
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap$f[match];
            });
        },
        meridiemParse: /‡§∞‡§æ‡§§‡§ø|‡§¨‡§ø‡§π‡§æ‡§®|‡§¶‡§ø‡§â‡§Å‡§∏‡•ã|‡§∏‡§æ‡§Å‡§ù/,
        meridiemHour: function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === '‡§∞‡§æ‡§§‡§ø') {
                return hour < 4 ? hour : hour + 12;
            } else if (meridiem === '‡§¨‡§ø‡§π‡§æ‡§®') {
                return hour;
            } else if (meridiem === '‡§¶‡§ø‡§â‡§Å‡§∏‡•ã') {
                return hour >= 10 ? hour : hour + 12;
            } else if (meridiem === '‡§∏‡§æ‡§Å‡§ù') {
                return hour + 12;
            }
        },
        meridiem: function (hour, minute, isLower) {
            if (hour < 3) {
                return '‡§∞‡§æ‡§§‡§ø';
            } else if (hour < 12) {
                return '‡§¨‡§ø‡§π‡§æ‡§®';
            } else if (hour < 16) {
                return '‡§¶‡§ø‡§â‡§Å‡§∏‡•ã';
            } else if (hour < 20) {
                return '‡§∏‡§æ‡§Å‡§ù';
            } else {
                return '‡§∞‡§æ‡§§‡§ø';
            }
        },
        calendar: {
            sameDay: '[‡§Ü‡§ú] LT',
            nextDay: '[‡§≠‡•ã‡§≤‡§ø] LT',
            nextWeek: '[‡§Ü‡§â‡§Å‡§¶‡•ã] dddd[,] LT',
            lastDay: '[‡§π‡§ø‡§ú‡•ã] LT',
            lastWeek: '[‡§ó‡§è‡§ï‡•ã] dddd[,] LT',
            sameElse: 'L',
        },
        relativeTime: {
            future: '%s‡§Æ‡§æ',
            past: '%s ‡§Ö‡§ó‡§æ‡§°‡§ø',
            s: '‡§ï‡•á‡§π‡•Ä ‡§ï‡•ç‡§∑‡§£',
            ss: '%d ‡§∏‡•á‡§ï‡•á‡§£‡•ç‡§°',
            m: '‡§è‡§ï ‡§Æ‡§ø‡§®‡•á‡§ü',
            mm: '%d ‡§Æ‡§ø‡§®‡•á‡§ü',
            h: '‡§è‡§ï ‡§ò‡§£‡•ç‡§ü‡§æ',
            hh: '%d ‡§ò‡§£‡•ç‡§ü‡§æ',
            d: '‡§è‡§ï ‡§¶‡§ø‡§®',
            dd: '%d ‡§¶‡§ø‡§®',
            M: '‡§è‡§ï ‡§Æ‡§π‡§ø‡§®‡§æ',
            MM: '%d ‡§Æ‡§π‡§ø‡§®‡§æ',
            y: '‡§è‡§ï ‡§¨‡§∞‡•ç‡§∑',
            yy: '%d ‡§¨‡§∞‡•ç‡§∑',
        },
        week: {
            dow: 0, // Sunday is the first day of the week.
            doy: 6, // The week that contains Jan 6th is the first week of the year.
        },
    });

    //! moment.js locale configuration

    var monthsShortWithDots$1 =
            'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_'),
        monthsShortWithoutDots$1 =
            'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_'),
        monthsParse$8 = [
            /^jan/i,
            /^feb/i,
            /^(maart|mrt\.?)$/i,
            /^apr/i,
            /^mei$/i,
            /^jun[i.]?$/i,
            /^jul[i.]?$/i,
            /^aug/i,
            /^sep/i,
            /^okt/i,
            /^nov/i,
            /^dec/i,
        ],
        monthsRegex$7 =
            /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;

    moment.defineLocale('nl-be', {
        months: 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split(
            '_'
        ),
        monthsShort: function (m, format) {
            if (!m) {
                return monthsShortWithDots$1;
            } else if (/-MMM-/.test(format)) {
                return monthsShortWithoutDots$1[m.month()];
            } else {
                return monthsShortWithDots$1[m.month()];
            }
        },

        monthsRegex: monthsRegex$7,
        monthsShortRegex: monthsRegex$7,
        monthsStrictRegex:
            /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
        monthsShortStrictRegex:
    The MIT License (MIT)

Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   ],
        "members": {
          "featureTransformationArn": {}
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "featureTransformation": {
            "type": "structure",
            "members": {
              "name": {},
              "featureTransformationArn": {},
              "defaultParameters": {
                "type": "map",
                "key": {},
                "value": {}
              },
              "creationDateTime": {
                "type": "timestamp"
              },
              "lastUpdatedDateTime": {
                "type": "timestamp"
              },
              "status": {}
            }
          }
        }
      },
      "idempotent": true
    },
    "DescribeFilter": {
      "input": {
        "type": "structure",
        "required": [
          "filterArn"
        ],
        "members": {
          "filterArn": {}
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "filter": {
            "type": "structure",
            "members": {
              "name": {},
              "filterArn": {},
              "creationDateTime": {
                "type": "timestamp"
              },
              "lastUpdatedDateTime": {
                "type": "timestamp"
              },
              "datasetGroupArn": {},
              "failureReason": {},
              "filterExpression": {
                "shape": "S15"
              },
              "status": {}
            }
          }
        }
      },
      "idempotent": true
    },
    "DescribeRecipe": {
      "input": {
        "type": "structure",
        "required": [
          "recipeArn"
        ],
        "members": {
          "recipeArn": {}
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "recipe": {
            "type": "structure",
            "members": {
              "name": {},
              "recipeArn": {},
              "algorithmArn": {},
              "featureTransformationArn": {},
              "status": {},
              "description": {},
              "creationDateTime": {
                "type": "timestamp"
              },
              "recipeType": {},
              "lastUpdatedDateTime": {
                "type": "timestamp"
              }
            }
          }
        }
      },
      "idempotent": true
    },
    "DescribeRecommender": {
      "input": {
        "type": "structure",
        "required": [
          "recommenderArn"
        ],
        "members": {
          "recommenderArn": {}
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "recommender": {
            "type": "structure",
            "members": {
              "recommenderArn": {},
              "datasetGroupArn": {},
              "name": {},
              "recipeArn": {},
              "recommenderConfig": {
                "shape": "S18"
              },
              "creationDateTime": {
                "type": "timestamp"
              },
              "lastUpdatedDateTime": {
                "type": "timestamp"
              },
              "status": {},
              "failureReason": {},
              "latestRecommenderUpdate": {
                "type": "structure",
                "members": {
                  "recommenderConfig": {
                    "shape": "S18"
                  },
                  "creationDateTime": {
                    "type": "timestamp"
                  },
                  "lastUpdatedDateTime": {
                    "type": "timestamp"
                  },
                  "status": {},
                  "failureReason": {}
                }
              }
            }
          }
        }
      },
      "idempotent": true
    },
    "DescribeSchema": {
      "input": {
        "type": "structure",
        "required": [
          "schemaArn"
        ],
        "members": {
          "schemaArn": {}
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "schema": {
            "type": "structure",
            "members": {
              "name": {},
              "schemaArn": {},
              "schema": {},
              "creationDateTime": {
                "type": "timestamp"
              },
              "lastUpdatedDateTime": {
                "type": "timestamp"
              },
              "domain": {}
            }
          }
        }
      },
      "idempotent": true
    },
    "DescribeSolution": {
      "input": {
        "type": "structure",
        "required": [
          "solutionArn"
        ],
        "members": {
          "solutionArn": {}
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "solution": {
            "type": "structure",
            "members": {
              "name": {},
              "solutionArn": {},
              "performHPO": {
                "type": "boolean"
              },
              "performAutoML": {
                "type": "boolean"
              },
              "recipeArn": {},
              "datasetGroupArn": {},
              "eventType": {},
              "solutionConfig": {
                "shape": "S1h"
              },
              "autoMLResult": {
                "type": "structure",
                "members": {
                  "bestRecipeArn": {}
                }
              },
              "status": {},
              "creationDateTime": {
                "type": "timestamp"
              },
              "lastUpdatedDateTime": {
                "type": "timestamp"
              },
              "latestSolutionVersion": {
                "shape": "S4h"
              }
            }
          }
        }
      },
      "idempotent": true
    },
    "DescribeSolutionVersion": {
      "input": {
        "type": "structure",
        "required": [
          "solutionVersionArn"
        ],
        "members": {
          "solutionVersionArn": {}
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "solutionVersion": {
            "type": "structure",
            "members": {
              "solutionVersionArn": {},
              "solutionArn": {},
              "performHPO": {
                "type": "boolean"
              },
              "performAutoML": {
                "type": "boolean"
              },
              "recipeArn": {},
              "eventType": {},
              "datasetGroupArn": {},
              "solutionConfig": {
                "shape": "S1h"
              },
              "trainingHours": {
                "type": "double"
              },
              "trainingMode": {},
              "tunedHPOParams": {
                "type": "structure",
                "members": {
                  "algorithmHyperParameters": {
                    "shape": "Sc"
                  }
                }
              },
              "status": {},
              "failureReason": {},
              "creationDateTime": {
                "type": "timestamp"
              },
              "lastUpdatedDateTime": {
                "type": "timestamp"
              }
            }
          }
        }
      },
      "idempotent": true
    },
    "GetSolutionMetrics": {
      "input": {
        "type": "structure",
        "required": [
          "solutionVersionArn"
        ],
        "members": {
          "solutionVersionArn": {}
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "solutionVersionArn": {},
          "metrics": {
            "type": "map",
            "key": {},
            "value": {
              "type": "double"
            }
          }
        }
      }
    },
    "ListBatchInferenceJobs": {
      "input": {
        "type": "structure",
        "members": {
          "solutionVersionArn": {},
          "nextToken": {},
          "maxResults": {
            "type": "integer"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "batchInferenceJobs": {
            "type": "list",
            "member": {
              "type": "structure",
              "members": {
                "batchInferenceJobArn": {},
                "jobName": {},
                "status": {},
                "creationDateTime": {
                  "type": "timestamp"
                },
                "lastUpdatedDateTime": {
                  "type": "timestamp"
                },
                "failureReason": {},
                "solutionVersionArn": {}
              }
            }
          },
          "nextToken": {}
        }
      },
      "idempotent": true
    },
    "ListBatchSegmentJobs": {
      "input": {
        "type": "structure",
        "members": {
          "solutionVersionArn": {},
          "nextToken": {},
          "maxResults": {
            "type": "integer"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "batchSegmentJobs": {
            "type": "list",
            "member": {
              "type": "structure",
              "members": {
                "batchSegmentJobArn": {},
                "jobName": {},
                "status": {},
                "creationDateTime": {
                  "type": "timestamp"
                },
                "lastUpdatedDateTime": {
                  "type": "timestamp"
                },
                "failureReason": {},
                "solutionVersionArn": {}
              }
            }
          },
          "nextToken": {}
        }
      },
      "idempotent": true
    },
    "ListCampaigns": {
      "input": {
        "type": "structure",
        "members": {
          "solutionArn": {},
          "nextToken": {},
          "maxResults": {
            "type": "integer"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "campaigns": {
            "type": "list",
            "member": {
              "type": "structure",
              "members": {
                "name": {},
                "campaignArn": {},
                "status": {},
                "creationDateTime": {
                  "type": "timestamp"
                },
                "lastUpdatedDateTime": {
                  "type": "timestamp"
                },
                "failureReason": {}
              }
            }
          },
          "nextToken": {}
        }
      },
      "idempotent": true
    },
    "ListDatasetExportJobs": {
      "input": {
        "type": "structure",
        "members": {
          "datasetArn": {},
          "nextToken": {},
          "maxResults": {
            "type": "integer"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "datasetExportJobs": {
            "type": "list",
            "member": {
              "type": "structure",
              "members": {
                "datasetExportJobArn": {},
                "jobName": {},
                "status": {},
                "creationDateTime": {
                  "type": "timestamp"
                },
                "lastUpdatedDateTime": {
                  "type": "timestamp"
                },
                "failureReason": {}
              }
            }
          },
          "nextToken": {}
        }
      },
      "idempotent": true
    },
    "ListDatasetGroups": {
      "input": {
        "type": "structure",
        "members": {
          "nextToken": {},
          "maxResults": {
            "type": "integer"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "datasetGroups": {
            "type": "list",
            "member": {
              "type": "structure",
              "members": {
                "name": {},
                "datasetGroupArn": {},
                "status": {},
                "creationDateTime": {
                  "type": "timestamp"
                },
                "lastUpdatedDateTime": {
                  "type": "timestamp"
                },
                "failureReason": {},
                "domain": {}
              }
            }
          },
          "nextToken": {}
        }
      },
      "idempotent": true
    },
    "ListDatasetImportJobs": {
      "input": {
        "type": "structure",
        "members": {
          "datasetArn": {},
          "nextToken": {},
          "maxResults": {
            "type": "integer"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "datasetImportJobs": {
            "type": "list",
            "member": {
              "type": "structure",
              "members": {
                "datasetImportJobArn": {},
                "jobName": {},
                "status": {},
                "creationDateTime": {
                  "type": "timestamp"
                },
                "lastUpdatedDateTime": {
                  "type": "timestamp"
                },
                "failureReason": {}
              }
            }
          },
          "nextToken": {}
        }
      },
      "idempotent": true
    },
    "ListDatasets": {
      "input": {
        "type": "structure",
        "members": {
          "datasetGroupArn": {},
          "nextToken": {},
          "maxResults": {
            "type": "integer"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "datasets": {
            "type": "list",
            "member": {
              "type": "structure",
              "members": {
                "name": {},
                "datasetArn": {},
                "datasetType": {},
                "status": {},
                "creationDateTime": {
                  "type": "timestamp"
                },
                "lastUpdatedDateTime": {
                  "type": "timestamp"
                }
              }
            }
          },
          "nextToken": {}
        }
      },
      "idempotent": true
    },
    "ListEventTrackers": {
      "input": {
        "type": "structure",
        "members": {
          "datasetGroupArn": {},
          "nextToken": {},
          "maxResults": {
            "type": "integer"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "eventTrackers": {
            "type": "list",
            "member": {
              "type": "structure",
              "members": {
                "name": {},
                "eventTrackerArn": {},
                "status": {},
                "creationDateTime": {
                  "type": "timestamp"
                },
                "lastUpdatedDateTime": {
                  "type": "timestamp"
                }
              }
            }
          },
          "nextToken": {}
        }
      },
      "idempotent": true
    },
    "ListFilters": {
      "input": {
        "type": "structure",
        "members": {
          "datasetGroupArn": {},
          "nextToken": {},
          "maxResults": {
            "type": "integer"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "Filters": {
            "type": "list",
            "member": {
              "type": "structure",
              "members": {
                "name": {},
                "filterArn": {},
                "creationDateTime": {
                  "type": "timestamp"
                },
                "lastUpdatedDateTime": {
                  "type": "timestamp"
                },
                "datasetGroupArn": {},
                "failureReason": {},
                "status": {}
              }
            }
          },
          "nextToken": {}
        }
      },
      "idempotent": true
    },
    "ListRecipes": {
      "input": {
        "type": "structure",
        "members": {
          "recipeProvider": {},
          "nextToken": {},
          "maxResults": {
            "type": "integer"
          },
          "domain": {}
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "recipes": {
            "type": "list",
            "member": {
              "type": "structure",
              "members": {
                "name": {},
                "recipeArn": {},
                "status": {},
                "creationDateTime": {
                  "type": "timestamp"
                },
                "lastUpdatedDateTime": {
                  "type": "timestamp"
                },
                "domain": {}
              }
            }
          },
          "nextToken": {}
        }
      },
      "idempotent": true
    },
    "ListRecommenders": {
      "input": {
        "type": "structure",
        "members": {
          "datasetGroupArn": {},
          "nextToken": {},
          "maxResults": {
            "type": "integer"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "recommenders": {
            "type": "list",
            "member": {
              "type": "structure",
              "members": {
                "name": {},
                "recommenderArn": {},
                "datasetGroupArn": {},
                "recipeArn": {},
                "recommenderConfig": {
                  "shape": "S18"
                },
                "status": {},
                "creationDateTime": {
                  "type": "timestamp"
                },
                "lastUpdatedDateTime": {
                  "type": "timestamp"
                }
              }
            }
          },
          "nextToken": {}
        }
      },
      "idempotent": true
    },
    "ListSchemas": {
      "input": {
        "type": "structure",
        "members": {
          "nextToken": {},
          "maxResults": {
            "type": "integer"
          }
        }
      },
      "output": {
        "