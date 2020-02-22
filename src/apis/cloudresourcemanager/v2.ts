/**
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {AxiosPromise} from 'axios';

import {GoogleApis} from '../..';
import {BodyResponseCallback, GlobalOptions, MethodOptions} from '../../lib/api';
import {createAPIRequest} from '../../lib/apirequest';

// TODO: We will eventually get the `any` in here cleared out, but in the
// interim we want to turn on no-implicit-any.

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format

/**
 * Cloud Resource Manager API
 *
 * The Google Cloud Resource Manager API provides methods for creating, reading,
 * and updating project metadata.
 *
 * @example
 * const google = require('googleapis');
 * const cloudresourcemanager = google.cloudresourcemanager('v2');
 *
 * @namespace cloudresourcemanager
 * @type {Function}
 * @version v2
 * @variation v2
 * @param {object=} options Options for Cloudresourcemanager
 */
export class Cloudresourcemanager {
  _options: GlobalOptions;
  google: GoogleApis;
  root = this;

  folders: Resource$Folders;

  constructor(options: GlobalOptions, google: GoogleApis) {
    this._options = options || {};
    this.google = google;
    this.getRoot.bind(this);

    this.folders = new Resource$Folders(this);
  }

  getRoot() {
    return this.root;
  }
}

/**
 * Specifies the audit configuration for a service. The configuration determines
 * which permission types are logged, and what identities, if any, are exempted
 * from logging. An AuditConfig must have one or more AuditLogConfigs.  If there
 * are AuditConfigs for both `allServices` and a specific service, the union of
 * the two AuditConfigs is used for that service: the log_types specified in
 * each AuditConfig are enabled, and the exempted_members in each AuditLogConfig
 * are exempted.  Example Policy with multiple AuditConfigs:      {
 * &quot;audit_configs&quot;: [         {           &quot;service&quot;:
 * &quot;allServices&quot;           &quot;audit_log_configs&quot;: [
 * {               &quot;log_type&quot;: &quot;DATA_READ&quot;,
 * &quot;exempted_members&quot;: [
 * &quot;user:foo@gmail.com&quot;               ]             },             {
 * &quot;log_type&quot;: &quot;DATA_WRITE&quot;,             },             {
 * &quot;log_type&quot;: &quot;ADMIN_READ&quot;,             }           ]
 * },         {           &quot;service&quot;:
 * &quot;fooservice.googleapis.com&quot;
 * &quot;audit_log_configs&quot;: [             {
 * &quot;log_type&quot;: &quot;DATA_READ&quot;,             },             {
 * &quot;log_type&quot;: &quot;DATA_WRITE&quot;,
 * &quot;exempted_members&quot;: [
 * &quot;user:bar@gmail.com&quot;               ]             }           ]
 * }       ]     }  For fooservice, this policy enables DATA_READ, DATA_WRITE
 * and ADMIN_READ logging. It also exempts foo@gmail.com from DATA_READ logging,
 * and bar@gmail.com from DATA_WRITE logging.
 */
export interface Schema$AuditConfig {
  /**
   * The configuration for logging of each type of permission. Next ID: 4
   */
  auditLogConfigs: Schema$AuditLogConfig[];
  /**
   * Specifies a service that will be enabled for audit logging. For example,
   * `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a
   * special value that covers all services.
   */
  service: string;
}
/**
 * Provides the configuration for logging a type of permissions. Example:      {
 * &quot;audit_log_configs&quot;: [         {           &quot;log_type&quot;:
 * &quot;DATA_READ&quot;,           &quot;exempted_members&quot;: [
 * &quot;user:foo@gmail.com&quot;           ]         },         {
 * &quot;log_type&quot;: &quot;DATA_WRITE&quot;,         }       ]     }  This
 * enables &#39;DATA_READ&#39; and &#39;DATA_WRITE&#39; logging, while exempting
 * foo@gmail.com from DATA_READ logging.
 */
export interface Schema$AuditLogConfig {
  /**
   * Specifies the identities that do not cause logging for this type of
   * permission. Follows the same format of Binding.members.
   */
  exemptedMembers: string[];
  /**
   * The log type that this config enables.
   */
  logType: string;
}
/**
 * Associates `members` with a `role`.
 */
export interface Schema$Binding {
  /**
   * Specifies the identities requesting access for a Cloud Platform resource.
   * `members` can have the following values:  * `allUsers`: A special
   * identifier that represents anyone who is    on the internet; with or
   * without a Google account.  * `allAuthenticatedUsers`: A special identifier
   * that represents anyone    who is authenticated with a Google account or a
   * service account.  * `user:{emailid}`: An email address that represents a
   * specific Google    account. For example, `alice@gmail.com` or
   * `joe@example.com`.   * `serviceAccount:{emailid}`: An email address that
   * represents a service    account. For example,
   * `my-other-app@appspot.gserviceaccount.com`.  * `group:{emailid}`: An email
   * address that represents a Google group.    For example,
   * `admins@example.com`.   * `domain:{domain}`: A Google Apps domain name that
   * represents all the    users of that domain. For example, `google.com` or
   * `example.com`.
   */
  members: string[];
  /**
   * Role that is assigned to `members`. For example, `roles/viewer`,
   * `roles/editor`, or `roles/owner`. Required
   */
  role: string;
}
/**
 * A Folder in an Organization&#39;s resource hierarchy, used to organize that
 * Organization&#39;s resources.
 */
export interface Schema$Folder {
  /**
   * Output only. Timestamp when the Folder was created. Assigned by the server.
   */
  createTime: string;
  /**
   * The folder’s display name. A folder’s display name must be unique amongst
   * its siblings, e.g. no two folders with the same parent can share the same
   * display name. The display name must start and end with a letter or digit,
   * may contain letters, digits, spaces, hyphens and underscores and can be no
   * longer than 30 characters. This is captured by the regular expression:
   * [\p{L}\p{N}]({\p{L}\p{N}_- ]{0,28}[\p{L}\p{N}])?.
   */
  displayName: string;
  /**
   * Output only.  The lifecycle state of the folder. Updates to the
   * lifecycle_state must be performed via DeleteFolder and UndeleteFolder.
   */
  lifecycleState: string;
  /**
   * Output only. The resource name of the Folder. Its format is
   * `folders/{folder_id}`, for example: &quot;folders/1234&quot;.
   */
  name: string;
  /**
   * The Folder’s parent&#39;s resource name. Updates to the folder&#39;s parent
   * must be performed via MoveFolder.
   */
  parent: string;
}
/**
 * Metadata describing a long running folder operation
 */
export interface Schema$FolderOperation {
  /**
   * The resource name of the folder or organization we are either creating the
   * folder under or moving the folder to.
   */
  destinationParent: string;
  /**
   * The display name of the folder.
   */
  displayName: string;
  /**
   * The type of this operation.
   */
  operationType: string;
  /**
   * The resource name of the folder&#39;s parent. Only applicable when the
   * operation_type is MOVE.
   */
  sourceParent: string;
}
/**
 * A classification of the Folder Operation error.
 */
export interface Schema$FolderOperationError {
  /**
   * The type of operation error experienced.
   */
  errorMessageId: string;
}
/**
 * Request message for `GetIamPolicy` method.
 */
export interface Schema$GetIamPolicyRequest {}
/**
 * The ListFolders response message.
 */
export interface Schema$ListFoldersResponse {
  /**
   * A possibly paginated list of Folders that are direct descendants of the
   * specified parent resource.
   */
  folders: Schema$Folder[];
  /**
   * A pagination token returned from a previous call to `ListFolders` that
   * indicates from where listing should continue. This field is optional.
   */
  nextPageToken: string;
}
/**
 * The MoveFolder request message.
 */
export interface Schema$MoveFolderRequest {
  /**
   * The resource name of the Folder or Organization to reparent the folder
   * under. Must be of the form `folders/{folder_id}` or
   * `organizations/{org_id}`.
   */
  destinationParent: string;
}
/**
 * This resource represents a long-running operation that is the result of a
 * network API call.
 */
export interface Schema$Operation {
  /**
   * If the value is `false`, it means the operation is still in progress. If
   * `true`, the operation is completed, and either `error` or `response` is
   * available.
   */
  done: boolean;
  /**
   * The error result of the operation in case of failure or cancellation.
   */
  error: Schema$Status;
  /**
   * Service-specific metadata associated with the operation.  It typically
   * contains progress information and common metadata such as create time. Some
   * services might not provide such metadata.  Any method that returns a
   * long-running operation should document the metadata type, if any.
   */
  metadata: any;
  /**
   * The server-assigned name, which is only unique within the same service that
   * originally returns it. If you use the default HTTP mapping, the `name`
   * should have the format of `operations/some/unique/name`.
   */
  name: string;
  /**
   * The normal response of the operation in case of success.  If the original
   * method returns no data on success, such as `Delete`, the response is
   * `google.protobuf.Empty`.  If the original method is standard
   * `Get`/`Create`/`Update`, the response should be the resource.  For other
   * methods, the response should have the type `XxxResponse`, where `Xxx` is
   * the original method name.  For example, if the original method name is
   * `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
   */
  response: any;
}
/**
 * Defines an Identity and Access Management (IAM) policy. It is used to specify
 * access control policies for Cloud Platform resources.   A `Policy` consists
 * of a list of `bindings`. A `Binding` binds a list of `members` to a `role`,
 * where the members can be user accounts, Google groups, Google domains, and
 * service accounts. A `role` is a named list of permissions defined by IAM.
 * **Example**      {       &quot;bindings&quot;: [         {
 * &quot;role&quot;: &quot;roles/owner&quot;,           &quot;members&quot;: [
 * &quot;user:mike@example.com&quot;,
 * &quot;group:admins@example.com&quot;,
 * &quot;domain:google.com&quot;,
 * &quot;serviceAccount:my-other-app@appspot.gserviceaccount.com&quot;,
 * ]         },         {           &quot;role&quot;: &quot;roles/viewer&quot;,
 * &quot;members&quot;: [&quot;user:sean@example.com&quot;]         }       ]
 * }  For a description of IAM and its features, see the [IAM developer&#39;s
 * guide](https://cloud.google.com/iam/docs).
 */
export interface Schema$Policy {
  /**
   * Specifies cloud audit logging configuration for this policy.
   */
  auditConfigs: Schema$AuditConfig[];
  /**
   * Associates a list of `members` to a `role`. `bindings` with no members will
   * result in an error.
   */
  bindings: Schema$Binding[];
  /**
   * `etag` is used for optimistic concurrency control as a way to help prevent
   * simultaneous updates of a policy from overwriting each other. It is
   * strongly suggested that systems make use of the `etag` in the
   * read-modify-write cycle to perform policy updates in order to avoid race
   * conditions: An `etag` is returned in the response to `getIamPolicy`, and
   * systems are expected to put that etag in the request to `setIamPolicy` to
   * ensure that their change will be applied to the same version of the policy.
   * If no `etag` is provided in the call to `setIamPolicy`, then the existing
   * policy is overwritten blindly.
   */
  etag: string;
  /**
   * Deprecated.
   */
  version: number;
}
/**
 * A status object which is used as the `metadata` field for the Operation
 * returned by CreateProject. It provides insight for when significant phases of
 * Project creation have completed.
 */
export interface Schema$ProjectCreationStatus {
  /**
   * Creation time of the project creation workflow.
   */
  createTime: string;
  /**
   * True if the project can be retrieved using GetProject. No other operations
   * on the project are guaranteed to work until the project creation is
   * complete.
   */
  gettable: boolean;
  /**
   * True if the project creation process is complete.
   */
  ready: boolean;
}
/**
 * The request message for searching folders.
 */
export interface Schema$SearchFoldersRequest {
  /**
   * The maximum number of folders to return in the response. This field is
   * optional.
   */
  pageSize: number;
  /**
   * A pagination token returned from a previous call to `SearchFolders` that
   * indicates from where search should continue. This field is optional.
   */
  pageToken: string;
  /**
   * Search criteria used to select the Folders to return. If no search criteria
   * is specified then all accessible folders will be returned.  Query
   * expressions can be used to restrict results based upon displayName,
   * lifecycleState and parent, where the operators `=`, `NOT`, `AND` and `OR`
   * can be used along with the suffix wildcard symbol `*`.  Some example
   * queries are:  |Query | Description| |----- | -----------|
   * |displayName=Test* | Folders whose display name starts with
   * &quot;Test&quot;. |lifecycleState=ACTIVE | Folders whose lifecycleState is
   * ACTIVE. |parent=folders/123 | Folders whose parent is
   * &quot;folders/123&quot;. |parent=folders/123 AND lifecycleState=ACTIVE |
   * Active folders whose parent is &quot;folders/123&quot;.|
   */
  query: string;
}
/**
 * The response message for searching folders.
 */
export interface Schema$SearchFoldersResponse {
  /**
   * A possibly paginated folder search results. the specified parent resource.
   */
  folders: Schema$Folder[];
  /**
   * A pagination token returned from a previous call to `SearchFolders` that
   * indicates from where searching should continue. This field is optional.
   */
  nextPageToken: string;
}
/**
 * Request message for `SetIamPolicy` method.
 */
export interface Schema$SetIamPolicyRequest {
  /**
   * REQUIRED: The complete policy to be applied to the `resource`. The size of
   * the policy is limited to a few 10s of KB. An empty policy is a valid policy
   * but certain Cloud Platform services (such as Projects) might reject them.
   */
  policy: Schema$Policy;
  /**
   * OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only
   * the fields in the mask will be modified. If no mask is provided, the
   * following default mask is used: paths: &quot;bindings, etag&quot; This
   * field is only used by Cloud IAM.
   */
  updateMask: string;
}
/**
 * The `Status` type defines a logical error model that is suitable for
 * different programming environments, including REST APIs and RPC APIs. It is
 * used by [gRPC](https://github.com/grpc). The error model is designed to be:
 * - Simple to use and understand for most users - Flexible enough to meet
 * unexpected needs  # Overview  The `Status` message contains three pieces of
 * data: error code, error message, and error details. The error code should be
 * an enum value of google.rpc.Code, but it may accept additional error codes if
 * needed.  The error message should be a developer-facing English message that
 * helps developers *understand* and *resolve* the error. If a localized
 * user-facing error message is needed, put the localized message in the error
 * details or localize it in the client. The optional error details may contain
 * arbitrary information about the error. There is a predefined set of error
 * detail types in the package `google.rpc` that can be used for common error
 * conditions.  # Language mapping  The `Status` message is the logical
 * representation of the error model, but it is not necessarily the actual wire
 * format. When the `Status` message is exposed in different client libraries
 * and different wire protocols, it can be mapped differently. For example, it
 * will likely be mapped to some exceptions in Java, but more likely mapped to
 * some error codes in C.  # Other uses  The error model and the `Status`
 * message can be used in a variety of environments, either with or without
 * APIs, to provide a consistent developer experience across different
 * environments.  Example uses of this error model include:  - Partial errors.
 * If a service needs to return partial errors to the client,     it may embed
 * the `Status` in the normal response to indicate the partial     errors.  -
 * Workflow errors. A typical workflow has multiple steps. Each step may
 * have a `Status` message for error reporting.  - Batch operations. If a client
 * uses batch request and batch response, the     `Status` message should be
 * used directly inside batch response, one for     each error sub-response.  -
 * Asynchronous operations. If an API call embeds asynchronous operation
 * results in its response, the status of those operations should be
 * represented directly using the `Status` message.  - Logging. If some API
 * errors are stored in logs, the message `Status` could     be used directly
 * after any stripping needed for security/privacy reasons.
 */
export interface Schema$Status {
  /**
   * The status code, which should be an enum value of google.rpc.Code.
   */
  code: number;
  /**
   * A list of messages that carry the error details.  There is a common set of
   * message types for APIs to use.
   */
  details: any[];
  /**
   * A developer-facing error message, which should be in English. Any
   * user-facing error message should be localized and sent in the
   * google.rpc.Status.details field, or localized by the client.
   */
  message: string;
}
/**
 * Request message for `TestIamPermissions` method.
 */
export interface Schema$TestIamPermissionsRequest {
  /**
   * The set of permissions to check for the `resource`. Permissions with
   * wildcards (such as &#39;*&#39; or &#39;storage.*&#39;) are not allowed. For
   * more information see [IAM
   * Overview](https://cloud.google.com/iam/docs/overview#permissions).
   */
  permissions: string[];
}
/**
 * Response message for `TestIamPermissions` method.
 */
export interface Schema$TestIamPermissionsResponse {
  /**
   * A subset of `TestPermissionsRequest.permissions` that the caller is
   * allowed.
   */
  permissions: string[];
}
/**
 * The UndeleteFolder request message.
 */
export interface Schema$UndeleteFolderRequest {}

export class Resource$Folders {
  root: Cloudresourcemanager;
  constructor(root: Cloudresourcemanager) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * cloudresourcemanager.folders.create
   * @desc Creates a Folder in the resource hierarchy. Returns an Operation
   * which can be used to track the progress of the folder creation workflow.
   * Upon success the Operation.response field will be populated with the
   * created Folder.  In order to succeed, the addition of this new Folder must
   * not violate the Folder naming, height or fanout constraints.  + The
   * Folder's display_name must be distinct from all other Folder's that share
   * its parent. + The addition of the Folder must not cause the active Folder
   * hierarchy to exceed a height of 4. Note, the full active + deleted Folder
   * hierarchy is allowed to reach a height of 8; this provides additional
   * headroom when moving folders that contain deleted folders. + The addition
   * of the Folder must not cause the total number of Folders under its parent
   * to exceed 100.  If the operation fails due to a folder constraint
   * violation, a PreconditionFailure explaining the violation will be returned.
   * If the failure occurs synchronously then the PreconditionFailure will be
   * returned via the Status.details field and if it occurs asynchronously then
   * the PreconditionFailure will be returned via the the Operation.error field.
   * The caller must have `resourcemanager.folders.create` permission on the
   * identified parent.
   * @alias cloudresourcemanager.folders.create
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.parent The resource name of the new Folder's parent. Must be of the form `folders/{folder_id}` or `organizations/{org_id}`.
   * @param {().Folder} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  create(params: any, options?: MethodOptions): AxiosPromise<Schema$Operation>;
  create(
      params: any,
      options: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>): void;
  create(
      params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>):
      void|AxiosPromise<Schema$Operation> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2/folders').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: [],
      pathParams: [],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Operation>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Operation>(parameters);
    }
  }


  /**
   * cloudresourcemanager.folders.delete
   * @desc Requests deletion of a Folder. The Folder is moved into the
   * DELETE_REQUESTED state immediately, and is deleted approximately 30 days
   * later. This method may only be called on an empty Folder in the ACTIVE
   * state, where a Folder is empty if it doesn't contain any Folders or
   * Projects in the ACTIVE state. The caller must have
   * `resourcemanager.folders.delete` permission on the identified folder.
   * @alias cloudresourcemanager.folders.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name the resource name of the Folder to be deleted. Must be of the form `folders/{folder_id}`.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params: any, options?: MethodOptions): AxiosPromise<Schema$Folder>;
  delete(
      params: any, options: MethodOptions|BodyResponseCallback<Schema$Folder>,
      callback?: BodyResponseCallback<Schema$Folder>): void;
  delete(
      params: any, options?: MethodOptions|BodyResponseCallback<Schema$Folder>,
      callback?: BodyResponseCallback<Schema$Folder>):
      void|AxiosPromise<Schema$Folder> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2/{name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Folder>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Folder>(parameters);
    }
  }


  /**
   * cloudresourcemanager.folders.get
   * @desc Retrieves a Folder identified by the supplied resource name. Valid
   * Folder resource names have the format `folders/{folder_id}` (for example,
   * `folders/1234`). The caller must have `resourcemanager.folders.get`
   * permission on the identified folder.
   * @alias cloudresourcemanager.folders.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name The resource name of the Folder to retrieve. Must be of the form `folders/{folder_id}`.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params: any, options?: MethodOptions): AxiosPromise<Schema$Folder>;
  get(params: any, options: MethodOptions|BodyResponseCallback<Schema$Folder>,
      callback?: BodyResponseCallback<Schema$Folder>): void;
  get(params: any, options?: MethodOptions|BodyResponseCallback<Schema$Folder>,
      callback?: BodyResponseCallback<Schema$Folder>):
      void|AxiosPromise<Schema$Folder> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2/{name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Folder>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Folder>(parameters);
    }
  }


  /**
   * cloudresourcemanager.folders.getIamPolicy
   * @desc Gets the access control policy for a Folder. The returned policy may
   * be empty if no such policy or resource exists. The `resource` field should
   * be the Folder's resource name, e.g. "folders/1234". The caller must have
   * `resourcemanager.folders.getIamPolicy` permission on the identified folder.
   * @alias cloudresourcemanager.folders.getIamPolicy
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
   * @param {().GetIamPolicyRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  getIamPolicy(params: any, options?: MethodOptions):
      AxiosPromise<Schema$Policy>;
  getIamPolicy(
      params: any, options: MethodOptions|BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>): void;
  getIamPolicy(
      params: any, options?: MethodOptions|BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>):
      void|AxiosPromise<Schema$Policy> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2/{resource}:getIamPolicy')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['resource'],
      pathParams: ['resource'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Policy>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Policy>(parameters);
    }
  }


  /**
   * cloudresourcemanager.folders.list
   * @desc Lists the Folders that are direct descendants of supplied parent
   * resource. List provides a strongly consistent view of the Folders
   * underneath the specified parent resource. List returns Folders sorted based
   * upon the (ascending) lexical ordering of their display_name. The caller
   * must have `resourcemanager.folders.list` permission on the identified
   * parent.
   * @alias cloudresourcemanager.folders.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {integer=} params.pageSize The maximum number of Folders to return in the response. This field is optional.
   * @param {string=} params.pageToken A pagination token returned from a previous call to `ListFolders` that indicates where this listing should continue from. This field is optional.
   * @param {string=} params.parent The resource name of the Organization or Folder whose Folders are being listed. Must be of the form `folders/{folder_id}` or `organizations/{org_id}`. Access to this method is controlled by checking the `resourcemanager.folders.list` permission on the `parent`.
   * @param {boolean=} params.showDeleted Controls whether Folders in the DELETE_REQUESTED state should be returned. Defaults to false. This field is optional.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params: any, options?: MethodOptions):
      AxiosPromise<Schema$ListFoldersResponse>;
  list(
      params: any,
      options: MethodOptions|BodyResponseCallback<Schema$ListFoldersResponse>,
      callback?: BodyResponseCallback<Schema$ListFoldersResponse>): void;
  list(
      params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ListFoldersResponse>,
      callback?: BodyResponseCallback<Schema$ListFoldersResponse>):
      void|AxiosPromise<Schema$ListFoldersResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2/folders').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: [],
      pathParams: [],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListFoldersResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListFoldersResponse>(parameters);
    }
  }


  /**
   * cloudresourcemanager.folders.move
   * @desc Moves a Folder under a new resource parent. Returns an Operation
   * which can be used to track the progress of the folder move workflow. Upon
   * success the Operation.response field will be populated with the moved
   * Folder. Upon failure, a FolderOperationError categorizing the failure cause
   * will be returned - if the failure occurs synchronously then the
   * FolderOperationError will be returned via the Status.details field and if
   * it occurs asynchronously then the FolderOperation will be returned via the
   * the Operation.error field. In addition, the Operation.metadata field will
   * be populated with a FolderOperation message as an aid to stateless clients.
   * Folder moves will be rejected if they violate either the naming, height or
   * fanout constraints described in the CreateFolder documentation. The caller
   * must have `resourcemanager.folders.move` permission on the folder's current
   * and proposed new parent.
   * @alias cloudresourcemanager.folders.move
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name The resource name of the Folder to move. Must be of the form folders/{folder_id}
   * @param {().MoveFolderRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  move(params: any, options?: MethodOptions): AxiosPromise<Schema$Operation>;
  move(
      params: any,
      options: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>): void;
  move(
      params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>):
      void|AxiosPromise<Schema$Operation> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2/{name}:move').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Operation>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Operation>(parameters);
    }
  }


  /**
   * cloudresourcemanager.folders.patch
   * @desc Updates a Folder, changing its display_name. Changes to the folder
   * display_name will be rejected if they violate either the display_name
   * formatting rules or naming constraints described in the CreateFolder
   * documentation.  The Folder's display name must start and end with a letter
   * or digit, may contain letters, digits, spaces, hyphens and underscores and
   * can be no longer than 30 characters. This is captured by the regular
   * expression: [\p{L}\p{N}]({\p{L}\p{N}_- ]{0,28}[\p{L}\p{N}])?. The caller
   * must have `resourcemanager.folders.update` permission on the identified
   * folder.  If the update fails due to the unique name constraint then a
   * PreconditionFailure explaining this violation will be returned in the
   * Status.details field.
   * @alias cloudresourcemanager.folders.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Output only. The resource name of the Folder. Its format is `folders/{folder_id}`, for example: "folders/1234".
   * @param {string=} params.updateMask Fields to be updated. Only the `display_name` can be updated.
   * @param {().Folder} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch(params: any, options?: MethodOptions): AxiosPromise<Schema$Folder>;
  patch(
      params: any, options: MethodOptions|BodyResponseCallback<Schema$Folder>,
      callback?: BodyResponseCallback<Schema$Folder>): void;
  patch(
      params: any, options?: MethodOptions|BodyResponseCallback<Schema$Folder>,
      callback?: BodyResponseCallback<Schema$Folder>):
      void|AxiosPromise<Schema$Folder> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2/{name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Folder>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Folder>(parameters);
    }
  }


  /**
   * cloudresourcemanager.folders.search
   * @desc Search for folders that match specific filter criteria. Search
   * provides an eventually consistent view of the folders a user has access to
   * which meet the specified filter criteria.  This will only return folders on
   * which the caller has the permission `resourcemanager.folders.get`.
   * @alias cloudresourcemanager.folders.search
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {().SearchFoldersRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  search(params: any, options?: MethodOptions):
      AxiosPromise<Schema$SearchFoldersResponse>;
  search(
      params: any,
      options: MethodOptions|BodyResponseCallback<Schema$SearchFoldersResponse>,
      callback?: BodyResponseCallback<Schema$SearchFoldersResponse>): void;
  search(
      params: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$SearchFoldersResponse>,
      callback?: BodyResponseCallback<Schema$SearchFoldersResponse>):
      void|AxiosPromise<Schema$SearchFoldersResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2/folders:search').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: [],
      pathParams: [],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$SearchFoldersResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$SearchFoldersResponse>(parameters);
    }
  }


  /**
   * cloudresourcemanager.folders.setIamPolicy
   * @desc Sets the access control policy on a Folder, replacing any existing
   * policy. The `resource` field should be the Folder's resource name, e.g.
   * "folders/1234". The caller must have `resourcemanager.folders.setIamPolicy`
   * permission on the identified folder.
   * @alias cloudresourcemanager.folders.setIamPolicy
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.resource_ REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
   * @param {().SetIamPolicyRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  setIamPolicy(params: any, options?: MethodOptions):
      AxiosPromise<Schema$Policy>;
  setIamPolicy(
      params: any, options: MethodOptions|BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>): void;
  setIamPolicy(
      params: any, options?: MethodOptions|BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>):
      void|AxiosPromise<Schema$Policy> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2/{resource}:setIamPolicy')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['resource'],
      pathParams: ['resource'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Policy>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Policy>(parameters);
    }
  }


  /**
   * cloudresourcemanager.folders.testIamPermissions
   * @desc Returns permissions that a caller has on the specified Folder. The
   * `resource` field should be the Folder's resource name, e.g. "folders/1234".
   * There are no permissions required for making this API call.
   * @alias cloudresourcemanager.folders.testIamPermissions
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
   * @param {().TestIamPermissionsRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  testIamPermissions(params: any, options?: MethodOptions):
      AxiosPromise<Schema$TestIamPermissionsResponse>;
  testIamPermissions(
      params: any,
      options: MethodOptions|
      BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
  testIamPermissions(
      params: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>):
      void|AxiosPromise<Schema$TestIamPermissionsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2/{resource}:testIamPermissions')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['resource'],
      pathParams: ['resource'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$TestIamPermissionsResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$TestIamPermissionsResponse>(parameters);
    }
  }


  /**
   * cloudresourcemanager.folders.undelete
   * @desc Cancels the deletion request for a Folder. This method may only be
   * called on a Folder in the DELETE_REQUESTED state. In order to succeed, the
   * Folder's parent must be in the ACTIVE state. In addition, reintroducing the
   * folder into the tree must not violate folder naming, height and fanout
   * constraints described in the CreateFolder documentation. The caller must
   * have `resourcemanager.folders.undelete` permission on the identified
   * folder.
   * @alias cloudresourcemanager.folders.undelete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name The resource name of the Folder to undelete. Must be of the form `folders/{folder_id}`.
   * @param {().UndeleteFolderRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  undelete(params: any, options?: MethodOptions): AxiosPromise<Schema$Folder>;
  undelete(
      params: any, options: MethodOptions|BodyResponseCallback<Schema$Folder>,
      callback?: BodyResponseCallback<Schema$Folder>): void;
  undelete(
      params: any, options?: MethodOptions|BodyResponseCallback<Schema$Folder>,
      callback?: BodyResponseCallback<Schema$Folder>):
      void|AxiosPromise<Schema$Folder> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl + '/v2/{name}:undelete').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Folder>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Folder>(parameters);
    }
  }
}
