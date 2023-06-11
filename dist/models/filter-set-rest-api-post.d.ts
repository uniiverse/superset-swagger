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
/**
 *
 * @export
 * @interface FilterSetRestApiPost
 */
export interface FilterSetRestApiPost {
    /**
     *
     * @type {string}
     * @memberof FilterSetRestApiPost
     */
    description?: string | null;
    /**
     *
     * @type {string}
     * @memberof FilterSetRestApiPost
     */
    jsonMetadata: string;
    /**
     *
     * @type {string}
     * @memberof FilterSetRestApiPost
     */
    name: string;
    /**
     *
     * @type {number}
     * @memberof FilterSetRestApiPost
     */
    ownerId?: number;
    /**
     *
     * @type {string}
     * @memberof FilterSetRestApiPost
     */
    ownerType: FilterSetRestApiPostOwnerTypeEnum;
}
/**
    * @export
    * @enum {string}
    */
export declare enum FilterSetRestApiPostOwnerTypeEnum {
    User = "User",
    Dashboard = "Dashboard"
}