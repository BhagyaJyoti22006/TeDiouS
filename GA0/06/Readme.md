Corrected HTML:-  
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Elevation Change from Sea Level Reference</title>
  <script src="https://cdn.jsdelivr.net/npm/chart.js@4/dist/chart.umd.min.js"></script>
  <style>
    :root {
      color-scheme: light dark;
      --bg: white;
      --text: rgb(33, 37, 41);
      --subtext: rgb(108, 117, 125);
    }
    @media (prefers-color-scheme: dark) {
      :root {
        --bg: rgb(33, 37, 41);
        --text: rgb(248, 249, 250);
        --subtext: rgb(173, 181, 189);
      }
    }
    body { font-family: sans-serif; margin: 16px; background: var(--bg); color: var(--text); }
    h2 { font-size: 1rem; margin-bottom: 4px; }
    p  { font-size: 0.8rem; color: var(--subtext); margin-bottom: 12px; }
    canvas { max-height: 280px; }
  </style>
</head>
<body>
  <h2>Elevation Change from Sea Level Reference</h2>
  <p>Terrain elevation change (m) relative to local sea-level reference, from -85 m to +210 m</p>

  <canvas id="chart"></canvas>
  
  <script>
    /* diverging color scheme */
    /* EXPLANATION: one-directional ramp makes below-sea-level zones appear as low-elevation positive values, hiding that they are below the reference */

    const colors = ["#d73027", "#fdae61", "#ffffff", "#d9ef8b", "#a6d96a", "#66bd63", "#1a9850"];

    new Chart(document.getElementById('chart'), {
      type: 'bar',
      data: {
        labels: ["Zone A","Zone B","Zone C","Zone D","Zone E","Zone F","Zone G"],
        datasets: [{
          label: 'Elevation Change from Sea Level Reference',
          data: [-85,-30,0,25,70,140,210],
          backgroundColor: colors,
          borderColor: colors,
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: { y: { beginAtZero: false } }
      }
    });
  </script>
</body>
</html>
```

