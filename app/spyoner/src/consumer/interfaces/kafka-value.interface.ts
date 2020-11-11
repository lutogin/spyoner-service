export interface IKafkaValue {
  topic: string,
  web_id?: string,
  user_id: string,
  service_b2b?: number[],
  payment_type_id?: number[],
  payment_summ?: number[],
  order_project?: number[],
  order_direction?: number[],
  event_id?: string,
  billing_service_id?: number[],
  billing_order_id?: number[]
}
