/* tslint:disable */
/* eslint-disable */
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
import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { InlineResponse20040 } from '../models';
import { InlineResponse400 } from '../models';
/**
 * CurrentUserApi - axios parameter creator
 * @export
 */
export const CurrentUserApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns the user object corresponding to the agent making the request, or returns a 401 error if the user is unauthenticated.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1MeGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/me/`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the user roles corresponding to the agent making the request, or returns a 401 error if the user is unauthenticated.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1MeRolesGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/me/roles/`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CurrentUserApi - functional programming interface
 * @export
 */
export const CurrentUserApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Returns the user object corresponding to the agent making the request, or returns a 401 error if the user is unauthenticated.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1MeGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse20040>>> {
            const localVarAxiosArgs = await CurrentUserApiAxiosParamCreator(configuration).apiV1MeGet(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Returns the user roles corresponding to the agent making the request, or returns a 401 error if the user is unauthenticated.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1MeRolesGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse20040>>> {
            const localVarAxiosArgs = await CurrentUserApiAxiosParamCreator(configuration).apiV1MeRolesGet(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * CurrentUserApi - factory interface
 * @export
 */
export const CurrentUserApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Returns the user object corresponding to the agent making the request, or returns a 401 error if the user is unauthenticated.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1MeGet(options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20040>> {
            return CurrentUserApiFp(configuration).apiV1MeGet(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the user roles corresponding to the agent making the request, or returns a 401 error if the user is unauthenticated.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1MeRolesGet(options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20040>> {
            return CurrentUserApiFp(configuration).apiV1MeRolesGet(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * CurrentUserApi - object-oriented interface
 * @export
 * @class CurrentUserApi
 * @extends {BaseAPI}
 */
export class CurrentUserApi extends BaseAPI {
    /**
     * Returns the user object corresponding to the agent making the request, or returns a 401 error if the user is unauthenticated.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CurrentUserApi
     */
    public async apiV1MeGet(options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse20040>> {
        return CurrentUserApiFp(this.configuration).apiV1MeGet(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Returns the user roles corresponding to the agent making the request, or returns a 401 error if the user is unauthenticated.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CurrentUserApi
     */
    public async apiV1MeRolesGet(options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse20040>> {
        return CurrentUserApiFp(this.configuration).apiV1MeRolesGet(options).then((request) => request(this.axios, this.basePath));
    }
}