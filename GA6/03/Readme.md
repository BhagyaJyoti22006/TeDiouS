DuckDB SQL query:-  
```
WITH StoreSales AS (
    SELECT 
        s.store_id,
        s.square_footage,
        SUM(sd.monthly_sales) AS total_sales
    FROM stores s
    JOIN sales_data sd ON s.store_id = sd.store_id
    WHERE s.location = 'Brooklynberg'
      AND s.square_footage >= 3000
      AND EXTRACT(month FROM sd.sale_date) >= 3
    GROUP BY s.store_id, s.square_footage
)
SELECT
    REGR_SLOPE(total_sales, square_footage) AS slope,
    REGR_INTERCEPT(total_sales, square_footage) AS intercept,
    REGR_R2(total_sales, square_footage) AS r_squared
FROM StoreSales;
```

