ntSet;
  }
  export type CommunicationBody = string;
  export type CommunicationList = Communication[];
  export interface CreateCaseRequest {
    /**
     * The title of the support case. The title appears in the Subject field on the Amazon Web Services Support Center Create Case page.
     */
    subject: Subject;
    /**
     * The code for the Amazon Web Services service. You can use the DescribeServices operation to get the possible serviceCode values.
     */
    serviceCode?: ServiceCode;
    /**
     * A value that indicates the urgency of the case. This value determines the response time according to your service level agreement with Amazon Web Services Support. You can use the DescribeSeverityLevels operation to get the possible values for severityCode.  For more information, see SeverityLevel and Choosing a Severity in the Amazon Web Services Support User Guide.  The availability of severity levels depends on the support plan for the Amazon Web Services account. 
     */
    severityCode?: SeverityCode;
    /**
     * The category of problem for the support case. You also use the DescribeServices operation to get the category code for a service. Each Amazon Web Services service defines its own set of category codes.
     */
    categoryCode?: CategoryCode;
    /**
     * The communication body text that describes the issue. This text appears in the Description field on the Amazon Web Services Support Center Create Case page.
     */
    communicationBody: CommunicationBody;
    /**
     * A list of email addresses that Amazon Web Services Support copies on case correspondence. Amazon Web Services Support identifies the account that creates the case when you specify your Amazon Web Services credentials in an HTTP POST method or use the Amazon Web Services SDKs. 
     */
    ccEmailAddresses?: CcEmailAddressList;
    /**
     * The language in which Amazon Web Services Support handles the case. Amazon Web Services Support currently supports English ("en") and Japanese ("ja"). You must specify the ISO 639-1 code for the language parameter if you want support in that language.
     */
    language?: Language;
    /**
     * The type of issue for the case. You can specify customer-service or technical. If you don't specify a value, the default is technical.
     */
    issueType?: IssueType;
    /**
     * The ID of a set of one or more attachments for the case. Create the set by using the AddAttachmentsToSet operation.
     */
    attachmentSetId?: AttachmentSetId;
  }
  export interface CreateCaseResponse {
    /**
     * The support case ID requested or returned in the call. The case ID is an alphanumeric string in the following format: case-12345678910-2013-c4c1d2bf33c5cf47 
     */
    caseId?: CaseId;
  }
  export type Data = Buffer|Uint8Array|Blob|string;
  export interface DescribeAttachmentRequest {
    /**
     * The ID of the attachment to return. Attachment IDs are returned by the DescribeCommunications operation.
     */
    attachmentId: AttachmentId;
  }
  export interface DescribeAttachmentResponse {
    /**
     * This object includes the attachment content and file name. In the previous response syntax, the value for the data parameter appears as blob, which is represented as a base64-encoded string. The value for fileName is the name of the attachment, such as troubleshoot-screenshot.png.
     */
    attachment?: Attachment;
  }
  export interface DescribeCasesRequest {
    /**
     * A list of ID numbers of the support cases you want returned. The maximum number of cases is 100.
     */
    caseIdList?: CaseIdList;
    /**
     * The ID displayed for a case in the Amazon Web Services Support Center user interface.
     */
    displayId?: DisplayId;
    /**
     * The start date for a filtered date search on support case communications. Case communications are available for 12 months after creation.
     */
    afterTime?: AfterTime;
    /**
     * The end date for a filtered date search on support case communications. Case communications are available for 12 months after creation.
     */
    beforeTime?: BeforeTime;
    /**
     * Specifies whether to include resolved support cases in the DescribeCases response. By default, resolved cases aren't included.
     */
    includeResolvedCases?: IncludeResolvedCases;
    /**
     * A resumption point for pagination.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of results to return before paginating.
     */
    maxResults?: MaxResults;
    /**
     * The language in which Amazon Web Services Support handles the case. Amazon Web Services Support currently supports English ("en") and Japanese ("ja"). You must specify the ISO 639-1 code for the language parameter if you want support in that language.
     */
    language?: Language;
    /**
     * Specifies whether to include communications in the DescribeCases response. By default, communications are included.
     */
    includeCommunications?: IncludeCommunications;
  }
  export interface DescribeCasesResponse {
    /**
     * The details for the cases that match the request.
     */
    cases?: CaseList;
    /**
     * A resumption point for pagination.
     */
    nextToken?: NextToken;
  }
  export interface DescribeCommunicationsRequest {
    /**
     * The support case ID requested or returned in the call. The case ID is an alphanumeric string formatted as shown in this example: case-12345678910-2013-c4c1d2bf33c5cf47 
     */
    caseId: CaseId;
    /**
     * The end date for a filtered date search on support case communications. Case communications are available for 12 months after creation.
     */
    beforeTime?: BeforeTime;
    /**
     * The start date for a filtered date search on support case communications. Case communications are available for 12 months after creation.
     */
    afterTime?: AfterTime;
    /**
     * A resumption point for pagination.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of results to return before paginating.
     */
    maxResults?: MaxResults;
  }
  export interface DescribeCommunicationsResponse {
    /**
     * The communications for the case.
     */
    communications?: CommunicationList;
    /**
     * A resumption point for pagination.
     */
    nextToken?: NextToken;
  }
  export interface DescribeServicesRequest {
    /**
     * A JSON-formatted list of service codes available for Amazon Web Services services.
     */
    serviceCodeList?: ServiceCodeList;
    /**
     * The language in which Amazon Web Services Support handles the case. Amazon Web Services Support currently supports English ("en") and Japanese ("ja"). You must specify the ISO 639-1 code for the language parameter if you want support in that language.
     */
    language?: Language;
  }
  export interface DescribeServicesResponse {
    /**
     * A JSON-formatted list of Amazon Web Services services.
     */
    services?: ServiceList;
  }
  export interface DescribeSeverityLevelsRequest {
    /**
     * The language in which Amazon Web Services Support handles the case. Amazon Web Services Support currently supports English ("en") and Japanese ("ja"). You must specify the ISO 639-1 code for the language parameter if you want support in that language.
     */
    language?: Language;
  }
  export interface DescribeSeverityLevelsResponse {
    /**
     * The available severity levels for the support case. Available severity levels are defined by your service level agreement with Amazon Web Services.
     */
    severityLevels?: SeverityLevelsList;
  }
  export interface DescribeTrustedAdvisorCheckRefreshStatusesRequest {
    /**
     * The IDs of the Trusted Advisor checks to get the status.  If you specify the check ID of a check that is automatically refreshed, you might see an InvalidParameterValue error. 
     */
    checkIds: StringList;
  }
  export interface DescribeTrustedAdvisorCheckRefreshStatusesResponse {
    /**
     * The refresh status of the specified Trusted Advisor checks.
     */
    statuses: TrustedAdvisorCheckRefreshStatusList;
  }
  export interface DescribeTrustedAdvisorCheckResultRequest {
    /**
     * The unique identifier for the Trusted Advisor check.
     */
    checkId: String;
    /**
     * The ISO 639-1 code for the language that you want your check results to appear in. The Amazon Web Services Support API currently supports the following languages for Trusted Advisor:   Chinese, Simplified - zh    Chinese, Traditional - zh_TW    English - en    French - fr    German - de    Indonesian - id    Italian - it    Japanese - ja    Korean - ko    Portuguese, Brazilian - pt_BR    Spanish - es   
     */
    language?: String;
  }
  export interface DescribeTrustedAdvisorCheckResultResponse {
    /**
     * The detailed results of the Trusted Advisor check.
     */
    result?: TrustedAdvisorCheckResult;
  }
  export interface DescribeTrustedAdvisorCheckSummariesRequest {
    /**
     * The IDs of the Trusted Advisor checks.
     */
    checkIds: StringList;
  }
  export interface DescribeTrustedAdvisorCheckSummariesResponse {
    /**
     * The summary information for the requested Trusted Advisor checks.
     */
    summaries: TrustedAdvisorCheckSummaryList;
  }
  export interface DescribeTrustedAdvisorChecksRequest {
    /**
     * The ISO 639-1 code for the language that you want your checks to appear in. The Amazon Web Services Support API currently supports the following languages for Trusted Advisor:   Chinese, Simplified - zh    Chinese, Traditional - zh_TW    English - en    French - fr    German - de    Indonesian - id    Italian - it    Japanese - ja    Korean - ko    Portuguese, Brazilian - pt_BR    Spanish - es   
     */
    language: String;
  }
  export interface DescribeTrustedAdvisorChecksResponse {
    /**
     * Information about all available Trusted Advisor checks.
     */
    checks: TrustedAdvisorCheckList;
  }
  export type DisplayId = string;
  export type Double = number;
  export type ExpiryTime = string;
  export type FileName = string;
  export type IncludeCommunications = boolean;
  export type IncludeResolvedCases = boolean;
  export type IssueType = string;
  export type Language = string;
  export type Long = number;
  export type MaxResults = number;
  export type NextToken = string;
  export interface RecentCaseCommunications {
    /**
     * The five most recent communications associated with the case.
     */
    communications?: CommunicationList;
    /**
     * A resumption point for pagination.
     */
    nextToken?: NextToken;
  }
  export interface RefreshTrustedAdvisorCheckRequest {
    /**
     * The unique identifier for the Trusted Advisor check to refresh.  Specifying the check ID of a check that is automatically refreshed causes an InvalidParameterValue error. 
     */
    checkId: String;
  }
  export interface RefreshTrustedAdvisorCheckResponse {
    /**
     * The current refresh status for a check, including the amount of time until the check is eligible for refresh.
     */
    status: TrustedAdvisorCheckRefreshStatus;
  }
  export interface ResolveCaseRequest {
    /**
     * The support case ID requested or returned in the call. The case ID is an alphanumeric string formatted as shown in this example: case-12345678910-2013-c4c1d2bf33c5cf47 
     */
    caseId?: CaseId;
  }
  export interface ResolveCaseResponse {
    /**
     * The status of the case when the ResolveCase request was sent.
     */
    initialCaseStatus?: CaseStatus;
    /**
     * The status of the case after the ResolveCase request was processed.
     */
    finalCaseStatus?: CaseStatus;
  }
  export type Result = boolean;
  export interface Service {
    /**
     * The code for an Amazon Web Services service returned by the DescribeServices response. The name element contains the corresponding friendly name.
     */
    code?: ServiceCode;
    /**
     * The friendly name for an Amazon Web Services service. The code element contains the corresponding code.
     */
    name?: ServiceName;
    /**
     * A list of categories that describe the type of support issue a case describes. Categories consist of a category name and a category code. Category names and codes are passed to Amazon Web Services Support when you call CreateCase.
     */
    categories?: CategoryList;
  }
  export type ServiceCode = string;
  export type ServiceCodeList = ServiceCode[];
  export type ServiceList = Service[];
  export type ServiceName = string;
  export type SeverityCode = string;
  export interface SeverityLevel {
    /**
     * The code for case severity level. Valid values: low | normal | high | urgent | critical 
     */
    code?: SeverityLevelCode;
    /**
     * The name of the severity level that corresponds to the severity level code.  The values returned by the API are different from the values that appear in the Amazon Web Services Support Center. For example, the API uses the code low, but the name appears as General guidance in Support Center.  The following are the API code names and how they appear in the console:    low - General guidance    normal - System impaired    high - Production system impaired    urgent - Production system down    critical - Business-critical system down    For more information, see Choosing a severity in the Amazon Web Services Support User Guide.
     */
    name?: SeverityLevelName;
  }
  export type SeverityLevelCode = string;
  export type SeverityLevelName = string;
  export type SeverityLevelsList = SeverityLevel[];
  export type Status = string;
  export type String = string;
  export type StringList = String[];
  export type Subject = string;
  export type SubmittedBy = string;
  export type TimeCreated = string;
  export interface TrustedAdvisorCategorySpecificSummary {
    /**
     * The summary information about cost savings for a Trusted Advisor check that is in the Cost Optimizing category.
     */
    costOptimizing?: TrustedAdvisorCostOptimizingSummary;
  }
  export interface TrustedAdvisorCheckDescription {
    /**
     * The unique identifier for the Trusted Advisor check.
     */
    id: String;
    /**
     * The display name for the Trusted Advisor check.
     */
    name: String;
    /**
     * The description of the Trusted Advisor check, which includes the alert criteria and recommended operations (contains HTML markup).
     */
    description: String;
    /**
     * The category of the Trusted Advisor check.
     */
    category: String;
    /**
     * The column headings for the data returned by the Trusted Advisor check. The order of the headings corresponds to the order of the data in the Metadata element of the TrustedAdvisorResourceDetail for the check. Metadata contains all the data that is shown in the Excel download, even in those cases where the UI shows just summary data. 
     */
    metadata: StringList;
  }
  export type TrustedAdvisorCheckList = TrustedAdvisorCheckDescription[];
  export interface TrustedAdvisorCheckRefreshStatus {
    /**
     * The unique identifier for the Trusted Advisor check.
     */
    checkId: String;
    /**
     * The status of the Trusted Advisor check for which a refresh has been requested:     none - The check is not refreshed or the non-success status exceeds the timeout    enqueued - The check refresh requests has entered the refresh queue    processing - The check refresh request is picked up by the rule processing engine    success - The check is successfully refreshed    abandoned - The check refresh has failed  
     */
    status: String;
    /**
     * The amount of time, in milliseconds, until the Trusted Advisor check is eligible for refresh.
     */
    millisUntilNextRefreshable: Long;
  }
  export type TrustedAdvisorCheckRefreshStatusList = TrustedAdvisorCheckRefreshStatus[];
  export interface TrustedAdvisorCheckResult {
    /**
     * The unique identifier for the Trusted Advisor check.
     */
    checkId: String;
    /**
     * The time of the last refresh of the check.
     */
    timestamp: String;
    /**
     * The alert status of the check: "ok" (green), "warning" (yellow), "error" (red), or "not_available".
     */
    status: String;
    resourcesSummary: TrustedAdvisorResourcesSummary;
    /**
     * Summary information that relates to the category of the check. Cost Optimizing is the only category that is currently supported.
     */
    categorySpecificSummary: TrustedAdvisorCategorySpecificSummary;
    /**
     * The details about each resource listed in the check result.
     */
    flaggedResources: TrustedAdvisorResourceDetailList;
  }
  export interface TrustedAdvisorCheckSummary {
    /**
     * The unique identifier for the Trusted Advisor check.
     */
    checkId: String;
    /**
     * The time of the last refresh of the check.
     */
    timestamp: String;
    /**
     * The alert status of the check: "ok" (green), "warning" (yellow), "error" (red), or "not_available".
     */
    status: String;
    /**
     * Specifies whether the Trusted Advisor check has flagged resources.
     */
    hasFlaggedResources?: Boolean;
    resourcesSummary: TrustedAdvisorResourcesSummary;
    /**
     * Summary information that relates to the category of the check. Cost Optimizing is the only category that is currently supported.
     */
    categorySpecificSummary: TrustedAdvisorCategorySpecificSummary;
  }
  export type TrustedAdvisorCheckSummaryList = TrustedAdvisorCheckSummary[];
  export interface TrustedAdvisorCostOptimizingSummary {
    /**
     * The estimated monthly savings that might be realized if the recommended operations are taken.
     */
    estimatedMonthlySavings: Double;
    /**
     * The estimated percentage of savings that might be realized if the recommended operations are taken.
     */
    estimatedPercentMonthlySavings: Double;
  }
  export interface TrustedAdvisorResourceDetail {
    /**
     * The status code for the resource identified in the Trusted Advisor check.
     */
    status: String;
    /**
     * The Amazon Web Services Region in which