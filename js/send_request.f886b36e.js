nizations;
    /**
     * A structure that defines which attributes in the SAML assertion are to be used to define information about the users authenticated by that IdP to use the workspace.
     */
    assertionAttributes?: AssertionAttributes;
    /**
     * A structure containing the identity provider (IdP) metadata used to integrate the identity provider with this workspace.
     */
    idpMetadata: IdpMetadata;
    /**
     * How long a sign-on session by a SAML user is valid, before the user has to sign on again.
     */
    loginValidityDuration?: LoginValidityDuration;
    /**
     * A structure containing arrays that map group names in the SAML assertion to the Grafana Admin and Editor roles in the workspace.
     */
    roleValues?: RoleValues;
  }
  export type SamlConfigurationStatus = "CONFIGURED"|"NOT_CONFIGURED"|string;
  export type SecurityGroupId = string;
  export type SecurityGroupIds = SecurityGroupId[];
  export type SsoId = string;
  export type StackSetName = string;
  export type String = string;
  export type SubnetId = string;
  export type SubnetIds = SubnetId[];
  export type TagKey = string;
  export type TagKeys = TagKey[];
  export type TagMap = {[key: string]: TagValue};
  export interface TagResourceRequest {
    /**
     * The ARN of the resource the tag is associated with.
     */
    resourceArn: String;
    /**
     * The list of tag keys and values to associate with the resource. You can associate tag keys only, tags (key and values) only or a combination of tag keys and tags.
     */
    tags: TagMap;
  }
  export interface TagResourceResponse {
  }
  export type TagValue = string;
  export type Timestamp = Date;
  export interface UntagResourceRequest {
    /**
     * The ARN of the resource the tag association is removed from. 
     */
    resourceArn: String;
    /**
     * The key values of the tag to be removed from the resource.
     */
    tagKeys: TagKeys;
  }
  export interface UntagResourceResponse {
  }
  export type UpdateAction = "ADD"|"REVOKE"|string;
  export interface UpdateError {
    /**
     * Specifies which permission update caused the error.
     */
    causedBy: UpdateInstruction;
    /**
     * The error code.
     */
    code: UpdateErrorCodeInteger;
    /**
     * The message for this error.
     */
    message: String;
  }
  export type UpdateErrorCodeInteger = number;
  export type UpdateErrorList = UpdateError[];
  export interface UpdateInstruction {
    /**
     * Specifies whether this update is to add or revoke role permissions.
     */
    action: UpdateAction;
    /**
     * The role to add or revoke for the user or the group specified in users.
     */
    role: Role;
    /**
     * A structure that specifies the user or group to add or revoke the role for.
     */
    users: UserList;
  }
  export type UpdateInstructionBatch = UpdateInstruction[];
  export interface UpdatePermissionsRequest {
    /**
     * An array of structures that contain the permission updates to make.
     */
    updateInstructionBatch: UpdateInstructionBatch;
    /**
     * The ID of the workspace to update.
     */
    workspaceId: WorkspaceId;
  }
  export interface UpdatePermissionsResponse {
    /**
     * An array of structures that contain the errors from the operation, if any.
     */
    errors: UpdateErrorList;
  }
  export interface UpdateWorkspaceAuthenticationRequest {
    /**
     * Specifies whether this workspace uses SAML 2.0, IAM Identity Center (successor to Single Sign-On), or both to authenticate users for using the Grafana console within a workspace. For more information, see User authentication in Amazon Managed Grafana.
     */
    authenticationProviders: AuthenticationProviders;
    /**
     * If the workspace uses SAML, use this structure to map SAML assertion attributes to workspace user information and define which groups in the assertion attribute are to have the Admin and Editor roles in the workspace.
     */
    samlConfiguration?: SamlConfiguration;
    /**
     * The ID of the workspace to update the authentication for.
     */
    workspaceId: WorkspaceId;
  }
  export interface UpdateWorkspaceAuthenticationResponse {
    /**
     * A structure that describes the user authentication for this workspace after the update is made.
     */
    authentication: AuthenticationDescription;
  }
  export interface UpdateWorkspaceConfigurationRequest {
    /**
     * The new configuration string for the workspace. For more information about the format and configuration options available, see Working in your Grafana workspace.
     */
    configuration: OverridableConfigurationJson;
    /**
     * The ID of the workspace to update.
     */
    workspaceId: WorkspaceId;
  }
  export interface UpdateWorkspaceConfigurationResponse {
  }
  export interface UpdateWorkspaceRequest {
    /**
     * Specifies whether the workspace can access Amazon Web Services resources in this Amazon Web Services account only, or whether it can also access Amazon Web Services resources in other accounts in the same organization. If you specify ORGANIZATION, you must specify which organizational units the workspace can access in the workspaceOrganizationalUnits parameter.
     */
    accountAccessType?: AccountAccessType;
    /**
     * The configuration settings for network access to your workspace. When this is configured, only listed IP addresses and VPC endpoints will be able to access your workspace. Standard Grafana authentication and authorization will still be required. If this is not configured, or is removed, then all IP addresses and VPC endpoints will be allowed. Standard Grafana authentication and authorization will still be required.
     */
    networkAccessControl?: NetworkAccessConfiguration;
    /**
     * The name of an IAM role that already exists to use to access resources through Organizations. This can only be used with a workspace that has the permissionType set to CUSTOMER_MANAGED.
     */
    organizationRoleName?: OrganizationRoleName;
    /**
     * Use this parameter if you want to change a workspace from SERVICE_MANAGED to CUSTOMER_MANAGED. This allows you to manage the permissions that the workspace uses to access datasources and notification channels. If the workspace is in a member Amazon Web Services account of an organization, and that account is not a delegated administrator account, and you want the workspace to access data sources in other Amazon Web Services accounts in the organization, you must choose CUSTOMER_MANAGED. If you specify this as CUSTOMER_MANAGED, you must also specify a workspaceRoleArn that the workspace will use for accessing Amazon Web Services resources. For more information on the role and permissions needed, see Amazon Managed Grafana permissions and policies for Amazon Web Services data sources and notification channels   Do not use this to convert a CUSTOMER_MANAGED workspace to SERVICE_MANAGED. Do not include this parameter if you want to leave the workspace as SERVICE_MANAGED. You can convert a CUSTOMER_MANAGED workspace to SERVICE_MANAGED using the Amazon Managed Grafana console. For more information, see Managing permissions for data sources and notification channels. 
     */
    permissionType?: PermissionType;
    /**
     * Whether to remove the network access configuration from the workspace. Setting this to true and providing a networkAccessControl to set will return an error. If you remove this configuration by setting this to true, then all IP addresses and VPC endpoints will be allowed. Standard Grafana authentication and authorization will still be required.
     */
    removeNetworkAccessConfiguration?: Boolean;
    /**
     * Whether to remove the VPC configuration from the workspace. Setting this to true and providing a vpcConfiguration to set will return an error.
     */
    removeVpcConfiguration?: Boolean;
    /**
     * The name of the CloudFormation stack set to use to generate IAM roles to be used for this workspace.
     */
    stackSetName?: StackSetName;
    /**
     * The configuration settings for an Amazon VPC that contains data sources for your Grafana workspace to connect to.
     */
    vpcConfiguration?: VpcConfiguration;
    /**
     * This parameter is for internal use only, and should not be used.
     */
    workspaceDataSources?: DataSourceTypesList;
    /**
     * A description for the workspace. This is used only to help you identify this workspace.
     */
    workspaceDescription?: Description;
    /**
     * The ID of the workspace to update.
     */
    workspaceId: WorkspaceId;
    /**
     * A new name for the workspace to update.
     */
    workspaceName?: WorkspaceName;
    /**
     * Specify the Amazon Web Services notification channels that you plan to use in this workspace. Specifying these data sources here enables Amazon Managed Grafana to create IAM roles and permissions that allow Amazon Managed Grafana to use these channels.
     */
    workspaceNotificationDestinations?: NotificationDestinationsList;
    /**
     * Specifies the organizational units that this workspace is allowed to use data sources from, if this workspace is in an account that is part of an organization.
     */
    workspaceOrganizationalUnits?: OrganizationalUnitList;
    /**
     * Specifies an IAM role that grants permissions to Amazon Web Services resources that the workspace accesses, such as data sources and notification channels. If this workspace has permissionType CUSTOMER_MANAGED, then this role is required.
     */
    workspaceRoleArn?: IamRoleArn;
  }
  export interface UpdateWorkspaceResponse {
    /**
     * A structure containing data about the workspace that was created.
     */
    workspace: WorkspaceDescription;
  }
  export interface User {
    /**
     * The ID of the user or group. Pattern: ^([0-9a-fA-F]{10}-|)[A-Fa-f0-9]{8}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{12}$ 
     */
    id: SsoId;
    /**
     * Specifies whether this is a single user or a group.
     */
    type: UserType;
  }
  export type UserList = User[];
  export type UserType = "SSO_USER"|"SSO_GROUP"|string;
  export interface VpcConfiguration {
    /**
     * The list of Amazon EC2 security group IDs attached to the Amazon VPC for your Grafana workspace to connect. Duplicates not allowed.
     */
    securityGroupIds: SecurityGroupIds;
    /**
     * The list of Amazon EC2 subnet IDs created in the Amazon VPC for your Grafana workspace to connect. Duplicates not allowed.
     */
    subnetIds: SubnetIds;
  }
  export type VpceId = string;
  export type VpceIds = VpceId[];
  export interface WorkspaceDescription {
    /**
     * Specifies whether the workspace can access Amazon Web Services resources in this Amazon Web Services account only, or whether it can also access Amazon Web Services resources in other accounts in the same organization. If this is ORGANIZATION, the workspaceOrganizationalUnits parameter specifies which organizational units the workspace can access.
     */
    accountAccessType?: AccountAccessType;
    /**
     * A structure that describes whether the workspace uses SAML, IAM Identity Center, or both methods for user authentication.
     */
    authentication: AuthenticationSummary;
    /**
     * The date that the workspace was created.
     */
    created: Timestamp;
    /**
     * Specifies the Amazon Web Services data sources that have been configured to have IAM roles and permissions created to allow Amazon Managed Grafana to read data from these sources. This list is only used when the workspace was created through the Amazon Web Services console, and the permissionType is SERVICE_MANAGED.
     */
    dataSources: DataSourceTypesList;
    /**
     * The user-defined description of the workspace.
     */
    description?: Description;
    /**
     * The URL that users can use to access the Grafana console in the workspace.
     */
    endpoint: Endpoint;
    /**
     * Specifies whether this workspace has already fully used its free trial for Grafana Enterprise.
     */
    freeTrialConsumed?: Boolean;
    /**
     * If this workspace is currently in the free trial period for Grafana Enterprise, this value specifies when that free trial ends.
     */
    freeTrialExpiration?: Timestamp;
    /**
     * The version of Grafana supported in this workspace.
     */
    grafanaVersion: GrafanaVersion;
    /**
     * The unique ID of this workspace.
     */
    id: WorkspaceId;
    /**
     * If this workspace has a full Grafana Enterprise license, this specifies when the license ends and will need to be renewed.
     */
    licenseExpiration?: Timestamp;
    /**
     * Specifies whether this workspace has a full Grafana Enterprise license or a free trial license.
     */
    licenseType?: LicenseType;
    /**
     * The most recent date that the workspace was modified.
     */
    modified: Timestamp;
    /**
     * The name of the workspace.
     */
    name?: WorkspaceName;
    /**
     * The configuration settings for network access to your workspace.
     */
    networkAccessControl?: NetworkAccessConfiguration;
    /**
     * The Amazon Web Services notification channels that Amazon Managed Grafana can automatically create IAM roles and permissions for, to allow Amazon Managed Grafana to use these channels.
     */
    notificationDestinations?: NotificationDestinationsList;
    /**
     * The name of the IAM role that is used to access resources through Organizations.
     */
    organizationRoleName?: OrganizationRoleName;
    /**
     * Specifies the organizational units that this workspace is allowed to use data sources from, if this workspace is in an account that is part of an organization.
     */
    organizationalUnits?: OrganizationalUnitList;
    /**
     * If this is SERVICE_MANAGED, and the workplace was created through the Amazon Managed Grafana console, then Amazon Managed Grafana automatically creates the IAM roles and provisions the permissions that the workspace needs to use Amazon Web Services data sources and notification channels. If this is CUSTOMER_MANAGED, you must manage those roles and permissions yourself. If you are working with a workspace in a member account of an organization and that account is not a delegated administrator account, and you want the workspace to access data sources in other Amazon Web Services accounts in the organization, this parameter must be set to CUSTOMER_MANAGED. For more information about converting between customer and service managed, see Managing permissions for data sources and notification channels. For more information about the roles and permissions that must be managed for customer managed workspaces, see Amazon Managed Grafana permissions and policies for Amazon Web Services data sources and notification channels 
     */
    permissionType?: PermissionType;
    /**
     * The name of the CloudFormation stack set that is used to generate IAM roles to be used for this workspace.
     */
    stackSetName?: StackSetName;
    /**
     * The current status of the workspace.
     */
    status: WorkspaceStatus;
    /**
     * The list of tags associated with the workspace.
     */
    tags?: TagMap;
    /**
     * The configuration for connecting to data sources in a private VPC (Amazon Virtual Private Cloud).
     */
    vpcConfiguration?: VpcConfiguration;
    /**
     * The IAM role that grants permissions to the Amazon Web Services resources that the workspace will view data from. This role must already exist.
     */
    workspaceRoleArn?: IamRoleArn;
  }
  export type WorkspaceId = string;
  export type WorkspaceList = WorkspaceSummary[];
  export type WorkspaceName = string;
  export type WorkspaceStatus = "ACTIVE"|"CREATING"|"DELETING"|"FAILED"|"UPDATING"|"UPGRADING"|"DELETION_FAILED"|"CREATION_FAILED"|"UPDATE_FAILED"|"UPGRADE_FAILED"|"LICENSE_REMOVAL_FAILED"|string;
  export interface WorkspaceSummary {
    /**
     * A structure containing information about the authentication methods used in the workspace.
     */
    authentication: AuthenticationSummary;
    /**
     * The date that the workspace was created.
     */
    created: Timestamp;
    /**
     * The customer-entered description of the workspace.
     */
    description?: Description;
    /**
     * The URL endpoint to use to access the Grafana console in the workspace.
     */
    endpoint: Endpoint;
    /**
     * The Grafana version that the workspace is running.
     */
    grafanaVersion: GrafanaVersion;
    /**
     * The unique ID of the workspace.
     */
    id: WorkspaceId;
    /**
     * The most recent date that the workspace was modified.
     */
    modified: Timestamp;
    /**
     * The name of the workspace.
     */
    name?: WorkspaceName;
    /**
     * The