import asyncio
from playwright.async_api import async_playwright
import re

SEED_STR = """
Seed 27
Seed 28
Seed 29
Seed 30
Seed 31
Seed 32
Seed 33
Seed 34
Seed 35
Seed 36
"""

async def solve():
    total_sum = 0
    seeds = re.findall(r"Seed\s+(\d+)", SEED_STR)
    
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()
        
        for seed_str in seeds:
            seed = int(seed_str)
            url = f"https://sanand0.github.io/tdsdata/js_table/?seed={seed}"
            await page.goto(url)
            
            await page.wait_for_selector('#table table')
            
            numbers = await page.evaluate('''() => {
                let sum = 0;
                const tds = document.querySelectorAll('#table table td');
                for (const td of tds) {
                    const val = parseFloat(td.innerText);
                    if (!isNaN(val)) {
                        sum += val;
                    }
                }
                return sum;
            }''')
            
            total_sum += numbers
            
        await browser.close()
        
    print(total_sum)

if __name__ == '__main__':
    asyncio.run(solve())
