/* eslint-disable */
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  BigInt: number;
  /** Regular expression */
  RegExp: any;
};

export const enum AbortReason {
  InventoryWasted = 'inventoryWasted',
  ParentAborted = 'parentAborted',
  ParentBecameFulfilled = 'parentBecameFulfilled',
  ParentBecameReady = 'parentBecameReady'
};

export type AbortReasonFilters = {
  eq?: Maybe<AbortReason>;
  in?: Maybe<Array<Maybe<AbortReason>>>;
  ne?: Maybe<AbortReason>;
  nin?: Maybe<Array<Maybe<AbortReason>>>;
};

export type ArrayFilters = {
  size?: Maybe<Scalars['BigInt']>;
};

export type Conversion = {
  _id: Scalars['String'];
  createdAt: Scalars['BigInt'];
  inputs: Maybe<Array<InventoryAmount>>;
  outputs: Maybe<Array<InventoryAmount>>;
  updatedAt: Scalars['BigInt'];
};

export type ConversionFilters = {
  _id?: Maybe<StringFilters>;
  createdAt?: Maybe<NumberFilters>;
  inputs?: Maybe<InventoryAmountFilters>;
  outputs?: Maybe<InventoryAmountFilters>;
  updatedAt?: Maybe<NumberFilters>;
};

export type ConversionInputInput = {
  amount: Scalars['BigInt'];
  inventoryId: Scalars['String'];
  requestId?: Maybe<Scalars['String']>;
};

export type ConversionSortBy = {
  createdAt?: Maybe<SortMethod>;
};

export type ConversionTargetInput = {
  amount: Scalars['BigInt'];
  itemId: Scalars['String'];
  requestId?: Maybe<Scalars['String']>;
  status?: Maybe<InventoryStatus>;
};

export type ConvertInventoryInput = {
  inputs: Array<ConversionInputInput>;
  targets: Array<ConversionTargetInput>;
};

export type CreateInventoryInput = {
  _id?: Maybe<Scalars['String']>;
  amount: Scalars['BigInt'];
  itemId: Scalars['String'];
  status?: Maybe<InventoryStatus>;
};

export type CreateItemInput = {
  _id?: Maybe<Scalars['String']>;
  defaultAmount?: Maybe<Scalars['BigInt']>;
  defaultExpiryTime?: Maybe<Scalars['BigInt']>;
  defaultPreparationTime?: Maybe<Scalars['BigInt']>;
  maxSubitems?: Maybe<Scalars['BigInt']>;
  minSubitems?: Maybe<Scalars['BigInt']>;
  name: Scalars['String'];
  subitems?: Maybe<Array<SubitemInput>>;
};

export type CreateShipmentInput = {
  _id?: Maybe<Scalars['String']>;
  arrivedAt?: Maybe<Scalars['BigInt']>;
  arrivesAt?: Maybe<Scalars['BigInt']>;
  items?: Maybe<Array<ShipmentItemInput>>;
  retailerId?: Maybe<Scalars['String']>;
  status?: Maybe<ShipmentStatus>;
};

export type CreateWasteInput = {
  _id?: Maybe<Scalars['String']>;
  amount: Scalars['BigInt'];
  inventoryId: Scalars['String'];
  reason?: Maybe<Scalars['String']>;
  requestId?: Maybe<Scalars['String']>;
  source: WasteSource;
};

export type Inventory = {
  _id: Scalars['String'];
  amount: Scalars['BigInt'];
  conversionId: Maybe<Scalars['String']>;
  createdAt: Scalars['BigInt'];
  expiresAt: Scalars['BigInt'];
  isForceCreated: Scalars['Boolean'];
  isGroup: Scalars['Boolean'];
  itemId: Scalars['String'];
  readyAt: Scalars['BigInt'];
  requestId: Maybe<Scalars['String']>;
  shipmentId: Maybe<Scalars['String']>;
  status: Maybe<InventoryStatus>;
  updatedAt: Scalars['BigInt'];
};

export type InventoryAmount = {
  amount: Scalars['BigInt'];
  inventoryId: Scalars['String'];
  requestId: Maybe<Scalars['String']>;
};

export type InventoryAmountFilters = {
  amount?: Maybe<NumberFilters>;
  inventoryId?: Maybe<StringFilters>;
  requestId?: Maybe<StringFilters>;
};

export type InventoryFilters = {
  _id?: Maybe<StringFilters>;
  amount?: Maybe<NumberFilters>;
  conversionId?: Maybe<StringFilters>;
  createdAt?: Maybe<NumberFilters>;
  expiresAt?: Maybe<NumberFilters>;
  isForceCreated?: Maybe<Scalars['Boolean']>;
  isGroup?: Maybe<Scalars['Boolean']>;
  itemId?: Maybe<StringFilters>;
  readyAt?: Maybe<NumberFilters>;
  requestId?: Maybe<StringFilters>;
  shipmentId?: Maybe<StringFilters>;
  status?: Maybe<InventoryStatusFilters>;
  updatedAt?: Maybe<NumberFilters>;
};

export type InventorySortBy = {
  createdAt?: Maybe<SortMethod>;
  name?: Maybe<SortMethod>;
  status?: Maybe<SortMethod>;
};

export const enum InventoryStatus {
  InProgress = 'inProgress',
  Ready = 'ready'
};

export type InventoryStatusFilters = {
  eq?: Maybe<InventoryStatus>;
  in?: Maybe<Array<InventoryStatus>>;
  ne?: Maybe<InventoryStatus>;
  nin?: Maybe<Array<InventoryStatus>>;
};

export type Item = {
  _id: Scalars['String'];
  availability: Scalars['BigInt'];
  createdAt: Scalars['BigInt'];
  defaultAmount: Scalars['BigInt'];
  defaultExpiryTime: Maybe<Scalars['BigInt']>;
  defaultPreparationTime: Scalars['BigInt'];
  inventories: Array<Inventory>;
  isVariable: Scalars['Boolean'];
  maxSubitems: Maybe<Scalars['BigInt']>;
  minSubitems: Scalars['BigInt'];
  name: Scalars['String'];
  subitems: Array<Subitem>;
  updatedAt: Scalars['BigInt'];
};

export type ItemFilters = {
  _id?: Maybe<StringFilters>;
  createdAt?: Maybe<NumberFilters>;
  defaultAmount?: Maybe<NumberFilters>;
  defaultExpiryTime?: Maybe<NumberFilters>;
  defaultPreparationTime?: Maybe<NumberFilters>;
  isVariable?: Maybe<Scalars['Boolean']>;
  maxSubitems?: Maybe<NumberFilters>;
  minSubitems?: Maybe<NumberFilters>;
  name?: Maybe<StringFilters>;
  subitem?: Maybe<SubitemFilters>;
  subitems?: Maybe<ArrayFilters>;
  updatedAt?: Maybe<NumberFilters>;
};

export type ItemRequestProps = {
  _id: Scalars['String'];
  amountNeeded?: Maybe<Scalars['BigInt']>;
  amountNeededPerParent: Scalars['BigInt'];
  ignoreGeneralInventory?: Maybe<Scalars['Boolean']>;
  itemId: Scalars['String'];
  parentRequestId?: Maybe<Scalars['String']>;
  prevRequestId?: Maybe<Scalars['String']>;
};

export type ItemSortBy = {
  createdAt?: Maybe<SortMethod>;
  name?: Maybe<SortMethod>;
};

export type Mutation = {
  convertInventory: Conversion;
  createInventories: Array<Inventory>;
  createItems: Maybe<Array<Item>>;
  createOrder: Order;
  createRequestTree: Array<Request>;
  createShipments: Array<Shipment>;
  createWastes: Array<Waste>;
  updateInventory: Inventory;
  updateItem: Item;
  updateOrder: Order;
  updateRequest: Maybe<Request>;
  updateShipment: Shipment;
};


export type MutationConvertInventoryArgs = {
  data: ConvertInventoryInput;
};


export type MutationCreateInventoriesArgs = {
  data: Array<CreateInventoryInput>;
};


export type MutationCreateItemsArgs = {
  data: Array<CreateItemInput>;
};


export type MutationCreateOrderArgs = {
  data: Array<ItemRequestProps>;
};


export type MutationCreateRequestTreeArgs = {
  data: Array<ItemRequestProps>;
};


export type MutationCreateShipmentsArgs = {
  data: Array<CreateShipmentInput>;
};


export type MutationCreateWastesArgs = {
  data: Array<CreateWasteInput>;
};


export type MutationUpdateInventoryArgs = {
  data: UpdateInventoryInput;
};


export type MutationUpdateItemArgs = {
  data: UpdateItemInput;
};


export type MutationUpdateOrderArgs = {
  data: UpdateOrderInput;
};


export type MutationUpdateRequestArgs = {
  data: UpdateRequestInput;
};


export type MutationUpdateShipmentArgs = {
  data: UpdateShipmentInput;
};

export type NumberFilters = {
  eq?: Maybe<Scalars['BigInt']>;
  gt?: Maybe<Scalars['BigInt']>;
  gte?: Maybe<Scalars['BigInt']>;
  in?: Maybe<Array<Maybe<Scalars['BigInt']>>>;
  lt?: Maybe<Scalars['BigInt']>;
  lte?: Maybe<Scalars['BigInt']>;
  ne?: Maybe<Scalars['BigInt']>;
  nin?: Maybe<Array<Maybe<Scalars['BigInt']>>>;
};

export type Order = {
  _id: Scalars['String'];
  abortedAt: Maybe<Scalars['BigInt']>;
  createdAt: Scalars['BigInt'];
  fulfilledAt: Maybe<Scalars['BigInt']>;
  requestId: Scalars['String'];
  status: OrderStatus;
  updatedAt: Scalars['BigInt'];
};

export type OrderFilters = {
  _id?: Maybe<StringFilters>;
  abortedAt?: Maybe<NumberFilters>;
  createdAt?: Maybe<NumberFilters>;
  fulfilledAt?: Maybe<NumberFilters>;
  requestId?: Maybe<StringFilters>;
  status?: Maybe<OrderStatusFilters>;
  updatedAt?: Maybe<NumberFilters>;
};

export type OrderSortBy = {
  createdAt?: Maybe<SortMethod>;
  name?: Maybe<SortMethod>;
  status?: Maybe<SortMethod>;
};

export const enum OrderStatus {
  Aborted = 'aborted',
  Fulfilled = 'fulfilled',
  Pending = 'pending'
};

export type OrderStatusFilters = {
  eq?: Maybe<OrderStatus>;
  in?: Maybe<Array<OrderStatus>>;
  ne?: Maybe<OrderStatus>;
  nin?: Maybe<Array<OrderStatus>>;
};

export type Query = {
  apiVersion: Scalars['String'];
  getConversions: Maybe<Array<Conversion>>;
  getInventories: Maybe<Array<Inventory>>;
  getItems: Maybe<Array<Item>>;
  getOrders: Maybe<Array<Order>>;
  getRequests: Maybe<Array<Request>>;
  getShipments: Maybe<Array<Shipment>>;
  getWastes: Maybe<Array<Waste>>;
};


export type QueryGetConversionsArgs = {
  filters?: Maybe<ConversionFilters>;
  limit?: Maybe<Scalars['BigInt']>;
  offset?: Maybe<Scalars['BigInt']>;
  sortBy?: Maybe<ConversionSortBy>;
};


export type QueryGetInventoriesArgs = {
  filters?: Maybe<InventoryFilters>;
  limit?: Maybe<Scalars['BigInt']>;
  offset?: Maybe<Scalars['BigInt']>;
  sortBy?: Maybe<InventorySortBy>;
};


export type QueryGetItemsArgs = {
  filters?: Maybe<ItemFilters>;
  limit?: Maybe<Scalars['BigInt']>;
  offset?: Maybe<Scalars['BigInt']>;
  sortBy?: Maybe<ItemSortBy>;
};


export type QueryGetOrdersArgs = {
  filters?: Maybe<OrderFilters>;
  limit?: Maybe<Scalars['BigInt']>;
  offset?: Maybe<Scalars['BigInt']>;
  sortBy?: Maybe<OrderSortBy>;
};


export type QueryGetRequestsArgs = {
  filters?: Maybe<RequestFilters>;
  limit?: Maybe<Scalars['BigInt']>;
  offset?: Maybe<Scalars['BigInt']>;
  sortBy?: Maybe<RequestSortBy>;
};


export type QueryGetShipmentsArgs = {
  filters?: Maybe<ShipmentFilters>;
  limit?: Maybe<Scalars['BigInt']>;
  offset?: Maybe<Scalars['BigInt']>;
  sortBy?: Maybe<ShipmentSortBy>;
};


export type QueryGetWastesArgs = {
  filters?: Maybe<WasteFilters>;
  limit?: Maybe<Scalars['BigInt']>;
  offset?: Maybe<Scalars['BigInt']>;
  sortBy?: Maybe<WasteSortBy>;
};


export type Request = {
  _id: Scalars['String'];
  abortReason: Maybe<AbortReason>;
  abortedAt: Maybe<Scalars['BigInt']>;
  amountInProgress: Scalars['BigInt'];
  amountNeeded: Scalars['BigInt'];
  amountNeededPerParent: Scalars['BigInt'];
  createdAt: Scalars['BigInt'];
  fulfilledAt: Maybe<Scalars['BigInt']>;
  ignoreGeneralInventory: Maybe<Scalars['Boolean']>;
  itemId: Scalars['String'];
  parentRequestId: Maybe<Scalars['String']>;
  preparedAt: Scalars['BigInt'];
  prevRequestId: Maybe<Scalars['String']>;
  readyAt: Maybe<Scalars['BigInt']>;
  status: RequestStatus;
  updatedAt: Scalars['BigInt'];
};

export type RequestFilters = {
  _id?: Maybe<StringFilters>;
  abortReason?: Maybe<AbortReasonFilters>;
  abortedAt?: Maybe<NumberFilters>;
  amountInProgress?: Maybe<NumberFilters>;
  amountNeeded?: Maybe<NumberFilters>;
  amountNeededPerParent?: Maybe<NumberFilters>;
  createdAt?: Maybe<NumberFilters>;
  fulfilledAt?: Maybe<NumberFilters>;
  ignoreGeneralInventory?: Maybe<Scalars['Boolean']>;
  itemId?: Maybe<StringFilters>;
  parentRequestId?: Maybe<StringFilters>;
  preparedAt?: Maybe<NumberFilters>;
  prevRequestId?: Maybe<StringFilters>;
  readyAt?: Maybe<NumberFilters>;
  status?: Maybe<RequestStatusFilters>;
  updatedAt?: Maybe<NumberFilters>;
};

export type RequestSortBy = {
  createdAt?: Maybe<SortMethod>;
  name?: Maybe<SortMethod>;
  status?: Maybe<SortMethod>;
};

export const enum RequestStatus {
  Aborted = 'aborted',
  Fulfilled = 'fulfilled',
  Pending = 'pending',
  Prepared = 'prepared',
  Ready = 'ready'
};

export type RequestStatusFilters = {
  eq?: Maybe<RequestStatus>;
  in?: Maybe<Array<RequestStatus>>;
  ne?: Maybe<RequestStatus>;
  nin?: Maybe<Array<RequestStatus>>;
};

export type Shipment = {
  _id: Scalars['String'];
  arrivedAt: Maybe<Scalars['BigInt']>;
  arrivesAt: Maybe<Scalars['BigInt']>;
  createdAt: Scalars['BigInt'];
  items: Maybe<Array<ShipmentItem>>;
  retailerId: Maybe<Scalars['String']>;
  status: Maybe<ShipmentStatus>;
  updatedAt: Scalars['BigInt'];
};

export type ShipmentFilters = {
  _id?: Maybe<StringFilters>;
  arrivedAt?: Maybe<NumberFilters>;
  arrivesAt?: Maybe<NumberFilters>;
  createdAt?: Maybe<NumberFilters>;
  items?: Maybe<ShipmentItemFilters>;
  retailerId?: Maybe<StringFilters>;
  status?: Maybe<ShipmentStatusFilters>;
  updatedAt?: Maybe<NumberFilters>;
};

export type ShipmentItem = {
  amount: Scalars['BigInt'];
  expiresAt: Maybe<Scalars['BigInt']>;
  itemId: Scalars['String'];
};

export type ShipmentItemFilters = {
  amount?: Maybe<NumberFilters>;
  expiresAt?: Maybe<NumberFilters>;
  itemId?: Maybe<StringFilters>;
};

export type ShipmentItemInput = {
  amount: Scalars['BigInt'];
  expiresAt?: Maybe<Scalars['BigInt']>;
  itemId: Scalars['String'];
};

export type ShipmentSortBy = {
  arrivedAt?: Maybe<SortMethod>;
  arrivesAt?: Maybe<SortMethod>;
  createdAt?: Maybe<SortMethod>;
  status?: Maybe<SortMethod>;
};

export const enum ShipmentStatus {
  Arrived = 'arrived',
  Dispatched = 'dispatched',
  Processing = 'processing'
};

export type ShipmentStatusFilters = {
  eq?: Maybe<ShipmentStatus>;
  in?: Maybe<Array<ShipmentStatus>>;
  ne?: Maybe<ShipmentStatus>;
  nin?: Maybe<Array<ShipmentStatus>>;
};

export const enum SortMethod {
  Asc = 'asc',
  Desc = 'desc'
};

export type StringFilters = {
  eq?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  ne?: Maybe<Scalars['String']>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  not?: Maybe<Scalars['RegExp']>;
  options?: Maybe<Scalars['String']>;
  regex?: Maybe<Scalars['RegExp']>;
};

export type Subitem = {
  _id: Scalars['String'];
  defaultAmount: Scalars['BigInt'];
  document: Item;
  maxAmount: Maybe<Scalars['BigInt']>;
  minAmount: Scalars['BigInt'];
};

export type SubitemFilters = {
  _id?: Maybe<StringFilters>;
  defaultAmount?: Maybe<NumberFilters>;
  maxAmount?: Maybe<NumberFilters>;
  minAmount?: Maybe<NumberFilters>;
};

export type SubitemInput = {
  _id: Scalars['String'];
  defaultAmount: Scalars['BigInt'];
  maxAmount?: Maybe<Scalars['BigInt']>;
  minAmount: Scalars['BigInt'];
};

export type UpdateInventoryInput = {
  _id: Scalars['String'];
  status: InventoryStatus;
};

export type UpdateItemInput = {
  _id: Scalars['String'];
  defaultAmount?: Maybe<Scalars['BigInt']>;
  defaultExpiryTime?: Maybe<Scalars['BigInt']>;
  defaultPreparationTime?: Maybe<Scalars['BigInt']>;
  maxSubitems?: Maybe<Scalars['BigInt']>;
  minSubitems?: Maybe<Scalars['BigInt']>;
  name?: Maybe<Scalars['String']>;
  subitems?: Maybe<Array<SubitemInput>>;
};

export type UpdateOrderInput = {
  _id: Scalars['String'];
  abortReason?: Maybe<Scalars['String']>;
  status: OrderStatus;
};

export type UpdateRequestInput = {
  _id: Scalars['String'];
  status: RequestStatus;
};

export type UpdateShipmentInput = {
  _id: Scalars['String'];
  arrivedAt?: Maybe<Scalars['BigInt']>;
  arrivesAt?: Maybe<Scalars['BigInt']>;
  items?: Maybe<Array<ShipmentItemInput>>;
  retailerId?: Maybe<Scalars['String']>;
  status?: Maybe<ShipmentStatus>;
};

export type Waste = {
  _id: Scalars['String'];
  amount: Scalars['BigInt'];
  createdAt: Scalars['BigInt'];
  inventoryId: Scalars['String'];
  reason: Maybe<Scalars['String']>;
  requestId: Maybe<Scalars['String']>;
  source: WasteSource;
  updatedAt: Scalars['BigInt'];
};

export type WasteFilters = {
  _id?: Maybe<StringFilters>;
  amount?: Maybe<NumberFilters>;
  createdAt?: Maybe<NumberFilters>;
  inventoryId?: Maybe<StringFilters>;
  reason?: Maybe<StringFilters>;
  requestId?: Maybe<StringFilters>;
  source?: Maybe<WasteSourceFilters>;
  updatedAt?: Maybe<NumberFilters>;
};

export type WasteSortBy = {
  amount?: Maybe<SortMethod>;
  createdAt?: Maybe<SortMethod>;
};

export const enum WasteSource {
  Expired = 'expired',
  Mistake = 'mistake'
};

export type WasteSourceFilters = {
  eq?: Maybe<WasteSource>;
  in?: Maybe<Array<Maybe<WasteSource>>>;
  ne?: Maybe<WasteSource>;
  nin?: Maybe<Array<Maybe<WasteSource>>>;
};
