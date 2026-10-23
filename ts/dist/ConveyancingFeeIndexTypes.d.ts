export interface Enquiry {
    answers: Record<string, any>;
    confirmation?: string;
    consent: boolean;
}
export interface EnquiryCreateData {
    answers: Record<string, any>;
    confirmation?: string;
    consent: boolean;
}
export interface Guide {
    filterKey?: string;
    filterValue?: string;
    option?: string;
}
export interface GuideCreateData {
    filterKey?: string;
    filterValue?: string;
    option?: string;
}
export interface Mcp {
    id?: string;
    jsonrpc: any;
    method: string;
    params?: Record<string, any>;
}
export interface McpLoadMatch {
    id: string;
    jsonrpc?: any;
    method?: string;
    params?: Record<string, any>;
}
export interface McpCreateData {
    id?: string;
    jsonrpc: any;
    method: string;
    params?: Record<string, any>;
}
