// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {
  OAuth2Client,
  JWT,
  Compute,
  UserRefreshClient,
} from 'google-auth-library';
import {
  GoogleConfigurable,
  createAPIRequest,
  MethodOptions,
  GlobalOptions,
  BodyResponseCallback,
  APIRequestContext,
} from 'googleapis-common';
import {GaxiosPromise} from 'gaxios';

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace run_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
  }

  interface StandardParameters {
    /**
     * V1 error format.
     */
    '$.xgafv'?: string;
    /**
     * OAuth access token.
     */
    access_token?: string;
    /**
     * Data format for response.
     */
    alt?: string;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauth_token?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    upload_protocol?: string;
  }

  /**
   * Cloud Run API
   *
   * Deploy and manage user provided container images that scale automatically based on HTTP traffic.
   *
   * @example
   * const {google} = require('googleapis');
   * const run = google.run('v1');
   *
   * @namespace run
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for Run
   */
  export class Run {
    context: APIRequestContext;
    namespaces: Resource$Namespaces;
    projects: Resource$Projects;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.namespaces = new Resource$Namespaces(this.context);
      this.projects = new Resource$Projects(this.context);
    }
  }

  /**
   * Information for connecting over HTTP(s).
   */
  export interface Schema$Addressable {
    url?: string | null;
  }
  /**
   * Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs.  If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted.  Example Policy with multiple AuditConfigs:      {       &quot;audit_configs&quot;: [         {           &quot;service&quot;: &quot;allServices&quot;           &quot;audit_log_configs&quot;: [             {               &quot;log_type&quot;: &quot;DATA_READ&quot;,               &quot;exempted_members&quot;: [                 &quot;user:jose@example.com&quot;               ]             },             {               &quot;log_type&quot;: &quot;DATA_WRITE&quot;,             },             {               &quot;log_type&quot;: &quot;ADMIN_READ&quot;,             }           ]         },         {           &quot;service&quot;: &quot;sampleservice.googleapis.com&quot;           &quot;audit_log_configs&quot;: [             {               &quot;log_type&quot;: &quot;DATA_READ&quot;,             },             {               &quot;log_type&quot;: &quot;DATA_WRITE&quot;,               &quot;exempted_members&quot;: [                 &quot;user:aliya@example.com&quot;               ]             }           ]         }       ]     }  For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts jose@example.com from DATA_READ logging, and aliya@example.com from DATA_WRITE logging.
   */
  export interface Schema$AuditConfig {
    /**
     * The configuration for logging of each type of permission.
     */
    auditLogConfigs?: Schema$AuditLogConfig[];
    /**
     * Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services.
     */
    service?: string | null;
  }
  /**
   * Provides the configuration for logging a type of permissions. Example:      {       &quot;audit_log_configs&quot;: [         {           &quot;log_type&quot;: &quot;DATA_READ&quot;,           &quot;exempted_members&quot;: [             &quot;user:jose@example.com&quot;           ]         },         {           &quot;log_type&quot;: &quot;DATA_WRITE&quot;,         }       ]     }  This enables &#39;DATA_READ&#39; and &#39;DATA_WRITE&#39; logging, while exempting jose@example.com from DATA_READ logging.
   */
  export interface Schema$AuditLogConfig {
    /**
     * Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members.
     */
    exemptedMembers?: string[] | null;
    /**
     * The log type that this config enables.
     */
    logType?: string | null;
  }
  /**
   * A domain that a user has been authorized to administer. To authorize use of a domain, verify ownership via [Webmaster Central](https://www.google.com/webmasters/verification/home).
   */
  export interface Schema$AuthorizedDomain {
    /**
     * Relative name of the domain authorized for use. Example: `example.com`.
     */
    id?: string | null;
    /**
     * Read only. Full path to the `AuthorizedDomain` resource in the API. Example: `apps/myapp/authorizedDomains/example.com`.
     */
    name?: string | null;
  }
  /**
   * Resource to hold the state and status of a user&#39;s auto domain mapping.
   */
  export interface Schema$AutoDomainMapping {
    /**
     * The API version for this call such as &quot;serving.knative.dev/v1&quot;.
     */
    apiVersion?: string | null;
    /**
     * The kind of resource, in this case &quot;AutoDomainMapping&quot;.
     */
    kind?: string | null;
    /**
     * Metadata associated with this BuildTemplate.
     */
    metadata?: Schema$ObjectMeta;
    /**
     * The spec for this AutoDomainMapping.
     */
    spec?: Schema$AutoDomainMappingSpec;
    /**
     * The current status of the AutoDomainMapping.
     */
    status?: Schema$AutoDomainMappingStatus;
  }
  /**
   * The desired state of the Auto Domain Mapping.
   */
  export interface Schema$AutoDomainMappingSpec {
    /**
     * The mode of the certificate.
     */
    certificateMode?: string | null;
    /**
     * The type of expansion for the auto auto domain mapping.
     */
    expansionType?: string | null;
    /**
     * If set, the mapping will override any mapping set before this spec was set. It is recommended that the user leaves this empty to receive an error warning about a potential conflict and only set it once the respective UI has given such a warning.
     */
    forceOverride?: boolean | null;
  }
  /**
   * The current state of the Domain Mapping.
   */
  export interface Schema$AutoDomainMappingStatus {
    /**
     * Array of observed AutoDomainMappingConditions, indicating the current state of the AutoDomainMapping.
     */
    conditions?: Schema$GoogleCloudRunV1Condition[];
    /**
     * ObservedGeneration is the &#39;Generation&#39; of the AutoDomainMapping that was last processed by the controller.  Clients polling for completed reconciliation should poll until observedGeneration = metadata.generation and the Ready condition&#39;s status is True or False.
     */
    observedGeneration?: number | null;
    /**
     * The resource records required to configure this domain mapping. These records must be added to the domain&#39;s DNS configuration in order to serve the application via this domain mapping.
     */
    resourceRecords?: Schema$ResourceRecord[];
  }
  /**
   * Associates `members` with a `role`.
   */
  export interface Schema$Binding {
    /**
     * The condition that is associated with this binding. NOTE: An unsatisfied condition will not allow user access via current binding. Different bindings, including their conditions, are examined independently.
     */
    condition?: Schema$Expr;
    /**
     * Specifies the identities requesting access for a Cloud Platform resource. `members` can have the following values:  * `allUsers`: A special identifier that represents anyone who is    on the internet; with or without a Google account.  * `allAuthenticatedUsers`: A special identifier that represents anyone    who is authenticated with a Google account or a service account.  * `user:{emailid}`: An email address that represents a specific Google    account. For example, `alice@example.com` .   * `serviceAccount:{emailid}`: An email address that represents a service    account. For example, `my-other-app@appspot.gserviceaccount.com`.  * `group:{emailid}`: An email address that represents a Google group.    For example, `admins@example.com`.   * `domain:{domain}`: The G Suite domain (primary) that represents all the    users of that domain. For example, `google.com` or `example.com`.
     */
    members?: string[] | null;
    /**
     * Role that is assigned to `members`. For example, `roles/viewer`, `roles/editor`, or `roles/owner`.
     */
    role?: string | null;
  }
  /**
   * Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  ConfigMapEnvSource selects a ConfigMap to populate the environment variables with.  The contents of the target ConfigMap&#39;s Data field will represent the key-value pairs as environment variables.
   */
  export interface Schema$ConfigMapEnvSource {
    /**
     * This field should not be used directly as it is meant to be inlined directly into the message. Use the &quot;name&quot; field instead.
     */
    localObjectReference?: Schema$LocalObjectReference;
    /**
     * Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  The ConfigMap to select from.
     */
    name?: string | null;
    /**
     * (Optional)  Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  Specify whether the ConfigMap must be defined
     */
    optional?: boolean | null;
  }
  /**
   * Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  Selects a key from a ConfigMap.
   */
  export interface Schema$ConfigMapKeySelector {
    /**
     * Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  The key to select.
     */
    key?: string | null;
    /**
     * This field should not be used directly as it is meant to be inlined directly into the message. Use the &quot;name&quot; field instead.
     */
    localObjectReference?: Schema$LocalObjectReference;
    /**
     * Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  The ConfigMap to select from.
     */
    name?: string | null;
    /**
     * (Optional)  Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  Specify whether the ConfigMap or its key must be defined
     */
    optional?: boolean | null;
  }
  /**
   * Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  Adapts a ConfigMap into a volume. The contents of the target ConfigMap&#39;s Data field will be presented in a volume as files using the keys in the Data field as the file names, unless the items element is populated with specific mappings of keys to paths.
   */
  export interface Schema$ConfigMapVolumeSource {
    /**
     * (Optional)  Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  Mode bits to use on created files by default. Must be a value between 0 and 0777. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
     */
    defaultMode?: number | null;
    /**
     * (Optional)  Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional.
     */
    items?: Schema$KeyToPath[];
    /**
     * Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  Name of the config.
     */
    name?: string | null;
    /**
     * (Optional)  Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  Specify whether the Secret or its keys must be defined.
     */
    optional?: boolean | null;
  }
  /**
   * Configuration represents the &quot;floating HEAD&quot; of a linear history of Revisions, and optionally how the containers those revisions reference are built. Users create new Revisions by updating the Configuration&#39;s spec. The &quot;latest created&quot; revision&#39;s name is available under status, as is the &quot;latest ready&quot; revision&#39;s name. See also: https://github.com/knative/serving/blob/master/docs/spec/overview.md#configuration
   */
  export interface Schema$Configuration {
    /**
     * The API version for this call such as &quot;serving.knative.dev/v1&quot;.
     */
    apiVersion?: string | null;
    /**
     * The kind of resource, in this case always &quot;Configuration&quot;.
     */
    kind?: string | null;
    /**
     * Metadata associated with this Configuration, including name, namespace, labels, and annotations.
     */
    metadata?: Schema$ObjectMeta;
    /**
     * Spec holds the desired state of the Configuration (from the client).
     */
    spec?: Schema$ConfigurationSpec;
    /**
     * Status communicates the observed state of the Configuration (from the controller).
     */
    status?: Schema$ConfigurationStatus;
  }
  /**
   * ConfigurationSpec holds the desired state of the Configuration (from the client).
   */
  export interface Schema$ConfigurationSpec {
    /**
     * Optional metadata for this Revision, including labels and annotations. Name will be generated by the Configuration. To set minimum instances for this revision, use the &quot;autoscaling.knative.dev/minScale&quot; annotation key. (Cloud Run for Anthos only). To set maximum instances for this revision, use the &quot;autoscaling.knative.dev/maxScale&quot; annotation key. To set Cloud SQL connections for the revision, use the &quot;run.googleapis.com/cloudsql-instances&quot; annotation key. Values should be comma separated.
     */
    template?: Schema$RevisionTemplate;
  }
  /**
   * ConfigurationStatus communicates the observed state of the Configuration (from the controller).
   */
  export interface Schema$ConfigurationStatus {
    /**
     * Conditions communicates information about ongoing/complete reconciliation processes that bring the &quot;spec&quot; inline with the observed state of the world.
     */
    conditions?: Schema$GoogleCloudRunV1Condition[];
    /**
     * LatestCreatedRevisionName is the last revision that was created from this Configuration. It might not be ready yet, for that use LatestReadyRevisionName.
     */
    latestCreatedRevisionName?: string | null;
    /**
     * LatestReadyRevisionName holds the name of the latest Revision stamped out from this Configuration that has had its &quot;Ready&quot; condition become &quot;True&quot;.
     */
    latestReadyRevisionName?: string | null;
    /**
     * ObservedGeneration is the &#39;Generation&#39; of the Configuration that was last processed by the controller. The observed generation is updated even if the controller failed to process the spec and create the Revision.  Clients polling for completed reconciliation should poll until observedGeneration = metadata.generation, and the Ready condition&#39;s status is True or False.
     */
    observedGeneration?: number | null;
  }
  /**
   * A single application container. This specifies both the container to run, the command to run in the container and the arguments to supply to it. Note that additional arguments may be supplied by the system to the container at runtime.
   */
  export interface Schema$Container {
    /**
     * (Optional)  Cloud Run fully managed: supported  Cloud Run for Anthos: supported  Arguments to the entrypoint. The docker image&#39;s CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container&#39;s environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
     */
    args?: string[] | null;
    command?: string[] | null;
    /**
     * (Optional)  Cloud Run fully managed: supported  Cloud Run for Anthos: supported  List of environment variables to set in the container.
     */
    env?: Schema$EnvVar[];
    /**
     * (Optional)  Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  List of sources to populate environment variables in the container. The keys defined within a source must be a C_IDENTIFIER. All invalid keys will be reported as an event when the container is starting. When a key exists in multiple sources, the value associated with the last source will take precedence. Values defined by an Env with a duplicate key will take precedence. Cannot be updated.
     */
    envFrom?: Schema$EnvFromSource[];
    /**
     * Cloud Run fully managed: only supports containers from Google Container Registry  Cloud Run for Anthos: supported  URL of the Container image. More info: https://kubernetes.io/docs/concepts/containers/images
     */
    image?: string | null;
    /**
     * (Optional)  Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. More info: https://kubernetes.io/docs/concepts/containers/images#updating-images
     */
    imagePullPolicy?: string | null;
    /**
     * (Optional)  Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  Periodic probe of container liveness. Container will be restarted if the probe fails. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
     */
    livenessProbe?: Schema$Probe;
    /**
     * (Optional)  Name of the container specified as a DNS_LABEL.
     */
    name?: string | null;
    /**
     * (Optional)  Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  List of ports to expose from the container. Exposing a port here gives the system additional information about the network connections a container uses, but is primarily informational. Not specifying a port here DOES NOT prevent that port from being exposed. Any port which is listening on the default &quot;0.0.0.0&quot; address inside a container will be accessible from the network.
     */
    ports?: Schema$ContainerPort[];
    /**
     * (Optional)  Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  Periodic probe of container service readiness. Container will be removed from service endpoints if the probe fails. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
     */
    readinessProbe?: Schema$Probe;
    /**
     * (Optional)  Cloud Run fully managed: supported  Cloud Run for Anthos: supported  Compute Resources required by this container. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
     */
    resources?: Schema$ResourceRequirements;
    /**
     * (Optional)  Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  Security options the pod should run with. More info: https://kubernetes.io/docs/concepts/policy/security-context/ More info: https://kubernetes.io/docs/tasks/configure-pod-container/security-context/
     */
    securityContext?: Schema$SecurityContext;
    /**
     * (Optional)  Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  Path at which the file to which the container&#39;s termination message will be written is mounted into the container&#39;s filesystem. Message written is intended to be brief final status, such as an assertion failure message. Will be truncated by the node if greater than 4096 bytes. The total message length across all containers will be limited to 12kb. Defaults to /dev/termination-log.
     */
    terminationMessagePath?: string | null;
    /**
     * (Optional)  Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated.
     */
    terminationMessagePolicy?: string | null;
    /**
     * (Optional)  Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  Pod volumes to mount into the container&#39;s filesystem.
     */
    volumeMounts?: Schema$VolumeMount[];
    /**
     * (Optional)  Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  Container&#39;s working directory. If not specified, the container runtime&#39;s default will be used, which might be configured in the container image.
     */
    workingDir?: string | null;
  }
  /**
   * Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  ContainerPort represents a network port in a single container.
   */
  export interface Schema$ContainerPort {
    /**
     * (Optional)  Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  Number of port to expose on the pod&#39;s IP address. This must be a valid port number, 0 &lt; x &lt; 65536.
     */
    containerPort?: number | null;
    /**
     * (Optional)  Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  If specified, used to specify which protocol to use. Allowed values are &quot;http1&quot; and &quot;h2c&quot;.
     */
    name?: string | null;
    /**
     * (Optional)  Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  Protocol for port. Must be TCP. Defaults to &quot;TCP&quot;.
     */
    protocol?: string | null;
  }
  /**
   * Resource to hold the state and status of a user&#39;s domain mapping.
   */
  export interface Schema$DomainMapping {
    /**
     * The API version for this call such as &quot;domains.cloudrun.com/v1&quot;.
     */
    apiVersion?: string | null;
    /**
     * The kind of resource, in this case &quot;DomainMapping&quot;.
     */
    kind?: string | null;
    /**
     * Metadata associated with this BuildTemplate.
     */
    metadata?: Schema$ObjectMeta;
    /**
     * The spec for this DomainMapping.
     */
    spec?: Schema$DomainMappingSpec;
    /**
     * The current status of the DomainMapping.
     */
    status?: Schema$DomainMappingStatus;
  }
  /**
   * The desired state of the Domain Mapping.
   */
  export interface Schema$DomainMappingSpec {
    /**
     * The mode of the certificate.
     */
    certificateMode?: string | null;
    /**
     * If set, the mapping will override any mapping set before this spec was set. It is recommended that the user leaves this empty to receive an error warning about a potential conflict and only set it once the respective UI has given such a warning.
     */
    forceOverride?: boolean | null;
    /**
     * The name of the Knative Route that this DomainMapping applies to. The route must exist.
     */
    routeName?: string | null;
  }
  /**
   * The current state of the Domain Mapping.
   */
  export interface Schema$DomainMappingStatus {
    /**
     * Array of observed DomainMappingConditions, indicating the current state of the DomainMapping.
     */
    conditions?: Schema$GoogleCloudRunV1Condition[];
    /**
     * The name of the route that the mapping currently points to.
     */
    mappedRouteName?: string | null;
    /**
     * ObservedGeneration is the &#39;Generation&#39; of the DomainMapping that was last processed by the controller.  Clients polling for completed reconciliation should poll until observedGeneration = metadata.generation and the Ready condition&#39;s status is True or False.
     */
    observedGeneration?: number | null;
    /**
     * The resource records required to configure this domain mapping. These records must be added to the domain&#39;s DNS configuration in order to serve the application via this domain mapping.
     */
    resourceRecords?: Schema$ResourceRecord[];
  }
  /**
   * Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  EnvFromSource represents the source of a set of ConfigMaps
   */
  export interface Schema$EnvFromSource {
    /**
     * (Optional)  Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  The ConfigMap to select from
     */
    configMapRef?: Schema$ConfigMapEnvSource;
    /**
     * (Optional)  Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  An optional identifier to prepend to each key in the ConfigMap. Must be a C_IDENTIFIER.
     */
    prefix?: string | null;
    /**
     * (Optional)  Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  The Secret to select from
     */
    secretRef?: Schema$SecretEnvSource;
  }
  /**
   * EnvVar represents an environment variable present in a Container.
   */
  export interface Schema$EnvVar {
    /**
     * Name of the environment variable. Must be a C_IDENTIFIER.
     */
    name?: string | null;
    /**
     * (Optional)  Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any route environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to &quot;&quot;.
     */
    value?: string | null;
    /**
     * (Optional)  Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  Source for the environment variable&#39;s value. Cannot be used if value is not empty.
     */
    valueFrom?: Schema$EnvVarSource;
  }
  /**
   * Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  EnvVarSource represents a source for the value of an EnvVar.
   */
  export interface Schema$EnvVarSource {
    /**
     * (Optional)  Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  Selects a key of a ConfigMap.
     */
    configMapKeyRef?: Schema$ConfigMapKeySelector;
    /**
     * (Optional)  Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  Selects a key of a secret in the pod&#39;s namespace
     */
    secretKeyRef?: Schema$SecretKeySelector;
  }
  /**
   * Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  ExecAction describes a &quot;run in container&quot; action.
   */
  export interface Schema$ExecAction {
    /**
     * (Optional)  Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  Command is the command line to execute inside the container, the working directory for the command  is root (&#39;/&#39;) in the container&#39;s filesystem. The command is simply exec&#39;d, it is not run inside a shell, so traditional shell instructions (&#39;|&#39;, etc) won&#39;t work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
     */
    command?: string | null;
  }
  /**
   * Represents an expression text. Example:      title: &quot;User account presence&quot;     description: &quot;Determines whether the request has a user account&quot;     expression: &quot;size(request.user) &gt; 0&quot;
   */
  export interface Schema$Expr {
    /**
     * An optional description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.
     */
    description?: string | null;
    /**
     * Textual representation of an expression in Common Expression Language syntax.  The application context of the containing message determines which well-known feature set of CEL is supported.
     */
    expression?: string | null;
    /**
     * An optional string indicating the location of the expression for error reporting, e.g. a file name and a position in the file.
     */
    location?: string | null;
    /**
     * An optional title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.
     */
    title?: string | null;
  }
  /**
   * Condition defines a generic condition for a Resource
   */
  export interface Schema$GoogleCloudRunV1Condition {
    /**
     * Optional. Last time the condition transitioned from one status to another.
     */
    lastTransitionTime?: string | null;
    /**
     * Optional. Human readable message indicating details about the current status.
     */
    message?: string | null;
    /**
     * Optional. One-word CamelCase reason for the condition&#39;s last transition.
     */
    reason?: string | null;
    /**
     * Optional. How to interpret failures of this condition, one of Error, Warning, Info
     */
    severity?: string | null;
    /**
     * Status of the condition, one of True, False, Unknown.
     */
    status?: string | null;
    /**
     * type is used to communicate the status of the reconciliation process. See also: https://github.com/knative/serving/blob/master/docs/spec/errors.md#error-conditions-and-reporting Types common to all resources include: * &quot;Ready&quot;: True when the Resource is ready.
     */
    type?: string | null;
  }
  /**
   * Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  Handler defines a specific action that should be taken
   */
  export interface Schema$Handler {
    /**
     * (Optional)  Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  One and only one of the following should be specified. Exec specifies the action to take.
     */
    exec?: Schema$ExecAction;
    /**
     * (Optional)  Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  HTTPGet specifies the http request to perform.
     */
    httpGet?: Schema$HTTPGetAction;
    /**
     * (Optional)  Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  TCPSocket specifies an action involving a TCP port. TCP hooks not yet supported
     */
    tcpSocket?: Schema$TCPSocketAction;
  }
  /**
   * Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  HTTPGetAction describes an action based on HTTP Get requests.
   */
  export interface Schema$HTTPGetAction {
    /**
     * (Optional)  Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  Host name to connect to, defaults to the pod IP. You probably want to set &quot;Host&quot; in httpHeaders instead.
     */
    host?: string | null;
    /**
     * (Optional)  Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  Custom headers to set in the request. HTTP allows repeated headers.
     */
    httpHeaders?: Schema$HTTPHeader[];
    /**
     * (Optional)  Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  Path to access on the HTTP server.
     */
    path?: string | null;
    /**
     * (Optional)  Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  Scheme to use for connecting to the host. Defaults to HTTP.
     */
    scheme?: string | null;
  }
  /**
   * Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  HTTPHeader describes a custom header to be used in HTTP probes
   */
  export interface Schema$HTTPHeader {
    /**
     * Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  The header field name
     */
    name?: string | null;
    /**
     * Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  The header field value
     */
    value?: string | null;
  }
  /**
   * IntOrString is a type that can hold an int32 or a string.  When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type.  This allows you to have, for example, a JSON field that can accept a name or number.
   */
  export interface Schema$IntOrString {
    /**
     * The int value.
     */
    intVal?: number | null;
    /**
     * The string value.
     */
    strVal?: string | null;
    /**
     * The type of the value.
     */
    type?: number | null;
  }
  /**
   * Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  Maps a string key to a path within a volume.
   */
  export interface Schema$KeyToPath {
    /**
     * Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  The key to project.
     */
    key?: string | null;
    /**
     * (Optional)  Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  Mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
     */
    mode?: number | null;
    /**
     * Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  The relative path of the file to map the key to. May not be an absolute path. May not contain the path element &#39;..&#39;. May not start with the string &#39;..&#39;.
     */
    path?: string | null;
  }
  /**
   * A list of Authorized Domains.
   */
  export interface Schema$ListAuthorizedDomainsResponse {
    /**
     * The authorized domains belonging to the user.
     */
    domains?: Schema$AuthorizedDomain[];
    /**
     * Continuation token for fetching the next page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * ListAutoDomainMappingsResponse is a list of AutoDomainMapping resources.
   */
  export interface Schema$ListAutoDomainMappingsResponse {
    /**
     * The API version for this call such as &quot;serving.knative.dev/v1&quot;.
     */
    apiVersion?: string | null;
    /**
     * List of AutoDomainMappings.
     */
    items?: Schema$AutoDomainMapping[];
    /**
     * The kind of this resource, in this case &quot;AutoDomainMappingList&quot;.
     */
    kind?: string | null;
    /**
     * Metadata associated with this AutoDomainMapping list.
     */
    metadata?: Schema$ListMeta;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * ListConfigurationsResponse is a list of Configuration resources.
   */
  export interface Schema$ListConfigurationsResponse {
    /**
     * The API version for this call such as &quot;serving.knative.dev/v1&quot;.
     */
    apiVersion?: string | null;
    /**
     * List of Configurations.
     */
    items?: Schema$Configuration[];
    /**
     * The kind of this resource, in this case &quot;ConfigurationList&quot;.
     */
    kind?: string | null;
    /**
     * Metadata associated with this Configuration list.
     */
    metadata?: Schema$ListMeta;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * ListDomainMappingsResponse is a list of DomainMapping resources.
   */
  export interface Schema$ListDomainMappingsResponse {
    /**
     * The API version for this call such as &quot;domains.cloudrun.com/v1&quot;.
     */
    apiVersion?: string | null;
    /**
     * List of DomainMappings.
     */
    items?: Schema$DomainMapping[];
    /**
     * The kind of this resource, in this case &quot;DomainMappingList&quot;.
     */
    kind?: string | null;
    /**
     * Metadata associated with this DomainMapping list.
     */
    metadata?: Schema$ListMeta;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * The response message for Locations.ListLocations.
   */
  export interface Schema$ListLocationsResponse {
    /**
     * A list of locations that matches the specified filter in the request.
     */
    locations?: Schema$Location[];
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string | null;
  }
  /**
   * ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
   */
  export interface Schema$ListMeta {
    /**
     * continue may be set if the user set a limit on the number of items returned, and indicates that the server has more data available. The value is opaque and may be used to issue another request to the endpoint that served this list to retrieve the next set of available objects. Continuing a list may not be possible if the server configuration has changed or more than a few minutes have passed. The resourceVersion field returned when using this continue value will be identical to the value in the first response.
     */
    continue?: string | null;
    /**
     * String that identifies the server&#39;s internal version of this object that can be used by clients to determine when objects have changed. Value must be treated as opaque by clients and passed unmodified back to the server. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#concurrency-control-and-consistency +optional
     */
    resourceVersion?: string | null;
    /**
     * SelfLink is a URL representing this object. Populated by the system. Read-only. +optional
     */
    selfLink?: string | null;
  }
  /**
   * ListRevisionsResponse is a list of Revision resources.
   */
  export interface Schema$ListRevisionsResponse {
    /**
     * The API version for this call such as &quot;serving.knative.dev/v1&quot;.
     */
    apiVersion?: string | null;
    /**
     * List of Revisions.
     */
    items?: Schema$Revision[];
    /**
     * The kind of this resource, in this case &quot;RevisionList&quot;.
     */
    kind?: string | null;
    /**
     * Metadata associated with this revision list.
     */
    metadata?: Schema$ListMeta;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * ListRoutesResponse is a list of Route resources.
   */
  export interface Schema$ListRoutesResponse {
    /**
     * The API version for this call such as &quot;serving.knative.dev/v1&quot;.
     */
    apiVersion?: string | null;
    /**
     * List of Routes.
     */
    items?: Schema$Route[];
    /**
     * The kind of this resource, in this case always &quot;RouteList&quot;.
     */
    kind?: string | null;
    /**
     * Metadata associated with this Route list.
     */
    metadata?: Schema$ListMeta;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * A list of Service resources.
   */
  export interface Schema$ListServicesResponse {
    /**
     * The API version for this call such as &quot;serving.knative.dev/v1&quot;.
     */
    apiVersion?: string | null;
    /**
     * List of Services.
     */
    items?: Schema$Service[];
    /**
     * The kind of this resource, in this case &quot;ServiceList&quot;.
     */
    kind?: string | null;
    /**
     * Metadata associated with this Service list.
     */
    metadata?: Schema$ListMeta;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace.
   */
  export interface Schema$LocalObjectReference {
    /**
     * (Optional)  Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
     */
    name?: string | null;
  }
  /**
   * A resource that represents Google Cloud Platform location.
   */
  export interface Schema$Location {
    /**
     * The friendly name for this location, typically a nearby city name. For example, &quot;Tokyo&quot;.
     */
    displayName?: string | null;
    /**
     * Cross-service attributes for the location. For example      {&quot;cloud.googleapis.com/region&quot;: &quot;us-east1&quot;}
     */
    labels?: {[key: string]: string} | null;
    /**
     * The canonical id for this location. For example: `&quot;us-east1&quot;`.
     */
    locationId?: string | null;
    /**
     * Service-specific metadata. For example the available capacity at the given location.
     */
    metadata?: {[key: string]: any} | null;
    /**
     * Resource name for the location, which may vary between implementations. For example: `&quot;projects/example-project/locations/us-east1&quot;`
     */
    name?: string | null;
  }
  /**
   * k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
   */
  export interface Schema$ObjectMeta {
    /**
     * (Optional)  Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: http://kubernetes.io/docs/user-guide/annotations
     */
    annotations?: {[key: string]: string} | null;
    /**
     * (Optional)  Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  The name of the cluster which the object belongs to. This is used to distinguish resources with same name and namespace in different clusters. This field is not set anywhere right now and apiserver is going to ignore it if set in create or update request.
     */
    clusterName?: string | null;
    /**
     * (Optional)  CreationTimestamp is a timestamp representing the server time when this object was created. It is not guaranteed to be set in happens-before order across separate operations. Clients may not set this value. It is represented in RFC3339 form and is in UTC.  Populated by the system. Read-only. Null for lists. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
     */
    creationTimestamp?: string | null;
    /**
     * (Optional)  Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  Number of seconds allowed for this object to gracefully terminate before it will be removed from the system. Only set when deletionTimestamp is also set. May only be shortened. Read-only.
     */
    deletionGracePeriodSeconds?: number | null;
    /**
     * (Optional)  Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  DeletionTimestamp is RFC 3339 date and time at which this resource will be deleted. This field is set by the server when a graceful deletion is requested by the user, and is not directly settable by a client. The resource is expected to be deleted (no longer visible from resource lists, and not reachable by name) after the time in this field, once the finalizers list is empty. As long as the finalizers list contains items, deletion is blocked. Once the deletionTimestamp is set, this value may not be unset or be set further into the future, although it may be shortened or the resource may be deleted prior to this time. For example, a user may request that a pod is deleted in 30 seconds. The Kubelet will react by sending a graceful termination signal to the containers in the pod. After that 30 seconds, the Kubelet will send a hard termination signal (SIGKILL) to the container and after cleanup, remove the pod from the API. In the presence of network partitions, this object may still exist after this timestamp, until an administrator or automated process can determine the resource is fully terminated. If not set, graceful deletion of the object has not been requested.  Populated by the system when a graceful deletion is requested. Read-only. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
     */
    deletionTimestamp?: string | null;
    /**
     * (Optional)  Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  Must be empty before the object is deleted from the registry. Each entry is an identifier for the responsible component that will remove the entry from the list. If the deletionTimestamp of the object is non-nil, entries in this list can only be removed. +patchStrategy=merge
     */
    finalizers?: string[] | null;
    /**
     * (Optional)  Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  GenerateName is an optional prefix, used by the server, to generate a unique name ONLY IF the Name field has not been provided. If this field is used, the name returned to the client will be different than the name passed. This value will also be combined with a unique suffix. The provided value has the same validation rules as the Name field, and may be truncated by the length of the suffix required to make the value unique on the server.  If this field is specified and the generated name exists, the server will NOT return a 409 - instead, it will either return 201 Created or 500 with Reason ServerTimeout indicating a unique name could not be found in the time allotted, and the client should retry (optionally after the time indicated in the Retry-After header).  Applied only if Name is not specified. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#idempotency  string generateName = 2;
     */
    generateName?: string | null;
    /**
     * (Optional)  A sequence number representing a specific generation of the desired state. Populated by the system. Read-only.
     */
    generation?: number | null;
    /**
     * (Optional)  Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and routes. More info: http://kubernetes.io/docs/user-guide/labels
     */
    labels?: {[key: string]: string} | null;
    /**
     * Name must be unique within a namespace, within a Cloud Run region. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names +optional
     */
    name?: string | null;
    /**
     * Namespace defines the space within each name must be unique, within a Cloud Run region. In Cloud Run the namespace must be equal to either the project ID or project number.
     */
    namespace?: string | null;
    /**
     * (Optional)  Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  List of objects that own this object. If ALL objects in the list have been deleted, this object will be garbage collected.
     */
    ownerReferences?: Schema$OwnerReference[];
    /**
     * (Optional)  An opaque value that represents the internal version of this object that can be used by clients to determine when objects have changed. May be used for optimistic concurrency, change detection, and the watch operation on a resource or set of resources. Clients must treat these values as opaque and passed unmodified back to the server. They may only be valid for a particular resource or set of resources.  Populated by the system. Read-only. Value must be treated as opaque by clients and . More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#concurrency-control-and-consistency
     */
    resourceVersion?: string | null;
    /**
     * (Optional)  SelfLink is a URL representing this object. Populated by the system. Read-only.  string selfLink = 4;
     */
    selfLink?: string | null;
    /**
     * (Optional)  UID is the unique in time and space value for this object. It is typically generated by the server on successful creation of a resource and is not allowed to change on PUT operations.  Populated by the system. Read-only. More info: http://kubernetes.io/docs/user-guide/identifiers#uids
     */
    uid?: string | null;
  }
  /**
   * OwnerReference contains enough information to let you identify an owning object. Currently, an owning object must be in the same namespace, so there is no namespace field.
   */
  export interface Schema$OwnerReference {
    /**
     * API version of the referent.
     */
    apiVersion?: string | null;
    /**
     * If true, AND if the owner has the &quot;foregroundDeletion&quot; finalizer, then the owner cannot be deleted from the key-value store until this reference is removed. Defaults to false. To set this field, a user needs &quot;delete&quot; permission of the owner, otherwise 422 (Unprocessable Entity) will be returned. +optional
     */
    blockOwnerDeletion?: boolean | null;
    /**
     * If true, this reference points to the managing controller. +optional
     */
    controller?: boolean | null;
    /**
     * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     */
    kind?: string | null;
    /**
     * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
     */
    name?: string | null;
    /**
     * UID of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#uids
     */
    uid?: string | null;
  }
  /**
   * Defines an Identity and Access Management (IAM) policy. It is used to specify access control policies for Cloud Platform resources.   A `Policy` is a collection of `bindings`. A `binding` binds one or more `members` to a single `role`. Members can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions (defined by IAM or configured by users). A `binding` can optionally specify a `condition`, which is a logic expression that further constrains the role binding based on attributes about the request and/or target resource.  **JSON Example**      {       &quot;bindings&quot;: [         {           &quot;role&quot;: &quot;roles/resourcemanager.organizationAdmin&quot;,           &quot;members&quot;: [             &quot;user:mike@example.com&quot;,             &quot;group:admins@example.com&quot;,             &quot;domain:google.com&quot;,             &quot;serviceAccount:my-project-id@appspot.gserviceaccount.com&quot;           ]         },         {           &quot;role&quot;: &quot;roles/resourcemanager.organizationViewer&quot;,           &quot;members&quot;: [&quot;user:eve@example.com&quot;],           &quot;condition&quot;: {             &quot;title&quot;: &quot;expirable access&quot;,             &quot;description&quot;: &quot;Does not grant access after Sep 2020&quot;,             &quot;expression&quot;: &quot;request.time &lt;             timestamp(&#39;2020-10-01T00:00:00.000Z&#39;)&quot;,           }         }       ]     }  **YAML Example**      bindings:     - members:       - user:mike@example.com       - group:admins@example.com       - domain:google.com       - serviceAccount:my-project-id@appspot.gserviceaccount.com       role: roles/resourcemanager.organizationAdmin     - members:       - user:eve@example.com       role: roles/resourcemanager.organizationViewer       condition:         title: expirable access         description: Does not grant access after Sep 2020         expression: request.time &lt; timestamp(&#39;2020-10-01T00:00:00.000Z&#39;)  For a description of IAM and its features, see the [IAM developer&#39;s guide](https://cloud.google.com/iam/docs).
   */
  export interface Schema$Policy {
    /**
     * Specifies cloud audit logging configuration for this policy.
     */
    auditConfigs?: Schema$AuditConfig[];
    /**
     * Associates a list of `members` to a `role`. Optionally may specify a `condition` that determines when binding is in effect. `bindings` with no members will result in an error.
     */
    bindings?: Schema$Binding[];
    /**
     * `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy.  If no `etag` is provided in the call to `setIamPolicy`, then the existing policy is overwritten. Due to blind-set semantics of an etag-less policy, &#39;setIamPolicy&#39; will not fail even if either of incoming or stored policy does not meet the version requirements.
     */
    etag?: string | null;
    /**
     * Specifies the format of the policy.  Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.  Operations affecting conditional bindings must specify version 3. This can be either setting a conditional policy, modifying a conditional binding, or removing a conditional binding from the stored conditional policy. Operations on non-conditional policies may specify any valid value or leave the field unset.  If no etag is provided in the call to `setIamPolicy`, any version compliance checks on the incoming and/or stored policy is skipped.
     */
    version?: number | null;
  }
  /**
   * Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic.
   */
  export interface Schema$Probe {
    /**
     * (Optional)  Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
     */
    failureThreshold?: number | null;
    /**
     * Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  The action taken to determine the health of a container
     */
    handler?: Schema$Handler;
    /**
     * (Optional)  Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  Number of seconds after the container has started before liveness probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
     */
    initialDelaySeconds?: number | null;
    /**
     * (Optional)  Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1.
     */
    periodSeconds?: number | null;
    /**
     * (Optional)  Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness. Minimum value is 1.
     */
    successThreshold?: number | null;
    /**
     * (Optional)  Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
     */
    timeoutSeconds?: number | null;
  }
  /**
   * A DNS resource record.
   */
  export interface Schema$ResourceRecord {
    /**
     * Relative name of the object affected by this record. Only applicable for `CNAME` records. Example: &#39;www&#39;.
     */
    name?: string | null;
    /**
     * Data for this record. Values vary by record type, as defined in RFC 1035 (section 5) and RFC 1034 (section 3.6.1).
     */
    rrdata?: string | null;
    /**
     * Resource record type. Example: `AAAA`.
     */
    type?: string | null;
  }
  /**
   * ResourceRequirements describes the compute resource requirements.
   */
  export interface Schema$ResourceRequirements {
    /**
     * (Optional)  Cloud Run fully managed: Only memory and CPU are supported. Note: The only supported value for CPU is &#39;1&#39;.  Cloud Run for Anthos: supported  Limits describes the maximum amount of compute resources allowed. The values of the map is string form of the &#39;quantity&#39; k8s type: https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/apimachinery/pkg/api/resource/quantity.go
     */
    limits?: {[key: string]: string} | null;
    /**
     * (Optional)  Cloud Run fully managed: Only memory and CPU are supported. Note: The only supported value for CPU is &#39;1&#39;.  Cloud Run for Anthos: supported  Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. The values of the map is string form of the &#39;quantity&#39; k8s type: https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/apimachinery/pkg/api/resource/quantity.go
     */
    requests?: {[key: string]: string} | null;
  }
  /**
   * Revision is an immutable snapshot of code and configuration.  A revision references a container image. Revisions are created by updates to a Configuration.  See also: https://github.com/knative/serving/blob/master/docs/spec/overview.md#revision
   */
  export interface Schema$Revision {
    /**
     * The API version for this call such as &quot;serving.knative.dev/v1&quot;.
     */
    apiVersion?: string | null;
    /**
     * The kind of this resource, in this case &quot;Revision&quot;.
     */
    kind?: string | null;
    /**
     * Metadata associated with this Revision, including name, namespace, labels, and annotations.
     */
    metadata?: Schema$ObjectMeta;
    /**
     * Spec holds the desired state of the Revision (from the client).
     */
    spec?: Schema$RevisionSpec;
    /**
     * Status communicates the observed state of the Revision (from the controller).
     */
    status?: Schema$RevisionStatus;
  }
  /**
   * RevisionSpec holds the desired state of the Revision (from the client).
   */
  export interface Schema$RevisionSpec {
    /**
     * (Optional)  ContainerConcurrency specifies the maximum allowed in-flight (concurrent) requests per container instance of the Revision.  Cloud Run fully managed: supported, defaults to 80  Cloud Run for Anthos: supported, defaults to 0, which means concurrency to the application is not limited, and the system decides the target concurrency for the autoscaler.
     */
    containerConcurrency?: number | null;
    /**
     * Containers holds the single container that defines the unit of execution for this Revision. In the context of a Revision, we disallow a number of fields on this Container, including: name and lifecycle. In Cloud Run, only a single container may be provided. The runtime contract is documented here: https://github.com/knative/serving/blob/master/docs/runtime-contract.md
     */
    containers?: Schema$Container[];
    /**
     * Email address of the IAM service account associated with the revision of the service. The service account represents the identity of the running revision, and determines what permissions the revision has. If not provided, the revision will use the project&#39;s default service account.
     */
    serviceAccountName?: string | null;
    /**
     * TimeoutSeconds holds the max duration the instance is allowed for responding to a request. Not currently used by Cloud Run.
     */
    timeoutSeconds?: number | null;
    volumes?: Schema$Volume[];
  }
  /**
   * RevisionStatus communicates the observed state of the Revision (from the controller).
   */
  export interface Schema$RevisionStatus {
    /**
     * Conditions communicates information about ongoing/complete reconciliation processes that bring the &quot;spec&quot; inline with the observed state of the world.  As a Revision is being prepared, it will incrementally update conditions. Revision-specific conditions include: * &quot;ResourcesAvailable&quot;: True when underlying resources have been    provisioned. * &quot;ContainerHealthy&quot;: True when the Revision readiness check completes. * &quot;Active&quot;: True when the Revision may receive traffic.
     */
    conditions?: Schema$GoogleCloudRunV1Condition[];
    /**
     * ImageDigest holds the resolved digest for the image specified within .Spec.Container.Image. The digest is resolved during the creation of Revision. This field holds the digest value regardless of whether a tag or digest was originally specified in the Container object.
     */
    imageDigest?: string | null;
    /**
     * Specifies the generated logging url for this particular revision based on the revision url template specified in the controller&#39;s config. +optional
     */
    logUrl?: string | null;
    /**
     * ObservedGeneration is the &#39;Generation&#39; of the Revision that was last processed by the controller.  Clients polling for completed reconciliation should poll until observedGeneration = metadata.generation, and the Ready condition&#39;s status is True or False.
     */
    observedGeneration?: number | null;
    /**
     * Not currently used by Cloud Run.
     */
    serviceName?: string | null;
  }
  /**
   * RevisionTemplateSpec describes the data a revision should have when created from a template. Based on: https://github.com/kubernetes/api/blob/e771f807/core/v1/types.go#L3179-L3190
   */
  export interface Schema$RevisionTemplate {
    /**
     * Optional metadata for this Revision, including labels and annotations. Name will be generated by the Configuration. To set minimum instances for this revision, use the &quot;autoscaling.knative.dev/minScale&quot; annotation key. To set maximum instances for this revision, use the &quot;autoscaling.knative.dev/maxScale&quot; annotation key. To set Cloud SQL connections for the revision, use the &quot;run.googleapis.com/cloudsql-instances&quot; annotation key.
     */
    metadata?: Schema$ObjectMeta;
    /**
     * RevisionSpec holds the desired state of the Revision (from the client).
     */
    spec?: Schema$RevisionSpec;
  }
  /**
   * Route is responsible for configuring ingress over a collection of Revisions. Some of the Revisions a Route distributes traffic over may be specified by referencing the Configuration responsible for creating them; in these cases the Route is additionally responsible for monitoring the Configuration for &quot;latest ready&quot; revision changes, and smoothly rolling out latest revisions. See also: https://github.com/knative/serving/blob/master/docs/spec/overview.md#route  Cloud Run currently supports referencing a single Configuration to automatically deploy the &quot;latest ready&quot; Revision from that Configuration.
   */
  export interface Schema$Route {
    /**
     * The API version for this call such as &quot;serving.knative.dev/v1&quot;.
     */
    apiVersion?: string | null;
    /**
     * The kind of this resource, in this case always &quot;Route&quot;.
     */
    kind?: string | null;
    /**
     * Metadata associated with this Route, including name, namespace, labels, and annotations.
     */
    metadata?: Schema$ObjectMeta;
    /**
     * Spec holds the desired state of the Route (from the client).
     */
    spec?: Schema$RouteSpec;
    /**
     * Status communicates the observed state of the Route (from the controller).
     */
    status?: Schema$RouteStatus;
  }
  /**
   * RouteSpec holds the desired state of the Route (from the client).
   */
  export interface Schema$RouteSpec {
    /**
     * Traffic specifies how to distribute traffic over a collection of Knative Revisions and Configurations. Cloud Run currently supports a single configurationName.
     */
    traffic?: Schema$TrafficTarget[];
  }
  /**
   * RouteStatus communicates the observed state of the Route (from the controller).
   */
  export interface Schema$RouteStatus {
    /**
     * Similar to url, information on where the service is available on HTTP.
     */
    address?: Schema$Addressable;
    /**
     * Conditions communicates information about ongoing/complete reconciliation processes that bring the &quot;spec&quot; inline with the observed state of the world.
     */
    conditions?: Schema$GoogleCloudRunV1Condition[];
    /**
     * ObservedGeneration is the &#39;Generation&#39; of the Route that was last processed by the controller.  Clients polling for completed reconciliation should poll until observedGeneration = metadata.generation and the Ready condition&#39;s status is True or False.  Note that providing a trafficTarget that only has a configurationName will result in a Route that does not increment either its metadata.generation or its observedGeneration, as new &quot;latest ready&quot; revisions from the Configuration are processed without an update to the Route&#39;s spec.
     */
    observedGeneration?: number | null;
    /**
     * Traffic holds the configured traffic distribution. These entries will always contain RevisionName references. When ConfigurationName appears in the spec, this will hold the LatestReadyRevisionName that we last observed.
     */
    traffic?: Schema$TrafficTarget[];
    /**
     * URL holds the url that will distribute traffic over the provided traffic targets. It generally has the form: https://{route-hash}-{project-hash}-{cluster-level-suffix}.a.run.app
     */
    url?: string | null;
  }
  /**
   * Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  SecretEnvSource selects a Secret to populate the environment variables with.  The contents of the target Secret&#39;s Data field will represent the key-value pairs as environment variables.
   */
  export interface Schema$SecretEnvSource {
    /**
     * This field should not be used directly as it is meant to be inlined directly into the message. Use the &quot;name&quot; field instead.
     */
    localObjectReference?: Schema$LocalObjectReference;
    /**
     * Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  The Secret to select from.
     */
    name?: string | null;
    /**
     * (Optional)  Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  Specify whether the Secret must be defined
     */
    optional?: boolean | null;
  }
  /**
   * Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  SecretKeySelector selects a key of a Secret.
   */
  export interface Schema$SecretKeySelector {
    /**
     * Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  The key of the secret to select from.  Must be a valid secret key.
     */
    key?: string | null;
    /**
     * This field should not be used directly as it is meant to be inlined directly into the message. Use the &quot;name&quot; field instead.
     */
    localObjectReference?: Schema$LocalObjectReference;
    /**
     * Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  The name of the secret in the pod&#39;s namespace to select from.
     */
    name?: string | null;
    /**
     * (Optional)  Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  Specify whether the Secret or its key must be defined
     */
    optional?: boolean | null;
  }
  /**
   * Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  The contents of the target Secret&#39;s Data field will be presented in a volume as files using the keys in the Data field as the file names.
   */
  export interface Schema$SecretVolumeSource {
    /**
     * (Optional)  Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  Mode bits to use on created files by default. Must be a value between 0 and 0777. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
     */
    defaultMode?: number | null;
    /**
     * (Optional)  Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional.
     */
    items?: Schema$KeyToPath[];
    /**
     * (Optional)  Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  Specify whether the Secret or its keys must be defined.
     */
    optional?: boolean | null;
    /**
     * Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  Name of the secret in the container&#39;s namespace to use.
     */
    secretName?: string | null;
  }
  /**
   * Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  SecurityContext holds security configuration that will be applied to a container. Some fields are present in both SecurityContext and PodSecurityContext.  When both are set, the values in SecurityContext take precedence.
   */
  export interface Schema$SecurityContext {
    /**
     * (Optional)  Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
     */
    runAsUser?: number | null;
  }
  /**
   * Service acts as a top-level container that manages a set of Routes and Configurations which implement a network service. Service exists to provide a singular abstraction which can be access controlled, reasoned about, and which encapsulates software lifecycle decisions such as rollout policy and team resource ownership. Service acts only as an orchestrator of the underlying Routes and Configurations (much as a kubernetes Deployment orchestrates ReplicaSets).  The Service&#39;s controller will track the statuses of its owned Configuration and Route, reflecting their statuses and conditions as its own.  See also: https://github.com/knative/serving/blob/master/docs/spec/overview.md#service
   */
  export interface Schema$Service {
    /**
     * The API version for this call such as &quot;serving.knative.dev/v1&quot;.
     */
    apiVersion?: string | null;
    /**
     * The kind of resource, in this case &quot;Service&quot;.
     */
    kind?: string | null;
    /**
     * Metadata associated with this Service, including name, namespace, labels, and annotations.
     */
    metadata?: Schema$ObjectMeta;
    /**
     * Spec holds the desired state of the Service (from the client).
     */
    spec?: Schema$ServiceSpec;
    /**
     * Status communicates the observed state of the Service (from the controller).
     */
    status?: Schema$ServiceStatus;
  }
  /**
   * ServiceSpec holds the desired state of the Route (from the client), which is used to manipulate the underlying Route and Configuration(s).
   */
  export interface Schema$ServiceSpec {
    /**
     * Template holds the latest specification for the Revision to be stamped out.
     */
    template?: Schema$RevisionTemplate;
    /**
     * Traffic specifies how to distribute traffic over a collection of Knative Revisions and Configurations.
     */
    traffic?: Schema$TrafficTarget[];
  }
  /**
   * The current state of the Service. Output only.
   */
  export interface Schema$ServiceStatus {
    /**
     * From RouteStatus. Similar to url, information on where the service is available on HTTP.
     */
    address?: Schema$Addressable;
    /**
     * Conditions communicates information about ongoing/complete reconciliation processes that bring the &quot;spec&quot; inline with the observed state of the world. Service-specific conditions include: * &quot;ConfigurationsReady&quot;: true when the underlying Configuration is ready. * &quot;RoutesReady&quot;: true when the underlying Route is ready. * &quot;Ready&quot;: true when both the underlying Route and Configuration are ready.
     */
    conditions?: Schema$GoogleCloudRunV1Condition[];
    /**
     * From ConfigurationStatus. LatestCreatedRevisionName is the last revision that was created from this Service&#39;s Configuration. It might not be ready yet, for that use LatestReadyRevisionName.
     */
    latestCreatedRevisionName?: string | null;
    /**
     * From ConfigurationStatus. LatestReadyRevisionName holds the name of the latest Revision stamped out from this Service&#39;s Configuration that has had its &quot;Ready&quot; condition become &quot;True&quot;.
     */
    latestReadyRevisionName?: string | null;
    /**
     * ObservedGeneration is the &#39;Generation&#39; of the Route that was last processed by the controller.  Clients polling for completed reconciliation should poll until observedGeneration = metadata.generation and the Ready condition&#39;s status is True or False.
     */
    observedGeneration?: number | null;
    /**
     * From RouteStatus. Traffic holds the configured traffic distribution. These entries will always contain RevisionName references. When ConfigurationName appears in the spec, this will hold the LatestReadyRevisionName that we last observed.
     */
    traffic?: Schema$TrafficTarget[];
    /**
     * From RouteStatus. URL holds the url that will distribute traffic over the provided traffic targets. It generally has the form https://{route-hash}-{project-hash}-{cluster-level-suffix}.a.run.app
     */
    url?: string | null;
  }
  /**
   * Request message for `SetIamPolicy` method.
   */
  export interface Schema$SetIamPolicyRequest {
    /**
     * REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Cloud Platform services (such as Projects) might reject them.
     */
    policy?: Schema$Policy;
    /**
     * OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: paths: &quot;bindings, etag&quot; This field is only used by Cloud IAM.
     */
    updateMask?: string | null;
  }
  /**
   * Status is a return value for calls that don&#39;t return other objects
   */
  export interface Schema$Status {
    /**
     * Suggested HTTP return code for this status, 0 if not set. +optional
     */
    code?: number | null;
    /**
     * Extended data associated with the reason.  Each reason may define its own extended details. This field is optional and the data returned is not guaranteed to conform to any schema except that defined by the reason type. +optional
     */
    details?: Schema$StatusDetails;
    /**
     * A human-readable description of the status of this operation. +optional
     */
    message?: string | null;
    /**
     * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds +optional
     */
    metadata?: Schema$ListMeta;
    /**
     * A machine-readable description of why this operation is in the &quot;Failure&quot; status. If this value is empty there is no information available. A Reason clarifies an HTTP status code but does not override it. +optional
     */
    reason?: string | null;
    /**
     * Status of the operation. One of: &quot;Success&quot; or &quot;Failure&quot;. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status +optional
     */
    status?: string | null;
  }
  /**
   * StatusCause provides more information about an api.Status failure, including cases when multiple errors are encountered.
   */
  export interface Schema$StatusCause {
    /**
     * The field of the resource that has caused this error, as named by its JSON serialization. May include dot and postfix notation for nested attributes. Arrays are zero-indexed.  Fields may appear more than once in an array of causes due to fields having multiple errors. Optional.  Examples:   &quot;name&quot; - the field &quot;name&quot; on the current resource   &quot;items[0].name&quot; - the field &quot;name&quot; on the first array entry in &quot;items&quot; +optional
     */
    field?: string | null;
    /**
     * A human-readable description of the cause of the error.  This field may be presented as-is to a reader. +optional
     */
    message?: string | null;
    /**
     * A machine-readable description of the cause of the error. If this value is empty there is no information available. +optional
     */
    reason?: string | null;
  }
  /**
   * StatusDetails is a set of additional properties that MAY be set by the server to provide additional information about a response. The Reason field of a Status object defines what attributes will be set. Clients must ignore fields that do not match the defined type of each attribute, and should assume that any attribute may be empty, invalid, or under defined.
   */
  export interface Schema$StatusDetails {
    /**
     * The Causes array includes more details associated with the StatusReason failure. Not all StatusReasons may provide detailed causes. +optional
     */
    causes?: Schema$StatusCause[];
    /**
     * The group attribute of the resource associated with the status StatusReason. +optional
     */
    group?: string | null;
    /**
     * The kind attribute of the resource associated with the status StatusReason. On some operations may differ from the requested resource Kind. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds +optional
     */
    kind?: string | null;
    /**
     * The name attribute of the resource associated with the status StatusReason (when there is a single name which can be described). +optional
     */
    name?: string | null;
    /**
     * If specified, the time in seconds before the operation should be retried. Some errors may indicate the client must take an alternate action - for those errors this field may indicate how long to wait before taking the alternate action. +optional
     */
    retryAfterSeconds?: number | null;
    /**
     * UID of the resource. (when there is a single resource which can be described). More info: http://kubernetes.io/docs/user-guide/identifiers#uids +optional
     */
    uid?: string | null;
  }
  /**
   * Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  TCPSocketAction describes an action based on opening a socket
   */
  export interface Schema$TCPSocketAction {
    /**
     * (Optional)  Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  Optional: Host name to connect to, defaults to the pod IP.
     */
    host?: string | null;
    /**
     * Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
     */
    port?: Schema$IntOrString;
  }
  /**
   * Request message for `TestIamPermissions` method.
   */
  export interface Schema$TestIamPermissionsRequest {
    /**
     * The set of permissions to check for the `resource`. Permissions with wildcards (such as &#39;*&#39; or &#39;storage.*&#39;) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
     */
    permissions?: string[] | null;
  }
  /**
   * Response message for `TestIamPermissions` method.
   */
  export interface Schema$TestIamPermissionsResponse {
    /**
     * A subset of `TestPermissionsRequest.permissions` that the caller is allowed.
     */
    permissions?: string[] | null;
  }
  /**
   * TrafficTarget holds a single entry of the routing table for a Route.
   */
  export interface Schema$TrafficTarget {
    /**
     * ConfigurationName of a configuration to whose latest revision we will send this portion of traffic. When the &quot;status.latestReadyRevisionName&quot; of the referenced configuration changes, we will automatically migrate traffic from the prior &quot;latest ready&quot; revision to the new one. This field is never set in Route&#39;s status, only its spec. This is mutually exclusive with RevisionName.  Cloud Run currently supports a single ConfigurationName.
     */
    configurationName?: string | null;
    /**
     * LatestRevision may be optionally provided to indicate that the latest ready Revision of the Configuration should be used for this traffic target. When provided LatestRevision must be true if RevisionName is empty; it must be false when RevisionName is non-empty.  +optional
     */
    latestRevision?: boolean | null;
    /**
     * Percent specifies percent of the traffic to this Revision or Configuration. This defaults to zero if unspecified.  Cloud Run currently requires 100 percent for a single ConfigurationName TrafficTarget entry.
     */
    percent?: number | null;
    /**
     * RevisionName of a specific revision to which to send this portion of traffic. This is mutually exclusive with ConfigurationName.  Providing RevisionName in spec is not currently supported by Cloud Run.
     */
    revisionName?: string | null;
    /**
     * Tag is optionally used to expose a dedicated url for referencing this target exclusively.  Not currently supported in Cloud Run. +optional
     */
    tag?: string | null;
    /**
     * Output only. URL displays the URL for accessing tagged traffic targets. URL is displayed in status, and is disallowed on spec. URL must contain a scheme (e.g. http://) and a hostname, but may not contain anything else (e.g. basic auth, url path, etc.  Not currently supported in Cloud Run.
     */
    url?: string | null;
  }
  /**
   * Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  Volume represents a named volume in a container.
   */
  export interface Schema$Volume {
    /**
     * Cloud Run fully managed: not supported  Cloud Run for Anthos: supported
     */
    configMap?: Schema$ConfigMapVolumeSource;
    /**
     * Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  Volume&#39;s name.
     */
    name?: string | null;
    /**
     * Cloud Run fully managed: not supported  Cloud Run for Anthos: supported
     */
    secret?: Schema$SecretVolumeSource;
  }
  /**
   * Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  VolumeMount describes a mounting of a Volume within a container.
   */
  export interface Schema$VolumeMount {
    /**
     * Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  Path within the container at which the volume should be mounted.  Must not contain &#39;:&#39;.
     */
    mountPath?: string | null;
    /**
     * Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  This must match the Name of a Volume.
     */
    name?: string | null;
    /**
     * (Optional)  Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  Only true is accepted. Defaults to true.
     */
    readOnly?: boolean | null;
    /**
     * (Optional)  Cloud Run fully managed: not supported  Cloud Run for Anthos: supported  Path within the volume from which the container&#39;s volume should be mounted. Defaults to &quot;&quot; (volume&#39;s root).
     */
    subPath?: string | null;
  }

  export class Resource$Namespaces {
    context: APIRequestContext;
    authorizeddomains: Resource$Namespaces$Authorizeddomains;
    autodomainmappings: Resource$Namespaces$Autodomainmappings;
    configurations: Resource$Namespaces$Configurations;
    domainmappings: Resource$Namespaces$Domainmappings;
    revisions: Resource$Namespaces$Revisions;
    routes: Resource$Namespaces$Routes;
    services: Resource$Namespaces$Services;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.authorizeddomains = new Resource$Namespaces$Authorizeddomains(
        this.context
      );
      this.autodomainmappings = new Resource$Namespaces$Autodomainmappings(
        this.context
      );
      this.configurations = new Resource$Namespaces$Configurations(
        this.context
      );
      this.domainmappings = new Resource$Namespaces$Domainmappings(
        this.context
      );
      this.revisions = new Resource$Namespaces$Revisions(this.context);
      this.routes = new Resource$Namespaces$Routes(this.context);
      this.services = new Resource$Namespaces$Services(this.context);
    }
  }

  export class Resource$Namespaces$Authorizeddomains {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * run.namespaces.authorizeddomains.list
     * @desc List authorized domains.
     * @alias run.namespaces.authorizeddomains.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Maximum results to return per page.
     * @param {string=} params.pageToken Continuation token for fetching the next page of results.
     * @param {string} params.parent Name of the parent Application resource. Example: `apps/myapp`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Namespaces$Authorizeddomains$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListAuthorizedDomainsResponse>;
    list(
      params: Params$Resource$Namespaces$Authorizeddomains$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListAuthorizedDomainsResponse>,
      callback: BodyResponseCallback<Schema$ListAuthorizedDomainsResponse>
    ): void;
    list(
      params: Params$Resource$Namespaces$Authorizeddomains$List,
      callback: BodyResponseCallback<Schema$ListAuthorizedDomainsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListAuthorizedDomainsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Namespaces$Authorizeddomains$List
        | BodyResponseCallback<Schema$ListAuthorizedDomainsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListAuthorizedDomainsResponse>,
      callback?: BodyResponseCallback<Schema$ListAuthorizedDomainsResponse>
    ): void | GaxiosPromise<Schema$ListAuthorizedDomainsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Namespaces$Authorizeddomains$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Namespaces$Authorizeddomains$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/apis/domains.cloudrun.com/v1/{+parent}/authorizeddomains'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListAuthorizedDomainsResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$ListAuthorizedDomainsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Namespaces$Authorizeddomains$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Maximum results to return per page.
     */
    pageSize?: number;
    /**
     * Continuation token for fetching the next page of results.
     */
    pageToken?: string;
    /**
     * Name of the parent Application resource. Example: `apps/myapp`.
     */
    parent?: string;
  }

  export class Resource$Namespaces$Autodomainmappings {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * run.namespaces.autodomainmappings.create
     * @desc Creates a new auto domain mapping.
     * @alias run.namespaces.autodomainmappings.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent The project ID or project number in which this auto domain mapping should be created.
     * @param {().AutoDomainMapping} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Namespaces$Autodomainmappings$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AutoDomainMapping>;
    create(
      params: Params$Resource$Namespaces$Autodomainmappings$Create,
      options: MethodOptions | BodyResponseCallback<Schema$AutoDomainMapping>,
      callback: BodyResponseCallback<Schema$AutoDomainMapping>
    ): void;
    create(
      params: Params$Resource$Namespaces$Autodomainmappings$Create,
      callback: BodyResponseCallback<Schema$AutoDomainMapping>
    ): void;
    create(callback: BodyResponseCallback<Schema$AutoDomainMapping>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Namespaces$Autodomainmappings$Create
        | BodyResponseCallback<Schema$AutoDomainMapping>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$AutoDomainMapping>,
      callback?: BodyResponseCallback<Schema$AutoDomainMapping>
    ): void | GaxiosPromise<Schema$AutoDomainMapping> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Namespaces$Autodomainmappings$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Namespaces$Autodomainmappings$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/apis/domains.cloudrun.com/v1/{+parent}/autodomainmappings'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AutoDomainMapping>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AutoDomainMapping>(parameters);
      }
    }

    /**
     * run.namespaces.autodomainmappings.delete
     * @desc Delete an auto domain mapping.
     * @alias run.namespaces.autodomainmappings.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.apiVersion Cloud Run currently ignores this parameter.
     * @param {string=} params.kind Cloud Run currently ignores this parameter.
     * @param {string} params.name The name of the auto domain mapping being deleted. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     * @param {string=} params.propagationPolicy Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background. Please see kubernetes.io/docs/concepts/workloads/controllers/garbage-collection/ for more information.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Namespaces$Autodomainmappings$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Status>;
    delete(
      params: Params$Resource$Namespaces$Autodomainmappings$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Status>,
      callback: BodyResponseCallback<Schema$Status>
    ): void;
    delete(
      params: Params$Resource$Namespaces$Autodomainmappings$Delete,
      callback: BodyResponseCallback<Schema$Status>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Status>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Namespaces$Autodomainmappings$Delete
        | BodyResponseCallback<Schema$Status>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Status>,
      callback?: BodyResponseCallback<Schema$Status>
    ): void | GaxiosPromise<Schema$Status> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Namespaces$Autodomainmappings$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Namespaces$Autodomainmappings$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/apis/domains.cloudrun.com/v1/{+name}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Status>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Status>(parameters);
      }
    }

    /**
     * run.namespaces.autodomainmappings.get
     * @desc Get information about an auto domain mapping.
     * @alias run.namespaces.autodomainmappings.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the auto domain mapping being retrieved. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Namespaces$Autodomainmappings$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AutoDomainMapping>;
    get(
      params: Params$Resource$Namespaces$Autodomainmappings$Get,
      options: MethodOptions | BodyResponseCallback<Schema$AutoDomainMapping>,
      callback: BodyResponseCallback<Schema$AutoDomainMapping>
    ): void;
    get(
      params: Params$Resource$Namespaces$Autodomainmappings$Get,
      callback: BodyResponseCallback<Schema$AutoDomainMapping>
    ): void;
    get(callback: BodyResponseCallback<Schema$AutoDomainMapping>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Namespaces$Autodomainmappings$Get
        | BodyResponseCallback<Schema$AutoDomainMapping>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$AutoDomainMapping>,
      callback?: BodyResponseCallback<Schema$AutoDomainMapping>
    ): void | GaxiosPromise<Schema$AutoDomainMapping> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Namespaces$Autodomainmappings$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Namespaces$Autodomainmappings$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/apis/domains.cloudrun.com/v1/{+name}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AutoDomainMapping>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AutoDomainMapping>(parameters);
      }
    }

    /**
     * run.namespaces.autodomainmappings.list
     * @desc List auto domain mappings.
     * @alias run.namespaces.autodomainmappings.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.continue Optional encoded string to continue paging.
     * @param {string=} params.fieldSelector Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
     * @param {boolean=} params.includeUninitialized Not currently used by Cloud Run.
     * @param {string=} params.labelSelector Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     * @param {integer=} params.limit The maximum number of records that should be returned.
     * @param {string} params.parent The project ID or project number from which the auto domain mappings should be listed.
     * @param {string=} params.resourceVersion The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
     * @param {boolean=} params.watch Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Namespaces$Autodomainmappings$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListAutoDomainMappingsResponse>;
    list(
      params: Params$Resource$Namespaces$Autodomainmappings$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListAutoDomainMappingsResponse>,
      callback: BodyResponseCallback<Schema$ListAutoDomainMappingsResponse>
    ): void;
    list(
      params: Params$Resource$Namespaces$Autodomainmappings$List,
      callback: BodyResponseCallback<Schema$ListAutoDomainMappingsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListAutoDomainMappingsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Namespaces$Autodomainmappings$List
        | BodyResponseCallback<Schema$ListAutoDomainMappingsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListAutoDomainMappingsResponse>,
      callback?: BodyResponseCallback<Schema$ListAutoDomainMappingsResponse>
    ): void | GaxiosPromise<Schema$ListAutoDomainMappingsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Namespaces$Autodomainmappings$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Namespaces$Autodomainmappings$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/apis/domains.cloudrun.com/v1/{+parent}/autodomainmappings'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListAutoDomainMappingsResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$ListAutoDomainMappingsResponse>(
          parameters
        );
      }
    }

    /**
     * run.namespaces.autodomainmappings.replaceAutoDomainMapping
     * @desc Replace an auto domain mapping.  Only the spec and metadata labels and annotations are modifiable. After the Update request, Cloud Run will work to make the 'status' match the requested 'spec'.  May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control.
     * @alias run.namespaces.autodomainmappings.replaceAutoDomainMapping
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the auto domain mapping being retrieved. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     * @param {().AutoDomainMapping} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    replaceAutoDomainMapping(
      params?: Params$Resource$Namespaces$Autodomainmappings$Replaceautodomainmapping,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AutoDomainMapping>;
    replaceAutoDomainMapping(
      params: Params$Resource$Namespaces$Autodomainmappings$Replaceautodomainmapping,
      options: MethodOptions | BodyResponseCallback<Schema$AutoDomainMapping>,
      callback: BodyResponseCallback<Schema$AutoDomainMapping>
    ): void;
    replaceAutoDomainMapping(
      params: Params$Resource$Namespaces$Autodomainmappings$Replaceautodomainmapping,
      callback: BodyResponseCallback<Schema$AutoDomainMapping>
    ): void;
    replaceAutoDomainMapping(
      callback: BodyResponseCallback<Schema$AutoDomainMapping>
    ): void;
    replaceAutoDomainMapping(
      paramsOrCallback?:
        | Params$Resource$Namespaces$Autodomainmappings$Replaceautodomainmapping
        | BodyResponseCallback<Schema$AutoDomainMapping>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$AutoDomainMapping>,
      callback?: BodyResponseCallback<Schema$AutoDomainMapping>
    ): void | GaxiosPromise<Schema$AutoDomainMapping> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Namespaces$Autodomainmappings$Replaceautodomainmapping;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Namespaces$Autodomainmappings$Replaceautodomainmapping;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/apis/domains.cloudrun.com/v1/{+name}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AutoDomainMapping>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AutoDomainMapping>(parameters);
      }
    }
  }

  export interface Params$Resource$Namespaces$Autodomainmappings$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The project ID or project number in which this auto domain mapping should be created.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AutoDomainMapping;
  }
  export interface Params$Resource$Namespaces$Autodomainmappings$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Cloud Run currently ignores this parameter.
     */
    apiVersion?: string;
    /**
     * Cloud Run currently ignores this parameter.
     */
    kind?: string;
    /**
     * The name of the auto domain mapping being deleted. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     */
    name?: string;
    /**
     * Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background. Please see kubernetes.io/docs/concepts/workloads/controllers/garbage-collection/ for more information.
     */
    propagationPolicy?: string;
  }
  export interface Params$Resource$Namespaces$Autodomainmappings$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the auto domain mapping being retrieved. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     */
    name?: string;
  }
  export interface Params$Resource$Namespaces$Autodomainmappings$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional encoded string to continue paging.
     */
    continue?: string;
    /**
     * Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
     */
    fieldSelector?: string;
    /**
     * Not currently used by Cloud Run.
     */
    includeUninitialized?: boolean;
    /**
     * Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     */
    labelSelector?: string;
    /**
     * The maximum number of records that should be returned.
     */
    limit?: number;
    /**
     * The project ID or project number from which the auto domain mappings should be listed.
     */
    parent?: string;
    /**
     * The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
     */
    resourceVersion?: string;
    /**
     * Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
     */
    watch?: boolean;
  }
  export interface Params$Resource$Namespaces$Autodomainmappings$Replaceautodomainmapping
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the auto domain mapping being retrieved. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AutoDomainMapping;
  }

  export class Resource$Namespaces$Configurations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * run.namespaces.configurations.create
     * @desc Create a configuration.
     * @alias run.namespaces.configurations.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent The namespace in which the configuration should be created. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     * @param {().Configuration} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Namespaces$Configurations$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Configuration>;
    create(
      params: Params$Resource$Namespaces$Configurations$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Configuration>,
      callback: BodyResponseCallback<Schema$Configuration>
    ): void;
    create(
      params: Params$Resource$Namespaces$Configurations$Create,
      callback: BodyResponseCallback<Schema$Configuration>
    ): void;
    create(callback: BodyResponseCallback<Schema$Configuration>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Namespaces$Configurations$Create
        | BodyResponseCallback<Schema$Configuration>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Configuration>,
      callback?: BodyResponseCallback<Schema$Configuration>
    ): void | GaxiosPromise<Schema$Configuration> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Namespaces$Configurations$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Namespaces$Configurations$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/apis/serving.knative.dev/v1/{+parent}/configurations'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Configuration>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Configuration>(parameters);
      }
    }

    /**
     * run.namespaces.configurations.delete
     * @desc delete a configuration. This will cause the configuration to delete all child revisions. Prior to calling this, any route referencing the configuration (or revision from the configuration) must be deleted.
     * @alias run.namespaces.configurations.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.apiVersion Cloud Run currently ignores this parameter.
     * @param {string=} params.kind Cloud Run currently ignores this parameter.
     * @param {string} params.name The name of the configuration to delete. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     * @param {string=} params.propagationPolicy Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background. Please see kubernetes.io/docs/concepts/workloads/controllers/garbage-collection/ for more information.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Namespaces$Configurations$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Status>;
    delete(
      params: Params$Resource$Namespaces$Configurations$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Status>,
      callback: BodyResponseCallback<Schema$Status>
    ): void;
    delete(
      params: Params$Resource$Namespaces$Configurations$Delete,
      callback: BodyResponseCallback<Schema$Status>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Status>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Namespaces$Configurations$Delete
        | BodyResponseCallback<Schema$Status>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Status>,
      callback?: BodyResponseCallback<Schema$Status>
    ): void | GaxiosPromise<Schema$Status> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Namespaces$Configurations$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Namespaces$Configurations$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/apis/serving.knative.dev/v1/{+name}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Status>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Status>(parameters);
      }
    }

    /**
     * run.namespaces.configurations.get
     * @desc Get information about a configuration.
     * @alias run.namespaces.configurations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the configuration to retrieve. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Namespaces$Configurations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Configuration>;
    get(
      params: Params$Resource$Namespaces$Configurations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Configuration>,
      callback: BodyResponseCallback<Schema$Configuration>
    ): void;
    get(
      params: Params$Resource$Namespaces$Configurations$Get,
      callback: BodyResponseCallback<Schema$Configuration>
    ): void;
    get(callback: BodyResponseCallback<Schema$Configuration>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Namespaces$Configurations$Get
        | BodyResponseCallback<Schema$Configuration>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Configuration>,
      callback?: BodyResponseCallback<Schema$Configuration>
    ): void | GaxiosPromise<Schema$Configuration> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Namespaces$Configurations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Namespaces$Configurations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/apis/serving.knative.dev/v1/{+name}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Configuration>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Configuration>(parameters);
      }
    }

    /**
     * run.namespaces.configurations.list
     * @desc List configurations.
     * @alias run.namespaces.configurations.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.continue Optional encoded string to continue paging.
     * @param {string=} params.fieldSelector Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
     * @param {boolean=} params.includeUninitialized Not currently used by Cloud Run.
     * @param {string=} params.labelSelector Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     * @param {integer=} params.limit The maximum number of records that should be returned.
     * @param {string} params.parent The namespace from which the configurations should be listed. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     * @param {string=} params.resourceVersion The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
     * @param {boolean=} params.watch Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Namespaces$Configurations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListConfigurationsResponse>;
    list(
      params: Params$Resource$Namespaces$Configurations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListConfigurationsResponse>,
      callback: BodyResponseCallback<Schema$ListConfigurationsResponse>
    ): void;
    list(
      params: Params$Resource$Namespaces$Configurations$List,
      callback: BodyResponseCallback<Schema$ListConfigurationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListConfigurationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Namespaces$Configurations$List
        | BodyResponseCallback<Schema$ListConfigurationsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListConfigurationsResponse>,
      callback?: BodyResponseCallback<Schema$ListConfigurationsResponse>
    ): void | GaxiosPromise<Schema$ListConfigurationsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Namespaces$Configurations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Namespaces$Configurations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/apis/serving.knative.dev/v1/{+parent}/configurations'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListConfigurationsResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$ListConfigurationsResponse>(parameters);
      }
    }

    /**
     * run.namespaces.configurations.replaceConfiguration
     * @desc Replace a configuration.  Only the spec and metadata labels and annotations are modifiable. After the Update request, Cloud Run will work to make the 'status' match the requested 'spec'.  May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control.
     * @alias run.namespaces.configurations.replaceConfiguration
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the configuration being replaced. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     * @param {().Configuration} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    replaceConfiguration(
      params?: Params$Resource$Namespaces$Configurations$Replaceconfiguration,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Configuration>;
    replaceConfiguration(
      params: Params$Resource$Namespaces$Configurations$Replaceconfiguration,
      options: MethodOptions | BodyResponseCallback<Schema$Configuration>,
      callback: BodyResponseCallback<Schema$Configuration>
    ): void;
    replaceConfiguration(
      params: Params$Resource$Namespaces$Configurations$Replaceconfiguration,
      callback: BodyResponseCallback<Schema$Configuration>
    ): void;
    replaceConfiguration(
      callback: BodyResponseCallback<Schema$Configuration>
    ): void;
    replaceConfiguration(
      paramsOrCallback?:
        | Params$Resource$Namespaces$Configurations$Replaceconfiguration
        | BodyResponseCallback<Schema$Configuration>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Configuration>,
      callback?: BodyResponseCallback<Schema$Configuration>
    ): void | GaxiosPromise<Schema$Configuration> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Namespaces$Configurations$Replaceconfiguration;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Namespaces$Configurations$Replaceconfiguration;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/apis/serving.knative.dev/v1/{+name}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Configuration>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Configuration>(parameters);
      }
    }
  }

  export interface Params$Resource$Namespaces$Configurations$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The namespace in which the configuration should be created. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Configuration;
  }
  export interface Params$Resource$Namespaces$Configurations$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Cloud Run currently ignores this parameter.
     */
    apiVersion?: string;
    /**
     * Cloud Run currently ignores this parameter.
     */
    kind?: string;
    /**
     * The name of the configuration to delete. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     */
    name?: string;
    /**
     * Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background. Please see kubernetes.io/docs/concepts/workloads/controllers/garbage-collection/ for more information.
     */
    propagationPolicy?: string;
  }
  export interface Params$Resource$Namespaces$Configurations$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the configuration to retrieve. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     */
    name?: string;
  }
  export interface Params$Resource$Namespaces$Configurations$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional encoded string to continue paging.
     */
    continue?: string;
    /**
     * Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
     */
    fieldSelector?: string;
    /**
     * Not currently used by Cloud Run.
     */
    includeUninitialized?: boolean;
    /**
     * Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     */
    labelSelector?: string;
    /**
     * The maximum number of records that should be returned.
     */
    limit?: number;
    /**
     * The namespace from which the configurations should be listed. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     */
    parent?: string;
    /**
     * The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
     */
    resourceVersion?: string;
    /**
     * Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
     */
    watch?: boolean;
  }
  export interface Params$Resource$Namespaces$Configurations$Replaceconfiguration
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the configuration being replaced. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Configuration;
  }

  export class Resource$Namespaces$Domainmappings {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * run.namespaces.domainmappings.create
     * @desc Create a new domain mapping.
     * @alias run.namespaces.domainmappings.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent The namespace in which the domain mapping should be created. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     * @param {().DomainMapping} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Namespaces$Domainmappings$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DomainMapping>;
    create(
      params: Params$Resource$Namespaces$Domainmappings$Create,
      options: MethodOptions | BodyResponseCallback<Schema$DomainMapping>,
      callback: BodyResponseCallback<Schema$DomainMapping>
    ): void;
    create(
      params: Params$Resource$Namespaces$Domainmappings$Create,
      callback: BodyResponseCallback<Schema$DomainMapping>
    ): void;
    create(callback: BodyResponseCallback<Schema$DomainMapping>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Namespaces$Domainmappings$Create
        | BodyResponseCallback<Schema$DomainMapping>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$DomainMapping>,
      callback?: BodyResponseCallback<Schema$DomainMapping>
    ): void | GaxiosPromise<Schema$DomainMapping> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Namespaces$Domainmappings$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Namespaces$Domainmappings$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/apis/domains.cloudrun.com/v1/{+parent}/domainmappings'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$DomainMapping>(parameters, callback);
      } else {
        return createAPIRequest<Schema$DomainMapping>(parameters);
      }
    }

    /**
     * run.namespaces.domainmappings.delete
     * @desc Delete a domain mapping.
     * @alias run.namespaces.domainmappings.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.apiVersion Cloud Run currently ignores this parameter.
     * @param {string=} params.kind Cloud Run currently ignores this parameter.
     * @param {string} params.name The name of the domain mapping to delete. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     * @param {string=} params.propagationPolicy Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background. Please see kubernetes.io/docs/concepts/workloads/controllers/garbage-collection/ for more information.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Namespaces$Domainmappings$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Status>;
    delete(
      params: Params$Resource$Namespaces$Domainmappings$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Status>,
      callback: BodyResponseCallback<Schema$Status>
    ): void;
    delete(
      params: Params$Resource$Namespaces$Domainmappings$Delete,
      callback: BodyResponseCallback<Schema$Status>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Status>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Namespaces$Domainmappings$Delete
        | BodyResponseCallback<Schema$Status>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Status>,
      callback?: BodyResponseCallback<Schema$Status>
    ): void | GaxiosPromise<Schema$Status> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Namespaces$Domainmappings$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Namespaces$Domainmappings$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/apis/domains.cloudrun.com/v1/{+name}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Status>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Status>(parameters);
      }
    }

    /**
     * run.namespaces.domainmappings.get
     * @desc Get information about a domain mapping.
     * @alias run.namespaces.domainmappings.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the domain mapping to retrieve. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Namespaces$Domainmappings$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DomainMapping>;
    get(
      params: Params$Resource$Namespaces$Domainmappings$Get,
      options: MethodOptions | BodyResponseCallback<Schema$DomainMapping>,
      callback: BodyResponseCallback<Schema$DomainMapping>
    ): void;
    get(
      params: Params$Resource$Namespaces$Domainmappings$Get,
      callback: BodyResponseCallback<Schema$DomainMapping>
    ): void;
    get(callback: BodyResponseCallback<Schema$DomainMapping>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Namespaces$Domainmappings$Get
        | BodyResponseCallback<Schema$DomainMapping>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$DomainMapping>,
      callback?: BodyResponseCallback<Schema$DomainMapping>
    ): void | GaxiosPromise<Schema$DomainMapping> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Namespaces$Domainmappings$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Namespaces$Domainmappings$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/apis/domains.cloudrun.com/v1/{+name}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$DomainMapping>(parameters, callback);
      } else {
        return createAPIRequest<Schema$DomainMapping>(parameters);
      }
    }

    /**
     * run.namespaces.domainmappings.list
     * @desc List domain mappings.
     * @alias run.namespaces.domainmappings.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.continue Optional encoded string to continue paging.
     * @param {string=} params.fieldSelector Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
     * @param {boolean=} params.includeUninitialized Not currently used by Cloud Run.
     * @param {string=} params.labelSelector Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     * @param {integer=} params.limit The maximum number of records that should be returned.
     * @param {string} params.parent The namespace from which the domain mappings should be listed. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     * @param {string=} params.resourceVersion The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
     * @param {boolean=} params.watch Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Namespaces$Domainmappings$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListDomainMappingsResponse>;
    list(
      params: Params$Resource$Namespaces$Domainmappings$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListDomainMappingsResponse>,
      callback: BodyResponseCallback<Schema$ListDomainMappingsResponse>
    ): void;
    list(
      params: Params$Resource$Namespaces$Domainmappings$List,
      callback: BodyResponseCallback<Schema$ListDomainMappingsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListDomainMappingsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Namespaces$Domainmappings$List
        | BodyResponseCallback<Schema$ListDomainMappingsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListDomainMappingsResponse>,
      callback?: BodyResponseCallback<Schema$ListDomainMappingsResponse>
    ): void | GaxiosPromise<Schema$ListDomainMappingsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Namespaces$Domainmappings$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Namespaces$Domainmappings$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/apis/domains.cloudrun.com/v1/{+parent}/domainmappings'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListDomainMappingsResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$ListDomainMappingsResponse>(parameters);
      }
    }

    /**
     * run.namespaces.domainmappings.replaceDomainMapping
     * @desc Replace a domain mapping.  Only the spec and metadata labels and annotations are modifiable. After the Update request, Cloud Run will work to make the 'status' match the requested 'spec'.  May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control.
     * @alias run.namespaces.domainmappings.replaceDomainMapping
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the domain mapping being retrieved. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     * @param {().DomainMapping} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    replaceDomainMapping(
      params?: Params$Resource$Namespaces$Domainmappings$Replacedomainmapping,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DomainMapping>;
    replaceDomainMapping(
      params: Params$Resource$Namespaces$Domainmappings$Replacedomainmapping,
      options: MethodOptions | BodyResponseCallback<Schema$DomainMapping>,
      callback: BodyResponseCallback<Schema$DomainMapping>
    ): void;
    replaceDomainMapping(
      params: Params$Resource$Namespaces$Domainmappings$Replacedomainmapping,
      callback: BodyResponseCallback<Schema$DomainMapping>
    ): void;
    replaceDomainMapping(
      callback: BodyResponseCallback<Schema$DomainMapping>
    ): void;
    replaceDomainMapping(
      paramsOrCallback?:
        | Params$Resource$Namespaces$Domainmappings$Replacedomainmapping
        | BodyResponseCallback<Schema$DomainMapping>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$DomainMapping>,
      callback?: BodyResponseCallback<Schema$DomainMapping>
    ): void | GaxiosPromise<Schema$DomainMapping> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Namespaces$Domainmappings$Replacedomainmapping;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Namespaces$Domainmappings$Replacedomainmapping;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/apis/domains.cloudrun.com/v1/{+name}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$DomainMapping>(parameters, callback);
      } else {
        return createAPIRequest<Schema$DomainMapping>(parameters);
      }
    }
  }

  export interface Params$Resource$Namespaces$Domainmappings$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The namespace in which the domain mapping should be created. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DomainMapping;
  }
  export interface Params$Resource$Namespaces$Domainmappings$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Cloud Run currently ignores this parameter.
     */
    apiVersion?: string;
    /**
     * Cloud Run currently ignores this parameter.
     */
    kind?: string;
    /**
     * The name of the domain mapping to delete. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     */
    name?: string;
    /**
     * Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background. Please see kubernetes.io/docs/concepts/workloads/controllers/garbage-collection/ for more information.
     */
    propagationPolicy?: string;
  }
  export interface Params$Resource$Namespaces$Domainmappings$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the domain mapping to retrieve. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     */
    name?: string;
  }
  export interface Params$Resource$Namespaces$Domainmappings$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional encoded string to continue paging.
     */
    continue?: string;
    /**
     * Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
     */
    fieldSelector?: string;
    /**
     * Not currently used by Cloud Run.
     */
    includeUninitialized?: boolean;
    /**
     * Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     */
    labelSelector?: string;
    /**
     * The maximum number of records that should be returned.
     */
    limit?: number;
    /**
     * The namespace from which the domain mappings should be listed. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     */
    parent?: string;
    /**
     * The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
     */
    resourceVersion?: string;
    /**
     * Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
     */
    watch?: boolean;
  }
  export interface Params$Resource$Namespaces$Domainmappings$Replacedomainmapping
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the domain mapping being retrieved. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DomainMapping;
  }

  export class Resource$Namespaces$Revisions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * run.namespaces.revisions.delete
     * @desc Delete a revision.
     * @alias run.namespaces.revisions.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.apiVersion Cloud Run currently ignores this parameter.
     * @param {string=} params.kind Cloud Run currently ignores this parameter.
     * @param {string} params.name The name of the revision to delete. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     * @param {string=} params.propagationPolicy Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background. Please see kubernetes.io/docs/concepts/workloads/controllers/garbage-collection/ for more information.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Namespaces$Revisions$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Status>;
    delete(
      params: Params$Resource$Namespaces$Revisions$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Status>,
      callback: BodyResponseCallback<Schema$Status>
    ): void;
    delete(
      params: Params$Resource$Namespaces$Revisions$Delete,
      callback: BodyResponseCallback<Schema$Status>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Status>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Namespaces$Revisions$Delete
        | BodyResponseCallback<Schema$Status>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Status>,
      callback?: BodyResponseCallback<Schema$Status>
    ): void | GaxiosPromise<Schema$Status> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Namespaces$Revisions$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Namespaces$Revisions$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/apis/serving.knative.dev/v1/{+name}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Status>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Status>(parameters);
      }
    }

    /**
     * run.namespaces.revisions.get
     * @desc Get information about a revision.
     * @alias run.namespaces.revisions.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the revision to retrieve. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Namespaces$Revisions$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Revision>;
    get(
      params: Params$Resource$Namespaces$Revisions$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Revision>,
      callback: BodyResponseCallback<Schema$Revision>
    ): void;
    get(
      params: Params$Resource$Namespaces$Revisions$Get,
      callback: BodyResponseCallback<Schema$Revision>
    ): void;
    get(callback: BodyResponseCallback<Schema$Revision>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Namespaces$Revisions$Get
        | BodyResponseCallback<Schema$Revision>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Revision>,
      callback?: BodyResponseCallback<Schema$Revision>
    ): void | GaxiosPromise<Schema$Revision> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Namespaces$Revisions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Namespaces$Revisions$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/apis/serving.knative.dev/v1/{+name}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Revision>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Revision>(parameters);
      }
    }

    /**
     * run.namespaces.revisions.list
     * @desc List revisions.
     * @alias run.namespaces.revisions.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.continue Optional encoded string to continue paging.
     * @param {string=} params.fieldSelector Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
     * @param {boolean=} params.includeUninitialized Not currently used by Cloud Run.
     * @param {string=} params.labelSelector Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     * @param {integer=} params.limit The maximum number of records that should be returned.
     * @param {string} params.parent The namespace from which the revisions should be listed. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     * @param {string=} params.resourceVersion The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
     * @param {boolean=} params.watch Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Namespaces$Revisions$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListRevisionsResponse>;
    list(
      params: Params$Resource$Namespaces$Revisions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListRevisionsResponse>,
      callback: BodyResponseCallback<Schema$ListRevisionsResponse>
    ): void;
    list(
      params: Params$Resource$Namespaces$Revisions$List,
      callback: BodyResponseCallback<Schema$ListRevisionsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListRevisionsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Namespaces$Revisions$List
        | BodyResponseCallback<Schema$ListRevisionsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListRevisionsResponse>,
      callback?: BodyResponseCallback<Schema$ListRevisionsResponse>
    ): void | GaxiosPromise<Schema$ListRevisionsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Namespaces$Revisions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Namespaces$Revisions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/apis/serving.knative.dev/v1/{+parent}/revisions'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListRevisionsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListRevisionsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Namespaces$Revisions$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Cloud Run currently ignores this parameter.
     */
    apiVersion?: string;
    /**
     * Cloud Run currently ignores this parameter.
     */
    kind?: string;
    /**
     * The name of the revision to delete. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     */
    name?: string;
    /**
     * Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background. Please see kubernetes.io/docs/concepts/workloads/controllers/garbage-collection/ for more information.
     */
    propagationPolicy?: string;
  }
  export interface Params$Resource$Namespaces$Revisions$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the revision to retrieve. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     */
    name?: string;
  }
  export interface Params$Resource$Namespaces$Revisions$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional encoded string to continue paging.
     */
    continue?: string;
    /**
     * Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
     */
    fieldSelector?: string;
    /**
     * Not currently used by Cloud Run.
     */
    includeUninitialized?: boolean;
    /**
     * Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     */
    labelSelector?: string;
    /**
     * The maximum number of records that should be returned.
     */
    limit?: number;
    /**
     * The namespace from which the revisions should be listed. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     */
    parent?: string;
    /**
     * The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
     */
    resourceVersion?: string;
    /**
     * Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
     */
    watch?: boolean;
  }

  export class Resource$Namespaces$Routes {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * run.namespaces.routes.create
     * @desc Create a route.
     * @alias run.namespaces.routes.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent The namespace in which the route should be created. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     * @param {().Route} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Namespaces$Routes$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Route>;
    create(
      params: Params$Resource$Namespaces$Routes$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Route>,
      callback: BodyResponseCallback<Schema$Route>
    ): void;
    create(
      params: Params$Resource$Namespaces$Routes$Create,
      callback: BodyResponseCallback<Schema$Route>
    ): void;
    create(callback: BodyResponseCallback<Schema$Route>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Namespaces$Routes$Create
        | BodyResponseCallback<Schema$Route>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Route>,
      callback?: BodyResponseCallback<Schema$Route>
    ): void | GaxiosPromise<Schema$Route> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Namespaces$Routes$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Namespaces$Routes$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/apis/serving.knative.dev/v1/{+parent}/routes'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Route>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Route>(parameters);
      }
    }

    /**
     * run.namespaces.routes.delete
     * @desc Delete a route. This will cause the route to stop serving traffic.
     * @alias run.namespaces.routes.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.apiVersion Cloud Run currently ignores this parameter.
     * @param {string=} params.kind Cloud Run currently ignores this parameter.
     * @param {string} params.name The name of the route to delete. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     * @param {string=} params.propagationPolicy Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background. Please see kubernetes.io/docs/concepts/workloads/controllers/garbage-collection/ for more information.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Namespaces$Routes$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Status>;
    delete(
      params: Params$Resource$Namespaces$Routes$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Status>,
      callback: BodyResponseCallback<Schema$Status>
    ): void;
    delete(
      params: Params$Resource$Namespaces$Routes$Delete,
      callback: BodyResponseCallback<Schema$Status>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Status>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Namespaces$Routes$Delete
        | BodyResponseCallback<Schema$Status>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Status>,
      callback?: BodyResponseCallback<Schema$Status>
    ): void | GaxiosPromise<Schema$Status> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Namespaces$Routes$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Namespaces$Routes$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/apis/serving.knative.dev/v1/{+name}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Status>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Status>(parameters);
      }
    }

    /**
     * run.namespaces.routes.get
     * @desc Get information about a route.
     * @alias run.namespaces.routes.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the route to retrieve. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Namespaces$Routes$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Route>;
    get(
      params: Params$Resource$Namespaces$Routes$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Route>,
      callback: BodyResponseCallback<Schema$Route>
    ): void;
    get(
      params: Params$Resource$Namespaces$Routes$Get,
      callback: BodyResponseCallback<Schema$Route>
    ): void;
    get(callback: BodyResponseCallback<Schema$Route>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Namespaces$Routes$Get
        | BodyResponseCallback<Schema$Route>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Route>,
      callback?: BodyResponseCallback<Schema$Route>
    ): void | GaxiosPromise<Schema$Route> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Namespaces$Routes$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Namespaces$Routes$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/apis/serving.knative.dev/v1/{+name}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Route>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Route>(parameters);
      }
    }

    /**
     * run.namespaces.routes.list
     * @desc List routes.
     * @alias run.namespaces.routes.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.continue Optional encoded string to continue paging.
     * @param {string=} params.fieldSelector Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
     * @param {boolean=} params.includeUninitialized Not currently used by Cloud Run.
     * @param {string=} params.labelSelector Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     * @param {integer=} params.limit The maximum number of records that should be returned.
     * @param {string} params.parent The namespace from which the routes should be listed. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     * @param {string=} params.resourceVersion The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
     * @param {boolean=} params.watch Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Namespaces$Routes$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListRoutesResponse>;
    list(
      params: Params$Resource$Namespaces$Routes$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListRoutesResponse>,
      callback: BodyResponseCallback<Schema$ListRoutesResponse>
    ): void;
    list(
      params: Params$Resource$Namespaces$Routes$List,
      callback: BodyResponseCallback<Schema$ListRoutesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListRoutesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Namespaces$Routes$List
        | BodyResponseCallback<Schema$ListRoutesResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListRoutesResponse>,
      callback?: BodyResponseCallback<Schema$ListRoutesResponse>
    ): void | GaxiosPromise<Schema$ListRoutesResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Namespaces$Routes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Namespaces$Routes$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/apis/serving.knative.dev/v1/{+parent}/routes'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListRoutesResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListRoutesResponse>(parameters);
      }
    }

    /**
     * run.namespaces.routes.replaceRoute
     * @desc Replace a route.  Only the spec and metadata labels and annotations are modifiable. After the Update request, Cloud Run will work to make the 'status' match the requested 'spec'.  May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control.
     * @alias run.namespaces.routes.replaceRoute
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the route being replaced. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     * @param {().Route} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    replaceRoute(
      params?: Params$Resource$Namespaces$Routes$Replaceroute,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Route>;
    replaceRoute(
      params: Params$Resource$Namespaces$Routes$Replaceroute,
      options: MethodOptions | BodyResponseCallback<Schema$Route>,
      callback: BodyResponseCallback<Schema$Route>
    ): void;
    replaceRoute(
      params: Params$Resource$Namespaces$Routes$Replaceroute,
      callback: BodyResponseCallback<Schema$Route>
    ): void;
    replaceRoute(callback: BodyResponseCallback<Schema$Route>): void;
    replaceRoute(
      paramsOrCallback?:
        | Params$Resource$Namespaces$Routes$Replaceroute
        | BodyResponseCallback<Schema$Route>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Route>,
      callback?: BodyResponseCallback<Schema$Route>
    ): void | GaxiosPromise<Schema$Route> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Namespaces$Routes$Replaceroute;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Namespaces$Routes$Replaceroute;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/apis/serving.knative.dev/v1/{+name}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Route>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Route>(parameters);
      }
    }
  }

  export interface Params$Resource$Namespaces$Routes$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The namespace in which the route should be created. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Route;
  }
  export interface Params$Resource$Namespaces$Routes$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Cloud Run currently ignores this parameter.
     */
    apiVersion?: string;
    /**
     * Cloud Run currently ignores this parameter.
     */
    kind?: string;
    /**
     * The name of the route to delete. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     */
    name?: string;
    /**
     * Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background. Please see kubernetes.io/docs/concepts/workloads/controllers/garbage-collection/ for more information.
     */
    propagationPolicy?: string;
  }
  export interface Params$Resource$Namespaces$Routes$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the route to retrieve. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     */
    name?: string;
  }
  export interface Params$Resource$Namespaces$Routes$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional encoded string to continue paging.
     */
    continue?: string;
    /**
     * Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
     */
    fieldSelector?: string;
    /**
     * Not currently used by Cloud Run.
     */
    includeUninitialized?: boolean;
    /**
     * Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     */
    labelSelector?: string;
    /**
     * The maximum number of records that should be returned.
     */
    limit?: number;
    /**
     * The namespace from which the routes should be listed. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     */
    parent?: string;
    /**
     * The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
     */
    resourceVersion?: string;
    /**
     * Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
     */
    watch?: boolean;
  }
  export interface Params$Resource$Namespaces$Routes$Replaceroute
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the route being replaced. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Route;
  }

  export class Resource$Namespaces$Services {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * run.namespaces.services.create
     * @desc Create a service.
     * @alias run.namespaces.services.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent The namespace in which the service should be created. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     * @param {().Service} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Namespaces$Services$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Service>;
    create(
      params: Params$Resource$Namespaces$Services$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Service>,
      callback: BodyResponseCallback<Schema$Service>
    ): void;
    create(
      params: Params$Resource$Namespaces$Services$Create,
      callback: BodyResponseCallback<Schema$Service>
    ): void;
    create(callback: BodyResponseCallback<Schema$Service>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Namespaces$Services$Create
        | BodyResponseCallback<Schema$Service>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Service>,
      callback?: BodyResponseCallback<Schema$Service>
    ): void | GaxiosPromise<Schema$Service> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Namespaces$Services$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Namespaces$Services$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/apis/serving.knative.dev/v1/{+parent}/services'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Service>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Service>(parameters);
      }
    }

    /**
     * run.namespaces.services.delete
     * @desc Delete a service. This will cause the Service to stop serving traffic and will delete the child entities like Routes, Configurations and Revisions.
     * @alias run.namespaces.services.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.apiVersion Cloud Run currently ignores this parameter.
     * @param {string=} params.kind Cloud Run currently ignores this parameter.
     * @param {string} params.name The name of the service to delete. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     * @param {string=} params.propagationPolicy Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background. Please see kubernetes.io/docs/concepts/workloads/controllers/garbage-collection/ for more information.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Namespaces$Services$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Status>;
    delete(
      params: Params$Resource$Namespaces$Services$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Status>,
      callback: BodyResponseCallback<Schema$Status>
    ): void;
    delete(
      params: Params$Resource$Namespaces$Services$Delete,
      callback: BodyResponseCallback<Schema$Status>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Status>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Namespaces$Services$Delete
        | BodyResponseCallback<Schema$Status>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Status>,
      callback?: BodyResponseCallback<Schema$Status>
    ): void | GaxiosPromise<Schema$Status> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Namespaces$Services$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Namespaces$Services$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/apis/serving.knative.dev/v1/{+name}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Status>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Status>(parameters);
      }
    }

    /**
     * run.namespaces.services.get
     * @desc Get information about a service.
     * @alias run.namespaces.services.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the service to retrieve. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Namespaces$Services$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Service>;
    get(
      params: Params$Resource$Namespaces$Services$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Service>,
      callback: BodyResponseCallback<Schema$Service>
    ): void;
    get(
      params: Params$Resource$Namespaces$Services$Get,
      callback: BodyResponseCallback<Schema$Service>
    ): void;
    get(callback: BodyResponseCallback<Schema$Service>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Namespaces$Services$Get
        | BodyResponseCallback<Schema$Service>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Service>,
      callback?: BodyResponseCallback<Schema$Service>
    ): void | GaxiosPromise<Schema$Service> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Namespaces$Services$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Namespaces$Services$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/apis/serving.knative.dev/v1/{+name}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Service>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Service>(parameters);
      }
    }

    /**
     * run.namespaces.services.list
     * @desc List services.
     * @alias run.namespaces.services.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.continue Optional encoded string to continue paging.
     * @param {string=} params.fieldSelector Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
     * @param {boolean=} params.includeUninitialized Not currently used by Cloud Run.
     * @param {string=} params.labelSelector Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     * @param {integer=} params.limit The maximum number of records that should be returned.
     * @param {string} params.parent The namespace from which the services should be listed. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     * @param {string=} params.resourceVersion The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
     * @param {boolean=} params.watch Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Namespaces$Services$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListServicesResponse>;
    list(
      params: Params$Resource$Namespaces$Services$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListServicesResponse>,
      callback: BodyResponseCallback<Schema$ListServicesResponse>
    ): void;
    list(
      params: Params$Resource$Namespaces$Services$List,
      callback: BodyResponseCallback<Schema$ListServicesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListServicesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Namespaces$Services$List
        | BodyResponseCallback<Schema$ListServicesResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListServicesResponse>,
      callback?: BodyResponseCallback<Schema$ListServicesResponse>
    ): void | GaxiosPromise<Schema$ListServicesResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Namespaces$Services$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Namespaces$Services$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/apis/serving.knative.dev/v1/{+parent}/services'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListServicesResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListServicesResponse>(parameters);
      }
    }

    /**
     * run.namespaces.services.replaceService
     * @desc Replace a service.  Only the spec and metadata labels and annotations are modifiable. After the Update request, Cloud Run will work to make the 'status' match the requested 'spec'.  May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control.
     * @alias run.namespaces.services.replaceService
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the service being replaced. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     * @param {().Service} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    replaceService(
      params?: Params$Resource$Namespaces$Services$Replaceservice,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Service>;
    replaceService(
      params: Params$Resource$Namespaces$Services$Replaceservice,
      options: MethodOptions | BodyResponseCallback<Schema$Service>,
      callback: BodyResponseCallback<Schema$Service>
    ): void;
    replaceService(
      params: Params$Resource$Namespaces$Services$Replaceservice,
      callback: BodyResponseCallback<Schema$Service>
    ): void;
    replaceService(callback: BodyResponseCallback<Schema$Service>): void;
    replaceService(
      paramsOrCallback?:
        | Params$Resource$Namespaces$Services$Replaceservice
        | BodyResponseCallback<Schema$Service>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Service>,
      callback?: BodyResponseCallback<Schema$Service>
    ): void | GaxiosPromise<Schema$Service> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Namespaces$Services$Replaceservice;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Namespaces$Services$Replaceservice;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/apis/serving.knative.dev/v1/{+name}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Service>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Service>(parameters);
      }
    }
  }

  export interface Params$Resource$Namespaces$Services$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The namespace in which the service should be created. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Service;
  }
  export interface Params$Resource$Namespaces$Services$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Cloud Run currently ignores this parameter.
     */
    apiVersion?: string;
    /**
     * Cloud Run currently ignores this parameter.
     */
    kind?: string;
    /**
     * The name of the service to delete. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     */
    name?: string;
    /**
     * Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background. Please see kubernetes.io/docs/concepts/workloads/controllers/garbage-collection/ for more information.
     */
    propagationPolicy?: string;
  }
  export interface Params$Resource$Namespaces$Services$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the service to retrieve. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     */
    name?: string;
  }
  export interface Params$Resource$Namespaces$Services$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional encoded string to continue paging.
     */
    continue?: string;
    /**
     * Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
     */
    fieldSelector?: string;
    /**
     * Not currently used by Cloud Run.
     */
    includeUninitialized?: boolean;
    /**
     * Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     */
    labelSelector?: string;
    /**
     * The maximum number of records that should be returned.
     */
    limit?: number;
    /**
     * The namespace from which the services should be listed. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     */
    parent?: string;
    /**
     * The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
     */
    resourceVersion?: string;
    /**
     * Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
     */
    watch?: boolean;
  }
  export interface Params$Resource$Namespaces$Services$Replaceservice
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the service being replaced. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Service;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    locations: Resource$Projects$Locations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.locations = new Resource$Projects$Locations(this.context);
    }
  }

  export class Resource$Projects$Locations {
    context: APIRequestContext;
    authorizeddomains: Resource$Projects$Locations$Authorizeddomains;
    autodomainmappings: Resource$Projects$Locations$Autodomainmappings;
    configurations: Resource$Projects$Locations$Configurations;
    domainmappings: Resource$Projects$Locations$Domainmappings;
    revisions: Resource$Projects$Locations$Revisions;
    routes: Resource$Projects$Locations$Routes;
    services: Resource$Projects$Locations$Services;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.authorizeddomains = new Resource$Projects$Locations$Authorizeddomains(
        this.context
      );
      this.autodomainmappings = new Resource$Projects$Locations$Autodomainmappings(
        this.context
      );
      this.configurations = new Resource$Projects$Locations$Configurations(
        this.context
      );
      this.domainmappings = new Resource$Projects$Locations$Domainmappings(
        this.context
      );
      this.revisions = new Resource$Projects$Locations$Revisions(this.context);
      this.routes = new Resource$Projects$Locations$Routes(this.context);
      this.services = new Resource$Projects$Locations$Services(this.context);
    }

    /**
     * run.projects.locations.get
     * @desc Gets information about a location.
     * @alias run.projects.locations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Resource name for the location.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Locations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Location>;
    get(
      params: Params$Resource$Projects$Locations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Location>,
      callback: BodyResponseCallback<Schema$Location>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Get,
      callback: BodyResponseCallback<Schema$Location>
    ): void;
    get(callback: BodyResponseCallback<Schema$Location>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Get
        | BodyResponseCallback<Schema$Location>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Location>,
      callback?: BodyResponseCallback<Schema$Location>
    ): void | GaxiosPromise<Schema$Location> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Location>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Location>(parameters);
      }
    }

    /**
     * run.projects.locations.list
     * @desc Lists information about the supported locations for this service.
     * @alias run.projects.locations.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter The standard list filter.
     * @param {string} params.name The resource that owns the locations collection, if applicable.
     * @param {integer=} params.pageSize The standard list page size.
     * @param {string=} params.pageToken The standard list page token.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Locations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListLocationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListLocationsResponse>,
      callback: BodyResponseCallback<Schema$ListLocationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$List,
      callback: BodyResponseCallback<Schema$ListLocationsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListLocationsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$List
        | BodyResponseCallback<Schema$ListLocationsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListLocationsResponse>,
      callback?: BodyResponseCallback<Schema$ListLocationsResponse>
    ): void | GaxiosPromise<Schema$ListLocationsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}/locations').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListLocationsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListLocationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Resource name for the location.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The standard list filter.
     */
    filter?: string;
    /**
     * The resource that owns the locations collection, if applicable.
     */
    name?: string;
    /**
     * The standard list page size.
     */
    pageSize?: number;
    /**
     * The standard list page token.
     */
    pageToken?: string;
  }

  export class Resource$Projects$Locations$Authorizeddomains {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * run.projects.locations.authorizeddomains.list
     * @desc List authorized domains.
     * @alias run.projects.locations.authorizeddomains.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Maximum results to return per page.
     * @param {string=} params.pageToken Continuation token for fetching the next page of results.
     * @param {string} params.parent Name of the parent Application resource. Example: `apps/myapp`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Locations$Authorizeddomains$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListAuthorizedDomainsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Authorizeddomains$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListAuthorizedDomainsResponse>,
      callback: BodyResponseCallback<Schema$ListAuthorizedDomainsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Authorizeddomains$List,
      callback: BodyResponseCallback<Schema$ListAuthorizedDomainsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListAuthorizedDomainsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Authorizeddomains$List
        | BodyResponseCallback<Schema$ListAuthorizedDomainsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListAuthorizedDomainsResponse>,
      callback?: BodyResponseCallback<Schema$ListAuthorizedDomainsResponse>
    ): void | GaxiosPromise<Schema$ListAuthorizedDomainsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Authorizeddomains$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Authorizeddomains$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/authorizeddomains').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListAuthorizedDomainsResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$ListAuthorizedDomainsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Authorizeddomains$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Maximum results to return per page.
     */
    pageSize?: number;
    /**
     * Continuation token for fetching the next page of results.
     */
    pageToken?: string;
    /**
     * Name of the parent Application resource. Example: `apps/myapp`.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Autodomainmappings {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * run.projects.locations.autodomainmappings.create
     * @desc Creates a new auto domain mapping.
     * @alias run.projects.locations.autodomainmappings.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent The project ID or project number in which this auto domain mapping should be created.
     * @param {().AutoDomainMapping} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Locations$Autodomainmappings$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AutoDomainMapping>;
    create(
      params: Params$Resource$Projects$Locations$Autodomainmappings$Create,
      options: MethodOptions | BodyResponseCallback<Schema$AutoDomainMapping>,
      callback: BodyResponseCallback<Schema$AutoDomainMapping>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Autodomainmappings$Create,
      callback: BodyResponseCallback<Schema$AutoDomainMapping>
    ): void;
    create(callback: BodyResponseCallback<Schema$AutoDomainMapping>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Autodomainmappings$Create
        | BodyResponseCallback<Schema$AutoDomainMapping>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$AutoDomainMapping>,
      callback?: BodyResponseCallback<Schema$AutoDomainMapping>
    ): void | GaxiosPromise<Schema$AutoDomainMapping> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Autodomainmappings$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Autodomainmappings$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/autodomainmappings').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AutoDomainMapping>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AutoDomainMapping>(parameters);
      }
    }

    /**
     * run.projects.locations.autodomainmappings.delete
     * @desc Delete an auto domain mapping.
     * @alias run.projects.locations.autodomainmappings.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.apiVersion Cloud Run currently ignores this parameter.
     * @param {string=} params.kind Cloud Run currently ignores this parameter.
     * @param {string} params.name The name of the auto domain mapping being deleted. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     * @param {string=} params.propagationPolicy Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background. Please see kubernetes.io/docs/concepts/workloads/controllers/garbage-collection/ for more information.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Locations$Autodomainmappings$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Status>;
    delete(
      params: Params$Resource$Projects$Locations$Autodomainmappings$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Status>,
      callback: BodyResponseCallback<Schema$Status>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Autodomainmappings$Delete,
      callback: BodyResponseCallback<Schema$Status>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Status>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Autodomainmappings$Delete
        | BodyResponseCallback<Schema$Status>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Status>,
      callback?: BodyResponseCallback<Schema$Status>
    ): void | GaxiosPromise<Schema$Status> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Autodomainmappings$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Autodomainmappings$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Status>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Status>(parameters);
      }
    }

    /**
     * run.projects.locations.autodomainmappings.get
     * @desc Get information about an auto domain mapping.
     * @alias run.projects.locations.autodomainmappings.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the auto domain mapping being retrieved. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Locations$Autodomainmappings$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AutoDomainMapping>;
    get(
      params: Params$Resource$Projects$Locations$Autodomainmappings$Get,
      options: MethodOptions | BodyResponseCallback<Schema$AutoDomainMapping>,
      callback: BodyResponseCallback<Schema$AutoDomainMapping>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Autodomainmappings$Get,
      callback: BodyResponseCallback<Schema$AutoDomainMapping>
    ): void;
    get(callback: BodyResponseCallback<Schema$AutoDomainMapping>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Autodomainmappings$Get
        | BodyResponseCallback<Schema$AutoDomainMapping>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$AutoDomainMapping>,
      callback?: BodyResponseCallback<Schema$AutoDomainMapping>
    ): void | GaxiosPromise<Schema$AutoDomainMapping> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Autodomainmappings$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Autodomainmappings$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AutoDomainMapping>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AutoDomainMapping>(parameters);
      }
    }

    /**
     * run.projects.locations.autodomainmappings.list
     * @desc List auto domain mappings.
     * @alias run.projects.locations.autodomainmappings.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.continue Optional encoded string to continue paging.
     * @param {string=} params.fieldSelector Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
     * @param {boolean=} params.includeUninitialized Not currently used by Cloud Run.
     * @param {string=} params.labelSelector Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     * @param {integer=} params.limit The maximum number of records that should be returned.
     * @param {string} params.parent The project ID or project number from which the auto domain mappings should be listed.
     * @param {string=} params.resourceVersion The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
     * @param {boolean=} params.watch Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Locations$Autodomainmappings$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListAutoDomainMappingsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Autodomainmappings$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListAutoDomainMappingsResponse>,
      callback: BodyResponseCallback<Schema$ListAutoDomainMappingsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Autodomainmappings$List,
      callback: BodyResponseCallback<Schema$ListAutoDomainMappingsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListAutoDomainMappingsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Autodomainmappings$List
        | BodyResponseCallback<Schema$ListAutoDomainMappingsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListAutoDomainMappingsResponse>,
      callback?: BodyResponseCallback<Schema$ListAutoDomainMappingsResponse>
    ): void | GaxiosPromise<Schema$ListAutoDomainMappingsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Autodomainmappings$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Autodomainmappings$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/autodomainmappings').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListAutoDomainMappingsResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$ListAutoDomainMappingsResponse>(
          parameters
        );
      }
    }

    /**
     * run.projects.locations.autodomainmappings.replaceAutoDomainMapping
     * @desc Replace an auto domain mapping.  Only the spec and metadata labels and annotations are modifiable. After the Update request, Cloud Run will work to make the 'status' match the requested 'spec'.  May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control.
     * @alias run.projects.locations.autodomainmappings.replaceAutoDomainMapping
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the auto domain mapping being retrieved. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     * @param {().AutoDomainMapping} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    replaceAutoDomainMapping(
      params?: Params$Resource$Projects$Locations$Autodomainmappings$Replaceautodomainmapping,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AutoDomainMapping>;
    replaceAutoDomainMapping(
      params: Params$Resource$Projects$Locations$Autodomainmappings$Replaceautodomainmapping,
      options: MethodOptions | BodyResponseCallback<Schema$AutoDomainMapping>,
      callback: BodyResponseCallback<Schema$AutoDomainMapping>
    ): void;
    replaceAutoDomainMapping(
      params: Params$Resource$Projects$Locations$Autodomainmappings$Replaceautodomainmapping,
      callback: BodyResponseCallback<Schema$AutoDomainMapping>
    ): void;
    replaceAutoDomainMapping(
      callback: BodyResponseCallback<Schema$AutoDomainMapping>
    ): void;
    replaceAutoDomainMapping(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Autodomainmappings$Replaceautodomainmapping
        | BodyResponseCallback<Schema$AutoDomainMapping>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$AutoDomainMapping>,
      callback?: BodyResponseCallback<Schema$AutoDomainMapping>
    ): void | GaxiosPromise<Schema$AutoDomainMapping> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Autodomainmappings$Replaceautodomainmapping;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Autodomainmappings$Replaceautodomainmapping;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AutoDomainMapping>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AutoDomainMapping>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Autodomainmappings$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The project ID or project number in which this auto domain mapping should be created.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AutoDomainMapping;
  }
  export interface Params$Resource$Projects$Locations$Autodomainmappings$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Cloud Run currently ignores this parameter.
     */
    apiVersion?: string;
    /**
     * Cloud Run currently ignores this parameter.
     */
    kind?: string;
    /**
     * The name of the auto domain mapping being deleted. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     */
    name?: string;
    /**
     * Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background. Please see kubernetes.io/docs/concepts/workloads/controllers/garbage-collection/ for more information.
     */
    propagationPolicy?: string;
  }
  export interface Params$Resource$Projects$Locations$Autodomainmappings$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the auto domain mapping being retrieved. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Autodomainmappings$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional encoded string to continue paging.
     */
    continue?: string;
    /**
     * Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
     */
    fieldSelector?: string;
    /**
     * Not currently used by Cloud Run.
     */
    includeUninitialized?: boolean;
    /**
     * Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     */
    labelSelector?: string;
    /**
     * The maximum number of records that should be returned.
     */
    limit?: number;
    /**
     * The project ID or project number from which the auto domain mappings should be listed.
     */
    parent?: string;
    /**
     * The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
     */
    resourceVersion?: string;
    /**
     * Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
     */
    watch?: boolean;
  }
  export interface Params$Resource$Projects$Locations$Autodomainmappings$Replaceautodomainmapping
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the auto domain mapping being retrieved. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AutoDomainMapping;
  }

  export class Resource$Projects$Locations$Configurations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * run.projects.locations.configurations.create
     * @desc Create a configuration.
     * @alias run.projects.locations.configurations.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent The namespace in which the configuration should be created. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     * @param {().Configuration} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Locations$Configurations$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Configuration>;
    create(
      params: Params$Resource$Projects$Locations$Configurations$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Configuration>,
      callback: BodyResponseCallback<Schema$Configuration>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Configurations$Create,
      callback: BodyResponseCallback<Schema$Configuration>
    ): void;
    create(callback: BodyResponseCallback<Schema$Configuration>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Configurations$Create
        | BodyResponseCallback<Schema$Configuration>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Configuration>,
      callback?: BodyResponseCallback<Schema$Configuration>
    ): void | GaxiosPromise<Schema$Configuration> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Configurations$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Configurations$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/configurations').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Configuration>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Configuration>(parameters);
      }
    }

    /**
     * run.projects.locations.configurations.delete
     * @desc delete a configuration. This will cause the configuration to delete all child revisions. Prior to calling this, any route referencing the configuration (or revision from the configuration) must be deleted.
     * @alias run.projects.locations.configurations.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.apiVersion Cloud Run currently ignores this parameter.
     * @param {string=} params.kind Cloud Run currently ignores this parameter.
     * @param {string} params.name The name of the configuration to delete. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     * @param {string=} params.propagationPolicy Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background. Please see kubernetes.io/docs/concepts/workloads/controllers/garbage-collection/ for more information.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Locations$Configurations$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Status>;
    delete(
      params: Params$Resource$Projects$Locations$Configurations$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Status>,
      callback: BodyResponseCallback<Schema$Status>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Configurations$Delete,
      callback: BodyResponseCallback<Schema$Status>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Status>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Configurations$Delete
        | BodyResponseCallback<Schema$Status>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Status>,
      callback?: BodyResponseCallback<Schema$Status>
    ): void | GaxiosPromise<Schema$Status> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Configurations$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Configurations$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Status>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Status>(parameters);
      }
    }

    /**
     * run.projects.locations.configurations.get
     * @desc Get information about a configuration.
     * @alias run.projects.locations.configurations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the configuration to retrieve. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Locations$Configurations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Configuration>;
    get(
      params: Params$Resource$Projects$Locations$Configurations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Configuration>,
      callback: BodyResponseCallback<Schema$Configuration>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Configurations$Get,
      callback: BodyResponseCallback<Schema$Configuration>
    ): void;
    get(callback: BodyResponseCallback<Schema$Configuration>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Configurations$Get
        | BodyResponseCallback<Schema$Configuration>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Configuration>,
      callback?: BodyResponseCallback<Schema$Configuration>
    ): void | GaxiosPromise<Schema$Configuration> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Configurations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Configurations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Configuration>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Configuration>(parameters);
      }
    }

    /**
     * run.projects.locations.configurations.list
     * @desc List configurations.
     * @alias run.projects.locations.configurations.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.continue Optional encoded string to continue paging.
     * @param {string=} params.fieldSelector Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
     * @param {boolean=} params.includeUninitialized Not currently used by Cloud Run.
     * @param {string=} params.labelSelector Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     * @param {integer=} params.limit The maximum number of records that should be returned.
     * @param {string} params.parent The namespace from which the configurations should be listed. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     * @param {string=} params.resourceVersion The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
     * @param {boolean=} params.watch Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Locations$Configurations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListConfigurationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Configurations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListConfigurationsResponse>,
      callback: BodyResponseCallback<Schema$ListConfigurationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Configurations$List,
      callback: BodyResponseCallback<Schema$ListConfigurationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListConfigurationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Configurations$List
        | BodyResponseCallback<Schema$ListConfigurationsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListConfigurationsResponse>,
      callback?: BodyResponseCallback<Schema$ListConfigurationsResponse>
    ): void | GaxiosPromise<Schema$ListConfigurationsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Configurations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Configurations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/configurations').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListConfigurationsResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$ListConfigurationsResponse>(parameters);
      }
    }

    /**
     * run.projects.locations.configurations.replaceConfiguration
     * @desc Replace a configuration.  Only the spec and metadata labels and annotations are modifiable. After the Update request, Cloud Run will work to make the 'status' match the requested 'spec'.  May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control.
     * @alias run.projects.locations.configurations.replaceConfiguration
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the configuration being replaced. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     * @param {().Configuration} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    replaceConfiguration(
      params?: Params$Resource$Projects$Locations$Configurations$Replaceconfiguration,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Configuration>;
    replaceConfiguration(
      params: Params$Resource$Projects$Locations$Configurations$Replaceconfiguration,
      options: MethodOptions | BodyResponseCallback<Schema$Configuration>,
      callback: BodyResponseCallback<Schema$Configuration>
    ): void;
    replaceConfiguration(
      params: Params$Resource$Projects$Locations$Configurations$Replaceconfiguration,
      callback: BodyResponseCallback<Schema$Configuration>
    ): void;
    replaceConfiguration(
      callback: BodyResponseCallback<Schema$Configuration>
    ): void;
    replaceConfiguration(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Configurations$Replaceconfiguration
        | BodyResponseCallback<Schema$Configuration>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Configuration>,
      callback?: BodyResponseCallback<Schema$Configuration>
    ): void | GaxiosPromise<Schema$Configuration> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Configurations$Replaceconfiguration;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Configurations$Replaceconfiguration;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Configuration>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Configuration>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Configurations$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The namespace in which the configuration should be created. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Configuration;
  }
  export interface Params$Resource$Projects$Locations$Configurations$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Cloud Run currently ignores this parameter.
     */
    apiVersion?: string;
    /**
     * Cloud Run currently ignores this parameter.
     */
    kind?: string;
    /**
     * The name of the configuration to delete. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     */
    name?: string;
    /**
     * Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background. Please see kubernetes.io/docs/concepts/workloads/controllers/garbage-collection/ for more information.
     */
    propagationPolicy?: string;
  }
  export interface Params$Resource$Projects$Locations$Configurations$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the configuration to retrieve. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Configurations$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional encoded string to continue paging.
     */
    continue?: string;
    /**
     * Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
     */
    fieldSelector?: string;
    /**
     * Not currently used by Cloud Run.
     */
    includeUninitialized?: boolean;
    /**
     * Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     */
    labelSelector?: string;
    /**
     * The maximum number of records that should be returned.
     */
    limit?: number;
    /**
     * The namespace from which the configurations should be listed. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     */
    parent?: string;
    /**
     * The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
     */
    resourceVersion?: string;
    /**
     * Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
     */
    watch?: boolean;
  }
  export interface Params$Resource$Projects$Locations$Configurations$Replaceconfiguration
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the configuration being replaced. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Configuration;
  }

  export class Resource$Projects$Locations$Domainmappings {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * run.projects.locations.domainmappings.create
     * @desc Create a new domain mapping.
     * @alias run.projects.locations.domainmappings.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent The namespace in which the domain mapping should be created. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     * @param {().DomainMapping} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Locations$Domainmappings$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DomainMapping>;
    create(
      params: Params$Resource$Projects$Locations$Domainmappings$Create,
      options: MethodOptions | BodyResponseCallback<Schema$DomainMapping>,
      callback: BodyResponseCallback<Schema$DomainMapping>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Domainmappings$Create,
      callback: BodyResponseCallback<Schema$DomainMapping>
    ): void;
    create(callback: BodyResponseCallback<Schema$DomainMapping>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Domainmappings$Create
        | BodyResponseCallback<Schema$DomainMapping>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$DomainMapping>,
      callback?: BodyResponseCallback<Schema$DomainMapping>
    ): void | GaxiosPromise<Schema$DomainMapping> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Domainmappings$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Domainmappings$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/domainmappings').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$DomainMapping>(parameters, callback);
      } else {
        return createAPIRequest<Schema$DomainMapping>(parameters);
      }
    }

    /**
     * run.projects.locations.domainmappings.delete
     * @desc Delete a domain mapping.
     * @alias run.projects.locations.domainmappings.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.apiVersion Cloud Run currently ignores this parameter.
     * @param {string=} params.kind Cloud Run currently ignores this parameter.
     * @param {string} params.name The name of the domain mapping to delete. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     * @param {string=} params.propagationPolicy Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background. Please see kubernetes.io/docs/concepts/workloads/controllers/garbage-collection/ for more information.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Locations$Domainmappings$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Status>;
    delete(
      params: Params$Resource$Projects$Locations$Domainmappings$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Status>,
      callback: BodyResponseCallback<Schema$Status>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Domainmappings$Delete,
      callback: BodyResponseCallback<Schema$Status>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Status>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Domainmappings$Delete
        | BodyResponseCallback<Schema$Status>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Status>,
      callback?: BodyResponseCallback<Schema$Status>
    ): void | GaxiosPromise<Schema$Status> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Domainmappings$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Domainmappings$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Status>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Status>(parameters);
      }
    }

    /**
     * run.projects.locations.domainmappings.get
     * @desc Get information about a domain mapping.
     * @alias run.projects.locations.domainmappings.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the domain mapping to retrieve. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Locations$Domainmappings$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DomainMapping>;
    get(
      params: Params$Resource$Projects$Locations$Domainmappings$Get,
      options: MethodOptions | BodyResponseCallback<Schema$DomainMapping>,
      callback: BodyResponseCallback<Schema$DomainMapping>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Domainmappings$Get,
      callback: BodyResponseCallback<Schema$DomainMapping>
    ): void;
    get(callback: BodyResponseCallback<Schema$DomainMapping>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Domainmappings$Get
        | BodyResponseCallback<Schema$DomainMapping>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$DomainMapping>,
      callback?: BodyResponseCallback<Schema$DomainMapping>
    ): void | GaxiosPromise<Schema$DomainMapping> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Domainmappings$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Domainmappings$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$DomainMapping>(parameters, callback);
      } else {
        return createAPIRequest<Schema$DomainMapping>(parameters);
      }
    }

    /**
     * run.projects.locations.domainmappings.list
     * @desc List domain mappings.
     * @alias run.projects.locations.domainmappings.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.continue Optional encoded string to continue paging.
     * @param {string=} params.fieldSelector Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
     * @param {boolean=} params.includeUninitialized Not currently used by Cloud Run.
     * @param {string=} params.labelSelector Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     * @param {integer=} params.limit The maximum number of records that should be returned.
     * @param {string} params.parent The namespace from which the domain mappings should be listed. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     * @param {string=} params.resourceVersion The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
     * @param {boolean=} params.watch Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Locations$Domainmappings$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListDomainMappingsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Domainmappings$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListDomainMappingsResponse>,
      callback: BodyResponseCallback<Schema$ListDomainMappingsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Domainmappings$List,
      callback: BodyResponseCallback<Schema$ListDomainMappingsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListDomainMappingsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Domainmappings$List
        | BodyResponseCallback<Schema$ListDomainMappingsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListDomainMappingsResponse>,
      callback?: BodyResponseCallback<Schema$ListDomainMappingsResponse>
    ): void | GaxiosPromise<Schema$ListDomainMappingsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Domainmappings$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Domainmappings$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/domainmappings').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListDomainMappingsResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$ListDomainMappingsResponse>(parameters);
      }
    }

    /**
     * run.projects.locations.domainmappings.replaceDomainMapping
     * @desc Replace a domain mapping.  Only the spec and metadata labels and annotations are modifiable. After the Update request, Cloud Run will work to make the 'status' match the requested 'spec'.  May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control.
     * @alias run.projects.locations.domainmappings.replaceDomainMapping
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the domain mapping being retrieved. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     * @param {().DomainMapping} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    replaceDomainMapping(
      params?: Params$Resource$Projects$Locations$Domainmappings$Replacedomainmapping,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DomainMapping>;
    replaceDomainMapping(
      params: Params$Resource$Projects$Locations$Domainmappings$Replacedomainmapping,
      options: MethodOptions | BodyResponseCallback<Schema$DomainMapping>,
      callback: BodyResponseCallback<Schema$DomainMapping>
    ): void;
    replaceDomainMapping(
      params: Params$Resource$Projects$Locations$Domainmappings$Replacedomainmapping,
      callback: BodyResponseCallback<Schema$DomainMapping>
    ): void;
    replaceDomainMapping(
      callback: BodyResponseCallback<Schema$DomainMapping>
    ): void;
    replaceDomainMapping(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Domainmappings$Replacedomainmapping
        | BodyResponseCallback<Schema$DomainMapping>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$DomainMapping>,
      callback?: BodyResponseCallback<Schema$DomainMapping>
    ): void | GaxiosPromise<Schema$DomainMapping> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Domainmappings$Replacedomainmapping;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Domainmappings$Replacedomainmapping;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$DomainMapping>(parameters, callback);
      } else {
        return createAPIRequest<Schema$DomainMapping>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Domainmappings$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The namespace in which the domain mapping should be created. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DomainMapping;
  }
  export interface Params$Resource$Projects$Locations$Domainmappings$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Cloud Run currently ignores this parameter.
     */
    apiVersion?: string;
    /**
     * Cloud Run currently ignores this parameter.
     */
    kind?: string;
    /**
     * The name of the domain mapping to delete. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     */
    name?: string;
    /**
     * Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background. Please see kubernetes.io/docs/concepts/workloads/controllers/garbage-collection/ for more information.
     */
    propagationPolicy?: string;
  }
  export interface Params$Resource$Projects$Locations$Domainmappings$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the domain mapping to retrieve. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Domainmappings$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional encoded string to continue paging.
     */
    continue?: string;
    /**
     * Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
     */
    fieldSelector?: string;
    /**
     * Not currently used by Cloud Run.
     */
    includeUninitialized?: boolean;
    /**
     * Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     */
    labelSelector?: string;
    /**
     * The maximum number of records that should be returned.
     */
    limit?: number;
    /**
     * The namespace from which the domain mappings should be listed. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     */
    parent?: string;
    /**
     * The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
     */
    resourceVersion?: string;
    /**
     * Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
     */
    watch?: boolean;
  }
  export interface Params$Resource$Projects$Locations$Domainmappings$Replacedomainmapping
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the domain mapping being retrieved. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DomainMapping;
  }

  export class Resource$Projects$Locations$Revisions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * run.projects.locations.revisions.delete
     * @desc Delete a revision.
     * @alias run.projects.locations.revisions.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.apiVersion Cloud Run currently ignores this parameter.
     * @param {string=} params.kind Cloud Run currently ignores this parameter.
     * @param {string} params.name The name of the revision to delete. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     * @param {string=} params.propagationPolicy Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background. Please see kubernetes.io/docs/concepts/workloads/controllers/garbage-collection/ for more information.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Locations$Revisions$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Status>;
    delete(
      params: Params$Resource$Projects$Locations$Revisions$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Status>,
      callback: BodyResponseCallback<Schema$Status>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Revisions$Delete,
      callback: BodyResponseCallback<Schema$Status>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Status>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Revisions$Delete
        | BodyResponseCallback<Schema$Status>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Status>,
      callback?: BodyResponseCallback<Schema$Status>
    ): void | GaxiosPromise<Schema$Status> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Revisions$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Revisions$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Status>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Status>(parameters);
      }
    }

    /**
     * run.projects.locations.revisions.get
     * @desc Get information about a revision.
     * @alias run.projects.locations.revisions.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the revision to retrieve. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Locations$Revisions$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Revision>;
    get(
      params: Params$Resource$Projects$Locations$Revisions$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Revision>,
      callback: BodyResponseCallback<Schema$Revision>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Revisions$Get,
      callback: BodyResponseCallback<Schema$Revision>
    ): void;
    get(callback: BodyResponseCallback<Schema$Revision>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Revisions$Get
        | BodyResponseCallback<Schema$Revision>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Revision>,
      callback?: BodyResponseCallback<Schema$Revision>
    ): void | GaxiosPromise<Schema$Revision> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Revisions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Revisions$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Revision>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Revision>(parameters);
      }
    }

    /**
     * run.projects.locations.revisions.list
     * @desc List revisions.
     * @alias run.projects.locations.revisions.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.continue Optional encoded string to continue paging.
     * @param {string=} params.fieldSelector Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
     * @param {boolean=} params.includeUninitialized Not currently used by Cloud Run.
     * @param {string=} params.labelSelector Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     * @param {integer=} params.limit The maximum number of records that should be returned.
     * @param {string} params.parent The namespace from which the revisions should be listed. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     * @param {string=} params.resourceVersion The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
     * @param {boolean=} params.watch Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Locations$Revisions$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListRevisionsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Revisions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListRevisionsResponse>,
      callback: BodyResponseCallback<Schema$ListRevisionsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Revisions$List,
      callback: BodyResponseCallback<Schema$ListRevisionsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListRevisionsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Revisions$List
        | BodyResponseCallback<Schema$ListRevisionsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListRevisionsResponse>,
      callback?: BodyResponseCallback<Schema$ListRevisionsResponse>
    ): void | GaxiosPromise<Schema$ListRevisionsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Revisions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Revisions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/revisions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListRevisionsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListRevisionsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Revisions$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Cloud Run currently ignores this parameter.
     */
    apiVersion?: string;
    /**
     * Cloud Run currently ignores this parameter.
     */
    kind?: string;
    /**
     * The name of the revision to delete. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     */
    name?: string;
    /**
     * Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background. Please see kubernetes.io/docs/concepts/workloads/controllers/garbage-collection/ for more information.
     */
    propagationPolicy?: string;
  }
  export interface Params$Resource$Projects$Locations$Revisions$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the revision to retrieve. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Revisions$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional encoded string to continue paging.
     */
    continue?: string;
    /**
     * Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
     */
    fieldSelector?: string;
    /**
     * Not currently used by Cloud Run.
     */
    includeUninitialized?: boolean;
    /**
     * Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     */
    labelSelector?: string;
    /**
     * The maximum number of records that should be returned.
     */
    limit?: number;
    /**
     * The namespace from which the revisions should be listed. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     */
    parent?: string;
    /**
     * The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
     */
    resourceVersion?: string;
    /**
     * Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
     */
    watch?: boolean;
  }

  export class Resource$Projects$Locations$Routes {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * run.projects.locations.routes.create
     * @desc Create a route.
     * @alias run.projects.locations.routes.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent The namespace in which the route should be created. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     * @param {().Route} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Locations$Routes$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Route>;
    create(
      params: Params$Resource$Projects$Locations$Routes$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Route>,
      callback: BodyResponseCallback<Schema$Route>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Routes$Create,
      callback: BodyResponseCallback<Schema$Route>
    ): void;
    create(callback: BodyResponseCallback<Schema$Route>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Routes$Create
        | BodyResponseCallback<Schema$Route>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Route>,
      callback?: BodyResponseCallback<Schema$Route>
    ): void | GaxiosPromise<Schema$Route> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Routes$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Routes$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/routes').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Route>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Route>(parameters);
      }
    }

    /**
     * run.projects.locations.routes.delete
     * @desc Delete a route. This will cause the route to stop serving traffic.
     * @alias run.projects.locations.routes.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.apiVersion Cloud Run currently ignores this parameter.
     * @param {string=} params.kind Cloud Run currently ignores this parameter.
     * @param {string} params.name The name of the route to delete. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     * @param {string=} params.propagationPolicy Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background. Please see kubernetes.io/docs/concepts/workloads/controllers/garbage-collection/ for more information.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Locations$Routes$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Status>;
    delete(
      params: Params$Resource$Projects$Locations$Routes$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Status>,
      callback: BodyResponseCallback<Schema$Status>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Routes$Delete,
      callback: BodyResponseCallback<Schema$Status>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Status>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Routes$Delete
        | BodyResponseCallback<Schema$Status>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Status>,
      callback?: BodyResponseCallback<Schema$Status>
    ): void | GaxiosPromise<Schema$Status> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Routes$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Routes$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Status>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Status>(parameters);
      }
    }

    /**
     * run.projects.locations.routes.get
     * @desc Get information about a route.
     * @alias run.projects.locations.routes.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the route to retrieve. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Locations$Routes$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Route>;
    get(
      params: Params$Resource$Projects$Locations$Routes$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Route>,
      callback: BodyResponseCallback<Schema$Route>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Routes$Get,
      callback: BodyResponseCallback<Schema$Route>
    ): void;
    get(callback: BodyResponseCallback<Schema$Route>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Routes$Get
        | BodyResponseCallback<Schema$Route>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Route>,
      callback?: BodyResponseCallback<Schema$Route>
    ): void | GaxiosPromise<Schema$Route> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Routes$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Routes$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Route>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Route>(parameters);
      }
    }

    /**
     * run.projects.locations.routes.list
     * @desc List routes.
     * @alias run.projects.locations.routes.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.continue Optional encoded string to continue paging.
     * @param {string=} params.fieldSelector Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
     * @param {boolean=} params.includeUninitialized Not currently used by Cloud Run.
     * @param {string=} params.labelSelector Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     * @param {integer=} params.limit The maximum number of records that should be returned.
     * @param {string} params.parent The namespace from which the routes should be listed. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     * @param {string=} params.resourceVersion The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
     * @param {boolean=} params.watch Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Locations$Routes$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListRoutesResponse>;
    list(
      params: Params$Resource$Projects$Locations$Routes$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListRoutesResponse>,
      callback: BodyResponseCallback<Schema$ListRoutesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Routes$List,
      callback: BodyResponseCallback<Schema$ListRoutesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListRoutesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Routes$List
        | BodyResponseCallback<Schema$ListRoutesResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListRoutesResponse>,
      callback?: BodyResponseCallback<Schema$ListRoutesResponse>
    ): void | GaxiosPromise<Schema$ListRoutesResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Routes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Routes$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/routes').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListRoutesResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListRoutesResponse>(parameters);
      }
    }

    /**
     * run.projects.locations.routes.replaceRoute
     * @desc Replace a route.  Only the spec and metadata labels and annotations are modifiable. After the Update request, Cloud Run will work to make the 'status' match the requested 'spec'.  May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control.
     * @alias run.projects.locations.routes.replaceRoute
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the route being replaced. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     * @param {().Route} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    replaceRoute(
      params?: Params$Resource$Projects$Locations$Routes$Replaceroute,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Route>;
    replaceRoute(
      params: Params$Resource$Projects$Locations$Routes$Replaceroute,
      options: MethodOptions | BodyResponseCallback<Schema$Route>,
      callback: BodyResponseCallback<Schema$Route>
    ): void;
    replaceRoute(
      params: Params$Resource$Projects$Locations$Routes$Replaceroute,
      callback: BodyResponseCallback<Schema$Route>
    ): void;
    replaceRoute(callback: BodyResponseCallback<Schema$Route>): void;
    replaceRoute(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Routes$Replaceroute
        | BodyResponseCallback<Schema$Route>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Route>,
      callback?: BodyResponseCallback<Schema$Route>
    ): void | GaxiosPromise<Schema$Route> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Routes$Replaceroute;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Routes$Replaceroute;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Route>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Route>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Routes$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The namespace in which the route should be created. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Route;
  }
  export interface Params$Resource$Projects$Locations$Routes$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Cloud Run currently ignores this parameter.
     */
    apiVersion?: string;
    /**
     * Cloud Run currently ignores this parameter.
     */
    kind?: string;
    /**
     * The name of the route to delete. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     */
    name?: string;
    /**
     * Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background. Please see kubernetes.io/docs/concepts/workloads/controllers/garbage-collection/ for more information.
     */
    propagationPolicy?: string;
  }
  export interface Params$Resource$Projects$Locations$Routes$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the route to retrieve. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Routes$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional encoded string to continue paging.
     */
    continue?: string;
    /**
     * Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
     */
    fieldSelector?: string;
    /**
     * Not currently used by Cloud Run.
     */
    includeUninitialized?: boolean;
    /**
     * Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     */
    labelSelector?: string;
    /**
     * The maximum number of records that should be returned.
     */
    limit?: number;
    /**
     * The namespace from which the routes should be listed. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     */
    parent?: string;
    /**
     * The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
     */
    resourceVersion?: string;
    /**
     * Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
     */
    watch?: boolean;
  }
  export interface Params$Resource$Projects$Locations$Routes$Replaceroute
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the route being replaced. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Route;
  }

  export class Resource$Projects$Locations$Services {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * run.projects.locations.services.create
     * @desc Create a service.
     * @alias run.projects.locations.services.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent The namespace in which the service should be created. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     * @param {().Service} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Locations$Services$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Service>;
    create(
      params: Params$Resource$Projects$Locations$Services$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Service>,
      callback: BodyResponseCallback<Schema$Service>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Services$Create,
      callback: BodyResponseCallback<Schema$Service>
    ): void;
    create(callback: BodyResponseCallback<Schema$Service>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Services$Create
        | BodyResponseCallback<Schema$Service>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Service>,
      callback?: BodyResponseCallback<Schema$Service>
    ): void | GaxiosPromise<Schema$Service> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Services$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Services$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/services').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Service>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Service>(parameters);
      }
    }

    /**
     * run.projects.locations.services.delete
     * @desc Delete a service. This will cause the Service to stop serving traffic and will delete the child entities like Routes, Configurations and Revisions.
     * @alias run.projects.locations.services.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.apiVersion Cloud Run currently ignores this parameter.
     * @param {string=} params.kind Cloud Run currently ignores this parameter.
     * @param {string} params.name The name of the service to delete. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     * @param {string=} params.propagationPolicy Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background. Please see kubernetes.io/docs/concepts/workloads/controllers/garbage-collection/ for more information.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Locations$Services$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Status>;
    delete(
      params: Params$Resource$Projects$Locations$Services$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Status>,
      callback: BodyResponseCallback<Schema$Status>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Services$Delete,
      callback: BodyResponseCallback<Schema$Status>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Status>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Services$Delete
        | BodyResponseCallback<Schema$Status>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Status>,
      callback?: BodyResponseCallback<Schema$Status>
    ): void | GaxiosPromise<Schema$Status> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Services$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Services$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Status>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Status>(parameters);
      }
    }

    /**
     * run.projects.locations.services.get
     * @desc Get information about a service.
     * @alias run.projects.locations.services.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the service to retrieve. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Locations$Services$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Service>;
    get(
      params: Params$Resource$Projects$Locations$Services$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Service>,
      callback: BodyResponseCallback<Schema$Service>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Services$Get,
      callback: BodyResponseCallback<Schema$Service>
    ): void;
    get(callback: BodyResponseCallback<Schema$Service>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Services$Get
        | BodyResponseCallback<Schema$Service>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Service>,
      callback?: BodyResponseCallback<Schema$Service>
    ): void | GaxiosPromise<Schema$Service> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Services$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Services$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Service>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Service>(parameters);
      }
    }

    /**
     * run.projects.locations.services.getIamPolicy
     * @desc Get the IAM Access Control policy currently in effect for the given Cloud Run service. This result does not include any inherited policies.
     * @alias run.projects.locations.services.getIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.options.requestedPolicyVersion Optional. The policy format version to be returned.  Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.  Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset.
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getIamPolicy(
      params?: Params$Resource$Projects$Locations$Services$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Services$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Services$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Services$Getiampolicy
        | BodyResponseCallback<Schema$Policy>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>
    ): void | GaxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Services$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Services$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:getIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Policy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * run.projects.locations.services.list
     * @desc List services.
     * @alias run.projects.locations.services.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.continue Optional encoded string to continue paging.
     * @param {string=} params.fieldSelector Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
     * @param {boolean=} params.includeUninitialized Not currently used by Cloud Run.
     * @param {string=} params.labelSelector Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     * @param {integer=} params.limit The maximum number of records that should be returned.
     * @param {string} params.parent The namespace from which the services should be listed. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     * @param {string=} params.resourceVersion The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
     * @param {boolean=} params.watch Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Locations$Services$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListServicesResponse>;
    list(
      params: Params$Resource$Projects$Locations$Services$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListServicesResponse>,
      callback: BodyResponseCallback<Schema$ListServicesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Services$List,
      callback: BodyResponseCallback<Schema$ListServicesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListServicesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Services$List
        | BodyResponseCallback<Schema$ListServicesResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListServicesResponse>,
      callback?: BodyResponseCallback<Schema$ListServicesResponse>
    ): void | GaxiosPromise<Schema$ListServicesResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Services$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Services$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/services').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListServicesResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListServicesResponse>(parameters);
      }
    }

    /**
     * run.projects.locations.services.replaceService
     * @desc Replace a service.  Only the spec and metadata labels and annotations are modifiable. After the Update request, Cloud Run will work to make the 'status' match the requested 'spec'.  May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control.
     * @alias run.projects.locations.services.replaceService
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the service being replaced. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     * @param {().Service} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    replaceService(
      params?: Params$Resource$Projects$Locations$Services$Replaceservice,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Service>;
    replaceService(
      params: Params$Resource$Projects$Locations$Services$Replaceservice,
      options: MethodOptions | BodyResponseCallback<Schema$Service>,
      callback: BodyResponseCallback<Schema$Service>
    ): void;
    replaceService(
      params: Params$Resource$Projects$Locations$Services$Replaceservice,
      callback: BodyResponseCallback<Schema$Service>
    ): void;
    replaceService(callback: BodyResponseCallback<Schema$Service>): void;
    replaceService(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Services$Replaceservice
        | BodyResponseCallback<Schema$Service>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Service>,
      callback?: BodyResponseCallback<Schema$Service>
    ): void | GaxiosPromise<Schema$Service> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Services$Replaceservice;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Services$Replaceservice;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Service>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Service>(parameters);
      }
    }

    /**
     * run.projects.locations.services.setIamPolicy
     * @desc Sets the IAM Access control policy for the specified Service. Overwrites any existing policy.
     * @alias run.projects.locations.services.setIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
     * @param {().SetIamPolicyRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setIamPolicy(
      params?: Params$Resource$Projects$Locations$Services$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Services$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Services$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Services$Setiampolicy
        | BodyResponseCallback<Schema$Policy>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>
    ): void | GaxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Services$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Services$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:setIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Policy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * run.projects.locations.services.testIamPermissions
     * @desc Returns permissions that a caller has on the specified Project.  There are no permissions required for making this API call.
     * @alias run.projects.locations.services.testIamPermissions
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
     * @param {().TestIamPermissionsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    testIamPermissions(
      params?: Params$Resource$Projects$Locations$Services$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Services$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Services$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Services$Testiampermissions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void | GaxiosPromise<Schema$TestIamPermissionsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Services$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Services$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:testIamPermissions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TestIamPermissionsResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$TestIamPermissionsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Services$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The namespace in which the service should be created. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Service;
  }
  export interface Params$Resource$Projects$Locations$Services$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Cloud Run currently ignores this parameter.
     */
    apiVersion?: string;
    /**
     * Cloud Run currently ignores this parameter.
     */
    kind?: string;
    /**
     * The name of the service to delete. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     */
    name?: string;
    /**
     * Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background. Please see kubernetes.io/docs/concepts/workloads/controllers/garbage-collection/ for more information.
     */
    propagationPolicy?: string;
  }
  export interface Params$Resource$Projects$Locations$Services$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the service to retrieve. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Services$Getiampolicy
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. The policy format version to be returned.  Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.  Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset.
     */
    'options.requestedPolicyVersion'?: number;
    /**
     * REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;
  }
  export interface Params$Resource$Projects$Locations$Services$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional encoded string to continue paging.
     */
    continue?: string;
    /**
     * Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
     */
    fieldSelector?: string;
    /**
     * Not currently used by Cloud Run.
     */
    includeUninitialized?: boolean;
    /**
     * Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     */
    labelSelector?: string;
    /**
     * The maximum number of records that should be returned.
     */
    limit?: number;
    /**
     * The namespace from which the services should be listed. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     */
    parent?: string;
    /**
     * The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
     */
    resourceVersion?: string;
    /**
     * Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
     */
    watch?: boolean;
  }
  export interface Params$Resource$Projects$Locations$Services$Replaceservice
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the service being replaced. For Cloud Run (fully managed), replace {namespace_id} with the project ID or number.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Service;
  }
  export interface Params$Resource$Projects$Locations$Services$Setiampolicy
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Locations$Services$Testiampermissions
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TestIamPermissionsRequest;
  }
}
