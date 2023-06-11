/**
 * Superset
 * Superset
 *
 * OpenAPI spec version: v1
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { DeleteTagsSchema } from '../models';
import { GetInfoSchema } from '../models';
import { GetItemSchema } from '../models';
import { GetListSchema } from '../models';
import { GetRelatedSchema } from '../models';
import { InlineResponse2002 } from '../models';
import { InlineResponse20057 } from '../models';
import { InlineResponse20058 } from '../models';
import { InlineResponse20059 } from '../models';
import { InlineResponse20060 } from '../models';
import { InlineResponse20115 } from '../models';
import { InlineResponse400 } from '../models';
import { ObjectTypeObjectIdBody } from '../models';
import { RelatedResponseSchema } from '../models';
import { TagRestApiPost } from '../models';
import { TagRestApiPut } from '../models';
/**
 * TagsApi - axios parameter creator
 * @export
 */
export declare const TagsApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * Deletes multiple Tags. This will remove all tagged objects with this tag
     * @param {DeleteTagsSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1TagDelete: (q?: DeleteTagsSchema, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Get a list of tags, use Rison or JSON query parameters for filtering, sorting, pagination and  for selecting specific columns and metadata.
     * @param {GetListSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1TagGet: (q?: GetListSchema, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Gets all objects associated with a Tag.
     * @param {number} tagId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1TagGetObjectsGet: (tagId: number, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Several metadata information about tag API endpoints.
     * @param {GetInfoSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1TagInfoGet: (q?: GetInfoSchema, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Add tags to an object..
     * @param {ObjectTypeObjectIdBody} body Tag schema
     * @param {number} objectType
     * @param {number} objectId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1TagObjectTypeObjectIdPost: (body: ObjectTypeObjectIdBody, objectType: number, objectId: number, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Deletes a Tagged Object.
     * @param {string} tag
     * @param {number} objectType
     * @param {number} objectId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1TagObjectTypeObjectIdTagDelete: (tag: string, objectType: number, objectId: number, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @param {number} pk
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1TagPkDelete: (pk: number, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Get a tag detail information.
     * @param {number} pk
     * @param {GetItemSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1TagPkGet: (pk: number, q?: GetItemSchema, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @param {TagRestApiPut} body Model schema
     * @param {number} pk
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1TagPkPut: (body: TagRestApiPut, pk: number, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @param {TagRestApiPost} body Model schema
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1TagPost: (body: TagRestApiPost, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @param {string} columnName
     * @param {GetRelatedSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1TagRelatedColumnNameGet: (columnName: string, q?: GetRelatedSchema, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * TagsApi - functional programming interface
 * @export
 */
export declare const TagsApiFp: (configuration?: Configuration) => {
    /**
     * Deletes multiple Tags. This will remove all tagged objects with this tag
     * @param {DeleteTagsSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1TagDelete(q?: DeleteTagsSchema, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse400>>>;
    /**
     * Get a list of tags, use Rison or JSON query parameters for filtering, sorting, pagination and  for selecting specific columns and metadata.
     * @param {GetListSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1TagGet(q?: GetListSchema, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse20057>>>;
    /**
     * Gets all objects associated with a Tag.
     * @param {number} tagId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1TagGetObjectsGet(tagId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse20058>>>;
    /**
     * Several metadata information about tag API endpoints.
     * @param {GetInfoSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1TagInfoGet(q?: GetInfoSchema, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse2002>>>;
    /**
     * Add tags to an object..
     * @param {ObjectTypeObjectIdBody} body Tag schema
     * @param {number} objectType
     * @param {number} objectId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1TagObjectTypeObjectIdPost(body: ObjectTypeObjectIdBody, objectType: number, objectId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>>;
    /**
     * Deletes a Tagged Object.
     * @param {string} tag
     * @param {number} objectType
     * @param {number} objectId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1TagObjectTypeObjectIdTagDelete(tag: string, objectType: number, objectId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse400>>>;
    /**
     *
     * @param {number} pk
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1TagPkDelete(pk: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse400>>>;
    /**
     * Get a tag detail information.
     * @param {number} pk
     * @param {GetItemSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1TagPkGet(pk: number, q?: GetItemSchema, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse20059>>>;
    /**
     *
     * @param {TagRestApiPut} body Model schema
     * @param {number} pk
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1TagPkPut(body: TagRestApiPut, pk: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse20060>>>;
    /**
     *
     * @param {TagRestApiPost} body Model schema
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1TagPost(body: TagRestApiPost, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse20115>>>;
    /**
     *
     * @param {string} columnName
     * @param {GetRelatedSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1TagRelatedColumnNameGet(columnName: string, q?: GetRelatedSchema, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<RelatedResponseSchema>>>;
};
/**
 * TagsApi - factory interface
 * @export
 */
export declare const TagsApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * Deletes multiple Tags. This will remove all tagged objects with this tag
     * @param {DeleteTagsSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1TagDelete(q?: DeleteTagsSchema, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse400>>;
    /**
     * Get a list of tags, use Rison or JSON query parameters for filtering, sorting, pagination and  for selecting specific columns and metadata.
     * @param {GetListSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1TagGet(q?: GetListSchema, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20057>>;
    /**
     * Gets all objects associated with a Tag.
     * @param {number} tagId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1TagGetObjectsGet(tagId: number, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20058>>;
    /**
     * Several metadata information about tag API endpoints.
     * @param {GetInfoSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1TagInfoGet(q?: GetInfoSchema, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse2002>>;
    /**
     * Add tags to an object..
     * @param {ObjectTypeObjectIdBody} body Tag schema
     * @param {number} objectType
     * @param {number} objectId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1TagObjectTypeObjectIdPost(body: ObjectTypeObjectIdBody, objectType: number, objectId: number, options?: AxiosRequestConfig): Promise<AxiosResponse<void>>;
    /**
     * Deletes a Tagged Object.
     * @param {string} tag
     * @param {number} objectType
     * @param {number} objectId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1TagObjectTypeObjectIdTagDelete(tag: string, objectType: number, objectId: number, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse400>>;
    /**
     *
     * @param {number} pk
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1TagPkDelete(pk: number, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse400>>;
    /**
     * Get a tag detail information.
     * @param {number} pk
     * @param {GetItemSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1TagPkGet(pk: number, q?: GetItemSchema, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20059>>;
    /**
     *
     * @param {TagRestApiPut} body Model schema
     * @param {number} pk
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1TagPkPut(body: TagRestApiPut, pk: number, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20060>>;
    /**
     *
     * @param {TagRestApiPost} body Model schema
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1TagPost(body: TagRestApiPost, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20115>>;
    /**
     *
     * @param {string} columnName
     * @param {GetRelatedSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1TagRelatedColumnNameGet(columnName: string, q?: GetRelatedSchema, options?: AxiosRequestConfig): Promise<AxiosResponse<RelatedResponseSchema>>;
};
/**
 * TagsApi - object-oriented interface
 * @export
 * @class TagsApi
 * @extends {BaseAPI}
 */
export declare class TagsApi extends BaseAPI {
    /**
     * Deletes multiple Tags. This will remove all tagged objects with this tag
     * @param {DeleteTagsSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TagsApi
     */
    apiV1TagDelete(q?: DeleteTagsSchema, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse400>>;
    /**
     * Get a list of tags, use Rison or JSON query parameters for filtering, sorting, pagination and  for selecting specific columns and metadata.
     * @param {GetListSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TagsApi
     */
    apiV1TagGet(q?: GetListSchema, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20057>>;
    /**
     * Gets all objects associated with a Tag.
     * @param {number} tagId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TagsApi
     */
    apiV1TagGetObjectsGet(tagId: number, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20058>>;
    /**
     * Several metadata information about tag API endpoints.
     * @param {GetInfoSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TagsApi
     */
    apiV1TagInfoGet(q?: GetInfoSchema, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse2002>>;
    /**
     * Add tags to an object..
     * @param {ObjectTypeObjectIdBody} body Tag schema
     * @param {number} objectType
     * @param {number} objectId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TagsApi
     */
    apiV1TagObjectTypeObjectIdPost(body: ObjectTypeObjectIdBody, objectType: number, objectId: number, options?: AxiosRequestConfig): Promise<AxiosResponse<void>>;
    /**
     * Deletes a Tagged Object.
     * @param {string} tag
     * @param {number} objectType
     * @param {number} objectId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TagsApi
     */
    apiV1TagObjectTypeObjectIdTagDelete(tag: string, objectType: number, objectId: number, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse400>>;
    /**
     *
     * @param {number} pk
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TagsApi
     */
    apiV1TagPkDelete(pk: number, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse400>>;
    /**
     * Get a tag detail information.
     * @param {number} pk
     * @param {GetItemSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TagsApi
     */
    apiV1TagPkGet(pk: number, q?: GetItemSchema, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20059>>;
    /**
     *
     * @param {TagRestApiPut} body Model schema
     * @param {number} pk
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TagsApi
     */
    apiV1TagPkPut(body: TagRestApiPut, pk: number, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20060>>;
    /**
     *
     * @param {TagRestApiPost} body Model schema
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TagsApi
     */
    apiV1TagPost(body: TagRestApiPost, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20115>>;
    /**
     *
     * @param {string} columnName
     * @param {GetRelatedSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TagsApi
     */
    apiV1TagRelatedColumnNameGet(columnName: string, q?: GetRelatedSchema, options?: AxiosRequestConfig): Promise<AxiosResponse<RelatedResponseSchema>>;
}