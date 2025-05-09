import { VikingdbResponse } from "../types";
import type { FieldInfo } from "../types";

export type VectorizeMap = {
  text_field?: string;
  image_field?: string;
  dim?: number;
  model_name?: string;
  model_version?: string;
};
export interface CollectionVectorize {
  dense?: VectorizeMap;
  sparse?: VectorizeMap;
}

export type Vectorize = CollectionVectorize | CollectionVectorize[];
export interface CreateCollectionRequest {
  CollectionName: string;
  Description?: string;
  CollectionAliases?: string[];
  Fields: FieldInfo[];
  Vectorize?: Vectorize;
}
/* CreateCollection end */

/* GetCollectionInfo start */
interface GetCollectionInfoByCollectionNameRequest {
  CollectionName: string;
}

interface GetCollectionInfoByCollectionAliasesRequest {
  CollectionAlias: string;
}

export type GetCollectionInfoRequest =
  | GetCollectionInfoByCollectionAliasesRequest
  | GetCollectionInfoByCollectionNameRequest;

export interface Stat {
  DataNumber: number;
}

export interface CollectionInfo {
  CollectionName: string;
  Description?: string;
  CollectionAliases?: string[];
  Fields: FieldInfo[];
  Stat: Stat;
  IndexNames: string[];
  IndexNumber: number;
  CreateTime: string;
  UpdateTime: string;
  UpdatePerson: string;
}

export class GetCollectionInfoResponse extends VikingdbResponse {
  constructor(
    public readonly CollectionInfo: CollectionInfo,
    OriginalRequest: string,
    LogId: string
  ) {
    super(OriginalRequest, LogId);
  }
}
/* GetCollectionInfo end */

/* ListCollections start */
export class ListCollectionsResponse extends VikingdbResponse {
  constructor(
    public readonly ListCollections: CollectionInfo[],
    OriginalRequest: string,
    LogId: string
  ) {
    super(OriginalRequest, LogId);
  }
}
/* ListCollections end */

/* UpdateCollection start */
export type UpdateCollectionRequest = CreateCollectionRequest;
/* UpdateCollection end */

/* DropCollection start */
interface DropCollectionByCollectionNameRequest {
  CollectionName: string;
}

interface DropCollectionByCollectionAliasRequest {
  CollectionAlias: string;
}

export type DropCollectionRequest =
  | DropCollectionByCollectionNameRequest
  | DropCollectionByCollectionAliasRequest;
/* DropCollection end */
