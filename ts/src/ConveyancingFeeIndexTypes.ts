// Typed models for the ConveyancingFeeIndex SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Enquiry {
  answers: Record<string, any>
  confirmation?: string
  consent: boolean
}

export interface EnquiryCreateData {
  answers: Record<string, any>
  confirmation?: string
  consent: boolean
}

export interface Guide {
  filterKey?: string
  filterValue?: string
  option?: string
}

export interface GuideCreateData {
  filterKey?: string
  filterValue?: string
  option?: string
}

export interface Mcp {
  id?: string
  jsonrpc: any
  method: string
  params?: Record<string, any>
}

export interface McpLoadMatch {
  id: string
  jsonrpc?: any
  method?: string
  params?: Record<string, any>
}

export interface McpCreateData {
  id?: string
  jsonrpc: any
  method: string
  params?: Record<string, any>
}

