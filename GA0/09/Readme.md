Correct dbt model:-  
```
{{ config(
    materialized='table',
    tags=['operations', 'returns'],
    meta={
        'owner': 'operations_team',
        'freshness': {'warn_after': {'count': 24, 'period': 'hour'}}
    }
) }}

with returns as (
    select *
    from {{ ref('stg_returns') }}
    where cast(return_date as date) >= current_date - interval '45 days'
),

shipments as (
    select *
    from {{ ref('stg_shipments') }}
),

returns_with_shipments as (

    select
        r.return_id,
        r.order_id,
        r.return_date,

        s.warehouse_id,

        r.return_reason,
        r.refund_amount,
        r.status as return_status,
        s.shipped_date,
        s.delivered_date,

        coalesce(r.processing_hours, 0) as processing_hours,

        case
            when lower(r.return_reason) like '%refund%' then 'refund'
            when lower(r.return_reason) like '%exchange%' then 'exchange'
            when lower(r.return_reason) like '%defect%' then 'defective'
            else 'other'
        end as return_category

    from returns r
    left join shipments s
        on r.order_id = s.order_id
),

daily_metrics as (

    select
        date_trunc('day', return_date) as report_date,
        warehouse_id,

        count(*) as total_returns,
        avg(processing_hours) as avg_processing_hours,
        sum(coalesce(refund_amount, 0)) as total_refund_amount,

        count(case when return_category = 'refund' then 1 end) as refund_count,
        count(case when return_category = 'exchange' then 1 end) as exchange_count,
        count(case when return_category = 'defective' then 1 end) as defective_count

    from returns_with_shipments
    group by 1,2
)

select
    report_date,
    warehouse_id,
    total_returns,
    round(avg_processing_hours, 2) as avg_processing_hours,
    round(total_refund_amount, 2) as total_refund_amount,
    refund_count,
    exchange_count,
    defective_count

from daily_metrics
order by report_date desc
```

